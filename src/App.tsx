import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AdminLogin from './components/AdminLogin';
import { manualData as initialData, ProgramData, ManualSection, ProgramCategory } from './data/manualData';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers';

import { 
  Layout, 
  Monitor, 
  Smartphone, 
  Database, 
  Info, 
  Search,
  ChevronRight,
  ChevronLeft,
  Menu,
  Edit3,
  Eye,
  Plus,
  Trash2,
  Save,
  CheckCircle2,
  Upload,
  ArrowUp,
  ArrowDown,
  Youtube,
  Columns,
  GripVertical
} from 'lucide-react';

function App() {
  const [data, setData] = useState<ProgramData[]>(initialData);
  const [activeProgramId, setActiveProgramId] = useState(data[0]?.id);
  const [activeCategoryId, setActiveCategoryId] = useState(data[0]?.categories[0]?.id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Case 1: Reordering Programs
    if (data.some(p => p.id === activeId)) {
      setData((items) => {
        const oldIndex = items.findIndex((p) => p.id === activeId);
        const newIndex = items.findIndex((p) => p.id === overId);
        return arrayMove(items, oldIndex, newIndex);
      });
      return;
    }

    // Case 2: Reordering Categories or Subcategories (within same parent)
    const newData = [...data];
    let found = false;

    const reorderInList = (list: ProgramCategory[]) => {
      const oldIndex = list.findIndex(c => c.id === activeId);
      const newIndex = list.findIndex(c => c.id === overId);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const moved = arrayMove(list, oldIndex, newIndex);
        // Mutate in place for this recursive helper
        list.splice(0, list.length, ...moved);
        found = true;
        return true;
      }

      for (const cat of list) {
        if (cat.subCategories && reorderInList(cat.subCategories)) return true;
      }
      return false;
    };

    for (const program of newData) {
      if (reorderInList(program.categories)) break;
    }

    if (found) {
      setData(newData);
    }
  };

  // Listen for hash changes to trigger admin login
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin' && !isAdmin) {
        setShowLogin(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on initial load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAdmin]);

  const activeProgram = useMemo(() => 
    data.find(p => p.id === activeProgramId) || data[0], 
  [activeProgramId, data]);

  // Helper to find category recursively
  const findCategoryWithMeta = useCallback((categories: ProgramCategory[], targetId: string): { cat: ProgramCategory; parentList: ProgramCategory[] } | null => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === targetId) return { cat: categories[i], parentList: categories };
      if (categories[i].subCategories) {
        const found = findCategoryWithMeta(categories[i].subCategories!, targetId);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const activeCategory = useMemo(() => {
    if (!activeProgram) return null;
    const result = findCategoryWithMeta(activeProgram.categories, activeCategoryId);
    return result?.cat || activeProgram.categories[0];
  }, [activeProgram, activeCategoryId, findCategoryWithMeta]);

  // Recursively flatten all categories for search
  const flattenSectionsForSearch = useCallback((categories: ProgramCategory[]): ManualSection[] => {
    let sections: ManualSection[] = [];
    categories.forEach(c => {
      sections = [...sections, ...c.sections];
      if (c.subCategories) {
        sections = [...sections, ...flattenSectionsForSearch(c.subCategories)];
      }
    });
    return sections;
  }, []);

  const filteredSections = useMemo(() => {
    if (!searchQuery || !activeProgram) return activeCategory?.sections || [];
    
    const allSections = flattenSectionsForSearch(activeProgram.categories);
    return allSections.filter(section => 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeProgram, activeCategory, searchQuery, flattenSectionsForSearch]);

  // Auto-save logic
  const saveToServer = useCallback(async (newData: ProgramData[]) => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/save-manual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });
      if (response.ok) {
        setLastSaved(new Date());
      }
    } catch (err) {
      console.error('Save failed:', err);
    } finally {
      setIsSaving(false);
    }
  }, []);

  // Debounced save
  useEffect(() => {
    if (isAdmin) {
      const timer = setTimeout(() => {
        saveToServer(data);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [data, isAdmin, saveToServer]);

  const handleProgramChange = (pId: string) => {
    setActiveProgramId(pId);
    setSearchQuery('');
    const program = data.find(p => p.id === pId);
    if (program && program.categories.length > 0) {
      setActiveCategoryId(program.categories[0].id);
    }
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (cId: string) => {
    setActiveCategoryId(cId);
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  // Recursively flatten all categories for pagination
  const flattenAllCategories = useCallback((categories: ProgramCategory[], program: ProgramData): any[] => {
    let flat: any[] = [];
    categories.forEach(c => {
      flat.push({ ...c, programId: program.id, programName: program.name });
      if (c.subCategories) {
        flat = [...flat, ...flattenAllCategories(c.subCategories, program)];
      }
    });
    return flat;
  }, []);

  const flatCategories = useMemo(() => 
    data.flatMap(p => flattenAllCategories(p.categories, p)),
  [data, flattenAllCategories]);

  const currentIndex = flatCategories.findIndex(c => c.id === activeCategoryId && c.programId === activeProgramId);
  const prevCategory = flatCategories[currentIndex - 1];
  const nextCategory = flatCategories[currentIndex + 1];

  // Edit Handlers
  const updateSection = (idx: number, updates: Partial<ManualSection>) => {
    const newData = [...data];
    const pIdx = newData.findIndex(p => p.id === activeProgramId);
    if (pIdx === -1) return;
    const result = findCategoryWithMeta(newData[pIdx].categories, activeCategoryId);
    if (result) {
      result.cat.sections[idx] = { ...result.cat.sections[idx], ...updates };
      setData(newData);
    }
  };

  const moveSection = (idx: number, direction: 'up' | 'down') => {
    const newData = [...data];
    const pIdx = newData.findIndex(p => p.id === activeProgramId);
    if (pIdx === -1) return;
    const result = findCategoryWithMeta(newData[pIdx].categories, activeCategoryId);
    if (result) {
      const sections = [...result.cat.sections];
      if (direction === 'up' && idx > 0) {
        [sections[idx - 1], sections[idx]] = [sections[idx], sections[idx - 1]];
      } else if (direction === 'down' && idx < sections.length - 1) {
        [sections[idx], sections[idx + 1]] = [sections[idx + 1], sections[idx]];
      }
      result.cat.sections = sections;
      setData(newData);
    }
  };

  const addSection = (atIndex?: number) => {
    const newData = [...data];
    const pIdx = newData.findIndex(p => p.id === activeProgramId);
    if (pIdx === -1) return;
    const result = findCategoryWithMeta(newData[pIdx].categories, activeCategoryId);
    if (result) {
      const newSection: ManualSection = {
        title: 'หัวข้อใหม่',
        type: 'markdown',
        content: 'ระบุเนื้อหาที่นี่ (รองรับ Markdown)',
        images: [],
        layout: 'full'
      };
      if (typeof atIndex === 'number') {
        result.cat.sections.splice(atIndex, 0, newSection);
      } else {
        result.cat.sections.push(newSection);
      }
      setData(newData);
    }
  };

  const deleteSection = (idx: number) => {
    const newData = [...data];
    const pIdx = newData.findIndex(p => p.id === activeProgramId);
    if (pIdx === -1) return;
    const result = findCategoryWithMeta(newData[pIdx].categories, activeCategoryId);
    if (result) {
      result.cat.sections.splice(idx, 1);
      setData(newData);
    }
  };

  const handleImageUpload = async (sectionIdx: number, file: File) => {
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    try {
      const response = await fetch(`/api/upload-image?filename=${encodeURIComponent(filename)}`, {
        method: 'POST',
        body: file
      });
      if (response.ok) {
        const newData = [...data];
        const pIdx = newData.findIndex(p => p.id === activeProgramId);
        if (pIdx === -1) return;
        const result = findCategoryWithMeta(newData[pIdx].categories, activeCategoryId);
        if (result) {
          const images = [...(result.cat.sections[sectionIdx].images || [])];
          images.push(filename);
          result.cat.sections[sectionIdx].images = images;
          setData(newData);
        }
      }
    } catch (err) {
      console.error('Upload failed:', err);
      alert('อัปโหลดรูปภาพไม่สำเร็จ');
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'maxcare': return <Monitor size={18} />;
      case 'maxsystemcare': return <Monitor size={18} />;
      case 'maxtwitter': return <Monitor size={18} />;
      case 'maxreup': return <Monitor size={18} />;
      case 'maxcarepage': return <Monitor size={18} />;
      case 'maxphonefarm': return <Smartphone size={18} />;
      case 'maxcloud': return <Smartphone size={18} />;
      case 'maxdata': return <Database size={18} />;
      case 'general': return <Info size={18} />;
      default: return <Layout size={18} />;
    }
  };

  const updateProgramName = (id: string, newName: string) => {
    setData(items => {
      const idx = items.findIndex(p => p.id === id);
      if (idx === -1) return items;
      const newData = [...items];
      newData[idx] = { ...newData[idx], name: newName };
      return newData;
    });
  };

  const deleteProgram = (id: string) => {
    if (confirm('ลบโปรแกรมนี้?')) {
      setData(items => items.filter(p => p.id !== id));
    }
  };

  const addMainCategory = (programId: string) => {
    setData(items => {
      const pIdx = items.findIndex(p => p.id === programId);
      if (pIdx === -1) return items;
      const newData = [...items];
      newData[pIdx].categories.push({
        id: 'cat_' + Math.random().toString(36).substr(2, 5),
        name: 'หมวดหมู่หลักใหม่',
        sections: []
      });
      return newData;
    });
  };

  return (
    <div className="gitbook-layout">
      {showLogin && (
        <AdminLogin 
          onLogin={(success) => {
            if (success) {
              setIsAdmin(true);
              setShowLogin(false);
            }
          }}
          onClose={() => setShowLogin(false)}
        />
      )}
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div style={{ background: 'var(--primary-purple)', color: 'white', padding: '5px', borderRadius: '4px' }}>
              <Menu size={20} />
            </div>
            Minsoft Manual
          </div>
        </div>

        <nav>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
          >
            <SortableContext items={data.map(p => p.id)} strategy={verticalListSortingStrategy}>
              {data.map(program => (
                <SortableProgramItem
                  key={program.id}
                  program={program}
                  activeProgramId={activeProgramId}
                  onProgramChange={handleProgramChange}
                  isAdmin={isAdmin}
                  onUpdateName={updateProgramName}
                  onDelete={deleteProgram}
                  getIcon={getIcon}
                >
                  {activeProgramId === program.id && (
                    <div className="nav-sub-group">
                      <SortableContext items={program.categories.map(c => c.id)} strategy={verticalListSortingStrategy}>
                        {program.categories.map(category => (
                          <SortableNavItem 
                            key={category.id}
                            category={category}
                            activeId={activeCategoryId}
                            onSelect={handleCategoryChange}
                            isAdmin={isAdmin}
                            onUpdateName={updateCategoryName}
                            onAddSub={addSubCategory}
                            onDelete={deleteCategory}
                          />
                        ))}
                      </SortableContext>
                      {isAdmin && (
                        <div 
                          className="nav-sub-item" 
                          style={{ color: 'var(--primary-purple)', opacity: 0.7, paddingLeft: '24px' }}
                          onClick={() => addMainCategory(program.id)}
                        >
                          <Plus size={14} /> เพิ่มหมวดหมู่หลัก
                        </div>
                      )}
                    </div>
                  )}
                </SortableProgramItem>
              ))}
            </SortableContext>
          </DndContext>

          {isAdmin && (
            <div 
              className="nav-item" 
              style={{ color: 'var(--primary-purple)', fontWeight: 600 }}
              onClick={() => {
                const name = prompt('ชื่อโปรแกรมใหม่');
                if (name) {
                  const newData = [...data, {
                    id: name.toLowerCase().replace(/\s+/g, ''),
                    name,
                    categories: []
                  }];
                  setData(newData);
                }
              }}
            >
              <Plus size={18} /> เพิ่มโปรแกรมใหม่
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <div className="breadcrumb">
            <span>{activeProgram?.name}</span>
            <span>{activeCategory?.name}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {isAdmin && (
              <div style={{ fontSize: '12px', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {isSaving ? (
                  <>บันทึกอัตโนมัติ...</>
                ) : lastSaved ? (
                  <><CheckCircle2 size={14} color="#4caf50" /> บันทึกแล้ว {lastSaved.toLocaleTimeString()}</>
                ) : null}
              </div>
            )}

            {isAdmin && (
              <button 
                onClick={() => {
                  setIsAdmin(false);
                  window.location.hash = '';
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: 'var(--primary-red)',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                <Eye size={18} /> ดูโหมดคู่มือ
              </button>
            )}

            {!isAdmin && (
              <div className="search-container">
                <Search className="search-icon" size={16} />
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="ค้นหาคู่มือ..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
          </div>
        </header>

        <div className="content-body">
          {searchQuery ? (
            <div>
              <h1>ผลการค้นหา</h1>
              {filteredSections.map((section, idx) => (
                <SectionCard 
                  key={idx} 
                  idx={idx}
                  section={section} 
                  isAdmin={false} 
                  onUpdate={() => {}} 
                  onDelete={() => {}} 
                  onMove={() => {}} 
                  onUpload={() => Promise.resolve()} 
                />
              ))}
              {filteredSections.length === 0 && <p>ไม่พบผลการค้นหาสำหรับ "{searchQuery}"</p>}
            </div>
          ) : (
            <div>
              <h1>{isAdmin ? (
                <input 
                  value={activeCategory?.name} 
                  onChange={(e) => {
                     const newData = [...data];
                     const pIdx = newData.findIndex(p => p.id === activeProgramId);
                     if (pIdx === -1) return;
                     const result = findCategoryWithMeta(newData[pIdx].categories, activeCategoryId);
                     if (result) {
                        result.cat.name = e.target.value;
                        setData(newData);
                     }
                  }}
                  style={{ fontSize: 'inherit', font: 'inherit', fontWeight: 'inherit', border: 'none', borderBottom: '2px solid var(--primary-purple)', width: '100%', outline: 'none' }}
                />
              ) : activeCategory?.name}</h1>

              {activeCategory?.sections.map((section, idx) => (
                <div key={idx}>
                  {isAdmin && (
                    <div 
                      className="insert-divider" 
                      onClick={() => addSection(idx)}
                      title="เพิ่มหัวข้อที่นี่"
                    >
                      <Plus size={14} /> แทรกหัวข้อตรงนี้
                    </div>
                  )}
                  <SectionCard 
                    idx={idx}
                    section={section} 
                    isAdmin={isAdmin} 
                    onUpdate={(updates) => updateSection(idx, updates)} 
                    onDelete={() => deleteSection(idx)}
                    onMove={(dir) => moveSection(idx, dir)}
                    onUpload={(file) => handleImageUpload(idx, file)}
                  />
                </div>
              ))}

              {isAdmin && (
                <button 
                  onClick={() => addSection()}
                  style={{
                    width: '100%',
                    padding: '20px',
                    border: '2px dashed var(--border-color)',
                    background: 'none',
                    borderRadius: '8px',
                    color: 'var(--text-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <Plus size={20} /> เพิ่มหัวข้อใหม่
                </button>
              )}

              {!isAdmin && (
                <div className="footer-nav">
                  {prevCategory ? (
                    <a 
                      href="#" 
                      className="nav-button"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProgramId(prevCategory.programId);
                        setActiveCategoryId(prevCategory.id);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span className="label">ก่อนหน้า</span>
                      <span className="title">
                        <ChevronLeft size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                        {prevCategory.name}
                      </span>
                    </a>
                  ) : <div></div>}

                  {nextCategory ? (
                    <a 
                      href="#" 
                      className="nav-button"
                      style={{ textAlign: 'right' }}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProgramId(nextCategory.programId);
                        setActiveCategoryId(nextCategory.id);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span className="label">ถัดไป</span>
                      <span className="title">
                        {nextCategory.name}
                        <ChevronRight size={16} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
                      </span>
                    </a>
                  ) : <div></div>}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SectionCard({ 
  section, 
  isAdmin, 
  onUpdate,
  onDelete,
  onMove,
  onUpload,
  idx
}: { 
  section: ManualSection, 
  isAdmin: boolean,
  onUpdate: (u: Partial<ManualSection>) => void,
  onDelete: () => void,
  onMove: (dir: 'up' | 'down') => void,
  onUpload: (file: File) => Promise<void>,
  idx: number
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const renderContent = () => (
    <div className="markdown-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({node, ...props}) => <img {...props} style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: 'var(--shadow)', margin: '20px 0' }} loading="lazy" />
        }}
      >
        {section.content}
      </ReactMarkdown>
    </div>
  );

  const renderMedia = () => {
    // Filter out images that are already in the markdown content to avoid duplication
    const embeddedImages = section.content.match(/!\[.*?\]\(\/images\/(.*?)\)/g)?.map(m => m.match(/\/images\/(.*?)\)/)?.[1]) || [];
    const galleryImages = (section.images || []).filter(img => !embeddedImages.includes(img));

    return (
      <div className="media-gallery">
        {section.youtubeId && (
          <div className="video-container">
            <iframe 
              src={`https://www.youtube.com/embed/${section.youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {galleryImages.map((img, i) => (
          <div key={i} className="image-container" style={{ position: 'relative' }}>
            {isAdmin && (
              <button 
                onClick={() => {
                  const newImages = [...section.images!];
                  const idx = newImages.indexOf(img);
                  if (idx > -1) newImages.splice(idx, 1);
                  onUpdate({ images: newImages });
                }}
                style={{ position: 'absolute', right: 10, top: 10, background: 'white', borderRadius: '50%', border: 'none', padding: '5px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 5 }}
              >
                <Trash2 size={14} color="red" />
              </button>
            )}
            <img src={`/images/${img}`} alt={`${section.title} ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="card" style={{ position: 'relative', marginBottom: '40px' }}>
      {isAdmin && (
        <div style={{ position: 'absolute', right: 0, top: -30, display: 'flex', gap: '8px' }}>
          <button onClick={() => onMove('up')} style={{ background: 'none', border: 'none', color: 'var(--sidebar-text)', cursor: 'pointer' }} title="เลื่อนขึ้น"><ArrowUp size={18} /></button>
          <button onClick={() => onMove('down')} style={{ background: 'none', border: 'none', color: 'var(--sidebar-text)', cursor: 'pointer' }} title="เลื่อนลง"><ArrowDown size={18} /></button>
          <button onClick={onDelete} style={{ background: 'none', border: 'none', color: 'var(--primary-red)', cursor: 'pointer' }} title="ลบหัวข้อ"><Trash2 size={18} /></button>
        </div>
      )}

      {isAdmin && (
        <div className="admin-controls-inline">
          <div className="control-item">
            <Columns size={14} />
            <select 
              value={section.layout || 'full'} 
              onChange={(e) => onUpdate({ layout: e.target.value as any })}
              className="control-select"
            >
              <option value="full">เต็มความกว้าง (Full Width)</option>
              <option value="split">แบ่งคอลัมน์ (Text | Media)</option>
            </select>
          </div>
          <div className="control-item">
            <Youtube size={14} />
            <input 
              type="text" 
              placeholder="YouTube ID (เช่น dQw4w9WgXcQ)"
              value={section.youtubeId || ''}
              onChange={(e) => onUpdate({ youtubeId: e.target.value })}
              className="control-input"
              style={{ width: '180px' }}
            />
          </div>
          <div className="control-item">
             <span style={{ fontSize: '11px', color: '#888' }}>* ใช้ # สำหรับหัวข้อใหญ่, [ข้อความ](ลิงก์) สำหรับลิงก์</span>
          </div>
        </div>
      )}

      {isAdmin ? (
        <input 
          value={section.title} 
          onChange={(e) => onUpdate({ title: e.target.value })}
          placeholder="ชื่อหัวข้อ"
          style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            border: 'none', 
            borderLeft: '4px solid var(--primary-purple)', 
            paddingLeft: '15px', 
            marginBottom: '16px',
            width: '100%',
            outline: 'none',
            background: 'none'
          }}
        />
      ) : (
        <h2 style={{ borderLeft: '4px solid var(--primary-purple)', paddingLeft: '15px' }}>{section.title}</h2>
      )}
      
      {isAdmin ? (
        <textarea 
          value={section.content} 
          onChange={(e) => onUpdate({ content: e.target.value })}
          placeholder="เนื้อหา (Markdown)"
          style={{ 
            width: '100%', 
            minHeight: '200px', 
            fontFamily: 'monospace', 
            padding: '15px',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}
        />
      ) : (
        <div className={section.layout === 'split' ? 'section-split' : ''}>
          <div className="section-text">
            {renderContent()}
          </div>
          <div className="section-media">
            {renderMedia()}
          </div>
        </div>
      )}

      {isAdmin && (
        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
            style={{ display: 'none' }} 
            accept="image/*"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
              background: 'white',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            <Upload size={14} /> อัปโหลดรูปภาพ
          </button>
          
          <input 
            type="text" 
            placeholder="ชื่อไฟล์ภาพ (เช่น image100.png)" 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const val = (e.target as HTMLInputElement).value;
                if (val) {
                  onUpdate({ images: [...(section.images || []), val] });
                  (e.target as HTMLInputElement).value = '';
                }
              }
            }}
            style={{ flex: 1, minWidth: '200px', padding: '8px', fontSize: '13px', border: '1px solid var(--border-color)', borderRadius: '4px' }}
          />
          
          {isAdmin && section.layout === 'full' && (
            <div style={{ width: '100%', marginTop: '10px' }}>
               {renderMedia()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

// --- Sortable Components ---

function SortableProgramItem({ 
  program, 
  activeProgramId, 
  onProgramChange, 
  isAdmin, 
  onUpdateName, 
  onDelete,
  getIcon,
  children
}: {
  program: ProgramData,
  activeProgramId: string,
  onProgramChange: (id: string) => void,
  isAdmin: boolean,
  onUpdateName: (id: string, name: string) => void,
  onDelete: (id: string) => void,
  getIcon: (id: string) => React.ReactNode,
  children?: React.ReactNode
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: program.id, disabled: !isAdmin });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1
  };

  return (
    <div ref={setNodeRef} style={style} className="nav-group">
      <div 
        className={`nav-item ${activeProgramId === program.id ? 'active' : ''}`}
        onClick={() => onProgramChange(program.id)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, overflow: 'hidden' }}>
          {isAdmin && (
            <div {...attributes} {...listeners} className="drag-handle" style={{ cursor: 'grab', color: '#ccc' }}>
              <GripVertical size={14} />
            </div>
          )}
          {getIcon(program.id)}
          {isAdmin ? (
            <input 
              value={program.name} 
              onChange={(e) => onUpdateName(program.id, e.target.value)}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', width: '100%', outline: 'none' }}
            />
          ) : <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{program.name}</span>}
        </div>
        {isAdmin && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete(program.id);
            }}
            style={{ background: 'none', border: 'none', color: 'var(--primary-red)', cursor: 'pointer', flexShrink: 0 }}
          >
            <Trash2 size={14} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function SortableNavItem({ 
  category, 
  level = 0, 
  activeId, 
  onSelect, 
  isAdmin, 
  onUpdateName, 
  onAddSub, 
  onDelete 
}: { 
  category: ProgramCategory, 
  level?: number, 
  activeId: string, 
  onSelect: (id: string) => void,
  isAdmin: boolean,
  onUpdateName: (id: string, name: string) => void,
  onAddSub: (parentId: string) => void,
  onDelete: (id: string) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: category.id, disabled: !isAdmin });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1
  };

  const hasSubs = category.subCategories && category.subCategories.length > 0;
  const isExpanded = activeId === category.id || (category.subCategories?.some(sc => sc.id === activeId));
  
  return (
    <div 
      ref={setNodeRef} 
      className="nav-item-container" 
      style={{ 
        ...style, 
        marginLeft: level > 0 ? '16px' : '0' 
      }}
    >
      <div 
        className={`nav-sub-item ${activeId === category.id ? 'active' : ''}`}
        onClick={() => onSelect(category.id)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
          {isAdmin && (
            <div 
              {...attributes} 
              {...listeners} 
              className="drag-handle" 
              style={{ 
                cursor: 'grab', 
                color: '#999',
                display: 'flex',
                alignItems: 'center',
                padding: '4px 0 4px 4px'
              }}
            >
              <GripVertical size={12} />
            </div>
          )}
          {hasSubs && (
            <ChevronRight size={14} style={{ transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
          )}
          {isAdmin ? (
            <input 
              value={category.name} 
              onChange={(e) => onUpdateName(category.id, e.target.value)}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', width: '100%', outline: 'none' }}
            />
          ) : <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.name}</span>}
        </div>
        {isAdmin && (
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            <button 
              onClick={(e) => { e.stopPropagation(); onAddSub(category.id); }} 
              style={{ background: 'none', border: 'none', color: 'var(--primary-purple)', cursor: 'pointer', padding: '2px' }}
              title="เพิ่มหมวดหมู่ย่อย"
            >
              <Plus size={12} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete(category.id); }} 
              style={{ background: 'none', border: 'none', color: 'var(--primary-red)', cursor: 'pointer', padding: '2px' }}
              title="ลบหมวดหมู่"
            >
              <Trash2 size={12} />
            </button>
          </div>
        )}
      </div>
      
      {(isExpanded || isAdmin) && category.subCategories && (
        <div className="nav-sub-group">
          <SortableContext items={category.subCategories.map(sc => sc.id)} strategy={verticalListSortingStrategy}>
            {category.subCategories.map(sub => (
              <SortableNavItem 
                key={sub.id} 
                category={sub} 
                level={level + 1} 
                activeId={activeId} 
                onSelect={onSelect}
                isAdmin={isAdmin}
                onUpdateName={onUpdateName}
                onAddSub={onAddSub}
                onDelete={onDelete}
              />
            ))}
          </SortableContext>
        </div>
      )}
    </div>
  );
}
