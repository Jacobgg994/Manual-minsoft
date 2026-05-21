
export interface ManualSection {
  title: string;
  content: string | string[] | { step: string; text: string }[];
  type: 'text' | 'list' | 'steps' | 'alert' | 'image-placeholder';
  images?: string[];
}

export interface ProgramCategory {
  id: string;
  name: string;
  sections: ManualSection[];
}

export interface ProgramData {
  id: string;
  name: string;
  categories: ProgramCategory[];
}

export const manualData: ProgramData[] = [
  {
    "id": "minsoft_thailand_nisg5",
    "name": "Minsoft-Thailand",
    "categories": [
      {
        "id": "intro",
        "name": "Introduction",
        "sections": [
          {
            "title": "ระบบสำหรับฟาร์มบัญชี มีโปรแกรมให้เลือกใช้งานหลากหลาย",
            "content": "<p>รวมวิธีการใช้งานโปรแกรม Maxcare</p>",
            "type": "markdown",
            "images": [
              "image529.png"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maxcare_suite",
    "name": "Maxcare",
    "categories": [
      {
        "id": "maxcare_usage_group",
        "name": "วิธีใช้งานโปรแกรม",
        "sections": [],
        "subCategories": []
      },
      {
        "id": "maxcare_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย Maxcare",
        "sections": [],
        "subCategories": []
      }
    ]
  },
  {
    "id": "maxcare_page_suite",
    "name": "MaxCare Page",
    "categories": [
      {
        "id": "maxcare_page_usage_group",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [],
        "subCategories": []
      },
      {
        "id": "maxcare_page_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย MaxCarePage",
        "sections": [],
        "subCategories": []
      }
    ]
  },
  {
    "id": "maxsystemcare_suite",
    "name": "MaxSystemCare",
    "categories": [
      {
        "id": "maxsystemcare_usage_group",
        "name": "วิธีใช้งานโปรแกรม",
        "sections": [],
        "subCategories": []
      },
      {
        "id": "maxsystemcare_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย MaxSystemCare",
        "sections": [],
        "subCategories": []
      }
    ]
  },
  {
    "id": "maxdata_suite",
    "name": "MaxData",
    "categories": [
      {
        "id": "maxdata_usage_group",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [],
        "subCategories": []
      }
    ]
  },
  {
    "id": "maxphonefarm_suite",
    "name": "MaxPhoneFarm",
    "categories": []
  },
  {
    "id": "maxcloudphone_suite",
    "name": "MaxCloudPhone",
    "categories": [
      {
        "id": "maxcloud_mobile_config",
        "name": "การตั้งค่ามือถือ",
        "sections": [],
        "subCategories": []
      },
      {
        "id": "maxcloud_basic_config",
        "name": "การตั้งค่าเบื้องต้น",
        "sections": [],
        "subCategories": []
      }
    ]
  },
  {
    "id": "minsoftware_techniques_suite",
    "name": "เทคนิคการใช้งานโปรแกรม Minsoftware",
    "categories": [
      {
        "id": "tech_maxsystemcare",
        "name": "เทคนิคใช้งาน MaxsystemCare",
        "sections": [],
        "subCategories": [
          {
            "id": "tech_msc_post",
            "name": "MaxsystemCare แนะนำการโพสต์",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_msc_spam",
            "name": "MaxsystemCare แนะนำการการสแปม",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_msc_respond",
            "name": "MaxsystemCare แนะนำวิธีการตอบโต้",
            "sections": [],
            "subCategories": []
          }
        ]
      },
      {
        "id": "tech_maxcare",
        "name": "เทคนิคการใช้งานโปรแกรม Maxcare",
        "sections": [],
        "subCategories": [
          {
            "id": "tech_mc_start",
            "name": "MaxCare เทคนิคการเริ่มฟาร์มบัญชีเบื้องต้น",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_mc_add_friend",
            "name": "MaxCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_mc_join_group",
            "name": "MaxCare แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
            "sections": [],
            "subCategories": []
          }
        ]
      },
      {
        "id": "tech_maxcare_page",
        "name": "เทคนิคใช้งาน MaxCare Page",
        "sections": [],
        "subCategories": [
          {
            "id": "tech_mcp_change_info",
            "name": "แนะนำการเปลี่ยนข้อมูลเพจ",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_mcp_join_group",
            "name": "แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_mcp_post_group",
            "name": "แนะนำการโพสต์ตามกลุ่มอัตโนมัติ",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_mcp_buff",
            "name": "แนะนำการบัพเพจ",
            "sections": [],
            "subCategories": []
          },
          {
            "id": "tech_mcp_spam",
            "name": "แนะนำการสแปม",
            "sections": [],
            "subCategories": []
          }
        ]
      },
      {
        "id": "tech_find_id",
        "name": "วิธีการหา ID เฟสบุ๊ค",
        "sections": [],
        "subCategories": []
      },
      {
        "id": "tech_contact",
        "name": "ช่องทางการติดต่อ และสื่อต่างๆ",
        "sections": [],
        "subCategories": []
      }
    ]
  }
];
