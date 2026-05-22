export interface ManualSection {
  title: string;
  content: string;
  type: "markdown";
  images: string[];
  layout?: string;
  youtubeId?: string;
}

export interface ProgramCategory {
  id: string;
  name: string;
  sections: ManualSection[];
  subCategories?: ProgramCategory[];
}

export interface ProgramData {
  id: string;
  name: string;
  categories: ProgramCategory[];
}

export const manualData: ProgramData[] = [
  {
    "id": "minsoftthailand",
    "name": "Minsoft-Thailand",
    "categories": [
      {
        "id": "cat_bujqn",
        "name": "ทั่วไป",
        "sections": [
          {
            "title": "ทั่วไป",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "minsoftthailand.com",
            "content": "ระบบสำหรับฟาร์มบัญชี มีโปรแกรมให้เลือกใช้งานหลากหลาย\n\nเตือนภัย มีผู้ประสงค์ร้ายนำโปรแกรม Maxcare นำไป Crack เพื่อขายแบบถาวร การใช้โปรแกรม Crack อาจทำให้คอมพิวเตอร์เกิดความเสียหาย ทาง Minsoft Thailland จะไม่รับผิดชอบใดๆ เกี่ยวกับความเสียหายที่เกิดจากการใช้โปรแกรม Crack ** การนำโปรแกรมไปขายโดยไม่ได้รับอนุญาต ถือเป็นความผิดการละเมิดลิขสิทธิ์ ** Minsoft Thailand เป็นผู้จัดจำหน่ายผลิตภัณฑ์ของ MINSoftware แต่เพียงผู้เดียวในประเทศไทย\n\n",
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
    "id": "maxcare",
    "name": "Maxcare",
    "categories": [
      {
        "id": "cat_oh6cn",
        "name": "Maxcare วิธีการดาวน์โหลดและติดตั้งโปรแกรม",
        "sections": [
          {
            "title": "Maxcare วิธีการดาวน์โหลดและติดตั้งโปรแกรม",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "เข้าไปยังเว็บไซต์ Minsoft https://app.minsoftthailand.com/\n\nล็อคอินเข้าใช้งาน\n\nไปยังหน้าการจัดการซอร์ฟแวร์\n\n",
            "type": "markdown",
            "images": [
              "image321.png",
              "image570.jpg",
              "image99.jpg"
            ]
          },
          {
            "title": "2. จากนั้นให้คลิกขวาที่คำว่าดาวน์โหลด และกด Copy link address (คัดลอกที่อยู่ลิ้งก์) ไปวางในแท็บใหม่ กด Enter รอจนกว่าจะดาวน์โหลดสำเร็จ",
            "content": "ไฟล์อันตราย\n\nหากโปรแกรมขึ้นแบบในรูปภาพข้างบน\n\nให้คลิก เก็บไฟล์อันตรายไว้ >> เก็บเอาไว้ไม่ว่าอย่างไรก็ตาม\n\n",
            "type": "markdown",
            "images": [
              "image550.png",
              "image206.jpg",
              "image368.jpg"
            ]
          },
          {
            "title": "3. หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxCare.zip ที่โหลดมา จากนั้นสามารถเลือกได้ว่าจะแตกไฟล์แบบไหน",
            "content": "1.Extract files - สามารถเลือกได้ว่าต้องการให้ไปแตกไฟล์ลงที่ไหน\n\n2.Extract to \"MaxReupFacebook\\\" เลือกให้แตกไฟล์ลงที่ Download\n\n",
            "type": "markdown",
            "images": [
              "image744.png"
            ]
          },
          {
            "title": "4. หลังจากแตกไฟล์เสร็จเรียบร้อยแล้ว เข้าไปยังโฟลเดอร์ MaxCare แล้วกด AutoUpdate รอจนกว่าจะอัพเดตเสร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image128.jpg"
            ]
          },
          {
            "title": "5. เข้าใช้งานโปรแกรม ทำการเข้าระบบให้เรียบร้อย",
            "content": "",
            "type": "markdown",
            "images": [
              "image778.jpg"
            ]
          },
          {
            "title": "6. เมื่อเข้าระบบเสร็จแล้ว ให้ไปที่ General configs >> Update chromedriver เพื่ออัพเดตโครมไดรเวอร์",
            "content": "",
            "type": "markdown",
            "images": [
              "image464.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_uzext",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [],
        "subCategories": [
          {
            "id": "cat_9638g",
            "name": "1.วิธีการนำบัญชีเฟสบุ๊คเข้าสู่โปรแกรม Maxcare",
            "sections": [
              {
                "title": "1.วิธีการนำบัญชีเฟสบุ๊คเข้าสู่โปรแกรม Maxcare",
                "content": "อธิบายรายละเอียดแต่ละฟังก์ชั่น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การนำบัญชีเฟสบุ๊คเข้าโปรแกรม Maxcare",
                "content": "หลังจากเปิดโปรแกรมมาแล้ว ให้กดที่ Import accounts เพื่อนำเฟสบุ๊คเข้าระบบ\n\nให้ทำการสร้างไฟล์ขึ้นมา โดยใส่ชื่อตามที่ต้องการได้เลยจากนั้นกด Add\n\nใส่ข้อมูลเฟสลงไป ตามแพทเทิน คั่นด้วยเครื่องหมาย |\n\n",
                "type": "markdown",
                "images": [
                  "image537.png",
                  "image180.png",
                  "image305.png"
                ]
              },
              {
                "title": "ยกตัวอย่างการเลือก Format ตามแพทเทินเฟสบุ๊คที่จะนำเข้า",
                "content": "จากนั้นเลือก format ตามแพทเทินที่เรากรอกเข้าไป แล้วกดติ้กถูกที่ Option เพื่อให้มันเช็คข้อมูล Account ต่างๆด้วย เช่น ชื่อ,เพศ,จำนวนเพื่อน,จำนวนกลุ่ม เป็นต้น\n\nเป็นอันเสร็จสิ้นขั้นตอนการนำเข้าเฟสบุ๊ค\n\n",
                "type": "markdown",
                "images": [
                  "image224.png",
                  "image734.png",
                  "image197.png",
                  "image260.png"
                ]
              }
            ]
          },
          {
            "id": "cat_cuf50",
            "name": "2.อธิบายการตั้งค่าต่างๆเบื้องต้น",
            "sections": []
          },
          {
            "id": "cat_oqcoo",
            "name": "3.อธิบายเมนูฟังก์ชั่นการทำงาน interactive (Maxcare)",
            "sections": [
              {
                "title": "3.อธิบายเมนูฟังก์ชั่นการทำงาน interactive (Maxcare)",
                "content": "การใช้โปรแกรมเถื่อนอาจทำให้คอมพิวตอร์เสียหายได้ และมีความผิดทางกฏหมาย\n\n",
                "type": "markdown",
                "images": [
                  "image208.png",
                  "image564.png"
                ]
              },
              {
                "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
                "content": "Personal Interaction\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Read notification (อ่านข้อความแจ้งเตือน)‌",
                "content": "Count: จำนวน ข้อความแจ้งเตือนที่ต้องการให้อ่าน‌\n\nBreak (s): ระยะเวลาหยุดพัก (วินาที)\n\n",
                "type": "markdown",
                "images": [
                  "image563.png"
                ]
              },
              {
                "title": "2.View Story (ดูสตอรี่)‌",
                "content": "Count stories: จำนวนสตอรี่ที่ดู‌\n\nBreak: ระยะเวลาดีเลย์หลังจากการดูแต่ละสตอรี่‌\n\nExpress feelings: แสดงความรู้สึกต่อสตอรี่ เช่น กดไลค์(Like), กดหัวใจ(Love), กดห่วงใย(Care) เป็นต้น‌\n\nComment by text: รายการข้อความที่จะแสดงความคิดเห็นในสตอรี่‌\n\n",
                "type": "markdown",
                "images": [
                  "image501.png"
                ]
              },
              {
                "title": "3.View Video (ดูวีดีโอ)‌",
                "content": "",
                "type": "markdown",
                "images": [
                  "image115.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: รูปแบบการหยุดทำงาน ตามจำนวนโพส หรือ ตามเวลาที่กำหนด\n\nCount posts: จำนวนโพสที่ดู‌\n\nBreak (s): ระยะเวลาพักก่อนดูโพสถัดไป (วินาที)\n\nView posts (s): คือ เวลาในการดูโพส‌ (วินาที)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบและความรู้สึก",
                "content": "Interaction: การกดความรู้สึก‌\n\nProbability (%): โอกาสที่จะเกิดการกด\n\nReactions: เลือกไอคอนความรู้สึกที่ต้องการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น",
                "content": "Comment by text: การพิมพ์ข้อความตอบกลับ\n\nList Comments: ใส่ข้อความที่ต้องการให้ระบบสุ่มพิมพ์ (1 บรรทัดต่อ 1 ข้อความ)\n\nCreate content with AI: ใช้ AI ช่วยคิดข้อความคอมเมนต์อัตโนมัติ\n\nComment by image: การคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแบ่งปัน",
                "content": "Share wall: ติ๊กถูกหากต้องการให้ระบบแชร์วิดีโอนั้นลงบนหน้าวอลล์ (Profile) ของตัวเอง\n\nProbability (%): กำหนดโอกาสในการแชร์ เพื่อไม่ให้ดูเป็นการสแปมจนเกินไป\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Poke friends (สะกิดหาเพื่อน)‌",
                "content": "Quantity: จำนวนเพื่อนที่สะกิด‌\n\nBreak (s): คือ ระยะเวลาพัก ก่อนสะกิดเพื่อนคนถัดไป (วินาที)\n\n",
                "type": "markdown",
                "images": [
                  "image461.png"
                ]
              },
              {
                "title": "5.Happy Birthday (ส่งข้อความอวยพรวันเกิด)‌",
                "content": "Number friends: จำนวนเพื่อนที่จะอวยพรวันเกิด‌\n\nBreak (s): ระยะเวลาพัก (วินาที)\n\n",
                "type": "markdown",
                "images": [
                  "image146.png"
                ]
              },
              {
                "title": "6.Post Story (โพสต์สตอรี่)‌",
                "content": "Image folder path: เพิ่ม Path Folder ของรูปภาพ‌\n\n",
                "type": "markdown",
                "images": [
                  "image442.png"
                ]
              },
              {
                "title": "7.Post status (โพสต์สเตตัส)‌",
                "content": "",
                "type": "markdown",
                "images": [
                  "image731.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Posts: กำหนดจำนวนโพสต์ที่ต้องการทำ\n\nBreak (s): ระยะเวลาหยุดพักระหว่างแต่ละโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนเนื้อหาข้อความ (Text)",
                "content": "List of contents: ช่องสำหรับพิมพ์หรือวางข้อความที่จะใช้โพสต์\n\nOptions: ตัวเลือกการจัดการบรรทัด เช่น:\n\nContent is only 1 line: 1 บรรทัดคือ 1 โพสต์\n\nContent has multiple lines: ข้อความหลายบรรทัดรวมเป็น 1 โพสต์\n\nหากต้องการสุ่มให้ใส่ Spin Tax เช่น {สวัสดี|ทักทาย|ฮัลโหล} เพื่อให้ระบบสุ่มคำพูดไม่ให้ซ้ำกัน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนรูปภาพ (Image)",
                "content": "Image folder: กดเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nImages: กำหนดจำนวนรูปภาพที่จะสุ่มมาลงใน 1 โพสต์\n\nPost image files in order: หากติ๊กช่องนี้ ระบบจะโพสต์รูปเรียงตามชื่อไฟล์ ไม่สุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนการแท็กเพื่อน (Tag friends in the post)",
                "content": "Count people to tag: จำนวนเพื่อนที่จะแท็กต่อ 1 โพสต์\n\nOnly tag people with VN names: ตัวเลือกเฉพาะสำหรับแท็กเฉพาะรายชื่อที่เป็นชื่อเวียดนาม\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการแท็กเพื่อนแต่ละคน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "8.Post Reels(โพสเรียล)‌",
                "content": "",
                "type": "markdown",
                "images": [
                  "image602.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Quantity: กำหนดจำนวนวิดีโอที่ต้องการให้ระบบโพสต์\n\nDelayTime post (s): ระยะเวลาหน่วงระหว่างการโพสต์แต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการไฟล์วิดีโอ",
                "content": "Video folder: คลิกที่ช่องว่างเพื่อเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บไฟล์วิดีโอ Reels ไว้\n\nDelete used video: หากติ๊กถูก ระบบจะลบไฟล์วิดีโอทิ้งทันทีหลังจากโพสต์สำเร็จ (ช่วยประหยัดพื้นที่ฮาร์ดดิสก์)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาโพสต์",
                "content": "List of contents: ใส่ข้อความบรรยายวิดีโอที่คุณต้องการ\n\nSpin content {a|b|c}: รองรับการใช้รูปแบบ Spin เพื่อสุ่มคำพูด (เช่น {สวัสดี|ทักทาย|ไฮ}) ช่วยลดโอกาสโดนจับว่าเป็นสแปม\n\nOptions: เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: เนื้อหา 1 บรรทัดต่อ 1 โพสต์\n\nContent has many lines: 1 คอนเทนต์สามารถมีได้หลายบรรทัด\n\nAuto delete used content: ลบข้อความที่ใช้แล้วออกจากรายการอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการแฮชแท็ก",
                "content": "List of Hashtag: ใส่แฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แท็ก)\n\nHashtags/content: กำหนดจำนวนแฮชแท็กที่จะสุ่มมาใส่ในแต่ละโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าขั้นสูงและปุ่มดำเนินการ",
                "content": "Wait for upload video (s): เวลารอให้วิดีโออัปโหลดเสร็จ\n\nExport reel link after post: ติ๊กถูกหากต้องการให้ระบบส่งออกลิงก์ของวิดีโอที่โพสต์สำเร็จลงในไฟล์\n\nInteract posts\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Newsfeed Posts (การมีปฏิสัมพันธ์กับ ฟีดข่าว หน้าฟีดข่าว)",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "วิดีโอ: โต้ตอบหน้าฟีด MaxCare",
                "content": "",
                "type": "markdown",
                "images": [
                  "image569.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: รูปแบบการหยุดทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์ที่ระบุ\n\nLimit interacting time: หยุดตามระยะเวลาที่ระบุ\n\nCount posts: กำหนดจำนวนโพสต์ที่จะให้ระบบทำงาน\n\nView post (s): กำหนดระยะเวลา ในการหยุดดูแต่ละโพสต์ก่อนเริ่มทำกิจกรรมอื่น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบพื้นฐาน",
                "content": "Interaction: เลือกกด \"ความรู้สึก\" (Like, Love, Haha, ฯลฯ)\n\nProbability (%): โอกาสที่จะกด (เช่น 100% คือทำทุกโพสต์, 50% คือสุ่มทำบ้างไม่ทำบ้าง)\n\nShare wall: การแชร์โพสต์นั้นๆ ลงหน้าวอลล์ของตัวเอง\n\nProbability (%): โอกาสในการกดแชร์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็นด้วยรูปภาพ",
                "content": "Comment by image: ติ๊กเพื่อเปิดการคอมเมนต์ด้วยภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็นด้วยข้อความ",
                "content": "Comment by text: ติ๊กเพื่อเปิดการคอมเมนต์ด้วยข้อความ\n\nCreate content with AI: หากติ๊กช่องนี้ ระบบจะใช้ AI ช่วยคิดคำตอบให้ดูเป็นธรรมชาติ\n\nList Comments: ใส่ข้อความที่คุณเตรียมไว้\n\nOptions: เลือกรูปแบบการดึงข้อความ\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: ระบบจะมองว่าข้อความทั้งหมดคือ 1 คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Friends Posts (การมีปฏิสัมพันธ์กับ เพื่อน)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image633.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Number friends: จำนวนเพื่อนที่ต้องการให้ระบบเข้าไปหา\n\nOptions: ตัวเลือกการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nLimit interacting time: หยุดตามระยะเวลา\n\nPosts/friend: จำนวนโพสต์ต่อเพื่อน 1 คน ที่ต้องการให้ระบบเข้าไปดู\n\nView post (s): ระยะเวลาที่ใช้ในการหยุดดูแต่ละโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบหลัก",
                "content": "Interaction: ติ๊กถูกเพื่อเปิดการกด Like หรือ Reaction\n\nProbability (%): โอกาสที่จะเกิดการโต้ตอบ (100% คือทำทุกครั้ง)\n\nReaction Icons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, ห่วงใย ฯลฯ)\n\nComment by image: ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nShare wall: ติ๊กถูกเพื่อให้ระบบแชร์โพสต์นั้นไปยังวอลล์ของตนเอง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยข้อความ",
                "content": "Comment by text: ติ๊กถูกเพื่อเปิดใช้งานการพิมพ์คอมเมนต์\n\nCreate content with AI: ตัวเลือกเสริมสำหรับใช้ AI ช่วยคิดเนื้อหาคอมเมนต์\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการให้ระบบนำไปตอบ\n\nOptions: ตัวเลือกรูปแบบข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Group Posts  (โพสต์ที่อยู่ในกลุ่มที่เราเข้าอยู่)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image18.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count groups: จำนวนกลุ่มที่ต้องการเข้าไปดำเนินการ โดยระบุเป็นช่วง\n\nOptions: ตัวเลือกการหยุดการทำงาน\n\nLimit interacting time: หยุดตามระยะเวลา\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nPosts/group: จำนวนโพสต์ที่จะดำเนินการต่อ 1 กลุ่ม\n\nTương tác bài viết mới nhất: หากเลือก ระบบจะเน้นปฏิสัมพันธ์กับ โพสต์ที่ใหม่ที่สุด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การรับชม",
                "content": "View post (s): ระยะเวลาในการดูโพสต์แต่ละโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การปฏิสัมพันธ์",
                "content": "Interaction (แสดงความรู้สึก):\n\nProbability (%): โอกาสความน่าจะเป็นที่จะกดแสดงความรู้สึก (100% คือทำทุกครั้ง)\n\nIcons: เลือกประเภทของ Emotion ที่ต้องการ (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nComment by image (คอมเมนต์ด้วยรูปภาพ):\n\nProbability (%): โอกาสที่จะส่งรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในเครื่องที่เก็บรูปภาพที่ต้องการใช้\n\nShare wall (แชร์ลงหน้าวอลล์):\n\nProbability (%): โอกาสที่จะกดแชร์โพสต์นั้นๆ ไปยังโปรไฟล์ส่วนตัว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยข้อความ",
                "content": "Comment by text: ติ๊กเพื่อเปิดใช้งานการพิมพ์คอมเมนต์\n\nCreate content with AI: ใช้ AI ช่วยสร้างเนื้อหาข้อความ (หากต้องการ)\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการ\n\nOptions: เลือกรูปแบบการอ่านไฟล์ข้อความ\n\nContent is only 1 line:  ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะถือว่า ข้อความทั้งหมดในช่องนั้น คือ 1 คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Group Posts  www(โพสต์ที่อยู่ในกลุ่มที่เราเข้าอยู่)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image803.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: เลือกรูปแบบการทำงาน\n\nLimit interacting posts: หยุดทำงานตาม \"จำนวนโพสต์\" ที่เข้าไปมีปฏิสัมพันธ์\n\nLimit interacting time: หยุดทำงานตาม \"เวลาที่ใช้\" ในการรันคำสั่งนี้ ไม่ว่าจะปฏิสัมพันธ์ไปกี่โพสต์ก็ตาม\n\nCount posts: กำหนดจำนวนโพสต์ทั้งหมดที่จะประมวลผล\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การดูและการแสดงความรู้สึก",
                "content": "View post (s): ระยะเวลาที่หยุดดูโพสต์นั้นๆ เป็นวินาที\n\nInteraction (ช่องติ๊กถูก): หากต้องการให้กด Like หรือแสดงความรู้สึกให้ติ๊กที่นี่\n\nProbability (%): โอกาสที่จะกดแสดงความรู้สึก (เช่น 100% คือกดทุกโพสต์)\n\nReaction Icons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, หัวเราะ ฯลฯ)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น",
                "content": "Comment by text (ข้อความ):\n\nList Comments: ใส่ข้อความที่ต้องการ\n\nCreate content with AI: หากติ๊กช่องนี้ ระบบจะใช้ AI ช่วยคิดข้อความให้\n\nOptions: ตัวเลือกรูปแบบเนื้อหา\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะถือว่า ข้อความทั้งหมดในช่องคือ 1 ชุด\n\nComment by image (รูปภาพ):\n\nImage folder: เลือกโฟลเดอร์รูปภาพในเครื่องที่จะให้ระบบสุ่มดึงไปคอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์",
                "content": "Share wall: หากติ๊กเลือก ระบบจะนำโพสต์ในกลุ่มนั้นไปแชร์ลงหน้าวอลล์ (Timeline) ของตัวเอง\n\nProbability (%): กำหนดโอกาสในการแชร์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Fanpage Posts (โพสต์ที่อยู่ในเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image271.png"
                ]
              },
              {
                "title": "ข้อมูลพื้นฐานและการระบุเป้าหมาย",
                "content": "Enter list of page Ids: ใส่ ID ของแฟนเพจที่คุณต้องการให้ระบบเข้าไปทำงาน\n\nCount pages: กำหนดจำนวนเพจที่จะให้ระบบสุ่มเข้าไปทำงาน\n\nLike page after interaction: ติ๊กถูกหากต้องการให้กด Like เพจนั้น ๆ หลังจากทำกิจกรรมเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าขอบเขตงาน",
                "content": "Options: ตัวเลือกการหยุดการทำงาน\n\nLimit interacting posts: จำกัดจำนวนโพสต์\n\nLimit interacting time: จำกัดระยะเวลา\n\nPosts/page: กำหนดจำนวนโพสต์ที่จะทำต่อ 1 เพจ\n\nView post (s): ระยะเวลาที่ \"เปิดค้างไว้\" เพื่อดูโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบ",
                "content": "Interaction: กดแสดงความรู้สึก (Reactions) ให้กับโพสต์\n\nProbability (%): โอกาสที่จะเกิดการกด Like/Reaction (เช่น ตั้งไว้ 100% คือกดทุกครั้ง)\n\nIcon Selection: เลือกสัญลักษณ์ความรู้สึกที่ต้องการ เช่น ถูกใจ, รักเลย, หัวเราะ, ว้าว, เศร้า หรือโกรธ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น",
                "content": "Comment by text (คอมเมนต์ด้วยข้อความ)\n\nList Comments: ใส่ข้อความที่ต้องการคอมเมนต์\n\nCreate content with AI: ใช้ AI ช่วยสร้างเนื้อหาคอมเมนต์อัตโนมัติ\n\nOptions: เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความคอมเมนต์\n\nContent has many lines: เนื้อหามีหลายบรรทัด\n\nComment by image (คอมเมนต์ด้วยรูปภาพ)\n\nImage folder: ระบุที่อยู่ของโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่ต้องการใช้คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์",
                "content": "Share wall: ติ๊กถูกหากต้องการให้ระบบกดแชร์โพสต์นั้นไปที่หน้า Wall ของตัวเอง โดยสามารถตั้งค่าความน่าจะเป็น (Probability) ได้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6.Posts on the wall (โพสต์หน้าไทม์ไลน์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image157.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: รูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nLimit interacting time: หยุดตามระยะเวลา\n\nCount posts: กำหนดจำนวนโพสต์ที่จะเข้าไปทำงาน\n\nView post (s): กำหนดเวลา ในการ \"ดู\" โพสต์นั้นๆ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การปฏิสัมพันธ์และการแชร์",
                "content": "Interaction: ติ๊กถูกเพื่อเปิดใช้งานการกด Like\n\nProbability (%): โอกาสที่จะเกิดการกด (100% คือกดทุกโพสต์ที่เลือก)\n\nIcons: เลือกรูปแบบความรู้สึกที่ต้องการ (Like, Love, Haha, Wow, Sad, Angry)\n\nShare wall: ติ๊กถูกเพื่อแชร์โพสต์นั้นลงบนหน้า Wall ของตัวเอง\n\nProbability (%): โอกาสในการกดแชร์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์",
                "content": "การคอมเมนต์ด้วยรูปภาพ (Comment by image)\n\nProbability (%): โอกาสที่จะลงคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nการคอมเมนต์ด้วยข้อความ (Comment by text)\n\nCreate content with AI: หากติ๊กช่องนี้ ระบบจะใช้ AI ช่วยคิดข้อความคอมเมนต์ให้โดยอัตโนมัติ\n\nProbability (%): โอกาสที่จะลงคอมเมนต์\n\nList Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการ\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: 1 คอมเมนต์ มีหลายบรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "7.Break (หยุดการกระทำต่างๆ)",
                "content": "Delay time (s): ระยะเวลาพัก (วินาที)\n\n",
                "type": "markdown",
                "images": [
                  "image566.png"
                ]
              },
              {
                "title": "8.Script GemLogin (ใช้สคริปต์ GemLogin)",
                "content": "Select script: เลือกสคริปต์ที่ต้องการใช้งาน\n\nTimeout (s): ระยะเวลาไทม์เอาต์ หากสคริปต์ไม่ทำงาน\n\nChrome size: ขนาดบราวเซอร์โครม\n\n",
                "type": "markdown",
                "images": [
                  "image332.png"
                ]
              },
              {
                "title": "9.Interact specified reel โต้ตอบกับรีลที่กำหนด",
                "content": "วิดีโอ: MaxCare ฟังก์ชั่นโต้ตอบ Reels ตามที่กำหนด\n\n",
                "type": "markdown",
                "images": [
                  "image102.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐานและการสุ่ม",
                "content": "Count posts: จำนวนโพสต์ที่จะให้ระบบเข้าไปทำงาน\n\nBreak (s): ระยะเวลาหยุดพักระหว่างแต่ละโพสต์\n\nView post (s): ระยะเวลาในการดูคลิปก่อนเริ่มกดไลก์หรือคอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อมูลเป้าหมาย",
                "content": "Enter Id or post link: ใส่ ID ของโพสต์หรือ Link ของ Reel ที่ต้องการให้ระบบเข้าไปทำงาน\n\nDelete used post link: หากติ๊กถูก ระบบจะลบลิงก์ที่ทำงานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบและการแชร์",
                "content": "Like: ติ๊กถูกเพื่อให้ระบบกดถูกใจโพสต์\n\nShare wall: ติ๊กถูกเพื่อแชร์คลิปลงบนหน้าโปรไฟล์ (Timeline) ของตัวเอง\n\nShare content: ใส่ข้อความแคปชั่นที่ต้องการใช้ตอนแชร์\n\nOptions: เลือกรูปแบบของข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความ\n\nContent has many lines: กลุ่มของข้อความที่มีหลายบรรทัดรวมกัน = 1 ข้อความ\n\nDelete used content: ลบข้อความที่ใช้แชร์แล้วออกจากรายการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น",
                "content": "แบบข้อความ (Comment by text)\n\nCreate content with AI: ใช้ AI ช่วยสร้างเนื้อหาคอมเมนต์อัตโนมัติ\n\nList Comments: ใส่รายการข้อความที่ต้องการ\n\nDelete used content: ลบคอมเมนต์ที่ใช้ไปแล้วเพื่อไม่ให้ซ้ำเดิม\n\nแบบรูปภาพ (Comment by image)\n\nComment by image: ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nFriends-Groups function\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1. Add friends by keyword (เพิ่มเพื่อนตามคีย์เวิร์ด)",
                "content": "Count: จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s): ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\nList of keywords: คีย์เวิร์ดสำหรับค้นหา\n\n",
                "type": "markdown",
                "images": [
                  "image361.png"
                ]
              },
              {
                "title": "2.Add friends by suggestions (เพิ่มเพื่อนตามที่แนะนำ)",
                "content": "Count: จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s): ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\nOnly add friends with VN names: เพิ่มเฉพาะชื่อเวียดนามเท่านั้น\n\nOnly add friends with people with mutual friends: เพิ่มเฉพาะคนที่มีเพื่อมร่วมกันเท่านั้น\n\nStop when see a Facebook warning: หยุดหลังจากเฟสบุ๊คเตือน ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌\n\n",
                "type": "markdown",
                "images": [
                  "image121.png"
                ]
              },
              {
                "title": "3.Confirm Friend (ยอมรับเป็นเพื่อน)",
                "content": "Count: จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s): ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\nOnly add friends with VN names: เพิ่มเฉพาะชื่อเวียดนามเท่านั้น\n\nOnly add friends with people with mutual friends: เพิ่มเฉพาะคนที่มีเพื่อม\n\nร่วมกันเท่านั้น\n\nStop when see a Facebook warning: หยุดหลังจากเฟสบุ๊คเตือน\n\n",
                "type": "markdown",
                "images": [
                  "image630.png"
                ]
              },
              {
                "title": "4. Add friends by UID (เพิ่มเพื่อนด้วย UID)",
                "content": "Count: จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s): ระยะเวลาพักก่อนเพิ่มคนถัดไป ‌ ‌ ‌\n\nInteract before add friends: ปฏิสัมพันธ์กับโพสก่อนเพิ่มเพื่อน\n\nStop when FB warning: หยุดหลังจากเฟสบุ๊คเตือน\n\n",
                "type": "markdown",
                "images": [
                  "image738.png"
                ]
              },
              {
                "title": "5. Cancel sent invitation (ยกเลิกคำขอ)",
                "content": "Count: จำนวนเพื่อนที่ต้องการยกเลิก\n\nBreak (s): ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\n",
                "type": "markdown",
                "images": [
                  "image337.png"
                ]
              },
              {
                "title": "6.Unfriend (เลิกเป็นเพื่อน)",
                "content": "Count: จำนวนเพื่อนที่ต้องการยกเลิกเป็นเพื่อน\n\nBreak (s): ระยะเวลาพักก่อนยกเลิกคนถัดไป ‌ ‌ ‌\n\nOption : ตัวเลือกในการลบ แบบสุ่ม, เพื่อนที่เป็นชื่อต่างชาติ, ตาม UID\n\nList of UID : ลิสต์ UID ที่ต้องการลบเพื่อน\n\nList of UID friends to keeps : ลิสต์ UID เพื่อนที่ไม่ต้องการลบเพื่อน\n\n",
                "type": "markdown",
                "images": [
                  "image288.png"
                ]
              },
              {
                "title": "7.Add friends vs group members (เพิ่มเพื่อนในสมาชิกกลุ่ม)",
                "content": "วิดีโอ: Maxcare ฟังก์ชัน Add friends with group member\n\nCount: จำนวนเพื่อนที่ต้องการเพิ่มเป็นเพื่อน\n\nBreak (s): ระยะเวลาพักก่อนเพิ่มคนถัดไป ‌ ‌\n\nList of groups Ids : ลิสต์ไอดีกลุ่ม\n\nOnly add friends with VN names: เพิ่มเฉพาะชื่อเวียดนามเท่านั้น\n\nAdd friend with member who has things in common: หากติ๊กช่องนี้ ระบบจะเลือกเพิ่มเพื่อนเฉพาะคนที่มี จุดร่วมกัน\n\n",
                "type": "markdown",
                "images": [
                  "image414.png"
                ]
              },
              {
                "title": "8.Add Friends with friend's friends (เพิ่มเพื่อนกับเพื่อนของเพื่อน)",
                "content": "Count (จำนวน): จำนวนเพื่อนที่จะให้ระบบส่งคำขอ\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการส่งคำขอแต่ละครั้ง\n\nObject options: เลือกว่าจะส่งคำขอหาใครในรายชื่อเพื่อนของ UID นั้นๆ\n\nRandom friends: สุ่มเพื่อนที่จะส่งคำขอ\n\nSpecified user: ระบุผู้ใช้ที่ต้องการเพิ่มเพื่อนของเขา\n\nStop when see a Facebook warning: กำหนดว่าหากระบบตรวจเจอคำเตือนจาก Facebook จะให้ หยุดทำงาน หลังจากเจอคำเตือนไปแล้วกี่ครั้ง\n\nList of Uid: UID ของบัญชี Facebook ที่คุณต้องการไป \"ดึงเพื่อน\" ของเขามาแอด\n\nAuto delete used uid: ระบบจะลบ UID ที่ใช้งานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\n",
                "type": "markdown",
                "images": [
                  "image31.png"
                ]
              },
              {
                "title": "9.Join group by suggestions (เข้าร่วมกลุ่มแนะนำ)",
                "content": "Count: จำนวนกลุ่ม\n\nBreak (s): ระยะเวลาพักก่อนเข้าร่วมกลุ่มถัดไป (วินาที)\n\nAuto answer questions: ตอบคำถามอัตโนมัติ\n\nList of answers: ลิสต์คำตอบ\n\n",
                "type": "markdown",
                "images": [
                  "image632.png"
                ]
              },
              {
                "title": "10. Join groups by keyword (เข้าร่วมกลุ่มตามคีย์เวิร์ด)",
                "content": "Count: จำนวนกลุ่ม\n\nBreak (s): ระยะเวลาพักก่อนเข้าร่วมกลุ่มถัดไป (วินาที)\n\nList of keywords : ลิสต์คีย์เวิร์ดกลุ่ม\n\nAuto answer questions : ตอบคำถามอัตโนมัติ\n\nList of answers : ลิสต์คำตอบ\n\n",
                "type": "markdown",
                "images": [
                  "image801.png"
                ]
              },
              {
                "title": "11.Join specified group (เข้าร่วมกลุ่มที่ระบุ)",
                "content": "Count : จำนวนกลุ่ม\n\nBreak (s) : ระยะเวลาพักก่อนเข้าร่วมกลุ่มถัดไป (วินาที) ‌\n\nAuto answer questions : ตอบคำถามอัตโนมัติ\n\nList of answers : ลิสต์คำตอบ\n\nEnter group link: เพิ่ม Link กลุ่มที่ต้องการ\n\nDelete used group link: ลบ Link กลุ่มที่ใช้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image663.png"
                ]
              },
              {
                "title": "12.Leave group (ออกจากกลุ่ม)",
                "content": "Count : จำนวน\n\nBreak : หยุด\n\nList of ID groups to keep : รายชื่อกลุ่ม ID ที่ต้องการเก็บไว้\n\nConfigure Leave group : ตั้งค่าการออกจากกลุ่ม\n\nOption : ตัวเลือก\n\nRandom joined groups : สุ่มกลุ่มที่เข้าร่วม\n\nLeave group moderating posts : ออกจากกลุ่มที่กลั่นกรองโพสต์\n\nLeave groups on condition : ออกจากกลุ่มตามเงื่อนไข\n\nCount of members is less : จำนวนสมาชิกน้อยกว่า\n\nGroup name contains keywords : ชื่อกลุ่มมีคีย์เวิร์ด\n\nList of keywords : รายการคีย์เวิร์ด\n\nLeave by group Id : ออกจากกลุ่มด้วย ID กลุ่ม\n\nList of groups Id : รายการ ID กลุ่ม\n\nSeeding function\n\n",
                "type": "markdown",
                "images": [
                  "image411.png"
                ]
              },
              {
                "title": "1.Post (โพสต์)",
                "content": "วิดีโอ: Maxcare การใช้งานฟังก์ชั่น Post\n\nวิดีโอ: ฟีเจอร์ Create Content With AI บน Maxcare\n\n",
                "type": "markdown",
                "images": [
                  "image367.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Break (s): กำหนดระยะเวลารอระหว่างแต่ละโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนของเนื้อหา",
                "content": "Content: ติ๊กถูกเพื่อใช้งาน แล้วคลิกปุ่ม Enter เพื่อพิมพ์ข้อความที่ต้องการ\n\nDelete used content: ลบข้อความที่ใช้แล้วทิ้ง\n\nUse Background: ใช้พื้นหลังสีๆ ของแพลตฟอร์ม (เหมือนโพสต์ Facebook ปกติ)\n\nImage: ติ๊กถูกหากต้องการโพสต์รูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในคอมพิวเตอร์\n\nImages: เลือกว่าจะสุ่มใช้กี่รูปต่อ 1 โพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การกำหนดเป้าหมาย",
                "content": "Post to wall: โพสต์ลงบนหน้าโปรไฟล์ (หน้าวอลล์) ของตัวเอง\n\nPost to group: โพสต์ลงในกลุ่มต่างๆ\n\nCount groups: จำนวนกลุ่มที่จะให้โพสต์ต่อการรัน 1 ครั้ง\n\nRandom group joined: สุ่มโพสต์ลงในกลุ่มที่เราเป็นสมาชิกอยู่แล้ว\n\nUser-imported group: ระบุ ID กลุ่มเองเฉพาะเจาะจง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวเลือกเพิ่มเติมด้านล่าง:",
                "content": "Post anonymously: โพสต์แบบไม่เปิดเผยตัวตน (หากกลุ่มอนุญาต)\n\nPriority posting groups with many members: เน้นโพสต์ลงกลุ่มที่มีจำนวนสมาชิกเยอะก่อน เพื่อเพิ่มการมองเห็น\n\nNo duplicate groups: ป้องกันการโพสต์ซ้ำกลุ่มเดิม\n\nOnly post uncensored group: โพสต์เฉพาะกลุ่มที่ไม่มีระบบกรองคำหรือแอดมินไม่ต้องอนุมัติโพสต์\n\nInteract to group before post: ให้บอทไปกดดูหรือมีปฏิสัมพันธ์กับกลุ่มก่อนโพสต์ เพื่อให้ดูเหมือนคนเล่นจริง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การปฏิสัมพันธ์หลังโพสต์",
                "content": "Interact with posted post: เมื่อโพสต์เสร็จแล้ว ให้บอททำการกดไลก์ หรือคอมเมนต์ใต้โพสต์ของตัวเองทันที เพื่อเป็นการดันโพสต์ (สามารถกดที่ Settings เพื่อตั้งค่าคอมเมนต์ได้)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Share (แชร์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image656.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Break (s): กำหนดระยะห่างระหว่างการแชร์แต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนเนื้อหาที่ต้องการแชร์",
                "content": "Link posts to share: ใส่ URL หรือลิงก์ของโพสต์ที่ต้องการแชร์ลงในช่องนี้ (ใส่ได้มากกว่า 1 ลิงก์)\n\nช่อง Content (ด้านล่าง): ติ๊กถูกที่ช่อง \"Content\" หากต้องการใส่ข้อความประกอบการแชร์\n\nCreate content with AI: ตัวเลือกสำหรับให้ AI ช่วยร่างข้อความให้\n\nOptions: เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัด = 1 โพสต์\n\nContent has many lines: ทุกบรรทัดรวมกัน = 1 โพสต์\n\nDelete used content: หากติ๊กช่องนี้ ระบบจะลบข้อความที่ใช้ไปแล้วทิ้ง เพื่อป้องกันการใช้ข้อความซ้ำเดิม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ากลุ่มเป้าหมาย",
                "content": "Share post to wall: ติ๊กเลือกหากต้องการแชร์ลงบนหน้าโปรไฟล์ (Wall) ของตัวเอง\n\nShare post to group: ติ๊กเลือกหากต้องการแชร์เข้ากลุ่มต่างๆ\n\nCount groups: กำหนดจำนวนกลุ่มที่จะแชร์\n\nRandom group joined: ระบบจะสุ่มเลือกกลุ่มที่คุณเป็นสมาชิกอยู่แล้ว\n\nUser-imported group: เลือกแชร์เฉพาะกลุ่มที่คุณระบุ ID หรือใส่รายชื่อไว้ในช่องด้านล่าง\n\nOnly share joined groups: จำกัดให้แชร์เฉพาะกลุ่มที่คุณกดเข้าร่วมแล้วเท่านั้น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวเลือกเสริม",
                "content": "Only uncensored group share: เลือกแชร์เฉพาะกลุ่มที่ไม่ต้องรอการอนุมัติจากแอดมิน (โพสต์แล้วขึ้นทันที)\n\nPriority sharing groups with many members: ให้ความสำคัญกับการแชร์ลงกลุ่มที่มีจำนวนสมาชิกเยอะก่อน เพื่อเพิ่มการมองเห็น\n\nNo duplicate groups: ป้องกันการแชร์ซ้ำกลุ่มเดิมในรอบการทำงานนั้นๆ\n\nInteract to group before share: ระบบจะทำการปฏิสัมพันธ์กับกลุ่มก่อน เช่น กดไลก์โพสต์ในกลุ่ม เพื่อเลียนแบบพฤติกรรมมนุษย์ก่อนที่จะทำการแชร์ ช่วยลดโอกาสโดนแบนได้ดีมากครับ (สามารถกด Settings ข้างๆ เพื่อตั้งค่าการปฏิสัมพันธ์ได้)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Message (ส่งข้อความ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image478.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count Uid: กำหนดจำนวน UID (บัญชีผู้รับ) ที่ต้องการส่งในรอบนี้\n\nBreak (s): ตั้งค่าเวลาพักระหว่างการส่งแต่ละข้อความ\n\nOptions: เลือกรูปแบบการดึงข้อมูล UID\n\nUID specified: ระบบจะส่งข้อความหาเฉพาะรายชื่อ UID ที่คุณคัดลอกมาวางในช่อง List of Uid เท่านั้น (แม่นยำที่สุด)\n\nRandom friends: ระบบจะสุ่มเลือกเพื่อนที่มีอยู่ในบัญชีของคุณ เพื่อส่งข้อความไปหาตามจำนวนที่ตั้งค่าไว้\n\nInbox message: ระบบจะส่งข้อความหาคนที่เคยมีประวัติการคุยกันใน Inbox (กล่องข้อความ)\n\nUnread message: ระบบจะเลือกส่งหาเฉพาะคนที่มีข้อความค้างอยู่แต่คุณยังไม่ได้เปิดอ่าน\n\nSpam messag: ระบบจะส่งข้อความหาคนที่มีบทสนทนาอยู่ในโฟลเดอร์ Spam/Filter\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการรายชื่อ UID",
                "content": "List of Uid: ช่องสำหรับใส่หมายเลขไอดี (UID) ของผู้รับ\n\nAuto delete used Uid: หากติ๊กถูก ระบบจะลบรายชื่อ UID ทิ้งทันทีที่ส่งสำเร็จ\n\nInteract when messaging: การปฏิสัมพันธ์ขณะส่ง (เช่น การเข้าไปดูโปรไฟล์ก่อนส่ง) สามารถเลือกตั้งค่าได้ที่ปุ่ม Settings เพื่อให้ดูเหมือนพฤติกรรมมนุษย์มากขึ้น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การส่งข้อความ (Send text)",
                "content": "Message content: พิมพ์ข้อความที่ต้องการส่งในช่องนี้\n\nCreate content with AI: ใช้ระบบ AI ช่วยเขียนข้อความให้ (ถ้าเปิดใช้งาน)\n\nOptions (Content style): เลือกว่าจะส่งทีละบรรทัด หรือส่งทั้งหมดพร้อมกัน\n\nDelete used content: ลบข้อความที่ใช้แล้วทิ้ง (กรณีเตรียมไว้หลายชุด)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การส่งรูปภาพ (Send image)",
                "content": "Send image: ติ๊กถูกเพื่อเปิดการส่งรูปภาพแนบไปกับข้อความ\n\nImage folder: กดเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการส่ง\n\nImages/message: กำหนดว่าจะส่งรูปภาพจำนวนเท่าไหร่ต่อการส่ง 1 ครั้ง (เช่น 1 ถึง 2 รูป)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Spam post (สแปมโพสต์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image421.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count ID: จำนวน ID เป้าหมาย เช่น โปรไฟล์,กลุ่ม หรือเพจ ที่จะให้ระบบเข้าไปทำงาน\n\nCount posts/ID: จำนวนโพสต์ในแต่ละ ID ที่ต้องการให้เข้าไปโต้ตอบ\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการทำแต่ละรายการ\n\nObject type: ประเภทของเป้าหมาย\n\nProfile: หน้าเฟซบุ๊กส่วนตัว\n\nGroup: กลุ่มต่างๆ\n\nPage: หน้าแฟนเพจ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รายชื่อเป้าหมายและการคัดกรอง",
                "content": "Enter list of ID: ใส่ ID ของProfile, Group หรือ Page ที่คุณต้องการให้ระบบทำงาน\n\nAuto delete used ID: ติ๊กถูกเพื่อให้ระบบลบ ID ทิ้งทันทีเมื่อทำงานเสร็จ (ป้องกันการทำซ้ำ)\n\nSkip: ใช้สำหรับสั่งให้ระบบ \"ข้าม\" โพสต์แรกๆ ในหน้า Feed หรือกลุ่มนั้นไปก่อน\n\nตัวอย่าง: หากตั้งเป็น 1 > 3 ระบบจะสุ่มข้ามโพสต์ 1 ถึง 3 โพสต์แรก แล้วค่อยเริ่มทำงานในโพสต์ถัดไป\n\nDon't comment duplicate posts: ป้องกันการไปคอมเมนต์ซ้ำในโพสต์เดิมที่เคยทำไปแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รูปแบบการปฏิสัมพันธ์",
                "content": "Interaction: ติ๊กถูกเพื่อเปิดการกด Reaction (ไลก์, หัวใจ, ว้าว ฯลฯ)\n\nShare wall: ติ๊กถูกหากต้องการให้แชร์โพสต์นั้นไปที่หน้าวอลล์ของตัวเอง\n\nComment by text: ติ๊กถูกเพื่อเปิดการคอมเมนต์ด้วยข้อความ\n\nList Comments: พิมพ์ข้อความที่ต้องการสุ่มใช้ในช่องนี้\n\nOptions: เลือกรูปแบบคอมเม้น\n\nContent is only 1 line: ระบบจะถือว่าข้อความ 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: ระบบจะรวมข้อความทุกบรรทัดในช่อง List Comments เป็น 1 คอมเมนต์เดียว\n\nDelete used content: ลบข้อความที่ใช้ไปแล้วออกจากรายการ\n\nComment by image: ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ โดยเลือกที่อยู่ของ Image folder\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Follow (ติดตาม)",
                "content": "Break : ระยะเวลาดีเลย์ในการติดตาม\n\nEnter list of ID : ลิสต์ไอดีที่ต้องการติดตาม\n\n",
                "type": "markdown",
                "images": [
                  "image518.png"
                ]
              },
              {
                "title": "6.Like page (กดไลค์เพจ)",
                "content": "Break : ระยะเวลาดีเลย์ในการไลค์เพจ\n\nEnter list of Uid : ลิสต์ไอดีเพจที่ต้องการไลค์\n\n",
                "type": "markdown",
                "images": [
                  "image757.png"
                ]
              },
              {
                "title": "7.Review page (รีวิวเพจ)",
                "content": "Id Page : ลิสต์ไอดีเพจที่ต้องการรีวิว\n\nReview content : เนื้อหาที่ต้องการรีวิว\n\nOption : เนื้อหาเพียง 1 บรรทัด, เนื้อหาหลายบรรทัด\n\nAuto Delete used content : ลบเนื้อหาที่ใช้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image693.png"
                ]
              },
              {
                "title": "8.Reply to comment (ตอบกลับความคิดเห็น)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image475.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลาและจำนวน",
                "content": "View post (s): ระยะเวลาที่ระบบเปิดดูโพสต์\n\nCount ID/Nick: จำนวนครั้งที่จะให้ทำงานต่อหนึ่งรอบ\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการทำงานแต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การเลือกกลุ่มเป้าหมาย",
                "content": "Phản hồi nhiều bình luận trong 1 bài viết: ตอบกลับหลายๆ คอมเมนต์ภายในโพสต์เดียว (ต้องใส่ลิงก์โพสต์ในช่อง Post link)\n\nPhản hồi bình luận chỉ định: ตอบกลับเฉพาะคอมเมนต์ที่ระบุไว้เท่านั้น (ต้องนำ ID หรือ Link ของคอมเมนต์มาใส่ในช่อง Danh sách ID...)\n\nAuto delete used ID: ติ๊กถูกเพื่อให้ระบบลบ ID ที่ทำงานเสร็จแล้วออกจากรายการอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รูปแบบการโต้ตอบ",
                "content": "Interaction: ติ๊กเพื่อกด \"ความรู้สึก\" (Like, Love, Haha, ฯลฯ) ให้กับคอมเมนต์นั้นๆ\n\nComment by text: ตอบกลับด้วยข้อความ\n\nใส่ข้อความที่ต้องการในช่อง List Comments\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความคอมเมนต์\n\nContent has many lines: หลายบรรทัด = 1 ข้อความคอมเมนต์\n\nDelete commented content: ลบข้อความทิ้งหลังจากใช้งานแล้ว\n\nComment by image: ตอบกลับด้วยรูปภาพ\n\nเลือกโฟลเดอร์เก็บรูปภาพในช่อง Image folder\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "9.Interact specified post (การมีปฏิสัมพันธ์กับโพสต์)",
                "content": "วิดีโอ: Maxcare ตั้งค่า กดไลค์ กดแชร์ คอมเม้น โพสต์ที่ต้องการ\n\n",
                "type": "markdown",
                "images": [
                  "image207.png"
                ]
              },
              {
                "title": "กลุ่มการตั้งค่าพื้นฐาน",
                "content": "Count posts: จำนวนโพสต์ที่ต้องการให้ระบบทำต่อการรัน 1 ครั้ง (ตั้งเป็นช่วงสุ่ม เช่น 1 ถึง 1)\n\nBreak (s): เวลาพักระหว่างแต่ละโพสต์ (หน่วยเป็นวินาที) เพื่อป้องกันการโดนแบน\n\nView post (s): ระยะเวลาที่ค้างหน้าจอเพื่อ \"ดู\" โพสต์ก่อนเริ่มทำกิจกรรม (ช่วยให้ดูเหมือนมนุษย์มากขึ้น)\n\nEnter Id or post link: ช่องสำหรับใส่ URL ของโพสต์ หรือ ID ของโพสต์ที่ต้องการ (1 บรรทัดต่อ 1 รายการ)\n\nDelete used post link: หากติ๊กถูก ระบบจะลบลิงก์ที่ทำเสร็จแล้วออกจากรายการอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "กลุ่มการปฏิสัมพันธ์และการแชร์",
                "content": "Interaction: ติ๊กเพื่อเปิดการกด Reaction (Like, Love, Haha ฯลฯ)\n\nShare wall: ติ๊กหากต้องการให้นำโพสต์นั้นไปแชร์บนหน้าโปรไฟล์ (Timeline) ของเราเอง\n\nShare content: ใส่ข้อความที่จะเขียนประกอบการแชร์\n\nOptions: ตัวเลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\nDelete used content: ลบข้อความที่ใช้ไปแล้วเพื่อไม่ให้ซ้ำเดิม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยข้อความ (Comment by text)",
                "content": "List Comments: ใส่รายการข้อความที่ต้องการใช้คอมเมนต์\n\nCreate content with AI: ใช้ AI ช่วยคิดคำคอมเมนต์ให้\n\nDelete used content: ลบข้อความที่ใช้ไปแล้วเพื่อไม่ให้ซ้ำเดิม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยรูปภาพ (Comment by image)",
                "content": "Image folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nDelete used images: ลบรูปภาพที่ถูกใช้ไปแล้วออกจากเครื่องหรือรายการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10.Interact posts by keyword (การมีปฏิสัมพันธ์กับโพสต์ตามคีย์เวิด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image307.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count posts: กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปทำงาน\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการสลับไปทำโพสต์ถัดไป\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การกำหนดเป้าหมาย",
                "content": "Enter list of keywords: ใส่คำค้นหาที่ต้องการ ระบบจะวิ่งไปหาโพสต์ที่มีคำเหล่านี้\n\nSearch posts in groups: หากติ๊กถูก ระบบจะเน้นค้นหาภายในกลุ่ม\n\nEnter group Id: ใส่ไอดีของกลุ่มที่ต้องการเจาะจง\n\nAuto join group: ติ๊กเพื่อให้ระบบกดเข้ากลุ่มอัตโนมัติหากยังไม่ได้เป็นสมาชิก สามารถใส่คำตอบล่วงหน้าได้ที่ปุ่ม Answers สำหรับกลุ่มที่ต้องการให้ตอบคำถามก่อนเข้ากลุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รูปแบบการปฏิสัมพันธ์",
                "content": "View post (s): ระยะเวลาในการ \"ดู\" โพสต์\n\nInteraction: ติ๊กเพื่อกด Like หรือแสดงความรู้สึก (Reactions)\n\nProbability (%): เพื่อสุ่มความถี่ในการกดได้\n\nComment by image: ส่งคอมเมนต์เป็นรูปภาพ โดยระบุที่อยู่ของโฟลเดอร์รูปภาพ\n\nShare wall: ติ๊กเพื่อให้ระบบแชร์โพสต์นั้นไปที่หน้าโปรไฟล์ของตัวเอง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการความคิดเห็น",
                "content": "Comment by text: ติ๊กเพื่อเปิดใช้งานการคอมเมนต์ด้วยตัวอักษร\n\nCreate content with AI: ใช้ AI ช่วยเขียนเนื้อหาคอมเมนต์ให้\n\nList Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: ระบบจะถือว่า ข้อความทั้งหมดในช่องคือ 1 คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "11.Interact Livestream (โต้ตอบถ่ายทอดสด)",
                "content": "วิดีโอ: Maxcare ไลฟ์ไม่เหงาด้วยฟังก์ชั่น Interact Livestream\n\n",
                "type": "markdown",
                "images": [
                  "image70.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Link livestream: วางลิงก์ (URL) ของไลฟ์สดที่ต้องการให้ระบบเข้าไปทำงาน\n\nTime to view (s): กำหนดเวลาที่จะให้ระบบเปิดดูไลฟ์สด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก (Express feelings)",
                "content": "ตัวเลือกไอคอน: เลือกรูปแบบความรู้สึกที่ต้องการ เช่น ถูกใจ (Like), รักเลย (Love), ว้าว (Wow), เศร้า (Sad) หรือโกรธ (Angry)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น (Comment)",
                "content": "List Comments: ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nSpin content {a|b|c}: ระบบรองรับการสุ่มคำ เช่น {สวัสดี|ทักทาย|รอดูเลย} เพื่อให้แต่ละบัญชีพิมพ์ข้อความไม่ซ้ำกัน\n\nDelete used content: หากติ๊กช่องนี้ ระบบจะลบข้อความที่ใช้ไปแล้วออกจากรายการ เพื่อไม่ให้คอมเมนต์ซ้ำเดิม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบซ้ำ",
                "content": "Repeat Interact: ติ๊กถูกเพื่อเปิดโหมดทำงานซ้ำ\n\nDelay time (s): ระยะเวลาพักก่อนจะเริ่มโต้ตอบใหม่อีกครั้ง\n\nตัวเลือกย่อย: เลือกว่าในการวนซ้ำแต่ละรอบ จะให้ทำอะไรบ้าง (Express feelings หรือ Comment)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "12.Invite friends like pages (ชวนเพื่อนกดไลค์เพจ)",
                "content": "วิดีโอ: MaxCare ฟังก์ชั่นเชิญเพื่อนกดไลค์เพจ\n\nEnter ID Page : ใส่ไอดีของเพจที่ต้องการชวนเพื่อน\n\nFriends : จำนวนเพื่อน\n\nDelay : ระยะเวลาดีเลย์ในการรันต่อ\n\n",
                "type": "markdown",
                "images": [
                  "image299.png"
                ]
              },
              {
                "title": "13.Invite friends join group (เชิญเพื่อนเข้าร่วมกลุ่ม)",
                "content": "Count/group : จำนวนกลุ่ม Invite options : ตัวเลือกคำเชิญ:\n\nInvite random : เชิญแบบสุ่ม\n\nFacebook Suggestions : รายการที่แนะนำ List of Id groups to Ids: ลิสต์ไอดีกลุ่มที่จะเชิญเพื่อน\n\nChange info function\n\n",
                "type": "markdown",
                "images": [
                  "image310.png"
                ]
              },
              {
                "title": "1.Change Password (เปลี่ยนรหัสผ่าน)",
                "content": "New password : รหัสผ่านใหม่ ทำการใส่ * หากต้องการสุ่ม\n\n",
                "type": "markdown",
                "images": [
                  "image189.png"
                ]
              },
              {
                "title": "2.Remove Phone (ลบเบอร์โทรศัพท์)",
                "content": "Option : เลือกรูปแบบสำหรับเปลี่ยนรหัสผ่าน\n\nUse Account Center: ลบผ่าน Account Center\n\nUse m.fb: ลบผ่าน m.fb\n\nUse mbasic: ลบผ่าน mbasic\n\nUse www.fb : ลบผ่าน www.fb\n\nUse tut no pass: ลบผ่าน tut no pass\n\n",
                "type": "markdown",
                "images": [
                  "image393.png"
                ]
              },
              {
                "title": "3.Add mail (เพิ่มอีเมลล์)",
                "content": "add mail : เพิ่มอีเมลล์\n\nType Mail : ชนิดของอีเมลล์\n\nTime get otp : เวลาในการรับ otp\n\nDelete mail not on the tool : ลบอีเมลที่ไม่สามารถใช้ร่วมกับโปรแกรม\n\n",
                "type": "markdown",
                "images": [
                  "image199.png"
                ]
              },
              {
                "title": "4.Change name (เปลี่ยนชื่อ)",
                "content": "Random name : เปลี่ยนชื่อแบบสุ่ม\n\nVN name : ชื่อภาษาเวียดนาม\n\nForeign name : ชื่อภาษาต่างประเทศ\n\nName set by user : นำเข้าชื่อด้วยตัวเอง\n\nLname : นามสกุล\n\nMiddle name : ชื่อกลาง\n\nFname : ชื่อ\n\nEnter list of full name : ป้อนรายชื่อเต็ม\n\nDelete used name: ลบชื่อที่ใช้แล้วออก\n\n",
                "type": "markdown",
                "images": [
                  "image605.png"
                ]
              },
              {
                "title": "5.Up Avatar (อัพรูปภาพโปรไฟล์)",
                "content": "Image folder : เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images : ลบรูปภาพที่ใช้แล้ว\n\nAdd profile frames : เพิ่มกรอบรูปภาพ\n\nSkip if already have avatar : ข้ามบัญชีที่มีอวตารแล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image285.png"
                ]
              },
              {
                "title": "6.Up Cover (อัพรูปภาพหน้าปก)",
                "content": "Image folder : เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images : ลบรูปภาพที่ใช้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image272.png"
                ]
              },
              {
                "title": "7.On - Off 2FA (เปิด/ปิด 2FA)",
                "content": "Turn off: ปิด 2FA\n\nTurn on :  เปิด 2FA\n\n",
                "type": "markdown",
                "images": [
                  "image607.png"
                ]
              },
              {
                "title": "8.Change Info Account (เปลี่ยนข้อมูลโปรไฟล์)",
                "content": "Bio : คำอธิบายตัวตน\n\nWork : ที่ทำงาน\n\nHigh School : การศึกษาระดับมัธยม\n\nCollege : การศึกษาระดับมหาวิทยาลัย\n\nCurrent City : เมืองปัจุบัน\n\nHometown : บ้านเกิด\n\nRelationship : สถานะความสัมพันธ์\n\nGender : เพศ\n\nBirthday : วันเกิด\n\nNickname : ชื่อเล่น\n\n",
                "type": "markdown",
                "images": [
                  "image369.png"
                ]
              },
              {
                "title": "9.Remove Trusted Devices (ลบอุปกรณ์ที่เชื่อถือได้)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image43.png"
                ]
              },
              {
                "title": "10.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)",
                "content": "Other functions\n\n",
                "type": "markdown",
                "images": [
                  "image243.png"
                ]
              },
              {
                "title": "1.Search Google (ค้นหาใน Google)",
                "content": "Keyword|Link web : คีย์เวิร์ด/ลิงก์เว็บไซต์\n\nNumber keywords to search : จำนวนคีย์เวิร์ดที่ต้องการค้นหา\n\nNumber search pages : จำนวนหน้าที่ต้องการค้นหา\n\nClick random link on web : คลิกลิงค์สุ่มบนเว็บ\n\nTime on web : เวลาที่อยู่บนหน้าเว็บ\n\n",
                "type": "markdown",
                "images": [
                  "image551.png"
                ]
              },
              {
                "title": "2.Access website (เข้าถึงเว็บไซต์)",
                "content": "วิดีโอ: MaxCare ฟังก์ชัน Access Website เพิ่มวิวยูทูบ\n\nList Links : ลิสต์ลิงค์เว็บไซต์\n\nCount link to access : จำนวนลิงค์ที่เข้าถึง\n\nClick random link on web : สุ่มคลิกลิงค์บนเว็บ\n\nTime on web : เวลาที่อยู่หน้าเว็บ\n\n",
                "type": "markdown",
                "images": [
                  "image430.png"
                ]
              },
              {
                "title": "3.Unlike page (ยกเลิกไลค์เพจ)",
                "content": "Count : จำนวนเพจที่ต้องการยกเลิกไลค์เพจ\n\nBreak : ระยะเวลาดีเลย์ในการยกเลิกไลค์เพจ\n\n",
                "type": "markdown",
                "images": [
                  "image292.png"
                ]
              },
              {
                "title": "4.Link with Instagram (เชื่อมโยงกับอินสตาแกรม)",
                "content": "Password : รหัสผ่าน\n\nRandom : สุ่มรหัสผ่าน\n\nEnter : นำเข้ารหัสผ่านด้วยตัวเอง\n\n2fa: เปิด 2fa\n\nAccount file path : path ของไฟล์บัญชี\n\n",
                "type": "markdown",
                "images": [
                  "image530.png"
                ]
              },
              {
                "title": "5.Unlink Instagram (ยกเลิกการเชื่อมโยงอินสตาแกรม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image730.png"
                ]
              },
              {
                "title": "6.Delete posts on Wall (ลบโพสต์บนไทม์ไลน์)",
                "content": "Count: จำนวนโพสต์ที่ต้องการลบ\n\nBreak : ระยะเวลาพักในการลบโพสต์\n\nOnly delete tagged posts : ลบโพสที่ถูกแท็กเท่านั้น\n\n",
                "type": "markdown",
                "images": [
                  "image598.png"
                ]
              },
              {
                "title": "7.Disagree spam (ร้องแย้งขัดต่อมาตรฐานชุมชน)",
                "content": "Quantity : จำนวนในการกระทำต่อมาตรฐานชุมชน\n\n",
                "type": "markdown",
                "images": [
                  "image326.png"
                ]
              },
              {
                "title": "8.Professional mode (โหมดมืออาชีพ)",
                "content": "Option : ตัวเลือก Turn on : เปิดโหมดมืออาชีพ Turn off  : ปิดโหมดมืออาชีพ\n\n",
                "type": "markdown",
                "images": [
                  "image714.png"
                ]
              },
              {
                "title": "9.Create Page (สร้างเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image265.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: กำหนดจำนวนเพจที่ต้องการสร้าง\n\nBreak (s): กำหนดเวลาพักระหว่างการสร้างแต่ละเพจ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อมูลพื้นฐานหน้าเพจ",
                "content": "Page name: ใส่ชื่อเพจที่ต้องการ (สามารถใช้สัญลักษณ์ * เพื่อสุ่มตัวอักษรได้ เช่น nickn*** )\n\nDelete used content: ติ๊กถูกเพื่อให้ลบชื่อที่ใช้ไปแล้วออกจากรายการ\n\nPage category: ใส่หมวดหมู่ของเพจ (ควรระบุเป็นภาษาอังกฤษ)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อมูลติดต่อและรายละเอียด",
                "content": "Bio: คำอธิบายสั้น ๆ เกี่ยวกับเพจ\n\nWebsite: ลิงก์เว็บไซต์\n\nPhone: หมายเลขโทรศัพท์\n\nEmail: อีเมลสำหรับติดต่อ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อมูลสถานที่",
                "content": "Address: ที่อยู่ (เลขที่บ้าน/ถนน)\n\nCity/town: เมืองหรือจังหวัด\n\nZIP code: รหัสไปรษณีย์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารูปภาพและข้อมูลทางเทคนิค",
                "content": "Folder avatar: ใส่ที่อยู่ Path ของโฟลเดอร์รูปโปรไฟล์\n\nFolder cover: ใส่ที่อยู่ Path ของโฟลเดอร์รูปหน้าปก\n\nPage recipient UID: ใส่หมายเลข UID ของบัญชีที่ต้องการให้รับสิทธิ์เป็นผู้ดูแลเพจ (Admin) หลังจากสร้างเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10.Unlock profile (ปลดล็อคโปรไฟล์)",
                "content": "วิดีโอ: MaxCare ฟังก์ชั่น Unlock Profile\n\n",
                "type": "markdown",
                "images": [
                  "image378.png"
                ]
              }
            ]
          },
          {
            "id": "cat_v0bs9",
            "name": "4.MaxCare วิธีการนำบัญชีเฟสบุ๊คเข้าสู่โปรแกรม",
            "sections": [
              {
                "title": "4.MaxCare วิธีการนำบัญชีเฟสบุ๊คเข้าสู่โปรแกรม",
                "content": "อธิบายรายละเอียดแต่ละฟังก์ชั่น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การนำบัญชีเฟสบุ๊คเข้าโปรแกรม Maxcare",
                "content": "หลังจากเปิดโปรแกรมมาแล้ว ให้กดที่ Import accounts เพื่อนำเฟสบุ๊คเข้าระบบ\n\nให้ทำการสร้างไฟล์ขึ้นมา โดยใส่ชื่อตามที่ต้องการได้เลยจากนั้นกด Add\n\nใส่ข้อมูลเฟสลงไป ตามแพทเทิน คั่นด้วยเครื่องหมาย |\n\n",
                "type": "markdown",
                "images": [
                  "image698.png",
                  "image531.png",
                  "image646.png"
                ]
              },
              {
                "title": "ยกตัวอย่างการเลือก Format ตามแพทเทินเฟสบุ๊คที่จะนำเข้า",
                "content": "จากนั้นเลือก format ตามแพทเทินที่เรากรอกเข้าไป แล้วกดติ้กถูกที่ Option เพื่อให้มันเช็คข้อมูล Account ต่างๆด้วย เช่น ชื่อ,เพศ,จำนวนเพื่อน,จำนวนกลุ่ม เป็นต้น\n\nเป็นอันเสร็จสิ้นขั้นตอนการนำเข้าเฟสบุ๊ค\n\n",
                "type": "markdown",
                "images": [
                  "image437.png",
                  "image316.png",
                  "image276.png",
                  "image109.png"
                ]
              }
            ]
          },
          {
            "id": "cat_wx1is",
            "name": "5.การใช้งาน Proxy กับ Maxcare",
            "sections": [
              {
                "title": "5.การใช้งาน Proxy กับ Maxcare",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ขั้นตอนการนำ  Proxy เข้าใน Maxcare แบบ Import",
                "content": "1.เลือกบัญชีที่ต้องการ ==> คลิกขวา ==> Enter Proxies\n\n2.นำ proxy มาวางในช่อง List Proxys ==> เลือก Type ของ Proxy ในช่อง Proxy Type ==> เลือกจำนวน บัญชี ต่อ Proxy หากกำหนด 2 หมายถึง ใช้ 2 บัญชี ต่อ 1 proxy ในช่อง Accounts/Proxy ==>  ในช่อง Option import Proxy ตัวเลือกการนำเข้า เลือกระหว่าง Sequence(แบบเจาะจง) Random(แบบสุ่ม) ==> หากต้องการให้ข้ามบัญชีที่มี Proxy อยู่เเล้วให้เลือกในช่อง Skip account that already have Proxy ==> จากนั้นกด Confirm\n\n3.หลังจากที่นำเข้า Proxy เสร็จแล้ว ไปที่หน้า General configs   ==> ไปที่เมนู Chang IP  เลือก Proxy ==> ในช่อง Option เลือก Entered For each account เป็นการใช้ proxy ที่อยู่ในบัญชี ==> จากนั้นกด Save ==>เสร็จขั้นตอนการนำเข้า  Proxy แบบ Import\n\n",
                "type": "markdown",
                "images": [
                  "image264.png",
                  "image254.png",
                  "image248.png"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_adzp3",
        "name": "คำถามและปัญหาที่พบบ่อย Maxcare",
        "sections": [
          {
            "title": "คำถามและปัญหาที่พบบ่อย Maxcare",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_10gwx",
            "name": "Maxcare วิธีแก้ Checkpoint 282,956",
            "sections": [
              {
                "title": "Maxcare วิธีแก้ Checkpoint 282,956",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Maxcare วิธีแก้ Checkpoint 282",
                "content": "เลือกบัญชีที่ต้องการแก้ 282 --> คลิกขวา --> Unlock checkpoint --> 282 --> Use cookie stored on the tool\n\nการตั้งค่าเมนู Unlock Checkpoiont สำหรับ 282\n\n- ByPass captcha\n\n- API Key Omocaptcha: ทำการใส่ API Key\n\n- capsolver.com: ทำการใส่ API Key\n\n- Checkpoint 282\n\n- Add phone: ทำการนำ API Key ของ viotp.com มาใส่\n\n- Switch 956 (if can): เปลี่ยนเป็น 956 หากสามารถเปลี่ยนได้\n\n- Up image\n\n- Folder path: นำ Path โฟลเดอร์ที่เก็บรูปภาพมาใส่ หรือใช้เป็น From Web\n\n- Upload image using free.facebook.com: กรณีเฟสบุ๊คให้อัปโหลดวิดีโอ ให้เลือกเมนูนี้ด้วย\n\n- จากนั้นกด Save\n\n",
                "type": "markdown",
                "images": [
                  "image600.png"
                ]
              },
              {
                "title": "Maxcare วิธีแก้ Checkpoint 956",
                "content": "*กรณีติด 956 อีเมลของบัญชีจำเป็นต้องล็อกอินได้ และเป็น Hotmail*\n\n*หากติด 956 xmdt จะไม่สามารถแก้ได้*\n\nเลือกบัญชีที่ต้องการแก้ 956 --> คลิกขวา --> Unlock checkpoint --> 956 --> Use cookie stored on the tool\n\nการตั้งค่าเมนู Unlock Checkpoiont สำหรับ 956\n\n- ByPass captcha\n\n- API Key Omocaptcha: ทำการใส่ API Key\n\n- capsolver.com: ทำการใส่ API Key\n\n- Delete contact info othe than email on tool: ลบเมลที่ใช้กับโปรแกรมไม่ได้ออก\n\n- จากนั้นกด Save\n\nหมายเหตุ\n\ncheck point 956 ใช้ api omocaptcha เข้าช่วยค่ะ\n\ncheck point 282 ใช้ api omocaptcha,Capsolver และโปรแกรม OTP\n\nomocaptcha สมัครที่ OMOCaptcha\n\nCapsolver สมัครที่ CapSolver\n\nโปรแกรมรับ OTP แนะนำ สมัครที่ Viotp\n\nทั้ง 3 เว็บไซต์ ที่ใช้นอกเหนือจากโปรแกรม มีค่าใช้จ่ายเพิ่มเติม\n\nลูกค้าต้องเติมเงินในแต่ละเว็บ เพื่อนำ API มาใช้ค่ะ\n\n",
                "type": "markdown",
                "images": [
                  "image85.png"
                ]
              }
            ]
          },
          {
            "id": "cat_2hkfv",
            "name": "Maxcare ดาวน์โหลดโปรแกรมไม่ได้ Maxcare.zip เป็นอันตราย ทำอย่างไร ?",
            "sections": [
              {
                "title": "Maxcare ดาวน์โหลดโปรแกรมไม่ได้ Maxcare.zip เป็นอันตราย ทำอย่างไร ?",
                "content": "โปรแกรมเป็นบอทฟาร์มเฟสบุ๊ค เครื่องคอมพิวเตอร์จึงคิดว่าเป็นไวรัส แต่จริงๆแล้วไม่ใช่นะคะ\n\nเมื่อดาวน์โหลดโปรแกรม แล้วเจอแจ้งเตือนแบบนี้ ให้ทำการแก้ไขดังนี้\n\n1. กด CTRL+J\n\n2.ให้เลือกเก็บไฟล์อันตรายไว้\n\n3. .ให้เลือกเก็บเอาไว้ ไม่ว่าอย่างไรก็ตาม จากนั้นไฟล์จะทำการดาวน์โหลดได้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image676.png",
                  "image697.png",
                  "image599.png"
                ]
              }
            ]
          },
          {
            "id": "cat_jt8jh",
            "name": "Maxcare และ MaxSystemCare แตกต่างกันยังไง ?",
            "sections": [
              {
                "title": "Maxcare และ MaxSystemCare แตกต่างกันยังไง ?",
                "content": "Maxcare v4.0 จะเป็นการรันผ่าน Chrome Browser ส่วน MaxSystemCare จะรันผ่าน LDplayer Android Emulator ซึ่งจะเป็นตัวโปรแกรมเสริม ใช้ควบคู่กับ Maxcare ซึ่งหลังจากวอมบัญชีจาก Maxcare แล้วนำมาวอมต่อที่ MaxSystemCare หากบัญชีที่วอมรอด จะทำให้บัญชีนั้นแข็งแรงขึ้นมาก ซึ่งฟังก์ชั่นการใช้งานนั้นก็จะคล้ายกันกับ Maxcare\n\nตัวอย่างการทำงานของ Maxcare\n\nตัวอย่างการทำงานของ MaxSystemCare\n\n",
                "type": "markdown",
                "images": [
                  "image777.png",
                  "image279.png"
                ]
              }
            ]
          },
          {
            "id": "cat_d100v",
            "name": "Maxcare แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome",
            "sections": [
              {
                "title": "Maxcare แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เข้าไปที่เว็บ",
                "content": "PortableApps.com - Browse /Google Chrome Portable at SourceForge.net\n\nหลังจากนั้น กด Ctrl+F แล้วพิมพ์ตรงช่องค้นหา 123 เลือกดาวน์โหลดตามที่ในกรอบสีแดง รอจนกว่าจะดาวน์โหลดเสร็จ\n\n",
                "type": "markdown",
                "images": [
                  "image27.png"
                ]
              },
              {
                "title": "2.ติดตั้งไฟล์ที่ดาวน์โหลดมา",
                "content": "",
                "type": "markdown",
                "images": [
                  "image621.png"
                ]
              },
              {
                "title": "3.หลังจากดาวน์โหลดเสร็จ ไปที่อยู่ไฟล์ที่ดาวน์โหลดเสร็จ",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.1 ไปที่ app",
                "content": "",
                "type": "markdown",
                "images": [
                  "image494.png"
                ]
              },
              {
                "title": "3.2 ไปที่ chrome-bin",
                "content": "",
                "type": "markdown",
                "images": [
                  "image559.png"
                ]
              },
              {
                "title": "3.3 จากนั้นพิมพ์\\chrome.exe ในช่องที่อยู่ไฟล์ แล้วคัดลอก",
                "content": "",
                "type": "markdown",
                "images": [
                  "image343.png"
                ]
              },
              {
                "title": "4.นำไปวางในโปรแกรม MaxCare",
                "content": "ไปที่ general configs\n\n",
                "type": "markdown",
                "images": [
                  "image535.png"
                ]
              },
              {
                "title": "5. https://minsoftware.xyz/chromedriver.php?v=123 คัดลอกลิงค์ไปวางในแท็บใหม่",
                "content": "รอจนโหลดเสร็จ\n\n",
                "type": "markdown",
                "images": [
                  "image40.png"
                ]
              },
              {
                "title": "6.จากนั้นเปลี่ยนชื่อไฟล์ เพิ่ม .zip",
                "content": "กด Yes\n\n",
                "type": "markdown",
                "images": [
                  "image34.png",
                  "image336.png"
                ]
              },
              {
                "title": "7.หลังจากแตกไฟล์เข้าไปที่ driver > win32 จากนั้นกดคัดลอก chromedriver.exe",
                "content": "",
                "type": "markdown",
                "images": [
                  "image418.png"
                ]
              },
              {
                "title": "8.นำไปวางในโฟลเดอร์ MaxCare",
                "content": "หากขึ้นหน้าต่างแบบนี้\n\nให้ไปที่โปรแกรม MaxCare แล้วกด close chromedriver\n\nจากนั้น กด Try Again เป็นอันเสร็จขั้นตอนการแก้ปัญหา\n\n",
                "type": "markdown",
                "images": [
                  "image81.png",
                  "image247.png",
                  "image81.png"
                ]
              }
            ]
          },
          {
            "id": "cat_9xkxr",
            "name": "Maxcare ไม่สามารถเปิดใช้งานโปรแกรมได้",
            "sections": [
              {
                "title": "Maxcare ไม่สามารถเปิดใช้งานโปรแกรมได้",
                "content": "โปรแกรมทำงานมาถึงหน้า 2fa แล้วปิดไป !\n\n1.โปรแกรมขึ้นว่า 2fa is in correct!\n\n2.โปรแกรมขึ้นว่า login fail!\n\n3.โปรแกรมขึ้นว่า close chrome\n\n4.โปรแกรมขึ้นว่า Error opening browser\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "วิธีแก้ไข",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.อัพเดตเวอร์ชัน Maxcare",
                "content": "ไปที่โฟล์เดอร์ Maxcare => AutoUpdate รอจนกว่าจะเสร็จ\n\nเสร็จสิ้นขั้นตอนการอัพเดตเวอร์ชัน Maxcare เข้าใช้งานเวอร์ชันล่าสุด\n\n",
                "type": "markdown",
                "images": [
                  "image746.png"
                ]
              },
              {
                "title": "2.อัพเดตโครมไดร์เวอร์",
                "content": "ไปที่ General configs => Update Chromedriver รอจนกว่าจะเสร็จ\n\nเสร็จสิ้นขั้นตอนการอัพเดตโครมไดร์เวอร์\n\n",
                "type": "markdown",
                "images": [
                  "image334.png"
                ]
              }
            ]
          },
          {
            "id": "cat_5uhws",
            "name": "Maxcare วิธีย้ายข้อมูลจากเครื่องเดิมไปยังเครื่องใหม่",
            "sections": [
              {
                "title": "Maxcare วิธีย้ายข้อมูลจากเครื่องเดิมไปยังเครื่องใหม่",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.วิธี Exprot ข้อมูลจากเครื่องเก่า",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.1.เลือกบัญชีที่ต้องการย้ายข้อมูล ==> คลิกขวา ==> Exprot data acc",
                "content": "",
                "type": "markdown",
                "images": [
                  "image470.png"
                ]
              },
              {
                "title": "1.2 เลือกโฟลเดอร์ที่ต้องการเก็บไฟล์ข้อมูล ==>  กด Select folder",
                "content": "",
                "type": "markdown",
                "images": [
                  "image560.png"
                ]
              },
              {
                "title": "1.3 จากนั้นจะได้ไฟล์ชื่อ data_acc นำไฟล์ไปที่เครื่องใหม่ที่ต้องการย้ายข้อมูล",
                "content": "",
                "type": "markdown",
                "images": [
                  "image87.png"
                ]
              },
              {
                "title": "2.วิธี Import ข้อมูลเข้าที่เครื่องใหม่",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.1 คลิกขวา ==> Import data acc",
                "content": "",
                "type": "markdown",
                "images": [
                  "image25.png"
                ]
              },
              {
                "title": "2.2 เลือกไฟล์ที่ Exprot ข้อมูลจากเครื่องเก่า ==> กด open",
                "content": "",
                "type": "markdown",
                "images": [
                  "image375.png"
                ]
              },
              {
                "title": "เป็นอันเสร็จขึ้นตอนการย้ายข้อมูลจากเครื่องเก่าไปยังเครื่องใหม่",
                "content": "",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_lgzio",
            "name": "Maxcare วิธีการย้ายเครื่องใช้งานจากเครื่องเก่าไปเครื่องใหม่ทำยังไง ?",
            "sections": [
              {
                "title": "Maxcare วิธีการย้ายเครื่องใช้งานจากเครื่องเก่าไปเครื่องใหม่ทำยังไง ?",
                "content": "คัดลอก Device code จากเครื่องใหม่ เสร็จแล้วไปที่เว็บไซต์ MIN Software - MIN Software - Login แล้วล็อคอิน\n\nจากนั้นไปหน้าการจัดการซอร์ฟแวร์ คลิกชื่อ Maxcare-English (หรือโปรแกรมที่เราต้องการจะย้ายเครื่อง) จากนั้นกดปุ่มเปลี่ยนเครื่องบนขวามือ แล้วนำ Devide code ของเครื่องใหม่มาใส่ กดตกลง เป็นอันเสร็จสิ้น\n\n",
                "type": "markdown",
                "images": [
                  "image462.png",
                  "image4.png"
                ]
              }
            ]
          },
          {
            "id": "cat_kn89h",
            "name": "Maxcare วิธีดาวน์โหลด Chrome driver และติดตั้ง ?",
            "sections": [
              {
                "title": "Maxcare วิธีดาวน์โหลด Chrome driver และติดตั้ง ?",
                "content": "ไปที่มุมขวาบนของโครม กดที่ 3 จุด แล้วเลือก Settings\n\nกดที่ About Chrome ให้ดาวน์โหลดตามเวอร์ชั่นของตัวเอง (จากรูปจะเป็น Version 92.0.451.5.159)\n\nสามารถไปดาวน์โหลดได้ที่ลิ้งตามนี้ ChromeDriver - WebDriver for Chrome - Downloads จากนั้นเลือกตามเวอร์ชั่นโครมของตัวเอง ซึ่งจากตัวอย่างโครมจะเป็นเวอร์ชั่น 92.0 ให้เลือก ChromeDriver 92.0.4515.107\n\nจากนั้นให้กดดาวน์โหลดตามรูปด้านบนได้เลย\n\nแตกไฟล์หรือลากไฟล์ chromedriver.exe ไปใส่ในโฟลเดอร์ Maxcare เป็นอันเสร็จสิ้นเรียบร้อย\n\nหากต้องใช้ Chrome เวอร์ชัน 115 หรือใหม่กว่า Chrome for Testing availability หน้านี้มีปลายทาง JSON ที่สะดวกสำหรับการดาวน์โหลด ChromeDriver เวอร์ชันเฉพาะ\n\nให้ทำการดาวน์โหลด chromedriver เวอร์ชันที่ต้องการ โดยการคัดลอกลิงค์แล้วนำไปวางในแถบใหม่\n\n",
                "type": "markdown",
                "images": [
                  "image515.png",
                  "image576.png",
                  "image23.png",
                  "image750.png",
                  "image447.png",
                  "image482.png",
                  "image163.png"
                ]
              }
            ]
          },
          {
            "id": "cat_wqbj3",
            "name": "Maxcare วิธีแก้ปัญหาไม่สามารถเปิดใช้งานโปรแกรมได้ ตามรูป",
            "sections": [
              {
                "title": "Maxcare วิธีแก้ปัญหาไม่สามารถเปิดใช้งานโปรแกรมได้ ตามรูป",
                "content": "ขั้นตอนที่ 1 : แตกไฟล์ maxcare ใหม่อีกไฟล์\n\nขั้นตอนที่ 2 : เข้าไปที่ไฟล์ maxcare ที่พึ่งแตกไฟล์ จากนั้นหาไฟล์ที่มีชื่อว่า MySql.Data.dll\n\nขั้นตอนที่ 3 : คัดลอกไฟล์ MySql.Data.dll มาวางในโฟล์เดอร์ maxcare ที่ไม่สามารถเข้าใช้งานได้\n\nเสร็จสิ้นขั้นตอนการแก้ปัญหา\n\n",
                "type": "markdown",
                "images": [
                  "image63.png",
                  "image790.png",
                  "image174.png"
                ]
              }
            ]
          },
          {
            "id": "cat_dtgtk",
            "name": "Maxcare ไม่ทำตามสคริปต้องทำอย่างไร",
            "sections": [
              {
                "title": "Maxcare ไม่ทำตามสคริปต้องทำอย่างไร",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "นำ Useragent ด้านล่างใส่เพิ่มในทุกบัญชี2",
                "content": "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "วิธีการนำเข้า",
                "content": "1.เลือกบัญชีที่ต้องการนำ useragent เข้า >> คลิกขวา  >> Update data >> Useragent\n\n2.นำ Useragent  ด้านล่าง\n\nMozilla/5.0 (Linux; Android 6.0.1; SAMSUNG-SM-J320A Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/301.0.0.37.477;]\n\nไปวางที่ Enter data >> กด Save\n\n",
                "type": "markdown",
                "images": [
                  "image617.png",
                  "image555.png"
                ]
              },
              {
                "title": "**กรณีที่ใส่ Useragent อยู่แล้วแต่โปรแกรมไม่ทำตามสคริปให้นำ  Useragent ออกจากบัญชี**",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "วิธีการนำ Useragent ออกจากบัญชี",
                "content": "1.เลือกบัญชีที่ต้องการนำ Useragent  ออก >> คลิกขวา >> Update data  >>  Useragent\n\n2.กด Save เป็นอันเสร็จขั้นตอนการนำ Useragent ออก\n\n",
                "type": "markdown",
                "images": [
                  "image239.png",
                  "image55.jpg"
                ]
              }
            ]
          },
          {
            "id": "cat_foeu6",
            "name": "Maxcare การอัพเดต Chorme driver version.115 ขึ้นไป",
            "sections": [
              {
                "title": "Maxcare การอัพเดต Chorme driver version.115 ขึ้นไป",
                "content": "1.ให้ทำการเปิด Google Chrome จากนั้นคลิกที่จุดสามจุด\n\n2.เลือกที่หน้าเมนูการตั้งค่า\n\n3.ให้คลิกไปที่ เกี่ยวกับ Chrome\n\n4.จากนั้นให้ตรวจสอบ Chrome Version ว่าเป็น Version อะไร\n\n5.จากนั้นให้พิมพ์ว่า ChromeDriver\n\n6.เลือกเว็บแรกตามรูปที่ทำกรอบไว้ได้เลย\n\n7.จากนั้นให้คลิกตามที่ทำกรอบไว้\n\n8.จากนั้นให้ทำการหา Chrome Version ที่ตรงกับ Chrome version ปัจจุบัน แล้วทำการคัดลอก Link\n\n9.ให้ทำการเปิดแท็บใหม่ จากนั้นวาง Link ที่คัดลอกลงในช่องที่ทำกรอบไว้ แล้วจะขึ้นดาวน์โหลด\n\n10.เมื่อดาวน์โหลดเสร็จแล้ว ให้ทำการกด ปุ่ม Ctrl + J\n\n11.จากนั้นทำการคลิกที่แสดงในโฟลเดอร์\n\n12.ให้เปิดไฟล์ที่เราโหลดมา\n\n13.เมื่อกดเปิดไฟล์แล้ว ให้ทำการคัดลอก Chromedriver\n\n14.หลังจากคัดลอกแล้วให้ทำการเปิดโฟลเดอร์ MaxCare จากนั้นให้ ทำการวาง Chromedriver ที่คัดลอกไว้\n\n15.จากนั้นคลิก ให้ทำการวางทับไปเลย\n\n",
                "type": "markdown",
                "images": [
                  "image481.jpg",
                  "image258.jpg",
                  "image717.jpg",
                  "image230.jpg",
                  "image76.jpg",
                  "image510.jpg",
                  "image696.jpg",
                  "image794.jpg",
                  "image648.jpg",
                  "image568.jpg",
                  "image457.jpg",
                  "image304.jpg",
                  "image660.jpg",
                  "image363.jpg",
                  "image423.jpg"
                ]
              },
              {
                "title": "เสร็จสิ้นขั้นตอนการอัพเดต Chorme driver",
                "content": "16.หากขึ้นหน้าแบบนี้ ให้ทำการเปิด Task Manager โดยการคลิกขวาที่ Taskbar\n\n17.ให้หาคำว่า Chromedriver จากนั้นกดคลิกขวา เลือกคำว่า Entask หรือไม่ก็ทำการ Restart เครื่อง\n\n18.เมื่อทำการปิด Chromedriver หรือ Restart เรียบร้อยแล้ว ทำการคัดลอก Chormedriver และนำมาวางใน MaxCare อีกครั้ง\n\n",
                "type": "markdown",
                "images": [
                  "image194.jpg",
                  "image373.jpg",
                  "image724.jpg"
                ]
              },
              {
                "title": "ขอบคุณที่ใช้บริการและเชื่อใจ Minsoft Thailand",
                "content": "",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_7o50p",
            "name": "Maxcare วิธีการตั้งค่ารันบัญชีผ่าน Gologin",
            "sections": [
              {
                "title": "Maxcare วิธีการตั้งค่ารันบัญชีผ่าน Gologin",
                "content": "1.ไปที geneal configs\n\n2.ไปที่ Chrome configs ตามที่ลูกศรชี้ตามภาพ\n\n3.เลือก Use Gologin\n\n4.กด Download\n\n5.หลังจากดาวน์โหลดเสร็จกด Save\n\nเป็นอันเสร็จขั้นตอนการตั้งค่าใช้งานบัญชีด้วย Gologin\n\nโปรแกรมตัวเสริมใช้ควบคู่สำหรับ Maxcare ใช้ระบบ LDplayer Android Emulator ในการใช้งาน ทำให้บัญชีที่ผ่านการวอมจาก Maxcare แล้ว หากนำมารันบน MaxSystemCare ต่อ จะทำให้บัญชีนั้นแข็งแรงขึ้นอย่างมาก\n\nระบบฟาร์มบัญชีอัติโนมัติ ไม่จำกัดจำนวนเฟช ใช้ระบบ LDplayer Android Emulator ในการรัน\n\nด้วยฟังชั่นครบครัน ดังนี้\n\nเมนูฟังก์ชั่นโปรแกรม MaxSystemCare\n\nอ่านการแจ้งเตือน\n\nปฏิสัมพันธ์หน้าฟีด\n\nปฏิสัมพันธ์กับเพื่อน\n\nปฏิสัมพันธ์กับกลุ่ม\n\nปฏิสัมพันธ์กับเพจ\n\nปฏิสัมพันธ์กับโปรไฟล์\n\nปฏิสัมพันธ์กับวิดีโอ (Watch)\n\nปฏิสัมพันธ์กับเรล (Reel)\n\nปฏิสัมพันธ์กับสตอรี่\n\nตั้งเวลาหยุดพัก\n\nปฏิสัมพันธ์หน้าฟีด 2\n\nเพิ่มเพื่อนด้วยคำค้นหา\n\nเพิ่มเพื่อนด้วยไอดี (UID)\n\nเพิ่มเพื่อนจากรายการแนะนำ\n\nยืนยันรับคำขอเป็นเพื่อน\n\nลบเพื่อน\n\nยกเลิกคำขอเป็นเพื่อนที่ส่งไป\n\nเพิ่มสมาชิกกลุ่ม\n\nเข้ากลุ่มด้วยคำค้นหา\n\nเข้ากลุ่มที่ระบุเจาะจง\n\nเข้ากลุ่มจากรายการแนะนำ\n\nออกจากกลุ่ม\n\nสร้างกลุ่มใหม่\n\nโพสต์หน้าวอลล์\n\nโพสต์ลงกลุ่ม\n\nโพสต์เรล\n\nโพสต์สตอรี่\n\nแชร์โพสต์\n\nสแปมโพสต์\n\nสแปมหน้าฟีด\n\nสแปมเพื่อน\n\nสแปมกลุ่ม\n\nรันระบบทำรายได้\n\nรีวิวเพจ\n\nปั๊มไลก์เพจ\n\nปั๊มผู้ติดตามไอดี (UID)\n\nปฏิสัมพันธ์กับโพสต์ที่ระบุ\n\nปฏิสัมพันธ์กับโพสต์ตามคำค้นหา\n\nปฏิสัมพันธ์กับวิดีโอและไลฟ์สด\n\nปฏิสัมพันธ์กับเรลผ่านลิงก์\n\nเชิญเพื่อนให้กดไลก์เพจ\n\nเชิญเพื่อนให้เข้ากลุ่ม\n\nซิงค์รายชื่อผู้ติดต่อ\n\nยกเลิกการถูกใจเพจ\n\nเปลี่ยนรหัสผ่าน\n\nอัปโหลดรูปโปรไฟล์\n\nอัปโหลดรูปปก\n\nลบเบอร์โทรศัพท์\n\nเปิด-ปิดการยืนยันตัวตน 2 ชั้น (2FA)\n\nเพิ่มอีเมล\n\nเปลี่ยนชื่อบัญชี\n\nเปลี่ยนข้อมูลบัญชี\n\nออกจากระบบในอุปกรณ์อื่น\n\nเปิดโหมดมืออาชีพ\n\nลบโพสต์หน้าวอลล์\n\nปลดล็อกโปรไฟล์\n\n",
                "type": "markdown",
                "images": [
                  "image719.png",
                  "image59.png"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maxsystemcare",
    "name": "MaxSystemCare",
    "categories": [
      {
        "id": "cat_mch6t",
        "name": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxSystemCare",
        "sections": [
          {
            "title": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxSystemCare",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off\n\nVirus & Threat protection\n\nVirus & Threat protection settings จากนั้นกด Manage settings\n\nReal-time protection เป็น Off\n\n",
            "type": "markdown",
            "images": [
              "image775.jpg",
              "image245.jpg",
              "image228.jpg"
            ]
          },
          {
            "title": "หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "1.ให้มาหน้า การจัดการซอร์ฟแวร์ จากนั้นให้คลิกขวาที่คำว่า ดาวน์โหลด และกด คัดลอกที่อยู่ลิงก์ ไปวางในแท็บใหม่\n\n2.จากนั้นให้เปิดแท็บใหม่ รอให้โปรแกรมดาวน์โหลดเสร็จสิ้น\n\n3.ไปที่ดาวน์โหลด หรือ Ctrl + J แล้วไปที่ เก็บเอาไว้ไม่ว่าอย่างไรก็ตาม + เก็บไฟล์อันตรายไว้\n\n4.ไปที่โฟลเดอร์ที่ดาวน์โหลด\n\n5.หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxSystemCarePro.zip ที่โหลดมา จากนั้นสามารถเลือกได้ว่าจะแตกไฟล์แบบไหน\n\n6.เปิดโฟลเดอร์ MaxSystemCarePro\n\n7.เปิด AutoUpdate.exe หากมีเวอร์ชันใหม่ให้ทำการ Update\n\n8.เมื่อทำการ Update เสร็จแล้วจะมีโปรแกรมเวอร์ชันล่าสุดปรากฏขึ้นมา ทำการเปิดโปรแกรมเพื่อใช้งาน\n\n9.ทำการเข้าสู่ระบบให้เรียบร้อย\n\n10.ไปที่ General configs\n\n",
            "type": "markdown",
            "images": [
              "image226.jpg",
              "image459.jpg",
              "image350.jpg",
              "image710.jpg",
              "image669.jpg",
              "image185.jpg",
              "image667.png",
              "image91.png",
              "image795.png",
              "image137.jpg"
            ]
          },
          {
            "title": "กรณีใช้โปรแกรม Maxcare หากไม่ได้ใช้ข้ามไปขั้นตอนที่ 11-12 ได้เลย",
            "content": "11.Copy Path ของ Maxcare ที่โฟลเดอร์ Maxcare\n\n12.นำ Path โฟลเดอร์ Maxcare มาวางที่ Path to Maxcare\n\n13.คลิกที่ Download LDplayer เพื่อดาวน์โหลด LDplayer\n\n14.หลังจากดาวน์โหลด LDplayer เสร็จแล้ว ให้ทำการแตกไฟล์ ldplayer\n\n15.จากนั้นทำการคัดลอก Path LDplayer\n\n16.นำมาวางในช่อง Path to LDPlayer\n\n17.คลิกปุ่ม ลง ในช่อง LDplayer configs\n\n18.ไปที่ RAM แล้วเลือก 1024M แล้วกด Save เป็นอันเสร็จสิ้น\n\n",
            "type": "markdown",
            "images": [
              "image410.jpg",
              "image36.jpg",
              "image270.jpg",
              "image679.jpg",
              "image35.jpg",
              "image492.jpg",
              "image562.jpg",
              "image695.jpg"
            ]
          },
          {
            "title": "ขอบคุณที่ใช้บริการและเชื่อใจ Minsoft Thailand",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_r4f3z",
        "name": "วิธีใช้งานโปรแกรม",
        "sections": [
          {
            "title": "วิธีใช้งานโปรแกรม",
            "content": "รวมวิธีการใช้งานโปรแกรม MaxSystemCare\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_risxm",
            "name": "1.วิธีการเชื่อมข้อมูลกับ Maxcare",
            "sections": [
              {
                "title": "1.วิธีการเชื่อมข้อมูลกับ Maxcare",
                "content": "ตัวอย่างวิธีคัดลอก path folder Maxcare\n\nหลังจากเปิดโปรแกรมเสร็จแล้ว ให้คลิกเมนู General configs จากนั้น ติ๊ก sync data with Maxcare เพื่อเชื่อมข้อมูลเฟสที่อยู่ใน Maxcare จากนั้นกด Save แล้วกด Refresh 1 ครั้ง\n\n",
                "type": "markdown",
                "images": [
                  "image401.png",
                  "image662.png",
                  "image460.png"
                ]
              }
            ]
          },
          {
            "id": "cat_p4khh",
            "name": "2.ดาวน์โหลด LDplayer ที่ถูกตั้งค่าเข้ากับ MaxSystemCare",
            "sections": [
              {
                "title": "2.ดาวน์โหลด LDplayer ที่ถูกตั้งค่าเข้ากับ MaxSystemCare",
                "content": "ต้องใช้โปรแกรม LDplayer ที่ถูกตั้งค่าเข้ากับ MaxSystemCare นี้เท่านั้น โดยสามารถดาวน์โหลดได้ผ่านที่นี่: LDplayer-MaxSystemCare - Google Drive\n\nหลังจากดาวน์โหลดเสร็จแล้วให้แตกไฟล์เป็นโฟลเดอร์ ไปไว้ตามที่ต้องการ\n\nหลังจากแตกไฟล์เสร็จให้คัดลอก path folder มาใส่ในโปรแกรม MaxSystemCare โดยไปที่ General configs และวาง path folder ที่ LDplayer configs ดังตัวอย่างข้างบน เป็นอันเสร็จสิ้น\n\n",
                "type": "markdown",
                "images": [
                  "image52.png",
                  "image699.png"
                ]
              }
            ]
          },
          {
            "id": "cat_ez3md",
            "name": "3. อธิบายการตั้งค่าต่างๆเบื้องต้น",
            "sections": [
              {
                "title": "3. อธิบายการตั้งค่าต่างๆเบื้องต้น",
                "content": "อธิบายฟังก์ชั่นการใช้งานพื้นฐาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "General configs",
                "content": "General configs (การตั้งค่าทั่วไป)\n\nThreads: จำนวนงานที่จะให้โปรแกรมทำพร้อมกัน\n\nNumbers threads check in: ใช้สำหรับเช็คสถานะบัญชีโดยไม่ต้องเปิดหน้าจอ\n\nSync data with MaxCare: ถ้าคุณใช้โปรแกรม MaxCare อยู่ด้วย ให้ติ๊กถูกตรงนี้แล้วนำที่อยู่โฟลเดอ์ของ Maxcare มาใส่ในช่อง Path to MaxCare เพื่อให้ฐานข้อมูลบัญชีเชื่อมถึงกัน\n\nFolder profile: โฟลเดอร์ที่ใช้เก็บข้อมูล Profile ของแต่ละบัญชี\n\nLDPlayer Configs (การรันบนตัวจำลองมือถือ)\n\nSelect run option: เลือกรูปแบบการรัน\n\nMulti Account / 1 LDPlayer: 1 หน้าต่างจำลอง จะรันสลับใช้หลายบัญชี\n\nEach Account / 1 LDPlayer: 1 บัญชี จะผูกติดกับ 1 หน้าต่างจำลองแยกกันชัดเจน\n\nPath to LDPlayer: ตำแหน่งโฟลเดอร์ที่ติดตั้งโปรแกรม LDPlayer ในเครื่องของคุณ\n\nType Open LDPlayer: รูปแบบการเปิด\n\nSequence: เปิดหน้าต่างตามลำดับ 1, 2, 3... ไปเรื่อยๆ โดยอัตโนมัติ\n\nDelay mở LDPlayer: เปิดหน้าต่างโดยมีการหน่วงเวลา (Delay) ระหว่างจอ\n\nShow LDPlayer: เลือกว่าจะให้แสดงหน้าจอ LDPlayer แบบไหน\n\nAdd LDPlayer to Form View: ยัดหน้าต่าง LDPlayer เข้ามาไว้ในตัวโปรแกรมหลักเพื่อให้ดูง่ายและไม่รกหน้าจอ\n\nShow on PC screen: ปล่อยให้หน้าต่าง LDPlayer แยกออกมาอิสระบนหน้าจอ Windows ปกติ\n\nDelay đóng LDPlayer: ตั้งค่าเวลาหน่วงก่อนจะปิดหน้าต่าง\n\nAllow Facebook to access GPS: อนุญาตให้ Facebook เข้าถึงตำแหน่งที่ตั้งได้\n\nFb Version: เวอร์ชันของ Facebook App\n\nEmail Configs (การตั้งค่าอีเมล)\n\nใช้สำหรับเชื่อมต่อบริการอีเมลชั่วคราวหรืออีเมลอัตโนมัติ\n\nChange IP Configs (การตั้งค่า IP)\n\nDon't Check IP before running: ติ๊กหากไม่ต้องการให้ระบบตรวจสอบ IP ก่อนเริ่มงาน\n\nDelay after change IP: ตั้งเวลารอหลังจากเปลี่ยน IP เสร็จเพื่อให้ระบบเสถียร\n\nChange IP: เลือกวิธีการเปลี่ยน IP (เช่น Proxy, Dcom, หรืออื่นๆ) หากไม่ต้องการเปลี่ยนให้เลือก Don't change IP\n\nOther Configs (การตั้งค่าอื่นๆ)\n\nColor Distinguishing: เลือกรูปแบบการแสดงสีสถานะของบัญชี\n\nChange row background: เปลี่ยนสีพื้นหลังของทั้งแถว\n\nChange text color: เปลี่ยนเฉพาะสีของตัวอักษรในแถวนั้นๆ\n\nSave [Description] column data: ติ๊กเพื่อให้ระบบบันทึกข้อมูลในช่องรายละเอียดไว้\n\n",
                "type": "markdown",
                "images": [
                  "image419.png",
                  "image708.png",
                  "image301.png",
                  "image291.png",
                  "image386.png",
                  "image187.png"
                ]
              },
              {
                "title": "Interactive configs",
                "content": "Before running (ส่วนการเตรียมตัว)\n\nCheck wall account: ตรวจสอบหน้าโปรไฟล์ (Wall) ของบัญชีก่อนเริ่มงาน\n\nShuffle account order: สลับลำดับบัญชีแบบสุ่ม เพื่อไม่ให้รันเรียงตามรายชื่อเดิมซ้ำ ๆ\n\nLogin (ส่วนการเข้าสู่ระบบ)\n\nLogin type: เลือกวิธีเข้าใช้งาน\n\nUid|Pass\n\nEmail|Pass\n\nAuto unlock checkpoint otp email: หากบัญชีติด Checkpoint และต้องใช้รหัส OTP จากอีเมล ระบบจะพยายามล็อกอินเข้าอีเมลเพื่อดึงรหัสมาปลดล็อกให้โดยอัตโนมัติ\n\nInteraction (ส่วนการปฏิสัมพันธ์)\n\nSelect script: เลือกชุดคำสั่ง (Script) ที่ต้องการให้บัญชีทำ\n\nLimit run time per account (seconds): จำกัดระยะเวลาที่แต่ละบัญชีจะทำงาน\n\nLimit run time per turn (minutes): จำกัดระยะเวลาการทำงานต่อรอบ\n\nWaiting time between actions (seconds): กำหนดช่วงเวลาพักระหว่างแต่ละการกระทำ\n\nRerun all accounts after completed: ตั้งค่าให้วนกลับมารันซ้ำทุกบัญชีเมื่อทำงานครบแล้ว\n\nTotal turns: จำนวนรอบที่ต้องการรันซ้ำ\n\nWait for next turn: ระยะเวลารอก่อนเริ่มรอบถัดไป\n\nAfter interaction (ส่วนการตั้งค่าหลังเสร็จสิ้น)\n\nAuto get token / Auto get cookie: ดึงข้อมูล Token หรือ Cookie อัตโนมัติหลังรันเสร็จ\n\nCheck Info Acc after running: ตรวจสอบข้อมูลบัญชีหลังทำงาน โดยสามารถเลือกหัวข้อที่ต้องการตรวจได้เช่น: Name, Gender, Birthday, Friend, Group, Follow, Page\n\nNot use Token Cookie: หากติ๊กช่องนี้ ระบบจะไม่ใช้ Token หรือ Cookie ที่มีอยู่ในการเช็คข้อมูลบัญชี\n\nTurn on wall post browsing: เปิดการเข้าชมโพสต์บนหน้าวอลล์\n\nLogout account: สั่งให้ออกจากระบบทันทีเมื่อทำงานเสร็จ\n\n",
                "type": "markdown",
                "images": [
                  "image151.png",
                  "image520.png",
                  "image133.png",
                  "image498.png",
                  "image173.png"
                ]
              }
            ]
          },
          {
            "id": "cat_tflm0",
            "name": "4. อธิบายเมนูฟังก์ชั่นการทำงาน interactive (MaxSystemCare)",
            "sections": [
              {
                "title": "4. อธิบายเมนูฟังก์ชั่นการทำงาน interactive (MaxSystemCare)",
                "content": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น\n\ninterraction\n\n",
                "type": "markdown",
                "images": [
                  "image59.png"
                ]
              },
              {
                "title": "1. Read notification(อ่านการแจ้งเตือน)",
                "content": "วิดีโอ: การใช้งานฟังก์ชั่น Read notification โปรแกรม MaxsystemCare\n\nCount: จำนวนการแจ้งเตือนที่ต้องการอ่าน\n\nBreak : ระยะเวลาดีเลย์ในการอ่านการแจ้งเตือน\n\n",
                "type": "markdown",
                "images": [
                  "image354.png"
                ]
              },
              {
                "title": "2. Interact Newsfeed(โต้ตอบฟีดข่าว)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image186.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์ที่เข้าไปมีส่วนร่วม\n\nLimit interacting time: หยุดดตามระยะเวลาที่ใช้\n\nCount: กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปทำงาน\n\nView post (s): กำหนดระยะเวลาในการ \"หยุดดู\" ต่อ 1 โพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบและความรู้สึก",
                "content": "Probability (%): โอกาสที่จะกดแสดงความรู้สึก (เช่น ตั้ง 50% ระบบจะสุ่มกดบ้างไม่กดบ้าง)\n\nเลือกประเภทของความรู้สึกที่ต้องการ (Like, Love, Care, Haha, Wow, Sad, Angry) โดยระบบจะสุ่มจากที่คุณเลือกไว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์โพสต์",
                "content": "Probability (%): โอกาสความน่าจะเป็นในการแชร์\n\nShare content: ข้อความที่จะพิมพ์ประกอบการแชร์ (ใส่ได้หลายประโยคเพื่อให้ระบบสุ่ม)\n\nOptions: เลือกรูปแบบการดึงเนื้อหา\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะมองว่าหลายบรรทัดรวมกัน คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "คอมเมนต์ด้วยข้อความ (Comment by text)",
                "content": "List Comments: ใส่ข้อความที่ต้องการให้ระบบนำไปคอมเมนต์\n\nOptions: เลือกรูปแบบการดึงเนื้อหา\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะมองว่าหลายบรรทัดรวมกัน คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "คอมเมนต์ด้วยรูปภาพ (Comment by image)",
                "content": "Image folder: คลิกปุ่ม [...] เพื่อเลือกโฟลเดอร์ในเครื่องคอมพิวเตอร์ที่เก็บไฟล์ภาพที่ต้องการใช้ส่งคอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Interact Friends(โต้ตอบกับเพื่อน)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image179.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนเพื่อนที่คุณต้องการเข้าไปมีปฏิสัมพันธ์ด้วย\n\nOptions: เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์ที่เข้าไปมีส่วนร่วม\n\nLimit interacting time: หยุดดตามระยะเวลาที่ใช้\n\nPosts/friend: จำนวนโพสต์ที่จะเข้าไปจัดการต่อเพื่อน 1 คน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการรับชมและการแสดงความรู้สึก",
                "content": "View post (s): ระยะเวล ที่จะเปิดค้างไว้ที่โพสต์นั้น ๆ ก่อนเริ่มดำเนินการถัดไป\n\nInteraction: เมื่อติ๊กเลือก จะเป็นการเปิดการใช้งานการกด \"ความรู้สึก\"\n\nProbability (%): โอกาสความน่าจะเป็นที่จะกด (เช่น ตั้งไว้ 100% คือกดทุกครั้ง)\n\nReactions: สามารถเลือกรูปแบบความรู้สึกได้ (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Comment by text (คอมเมนต์ด้วยข้อความ)",
                "content": "Probability (%): โอกาสที่จะทำการคอมเมนต์\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการใช้คอมเมนต์\n\nOptions: ตั้งค่ารูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: 1 ข้อความมีได้หลายบรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Comment by image (คอมเมนต์ด้วยรูปภาพ)",
                "content": "Probability (%): โอกาสที่จะคอมเมนต์ด้วยรูป\n\nImage folder: เลือกโฟลเดอร์ในเครื่องคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์โพสต์",
                "content": "Share to wall: ติ๊กเพื่อเปิดใช้งานการแชร์\n\nProbability (%): โอกาสที่จะทำการแชร์\n\nShare content: ข้อความประกอบการแชร์\n\nOptions: ตั้งค่ารูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: 1 ข้อความมีได้หลายบรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Interact Group (กลุ่มโต้ตอบ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image49.png"
                ]
              },
              {
                "title": "การตั้งค่ากลุ่มเป้าหมาย",
                "content": "Count groups: จำนวนกลุ่มที่ต้องการให้ระบบเข้าไปทำงาน\n\nObject options: เลือกว่าจะปฏิสัมพันธ์กับกลุ่มประเภทไหน\n\nInteract joined groups: ระบบจะสุ่มเข้าไปปฏิสัมพันธ์กับกลุ่มที่คุณ เป็นสมาชิกอยู่แล้ว\n\nInteract specified groups: ระบบจะทำงานเฉพาะกับ กลุ่มที่คุณระบุ ID ไว้ในช่อง List Id Groups เท่านั้น\n\nList Id Groups: หากต้องการระบุกลุ่มเฉพาะเจาะจง ให้กดปุ่ม Enter เพื่อใส่ ID ของกลุ่ม\n\nTự động xóa Id nhóm đã tương tác: หากติ๊กถูก ระบบจะลบ ID กลุ่มที่ทำรายการเสร็จแล้วออกจากรายการอัตโนมัติ เพื่อไม่ให้ทำซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าโพสต์และการเข้าชม",
                "content": "Options: เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: ระบบจะหยุดทำงานเมื่อปฏิสัมพันธ์ครบ \"จำนวนโพสต์\"\n\nLimit interacting time: ระบบจะหยุดทำงานเมื่อ \"ใช้เวลา\" ครบตามที่กำหนด\n\nCount: จำนวนโพสต์ต่อ 1 กลุ่มที่คุณต้องการให้ระบบเข้าไปจัดการ\n\nView post (s): ระยะเวลาที่ใช้ในการ \"หยุดดู\" โพสต์นั้นๆ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์และการคอมเมนต์",
                "content": "Interaction: ติ๊กถูกเพื่อเปิดใช้งานการกด Like/Reaction\n\nProbability (%): โอกาสที่จะกด (100% คือกดทุกโพสต์)\n\nเลือกสัญลักษณ์ที่ต้องการ (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nShare to wall: ติ๊กถูกหากต้องการแชร์โพสต์นั้นลงหน้าโปรไฟล์ตัวเอง\n\nShare content: ใส่ข้อความที่จะพิมพ์กำกับตอนแชร์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความ\n\nContent has many lines: ข้อความ 1 ชุด มีหลายบรรทัด\n\nComment by text: คอมเมนต์ด้วยข้อความ\n\nProbability (%): โอกาสในการพิมพ์คอมเมนต์\n\nList Comments: ใส่ข้อความที่ต้องการนำไปคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความ\n\nContent has many lines: ข้อความ 1 ชุด มีหลายบรรทัด\n\nComment by image: คอมเมนต์ด้วยรูปภาพ\n\nProbability (%): โอกาสในการส่งคอมเมนต์เป็นรูป\n\nImage folder: กดปุ่ม ... เพื่อเลือกโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่จะให้โปรแกรมสุ่มไปใช้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Interact Page (โต้ตอบเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image770.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนเพจที่จะเข้าไปปฏิสัมพันธ์\n\nOptions: รูปแบบการหยุดการทำงาน\n\nLimit interacting posts: ระบบจะหยุดเมื่อทำครบ \"จำนวนโพสต์\" ที่กำหนด\n\nLimit interacting time: ระบบจะหยุดเมื่อทำครบ \"จำนวนนาที\" ที่กำหนด\n\nPosts/page: จำนวนโพสต์ต่อ 1 เพจ ที่จะให้เครื่องมือเข้าไปทำงาน\n\nEnter list of page Ids: ช่องสำหรับใส่ ID ของเพจเป้าหมายที่ต้องการให้ระบบเข้าไปทำงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "พฤติกรรมการรับชม",
                "content": "View post (s): ตั้งค่าเวลาในการ \"ดู\" โพสต์นั้นๆ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบและการแชร์",
                "content": "Interaction: การแสดงความรู้สึก\n\nProbability (%): โอกาสที่จะกดแสดงความรู้สึก (เช่น 100% คือกดทุกครั้ง)\n\nเลือกประเภทของ Emotion ที่ต้องการ (Like, Love, Haha, Wow, Sad, Angry)\n\nShare to wall: แชร์ลงวอลล์\n\nShare content: ใส่ข้อความที่ต้องการเขียนประกอบการแชร์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น",
                "content": "Comment by text: คอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่ข้อความคอมเมนต์ที่ต้องการ\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\nComment by image: คอมเมนต์ด้วยรูปภาพ\n\nImage folder: คลิกปุ่ม ... เพื่อเลือกโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่ต้องการใช้คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6. Interact Profiles (โต้ตอบโปรไฟล์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image263.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nLimit interacting time: หยุดตามระยะเวลา\n\nPosts/user: กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปจัดการต่อ 1 บัญชี\n\nObject options: เลือกเป้าหมายที่ต้องการปฏิสัมพันธ์\n\nAccount wall interaction: หน้าวอลล์ทั่วไป\n\nInteract specified profiles: เจาะจงรายชื่อโปรไฟล์\n\nCount: จำนวนบัญชีที่จะให้เข้าถึง\n\nList of User Id: กดปุ่ม Enter เพื่อนำ ID ของบัญชีเป้าหมายมาใส่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การดูและการแสดงความรู้สึก",
                "content": "View post (s): ระยะเวลาในการหยุดดูโพสต์\n\nInteraction: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nProbability (%): โอกาสสุ่มที่จะกด (100% คือกดทุกครั้ง)\n\nเลือกความรู้สึกที่ต้องการจากสัญลักษณ์ (Like, Love, Haha, Wow, Sad, Angry)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์และการแสดงความคิดเห็น",
                "content": "Share to wall: การนำโพสต์นั้นไปแชร์ลงบนวอลล์ของตัวเอง\n\nสามารถใส่ข้อความประกอบการแชร์ได้ในช่องว่าง (Share content)\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ระบบจะดึงข้อความทั้งหมดทุกบรรทัดมาโพสต์ในครั้งเดียว\n\nComment by text: การพิมพ์คอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่รายการข้อความที่ต้องการ\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ระบบจะดึงข้อความทั้งหมดทุกบรรทัดมาคอมเมนต์ในครั้งเดียว\n\nComment by image: การคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์รูปภาพจากคอมพิวเตอร์เพื่อใช้ในการคอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "7. Interact Watch (ดูวิดีโอ)",
                "content": "วิดีโอ: การใช้งาน MaxsystemCare ดูวิดีโอ กดไลค์ กดแชร์ คอมเมนต์\n\n",
                "type": "markdown",
                "images": [
                  "image473.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options (ซ้าย): ตัวเลือกการหยุดการทำงาน\n\nLimit interacting videos: หยุดตามจำนวน \"คลิปวิดีโอ\" ที่จะดู\n\nLimit interacting time: หยุดตาม \"ระยะเวลา\" รวมในการทำงาน\n\nCount: กำหนดจำนวนวิดีโอที่จะดู\n\nOptions (ขวา): รูปแบบการเลือกวิดีโอ\n\nInteract video randomly: ระบบจะสุ่มเลือกวิดีโอที่พบในหน้า Feed\n\nInteract video by keyword: ระบบจะค้นหาวิดีโอเฉพาะที่มีคำค้นหาตรงตามที่คุณระบุ\n\nEnter list of keywords: ช่องสำหรับใส่คำค้นหาที่ต้องการให้ระบบเข้าไปดูวิดีโอ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการรับชม",
                "content": "View post (s): ระยะเวลาในการดูวิดีโอต่อหนึ่งโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การโต้ตอบและการแชร์",
                "content": "Interaction: ติ๊กถูกเพื่อเปิดการ \"กดแสดงความรู้สึก\"\n\nProbability (%): โอกาสที่จะกด (เช่น 100% คือกดทุกคลิป)\n\nReaction Icons: เลือกประเภทของความรู้สึก (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nShare to wall: ติ๊กถูกเพื่อแชร์วิดีโอลงในหน้าโปรไฟล์ของตนเอง\n\nShare content: ใส่ข้อความที่จะเขียนตอนแชร์ (ปล่อยว่างได้)\n\nOptions: เลือกรูปแบบข้อความที่จะเขียนตอนแชร์\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์",
                "content": "Comment by text: การคอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่รายการข้อความที่ต้องการคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความที่จะคอมเมนต์\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 คอมเมนต์\n\nComment by image: การคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพสำหรับใช้คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "8. Interact Reels (ดู Reels)",
                "content": "วิดีโอ: ฟังก์ชั่น Interact Reel ใน MaxSystemCare\n\n",
                "type": "markdown",
                "images": [
                  "image113.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options (ซ้าย): เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting videos: หยุดตามจำนวน \"คลิปวิดีโอ\" ที่จะเข้าไปดู\n\nLimit interacting time: หยุดตาม \"เวลาทำงานรวม\"\n\nCount: กำหนดจำนวนวิดีโอที่จะดำเนินการ\n\nOptions (ขวา): เลือกวิธีการค้นหาวิดีโอ\n\nInteract video randomly: สุ่มวิดีโอจากหน้าฟีดทั่วไป\n\nInteract video by keyword: ค้นหาวิดีโอเฉพาะเจาะจงตามคำค้นหา\n\nEnter list of keywords: ช่องสำหรับใส่คำค้นหา (Keyword) ที่ต้องการให้ระบบเข้าไปดู\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การรับชมและแสดงความรู้สึก",
                "content": "View post (s): กำหนดระยะเวลาในการดูวิดีโอแต่ละคลิป\n\nInteraction: หากติ๊กถูก จะเป็นการเปิดโหมดการกด Like หรือแสดงความรู้สึก\n\nProbability (%): โอกาสความน่าจะเป็นที่จะกด (เช่น 100% คือกดทุกคลิป)\n\nReaction Icons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์",
                "content": "Share to wall: หากติ๊กถูก ระบบจะนำวิดีโอนั้นไปแชร์บนหน้าโปรไฟล์ (Wall)\n\nProbability (%): โอกาสที่จะทำการแชร์\n\nShare content: ข้อความที่จะเขียนประกอบการแชร์\n\nOptions: รูปแบบการเลือกข้อความ\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความโพสต์แบบจบในตัว\n\nContent has multiple lines: ระบบจะถือว่า ข้อความทั้งหมดในช่อง คือ 1 โพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์",
                "content": "Comment by text: คอมเมนต์ด้วยข้อความ\n\nProbability (%): โอกาสที่จะพิมพ์คอมเมนต์\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการ\n\nOptions: รูปแบบการเลือกข้อความ\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความคอมเมนต์แบบจบในตัว\n\nContent has multiple lines: ระบบจะถือว่า ข้อความทั้งหมดในช่อง คือ 1 คอมเมนต์\n\nComment by image: คอมเมนต์ด้วยรูปภาพ\n\nProbability (%): โอกาสที่จะคอมเมนต์ด้วยรูป\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้คอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "9. Interact Story (ดูสตอรี่)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image84.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Options: ตัวเลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting stories: หยุดตาม \"จำนวนสตอรี่\" ที่เข้าชม\n\nLimit interacting time: หยุดตาม \"เวลา\" ที่ใช้ในการทำงาน\n\nCount: กำหนดจำนวนสตอรี่ที่จะให้ระบบเข้าไปดู\n\nView post (s): ระยะเวลาในการเปิดดูแต่ละสตอรี่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตอบโต้และความรู้สึก",
                "content": "Interaction: เมื่อติ๊กถูก จะเป็นการเปิดโหมด \"กดความรู้สึก\"\n\nProbability (%): โอกาสที่จะเกิดการกดความรู้สึก (0-100%)\n\nIcons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, ห่วงใย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nShare to wall: เมื่อติ๊กถูก จะเป็นการแชร์สตอรี่นั้นไปที่หน้าวอลล์ของตนเอง\n\nProbability (%): โอกาสที่จะทำการแชร์\n\nShare content: ช่องสำหรับใส่ข้อความที่จะพิมพ์ไปพร้อมกับการแชร์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 ชุด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็น",
                "content": "Comment by text: คอมเมนต์ด้วยข้อความ\n\nProbability (%): โอกาสที่จะสุ่มพิมพ์คอมเมนต์\n\nList Comments: ช่องสำหรับใส่รายการข้อความคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 ชุด\n\nComment by image: คอมเมนต์ด้วยรูปภาพ\n\nProbability (%): โอกาสที่จะส่งคอมเมนต์เป็นรูปภาพ\n\nImage folder: กดปุ่ม ... เพื่อเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้ส่ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10. Breaks (ตั้งค่าช่วงพัก)",
                "content": "Break (s): การตั้งค่า \"สุ่มเวลาพัก\" โดยมีหน่วยเป็นวินาที (s)\n\n",
                "type": "markdown",
                "images": [
                  "image781.png"
                ]
              },
              {
                "title": "11. Newfeed interaction 2 (โต้ตอบฟีด 2)",
                "content": "Total time : ระยะเวลาที่ดู\n\nLike : จำนวนการกดไลค์\n\nShare Wall : จำนวนที่แชร์ไปยังไทม์ไลน์\n\nComment : จำนวนแสดงความคิดเห็น\n\nList Comments : รายการที่ต้องการความคิดเห็น\n\nadd-friend-join-group\n\n",
                "type": "markdown",
                "images": [
                  "image104.png"
                ]
              },
              {
                "title": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
                "content": "Count : จำนวนที่ต้องการเพิ่มเพื่อน\n\nBreak : ระยะเวลาดีเลย์ในการเพิ่มเพื่อน\n\nList of keywords : รายการคีย์เวิร์ดที่ต้องการเพิ่มเพื่อน\n\nDelete used content : ลบ Keyword ที่ใช้แล้ว ออกไป\n\nCount : จำนวนเพื่อนที่ต้องการเพิ่มต่อคีย์เวิร์ด\n\n",
                "type": "markdown",
                "images": [
                  "image727.png"
                ]
              },
              {
                "title": "2.Add friends by UID (แอดเพื่อนด้วยไอดี)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image73.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนเพื่อนที่จะเพิ่มในรอบนี้\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการแอดแต่ละคน\n\nList Uid to add friends: ช่องสำหรับใส่หมายเลข UID ของคนที่คุณต้องการเพิ่มเพื่อน\n\nAuto delete Uid after sent invitation: หากติ๊กถูก ระบบจะลบ UID ออกจากรายการทันทีหลังจากส่งคำขอไปแล้ว เพื่อป้องกันการส่งซ้ำในครั้งถัดไป\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการปฏิสัมพันธ์",
                "content": "Interact before add friends: ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบทำกิจกรรมก่อนกดแอด\n\nView post (s): ระยะเวลาในการสุ่มดูโพสต์\n\nLike: ติ๊กถูกหากต้องการให้กดถูกใจโพสต์\n\nComment: ติ๊กถูกหากต้องการให้คอมเมนต์ใต้โพสต์\n\nList Comments: ช่องสำหรับใส่ข้อความคอมเมนต์\n\nใส่ 1 ข้อความต่อ 1 บรรทัด\n\nSpin content: สามารถใช้รูปแบบ {a|b|c} เพื่อสุ่มคำพูดได้ เช่น {สวัสดีครับ|ทักทายครับ|ยินดีที่ได้รู้จัก} เพื่อไม่ให้คอมเมนต์ซ้ำซาก\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Add friends by suggestions(เพิ่มเพื่อนตามคำแนะนำ)",
                "content": "Count : จำนวนที่ต้องการเพิ่มเพื่อน\n\nBreak : ระยะเวลาดีเลย์ในการเพิ่มเพื่อน\n\nStop when Facebook warning appears : หยุดเมื่อเห็นคำเตือนเฟสบุ๊ค\n\n",
                "type": "markdown",
                "images": [
                  "image673.png"
                ]
              },
              {
                "title": "4.Confirm Friend (ยืนยันเป็นเพื่อน)",
                "content": "Count : จำนวนที่ต้องการยืนยันเพื่อน\n\nBreak : ระยะเวลาในการยืนยันเพื่อน\n\n",
                "type": "markdown",
                "images": [
                  "image677.png"
                ]
              },
              {
                "title": "5.Unfriend (เลิกเป็นเพื่อน)",
                "content": "Break : ระยะเวลาดีเลย์ในการเลิกเป็นเพื่อน\n\nUnfriend options : ตัวเลือกการเลิกเป็นเพื่อน\n\nRandom friends : สุ่มตามรายการเพื่อน\n\nUnfriend by UID : เลิกเป็นเพื่อนด้วย UID\n\nList of UID to unfriend : ไอดีที่ต้องการเลิกเป็นเพื่อน\n\nList of UID friends to keep : ไอดีเพื่อนที่ต้องการเก็บไว้\n\n",
                "type": "markdown",
                "images": [
                  "image80.png"
                ]
              },
              {
                "title": "6. Cancel friend invitation (ยกเลิกคำเชิญเป็นเพื่อน)",
                "content": "Count: จำนวนที่ต้องการยกเลิก\n\nBreak (s): ระยะเวลาพัก\n\n",
                "type": "markdown",
                "images": [
                  "image290.png"
                ]
              },
              {
                "title": "7. Add group members as friends (เพิ่มสมาชิกกลุ่มเป็นเพื่อน)",
                "content": "Count groups: จำนวนกลุ่มที่จะให้ระบบเข้าไปทำงานในแต่ละรอบ\n\nNumber friends: จำนวนเพื่อนที่จะกดเพิ่มในแต่ละกลุ่ม\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการส่งคำขอแต่ละคน\n\nType group: การเลือกกลุ่ม\n\nRandom group joined: ระบบจะสุ่มเลือกจากกลุ่มที่คุณกดเข้าร่วม (Join) ไว้เรียบร้อยแล้วในบัญชีนั้นๆ\n\nEnter Group: หากเลือกข้อนี้ คุณต้องระบุ ID ของกลุ่มที่ต้องการเจาะจงลงในช่องว่างด้านล่าง\n\nEnter Group ID: ใส่ ID ของกลุ่ม\n\nAuto delete used ID: หากติ๊กถูก ระบบจะลบ ID กลุ่มนั้นออกจากรายการทันทีเมื่อทำงานเสร็จ\n\n",
                "type": "markdown",
                "images": [
                  "image469.png"
                ]
              },
              {
                "title": "8. Join groups by keyword (เข้าร่วมกลุ่มตามคีย์เวิร์ด)",
                "content": "Count : จำนวนกลุ่มที่ต้องการเข้าร่วม\n\nBreak : ระยะเวลาดีเลย์ในการเข้ากลุ่ม\n\nList of keywords : รายการคีย์เวิร์ดที่ต้องการเข้าร่วม\n\nAuto answer questions : ตอบคำถามเข้าร่วมกลุ่ม\n\nList of answers : รายการคำตอบ\n\n",
                "type": "markdown",
                "images": [
                  "image60.png"
                ]
              },
              {
                "title": "9. Join specified group (เข้าร่วมกลุ่มตามไอดี)",
                "content": "วิดีโอ: ฟังก์ชั่น Join specified group ใน MaxSystemCare\n\nCount : จำนวนกลุ่มที่ต้องการเข้าร่วม\n\nBreak : ระยะเวลาดีเลย์ในการเข้ากลุ่ม\n\nList of Id groups to join : รายการคีย์เวิร์ดที่ต้องการเข้าร่วม\n\nAuto answer questions : ตอบคำถามเข้าร่วมกลุ่ม\n\nList of answers : รายการคำตอบ\n\n",
                "type": "markdown",
                "images": [
                  "image114.png"
                ]
              },
              {
                "title": "10. Join suggestion group (เข้าร่วมกลุ่มที่แนะนำ)",
                "content": "Count: กำหนดจำนวนกลุ่มที่จะเข้าร่วมต่อรอบ\n\nBreak (s): กำหนดระยะเวลาการหยุดพักระหว่างการส่งคำขอแต่ละครั้ง\n\nAuto answer questions: การตอบคำถามอัตโนมัติ\n\nList of answers: ใส่คำตอบที่ต้องการในช่องว่างด้านล่าง (1 ข้อต่อ 1 บรรทัด)\n\n",
                "type": "markdown",
                "images": [
                  "image496.png"
                ]
              },
              {
                "title": "11. Leave group (ออกจากกลุ่ม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image211.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนกลุ่มที่ต้องการให้ออก\n\nBreak (s): ระยะห่างในการพักการทำงาน ระหว่างการออกจากแต่ละกลุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวเลือกการเลือกกลุ่ม",
                "content": "Random group list: สุ่มรายชื่อกลุ่มที่มีอยู่แล้วกดออกจากกลุ่มทันที\n\nLeave group with conditions: ออกจากกลุ่มตามเงื่อนไขที่กำหนด (หากเลือกข้อนี้ คุณต้องตั้งค่าเงื่อนไขเพิ่มเติมด้านล่าง)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เงื่อนไขการออกจากกลุ่ม",
                "content": "Leave group moderating posts: ออกจากกลุ่มที่มีการคัดกรองโพสต์ (ต้องรออนุมัติโพสต์)\n\nCount of members is less: ออกจากกลุ่มที่มีจำนวนสมาชิก น้อยกว่า จำนวนที่ระบุไว้ในช่องตัวเลข\n\nGroup name contains keywords: ออกจากกลุ่มที่ชื่อกลุ่มมีคำค้นหา (Keywords) ที่กำหนด\n\nวิธีระบุ: พิมพ์คำที่ต้องการในช่อง \"List of keywords\" โดยพิมพ์ 1 คำ ต่อ 1 บรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "List of ID groups to keep: รายการยกเว้น",
                "content": "ช่องขนาดใหญ่ทางด้านขวามือมีไว้สำหรับ \"กลุ่มที่ไม่ต้องการให้ออก\":\n\nหากคุณมีกลุ่มสำคัญที่ไม่ต้องการให้ระบบกดออกเด็ดขาด ให้นำ ID ของกลุ่ม มาใส่ในช่องนี้\n\nวิธีระบุ: พิมพ์ 1 ID ต่อ 1 บรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "12. Create group (สร้างกลุ่ม)",
                "content": "Count: การกำหนดจำนวนกลุ่มที่ต้องการสร้าง\n\nGroup name: การตั้งชื่อกลุ่ม\n\npost-share-spam\n\n",
                "type": "markdown",
                "images": [
                  "image797.png"
                ]
              },
              {
                "title": "1.Post Wall (โพสต์ไทม์ไลน์)",
                "content": "วิดีโอ: ฟังก์ชั่น Post Wall ใน MaxSystemCare\n\n",
                "type": "markdown",
                "images": [
                  "image612.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนครั้งที่จะโพสต์\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการโพสต์แต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาข้อความ",
                "content": "Text: ติ๊กถูกเพื่อเปิดใช้งานการโพสต์ข้อความ\n\nOptions: เลือกรูปแบบเนื้อหา\n\nCustom content: พิมพ์ข้อความลงไปในช่อง List of contents เองโดยตรง\n\nContent created by AI: ให้ระบบ AI ช่วยสร้างเนื้อหาให้โดยอัตโนมัติ\n\nContent from file: เลือกดึงข้อความมาจากไฟล์ภายนอกที่เตรียมไว้\n\nList of contents: พื้นที่สำหรับใส่ข้อความที่ต้องการโพสต์\n\nAuto delete used content: ลบเนื้อหาทิ้งทันทีเมื่อโพสต์เสร็จ (ป้องกันการโพสต์ซ้ำ)\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 เนื้อหา\n\nContent has many lines: 1 เนื้อหา มีได้หลายบรรทัด\n\nUse Background: ติ๊กเพื่อใช้พื้นหลังสี (คล้ายฟีเจอร์พื้นหลังสีของ Facebook)\n\nEdit post: หากติ๊กจะเป็นการแก้ไขโพสต์ที่มีอยู่แทนการสร้างใหม่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารูปภาพ",
                "content": "Image: ติ๊กถูกเพื่อเปิดใช้งานการโพสต์รูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nCount: จำนวนรูปภาพที่ต้องการให้ดึงออกมาโพสต์ในแต่ละครั้ง\n\nDelete used images: ลบรูปภาพออกจากโฟลเดอร์ทันทีหลังจากโพสต์สำเร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแท็กเพื่อนและลิงก์",
                "content": "Tag friends: ติ๊กถูกเพื่อแท็กเพื่อนในโพสต์ พร้อมกำหนดจำนวน Count ว่าจะแท็กกี่คน\n\nExport posted article link: ติ๊กเพื่อให้โปรแกรมบันทึก (Extract) ลิงก์ของโพสต์ที่ทำสำเร็จแล้วออกมาไว้ใช้งานต่อ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การใส่เพลง",
                "content": "Music: ติ๊กถูกเพื่อเพิ่มเพลงเข้าไปในโพสต์\n\nRandom song: ให้ระบบสุ่มเลือกเพลงให้เอง\n\nSpecified song: เลือกเพลงที่กำหนดเองจากเพลย์ลิสต์ (Playlist)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเพิ่มเติม",
                "content": "Interact with post after publish: ติ๊กเพื่อให้ระบบมีปฏิสัมพันธ์กับโพสต์ตัวเองทันที (เช่น กดไลก์ หรือคอมเมนต์ตัวเอง) สามารถกด Settings เพื่อตั้งค่ารายละเอียดได้\n\nUse page profile: ติ๊กหากต้องการโพสต์ในนามของ \"เพจ\" แทนที่จะเป็น \"โปรไฟล์ส่วนตัว\"\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Post Groups (โพสต์กลุ่ม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image500.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนกลุ่มที่ต้องการให้โพสต์ในรอบนั้น ๆ\n\nBreak (s): เวลาพักระหว่างการโพสต์แต่ละกลุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาการโพสต์",
                "content": "Text: ส่วนข้อความ\n\nList of contents: ช่องสำหรับใส่ข้อความที่จะโพสต์ (รองรับการทำ Spin Content เช่น {สวัสดี|ทักทาย|ฮัลโหล}เพื่อสุ่มข้อความ)\n\nCreate content with AI: ใช้ระบบ AI ช่วยเขียนเนื้อหา\n\nUse Background: โพสต์ข้อความแบบมีพื้นหลังสี ๆ (แบบ Facebook Status)\n\nAuto delete used content: ลบเนื้อหาที่ใช้แล้วอัตโนมัติหลังจากโพสต์เสร็จ\n\nImage: ส่วนรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nCount: จำนวนรูปภาพที่จะใช้ต่อหนึ่งโพสต์\n\nDelete used image: ลบรูปภาพทิ้งเมื่อโพสต์เสร็จแล้ว\n\nType group: ส่วนการเลือกกลุ่มเป้าหมาย\n\nRandom group joined: โพสต์สุ่มในกลุ่มที่เป็นสมาชิกอยู่แล้ว\n\nPost only uncensored groups: โพสต์เฉพาะกลุ่มที่ไม่ต้องรออนุมัติจากแอดมิน\n\nPriority posting groups with many members: เน้นโพสต์กลุ่มที่มีสมาชิกจำนวนมากก่อน\n\nDon't post same group with another account: ป้องกันไม่ให้บัญชีอื่นในระบบไปโพสต์ซ้ำในกลุ่มเดียวกัน\n\nOnly post groups in the list: เลือกโพสต์เฉพาะกลุ่มที่ระบุไว้ในรายชื่อเท่านั้น\n\nEnter Group: ระบุกลุ่มเองตาม ID\n\nEnter Group ID: ใส่เลข ID ของกลุ่มที่ต้องการโพสต์โดยตรง\n\nDelete posted group: เมื่อโพสต์ในกลุ่มที่ระบุไอดีเสร็จแล้ว ให้ลบไอดีนั้นออกจากรายการทันที เพื่อไม่ให้โพสต์ซ้ำในรอบถัดไป\n\nAuto join group: หากยังไม่ได้เป็นสมาชิก โปรแกรมจะกดเข้ากลุ่มให้โดยอัตโนมัติ\n\nAnswers: ตั้งค่าคำตอบอัตโนมัติกรณีกลุ่มมีคำถามก่อนเข้า\n\nCreate new group: สร้างกลุ่มใหม่\n\nใช้สำหรับสั่งให้บัญชีทำการสร้างกลุ่มใหม่ขึ้นมาเอง โดยใส่ชื่อกลุ่มที่ต้องการในช่อง Group names\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ฟีเจอร์เพิ่มเติม",
                "content": "Interact with post after publish: ตั้งค่าให้บัญชีเข้าไปกดไลก์หรือคอมเมนต์โพสต์ตัวเองหลังจากโพสต์เสร็จเพื่อดันโพสต์\n\nExport posted article link: ส่งออกลิงก์ที่โพสต์สำเร็จแล้วเก็บไว้เป็นรายงาน\n\nUse page profile: ใช้ในนาม \"เพจ\" เพื่อทำการโพสต์แทนบัญชีส่วนตัว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3. Post Reels (โพสต์รีล)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image382.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวน Reels ที่ต้องการโพสต์\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการโพสต์แต่ละคลิป\n\nVideo folder: กดเพื่อเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บไฟล์วิดีโอ Reels ไว้\n\nDelete used video: หากติ๊กเลือก โปรแกรมจะลบไฟล์วิดีโอออกจากโฟลเดอร์ทันทีหลังจากโพสต์เสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาและคำบรรยาย",
                "content": "Description: ติ๊กถูกเพื่อเปิดใช้งานการใส่คำบรรยาย\n\nList of contents: ช่องสำหรับใส่ข้อความบรรยาย (Caption)\n\nรองรับระบบ Spin Content เช่น {สวัสดี|ทักทาย|ไฮ} เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nOptions (รูปแบบเนื้อหา):\n\nContent is only 1 line: 1 บรรทัดคือ 1 โพสต์\n\nContent has many lines: ข้อความหลายบรรทัดรวมเป็น 1 โพสต์\n\nAuto delete used content: ลบข้อความที่ใช้ไปแล้วออกจากรายการอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "แฮชแท็ก (Hashtag)",
                "content": "Hashtag: ติ๊กถูกเพื่อเปิดใช้งาน\n\nList of Hashtag: ใส่รายการแฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แฮชแท็ก)\n\nCount: กำหนดจำนวนแฮชแท็กที่จะดึงไปใช้ต่อหนึ่งโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เพลงและเสียงประกอบ (Music)",
                "content": "Music: ติ๊กถูกเพื่อใส่เพลงประกอบ\n\nRandom song: ให้ระบบสุ่มเพลงให้โดยอัตโนมัติ\n\nSpecified song: เลือกเพลงที่ต้องการจาก Playlist ที่คุณกำหนดไว้เอง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเพิ่มเติม",
                "content": "Max wait for video loading: ระยะเวลาสูงสุด ที่จะรอให้วิดีโออัปโหลดเสร็จ หากเกินนี้ระบบจะข้ามหรือลองใหม่\n\nExport posted reels link: ติ๊กถูกหากต้องการให้ระบบส่งออกลิงก์ของ Reels ที่โพสต์สำเร็จแล้วเก็บไว้ในไฟล์\n\nUse page profile: เลือกโพสต์ในนาม \"เพจ\" (Page) แทนที่จะเป็นโปรไฟล์ส่วนตัว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4. Post Story (โพสต์สตอรี่)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image616.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: กำหนดจำนวนสตอรี่ที่ต้องการโพสต์\n\nUse page profile: ติ๊กเลือกหากต้องการโพสต์ในนาม \"เพจ\" แทนเฟซบุ๊กส่วนตัว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Text (ข้อความ): ใส่ข้อความที่ช่อง Story content.",
                "content": "รองรับระบบ Spin content รูปแบบ {ข้อความ1|ข้อความ2|ข้อความ3} เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nUse Background: ติ๊กเพื่อให้ระบบใส่พื้นหลังสีๆ ให้กับข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Post Image (โพสต์รูปภาพ)",
                "content": "Media folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการโพสต์\n\nDelete used media: ติ๊กเพื่อให้ระบบลบรูปออกจากโฟลเดอร์ทันทีหลังจากโพสต์เสร็จ (กันโพสต์ซ้ำ)\n\nAttach link: ติ๊กหากต้องการใส่ลิงก์ในสตอรี่ และกรอกรายการลิงก์ในช่อง List of links\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Song (ใส่เพลง)",
                "content": "Random song: ให้ระบบสุ่มเพลง\n\nSpecified song: เลือกเพลงที่ต้องการโดยระบุชื่อในช่อง List songs (1 บรรทัดต่อ 1 เพลง)\n\nUse Background / Image: ตั้งค่าพื้นหลังของเพลงว่าจะใช้เป็นสีพื้นหลังปกติ หรือจะใช้รูปภาพจากโฟลเดอร์ (Image folder) มาเป็นฉากหลังประกอบเพลง\n\nDelete used images: หากติ๊กไว้ ระบบจะลบรูปออกจากโฟลเดอร์หลังโพสต์เสร็จ เพื่อป้องกันการโพสต์ซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าระบบและเงื่อนไขเวลา",
                "content": "Wait post success: ระยะเวลาหน่วง หลังจากโพสต์เสร็จ 1 ครั้ง ก่อนจะเริ่มทำรายการถัดไป\n\nIf time out, unpublished stories will be counted as: หากเกิดกรณีอินเทอร์เน็ตหลุด หรือโปรแกรมค้างจนหมดเวลา (Timeout) จะให้ระบบสรุปผลว่าอย่างไร?\n\nSuccess: นับว่าสำเร็จไปเลย\n\nFail: นับว่าล้มเหลว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5. Share(แชร์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image112.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Break (s): ระยะเวลาหยุดพักระหว่างการแชร์แต่ละครั้ง\n\nLink to share: ช่องสำหรับใส่ลิงก์ (URL) ที่ต้องการนำไปแชร์\n\nType link: เลือกประเภทของลิงก์ว่าเป็น Livestream (ไลฟ์สด), Post (โพสต์ทั่วไป), หรือ Reel (คลิปสั้น)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาการแชร์",
                "content": "Share content: ติ๊กถูกหากต้องการใส่ข้อความประกอบ\n\nList of contents: ช่องใส่ข้อความ\n\nOptions: เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัดคือ 1 คอนเทนต์\n\nContent has many lines: 1 คอนเทนต์สามารถมีได้หลายบรรทัด\n\nAuto Delete used content: ลบเนื้อหาที่ใช้แล้วทิ้งอัตโนมัติเพื่อไม่ให้โพสต์ซ้ำเดิม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการปฏิสัมพันธ์ก่อนแชร์ (Interact before share)",
                "content": "View post (s): ตั้งเวลาดูโพสต์ก่อนจะกดแชร์\n\nExpress feelings: เลือกกดแสดงความรู้สึก (Like, Love, Wow ฯลฯ) ก่อนแชร์\n\nAuto comment: ติ๊กเพื่อคอมเมนต์โพสต์ก่อนแชร์\n\nList Comments: ใส่รายการข้อความคอมเมนต์\n\nComment many times: ตั้งค่าให้คอมเมนต์หลายครั้งพร้อมระบุช่วงเวลาพัก (Break)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าตัวเลือกการแชร์ (Share options)",
                "content": "Share post to wall: แชร์ไปยังหน้าโปรไฟล์ส่วนตัว (Timeline)\n\nShare post to group: แชร์ไปยังกลุ่มต่าง ๆ\n\nCount: จำนวนกลุ่มที่ต้องการแชร์\n\nAdvanced configs (ตั้งค่าขั้นสูง):\n\nOnly share to group uncensored: แชร์เฉพาะกลุ่มที่โพสต์ได้เลยไม่ต้องรออนุมัติ (Uncensored)\n\nPriority sharing groups with many members: เน้นแชร์กลุ่มที่มีสมาชิกจำนวนมาก\n\nDon't share same group with another account: ไม่แชร์ซ้ำกลุ่มเดิมกับบัญชีอื่น\n\nOnly share groups in the list: แชร์เฉพาะกลุ่มที่ระบุไว้ในรายชื่อ (กดปุ่ม Enter เพื่อใส่รายชื่อกลุ่ม)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6. Spam Post (สแปมโพสต์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image486.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "IDs/Account: กำหนดจำนวนบัญชีที่จะใช้ทำงาน\n\nCount posts/ID: จำนวนโพสต์ที่ต้องการโต้ตอบต่อ 1 บัญชี\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการทำงาน\n\nObject type: เลือกประเภทเป้าหมายที่จะเข้าไปทำงาน เช่น Profile, Group, Page\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการเป้าหมาย",
                "content": "Enter ID User/Group/Page: ช่องสำหรับกรอก ID ของเป้าหมายที่ต้องการให้ระบบเข้าไปทำงาน\n\nAuto delete used ID: หากติ๊กถูก ระบบจะลบ ID ที่ทำงานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\nOnly interact with groups that have joined: (หากเลือก Object type เป็น Group จะมีการตั้งค่านี้ขึ้นมา) บอทจะเข้าทำงานเฉพาะในกลุ่มที่บัญชีนั้นเป็นสมาชิกอยู่แล้วเท่านั้น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการโต้ตอบ",
                "content": "Express feelings: ติ๊กเพื่อเลือกกด \"ความรู้สึก\" (Reaction) โดยมีไอคอนให้เลือก เช่น ไลค์, หัวใจ, หัวเราะ, เศร้า หรือโกรธ\n\nShare wall: ติ๊กหากต้องการแชร์โพสต์นั้นไปที่หน้าวอลล์ของตนเอง\n\nComment by text: ติ๊กหากต้องการคอมเมนต์ด้วยข้อความ\n\nList Comments: ช่องสำหรับพิมพ์ข้อความคอมเมนต์\n\nSpin content {a|b|c}: รูปแบบการสุ่มคำเพื่อให้ข้อความไม่ซ้ำกัน\n\nOptions: เลือกระหว่าง \"ข้อความบรรทัดเดียว\" หรือ \"ข้อความหลายบรรทัด\"\n\nRandom icon: ปุ่มสำหรับสุ่มใส่อีโมจิในคอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการรูปภาพ",
                "content": "Comment by image: ติ๊กหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุที่อยู่ไฟล์ (Path) ของโฟลเดอร์รูปภาพในคอมพิวเตอร์\n\nDelete used images: ติ๊กเพื่อให้ระบบลบรูปภาพที่ใช้ไปแล้วทิ้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "7. Spam Newfeed(สแปมฟีดข่าว)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image204.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: กำหนดจำนวนครั้งหรือจำนวนโพสต์ที่จะให้โปรแกรมทำรายการ\n\nBreak (s): ระยะเวลาพักระหว่างการทำงานในแต่ละโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก",
                "content": "Express feelings: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nไอคอนความรู้สึก: เมื่อเปิดใช้งาน คุณสามารถเลือกติ๊กถูกหน้ารูปไอคอนที่ต้องการให้สุ่มกดได้ ได้แก่ ไลก์ (Like), หัวใจ (Love), ห่วงใย (Care), ขำ (Haha), ว้าว (Wow), เศร้า (Sad) และ โกรธ (Angry)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยข้อความ",
                "content": "Comment by text: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยข้อความ\n\nList Comments: กล่องสำหรับใส่ข้อความคอมเมนต์\n\nคำแนะนำ: รองรับการใช้รูปแบบ (Spin content {a|b|c}) เพื่อสุ่มสลับข้อความ และรองรับการสุ่มไอคอนอีโมจิ (Random icon)\n\nOptions (ตัวเลือกรูปแบบข้อความ):\n\nContent is only 1 line: เลือกเมื่อข้อความ 1 คอมเมนต์ของคุณมีความยาวเพียง 1 บรรทัด (Enter = ขึ้นคอมเมนต์ใหม่)\n\nContent has many lines: เลือกเมื่อ 1 คอมเมนต์ของคุณมีความยาวหลายบรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยรูปภาพ",
                "content": "Comment by image: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุเส้นทาง (Path) ของโฟลเดอร์ที่เก็บรูปภาพไว้\n\nDelete used images: ติ๊กถูกหากต้องการให้ระบบลบรูปภาพนั้นๆ ออกจากโฟลเดอร์ทันทีหลังจากที่ถูกนำไปใช้คอมเมนต์แล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การปฏิสัมพันธ์เพิ่มเติม",
                "content": "Click See more (คลิก \"ดูเพิ่มเติม\"):\n\nติ๊กถูกเพื่อให้โปรแกรมกดอ่านข้อความโพสต์แบบเต็ม\n\nBreak (s): ระยะเวลาหน่วงหลังจากการคลิก\n\nClick Photo (คลิกรูปภาพ):\n\nติ๊กถูกเพื่อให้โปรแกรมคลิกเข้าไปดูรูปภาพในโพสต์\n\nBreak (s): ระยะเวลาหน่วงหลังจากการคลิกดูรูป\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "8. Spam Friends (สแปมเพื่อน)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image90.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Quantity: จำนวนเพื่อนที่ต้องการให้ระบบเข้าไปปฏิสัมพันธ์ด้วย\n\nPosts/Friend: จำนวนโพสต์ต่อเพื่อน 1 คน ที่ต้องการเข้าไปปฏิสัมพันธ์\n\nBreak (s): ระยะเวลาพักเบรกระหว่างการทำงานแต่ละครั้งในหน่วยวินาที\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก",
                "content": "Express feelings: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nตัวเลือกไอคอน: หากเปิดใช้งาน สามารถเลือกรีแอคชันที่ต้องการสุ่มกดได้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยข้อความ",
                "content": "Comment by text: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยข้อความ\n\nList Comments: กล่องสำหรับใส่รายการข้อความที่ต้องการใช้คอมเมนต์\n\nการตั้งค่าเพิ่มเติมในกล่องข้อความ:\n\n(Spin content {a|b|c}): ระบบรองรับการทำ Spintax หรือการสุ่มคำสั่งข้อความเพื่อไม่ให้คอมเมนต์ซ้ำซาก (เช่น พิมพ์ว่า {สวัสดี|ดีจ้า|ทักทาย})\n\nRandom icon: ฟังก์ชันเสริมสำหรับสุ่มใส่อีโมจิลงไปในข้อความ\n\nOptions (ตัวเลือกการอ่านบรรทัด):\n\nContent is only 1 line: กำหนดให้ระบบนับว่า 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: กำหนดให้ระบบอนุญาตให้ 1 คอมเมนต์สามารถมีหลายบรรทัดได้ (มีไอคอน ? สำหรับดูคำอธิบายเพิ่มเติม)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "คอมเมนต์ด้วยรูปภาพ",
                "content": "Comment by image: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุตำแหน่ง (Path) ของโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่คุณต้องการให้ระบบดึงไปใช้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "9. Spam Groups (สแปมกลุ่ม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image749.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count groups: จำนวนกลุ่มที่ต้องการเข้าถึง\n\nPosts/group: จำนวนโพสต์ที่จะดำเนินการต่อหนึ่งกลุ่ม\n\nBreak (s): เวลาพักระหว่างการทำงานในแต่ละจุด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก (Express feelings)",
                "content": "เปิดใช้งานการกด Reaction\n\nไอคอน: สามารถเลือกประเภทความรู้สึกได้ เช่น Like (ถูกใจ), Love (รักเลย), Haha (ขำกลิ้ง), Wow (ว้าว), Sad (เศร้า) หรือ Angry (โกรธ)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็นด้วยข้อความ (Comment by text)",
                "content": "เปิดใช้งานการคอมเมนต์เป็นตัวอักษร\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nSpin content: รองรับการใช้รูปแบบ {a|b|c} เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nOptions: การเลือกรูปแบบข้อความ\n\nContent is only 1 line: ข้อความบรรทัดเดียว\n\nContent has many lines: ข้อความแบบหลายบรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความคิดเห็นด้วยรูปภาพ (Comment by image)",
                "content": "เปิดใช้งานการคอมเมนต์ด้วยภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nDelete used images: หากติ๊กช่องนี้ ระบบจะลบรูปภาพที่ถูกใช้งานไปแล้วออกจากโฟลเดอร์ทันที\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการคลิกเพิ่มเติม (Interaction Settings)",
                "content": "Click See more: เปิดใช้งานการกด \"ดูเพิ่มเติม\" เพื่อให้การทำงานดูเหมือนพฤติกรรมมนุษย์ พร้อมตั้งเวลาพัก (Break)\n\nClick Photo: เปิดใช้งานการกดคลิกที่รูปภาพในโพสต์ พร้อมตั้งเวลาพัก (Break)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10. Run Earn Money",
                "content": "",
                "type": "markdown",
                "images": [
                  "image761.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Api Key: ช่องสำหรับใส่รหัส API จากเว็บไซต์ traodoituongtac.com เพื่อใช้เชื่อมต่อกับระบบ\n\nCheck: ใช้สำหรับตรวจสอบว่า Api Key ที่ใส่ไปนั้นถูกต้องและพร้อมใช้งานหรือไม่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเวลาและขีดจำกัด",
                "content": "Break between 2 jobs: ตั้งค่าระยะเวลาหยุดพักระหว่างงาน\n\nTimeout get job: ระยะเวลารอคอยหากระบบหาตัวงานไม่เจอ\n\nCount job success: กำหนดจำนวนงานที่ทำสำเร็จก่อนจะมีการประมวลผลหรือบันทึก\n\nStop when fail continuously: สั่งให้หยุดทำงานทันทีหากมีงานล้มเหลวติดต่อกันกี่ครั้ง เพื่อป้องกันบัญชีมีปัญหา\n\nMax job/account/day: ขีดจำกัดจำนวนงานสูงสุดที่แต่ละบัญชีจะทำได้ต่อวัน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เลือกประเภทงาน (Choose Job Type)",
                "content": "reaction: กดแสดงความรู้สึก (Like, Love, Wow ฯลฯ)\n\ncomment: เขียนความคิดเห็น\n\nlike page: กดถูกใจเพจ\n\nadd friend: กดเพิ่มเพื่อน\n\njoin group: กดเข้าร่วมกลุ่ม\n\nfollow: กดติดตาม\n\nRun cheap jobs: ติ๊กถูกหากต้องการรับงานราคาถูกด้วย\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เงื่อนไขและตัวเลือกเสริม",
                "content": "Stop job when account is logged out: สั่งให้หยุดงานทันทีหากบัญชีหลุดออกจากระบบ\n\nUse page profile: ใช้โปรไฟล์ในนาม \"เพจ\" แทนการใช้โปรไฟล์ส่วนตัว\n\nSkip blocked accounts: ข้ามบัญชีที่ถูกบล็อกไปโดยอัตโนมัติ\n\nseeding\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Review Page (รีวิวเพจ)",
                "content": "Id Page : ไอดีเพจ\n\nLike page : กดไลค์เพจ\n\nReview content : เนื้อหาที่จะรีวิว\n\nOption : ตัวเลือกเนื้อหา\n\nContent is only 1 line : เนื้อหาเพียง 1 บรรทัด\n\nContent has many lines : เนื้อหาหลายบรรทัด\n\nAuto Delete used content : ลบเนื้อหาที่ใช้แล้วออก\n\n",
                "type": "markdown",
                "images": [
                  "image721.png"
                ]
              },
              {
                "title": "2.Buff Like Page (กดไลค์เพจ)",
                "content": "วิดีโอ: ฟังก์ชั่น Buff Like Page ใน MaxSystemCare\n\nBreak : ระยะเวลาดีเลย์ในการไลค์\n\nEnter Page Id : ไอดีเพจ\n\n",
                "type": "markdown",
                "images": [
                  "image214.png"
                ]
              },
              {
                "title": "3.Buff Follow UID (กดติดตามด้วยไอดี)",
                "content": "Break (s): ระยะเวลาพัก\n\nEnter Uid: กรอกรายชื่อ UID\n\n",
                "type": "markdown",
                "images": [
                  "image345.png"
                ]
              },
              {
                "title": "4. Interact specified posts (โต้ตอบโพสต์ที่ระบุ)",
                "content": "วิดีโอ: Maxcare ตั้งค่า กดไลค์ กดแชร์ คอมเม้น โพสต์ที่ต้องการ\n\n",
                "type": "markdown",
                "images": [
                  "image178.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: จำนวนโพสต์ที่จะให้ระบบทำงาน\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการสลับไปทำโพสต์ถัดไป\n\nView post (s): ระยะเวลาที่ให้ระบบ \"เปิดดู\" โพสต์นั้นๆ ค้างไว้ก่อนเริ่มทำกิจกรรมอื่น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการลิงก์โพสต์",
                "content": "List of post links: ช่องสำหรับกรอก URL หรือลิงก์ของโพสต์ที่ต้องการให้ระบบเข้าไปทำงาน (ใส่ 1 ลิงก์ต่อ 1 บรรทัด)\n\nAuto delete used links: หากติ๊กเลือก ระบบจะลบลิงก์ออกจากรายการทันทีเมื่อทำงานในลิงก์นั้นสำเร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก (Express feelings)",
                "content": "เมื่อติ๊กเลือก คุณสามารถเลือกกดไอคอนแสดงอารมณ์ต่างๆ ได้ (Like, Love, Care, Haha, Wow, Sad, Angry) สามารถเลือกได้มากกว่า 1 อย่างเพื่อให้ระบบสุ่มใช้งาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยข้อความ (Comment by text)",
                "content": "List Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการสุ่มไปคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดเท่ากับ 1 ข้อความ\n\nContent has many lines: 1 ข้อความมีหลายบรรทัด\n\nAuto Delete used content: ลบข้อความที่ใช้ไปแล้วออกจากรายการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์ด้วยรูปภาพ (Comment by image)",
                "content": "Image folder: ระบุที่อยู่ (Path) ของโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่ต้องการให้ระบบดึงไปโพสต์\n\nDelete used images: ลบรูปภาพออกจากโฟลเดอร์หลังจากโพสต์เสร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Interact Posts by Keyword (โต้ตอบโพสต์ด้วยคีย์เวิร์ด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image556.png"
                ]
              },
              {
                "title": "การตั้งค่าพื้นฐาน",
                "content": "Count: กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปปฏิสัมพันธ์\n\nBreak (s): เว้นเวลาระหว่างการกระทำแต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รายการคำค้นหา",
                "content": "List of keywords: ใส่คำที่คุณต้องการให้ระบบไปค้นหา\n\nข้อกำหนด: ใส่คีย์เวิร์ด 1 คำต่อ 1 บรรทัด\n\nรองรับระบบ Spin content โดยใช้รูปแบบ {คำที่1|คำที่2|คำที่3} เพื่อสุ่มคีย์เวิร์ดในการค้นหา\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Express feelings (การแสดงความรู้สึก)",
                "content": "ติ๊กถูกเพื่อเปิดใช้งาน\n\nเลือกไอคอนความรู้สึกที่ต้องการ (เช่น ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า หรือโกรธ)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Comment by text (คอมเมนต์ด้วยข้อความ)",
                "content": "List Comments: ใส่ข้อความที่คุณต้องการจะคอมเมนต์\n\nSpin content: รองรับการใช้ {a|b|c} เพื่อสุ่มข้อความไม่ให้ซ้ำกัน\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความคอมเมนต์\n\nContent has many lines: 1 ข้อความประกอบด้วยหลายบรรทัด\n\nRandom icon: ระบบสุ่มใส่ไอคอน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Comment by image (คอมเมนต์ด้วยรูปภาพ)",
                "content": "Image folder: เลือกที่อยู่ของโฟลเดอร์รูปภาพในคอมพิวเตอร์ของคุณที่ต้องการใช้คอมเมนต์\n\nDelete used images: หากติ๊กถูก ระบบจะลบรูปภาพทิ้งหลังจากที่ใช้งานไปแล้ว เพื่อไม่ให้ใช้รูปซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6.Interact Video (ตอบโต้วิดีโอ)",
                "content": "วิดีโอ: การใช้งาน MaxsystemCare ดูวิดีโอ กดไลค์ กดแชร์ คอมเมนต์\n\nLink video : ลิงค์วิดีโอ\n\nView post : ระยะเวลาในการดูวิดีโอ\n\nExpress feelings : การแสดงความรู้สึก\n\nAuto comment : แสดงความคิดเห็น\n\nList Comments : รายการความคิดเห็น\n\nComment many times : แสดงความคิดเห็นหลายบรรทัด\n\nBreak : ระยะเวลาดีเลย์ในการแสดงความคิดเห็น\n\n",
                "type": "markdown",
                "images": [
                  "image526.png"
                ]
              },
              {
                "title": "7. Interact Reels by Link",
                "content": "Link reel : ลิงก์เรียล\n\nView post : ระยะเวลาในการดู\n\nLike : กดไลค์\n\nShare Wall : แชร์ไปยังไทม์ไลน์\n\nComment : แสดงความคิดเห็น\n\nList Comments : รายการความคิดเห็น\n\nDelete commented content : ลบความคิดเห็นที่ใช้แล้วออก\n\n",
                "type": "markdown",
                "images": [
                  "image364.png"
                ]
              },
              {
                "title": "8. Invite Friends like Pages (ชวนเพื่อนกดไลค์เพจ)",
                "content": "List of ID pages : รายการไอดีเพื่อนที่ต้องการชวน\n\n",
                "type": "markdown",
                "images": [
                  "image150.png"
                ]
              },
              {
                "title": "9. Invite friends join group (ชวนเพื่อนเข้าร่วมกลุ่ม)",
                "content": "Count : จำนวนเพื่อนที่ต้องการชวน\n\nBreak : ระยะเวลาดีเลย์ในการช่วนเพื่อน\n\nGroup ID : ไอดีกลุ่มที่ต้องการเชิญเพื่อนเข้าร่วม\n\nInvit options : ตัวเลือกการเชิญ\n\nSuggested friedns : เพื่อนที่แนะนำ\n\nNearby friends : เพื่อนใกล้เคียง\n\nฺBoth : เลือกทั้งคู่\n\n",
                "type": "markdown",
                "images": [
                  "image784.png"
                ]
              },
              {
                "title": "10.Sync Contact (ซิงค์ผู้ติดต่อ)",
                "content": "Import list of Phone numbers : นำเข้ารายการหมายเลขโทรศัพท์\n\nCount : จำนวน/อุปกรณ์\n\nAuto delete used phone numbers : ลบหมายเลขโทรศัพท์ที่ใช้แล้วโดยอัตโนมัติ\n\nAdd friends : เพิ่มเพื่อน\n\nCount: จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak : ระยะเวลาดีเลย์ในการเพิ่มเพื่อน\n\n",
                "type": "markdown",
                "images": [
                  "image379.png"
                ]
              },
              {
                "title": "11.Unlike page (ยกเลิกไลค์เพจ)",
                "content": "Count : จำนวนเพจ\n\nBreak : ระยะเวลาดีเลย์\n\nchange-info\n\n",
                "type": "markdown",
                "images": [
                  "image387.png"
                ]
              },
              {
                "title": "1.Change password (เปลี่ยนรหัสผ่าน)",
                "content": "Options new password : ตัวเลือกการนำเข้ารหัสผ่านใหม่\n\nRandom : แบบสุ่ม\n\nEnter password : แบบนำเข้าระหัสผ่าน\n\nEnter : นำเข้า\n\nLogout of old devices : ออกจากระบบอุปกรณ์เก่า\n\n",
                "type": "markdown",
                "images": [
                  "image82.png"
                ]
              },
              {
                "title": "2.Up avatar (อัพอวาตาร์)",
                "content": "วิดีโอ: การเปลี่ยนรูปโปรไฟล์และชื่อใน MaxSystemCare\n\nImage folder : เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images : ลบรูปภาพที่ใช้แล้ว\n\nSkip if already have avatar : ข้าม หากมีอวาต้าอยู่แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image438.png"
                ]
              },
              {
                "title": "3.Up cover (อัพหน้าปก)",
                "content": "Image folder : เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images : ลบรูปภาพที่ใช้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image138.png"
                ]
              },
              {
                "title": "4.Remove Phone(ลบเบอร์โทรศัพท์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image45.png"
                ]
              },
              {
                "title": "5.On - Off 2FA (เปิด - ปิด 2FA )",
                "content": "Disable 2FA : ปิดการใช้งาน 2FA\n\nEnable 2FA : เปิดการใช้งาน 2FA\n\nIf the account already has 2FA : หากบัญชีมี 2FA อยู่แล้ว\n\nDon't enable 2FA : ไม่เปิดใช้งาน 2FA\n\nAdd new 2FA : เพิ่ม 2FA ใหม่\n\nRemove 2FA + Add new 2FA : ลบ 2FA + เพิ่ม 2FA ใหม่\n\nAdd new 2FA + Delete old 2FA : เพิ่ม 2FA ใหม่ + ลบ 2FA เก่า\n\n",
                "type": "markdown",
                "images": [
                  "image642.png"
                ]
              },
              {
                "title": "6.Add mail (เพิ่มอีเมล์)",
                "content": "Add Mail : เพิ่มอีเมล์\n\nType Mail : ประเภทอีเมลล์\n\nType Mail : เลือกประเภทของบริการอีเมลที่คุณต้องการเพิ่ม\n\nDelete mail not on the tool : ลบอีเมลที่ไม่มีอยู่ในเครื่องมือ\n\n",
                "type": "markdown",
                "images": [
                  "image236.png"
                ]
              },
              {
                "title": "7.Change name (เปลี่ยนชื่อ)",
                "content": "วิดีโอ: การเปลี่ยนรูปโปรไฟล์และชื่อใน MaxSystemCare\n\nRandom name : สุ่มชื่อ\n\nVN name : ชื่อเวียดนาม\n\nForeign name : ชื่อต่างประเทศ\n\nName set by user : นำเข้า\n\nLname : นามสกุล\n\nMiddle name : ชื่อลาง\n\nFname : ชื่อ\n\nEnter list of full name : ป้อนรายชื่อเต็ม\n\nDelete used name : ลบชื่อที่ใช้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image752.png"
                ]
              },
              {
                "title": "8.Change Info Account (เปลี่ยนข้อมูลบัญชี)",
                "content": "Bio : เรื่องราว\n\nWork : การทำงาน\n\nHigh School : มัธยม\n\nCollege : วิทยาลัย\n\nCurrent City : เมืองปัจจุบัน\n\nHometown : บ้านเกิด\n\nRelationship : ความสัมพันธ์\n\ngender : เพศ\n\nBirthday : วันเกิด\n\nDon't change info if already has : ไม่เปลี่ยนข้อมูลหากมีอยู่แล้ว\n\nDelete info if exists : ลบข้อมูลหากมีอยู่แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image331.png"
                ]
              },
              {
                "title": "9.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image745.png"
                ]
              },
              {
                "title": "10.Professional mode (โหมดมืออาชีพ)",
                "content": "Options: ตัวเลือกสถานะการทำงาน\n\n",
                "type": "markdown",
                "images": [
                  "image44.png"
                ]
              },
              {
                "title": "11. Delete wall post (ลบโพสต์บนวอลล์)",
                "content": "Count: จำนวนโพสต์\n\nBreak (s): ระยะห่างเวลาพัก\n\n",
                "type": "markdown",
                "images": [
                  "image11.png"
                ]
              },
              {
                "title": "12.Unlock profile (ปลดล็อคโปรไฟล์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image736.png"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_oqrkt",
        "name": "คำถามและปัญหาที่พบบ่อย MaxSystemCare",
        "sections": [
          {
            "title": "คำถามและปัญหาที่พบบ่อย MaxSystemCare",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_p3pla",
            "name": "วิธีแก้ไขปัญหาการโหลดล้มเหลวหยุดค้างที่ 94%",
            "sections": [
              {
                "title": "วิธีแก้ไขปัญหาการโหลดล้มเหลวหยุดค้างที่ 94%",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.ปิดซอฟต์แวร์ MaxSystemCare",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.เข้าไปที่โฟลเดอร์ dnplayer",
                "content": "ดูที่อยู่ไฟล์ ไปที่ Genneral configs\n\n",
                "type": "markdown",
                "images": [
                  "image39.png"
                ]
              },
              {
                "title": "3.เปิดโฟลเดอร์ vms ลบโฟลเดอร์ทั้งหมดที่ขึ้นต้นด้วย \"leidian...\"",
                "content": "",
                "type": "markdown",
                "images": [
                  "image145.png"
                ]
              },
              {
                "title": "4.เปิด MaxSystemCare อีกครั้งเพื่อใช้งาน",
                "content": "",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_2sa0p",
            "name": "ล็อคอินแล้ว Status ขึ้น Changed pass แก้ยังไง",
            "sections": [
              {
                "title": "ล็อคอินแล้ว Status ขึ้น Changed pass แก้ยังไง",
                "content": "กรณีที่ล็อคอินจากด้านนอกแล้วเข้าใช้งานได้ปกติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เลือกบัญชีที่ต้องการ",
                "content": "",
                "type": "markdown",
                "images": [
                  "image764.png"
                ]
              },
              {
                "title": "2.คลิกขวา ==> เลือกที่ LDPlayer (swap)==> เลือกที่ Delete profile",
                "content": "",
                "type": "markdown",
                "images": [
                  "image30.png"
                ]
              },
              {
                "title": "3.รันโปรแกรมใช้งานอีกรอบ",
                "content": "",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_hu404",
            "name": "วิธีแก้ปัญหา failed to load 4.0",
            "sections": [
              {
                "title": "วิธีแก้ปัญหา failed to load 4.0",
                "content": "วิธีแก้ปัญหาหลังจากติดตั้งเสร็จรันโปรแกรมแล้วติดปัญหาเหมือนในรูป\n\nวิธีแก้ปัญหา : ดาวน์โหลด ldplayer 4.0 ที่ ประวัติเวอร์ชันและบันทึกย่อประจำรุ่น - LDPlayer\n\nจากนั้นติดตั้ง ldplayer 4.0 แล้วลองรันโปรแกรมอีกรอบ\n\nโปรแกรมใช้ในการฟาร์มบัญชี twitter อัตโนมัติ\n\nเครื่องมือที่ช่วยเราบริหารจัดการบัญชี ไปพร้อมๆ กับการใช้งานฟังชั่นที่หลากหลายมากยิ่งขึ้น แต่ฟังชั่นหนึ่งที่โดดเด่นที่สุดคือ ฟังชั่นการสร้างออแกนิคเทียมให้กับโพสต์ ด้วยการปั่นทวิตเตอร์ช่วยลดค่าโฆษณา\n\nปฏิสัมพันธ์ (Interaction)\n\nปฏิสัมพันธ์ในฟีดข่าว\n\nปฏิสัมพันธ์กับผู้ติดตาม\n\nปฏิสัมพันธ์กับการติดตาม\n\nปฏิสัมพันธ์ที่ผู้ใช้กำหนดเอง\n\nปฏิสัมพันธ์ผ่านแฮชแท็ก\n\nปฏิสัมพันธ์กับผู้ใช้ผ่านแฮชแท็ก\n\nปฏิสัมพันธ์กับบทความที่กำหนด\n\nปฏิสัมพันธ์กับความคิดเห็นที่กำหนด\n\nปฏิสัมพันธ์ผ่านคีย์เวิร์ด\n\nส่งข้อความโดยผู้ใช้\n\nส่งข้อความถึงผู้ติดตาม/การติดตาม...\n\nการโต้ตอบของโฆษณาโดยผู้ใช้\n\nโฆษณาเชิงโต้ตอบในฟีดข่าว\n\nการติดตาม (Following)\n\nติดตาม (Follow)\n\nติดตามคนที่ทวิตแนะนำ\n\nติดตามโดยคีย์เวิร์ด\n\nติดตามผู้ใช้\n\nติดตามกลับผู้ติดตาม\n\nติดตามผู้ติดตามของผู้ใช้\n\nติดตามการติดตามของผู้ใช้\n\nติดตามแฮชแท็ก\n\nยกเลิกการติดตาม (Unfollow)\n\nยกเลิกการติดตามผู้ใช้ที่กำหนด\n\nฟังก์ชันอื่นๆ (Other Functions)\n\nหยุดพัก (Breaks)\n\nอ่านแจ้งเตือน\n\nโพสต์ทวีต\n\nแชร์ทวีต\n\nอัปเดตข้อมูล\n\nรับรายชื่อผู้ติดตาม/การติดตาม\n\nรับรายชื่อผู้ใช้ที่กดไลค์/รีทวีต\n\nรับลิงก์ทวีตและรีทวีต\n\nเปลี่ยนประเทศและภาษา\n\nลบทวีตเก่าทั้งหมด\n\nสแกนเนื้อหาความคิดเห็น\n\nแบ่งปันสิทธิ์ผู้จัดการสตูดิโอ\n\nเปิดการแสดงเนื้อหา 18+\n\nลบการเข้าสู่ระบบอุปกรณ์เก่า\n\nรับรายชื่อผู้ใช้ตามรายชื่อชื่อ\n\nเปลี่ยนข้อมูล (Change Info)\n\nเปลี่ยนชื่อผู้ใช้\n\nเปลี่ยนรหัสผ่าน\n\nเปลี่ยนรูปโปรไฟล์\n\nเปลี่ยนภาพพื้นหลัง\n\nอัปเดตหมายเลขโทรศัพท์\n\nเปลี่ยนชื่อ, ประวัติ, เว็บไซต์ และ...\n\nสร้างรหัส 2FA\n\nเปิดเผยวันเกิด\n\nอัปเดตอีเมล\n\nราคา 1700 บาท / เดือน\n\n",
                "type": "markdown",
                "images": [
                  "image651.png",
                  "image614.png",
                  "image471.png"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maxtwitterpro",
    "name": "Max Twitter Pro",
    "categories": [
      {
        "id": "cat_u7jmi",
        "name": "1.วิธีการนำบัญชีเข้าสู่โปรแกรม MaxTwitterPro",
        "sections": [
          {
            "title": "1.วิธีการนำบัญชีเข้าสู่โปรแกรม MaxTwitterPro",
            "content": "อธิบายรายละเอียดการนำบัญชีเข้าสู่โปรแกรม MaxTwitter\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1 การนำบัญชีTwitterเข้าโปรแกรม MaxTwitter",
            "content": "ให้ทำการสร้างไฟล์ขึ้นมาโดยใส่ชื่อตามที่ต้องการได้เลย จากนั้นกด Add\n\nสำคัญต้องใส่ตามแพทเทิร์นตามที่เราเลือกไว้ User จะใส่เป็นเบอร์หรือเมลล์ก็ได้ แล้วคั่นด้วยเครื่อง “ | ” เสมอ แล้วกดAdd ได้เลย แล้วจะขึ้น Import Accounts success ก็กด OK\n\nเป็นอันเสร็จสิ้นขั้นตอนการนำบัญชี Twitter เข้าระบบ\n\n",
            "type": "markdown",
            "images": [
              "image495.png",
              "image68.png",
              "image166.png",
              "image250.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_69gu5",
        "name": "2.อธิบายการตั้งค่าต่างๆเบื้องต้น",
        "sections": [
          {
            "title": "2.อธิบายการตั้งค่าต่างๆเบื้องต้น",
            "content": "อธิบายฟังก์ชั่นการใช้งานพื้นฐาน\n\nGeneral configs\n\nGeneral configs\n\n1.1 Chrome threads: คือ จำนวนเบราว์เซอร์ที่เปิดพร้อมกัน (หากไม่ได้ใช้ proxy แนะนำให้เปิดไม่เกิน 5)\n\n1.2 Check info threads: คือ จำนวนจอไว้เช็คสถานะของเฟสในการรันโปรแกรม (ให้ตั้งตามจำนวนเบราว์เซอร์ในการรันโปรแกรม)\n\n1.3 Folder profile: คือ ใส่ที่อยู่เก็บรูปภาพ ในโฟลเดอร์ Maxcare เพื่อเก็บรูปภาพและดึงรูปออกมาใช้ในระบบ\n\nChrome configs\n\n1.1 Show image when use browser: ติ๊กถูกเพื่อให้แสดงรูปภาพขณะเปิดเบราว์เซอร์\n\n1.2 Text typing speed: ปรับความเร็วในการพิมพ์ข้อความอัตโนมัติ\n\n1.3 Sort chrome window: ตั้งค่าการเรียงหน้าต่างเบราว์เซอร์\n\n1.4 Delay Open chrome (s): ตั้งค่าหน่วงเวลาก่อนเปิดหน้าต่างถัดไป\n\n1.5 Add Chrome Form View: กำหนดขนาดหน้าต่างเบราว์เซอร์\n\n1.6 Hide chrome: ติ๊กถูกหากต้องการให้เบราว์เซอร์ทำงานเบื้องหลัง\n\n1.7 Update Chromedriver: ปุ่มสำหรับอัปเดตตัวควบคุม Chrome ให้เป็นเวอร์ชันล่าสุดเสมอ\n\n1.8 Path chrome.exe: ใส่ที่อยู่ไฟล์ (Path) ของโปรแกรม Chrome ในเครื่องของคุณ\n\n1.9 Use Gologin: หากใช้บริการ Gologin ให้ติ๊กช่องนี้ และระบุ Path ของ Orbita chrome.exe\n\n1.10 Use GEM Login: สำหรับผู้ใช้งาน GEM Login ให้กรอก API URL\n\n1.11 Use GPM Login: สำหรับผู้ใช้งาน GPM Login ให้เลือกเวอร์ชันเบราว์เซอร์ และสามารถเลือก Disable WebRTC เพื่อป้องกันการหลุดของ IP จริงได้\n\nCaptcha configs\n\n1.1 API Key Omocaptcha: ช่องสำหรับกรอก API Key เพื่อแก้ Captcha อัตโนมัติ\n\nEmail configs\n\n1.1 https://generator.email/: สามารถป้อนโดเมน\n\n1.2 https://unlimitmail.com/: กรอก Token สำหรับใช้งาน Unlimitmail\n\n1.3 https://donglaomail.com/: กรอก Token สำหรับใช้งาน Donglaomail\n\nChange IP configs\n\n1.1 Don't Check IP before running: หากติ๊กถูกโปรแกรมจะเริ่มทำงานทันทีโดยไม่ตรวจสอบว่า IP ปัจจุบันคืออะไร\n\n1.2 Delay after change IP: การตั้งเวลา \"รอ\" หลังจากเปลี่ยน IP สำเร็จ\n\n1.3 Change IP: เลือกประเภทการเปลี่ยน IP\n\nOther configs\n\n1.1 Distinguish [Account status]: คือ สามารถเลือกเพื่อแยกแยะสถานะบัญชี\n\n1.2 Save [Description] column data: คือ เลือกเพื่อบันทึกข้อมูลคอลัมน์\n\n1.3 Backup Database select คือ เลือกสำรองข้อมูลที่เลือก\n\n",
            "type": "markdown",
            "images": [
              "image408.png",
              "image527.png",
              "image125.png",
              "image674.png",
              "image291.png",
              "image416.png",
              "image706.png"
            ]
          },
          {
            "title": "หากไม่ได้ใช้ Proxy การตั้งค่าด้านขวาไม่ต้องปรับแก้ไขอะไร",
            "content": "Display configs\n\nเราสามารถกำหนดได้ว่าอยากให้มันแสดงข้อมูลอะไรในโปรแกรม Maxcare เช่น ตัวอย่างตามข้างบน\n\nจะแสดงขึ้นข้อมูล อีเมลล์, ชื่อเฟส, จำนวนเพื่อน, เพศ, รหัสผ่านเฟส, รหัสผ่านอีเมลล์, รหัส2FA, เวลาที่รันโปรแกรมล่าสุด, สถานะเฟส, รายละเอียดแสดงขั้นตอนระหว่างรันโปรแกรม เป็นต้น\n\nในรูปที่ email และ pass mail ว่าง เพราะไม่ได้ import เป็นแพทเทิน uid|pass|email|passmail นั่นเอง\n\n",
            "type": "markdown",
            "images": [
              "image213.png",
              "image709.png"
            ]
          },
          {
            "title": "Interactive configs",
            "content": "Basic running คือ การตั้งค่าก่อนรัน\n\nUse chrome profile: ให้ระบบใช้โปรไฟล์ Chrome ที่ตั้งค่าไว้\n\nClear chrome cache: ล้างไฟล์ขยะและข้อมูลค้างเก่าก่อนเริ่มงานใหม่ ช่วยลดปัญหาเว็บโหลดช้าหรือแสดงผลผิดพลาด\n\nCheck wall account: ตรวจสอบสถานะหน้า Wall หรือความพร้อมของบัญชีก่อนเริ่มทำงาน\n\nShuffle account order: สลับลำดับการทำงานของบัญชีแบบสุ่ม เพื่อความเป็นธรรมชาติและเลี่ยงการโดนตรวจจับ\n\nLogin คือ เลือกวิธีการใช้รหัสล็อกอิน\n\nLogin type: คือ รูปแบบการเข้าสู่ระบบ\n\nUid|Pass: เข้าสู่ระบบด้วย ID ผู้ใช้ และ รหัสผ่าน\n\nEmail|Pass: เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน\n\nCookie: เข้าสู่ระบบโดยใช้ค่า Cookie\n\nCookie > Pass: โปรแกรมจะพยายามเข้าด้วย Cookie ก่อน หาก Cookie ใช้ไม่ได้ จะเปลี่ยนไปใช้รหัสผ่านโดยอัตโนมัติ\n\nInteraction : เลือก สคริปต์ การวอร์มบช ที่นี่\n\nSelect script: คือ เลือกสคริปต์ที่ต้องการใช้งาน\n\nManage: จัดการสคริปต์ เช่น การเพิ่ม ลบ หรือแก้ไขสคริปต์ในรายการ\n\nLimit run time per account (seconds): จำกัดระยะเวลาการทำงาน ต่อหนึ่งบัญชี\n\nLimit run time per turn (minutes):จำกัดระยะเวลาการทำงาน ต่อหนึ่งรอบ\n\nRerun all accounts after completed: โปรแกรมวนกลับมาทำงานใหม่หลังจากรันครบทุกบัญชีแล้ว\n\nTotal turns: กำหนดจำนวนรอบที่ต้องการให้สคริปต์กลับมาทำงาน\n\nWait for next turn: กำหนดระยะเวลาการพักก่อนจะเริ่มรันรอบถัดไป\n\nAfter interaction: กำหนดให้ระบบดำเนินการอย่างใดอย่างหนึ่งโดยอัตโนมัติ หลังจากที่บัญชีทำงานตามโจทย์หลัก\n\nCheck Info Acc after running: ระบบจะทำการตรวจสอบข้อมูลเฉพาะของบัญชีนั้นๆ\n\nAuto get cookie: คัดลอก Cookie ของบัญชีออกมาโดยอัตโนมัติ\n\nAuto get token: ดึง Token อัตโนมัติ\n\nAllow others to follow: เปิดใช้งานการอนุญาตให้ผู้อื่นกดติดตามบัญชีนี้ได้\n\nCount posts on wall: สั่งให้ระบบนับจำนวนโพสต์ที่มีอยู่บนวอลล์ของบัญชี\n\nCheck create profile: ตรวจสอบการสร้างโปรไฟล์\n\nCheck password: ตรวจสอบว่ารหัสผ่านปัจจุบันยังใช้งานได้ปกติหรือไม่\n\nCheck Meta Verified: ตรวจสอบสถานะการยืนยันตัวตน (เครื่องหมายถูกสีฟ้า)\n\nLogout account: สั่งให้ระบบออกจากระบบทันทีหลังจากทำงานเสร็จ\n\nChange language: เปลี่ยนภาษาของบัญชี\n\nDelete account: สั่งให้ลบบัญชีทิ้งทันทีหลังจากเสร็จสิ้นภารกิจ\n\nอธิบายฟังก์ชั่นการใช้งานพื้นฐาน ของ MaxTwitter\n\n",
            "type": "markdown",
            "images": [
              "image665.png",
              "image311.png",
              "image483.png",
              "image678.png",
              "image190.png"
            ]
          },
          {
            "title": "General configs : การตั้งค่าทั่วไป",
            "content": "",
            "type": "markdown",
            "images": [
              "image227.png"
            ]
          },
          {
            "title": "General configs",
            "content": "Number of running thread : จำนวนเธรดที่ทำงาน\n\nNumber of threads check info: ตรวจสอบจำนวนเธรด\n\n",
            "type": "markdown",
            "images": [
              "image703.png"
            ]
          },
          {
            "title": "Chrome Configuration",
            "content": "Browser options: ประเภทของเบราว์เซอร์\n\nSetup Creation: หากเป็นการใช้งานครั้งแรก หรือต้องการอัปเดตตัวเบราว์เซอร์ ให้กดปุ่ม \"Setup creation\" เพื่อให้โปรแกรมเตรียมไฟล์ระบบให้พร้อม\n\nBrowser path: ที่อยู่ของตัวเบราว์เซอร์หลัก\n\nLogin options: รูปแบบการล็อกอิน\n\nUser|Pass\n\nCookie\n\nPhone|Pass\n\nEmail|Pass\n\nLogin reset pass\n\nLogin page link: ใส่ URL ของหน้าลงชื่อเข้าใช้งาน\n\nCan be left blank: สามารถปล่อยว่างไว้ได้\n\nProfile folder path: ตำแหน่งที่เก็บโปรไฟล์เบราว์เซอร์\n\nAutomatically clear cache records after running: ล้างประวัติและไฟล์ชั่วคราว (Cache) ทันทีหลังจากที่โปรแกรมทำงานเสร็จสิ้นในแต่ละรอบ\n\nAutomatically create Profile at runtime: สั่งให้โปรแกรมสร้างโปรไฟล์เบราว์เซอร์ใหม่ให้โดยอัตโนมัติหากยังไม่มีโปรไฟล์สำหรับบัญชีนั้น ๆ\n\nShow image when opening browser: กำหนดว่าจะให้เบราว์เซอร์แสดงรูปภาพบนหน้าเว็บหรือไม่\n\nAdd Chrome to Form View: เป็นการดึงหน้าต่างเบราว์เซอร์ที่กำลังรันอยู่ เข้ามาแสดงผลภายในตัวโปรแกรมหลัก\n\nSort chrome window: ตั้งค่าการเรียงหน้าต่าง เช่น 5 x 2 เพื่อให้ดูการทำงานได้ง่าย\n\nเลขตัวหน้า (5): คือจำนวน คอลัมน์ (แนวตั้ง) -> จะมีหน้าต่างเรียงกันซ้ายไปขวา 5 จอ\n\nเลขตัวหลัง (2): คือจำนวน แถว (แนวนอน) -> จะมีหน้าต่างเรียงกันบนลงล่าง 2 ชั้น\n\nChrome opening delay: ระยะเวลาหน่วงในการเปิดแต่ละหน้าต่าง\n\nChrome opening delay: ระยะเวลาหน่วงในการปิดแต่ละหน้าต่าง\n\nFull chrome window: หากติ๊กถูก เบราว์เซอร์จะเปิดแบบเต็มจอ\n\nUse the useragent assigned on the Useragent column: หากคุณมีรายการ Useragent (รหัสจำลองเบราว์เซอร์/อุปกรณ์) เฉพาะตัวสำหรับแต่ละบัญชี ให้ติ๊กช่องนี้เพื่อให้โปรแกรมดึงค่ามาใช้โดยตรง\n\nWindow zoom ratio: ปรับขนาดการแสดงผลภายในหน้าต่างเบราว์เซอร์\n\n",
            "type": "markdown",
            "images": [
              "image637.png"
            ]
          },
          {
            "title": "Change IP Configs",
            "content": "Don't Check IP before running: หากติ๊กถูก ระบบจะไม่ตรวจสอบ IP ก่อนเริ่มงาน\n\nChange IP after: กำหนดว่าต้องการเปลี่ยน IP ทุกๆ กี่รอบการทำงาน\n\nIP change method: เลือกวิธีการเปลี่ยน IP\n\n",
            "type": "markdown",
            "images": [
              "image704.png"
            ]
          },
          {
            "title": "Captcha Configuration",
            "content": "Web captcha: เลือกบริการที่ใช้งาน\n\nApi Captcha: นำคีย์ API จากเว็บไซต์ผู้ให้บริการมาใส่ในช่องนี้ แล้วกด Check เพื่อดูยอดเงินคงเหลือ\n\nTime to solve captcha: ระยะเวลาที่รอให้ระบบแก้รหัส\n\nCloudflare solution waiting time: หากเว็บมีระบบป้องกันของ Cloudflare ให้ตั้งเวลาเผื่อไว้ (เช่น 30 วินาที) เพื่อให้ระบบมีเวลาประมวลผลการเข้าถึง\n\nAutomatically convert captcha to English: แปลง captcha เป็นภาษาอังกฤษโดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": [
              "image763.png"
            ]
          },
          {
            "title": "Display configs",
            "content": "เราสามารถกำหนดได้ว่าอยากให้มันแสดงข้อมูลอะไรในโปรแกรม MaxTwitter Pro เช่น ตัวอย่างตามข้างบน\n\nจะแสดงข้อมูลขึ้นตามที่เราทำการเลือกไว้ และจะบอกรายละเอียดแสดงขั้นตอนระหว่างที่เรารันโปรแกรม\n\n",
            "type": "markdown",
            "images": [
              "image519.png",
              "image29.png"
            ]
          },
          {
            "title": "Interactive configs : การกำหนดค่าการโต้ตอบ",
            "content": "",
            "type": "markdown",
            "images": [
              "image657.png"
            ]
          },
          {
            "title": "Option",
            "content": "Shuffle the order of accounts before running: ติ๊กถูกหากต้องการให้ระบบ \"สุ่มลำดับบัญชี\" ก่อนเริ่มทำงาน\n\nRerun all accounts after completed: ติ๊กถูกหากต้องการให้ระบบ \"เริ่มรันใหม่ทั้งหมด\" หลังจากที่บัญชีทุกตัวทำงานเสร็จสิ้น 1 รอบ\n\nTotal turns: กำหนดจำนวนรอบที่ต้องการให้รันซ้ำ\n\nWait for next turn: กำหนดเวลาพักระหว่างรอเริ่มรอบถัดไป\n\n",
            "type": "markdown",
            "images": [
              "image586.png"
            ]
          },
          {
            "title": "Choose interaction type",
            "content": "Select general scenario: เลือกสคริปต์ที่คุณสร้างไว้\n\nManage: ปุ่มสำหรับเข้าไปจัดการ สร้าง หรือแก้ไข สคริปต์ ต่างๆ\n\nRandom order of action: ติ๊กถูกเพื่อให้ระบบ \"สุ่มลำดับการกระทำ\" ภายใน สคริปต์ นั้นๆ\n\nRun the attached script: ติ๊กถูกหากต้องการให้รัน Script เพิ่มเติมที่แนบไว้คู่กับการทำงานหลัก\n\n",
            "type": "markdown",
            "images": [
              "image772.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_5rwmp",
        "name": "3.อธิบายเมนูฟังก์ชั่นการทำงาน Interactive (Max Twitter Pro)",
        "sections": [
          {
            "title": "3.อธิบายเมนูฟังก์ชั่นการทำงาน Interactive (Max Twitter Pro)",
            "content": "",
            "type": "markdown",
            "images": [
              "image471.png"
            ]
          },
          {
            "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
            "content": "Interact\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Interact Newsfeed (การมีปฏิสัมพันธ์กับ ฟีดข่าว หน้าฟีดข่าว)",
            "content": "",
            "type": "markdown",
            "images": [
              "image295.png"
            ]
          },
          {
            "title": "การตั้งค่าเวลา",
            "content": "Surfing time: ตั้งค่าเวลาที่จะใช้ในการเลื่อนดูฟีด\n\nTime interval between operations: เวลาระหว่างการสลับไปทำกิจกรรมถัดไป\n\nTime spent viewing tweets: ระยะเวลาที่หยุดค้างเพื่อ \"อ่าน\" แต่ละโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตอบสนองหลัก",
            "content": "Release emotions: การกดแสดงความรู้สึก (Like/Heart) สามารถระบุจำนวนครั้งที่ต้องการสุ่มทำได้\n\nRetweet: การรีทวีตโพสต์ ระบุจำนวนครั้งที่ต้องการสุ่ม\n\nComment: การแสดงความคิดเห็น\n\nList Comments: ใส่ข้อความที่ต้องการสุ่มตอบ (1 บรรทัดต่อ 1 ข้อความ)\n\nเทคนิค: สามารถใช้รูปแบบ {a|b|c} เพื่อสุ่มคำในประโยคได้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าขั้นสูง",
            "content": "Tag your friends: แท็กเพื่อนในโพสต์\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็ก\n\nList of users: ใส่รายชื่อ Username ที่ต้องการแท็ก (1 บรรทัดต่อ 1 ชื่อ)\n\nImage: การแนบรูปภาพในการตอบโต้\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: ระบุจำนวนรูปที่จะสุ่มใช้\n\nAdd Hashtag: การเพิ่มแฮชแท็ก\n\nList of hashtags: ใส่รายการ #Hashtag ที่ต้องการ (1 บรรทัดต่อ 1 แท็ก)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดเก็บข้อมูล",
            "content": "Export the link of the interactive post to a file: หากต้องการเก็บประวัติว่าเราไปตอบโต้ที่ลิงก์ไหนบ้าง ให้ติ๊กช่องนี้แล้วระบุ File path เพื่อบันทึกข้อมูลออกมา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Interact with Followers (ตอบโต้กับผู้ติดตาม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image580.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Amount: จำนวนผู้ใช้ (User) ที่ต้องการให้ระบบเข้าไปปฏิสัมพันธ์ด้วย\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าพฤติกรรมการเข้าชม (Interactive Configuration/User)",
            "content": "Surfing time: ระยะเวลาในการเลื่อนดูหน้าฟีด\n\nTime interval between operations: ระยะเวลาพักระหว่างแต่ละการกระทำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์",
            "content": "Release emotions: การกดแสดงความรู้สึก (Like, Love ฯลฯ) สามารถระบุจำนวนครั้งต่อผู้ใช้ได้\n\nRetweet: การแชร์โพสต์ต่อ (ระบุจำนวนครั้ง)\n\nComment: การแสดงความคิดเห็น\n\nใส่ข้อความในช่อง List Comments (1 บรรทัดต่อ 1 ข้อความ)\n\nรองรับระบบ Spin content สุ่มคำไม่ให้ซ้ำกัน เช่น {a|b|c}\n\nTag your friends: แท็กเพื่อนในโพสต์\n\nAmount: กำหนดจำนวน \"ผู้ใช้งาน\" (User) ที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์ด้วย\n\nใส่ชื่อผู้ใช้ (Username) ในช่อง List of users\n\nImage: การแนบรูปภาพ\n\nImage folder: เลือกโฟลเดอร์รูปภาพ\n\nNumber of photos: ระบุจำนวนรูปที่จะใช้\n\nAdd Hashtag: การใส่แฮชแท็ก\n\nList of hashtags: ใส่รายการแฮชแท็กที่ต้องการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Interact with Following (ตอบโต้กับผู้กำลังติดตาม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image594.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Amount: กำหนดจำนวนผู้ใช้ที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์ด้วย\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การกำหนดเวลา",
            "content": "Surfing time: ระยะเวลาในการรับชมเนื้อหา\n\nTime interval between operations: ระยะเวลาพักระหว่างการทำงานแต่ละขั้นตอน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "กิจกรรมการปฏิสัมพันธ์",
            "content": "Release emotions: การกดแสดงความรู้สึก (Like/Heart) สามารถระบุจำนวนครั้งได้\n\nComment: การคอมเมนต์ใต้โพสต์\n\nList Comments: ใส่ข้อความคอมเมนต์ (1 บรรทัดต่อ 1 ข้อความ)\n\nSpin content: รองรับรูปแบบ {a|b|c} เพื่อสุ่มคำพูด\n\nRetweet: การแชร์โพสต์ต่อ\n\nTag your friends: การแท็กเพื่อนในโพสต์\n\nList of users: ใส่รายชื่อ Username ที่ต้องการแท็ก (1 ชื่อต่อ 1 บรรทัด)\n\nImage: การแนบรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพ\n\nNumber of photos: จำนวนรูปที่ต้องการใช้\n\nAdd Hashtag: การเพิ่มแฮชแท็ก\n\nList of hashtags: ใส่รายการแฮชแท็กที่ต้องการ (1 แฮชแท็กต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการข้อมูล",
            "content": "Export the link of the interactive post to a file: หากติ๊กถูก ระบบจะบันทึก Link ของโพสต์ที่เราไปมีปฏิสัมพันธ์ด้วยลงในไฟล์ที่กำหนด\n\nFile path: เลือกที่อยู่ของไฟล์ที่ต้องการบันทึกข้อมูล\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.User-specified interaction (การโต้ตอบที่ผู้ใช้ระบุ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image72.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number of Users: กำหนดจำนวนผู้ใช้เป้าหมาย\n\nPosts/User: จำนวนโพสต์ที่จะเข้าไปจัดการต่อ 1 ผู้ใช้\n\nWaiting time: ระยะเวลารอคอยระหว่างแต่ละโพสต์\n\nTime interval between actions: ระยะห่างระหว่างช่วงการทำงานแต่ละรอบ\n\nEnter the list of Users: ช่องสำหรับใส่รายชื่อ Username หรือ Link ของเป้าหมาย (1 รายการต่อ 1 บรรทัด)\n\nDelete used users: หากติ๊กถูก ระบบจะลบรายชื่อเป้าหมายที่ดำเนินการเสร็จแล้วออกจากรายการทันที\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าปฏิสัมพันธ์",
            "content": "Release emotions: ติ๊กเพื่อกดแสดงความรู้สึก (Like, Love ฯลฯ)\n\nRetweet: ติ๊กเพื่อให้ระบบกดรีทวีต (สำหรับ X/Twitter)\n\nComment: ติ๊กเพื่อคอมเมนต์\n\nใส่ข้อความในช่อง List Comments (รองรับระบบ Spin content เช่น {ข้อความ1|ข้อความ2} เพื่อสุ่มคำพูด)\n\nNon-duplicate comment: ป้องกันการใช้คอมเมนต์ซ้ำ\n\nImage: ติ๊กหากต้องการแนบรูปภาพในคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูป\n\nNumber of photos: เลือกจำนวนรูปที่จะสุ่มใช้\n\nExport the link of the interactive post to a file: ส่งออกลิงก์ของโพสต์ที่เข้าไปมีปฏิสัมพันธ์แล้วบันทึกลงไฟล์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การเพิ่มแท็กและแฮชแท็ก",
            "content": "Tag your friends: ติ๊กเพื่อแท็กเพื่อนในคอมเมนต์\n\nAmount: กำหนดจำนวนคน\n\nList of users: ใส่รายชื่อเพื่อนในช่องด้านล่าง\n\nAdd Hashtag: ติ๊กเพื่อใส่แฮชแท็กในคอมเมนต์\n\nAmount: กำหนดจำนวนแฮชแท็ก\n\nList of hastags: ใส่รายการแฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แท็ก)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "พฤติกรรมการเลื่อนดู",
            "content": "Browse comments: จำลองการเลื่อนอ่านคอมเมนต์\n\nScrolls: จำนวนครั้งที่จะเลื่อน (Turn)\n\nDelay: ระยะเวลาที่ค้างไว้ในแต่ละการเลื่อน\n\nSurf the ads below in the comments: จำลองการกดดูหรือเลื่อนผ่านโฆษณาในช่องคอมเมนต์\n\nNumber of ads: กำหนดจำนวนโฆษณา\n\nTime viewing ads: เวลาที่ดู\n\nDelay: ระยะเวลารอ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Interact By Hashtag (โต้ตอบด้วยแฮชแท็ก)",
            "content": "",
            "type": "markdown",
            "images": [
              "image448.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Posts/hashtags: กำหนดจำนวนโพสต์ที่จะเข้าไปโต้ตอบต่อ 1 แฮชแท็ก\n\nWaiting time: ระยะเวลารอระหว่างแต่ละการกระทำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รายการแฮชแท็ก",
            "content": "Enter a list of Hashtags: ช่องสำหรับใส่แฮชแท็กที่ต้องการให้ระบบไปค้นหา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การโต้ตอบ",
            "content": "Release emotions: กดแสดงความรู้สึก (Like/Love/ฯลฯ)\n\nRetweet: กดรีทวีตหรือแชร์โพสต์\n\nComment: พิมพ์ข้อความตอบกลับ\n\nList Comments: รายการคอมเมนต์ที่ต้องการ\n\nรองรับระบบ Spin content {a|b|c} เพื่อสุ่มข้อความไม่ให้ซ้ำกัน\n\nImage: แนบรูปภาพไปกับการโต้ตอบ\n\nImage folder: เลือกโฟลเดอร์รูปภาพ\n\nNumber of photos: ระบุจำนวนภาพที่ต้องการใช้\n\nExport the link of the interactive post to a file: ส่งออก (Export) ลิงก์ของโพสต์ที่ระบบไปโต้ตอบแล้วเก็บไว้ในไฟล์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการแท็กและแฮชแท็กเพิ่มเติม",
            "content": "Tag your friends: เลือกแท็กเพื่อนในโพสต์\n\nAmount: กำหนดจำนวนคนที่จะแท็ก\n\nLis of users: ใส่รายชื่อ Username ที่ต้องการแท็ก (1 ชื่อต่อ 1 บรรทัด)\n\nAdd Hashtag: เพิ่มแฮชแท็กอื่นๆ ลงไปในคอมเมนต์หรือโพสต์เพิ่มเติม (1 แฮชแท็กต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Interraction Designated Articles (ตอบโต้กับโพสต์ที่กำหนด)",
            "content": "",
            "type": "markdown",
            "images": [
              "image385.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Link tweet: วางลิงก์ของทวีต (X Post) ที่ต้องการให้ระบบเข้าไปทำงาน\n\nNumber of links per account: จำนวนลิงก์ที่ต้องการให้แต่ละบัญชีเข้าไปจัดการ\n\nPost viewing time: ระยะเวลาในการหยุดดูโพสต์\n\nCác tài khoản không dùng trùng link nhau: ตั้งค่าไม่ให้แต่ละบัญชีใช้ลิงก์ซ้ำกัน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การโต้ตอบหลัก",
            "content": "Release emotions: กดแสดงความรู้สึก\n\nRetweet: กดรีทวีตโพสต์\n\nBookmark: กดบันทึกโพสต์ไว้ในบุ๊กมาร์ก\n\nComment: ตั้งค่าการคอมเมนต์\n\nList Comments: ใส่ข้อความที่ต้องการ (1 บรรทัดต่อ 1 ข้อความ) รองรับการสุ่มคำแบบ {a|b|c}\n\nRandom Comment: สุ่มข้อความคอมเมนต์\n\nDo not reuse comments: ไม่ใช้ข้อความซ้ำ\n\nFile comment: ดึงข้อความคอมเมนต์จากไฟล์ข้างนอก\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การดึงดูดความสนใจเพิ่มเติม",
            "content": "Tag your friends: แท็กเพื่อนในคอมเมนต์\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็ก\n\nList of users: ใส่รายชื่อผู้ใช้\n\nTag in 1 line: แท็กในบรรทัดเดียว\n\nTag in multiple lines: แท็กแยกบรรทัด\n\nAdd Hashtag: ใส่แฮชแท็กที่ต้องการ (1 แฮชแท็กต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการสื่อ",
            "content": "Normal photo: อัปโหลดรูปภาพจากโฟลเดอร์ที่กำหนด\n\nImage folder: โฟลเดอร์รูปภาพที่กำหนด\n\nNumber of photos: จำนวนภาพที่ต้องการใช้\n\nGifs: ค้นหาและใช้ GIF ตามหัวข้อที่ระบุ\n\nDo not post photos: ไม่ต้องโพสต์รูปภาพ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจำลองพฤติกรรมการอ่าน",
            "content": "Browse comments: สั่งให้เลื่อนดูคอมเมนต์\n\nScrolls: จำนวนรอบการเลื่อน\n\nDelay: ระยะเวลารอระหว่างการเลื่อนแต่ละครั้ง\n\nSurf the ads below in the comments: สั่งให้คลิกดูหรือเลื่อนดูโฆษณาที่อยู่ใต้คอมเมนต์\n\nNumber of ads: จำนวนโฆษณาที่ต้องการดู\n\nTime viewing ads: ระยะเวลาในการดูแต่ละโฆษณา\n\nDelay: ระยะเวลาในการรอก่อนที่จะดูโฆษณาถัดไป\n\nDon't scroll through comments: ไม่ต้องเลื่อนดูคอมเมนต์ใดๆ\n\nClick to see the ad link of the article: คลิกดูลิงก์โฆษณาที่มากับบทความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ฟังก์ชันเสริมและการติดตาม",
            "content": "Follow the tweeter: กดติดตามเจ้าของทวีตนั้นทันที\n\nBấm xem video youtube nếu có: หากในทวีตมีลิงก์ YouTube ให้กดเข้าไปดู\n\nLướt trang user trước khi follow: ให้เลื่อนดูหน้าโปรไฟล์ของผู้ใช้นั้นก่อนจะกดติดตาม\n\nExport comment link to file: บันทึกลิงก์ที่คอมเมนต์สำเร็จลงในไฟล์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.Interaction specified commnet (ตอบโต้กับความคิดเห็นที่ระบุ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image650.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Link comment: ช่องสำหรับวาง URL หรือลิงก์ของคอมเมนต์ที่คุณต้องการให้ระบบเข้าไปโต้ตอบ\n\nComment viewing time: กำหนดระยะเวลาที่ระบบจะ \"เปิดดู\" คอมเมนต์นั้นๆ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการเนื้อหาคอมเมนต์",
            "content": "Release emotions: ติ๊กถูกเพื่อสั่งให้ระบบกดแสดงความรู้สึก\n\nComment: ติ๊กถูกเพื่อเปิดใช้งานการเขียนข้อความตอบกลับ\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการใช้ตอบกลับ\n\nเงื่อนไข: ใส่ 1 ข้อความต่อ 1 บรรทัด\n\nSpin Content: สามารถใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มเลือกคำมาผสมกัน ป้องกันการถูกตรวจจับว่าเป็นสแปม\n\nDelete used comment content: ลบข้อความที่ใช้ไปแล้วออกจากรายการอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การปฏิสัมพันธ์เพิ่มเติม",
            "content": "Retweet: ติ๊กถูกหากต้องการให้ระบบทำการรีทวีต\n\nTag your friends: ติ๊กถูกเพื่อระบุตัวตนเพื่อนในคอมเมนต์\n\nAmount: กำหนดจำนวนเพื่อนที่จะแท็ก\n\nList of users: ช่องสำหรับใส่รายชื่อ Username ของเพื่อนที่ต้องการแท็ก (1 รายชื่อต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการแฮชแท็กและรูปภาพ",
            "content": "Add Hashtag: ติ๊กถูกเพื่อใส่แฮชแท็กเพิ่มเติมในคอมเมนต์\n\nList of hashtags: ใส่รายการแฮชแท็กที่ต้องการ (1 แฮชแท็กต่อ 1 บรรทัด)\n\nImage: ติ๊กถูกหากต้องการแนบรูปภาพไปกับคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: กำหนดจำนวนรูปที่จะอัปโหลดต่อหนึ่งครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การส่งออกข้อมูล",
            "content": "Export comment link to file: ติ๊กถูกเพื่อบันทึกประวัติลิงก์ของคอมเมนต์ที่ได้ดำเนินการแล้วลงในไฟล์ภายนอก\n\nFile path: เลือกที่อยู่ไฟล์ (.txt) ที่ต้องการบันทึกข้อมูล\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.Interaction by keywords (ตอบโต้ด้วยคีย์เวิร์ด)",
            "content": "",
            "type": "markdown",
            "images": [
              "image126.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Post/keywords: จำนวนโพสต์ที่จะดำเนินการต่อหนึ่งคำค้นหา\n\nWaiting time: ระยะเวลาพักรอระหว่างการทำงาน\n\nPost viewing time: เวลาที่ใช้ในการ \"ดู\" โพสต์\n\nAction spacing: ระยะห่างระหว่างแต่ละการกระทำ\n\nNumber of keywords: จำนวนคำค้นหาที่จะใช้จากรายการด้านล่าง\n\nPost type: เลือกว่าจะไปที่โพสต์ยอดนิยม (Top) หรือโพสต์ใหม่ล่าสุด (New)\n\nEnter keyword list: ช่องสำหรับใส่คำค้นหา (Keyword) ที่ต้องการให้ระบบไปค้นหา (1 บรรทัดต่อ 1 คำ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบ",
            "content": "Release emotic: กดแสดงความรู้สึกพร้อมระบุจำนวนครั้ง (turn)\n\nRetweet: กดรีทวีต พร้อมระบุจำนวนครั้ง\n\nComment: พิมพ์ข้อความแสดงความคิดเห็น\n\nList Comments: ช่องสำหรับใส่ข้อความที่จะคอมเมนต์ (รองรับระบบ Spin content เช่น {ดีมาก|เยี่ยม|สุดยอด} เพื่อสุ่มคำพูด)\n\nImage: หากต้องการคอมเมนต์ด้วยรูปภาพ ให้เลือกช่องนี้แล้วระบุ Image folder (ที่อยู่ไฟล์รูปในคอมพิวเตอร์)\n\nExport the link of the interactive post to a file: ติ๊กถูกหากต้องการบันทึก URL ของโพสต์ที่ระบบไปทำรายการไว้ในไฟล์เครื่องคอมพิวเตอร์(ระบุที่อยู่ไฟล์ .txt)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การแท็กเพื่อนและแฮชแท็ก",
            "content": "Tag your friends:\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็กต่อหนึ่งโพสต์\n\nList of users: รายชื่อ Username ของเพื่อนที่ต้องการแท็ก (1 บรรทัดต่อ 1 ชื่อ)\n\nAdd Hashtag:\n\nList of hashtags: รายการแฮชแท็กที่ต้องการใส่เพิ่มเข้าไปในคอมเมนต์ (1 บรรทัดต่อ 1 แฮชแท็ก)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9.Messaging by User (ส่งข้อความหาผู้ใช้ที่ระบุ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image543.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Amount: กำหนดจำนวนผู้ใช้ที่จะส่งข้อความหา\n\nWaiting time: ระยะเวลารอคอยระหว่างการส่งแต่ละครั้ง (หน่วยเป็นวินาที) เพื่อป้องกันการโดนแบน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการรายชื่อผู้รับ",
            "content": "List of Users to message: ช่องสำหรับใส่ ID หรือ ลิงก์โปรไฟล์ของผู้รับ\n\nDelete the used user: หากติ๊กเลือก ระบบจะลบรายชื่อออกจากรายการหลังจากส่งข้อความสำเร็จแล้ว\n\nDo not follow the user's message: ไม่ติดตาม (Follow) ผู้ใช้เมื่อส่งข้อความ\n\nNhắn qua X Chat qua link: เลือกส่งข้อความผ่านทางลิงก์หน้าแชทโดยตรง\n\nNhắn qua X Chat qua tìm kiếm: เลือกส่งข้อความโดยใช้วิธีค้นหาชื่อผู้ใช้ในช่องค้นหาของหน้าแชท\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "เนื้อหาข้อความ",
            "content": "Message content: ช่องสำหรับใส่ข้อความที่ต้องการส่ง\n\nเทคนิค Spin content: ใช้รูปแบบ {สวัสดี|ทักทาย|ฮัลโหล} เพื่อให้ระบบสุ่มคำพูดไม่ให้ซ้ำกันในแต่ละคน\n\nSend photos: ติ๊กเพื่อส่งรูปภาพประกอบ\n\nImage folder path: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: ระบุจำนวนรูปที่จะส่งต่อ 1 ข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การสร้างปฏิสัมพันธ์อัตโนมัติ",
            "content": "Comment ngẫu nhiên vào 1 bài viết: หากเลือกไว้ ระบบจะไปคอมเมนต์ที่โพสต์ล่าสุดของผู้รับ 1 โพสต์ก่อนเริ่มส่งข้อความส่วนตัว\n\nช่องกรอกด้านล่าง: สำหรับใส่ข้อความคอมเมนต์ที่ต้องการสุ่มใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Messaging (ส่งข้อความถึงผู้ติดตาม/กำลังติดตาม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image572.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Loại đối tượng : เลือกว่าจะส่งข้อความหาใคร\n\nFollowing: ส่งหาคนที่เราไปกดติดตามเขาไว้\n\nFollower: ส่งหาคนที่มาติดตามเรา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การกำหนดปริมาณและความเร็ว",
            "content": "Amount: กำหนดจำนวนผู้ใช้ที่จะส่งข้อความหาในรอบนั้นๆ\n\nWaiting time: ระยะเวลาหยุดพักระหว่างการส่งข้อความแต่ละคน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการข้อความ (Message Content)",
            "content": "ช่องกรอกข้อความ: พิมพ์ข้อความที่ต้องการส่งในช่องว่างขนาดใหญ่\n\nเงื่อนไขการใส่เนื้อหา:\n\nOne content per line: 1 บรรทัด คือ 1 ข้อความ\n\nSpin content {a|b|c}: ใช้รูปแบบการสุ่มคำ เช่น {สวัสดี|ทักทาย|ฮัลโหล} ระบบจะสุ่มเลือกคำใดคำหนึ่งมาส่ง เพื่อให้ข้อความดูไม่เหมือนบอทจนเกินไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การส่งรูปภาพ",
            "content": "Send photos: ติ๊กถูกหากต้องการส่งรูปภาพไปพร้อมกับข้อความ\n\nImage folder path: ใส่ที่อยู่ของโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nAmount of images: กำหนดว่าจะส่งรูปภาพจำนวนเท่าใดต่อ 1 ข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Ads interactions by user (โต้ตอบกับโฆษณาตามผู้ใช้)",
            "content": "",
            "type": "markdown",
            "images": [
              "image140.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number of Users: กำหนดจำนวนผู้ใช้ที่จะให้ระบบเข้าไปส่อง\n\nNumber of ads/User: จำนวนโพสต์หรือโฆษณาต่อผู้ใช้ 1 คน ที่ต้องการให้มีปฏิสัมพันธ์ด้วย\n\nWaiting time: ระยะเวลาการรอระหว่างแต่ละการกระทำ\n\nEnter the list of Users: ช่องสำหรับใส่ ID หรือ Link ของผู้ใช้เป้าหมาย (ใส่ 1 รายการต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การกำหนดรูปแบบปฏิสัมพันธ์",
            "content": "Release emotions: กดแสดงความรู้สึก\n\nRetweet: กดรีทวีตโพสต์\n\nBookmark: กดบันทึกโพสต์เก็บไว้\n\nClick link: กดคลิกลิงก์ที่อยู่ในโพสต์นั้นๆ\n\nComment: พิมพ์ข้อความแสดงความคิดเห็น\n\nในช่องข้อความสามารถใช้ฟอร์แมต {a|b|c} เพื่อให้ระบบสุ่มคำพูดได้ (Spin content)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเสริม",
            "content": "Tag your friends: แท็กเพื่อนในคอมเมนต์\n\nAmount: จำนวนเพื่อนที่จะแท็ก\n\nList of users: รายชื่อเพื่อน\n\nAdd Hashtag: ใส่แฮชแท็กที่ต้องการ\n\nPhoto/Gif: เลือกแนบรูปภาพหรือไฟล์ GIF\n\nImage folder: Folder ที่เก็บรูปภาพ\n\nNumber of photos: จำนวนรูปที่จะใช้\n\nExport the link of the interactive post to a file: ติ๊กเลือกหากต้องการให้ระบบบันทึก Link ของโพสต์ที่มีการปฏิสัมพันธ์แล้วลงในไฟล์ตามที่ระบุ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "12.Interactive Ads on newfeed (โต้ตอบกับโฆษณาตามฟีดข่าว)",
            "content": "",
            "type": "markdown",
            "images": [
              "image624.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Surfing time: กำหนดระยะเวลาในการเลื่อนดู (ไถฟีด)\n\nNumber of ads: กำหนดจำนวนโฆษณาที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์ด้วย\n\nWaiting time: ระยะเวลารอคอยระหว่างการย้ายจากโฆษณาหนึ่งไปอีกโฆษณาหนึ่ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การปฏิสัมพันธ์หลัก",
            "content": "Release emotions: กดแสดงความรู้สึก\n\nBookmark: กดบันทึกโพสต์เก็บไว้\n\nRetweet: กดรีทวีต\n\nClick link: กดที่ลิงก์ในโฆษณาเพื่อเข้าไปดูหน้าเว็บ\n\nComment: พิมพ์ข้อความแสดงความคิดเห็น\n\nวิธีใส่ข้อมูล: ใส่ข้อความ 1 บรรทัดต่อ 1 ข้อความ หรือใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มคำพูด\n\nPhoto/Gif: การตอบกลับด้วยรูปภาพหรือไฟล์ GIF\n\nNormal photo: เลือกโฟลเดอร์รูปภาพจากคอมพิวเตอร์\n\nGifs: เลือกหมวดหมู่ GIF ที่ต้องการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การขยายการเข้าถึง",
            "content": "Tag your friends: แท็กเพื่อนลงในโพสต์\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็กต่อ 1 โพสต์\n\nList of users: ใส่รายชื่อ User ID หรือชื่อเพื่อนที่ต้องการแท็ก (1 บรรทัดต่อ 1 ชื่อ)\n\nAdd Hashtag: เพิ่มแฮชแท็กในกิจกรรม\n\nList of hashtags: ใส่รายการแฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แฮชแท็ก)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การบันทึกข้อมูล",
            "content": "Export the link of the interactive post to a file: หากติ๊กถูก ระบบจะบันทึก \"ลิงก์\" ของโฆษณาที่ระบบได้ไปกดโต้ตอบไว้ในไฟล์ที่กำหนด เพื่อใช้ตรวจสอบย้อนหลัง\n\nFollow\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Follow suggestions (ติดตามผู้ใช่ที่แนะนำ)",
            "content": "Number of follow : จำนวนที่ต้องการติดตาม\n\nWaiting time : ระยะเวลาดีเลย์\n\nReload the list later : โหลดหน้าติดตามที่แนะนำอีกครั้ง\n\n",
            "type": "markdown",
            "images": [
              "image553.png"
            ]
          },
          {
            "title": "2.Follow by keyword (ติดตามด้วยคีย์เวิร์ด)",
            "content": "Number of follow : จำนวนที่ต้องการติดตาม\n\nWaiting time : ระยะเวลาดีเลย์\n\nList of keywords : รายการคีย์เวิร์ด\n\nDo not preview the profile of the found account: หากติ๊กถูกช่องนี้ ระบบจะกดติดตามทันทีที่เจอโดยไม่กดเข้าไปดูหน้าโปรไฟล์ก่อน\n\n",
            "type": "markdown",
            "images": [
              "image534.png"
            ]
          },
          {
            "title": "3.Follow user (ติดตามผู้ใช้ที่ระบุ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image792.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Waiting time: กำหนดระยะเวลาการรอระหว่างการติดตามแต่ละบัญชี\n\nNumber of users: กำหนดจำนวนผู้ใช้ที่ต้องการให้ระบบกดติดตามในรอบนี้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการรายชื่อผู้เป้าหมาย",
            "content": "List of Users to Follow: ช่องว่างขนาดใหญ่สำหรับใส่ Username หรือ Link ของโปรไฟล์ที่ต้องการติดตาม\n\nEnter user (ปุ่มด้านขวา): ใช้สำหรับกดเพื่อนำเข้าข้อมูลรายชื่อผู้ใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการบัญชีซ้ำซ้อน",
            "content": "Accounts following the user do not overlap: ตัวเลือกป้องกันไม่ให้บัญชีไปกดติดตามซ้ำซ้อนกับกลุ่มเป้าหมายเดิม\n\nEnter user (ปุ่มด้านขวา): ปุ่มสำหรับกดเข้าไปกรอกรายชื่อผู้ใช้ เพื่อใช้เป็นฐานข้อมูลในการตรวจสอบความซ้ำซ้อน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตัวเลือกการปรับแต่งการติดตาม",
            "content": "Turn on notifications: กดเปิดกระดิ่งแจ้งเตือนหลังจากกดติดตามทันที\n\nAccess the user's wall via a search tool instead of directly via a link: ให้ระบบพิมพ์ค้นหาชื่อผ่านช่อง Search แทนการเข้าลิงก์ตรง เพื่อจำลองพฤติกรรมให้เหมือนมนุษย์\n\nStop following when the user has a number of followers >=: หยุดติดตามหากบัญชีเป้าหมายมีผู้ติดตามเกินจำนวนที่กำหนด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "พฤติกรรมจำลอง",
            "content": "Lướt trang user trước khi follow: ตั้งค่าให้ระบบ \"ไถหน้าฟีด\" ดูหน้าโปรไฟล์ก่อนจะกดติดตาม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.Follow Back follower (ติดตามกลับผู้ติดตาม)",
            "content": "Number of follow : จำนวนที่ต้องการติดตาม\n\nWaiting time : ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image608.png"
            ]
          },
          {
            "title": "5.Follow user’s followers (ติดตามผู้ติดตามของผู้ใช้ที่ระบุ)",
            "content": "Followers/users : จำนวนที่ติดตาม/ผู้ใช้\n\nNumber of users : จำนวนผู้ใช้\n\nDelay time : ระยะเวลาดีเลย์\n\nList of users : รายการผู้ใช้\n\nDo not use duplicate users: ควรติ๊กถูกช่องนี้ เพื่อป้องกันไม่ให้ระบบไปกดติดตามคนเดิมซ้ำๆ\n\n",
            "type": "markdown",
            "images": [
              "image210.png"
            ]
          },
          {
            "title": "6.Follow Following of users (ติดตามผู้ใช้อื่นที่ผู้ใช้ที่ระบุกำลังติดตาม)",
            "content": "Followers/users : จำนวนที่ติดตาม/ผู้ใช้\n\nNumber of user : จำนวนผู้ใช้\n\nDelay time : ระยะเวลาดีเลย์\n\nList of users : รายการผู้ใช้\n\n",
            "type": "markdown",
            "images": [
              "image798.png"
            ]
          },
          {
            "title": "7.Follow by Hashtag (ติดตามผู้ใช้ด้วยแฮชแท็ก)",
            "content": "Hashtag : แฮชแท็กที่ต้องการติดตาม\n\nNumber of Follow : จำนวนที่ต้องการติดตาม\n\nDelay: ระยะเวลาดีเลย์\n\nOnly Follow green tick : ติดตามเฉพาะบัญชีที่มีการยืนยัน(ติ๊กถูกด้านหลังชื่อ)\n\n",
            "type": "markdown",
            "images": [
              "image162.png"
            ]
          },
          {
            "title": "8.UnFollow (ยกเลิกติดตาม)",
            "content": "Amount : จำนวนที่ติดการยกเลิกติดตาม\n\nWaiting Time : ระยะเวลาดีเลย์\n\nUnFollow option : ตัวเลือกการยกเลิกติดตาม\n\nRandomly who I follow : สุ่มคนที่กำลังติดตาม\n\nRandom people who followed me back : สุ่มคนที่ติดตามกลับ\n\nList of User retained : รายชื่อผู้ใช้ที่ไม่ต้องการยกเลิกติดตาม  (ไม่จำเป็นต้องมี @ หน้าชื่อผู้ใช้)\n\n",
            "type": "markdown",
            "images": [
              "image277.png"
            ]
          },
          {
            "title": "9.UnFollow specific users (เลิกติดตามผู้ใช้ที่ระบุ)",
            "content": "Number of unfollow : จำนวนที่ต้องการเลิกติดตาม\n\nWaiting time : ระยะเวลาดีเลย์\n\nUsername of unfollow : รายชื่อผู้ใช้ที่ต้องการเลิกติดตาม\n\n",
            "type": "markdown",
            "images": [
              "image472.png"
            ]
          },
          {
            "title": "10.Unretweet",
            "content": "Maximum quantity: ระบุจำนวนโพสต์ที่คุณต้องการให้ระบบถอนการรีทวีต\n\nKeyword: ใส่คำที่ต้องการกรอง หากคุณใส่คำลงไป ระบบจะเลือกถอนการรีทวีตเฉพาะโพสต์ที่มีคำนั้นๆ อยู่ (ถ้าเว้นว่างไว้ ระบบจะทำกับทุกโพสต์)\n\nCase insensitive: หากติ๊กถูกหน้าช่องนี้ ระบบจะไม่สนใจว่าคำสำคัญจะเป็นตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่ (เช่น \"Apple\" กับ \"apple\" จะถือเป็นคำเดียวกัน)\n\nCommunities\n\n",
            "type": "markdown",
            "images": [
              "image32.png"
            ]
          },
          {
            "title": "1.Join suggested (เข้าร่วมชุมชนตามคำแนะนำ)",
            "content": "Number of Communities: จำนวนกลุ่มที่ต้องการเข้าร่วม โดยระบบจะสุ่มตัวเลขในช่วงที่กำหนด\n\nWaiting time: ระยะเวลาที่ระบบจะหยุดรอก่อนดำเนินการครั้งถัดไป\n\n",
            "type": "markdown",
            "images": [
              "image69.png"
            ]
          },
          {
            "title": "2.Join specific communities (เข้าร่วมชุมชนเฉพาะกลุ่ม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image760.png"
            ]
          },
          {
            "title": "การตั้งค่าเวลาและจำนวน",
            "content": "Waiting time: กำหนดระยะเวลารอคอยระหว่างการเข้าร่วมแต่ละกลุ่ม\n\nNumber of communities: กำหนดจำนวนกลุ่มทั้งหมดที่ต้องการให้ระบบเข้าร่วมในรอบนี้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รายการลิงก์กลุ่ม",
            "content": "List of community links to join: เป็นพื้นที่สำหรับคัดลอก (Copy) และวาง (Paste) ลิงก์ของกลุ่มที่คุณต้องการเข้าร่วม\n\nหมายเหตุ: ต้องใส่หนึ่งลิงก์ต่อหนึ่งบรรทัด และระบบจะแสดงตัวเลขจำนวนลิงก์ทั้งหมดในวงเล็บด้านบน List of community links to join (0)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การแจ้งเตือน",
            "content": "Turn on notifications: เปิดการแจ้งเตือน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Join communities by keyword (เข้าร่วมชุมชนโดยใช้คำสำคัญ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image670.png"
            ]
          },
          {
            "title": "ส่วนกำหนดจำนวนและเวลา",
            "content": "Quantity: กำหนดว่าต้องการให้ระบบเข้าร่วมกลุ่ม กี่กลุ่ม\n\nWaiting time: กำหนดเวลาพักระหว่างการเข้าแต่ละกลุ่ม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนรายการคีย์เวิร์ด",
            "content": "List of keywords: ใช้สำหรับพิมพ์คำค้นหา (Keywords) ที่คุณต้องการให้ระบบไปค้นหากลุ่ม\n\nวิธีใส่: ควรใส่ 1 คีย์เวิร์ด ต่อ 1 บรรทัด\n\nตัวเลข (0): จะแสดงจำนวนคีย์เวิร์ดที่คุณใส่ลงไปในรายการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.Tweet into specific (ทวีตข้อความเฉพาะเจาะจง)",
            "content": "",
            "type": "markdown",
            "images": [
              "image610.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number of posts: กำหนดจำนวนโพสต์ที่ต้องการ\n\nDelay time: เวลาพักระหว่างการโพสต์แต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการกลุ่มเป้าหมาย",
            "content": "List of group links: ช่องสำหรับใส่ลิงก์กลุ่มที่ต้องการเข้าไปโพสต์\n\nDo not reuse group links: ห้ามนำลิงก์กลุ่มไปใช้ซ้ำ\n\nEnter group link: ปุ่มสำหรับเพิ่มลิงก์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการเนื้อหาข้อความ (Text Content)",
            "content": "เลือกได้ 2 รูปแบบหลัก:\n\nSelf-edited content: เขียนเนื้อหาเอง\n\nContent imported from textbox: ใส่ข้อความในช่อง List of contents\n\nImport content from text file: ดึงข้อความมาจากไฟล์ .txt ในเครื่อง\n\nOptions พิเศษ\n\nDelete Posted Content: สามารถเลือกให้ลบเนื้อหาที่โพสต์แล้ว\n\nContent is only 1 line: เนื้อหาแบบ 1 บรรทัดต่อ 1 ข้อความ\n\nContent has many lines: เนื้อหาแบบทุกบรรทัดคือ 1 ข้อความ\n\nสุ่มไอคอน/ข้อความ (Spin content)\n\nAccounts do not repost each other's content: บัญชีผู้ใช้จะไม่แชร์เนื้อหาของกันและกัน\n\nEnter unique posting content: ป้อนเนื้อหาโพสต์ที่ไม่ซ้ำกัน\n\nCompound content (content | media file path): โพสต์ข้อความพร้อมกับไฟล์สื่อ (รูปภาพหรือวิดีโอ) ที่เจาะจงคู่กัน\n\nContent taken from photo and video titles: ใช้ชื่อรูปภาพและวิดีโอเป็นเนื้อหา\n\nGPT chat content: ใช้ AI (ChatGPT) ในการสร้างเนื้อหาโดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการสื่อ",
            "content": "Image: ติ๊กเพื่อเลือกแนบรูปภาพ\n\nNumber of photos/tweets: กำหนดจำนวนรูปต่อหนึ่งโพสต์\n\nImage folder path: เลือก Folder ที่เก็บรูปภาพในเครื่อง\n\nAdd attached Link: ติ๊กเพื่อแนบลิงก์เว็บไซต์ประกอบโพสต์\n\nNumber of links: จำนวนลิงก์\n\nList of links: รายการลิงก์ (หนึ่งลิงก์ต่อหนึ่งบรรทัด)\n\nGif: เลือกธีมของไฟล์ GIF ที่ต้องการนำมาใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ฟีเจอร์เสริม",
            "content": "Tag your friends: ใส่รายชื่อเพื่อนที่ต้องการแท็กในโพสต์\n\nAmount: จำนวน\n\nList of users: รายชื่อผู้ใช้ (แต่ละชื่อผู้ใช้จะล็อกไว้ 1 บรรทัด)\n\nAdd Hashtag: ใส่รายการ Hashtag ที่ต้องการให้ติดไปกับโพสต์\n\nNumber of hashtags/tweet: จำนวนแฮชแท็กต่อทวีต\n\nList of hashtags: รายชื่อแฮชแท็ก (แต่ละแฮชแท็กจะล็อก 1 บรรทัด)\n\nPin recently posted article: ปักหมุดโพสต์ล่าสุดทันทีหลังโพสต์เสร็จ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การบันทึกและกำหนดเวลา",
            "content": "Save the Tweet link just posted and export to a file: บันทึก URL ของโพสต์ที่สำเร็จแล้วลงในไฟล์ .txt เพื่อเก็บไว้เป็นหลักฐานหรือตรวจสอบภายหลัง\n\nSee you soon to post tweets: ตารางกำหนดเวลาล่วงหน้า (Scheduling) สำหรับการเริ่มทำงานอัตโนมัติตามวันและเวลาที่ระบุ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Surf specific communities (การโต้ตอบกับชุมชนที่ระบุ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image654.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Group Number: จำนวนกลุ่มที่จะเข้าไปโต้ตอบ\n\nPosts/Group: จำนวนโพสต์ที่จะเข้าไปกดโต้ตอบในแต่ละกลุ่ม\n\nWaiting time: ระยะเวลารอระหว่างการโต้ตอบในแต่ละโพสต์\n\nTime interval between actions: เวลาระยะห่างระหว่างการจบกลุ่มหนึ่งไปยังอีกกลุ่มหนึ่ง\n\nEnter list of Groups: ช่องสำหรับใส่ Link กลุ่ม ที่ต้องการให้โปรแกรมเข้าไปทำงาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การโต้ตอบหลัก",
            "content": "Release emotions: กดแสดงความรู้สึก\n\nRetweet: กดรีทวีตโพสต์นั้น\n\nComment: พิมพ์ข้อความแสดงความคิดเห็น\n\nList Comments: ใส่ข้อความที่ต้องการ (1 บรรทัดต่อ 1 ข้อความ)\n\nรองรับระบบ Spin content เช่น {ดีมาก|สวยมาก|สุดยอด} เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nImage: เลือกส่งรูปภาพประกอบในคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพ\n\nNumber of photos: จำนวนรูปที่จะใช้\n\nExport the link of the interactive post to a file: เลือกบันทึก ลิงก์ ของโพสต์ที่ได้ไปโต้ตอบไว้ในไฟล์ที่กำหนด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การเพิ่มลูกเล่นเสริม",
            "content": "Tag your friends: แท็กเพื่อนในคอมเมนต์\n\nAmount: จำนวนที่จะแท็กต่อโพสต์\n\nList of users: รายชื่อ Username (แต่ละชื่อผู้ใช้จะล็อกไว้ 1 บรรทัด)\n\nAdd Hashtag: ใส่แฮชแท็กที่ต้องการ\n\nList of hashtags: รายการ Hashtag ที่ต้องการ (1 รายการต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "พฤติกรรมการอ่านและโฆษณา (Browsing & Ads)",
            "content": "Browse comments: ตั้งค่าการเลื่อนอ่านคอมเมนต์\n\nScrolls: จำนวนครั้งที่จะเลื่อนหน้าจอลง\n\nDelay: ระยะเวลาที่ค้างไว้เพื่ออ่าน\n\nSurf the ads below in the comments: การคลิกหรือดูโฆษณาที่อยู่ใต้คอมเมนต์\n\nNumber of ads: จำนวนโฆษณา\n\nTime viewing ads: เวลาที่ใช้ในการดูแต่ละตัว\n\nDelay : เวลาพักรอระหว่างแต่ละการดู\n\nOther Fuctions\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. Breaks (หยุดพักการทำงาน)",
            "content": "Waiting time : ระยะเวลาหยุดพัก\n\n",
            "type": "markdown",
            "images": [
              "image687.png"
            ]
          },
          {
            "title": "2.Read the announcement (อ่านแจ้งเตือน)",
            "content": "Amount : จำนวนแจ้งเตือน\n\nWaiting time : ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image487.png"
            ]
          },
          {
            "title": "3.Post a Tweet (โพสต์ทวิต)",
            "content": "",
            "type": "markdown",
            "images": [
              "image522.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number of posts: กำหนดจำนวนโพสต์ที่ต้องการ\n\nDelay time: ระยะเวลาเว้นช่วงระหว่างแต่ละโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนจัดการเนื้อหาข้อความ",
            "content": "Self-edited content: พิมพ์เนื้อหาด้วยตัวเอง\n\nGPT chat content: ใช้ AI (ChatGPT) ในการช่วยเขียนเนื้อหา\n\nContent imported from textbox: ใส่ข้อความลงในช่อง List of contents\n\nOption\n\nDelete Posted Content: ลบเนื้อหาหลังจากโพสต์เสร็จ\n\nContent is only 1 line: 1 บรระทัดต่อ 1 โพสต์\n\nContent has many lines: ทุกบรรทัดคือ 1 โพสต์\n\nSpin content: รองรับการใช้รูปแบบ {a|b|c} เพื่อสุ่มคำพูด\n\nImport content from text file: ดึงข้อความจากไฟล์ .txt ในเครื่อง\n\nAccounts do not repost each other's content: ตั้งค่าไม่ให้แต่ละบัญชีโพสต์ซ้ำกัน\n\nEnter unique posting content: ป้อนเนื้อหาโพสต์ที่ไม่ซ้ำกัน\n\nCompound content (content | media file path): โพสต์ข้อความพร้อมกับไฟล์สื่อ (รูปภาพหรือวิดีโอ) ที่เจาะจงคู่กัน\n\nContent taken from photo and video titles: นำชื่อไฟล์ภาพหรือวิดีโอมาเป็นแคปชั่นโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนจัดการสื่อ",
            "content": "Image: ติ๊กถูกเพื่อเปิดใช้งานการลงรูป\n\nNumber of photos/tweets: ระบุจำนวนภาพต่อหนึ่งโพสต์\n\nImage folder path: เลือกโฟลเดอร์ที่เก็บรูปภาพในคอมพิวเตอร์\n\nDelete used photos: สั่งให้ลบรูปทิ้งทันทีเมื่อโพสต์เสร็จ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนการโต้ตอบและลิงก์",
            "content": "Tag your friends: ติ๊กเพื่อแท็กเพื่อน\n\nAmount: จำนวนเพื่อนที่ต้องการแท็ก\n\nList of users: ใส่รายชื่อ Usernames ในช่อง (แต่ละชื่อผู้ใช้จะล็อกไว้ 1 บรรทัด)\n\nAdd Hashtag: ติ๊กเพื่อใส่แฮชแท็ก\n\nNumber of hashtags/tweet: ระบุจำนวน\n\nList of hashtags: รายการ Hashtag ที่ต้องการ (แต่ละแฮชแท็กจะล็อก 1 บรรทัด)\n\nAdd attached Link: สำหรับใส่ URL ลิงก์เว็บไซต์ที่ต้องการให้ปรากฏในโพสต์\n\nNumber of links: จำนวนลิงก์\n\nList of links: รายการลิงก์\n\nGif: เลือกหมวดหมู่ GIF เพื่อแนบไปกับโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การบันทึกข้อมูล",
            "content": "Save the Tweet link just posted and export to a file: บันทึกลิงก์ที่โพสต์เสร็จแล้วลงในไฟล์ .txt\n\nRetrieve the link of the newly posted video and export to a file: ดึงลิงก์วิดีโอที่เพิ่งโพสต์เสร็จบันทึกลงไฟล์ .txt\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนการตั้งเวลาและเสริม",
            "content": "See you soon to post tweets (Schedule): ตั้งเวลาโพสต์ล่วงหน้า ระบุ วัน/เดือน/ปี และ เวลาที่ต้องการ\n\nGiờ (ชั่วโมง): เลือกชั่วโมงที่ต้องการให้เริ่มโพสต์\n\nPhút (นาที): เลือกนาทีที่ต้องการให้เริ่มโพสต์\n\nRandom: สุ่มเวลา\n\nNgày (วันที่): เลือกวันที่ต้องการโพสต์\n\nTháng (เดือน): เลือกเดือนที่ต้องการ\n\nNăm (ปี): เลือกปี ค.ศ.\n\nPin recently posted article: สั่งให้ปักหมุดโพสต์ล่าสุดทันที\n\nAdd random strings: สุ่มชุดตัวอักษรต่อท้ายเนื้อหา (Chain length) เพื่อป้องกันระบบตรวจจับว่าเป็นสแปมจากข้อความที่เหมือนกันเป๊ะๆ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.Quote tweet (แชร์ทวิต)",
            "content": "",
            "type": "markdown",
            "images": [
              "image22.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Link tweet: ช่องสำหรับวาง URL ของทวีตต้นทางที่คุณต้องการจะไปทำการโควต\n\nPost viewing time: ตั้งค่าเวลาที่จะให้ระบบ \"หยุดค้าง\" ดูทวีตก่อนเริ่มทำการโควต\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "เนื้อหาในการโควต",
            "content": "Quoted content: ช่องสำหรับใส่ข้อความที่จะใช้โควตทวีต สามารถใส่ได้หลายข้อความ\n\nComments do not match: หากติ๊กถูก ระบบจะสุ่มดึงข้อความมาใช้โดยไม่เรียงลำดับกับทวีตต้นทาง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การเพิ่มสื่อและบันทึกผล",
            "content": "Image: หากต้องการให้การโควตมีรูปภาพประกอบด้วย\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: กำหนดจำนวนรูปภาพที่จะดึงมาใช้ต่อ 1 ทวีต\n\nExport quote link to file: หากต้องการเก็บ Log หรือลิงก์ที่โควตสำเร็จแล้วไว้ใช้งานต่อ\n\nFile path: เลือกที่อยู่ไฟล์ (.txt) ที่ต้องการบันทึกผลลัพธ์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การปฏิสัมพันธ์เพิ่มเติม",
            "content": "Tag your friends: ติ๊กเพื่อแท็กชื่อผู้ใช้งานอื่นในข้อความโควต\n\nAmount: กำหนดจำนวนคนที่จะแท็ก\n\nList of users: รายชื่อ @username ที่ต้องการให้ระบบสุ่มไปแท็ก (1 ชื่อต่อ 1 บรรทัด)\n\nAdd Hashtag: ติ๊กเพื่อเพิ่มแฮชแท็กท้ายข้อความ\n\nList of hashtags: รายชื่อ #Hashtag ที่ต้องการใช้ (1 แท็กต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Update information (การกำหนดค่าการเข้าสู่ระบบเพิ่มเติม)",
            "content": "eMail : อีเมล\n\nUsername : ชื่อผู้ใช้\n\nPhone number : เบอร์โทรศัพท์\n\nNation : ประเทศ\n\nBackup code : รหัสสำรอง\n\nAnalytics : ข้อมูลการวิเคราะห์\n\n",
            "type": "markdown",
            "images": [
              "image502.png"
            ]
          },
          {
            "title": "6.Get list follower/following (รับรายชื่อผู้ติดตาม/กำลังติดตาม)",
            "content": "List of user : รายชื่อผู้ใช้\n\nUser Type : รูปแบบผู้ใช้ที่ต้องการ\n\nFollower : ผู้ติดตาม\n\nFollowing : กำลังติดตาม\n\nFolder path : ที่อยู่โฟลเดอร์\n\nLimit number of user : จำนวนสูงสุดในการรับรายชื่อผู้ใช้\n\n",
            "type": "markdown",
            "images": [
              "image567.png"
            ]
          },
          {
            "title": "7.Get list user like/retweet (รับรายชื่อคนที่กดไลค์/ติดตาม)",
            "content": "Link Tweet: ช่องสำหรับใส่ URL หรือลิงก์ของโพสต์ (Tweet)\n\nUser Like: ดึงรายชื่อคนที่มากด Like ทวีตนั้น\n\nUser Retweet: ดึงรายชื่อคนที่กด Retweet ทวีตนั้น\n\nLink comment: ดึงรายชื่อคนที่เข้ามาตอบคอมเมนต์ใต้ทวีต\n\nQuote Tweets: ดึงรายชื่อคนที่ทำการ Quote Tweet (รีทวีตแบบใส่ข้อความ)\n\nĐường dẫn folder hoặc file(.txt): ที่อยู่ที่คุณต้องการบันทึกข้อมูลผลลัพธ์ลงในเครื่องคอมพิวเตอร์ (รองรับไฟล์นามสกุล .txt)\n\nLimit number of users: จำนวนผู้ใช้งานสูงสุดที่ต้องการดึงต่อหนึ่งทวีต\n\n",
            "type": "markdown",
            "images": [
              "image141.png"
            ]
          },
          {
            "title": "8.Retrieve tweet and retweet links (รับลิงก์ทวีตและรีทวีต)",
            "content": "List of usernames : ชื่อผู้ใช้\n\nThe accounts use different users : บัญชีผู้ใช้ที่แตกต่างกัน\n\nNumber of users/accounts : จำนวนผู้ใช้/บัญชี\n\noldest time : บัญชีใช้ผู้ใช้ที่แตกต่างกัน เวลาที่เก่าที่สุด\n\nNumber of links : จำนวนลิงก์\n\nLink type : ประเภทลิงค์\n\nTweet : ทวิต\n\nRetweet : รีทวิต\n\nContent options : ตัวเลือกเนื้อหา\n\nVideo : วิดีโอ\n\nImage : รูปภาพ\n\nFolder path to save : ที่อยู่โฟลเดอร์ที่จะบันทึก\n\n",
            "type": "markdown",
            "images": [
              "image167.png"
            ]
          },
          {
            "title": "9.Change country and language (เปลี่ยนประเทศและภาษา)",
            "content": "Nation : ประเทศ\n\nLanguage : ภาษา\n\n",
            "type": "markdown",
            "images": [
              "image249.png"
            ]
          },
          {
            "title": "10.Delete all old tweets (ลบทวิตเก่าทั้งหมด)",
            "content": "",
            "type": "markdown",
            "images": [
              "image479.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Spacing between each tweet deletion : กำหนดเวลาพักระหว่างการลบทวีตแต่ละข้อความ\n\nMaximum quantity: จำนวนทวีตที่ต้องการลบ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตัวเลือกเพิ่มเติม",
            "content": "Delete all other tweet comments: ระบบจะลบการตอบกลับ (Comments) ที่อยู่ในทวีตนั้น ๆ ด้วย\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิธีการลบทวีต",
            "content": "ตัวเลือกที่ 1: Delete via search page (ลบผ่านหน้าการค้นหา)\n\nระบบจะลบทวีตโดยการค้นหาผ่านช่อง Search\n\nKeyword : คุณสามารถระบุคำเฉพาะที่ต้องการลบได้ (เช่น ลบเฉพาะทวีตที่มีคำว่า \"ประกาศ\") หรือหากต้องการลบทวีตทั่วไปให้ เว้นว่างไว้\n\nตัวเลือกที่ 2: Delete via account personal page (ลบผ่านหน้าโปรไฟล์ส่วนตัว)\n\nระบบจะลบทวีตโดยตรงจากหน้า Timeline ของคุณ\n\nหมายเหตุสำคัญ: ฟังก์ชันนี้จะทำงานได้ถูกต้องก็ต่อเมื่อ ตั้งค่าภาษาหลักของบัญชีเป็นภาษาอังกฤษ (English) เท่านั้น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Scan comment content (สแกนเนื้อหาคอมเมนต์)",
            "content": "Link Tweet : ลิงก์ทวิต\n\nUser Type : รูปแบบผู้ใช้\n\nCopy all comment content : คัดลอกเนื้อหาความคิดเห็นทั้งหมด\n\nCopy all comment content except tag friends : คัดลอกเนื้อหาความคิดเห็นทั้งหมด ยกเว้นแท็กเพื่อน\n\nCopy each wallet : คัดลอกกระเป๋าเงิน\n\nFolder path : ที่อยู่โฟลเดอร์ที่จะบันทึก\n\nComment limt : จำนวนความคิดเห็นสูงสุด\n\n",
            "type": "markdown",
            "images": [
              "image20.png"
            ]
          },
          {
            "title": "12.Filter top accounts (กรองบัญชียอดนิยม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image257.png"
            ]
          },
          {
            "title": "การตั้งค่าแหล่งข้อมูลและเงื่อนไข",
            "content": "List of users to filter:\n\nปุ่ม Open folder: คลิกเพื่อเลือกไฟล์หรือโฟลเดอร์ที่มีรายชื่อผู้ใช้งานที่ต้องการนำมากรอง\n\nช่องจำนวน (Users): แสดงจำนวนรายชื่อผู้ใช้งานทั้งหมดที่ถูกโหลดเข้ามา\n\nNumber of users per account:\n\nช่องสำหรับกรอกตัวเลขเพื่อกำหนดจำนวนผู้ใช้งานต่อหนึ่งบัญชีที่ต้องการกรองออกมา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการผลลัพธ์",
            "content": "Output file path: ช่องแสดงที่อยู่ไฟล์ (Path) ว่าจะให้บันทึกผลลัพธ์ไว้ที่ไหนในเครื่องคอมพิวเตอร์\n\nปุ่ม Open folder: คลิกเพื่อเลือกโฟลเดอร์ปลายทางที่ต้องการบันทึกไฟล์ผลลัพธ์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "13.Turn on content display 18+ (เปิดการแสดงเนื้อหา 18+)",
            "content": "Option: ตัวเลือก\n\nShow offensive content : แสดงเนื้อหาที่ไม่เหมาะสม\n\nMark my tweets with offensive content : ทำเครื่องหมายทวิตของฉันด้วยเนื้อหาที่ไม่เหมาะสม\n\nOperation: การดำเนินการ\n\nTurn on : เปิด\n\nTurn off: ปิด\n\n",
            "type": "markdown",
            "images": [
              "image149.png"
            ]
          },
          {
            "title": "14.Delete old device login (ลบการเข้าสู่ระบบอุปกรณ์เก่า)",
            "content": "",
            "type": "markdown",
            "images": [
              "image255.png"
            ]
          },
          {
            "title": "15.Get list of users by list of Name (รับรายชื่อผู้ใช้ตามรายการชื่อ)",
            "content": "List of names: การจัดการรายชื่อ\n\nNumber of names / accounts: ช่องสำหรับระบุจำนวนชื่อต่อบัญชีที่ต้องการให้ระบบประมวลผล\n\nOutput file path: ช่องแสดงเส้นทาง (Path) ของไฟล์ที่จะถูกบันทึก\n\nOpen folder: คลิกเพื่อเลือกสถานที่จัดเก็บไฟล์ผลลัพธ์ในคอมพิวเตอร์ของคุณ\n\nChange Info\n\n",
            "type": "markdown",
            "images": [
              "image100.png"
            ]
          },
          {
            "title": "1.Change username(เปลี่ยนชื่อผู้ใช้)",
            "content": "",
            "type": "markdown",
            "images": [
              "image716.png"
            ]
          },
          {
            "title": "การตั้งค่าตัวเลือกรูปแบบชื่อผู้ใช้",
            "content": "Match sequence: กำหนดรูปแบบตัวอักษรหรือตัวเลขที่ต้องการให้โปรแกรมสุ่มออกมาตามเงื่อนไขที่ระบุ\n\nOpen: คลิกเพื่อเปิดไฟล์หรือใส่รายการชื่อผู้ใช้ที่เตรียมไว้\n\nGet random from the list: สุ่มเลือกชื่อจากรายการที่คุณใส่ไว้\n\nTaken in order from top to bottom: เลือกชื่อเรียงตามลำดับจากบนลงล่าง\n\nDelete used username: เพื่อลบชื่อที่ถูกใช้ไปแล้วออกจากรายการ เพื่อไม่ให้เกิดการใช้ชื่อซ้ำ\n\nUsername by name: ตั้งชื่อตามชื่อหลัก\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเพิ่มเติม",
            "content": "Length of random string at the end of username: กำหนดความยาวของตัวอักษร/ตัวเลขที่จะให้สุ่มต่อท้ายชื่อ\n\nUsername is all lowercase: ให้ชื่อผู้ใช้ทั้งหมดเป็นตัวพิมพ์เล็กเท่านั้น\n\nCheck the username you just changed: ให้ระบบตรวจสอบความถูกต้องของชื่อหลังจากเปลี่ยนเสร็จทันที\n\nข้อควรระวัง: คุณควรสร้างโปรไฟล์ (Profile) ให้เรียบร้อยก่อนที่จะเริ่มรันฟังก์ชันนี้ เพื่อให้ระบบทำงานได้อย่างถูกต้อง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Change password (เปลี่ยนรหัส)",
            "content": "",
            "type": "markdown",
            "images": [
              "image79.png"
            ]
          },
          {
            "title": "การเลือกรูปแบบรหัสผ่าน",
            "content": "Self-setup: เลือกหัวข้อนี้หากต้องการใช้รหัสผ่านชุดเดียวกันทั้งหมด\n\nNew password: พิมพ์รหัสผ่านใหม่ที่ต้องการลงในช่องว่าง\n\nRandom password: เลือกหัวข้อนี้หากต้องการให้ระบบสุ่มรหัสผ่านใหม่ให้แต่ละบัญชีไม่ซ้ำกัน\n\nNew password length: กำหนดความยาวของรหัสผ่าน โดยระบุจำนวนตัวอักษร \"จาก (from)... ถึง (to)...\"\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตรวจสอบและคำแนะนำ",
            "content": "Recheck password after changing: หากติ๊กถูกที่ช่องนี้ ระบบจะทำการตรวจสอบอีกครั้งหลังจากเปลี่ยนรหัสผ่านเสร็จสิ้น เพื่อยืนยันว่ารหัสใหม่ใช้งานได้จริง\n\nNote: \"ควรทดสอบรันกับบัญชีจำนวนน้อยๆ ก่อนสัก 2-3 บัญชี เพื่อให้แน่ใจว่าการตั้งค่าถูกต้องและปลอดภัย\"\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Change Avatar (เปลี่ยนรูปภาพโปรไฟล์)",
            "content": "Photo folder : ที่อยู่โฟลเดอร์รูปภาพ\n\nDelete used photos : ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image680.png"
            ]
          },
          {
            "title": "4.Change background image (เปลี่ยนรูปภาพหน้าปก)",
            "content": "Image folder : ที่อยู่โฟลเดอร์รูปภาพ\n\nDelete used photos : ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image283.png"
            ]
          },
          {
            "title": "5. Update phone (อัปเดตเบอร์มือถือ)",
            "content": "Delete phone number : ลบหมายเลขโทรศัพท์\n\nDelete phone number data in data : ลบข้อมูลหมายเลขโทรศัพท์ในข้อมูล\n\n",
            "type": "markdown",
            "images": [
              "image123.png"
            ]
          },
          {
            "title": "6.Change Name,Bio, Wed (เปลี่ยนชื่อ ประวัติ และสถานที่)",
            "content": "",
            "type": "markdown",
            "images": [
              "image222.png"
            ]
          },
          {
            "title": "การเปลี่ยนชื่อ (Change name)",
            "content": "Random name combination: สุ่มรวมชื่อและนามสกุล\n\nSurname: กดปุ่ม \"Open\" เพื่อเลือกไฟล์รายนามสกุล\n\nName: กดปุ่ม \"Open\" เพื่อเลือกไฟล์รายชื่อ\n\nFull name: ใช้ชื่อ-นามสกุลแบบสำเร็จรูป\n\nPath file: กด \"Open\" เพื่อเลือกไฟล์ที่มีรายชื่อเต็มเตรียมไว้แล้ว\n\nDelete used name: (ติ๊กถูก) เพื่อลบชื่อที่ถูกใช้ไปแล้วออกจากรายการ ป้องกันการใช้ซ้ำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การเปลี่ยนประวัติส่วนตัว (Change Bio)",
            "content": "Bio Content: ช่องสำหรับใส่ข้อความที่จะนำไปใช้เป็น Bio (ประวัติย่อ)\n\nNội dung nhiều dòng: หากติ๊กช่องนี้ จะเป็นการอนุญาตให้ใช้เนื้อหาแบบหลายบรรทัดต่อหนึ่งโปรไฟล์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตำแหน่งที่ตั้งและเว็บไซต์",
            "content": "Change position (ตำแหน่งที่ตั้ง):\n\nLocation list: ใส่รายการสถานที่ที่ต้องการให้แสดงในโปรไฟล์ (ใส่ 1 รายการต่อ 1 บรรทัด)\n\nWeb Update (อัปเดตเว็บไซต์):\n\nWebsite list: ใส่ URL ของเว็บไซต์ที่ต้องการ (ใส่ 1 รายการต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.Generate 2FA code (สร้างรหัส 2FA)",
            "content": "Turn on 2fa : เปิด 2fa\n\nTurn off 2fa : ปิด 2fa\n\n",
            "type": "markdown",
            "images": [
              "image237.png"
            ]
          },
          {
            "title": "ข้อควรระวังและหมายเหตุ (Important Notes)",
            "content": "การสร้างโปรไฟล์: ควรสร้างโปรไฟล์ให้เรียบร้อยก่อนรันฟังก์ชันนี้เพื่อความถูกต้อง\n\nการจัดเรียงหน้าต่าง Chrome: หน้าต่าง Chrome จะต้องถูกจัดเรียงในรูปแบบ 5x1, 4x1 หรือ 3x1 ตามที่ระบบกำหนด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.Update Date of Birth (วันเดือนปีเกิดสาธารณะ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image485.png"
            ]
          },
          {
            "title": "การตั้งค่าวันเกิด",
            "content": "Day: เลือกวันที่จากรายการ\n\nMonth: เลือกเดือนจากรายการ\n\nYear: เลือกปี ค.ศ. จากรายการ\n\nส่วนนี้ใช้สำหรับกำหนด วัน เดือน และ ปี ที่ต้องการให้อัปเดท โดยแต่ละช่องจะมีตัวเลือก \"Random\" หากต้องการให้ระบบสุ่มค่าแทนการระบุเจาะจง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแสดงผล",
            "content": "Customize display: 1gลือกระดับความเป็นส่วนตัวของข้อมูลวันเกิด\n\nPublic: สาธารณะ\n\nYour Followers: ผู้ติดตามของคุณ\n\nPeople You Follow: บุคคลที่คุณติดตาม\n\nYou Follow Each Other: คุณติดตามกันและกัน\n\nOnly You: เพียงคุณเท่านั้น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9.Update Email (อัปเดตอีเมล)",
            "content": "",
            "type": "markdown",
            "images": [
              "image168.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Email Type: เลือกประเภทของอีเมลที่ต้องการใช้งาน\n\nHotmail\n\nMail.tm\n\nUnlimitmail\n\nbumba.sb\n\nTinyhost\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การนำเข้าข้อมูลอีเมล",
            "content": "Import email list: ปุ่มสำหรับเลือกไฟล์รายชื่ออีเมล\n\nปุ่ม Open folder: คลิกเพื่อเลือกไฟล์ .txt หรือไฟล์รายการอีเมลจากคอมพิวเตอร์ของคุณ\n\nรูปแบบข้อมูล (Format): หากไม่ใช้ API ข้อมูลในไฟล์ต้องเรียงในรูปแบบ อีเมล|รหัสผ่าน (mail|pass)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าขั้นสูงผ่าน API",
            "content": "Using Api Dong Van to read hotmail: หากเลือกช่องนี้ ระบบจะใช้วิธีการอ่านข้อมูลผ่าน Dong Van API ซึ่งมีความเสถียรมากกว่าการล็อกอินปกติ\n\nรูปแบบข้อมูลที่ต้องใช้: หากเลือกข้อนี้ รูปแบบในไฟล์รายการอีเมลต้องเปลี่ยนเป็น:\n\nอีเมล|รหัสผ่าน|refresh_token|client_id\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตรวจสอบและการยืนยัน",
            "content": "Check your email again: ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบทำการตรวจสอบความถูกต้องของอีเมลซ้ำอีกครั้งก่อนเริ่มดำเนินการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Account settings (การตั้งค่าบัญชี)",
            "content": "",
            "type": "markdown",
            "images": [
              "image313.png"
            ]
          },
          {
            "title": "การตั้งค่าความเป็นส่วนตัวและเนื้อหา",
            "content": "Do not hide sensitive content: หากเลือกข้อนี้ ระบบจะไม่ซ่อนเนื้อหาที่ล่อแหลมหรือละเอียดอ่อน\n\nDo not remove blocked and muted accounts: หากเลือกข้อนี้ ระบบจะไม่ลบบัญชีที่คุณเคยบล็อกหรือปิดการแจ้งเตือนไว้\n\nAllow message requests from everyone: เปิดให้ใครก็ได้สามารถส่งคำขอข้อความมาหาคุณได้\n\nProtect your posts: ตั้งค่าการป้องกันโพสต์ของคุณ (เลือกระหว่าง On เพื่อเปิด หรือ Off เพื่อปิด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ความปลอดภัยและประเภทบัญชี",
            "content": "Create chat passcode: หากเลือกข้อนี้ คุณสามารถตั้งรหัสผ่านสำหรับการเข้าแชทได้ (ระบุรหัสในช่องว่างด้านข้าง)\n\nAccount Labeling: การติดป้ายกำกับประเภทบัญชี (เลือกได้เพียงอย่างเดียว):\n\nDo not have: ไม่ระบุป้ายกำกับ\n\nParody account: บัญชีล้อเลียน\n\nComment account: บัญชีสำหรับคอมเมนต์\n\nFan accounts: บัญชีแฟนคลับ\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_vz3h6",
        "name": "4.วิธีดาวน์โหลดและติดตั้งโปรแกรม Max Twitter Pro",
        "sections": [
          {
            "title": "4.วิธีดาวน์โหลดและติดตั้งโปรแกรม Max Twitter Pro",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "เข้าไปยังเว็บไซต์ Minsoft https://app.minsoftthailand.com/\n\nล็อคอินเข้าใช้งาน\n\nไปยังหน้าการจัดการซอฟต์แวร์\n\n",
            "type": "markdown",
            "images": [
              "image4.png",
              "image570.jpg",
              "image4.png"
            ]
          },
          {
            "title": "2. จากนั้นให้คลิกขวาที่คำว่าดาวน์โหลด และกด Copy link address (คัดลอกที่อยู่ลิ้งก์) ไปวางในแท็บใหม่ กด Enter รอจนกว่าจะดาวน์โหลดสำเร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image741.jpg"
            ]
          },
          {
            "title": "3. หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxTwitterPro.zip ที่โหลดมา จากนั้นสามารถเลือกได้ว่าจะแตกไฟล์แบบไหน",
            "content": "1.Extract files - สามารถเลือกได้ว่าต้องการให้ไปแตกไฟล์ลงที่ไหน\n\n2.Extract to \"MaxTwitterPro\\\" เลือกให้แตกไฟล์ลงที่ Download\n\n",
            "type": "markdown",
            "images": [
              "image4.png"
            ]
          },
          {
            "title": "4.ทำการเปิด AutoUpdate เพื่ออัปเดตโปรแกรม",
            "content": "",
            "type": "markdown",
            "images": [
              "image394.png"
            ]
          },
          {
            "title": "5. หลังจากอัปเดตเสร็จจะมีโปรแกรมปรากฏขึ้น ให้เข้าใช้งานโปรแกรม ทำการเข้าสู่ระบบให้เรียบร้อย(*ให้เข้าใช้งานจากเวอร์ชันล่าสุด*)",
            "content": "",
            "type": "markdown",
            "images": [
              "image4.png"
            ]
          },
          {
            "title": "6.ตั้งค่าภาษา",
            "content": "",
            "type": "markdown",
            "images": [
              "image341.png"
            ]
          },
          {
            "title": "7.เลือก Browser ไปที่ General configs =>Bowser Option เลือก Chrome",
            "content": "เป็นอันเสร็จขั้นตอนการติดตั้ง\n\n",
            "type": "markdown",
            "images": [
              "image753.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_8niea",
        "name": "5.วิธีการเพิ่ม proxy โปรแกรม Maxtwitter",
        "sections": [
          {
            "title": "5.วิธีการเพิ่ม proxy โปรแกรม Maxtwitter",
            "content": "1.เลือกบัญชีที่ต้องการ ==> คลิกขวา ==> Enter proxy\n\n2.นำ proxy มาวางในช่อง List Proxys ==> เลือก Type ของ Proxy ในช่อง Proxy Type ==> เลือกจำนวน บัญชี ต่อ Proxy หากกำหนด 2 หมายถึง ใช้ 2 บัญชี ต่อ 1 proxy ในช่อง Accounts/Proxy ==> ในช่อง Option import Proxy ตัวเลือกการนำเข้า เลือกระหว่าง Sequence(แบบเจาะจง) Random(แบบสุ่ม) ==> หากต้องการให้ข้ามบัญชีที่มี Proxy อยู่เเล้วให้เลือกในช่อง Skip account that already have Proxy ==> จากนั้นกด Confirm\n\n3.ไปที่ general configs ==> Chang IP configss ==> Use Proxy (assigned per account)\n\nจากนั้นกด save เป็นอันเสร็จขั้นตอนการนำเข้า proxy โปรแกรม Maxtwitter\n\n",
            "type": "markdown",
            "images": [
              "image404.png",
              "image712.png",
              "image791.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_8li9s",
        "name": "คำถามและปัญหาที่พบบ่อย MaxTwitter",
        "sections": [
          {
            "title": "คำถามและปัญหาที่พบบ่อย MaxTwitter",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_wqf5i",
            "name": "โพสต์รูปภาพไม่ได้แก้ไขอย่างไร",
            "sections": [
              {
                "title": "โพสต์รูปภาพไม่ได้แก้ไขอย่างไร",
                "content": "1.ไปที่ General configs ==> เลือก Show image when opening browser\n\nจากนั้นกด Save แล้วรันโปรแกรมอีกรอบ\n\n2.หากตั้งค่าตามขั้นตอนแรกแล้วยังไม่สามารถโพสต์ได้\n\nลบอิโมจิที่อยู่ในช่องข้อความออก\n\nเช็คโฟล์เดอร์รูปภาพว่ามีรูปภาพอยู่หรือไม่\n\n",
                "type": "markdown",
                "images": [
                  "image547.png"
                ]
              }
            ]
          },
          {
            "id": "cat_4p491",
            "name": "รันโปรแกรมแล้วที่ Description แจ้งว่า An unkown error!",
            "sections": [
              {
                "title": "รันโปรแกรมแล้วที่ Description แจ้งว่า An unkown error!",
                "content": "1.ไปที่ General configs ==> เลือก Chrome\n\nจากนั้นกด Save แล้วรันโปรแกรมอีกรอบ\n\n",
                "type": "markdown",
                "images": [
                  "image521.png"
                ]
              },
              {
                "title": "โปรแกรมโพสต์คลิป Reels MaxReup",
                "content": "โพสต์คลิป Reels อัตโนมัติ\n\nแบบสุ่มวิดีโอ\n\nแบบอิมพอตวิดีโอในแต่ละเพจ\n\nสร้างแคปชันได้ตามใจชอบ\n\nใส่เสียงเพลง\n\nดาวน์โหลดคลิปตามแพลตฟอร์มได้อย่างรวดเร็ว\n\nfacebook\n\nTiktok\n\nInstagram\n\nTwitter\n\nYoutube\n\nDouyin\n\nKuaishou\n\nPinterest\n\nตัดต่อวิดีโอในโปรแกรมได้อย่างรวดเร็ว\n\nเพิ่มแบ็คกราว\n\nเพิ่มข้อความตัวอักษร\n\nเพิ่มรูปภาพหรือโลโก้แบรนด์เนอร์\n\nเพิ่มเสียงเพลงหรือเสียงดนตรี\n\nสามารถใช้ Cookie หรือใช้ Proxy ได้ นำบัญชีเข้าโปรแกรมได้แบบไม่จำกัด ค่าบริการเพียง\n\nเดือนละ 1700 บาท เท่านั้น\n\n",
                "type": "markdown",
                "images": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maxreupfacebook",
    "name": "MaxReupFacebook",
    "categories": [
      {
        "id": "cat_ndbrp",
        "name": "1.Max Reup วิธีการดาวน์โหลดติดตั้ง",
        "sections": [
          {
            "title": "1.Max Reup วิธีการดาวน์โหลดติดตั้ง",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "เข้าไปยังเว็บไซต์ Minsoft https://app.minsoftthailand.com/\n\nล็อคอินเข้าใช้งาน\n\nไปยังหน้าการจัดการซอร์ฟแวร์\n\n",
            "type": "markdown",
            "images": [
              "image4.png",
              "image317.jpg",
              "image122.jpg"
            ]
          },
          {
            "title": "2. จากนั้นให้คลิกขวาที่คำว่าดาวน์โหลด และกด Copy link address (คัดลอกที่อยู่ลิ้งก์) ไปวางในแท็บใหม่",
            "content": "",
            "type": "markdown",
            "images": [
              "image188.jpg"
            ]
          },
          {
            "title": "3. กด Enter รอจนกว่าจะดาวน์โหลดสำเร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image219.jpg"
            ]
          },
          {
            "title": "4. หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxReupFacebook.zip ที่โหลดมา จากนั้นสามารถเลือกได้ว่าจะแตกไฟล์แบบไหน",
            "content": "1.Extract files - สามารถเลือกได้ว่าต้องการให้ไปแตกไฟล์ลงที่ไหน\n\n2.Extract to \"MaxReupFacebook\\\" เลือกให้แตกไฟล์ลงที่ Download\n\n",
            "type": "markdown",
            "images": [
              "image524.jpg"
            ]
          },
          {
            "title": "5. หลังจากแตกไฟล์เสร็จเรียบร้อยแล้ว เข้าไปยังโฟลเดอร์ MaxReupFacebook แล้วกด AutoUpdate รอจนกว่าจะอัพเดตเสร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image561.jpg"
            ]
          },
          {
            "title": "6. เข้าใช้งานโปรแกรม ทำการเข้าระบบให้เรียบร้อย",
            "content": "",
            "type": "markdown",
            "images": [
              "image458.jpg"
            ]
          },
          {
            "title": "7. ไปที่ Utilities >> Update chromrdriver อัพเดต Crome Driver เสร็จสิ้น",
            "content": "",
            "type": "markdown",
            "images": [
              "image284.png"
            ]
          },
          {
            "title": "เสร็จสิ้นขั้นตอนการติดตั้ง",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_38890",
        "name": "2.MaxReup การเพิ่มบัญชี",
        "sections": [
          {
            "title": "2.MaxReup การเพิ่มบัญชี",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ไปที่ Add account",
            "content": "",
            "type": "markdown",
            "images": [
              "image771.png"
            ]
          },
          {
            "title": "2.การตั้งค่าการเพิ่มบัญชี",
            "content": "",
            "type": "markdown",
            "images": [
              "image590.png"
            ]
          },
          {
            "title": "ส่วนแสดงผลสถานะ",
            "content": "Success: แสดงจำนวนบัญชีที่นำเข้าสำเร็จ\n\nError: แสดงจำนวนบัญชีที่ไม่สามารถนำเข้าได้ (ข้อมูลผิดรูปแบบ)\n\nTotal: แสดงจำนวนรายการทั้งหมดที่ใส่ลงไปในช่องกรอกข้อมูล\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "พื้นที่กรอกข้อมูล",
            "content": "ช่องสีขาวขนาดใหญ่: คือพื้นที่สำหรับวาง (Paste) หรือพิมพ์ข้อมูลบัญชีที่คุณต้องการนำเข้า\n\nข้อแนะนำ: ควรเตรียมข้อมูลให้ตรงตามรูปแบบที่เลือกไว้ในส่วนถัดไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนการตั้งค่าการนำเข้า",
            "content": "Input format: เลือกรูปแบบการจัดเรียงข้อมูล (เช่น หากเลือก  Uid|Pass หมายความว่าในหนึ่งบรรทัดต้องมี ID ตามด้วยเครื่องหมาย | และรหัสผ่าน)\n\nChọn thư mục (เลือกโฟลเดอร์): ใช้สำหรับเลือกว่าจะนำบัญชีเหล่านี้ไปเก็บไว้ในกลุ่มหรือโฟลเดอร์ใด (ในภาพคือ Mặc định หรือ ค่าเริ่มต้น)\n\nTự động lấy tên tài khoản (ดึงชื่อบัญชีอัตโนมัติ): หากติ๊กถูก ระบบจะพยายามดึงข้อมูลชื่อเจ้าของบัญชีจากระบบให้โดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_4xbnr",
        "name": "3.MaxReup วิธีการเช็คเพจเช็คและดึงเพจ",
        "sections": [
          {
            "title": "3.MaxReup วิธีการเช็คเพจเช็คและดึงเพจ",
            "content": "หลังจากเพิ่มบัญชีเข้าในโปรแกรมแล้ว\n\n1.คลิกขวาไปที่ Page function  ==> Check out the listing pages ==> Open the browser\n\n2.หลังจากเช็คเพจเสร็จแล้วคลิกขวา ==> จากนั้น Load page list เพื่อโหลดเพจที่มีในบัญชี้ สามารถกรอกจำนวนเพจในช่องด้านบนได้ หรือกดที่ By quantity เพื่อโหลดทั้งหมด\n\nเป็นอันเสร็จขึ้นตอนการเช็คและดึงเพจเพื่อใช้งาน\n\n",
            "type": "markdown",
            "images": [
              "image374.png",
              "image61.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_15fi9",
        "name": "4.การตั้งค่าทั่วไปโปรแกรม MaxReup (General configuration)",
        "sections": [
          {
            "title": "4.การตั้งค่าทั่วไปโปรแกรม MaxReup (General configuration)",
            "content": "",
            "type": "markdown",
            "images": [
              "image171.png"
            ]
          },
          {
            "title": "การตั้งค่าทั่วไป (General configuration)",
            "content": "",
            "type": "markdown",
            "images": [
              "image742.png"
            ]
          },
          {
            "title": "การตั้งค่าการทำงาน",
            "content": "Number of chrome open threads: จำนวนหน้าต่าง Chrome ที่จะเปิดขึ้นมาทำงานพร้อมกัน\n\nNumber of hidden check threads: จำนวนเธรดสำหรับตรวจสอบข้อมูลเบื้องหลัง\n\n",
            "type": "markdown",
            "images": [
              "image169.png"
            ]
          },
          {
            "title": "การเข้าสู่ระบบ",
            "content": "Login type: เลือกรูปแบบการเข้าใช้งาน มีให้เลือกตั้งแต่ใช้รหัสผ่าน (Uid|Pass), ใช้ Cookies หรือสลับกัน (Cookies > Uid|Pass)\n\nWeb login: เลือกเวอร์ชันของเว็บที่จะเข้า (mbasic, m.fb หรือ www)\n\n",
            "type": "markdown",
            "images": [
              "image107.png"
            ]
          },
          {
            "title": "การตั้งค่าอื่นๆ",
            "content": "Check the wall before running: ตรวจสอบหน้าวอลล์ก่อนเริ่มงาน\n\nCheck page information: ตรวจสอบข้อมูลเพจ\n\nReactivate the page when: สั่งให้รีโหลดหรือกระตุ้นหน้าเว็บเมื่อเกิดปัญหา\n\n",
            "type": "markdown",
            "images": [
              "image424.png"
            ]
          },
          {
            "title": "การซิงค์ข้อมูล",
            "content": "Software options: ตัวเลือกในการเลือกซอฟต์แวร์เสริม\n\nDirectory path: ที่อยู่โฟลเดอร์ของโปรแกรมและโปรเจกต์งาน\n\n",
            "type": "markdown",
            "images": [
              "image762.png"
            ]
          },
          {
            "title": "การจัดการเบราว์เซอร์",
            "content": "Browser type: เลือกประเภทเบราว์เซอร์\n\nChrome\n\nGO-Login\n\nchrome path\n\nGEM-Login\n\nGPM-Login\n\nBrowser opening time: ตั้งเวลาหน่วงในการเปิดแต่ละหน้าต่าง\n\nUsing profiles: เลือกใช้ Profile ที่บันทึกไว้ตาม Path ที่กำหนด\n\nPut chrome in from view: จัดวางหน้าต่าง Chrome ให้อยู่ในมุมมอง (กำหนดคอลัมน์ x แถว ได้ เช่น 5 x 2)\n\nTurn off chrome images: ปิดการโหลดรูปภาพเพื่อประหยัด RAM และเน็ต\n\nText typing speed: ความเร็วในการพิมพ์\n\nSlow\n\nNormal\n\nFast\n\nVery fast\n\nSuper fast\n\n",
            "type": "markdown",
            "images": [
              "image372.png"
            ]
          },
          {
            "title": "การแก้แคปช่า",
            "content": "Web: เลือกบริการที่จะใช้แก้\n\nAPI keys: ช่องสำหรับใส่รหัส API จากเว็บผู้ให้บริการ และกด Check เพื่อดูยอดเงินคงเหลือ\n\n",
            "type": "markdown",
            "images": [
              "image767.png"
            ]
          },
          {
            "title": "การตั้งค่าหลังล็อกอินสำเร็จ",
            "content": "Automatically retrieve cookies: ให้โปรแกรมดึง Cookies มาเก็บไว้โดยอัตโนมัติหลังจากล็อกอินผ่านแล้ว\n\n",
            "type": "markdown",
            "images": [
              "image75.png"
            ]
          },
          {
            "title": "การตั้งค่าไอพี",
            "content": "Do not check IP before running: ไม่ต้องตรวจสอบไอพีก่อนเริ่ม\n\nIP change option: เลือกวิธีเปลี่ยนไอพี\n\nOptions: การจัดสรรไอพี เช่น \"Assigned to each account\" (หนึ่งบัญชีต่อหนึ่งไอพี)\n\n",
            "type": "markdown",
            "images": [
              "image622.png"
            ]
          },
          {
            "title": "ตั้งค่าการรันอัตโนมัติ",
            "content": "Act: ถ้าคุณเลือก Turn off และตั้ง Repeat 1 โปรแกรมจะทำงานเพียงรอบเดียวแล้วปิดตัวเองลงครับ แต่ถ้าเปลี่ยนเป็น Post reel โปรแกรมจะวนกลับมาโพสต์คลิปสั้นตามระยะเวลาที่คุณกำหนดไว้นั่นเอง\n\nRepeat: ตั้งจำนวนครั้งที่จะให้ทำซ้ำ\n\nrepeat later: ระยะเวลาที่จะให้เริ่มใหม่\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_t4u54",
        "name": "5.การตั้งค่าโพสต์ reel (Configure post reel)",
        "sections": [
          {
            "title": "5.การตั้งค่าโพสต์ reel (Configure post reel)",
            "content": "",
            "type": "markdown",
            "images": [
              "image597.png"
            ]
          },
          {
            "title": "การตั้งค่าโพสต์ reel (Configure post reel)",
            "content": "",
            "type": "markdown",
            "images": [
              "image413.png"
            ]
          },
          {
            "title": "การตั้งค่ารอบการโพสต์",
            "content": "Posting style: รูปแบบการโพสต์\n\nRegular reels\n\nReel business\n\nVideo business\n\nPost a series of business videos\n\nA page posted: กำหนดให้ 1 เพจ โพสต์จำนวนกี่คลิปต่อรอบ\n\nDelay posting videos: ระยะเวลารอระหว่างการโพสต์แต่ละคลิป\n\nDelay page transfer: ระยะเวลารอเมื่อเปลี่ยนไปโพสต์เพจถัดไป\n\nTime waiting for video: ระยะเวลาสูงสุดที่จะรอให้วิดีโอโหลดเสร็จก่อนข้าม\n\n",
            "type": "markdown",
            "images": [
              "image262.png"
            ]
          },
          {
            "title": "การจัดการไฟล์วิดีโอและปก",
            "content": "Get videos from: แหล่งดึงคลิป\n\nSpecified directory: ดึงจากโฟลเดอร์ที่ระบุ\n\nSeparate configuration for each page: แยกต่างหากสำหรับแต่ละเพจ\n\nSeparate configuration for each category: แยกต่างหากสำหรับแต่ละหมวดหมู่\n\nType of file retrieval: รูปแบบการเลือกไฟล์\n\nTake at random: การสุ่มเลือก\n\nTaken in order: การเลือกตามลำดับ\n\nVideo folder: ช่องระบุที่อยู่ของโฟลเดอร์ที่เก็บวิดีโอในคอมพิวเตอร์\n\nThumbnail image type: รูปแบบภาพหน้าปก\n\nEach video has a different thumbnail: หนึ่งคลิป ต่อ หนึ่งปก\n\nMultiple videos with one thumbnail: หลายคลิป ใช้ปกเดียว\n\nThumbnail: ติ๊กเพื่อใช้งานหน้าปก และระบุโฟลเดอร์เก็บภาพหน้าปก\n\nหมายเหตุ: ชื่อไฟล์วิดีโอและชื่อไฟล์ภาพหน้าปกต้องตรงกัน\n\nAutomatically delete thumbnail file after posting: ลบภาพหน้าปกทันทีเมื่อโพสต์เสร็จ\n\nAutomatically delete video files when finished posting: ลบไฟล์วิดีโอทิ้งเมื่อโพสต์เสร็จ\n\nCheck the video file used before posting: ตรวจสอบไฟล์ก่อนโพสต์\n\nAutomatically save video file information when finished posting: บันทึกข้อมูลประวัติการโพสต์คลิป\n\n",
            "type": "markdown",
            "images": [
              "image661.png"
            ]
          },
          {
            "title": "เนื้อหาและคำอธิบาย",
            "content": "Video description: เลือกรูปแบบการใส่คำอธิบาย\n\nRandom content: สุ่มข้อความแคปชั่นจากรายการที่คุณกรอกไว้ในปุ่ม \"Content\"\n\nVideo file name: ใช้ \"ชื่อไฟล์วิดีโอ\" มาตั้งเป็นแคปชั่นโดยตรง (เช่น ไฟล์ชื่อ วิธีทำอาหาร.mp4 แคปชั่นจะเป็น วิธีทำอาหาร)\n\nRandomize content + video file name: สุ่มข้อความแคปชั่นก่อน แล้วตามด้วยชื่อไฟล์วิดีโอต่อท้าย\n\nVideo file name + random content: เอาชื่อไฟล์วิดีโอขึ้นก่อน แล้วตามด้วยข้อความแคปชั่นที่สุ่มมา\n\nSeparate content for each page: แยกข้อความแคปชั่นตามรายเพจ (เพจใครเพจมัน)\n\nVideo file name + separate content for each page: ชื่อไฟล์วิดีโอ + ข้อความแยกตามรายเพจ\n\nSeparate content for each page + video file name: ข้อความแยกตามรายเพจ + ชื่อไฟล์วิดีโอ\n\nSeparate content for each category: แยกข้อความแคปชั่นตามหมวดหมู่ของเพจ\n\nSeparate content for each category + video file name: ข้อความแยกตามหมวดหมู่ + ชื่อไฟล์วิดีโอ\n\nVideo file name + separate content for each category: ชื่อไฟล์วิดีโอ + ข้อความแยกตามหมวดหมู่\n\nContent: ปุ่มสำหรับกดเข้าไปกรอกเนื้อหา/แคปชั่นที่จะใช้โพสต์\n\nAdd collaborators: เพิ่มผู้ร่วมทำงาน (Collaborator) ในโพสต์\n\nDelete old hashtags: ลบแฮชแท็กเก่าที่ติดมากับคลิปออก\n\nMulti-line content: อนุญาตให้แคปชั่นมีหลายบรรทัด\n\n",
            "type": "markdown",
            "images": [
              "image649.png"
            ]
          },
          {
            "title": "ฟีเจอร์เสริมและการตั้งเวลา",
            "content": "Add music: ค้นหาและใส่เสียงเพลงประกอบตาม Keyword\n\nSchedule: ตั้งเวลาล่วงหน้าในการโพสต์ (กด Configuration เพื่อตั้งปฏิทิน)\n\nShare to news: แชร์คลิป Reel ลงไปยังหน้าฟีดข่าวปกติด้วย\n\n",
            "type": "markdown",
            "images": [
              "image289.png"
            ]
          },
          {
            "title": "การปฏิสัมพันธ์",
            "content": "Interact: ตั้งค่าให้บัญชีมีการโต้ตอบหลังจากโพสต์ (เช่น กดไลก์ตัวเอง หรือคอมเมนต์) สามารถกำหนดจำนวนครั้งได้ที่ช่อง Number of interactions และสามารถตั้งค่าเพิ่มเติมได้ที่ Configuration\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_zvg8b",
        "name": "6.MaxReup การใช้งานฟังก์ชันอื่นๆ",
        "sections": [
          {
            "title": "6.MaxReup การใช้งานฟังก์ชันอื่นๆ",
            "content": "",
            "type": "markdown",
            "images": [
              "image407.png"
            ]
          },
          {
            "title": "ในฝั่ง Account list คลิกขวาจะมีฟังก์ชันขึ้นมาให้ใช้งาน",
            "content": "Select : การเลือก\n\nAll : เลือกบัญชีทั้งหมด\n\nblacken : เลือกเฉพาะบัญชีที่ไฮไลท์\n\nStatus เลือกตามสเตตัส\n\nDeselect all : ยกเลิกการเลือกทั้งหมด\n\nArrange : จัดเรียง\n\nRefresh : รีเฟรช\n\nDelete selected : ลบที่เลือกไว้\n\nCopy : คัดลอกข้อมูลบัญชี\n\nCheck account : ตรวจสอบบัญชี\n\nCheck Wall : เช็คสถานะบัญชี\n\nCheck proxies : เช็คสถานะพร็อกซี่\n\nCheck the token : เช็คสถานะโทเค็น\n\nUpdate data : อัพเดตข้อมูลบัญชี\n\nSwitch folders : ย้ายโฟลเดอร์\n\nFunction page : ฟังก์ชันเพจ\n\nCheck out the listing page : ตรวจสอบรายการเพจ  Open the browser : เปิดเบราว์เซอร์Token : โทเค็น\n\nAccept page admin permissions : ยอมรับสิทธิ์ผู้ดูแลเพจ\n\nOther function : ฟังก์ชั่นอื่น ๆ\n\nDelete duplicate accounts : ลบบัญชีที่ซ้ำกัน\n\nOpen the browser : เปิดเบราว์เซอร์\n\nSign in chrome off : ลงชื่อเข้าใช้แล้วปิด\n\nOpen and login : เปิดและเข้าสู่ระบบ\n\nLoad the list page : โหลดรายการเพจ\n\n",
            "type": "markdown",
            "images": [
              "image54.png",
              "image396.png",
              "image344.png",
              "image702.png",
              "image342.png"
            ]
          },
          {
            "title": "ในฝั่ง Page list คลิกขวาจะมีฟังก์ชันขึ้นมาให้ใช้งาน",
            "content": "Select : การเลือก\n\nAll : เลือกบัญชีทั้งหมด\n\nblacken : เลือกเฉพาะบัญชีที่ไฮไลท์\n\nStatus เลือกตามสเตตัส\n\nDeselect all : ยกเลิกการเลือกทั้งหมด\n\nArrange : จัดเรียง\n\nHide list : ซ่อนรายการ\n\nselected : ที่เลือกไว้\n\nAll : ทั้งหมด\n\nCopy :  คัดลอกข้อมูลบัญชี\n\nDelete selected : ลบที่เลือกไว้\n\nSwitch categories : ย้ายหมวดหมู่\n\nopen the browser : เปิดเบราว์เซอร์\n\nFunction page : ฟังก์ชันเพจ\n\nShare administrative rights : แบ่งปันสิทธิ์การดูแลระบบ\n\nCheck out the information page : ตรวจสอบข้อมูลเพจ\n\nPage reactivated : เปิดการใช้งานเพจ\n\nOther function : ฟังก์ชันอื่นๆ\n\nDelete duplicate pags : ลบเพจที่ซ้ำกัน\n\n",
            "type": "markdown",
            "images": [
              "image200.png",
              "image694.png",
              "image246.png",
              "image160.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_sbl4a",
        "name": "7.MaxReup ตัดต่อวิดีโอ (Edit video)",
        "sections": [
          {
            "title": "7.MaxReup ตัดต่อวิดีโอ (Edit video)",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตัดต่อวิดีโอ (Edit video)",
            "content": "คลิกขวา แล้วไปที่ Add videos to the list เพื่อเพิ่มวิดีโอ\n\n",
            "type": "markdown",
            "images": [
              "image381.png",
              "image751.png"
            ]
          },
          {
            "title": "การตั้งค่า (Configuration)",
            "content": "Render flow: จำนวนแก้ไขพร้อมกัน\n\nDirectory to save videos: ตำแหน่งโฟลเดอร์ที่ต้องการเซฟวิดีโอหลังแก้ไข\n\nAutomatically remove videos from the list when rendering is complete: เลือกเพื่อลบวิดีโอทันทีหลังแก้ไขเสร็จสิ้น\n\n",
            "type": "markdown",
            "images": [
              "image306.png"
            ]
          },
          {
            "title": "เพิ่มสีพื้นหลัง (Background color)",
            "content": "Specified color: เลือกสีพื้นหลัง\n\n",
            "type": "markdown",
            "images": [
              "image348.png"
            ]
          },
          {
            "title": "เพิ่มข้อความ (Insert the word)",
            "content": "More: เพิ่มข้อความ\n\nErase: ลบข้อความ\n\nEdit Text: แก้ไขข้อความ\n\nTypeface: แก้ไขตัวอักษร\n\nColor: แก้ไขสีตัวอักษร\n\nLocation: แก้ไขตำแหน่งตัวอักษร\n\n",
            "type": "markdown",
            "images": [
              "image668.png"
            ]
          },
          {
            "title": "เพิ่มรูปภาพ (Insert photos)",
            "content": "More: เพิ่มรูปภาพ\n\nErase: ลบรูปภาพ\n\nSize: แก้ไขขนาดรูปภาพ\n\nColor: แก้ไขความโปร่งใสรูปภาพ\n\nLocation: แก้ไขตำแหน่งรูปภาพ\n\n",
            "type": "markdown",
            "images": [
              "image588.png"
            ]
          },
          {
            "title": "เพิ่มเสียง (Insert music)",
            "content": "More: เพิ่มเสียง\n\nErase: ลบเสียง\n\nFile retrieval option: ตัวเลือกการเรียกค้นไฟล์\n\nVolume: ระดับเสียง\n\n",
            "type": "markdown",
            "images": [
              "image89.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_l6x0g",
        "name": "8.Max Reup การจัดหมวดหมู่สำหรับโพสต์วิดีโอให้แต่ละเพจ",
        "sections": [
          {
            "title": "8.Max Reup การจัดหมวดหมู่สำหรับโพสต์วิดีโอให้แต่ละเพจ",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ไปที่ Page category (หมวดหมู่เพจ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image95.png"
            ]
          },
          {
            "title": "2.คลิกขวาเพิ่มหมวดหมู่ที่ต้องการ (Add categories)",
            "content": "",
            "type": "markdown",
            "images": [
              "image467.png"
            ]
          },
          {
            "title": "3.ไปที่ไอคอนวิดีโอเพื่อตั้งค่าแต่ละหมวดหมู่",
            "content": "",
            "type": "markdown",
            "images": [
              "image565.png"
            ]
          },
          {
            "title": "4.การเพิ่มวิดีโอให้แต่ละหมวดหมู่ สามารถเพิ่มได้ 2 แบบ",
            "content": "1.การเพิ่มโดยการเลือกวิดีโอที่ต้องการเพิ่มเข้าได้เลย (Add videos)\n\n2.การเพิ่มโดยการนำวิดีโอที่ต้องการมาไว้ในโฟล์เดอร์ โดยคลิกที่ Go to video folder เพื่อไปยังโฟล์เดอร์\n\n",
            "type": "markdown",
            "images": [
              "image62.png",
              "image158.png"
            ]
          },
          {
            "title": "5.เพิ่มเนื้อหาของวิดีโอ",
            "content": "",
            "type": "markdown",
            "images": [
              "image689.png"
            ]
          },
          {
            "title": "6.เพิ่มข้อความที่ต้องกาแสดงความคิดเห็นในวิดีโอ",
            "content": "7.เพิ่มรูปภาพที่ต้องการแสดงความคิดเห็นในวิดีโอ สามารถเพิ่มได้ 2 แบบ\n\n1.การเพิ่มโดยการเลือกรูปภาพที่ต้องการเพิ่มเข้าได้เลย (Add photos)\n\n2.การเพิ่มโดยการนำรูปภาพที่ต้องการมาไว้ในโฟล์เดอร์ โดยคลิกที่ Go to the photos folder เพื่อไปยังโฟล์เดอร์\n\n",
            "type": "markdown",
            "images": [
              "image626.png",
              "image253.png",
              "image335.png"
            ]
          },
          {
            "title": "8.จากนั้นกด save",
            "content": "เริ่มแรกมาทุกเพจจะอยู่ในหมวดหมู่ Default\n\n",
            "type": "markdown",
            "images": [
              "image445.png"
            ]
          },
          {
            "title": "9.เลือกเพจที่ต้องการจัดหมวดหมู่",
            "content": "คลิปขาวแล้วเลือก Switch categories\n\n",
            "type": "markdown",
            "images": [
              "image726.png",
              "image48.png"
            ]
          },
          {
            "title": "10.เลือกหมวดหมู่ที่ต้องการ =>กด Save",
            "content": "",
            "type": "markdown",
            "images": [
              "image28.png",
              "image4.png"
            ]
          },
          {
            "title": "11.ไปที่ Configure post reel",
            "content": "",
            "type": "markdown",
            "images": [
              "image597.png"
            ]
          },
          {
            "title": "12.ไปที่ Get videos from => เลือกเป็น Separate configuration for each category",
            "content": "กด Save เป็นอันเสร็จขั้นตอน\n\n",
            "type": "markdown",
            "images": [
              "image609.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_p1wg0",
        "name": "9.Max Reup การใช้งานฟังก์ชันผู้ดูแลเพจ",
        "sections": [
          {
            "title": "9.Max Reup การใช้งานฟังก์ชันผู้ดูแลเพจ",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "แชร์สิทธิการดูแลเพจ",
            "content": "เลือกเพจที่ต้องการแชร์สิทธิ ⇒ คลิกขวาในฝั่ง Page list ⇒ Page function ⇒ Share administrative rights : แชร์สิทธิ์การดูแลเพจ\n\n",
            "type": "markdown",
            "images": [
              "image427.png",
              "image758.png"
            ]
          },
          {
            "title": "การเลือกประเภทสิทธิ์",
            "content": "Full rights: มอบสิทธิ์สูงสุด (จัดการได้ทุกอย่างเสมือนเจ้าของ)\n\nJob rights (editor): มอบสิทธิ์ในระดับผู้แก้ไข (เน้นจัดการเนื้อหาหรืองานโพสต์ทั่วไป)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รายชื่อผู้รับสิทธิ์(List of uid)",
            "content": "ช่องกรอกข้อมูล: เป็นพื้นที่สำหรับใส่หมายเลข UID ของบัญชีที่ต้องการแชร์สิทธิ์ให้\n\nจำนวน UID: ระบบจะแสดงตัวเลขในวงเล็บหลังหัวข้อ เพื่อบอกว่าขณะนี้มีการระบุไว้กี่รายชื่อ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าข้อจำกัด",
            "content": "One page can be shared with a maximum of [X] uid: กำหนดจำนวน UID สูงสุดที่เพจหนึ่งเพจจะสามารถแชร์สิทธิ์ไปให้ได้\n\nOne uid can send a maximum of [X] admin invitations: กำหนดจำนวนคำเชิญสูงสุดที่ UID หนึ่งๆ สามารถส่งออกไปได้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตัวเลือกเพิ่มเติม",
            "content": "Use account proxy to log in email: ติ๊กช่องนี้หากต้องการให้ระบบใช้ Proxy ของบัญชีในการล็อกอินอีเมล\n\nจากนั้นกด Save\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ยอมรับสิทธิผู้ดูแลเพจ",
            "content": "เลือกบัญชีที่ต้องการยอมรับสิทธิ ⇒ คลิกขวาในฝั่ง Account list ⇒ Page function ⇒ Accept page adminisstrator rights : ยอมรับสิทธิ์ผู้ดูแลเพจ\n\nMột tài khoản chấp nhận tối đa : ตั้งค่าว่าหนึ่งบัญชียอมรับคำเชิญผู้ดูแลระบบได้กี่รายการ\n\nChấp nhận thất bại : เมื่อยอมรับล้มเหลวกี่รายการถึงหยุดรับคำเชิญ\n\nจากนั้นกด Save\n\n",
            "type": "markdown",
            "images": [
              "image142.png",
              "image456.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_xbgtb",
        "name": "คำถามและปัญหาที่พบบ่อย MaxReup",
        "sections": [
          {
            "title": "คำถามและปัญหาที่พบบ่อย MaxReup",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_znlek",
            "name": "ไม่สามารถเปิดใช้งานโปรแกรมได้",
            "sections": [
              {
                "title": "ไม่สามารถเปิดใช้งานโปรแกรมได้",
                "content": "1.โปรแกรมขึ้นว่า Login fail 2.โปรแกรมเริ่มทำงานแล้วไม่ล็อคอินบัญชี\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ไปที่ Utilities >> Update chromrdriver อัพเดต Crome Driver",
                "content": "",
                "type": "markdown",
                "images": [
                  "image398.png"
                ]
              }
            ]
          },
          {
            "id": "cat_nlurh",
            "name": "วิธีนำเข้าบัญชีและการเลือก Type login ให้ตรงกับข้อมูลบัญชี",
            "sections": [
              {
                "title": "วิธีนำเข้าบัญชีและการเลือก Type login ให้ตรงกับข้อมูลบัญชี",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.1 วิธีนำเข้าบัญชี",
                "content": "1.ไปที่ Add account\n\n2.นำเข้าบัญชี\n\n1.นำข้อมูลบัญชีมาวางในช่องว่าง\n\n2.เลือก Format ให้ตรงกับรูปแบบบัญชี\n\n3.เลือกโฟล์เดอร์\n\nจากนั้นกด Confirm\n\n",
                "type": "markdown",
                "images": [
                  "image509.png",
                  "image405.png"
                ]
              },
              {
                "title": "2.2 การเลือก Type login ให้ตรงกับข้อมูล",
                "content": "1.ไปที่ General configuration\n\n2.เลือก Type login\n\nกรณีที่ข้อมูลบัญชีมี UID หรือ Email และ Pass(รหัสผ่าน) ให้เลือก Login Type เป็น UID | Pass\n\nกรณีที่ข้อมูลบัญชีมี Cookie เพิ่มมาด้วย สามารถเลือก Login Type เป็น Cookie หรือ Cookie > Uid|Pass\n\nจากนั้นกด Save\n\n",
                "type": "markdown",
                "images": [
                  "image493.png",
                  "image13.png"
                ]
              }
            ]
          },
          {
            "id": "cat_9hl1l",
            "name": "การใช้งาน Proxy ใน MaxReup",
            "sections": [
              {
                "title": "การใช้งาน Proxy ใน MaxReup",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.การนำเข้า Proxy",
                "content": "การนำเข้าในแต่ละบัญชี\n\nเลือกบัญชีที่ต้องการนำเข้า Proxy\n\nคลิกขวา => Update data => Proxy\n\nนำ Ip Proxy มาวางในช่องว่าง\n\nเลือก Proxy type\n\nกำหนดจำนวนบัญชีต่อ IP Proxy\n\nจากนั้นกด Confirm\n\n",
                "type": "markdown",
                "images": [
                  "image209.png",
                  "image329.png",
                  "image94.png",
                  "image324.png"
                ]
              },
              {
                "title": "2.การตั้งค่าใช้งาน Proxy",
                "content": "1.ไปที่หน้า General configuration\n\n2.ในช่อง IP change option : เลือก Proxy\n\n3.ตัวเลือกการใช้ Proxy\n\nAssigned to each acccount : ใช้ Proxy ที่อยู่ในแต่ละบัญชี\n\nRandom in the list : แบบสุ่มในรายการ\n\nเครื่องมือที่ช่วยเราบริหารจัดการเพจเฟสบุ๊คจำนวนมาก ไปพร้อมๆ กับการใช้งานฟังชั่นที่หลากหลายมากยิ่งขึ้น\n\nระบบฟาร์มเพจเฟสบุ๊คอัติโนมัติ ไม่จำกัดจำนวนเฟช ใช้ระบบ Chrome Browser ในการรัน\n\nด้วยฟังชั่นครบครัน ดังนี้\n\nปั๊มยอดผู้ติดตามโปรไฟล์ส่วนตัว\n\nปั๊มไลก์และคอมเมนต์บนโพสต์\n\nปั๊มไลก์และติดตามเพจ\n\nสแปมโพสต์ (กลุ่ม, เพจ, โปรไฟล์)\n\nสแปมโพสต์ตามคีย์เวิร์ด\n\nให้คะแนนรีวิวเพจ\n\nสร้างปฏิสัมพันธ์ในไลฟ์สด\n\nโพสต์บนวอลล์ของเพจอื่น (แจ้งเตือน)\n\nสแปมตอบกลับคอมเมนต์ตามคีย์เวิร์ด\n\nสแปมตอบกลับคอมเมนต์ (กลุ่ม, เพจ...)\n\nสแปมตอบกลับคอมเมนต์ในโพสต์ที่ระบุ\n\nสแปมตอบกลับคอมเมนต์ที่เจาะจง\n\nแก้ไขคอมเมนต์\n\nอ่านประกาศ\n\nปฏิสัมพันธ์กับ Reels\n\nโพสต์\n\nตั้งเวลาหยุดพัก\n\nโพสต์สตอรี่\n\nโพสต์แท็ก UID ที่ระบุ\n\nตอบกลับข้อความแชท\n\nตอบกลับคอมเมนต์\n\nโพสต์แท็กพร้อมปุ่มกด\n\nส่งคำเชิญให้กดไลก์เพจ\n\nคัดลอกเนื้อหาโพสต์ที่ระบุ\n\nคัดลอกโพสต์จากเพจที่ระบุ\n\nโพสต์คลิป Reels\n\nลบโพสต์ในเพจ\n\nเข้ากลุ่มตามคีย์เวิร์ด\n\nแชร์โพสต์ลงกลุ่ม\n\nเข้ากลุ่มที่กำหนดไว้\n\nสแปมโพสต์ในกลุ่มที่เป็นสมาชิก\n\nโพสต์ลงในกลุ่มที่เป็นสมาชิก\n\nโพสต์ลงในกลุ่มที่กำหนดไว้\n\nสแปมตอบกลับคอมเมนต์จากกลุ่มที่มีส่วนร่วม\n\nสร้างกลุ่ม\n\nสร้างกิจกรรม\n\nแชร์โพสต์ไปยังกลุ่มที่กำหนด\n\nอัปเดตรูปโปรไฟล์\n\nอัปเดตรูปหน้าปก\n\nอัปเดตประวัติ/คำแนะนำตัว\n\nอัปเดตชื่อเพจ\n\nอัปเดตข้อมูลทั่วไป\n\nตั้งค่าจำกัดประเทศ\n\nตั้งค่าจำกัดอายุ\n\nบล็อก UID ที่ระบุ\n\nลบหน้าเพจระบุตำแหน่งทั้งหมด\n\n",
                "type": "markdown",
                "images": [
                  "image493.png",
                  "image282.png",
                  "image376.png",
                  "image544.png",
                  "image202.png",
                  "image389.png"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maxcarepage",
    "name": "MaxCare Page",
    "categories": [
      {
        "id": "cat_lo8p1",
        "name": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxCare Page",
        "sections": [
          {
            "title": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxCare Page",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "เข้าไปยังเว็บไซต์ Minsoft https://app.minsoftthailand.com/\n\nล็อคอินเข้าใช้งาน\n\nไปยังหน้าการจัดการซอร์ฟแวร์\n\n",
            "type": "markdown",
            "images": [
              "image793.png",
              "image755.png",
              "image711.png"
            ]
          },
          {
            "title": "2.จากนั้นไปที่โปรแกรม MaxCarePage ==> กด ดาวน์โหลด",
            "content": "หากขึ้นไม่สามารถดาวน์โหลดได้ ให้กด Ctrl + J\n\nกดที่ จุด 3 จุด\n\nเลือกดาวน์โหลดไฟล์อันตราย\n\n",
            "type": "markdown",
            "images": [
              "image499.png",
              "image280.png",
              "image488.png",
              "image655.png"
            ]
          },
          {
            "title": "3.หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxCarePage.zip ที่โหลดมา จากนั้นกดแตกไฟล์",
            "content": "",
            "type": "markdown",
            "images": [
              "image787.png"
            ]
          },
          {
            "title": "4.หลังจากแตกไฟล์เสร็จเรียบร้อยแล้ว เข้าไปยังโฟลเดอร์ MaxCarePage แล้วกด AutoUpdate รอจนกว่าจะอัพเดตเสร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image278.png"
            ]
          },
          {
            "title": "5.เข้าใช้งานโปรแกรม ทำการเข้าระบบให้เรียบร้อย",
            "content": "6.เลือกServer เป็น Thailand\n\nเมื่อเข้าระบบเสร็จแล้ว ให้ไปที่ Utilities >> Update chromedriver เพื่ออัพเดตโครมไดรเวอร์\n\n*เป็นอันเสร็จขั้นตอนการติดตั้งโปรแกรม MaxCare Page***\n\n",
            "type": "markdown",
            "images": [
              "image357.png",
              "image225.png",
              "image154.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_sjwot",
        "name": "MaxCarePage วิธีเพิ่มบัญชีเฟสบุ๊คโปรแกรม",
        "sections": [
          {
            "title": "MaxCarePage วิธีเพิ่มบัญชีเฟสบุ๊คโปรแกรม",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ไปที่ More account",
            "content": "เพิ่มข้อมูลบัญชีในช่องว่าง\n\nจากนั้นเลือก Import format ให้ตรงกับข้อมูลบัญชี จากนั้กด comfirm\n\n",
            "type": "markdown",
            "images": [
              "image613.png",
              "image732.png"
            ]
          },
          {
            "title": "รูปแบบข้อมูล",
            "content": "",
            "type": "markdown",
            "images": [
              "image224.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_x2kp6",
        "name": "MaxCare Page วิธีการเช็คเพจเช็คและดึงเพจ",
        "sections": [
          {
            "title": "MaxCare Page วิธีการเช็คเพจเช็คและดึงเพจ",
            "content": "หลังจากเพิ่มบัญชีเข้าในโปรแกรมแล้ว\n\n1.คลิกขวาไปที่ Page function  ==> Check the list pages ==> Open the browser\n\nConfigure check page (การตั้งค่าหน้าตรวจสอบ)\n\nCheck the location page: ตรวจสอบตำแหน่งที่ตั้งของเพจ\n\nEnable disabled page: เปิดใช้งานเพจที่ถูกปิดใช้งาน\n\nDo not add a page that already exists: ห้ามเพิ่มเพจที่มีอยู่แล้ว\n\n2.หลังจากเช็คเพจเสร็จแล้วคลิกขวา ==> จากนั้น Load page list ==> สามารถเลือกจำนวนเพจที่ต้องการได้\n\nเป็นอันเสร็จขึ้นตอนการเช็คและดึงเพจเพื่อใช้งาน\n\n",
            "type": "markdown",
            "images": [
              "image384.png",
              "image436.png",
              "image503.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_1hagq",
        "name": "วิธีการเชื่อมข้อมูลกับ Maxcare",
        "sections": [
          {
            "title": "วิธีการเชื่อมข้อมูลกับ Maxcare",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ไปที่โฟลเดอร์ Maxcare จากนั้นคัดลอกที่อยู่โฟลเดอร์ Maxcare",
            "content": "",
            "type": "markdown",
            "images": [
              "image370.png"
            ]
          },
          {
            "title": "2.กลับมาที่โปรแกรม MaxCarePage ไปที่ genneral configuration ==> ไปที่ Data synchronization เลือกเชื่อมต่อกับ maxcare ==> วางที่อยู่โฟลเดอร์ในช่องว่าง ==> กด Save",
            "content": "",
            "type": "markdown",
            "images": [
              "image309.png"
            ]
          },
          {
            "title": "3.กด Refresh",
            "content": "เสร็จขั้นตอนการเชื่อมข้อมูลกับ Maxcare\n\n",
            "type": "markdown",
            "images": [
              "image604.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_9kla3",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [],
        "subCategories": [
          {
            "id": "cat_td3y3",
            "name": "อธิบายการตั้งค่าต่างๆเบื้องต้น",
            "sections": [
              {
                "title": "อธิบายการตั้งค่าต่างๆเบื้องต้น",
                "content": "",
                "type": "markdown",
                "images": [
                  "image643.png"
                ]
              },
              {
                "title": "1.General configuration",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าจำนวนเธรดการทำงาน",
                "content": "Number of account opening: จำนวนบัญชีที่จะเปิดขึ้นมาทำงานพร้อมกัน\n\nNumber of page streams/accounts: จำนวนหน้าเพจหรือสตรีมต่อหนึ่งบัญชี\n\nNumber of hidden check threads: จำนวนเธรดที่ใช้สำหรับตรวจสอบเบื้องหลัง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการซิงค์ข้อมูล",
                "content": "Software options: เลือกซอฟต์แวร์ที่ต้องการเชื่อมต่อ\n\nDirectory path: ช่องสำหรับระบุที่อยู่โฟลเดอร์ (Path) ของซอฟต์แวร์ที่ต้องการเชื่อมต่อ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเบราว์เซอร์",
                "content": "Browser type: เลือกประเภทเบราว์เซอร์\n\nBrowser opening time: ตั้งค่าระยะเวลาการรอขณะเปิดเบราว์เซอร์\n\nUse profiles: ติ๊กถูกเพื่อใช้งานโปรไฟล์เบราว์เซอร์ที่บันทึกไว้\n\nWindow ratio: ปรับขนาดหน้าต่างเบราว์เซอร์\n\nText typing speed: ความเร็วในการพิมพ์ข้อความ\n\nตัวเลือกเพิ่มเติม\n\nPut chrome in from view: แสดงหน้าต่าง Chrome ให้เห็นขณะทำงาน\n\nTurn off chrome images: ปิดการแสดงผลรูปภาพใน Chrome\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าตัวแทนเครือข่าย/IP",
                "content": "Do not check IP before running: หากติ๊กถูก โปรแกรมจะไม่ตรวจสอบ IP ก่อนเริ่มงาน\n\nDelay after changing IP: ระยะเวลารอคอยหลังจากเปลี่ยน IP\n\nIP change option: รูปแบบการใช้ Proxy\n\nOption: การกำหนดการใช้ Proxy กับบัญชี\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Interactive configuration",
                "content": "",
                "type": "markdown",
                "images": [
                  "image327.png"
                ]
              },
              {
                "title": "การตั้งค่าการเข้าสู่ระบบ",
                "content": "Login type: เลือกรูปแบบการเข้ารหัสเข้าใช้งาน (เช่น UID|Pass, Email|Pass, Cookie, หรือสลับจาก Cookie เป็น Uid|Pass หากคุกกี้ใช้ไม่ได้)\n\nWeb login: เลือกเวอร์ชันของเว็บไซต์ที่จะเข้าใช้งาน (www, mbasic, หรือ m.fb)\n\nDelete cookies and re-login when password is wrong (chrome): หากติ๊กถูก โปรแกรมจะลบคุกกี้เก่าและล็อกอินใหม่ด้วยรหัสผ่านเมื่อตรวจพบว่าการเข้าสู่ระบบผิดพลาด (เฉพาะ Chrome)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเมื่อเข้าสู่ระบบสำเร็จ",
                "content": "Automatically retrieve cookies: ดึงข้อมูลคุกกี้ใหม่โดยอัตโนมัติ\n\nAutomatically get tokens: ดึงค่า Access Token โดยอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการรันอัตโนมัติ",
                "content": "Act: ตั้งค่าการทำงานวนซ้ำ\n\nRepeat later: ตั้งค่าให้เริ่มทำงานใหม่ทุกๆ กี่นาที\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการแก้ captcha",
                "content": "Web: เลือกบริการที่จะใช้แก้ Captcha\n\nApi key: ช่องสำหรับใส่รหัส API ของบริการแก้ Captcha เพื่อตัดเครดิตค่าบริการ\n\nCheck: ปุ่มสำหรับตรวจสอบว่า Key ที่ใส่ใช้งานได้หรือมีเงินเหลือเท่าไหร่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการจัดการสคริปต์",
                "content": "Action Type: รูปแบบการปฏิบัติงาน\n\nScript: เลือกชื่อสคริปต์หรือชุดคำสั่งที่เตรียมไว้\n\nปุ่มจัดการด้านข้าง: ➕ (เพิ่ม), 📑 (คัดลอก), ✏️ (แก้ไข), ❌ (ลบสคริปต์)\n\nLink export directory: ที่เก็บไฟล์ผลลัพธ์หรือไฟล์ที่ Export ออกมาจากโปรแกรม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าอื่นๆ",
                "content": "Check wall trước khi chạy: ตรวจสอบหน้าวอลล์ (หน้าโปรไฟล์) ก่อนเริ่มทำงาน\n\nEnable disabled page: เปิดใช้งานหน้าเพจที่ปิดอยู่\n\nCheck page information: ตรวจสอบข้อมูลรายละเอียดของเพจ\n\nGet the cookie when the cookie dies: หากคุกกี้หมดอายุ ให้ทำการดึงคุกกี้ใหม่ทันที\n\nRest: ตั้งค่าให้โปรแกรมหยุดพัก\n\nKill all chrome/chromedriver while resting: ปิดเบราว์เซอร์ Chrome ทั้งหมดระหว่างที่พักเพื่อคืนทรัพยากรเครื่อง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Utilities",
                "content": "Scan pages by keywords: ค้นหาหน้าเพจหรือเนื้อหาโดยใช้คำสำคัญ (Keywords) ที่กำหนด\n\nKill Chrome: ใช้สำหรับปิดหน้าต่าง Google Chrome ทั้งหมดที่โปรแกรมเปิดอยู่ทันที\n\nUpdate chromedriver: ใช้สำหรับอัปเดตไฟล์ตัวควบคุมเบราว์เซอร์ (Driver) ให้เป็นเวอร์ชันล่าสุด เพื่อให้ทำงานร่วมกับเวอร์ชันของ Chrome ในเครื่องได้ปกติ\n\nKill Chromedriver: ปิดกระบวนการทำงานเบื้องหลัง (Background Process) ของตัวควบคุมเบราว์เซอร์ ช่วยแก้ปัญหาหน่วยความจำ (RAM) เต็มหรือ Driver ค้าง\n\nRelease capacity: คำสั่งล้างไฟล์ขยะ หรือคืนค่าพื้นที่ว่างให้กับระบบ เพื่อให้โปรแกรมทำงานได้ลื่นไหลขึ้น\n\nCheck proxy: ตรวจสอบสถานะการเชื่อมต่อของ Proxy ว่ายังใช้งานได้ปกติหรือไม่\n\nCheck Like UID: ตรวจสอบสถานะหรือข้อมูลของ User ID (UID) จากการกดถูกใจ เพื่อวิเคราะห์กลุ่มเป้าหมาย\n\nPrompt AI: เปิดช่องสำหรับใส่คำสั่ง (Prompt) เพื่อใช้งานร่วมกับระบบ AI\n\nFind Id facebook: เครื่องมือสำหรับค้นหาเลข ID ของโปรไฟล์, เพจ หรือกลุ่มบน Facebook จากลิงก์ URL\n\n",
                "type": "markdown",
                "images": [
                  "image130.png"
                ]
              },
              {
                "title": "การใช้งานฟังก์ชันอื่นๆ",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.ฟังก์ชันคลิกขวาฝั่ง Account list",
                "content": "Select: ใช้สำหรับเลือกรายการที่ต้องการ\n\nAll: ใช้สำหรับเลือกรายการบัญชีทั้งหมด\n\nBlacken: ใช้เลือกรายการเฉพาะแถวที่คุณทำการเอาเมาส์ไปคลิกไฮไลท์ไว้\n\nStatus > Live: ระบบจะทำการติ๊กถูกเลือกเฉพาะบัญชีที่มีสถานะเป็น \"Live\"\n\nStatus: เลือกจากสถานะอื่นๆ\n\nDeselect all: ล้างการติ๊กถูกออกจากทุกรายการที่เลือกไว้\n\nArrange: ใช้สำหรับจัดลำดับรายการในตารางตามเงื่อนไขที่กำหนด\n\nRefresh: อัปเดตการแสดงผลหน้าจอให้เป็นปัจจุบัน\n\nDelete selected: ลบชื่อบัญชีหรือข้อมูลที่เลือกไว้ออกจากระบบ\n\nCopy: คัดลอกข้อมูล เช่น ID, รหัสผ่าน, 2FA หรือคุกกี้ เพื่อนำไปใช้ต่อ\n\nUID: คัดลอกหมายเลขประจำตัวบัญชี (User ID)\n\nPass: คัดลอกรหัสผ่าน (Password)\n\n2FA: คัดลอกรหัสลับ (Secret Key) สำหรับใช้เจนรหัส 2 ชั้น\n\n6-digit 2FA code: คัดลอกตัวเลข 6 ตัวที่ใช้ล็อกอิน ณ เวลานั้น\n\nCookie: คัดลอกค่าคุกกี้ของบัญชี เพื่อใช้ล็อกอินโดยไม่ต้องกรอกรหัสผ่าน\n\nUid | pass | 2fa: คัดลอกไอดี, รหัสผ่าน และรหัส 2 ชั้น\n\nUid|pass|2FA|proxy: คัดลอกไอดี, รหัสผ่าน, 2FA และข้อมูล Proxy ที่ผูกกับบัญชีนั้น\n\nUID | Pass | 2FA | Cookie | Proxy: คัดลอกข้อมูลครบชุดสำหรับการย้ายบัญชีแบบสมบูรณ์\n\nOther formats...: หากคุณต้องการรูปแบบการคัดลอกที่ต่างออกไป คุณสามารถเข้าไปตั้งค่ากำหนดเองได้ที่เมนูนี้\n\nCheck account: ตรวจสอบว่าบัญชีนั้นยังใช้งานได้ปกติ (Live) หรือโดนปิด (Die) หรือไม่\n\nCheck Wall: โปรแกรมจะเข้าไปตรวจสอบหน้าโปรไฟล์ (Timeline) ของบัญชีนั้นๆ\n\nCheck wall and update name: เหมือนกับ Check Wall แต่จะทำการดึง \"ชื่อโปรไฟล์ล่าสุด\" ของบัญชีนั้นมาบันทึกในระบบให้ด้วย\n\nCheck proxy: ตรวจสอบการเชื่อมต่อของ Proxy ที่ผูกไว้กับบัญชีนั้นๆ\n\nCheck tokens: ตรวจสอบความถูกต้องของ Token\n\nUpdating data: อัปเดตข้อมูลที่ต้องการ\n\nPass: เปลี่ยนรหัสผ่านของบัญชีที่บันทึกไว้ในระบบ\n\n2fa: อัปเดตหรือเปลี่ยนรหัสลับ 2FA (Secret Key)\n\nCookie: นำคุกกี้ชุดใหม่มาวางทับชุดเดิม\n\nProxy: เปลี่ยน Proxy ให้กับบัญชีนั้นๆ\n\nUseragent: อัปเดตข้อมูลเบราว์เซอร์จำลอง\n\nNote: เขียนบันทึกเพิ่มเติมหรือแก้ไขข้อความโน้ตที่กำกับไว้ในแต่ละบัญชี เพื่อช่วยในการจดจำ\n\nToken: อัปเดตค่า Access Token ใหม่เพื่อให้ระบบ API ทำงานได้ต่อเนื่อง\n\nEmail|Pass Email: อัปเดตข้อมูลอีเมลที่ผูกกับบัญชีพร้อมรหัสผ่านของอีเมลนั้นๆ (มักใช้ในขั้นตอนการกู้คืนบัญชีหรือยืนยันตัวตน)\n\nSwitch folders: ย้ายรายการที่เลือกไปยังโฟลเดอร์อื่นเพื่อความเป็นระเบียบ\n\nSpam messages: ฟังก์ชันสำหรับส่งข้อความจำนวนมาก\n\nPage function: เมนูย่อยสำหรับจัดการเพจ\n\nCreate profile page: สั่งให้บัญชีที่เลือกทำการสร้างเพจใหม่ขึ้นมา\n\nCheck the list of pages: เช็กรายการเพจ\n\nOpen the browser: เปิดเบราว์เซอร์จำลองเพื่อเข้าไปดูหน้ารายการเพจทั้งหมดที่บัญชีนั้นถือครองอยู่ด้วยตัวเอง\n\nAccept page administrator rights: กดเพื่อยอมรับคำเชิญเป็นผู้ดูแลเพจ (Admin) ที่ส่งมายังบัญชีนั้นๆ โดยอัตโนมัติ\n\nBuff Like page quickly: สั่งให้บัญชีที่เลือกกดถูกใจ (Like) เพจที่กำหนดไว้ทันที\n\nOther function: รวมคำสั่งเสริมต่างๆ ที่ไม่ได้อยู่ในหมวดหมู่หลัก\n\nDelete duplicate accounts: โปรแกรมจะตรวจสอบ UID ในรายการที่คุณเลือก หากพบว่ามีบัญชีที่ซ้ำกัน จะทำการลบตัวที่ซ้ำออกให้เหลือเพียงรายการเดียว\n\nDelete profile: สั่งลบโฟลเดอร์ Cache และ Cookie (Data Profile) ของบัญชีที่เลือกออกจากพื้นที่จัดเก็บในคอมพิวเตอร์\n\nGet tokens: ดึงรหัสโทเคน\n\nEAAAAUa: เป็น Access Token ประเภทหนึ่ง\n\nOpen the browser: เปิดเบราว์เซอร์จำลอง (Fingerprint browser) เพื่อเข้าใช้งานบัญชีนั้นๆ โดยตรง\n\nAfter logging in, turn off Chrome: โปรแกรมจะเปิดเบราว์เซอร์ขึ้นมาและดำเนินการล็อกอินเข้าสู่ระบบให้โดยอัตโนมัติ\n\nOpen and login: โปรแกรมจะเปิดเบราว์เซอร์ขึ้นมาและดำเนินการกรอกไอดี รหัสผ่าน และรหัส 2FA ให้โดยอัตโนมัติ แต่จะ เปิดเบราว์เซอร์ค้างไว้ ให้คุณใช้งานต่อ\n\nLoad page list: ดึงรายการเพจที่ผูกอยู่กับบัญชีนั้นๆ\n\nช่องใส่ตัวเลข: ให้กรอกตัวเลขจำนวนเพจที่คุณต้องการดึงข้อมูล\n\nAccording to quantity: หลังจากกรอกตัวเลขในช่องด้านบนแล้ว ให้คลิกที่คำสั่งนี้เพื่อให้โปรแกรมเริ่มรันสคริปต์ดึงรายการเพจตามจำนวนที่ระบุไว้\n\nBM function: จัดการเกี่ยวกับ Business Manager\n\nCreate a business: สั่งให้บัญชีที่เลือกทำการสร้างบัญชีธุรกิจ (BM) ใหม่ขึ้นมาโดยอัตโนมัติ\n\nPage group: จัดการรวบรวมเพจต่างๆ เข้ามาอยู่ในกลุ่มหรือภายใต้การดูแลของธุรกิจที่กำหนด\n\nCheck BM list > Token: สั่งให้โปรแกรมดึงรายชื่อบัญชีธุรกิจ (BM) ทั้งหมดที่บัญชีนั้นถือครองอยู่ โดยใช้รหัส Token ในการเข้าถึงข้อมูล\n\nLoad BM list: ดึงรายการบัญชีโฆษณาธุรกิจ (BM) ที่บัญชีนั้นถือครองอยู่\n\n",
                "type": "markdown",
                "images": [
                  "image601.png"
                ]
              },
              {
                "title": "2.ฟังก์ชันคลิกขวาฝั่ง Page list",
                "content": "Select: ใช้สำหรับเลือกรายการที่ต้องการ\n\nAll: ใช้สำหรับเลือกรายการทุกอย่าง\n\nBlacken: ใช้สำหรับเลือกเฉพาะรายการที่ไฮไลท์ไว้ในระบบ\n\nStatus: เปิดตัวเลือกเพิ่มเติมเพื่อเลือกรายการตามสถานะการทำงานที่เจาะจง\n\nDeselect all: คลิกเพื่อเอาเครื่องหมายเลือกออกจากทุกรายการที่เลือกไว้\n\nArrange: ใช้สำหรับปรับเปลี่ยนลำดับของรายการ เช่น เรียงตามชื่อ วันที่ หรือลำดับก่อนหลัง\n\nHide list: ใช้สำหรับซ่อนรายการที่ไม่ต้องการให้แสดงบนหน้าจอชั่วคราว\n\nSelected: สั่งซ่อนเฉพาะรายการที่คุณทำเครื่องหมายเลือกไว้ เท่านั้น รายการอื่นๆ ที่ไม่ได้เลือกจะยังคงแสดงผลตามปกติ\n\nAll: สั่งซ่อนทุกรายการที่อยู่ในหน้าจอหรือกลุ่มนั้นๆ ทันที ทำให้หน้าจอว่างเปล่าเพื่อให้เริ่มจัดการรายการใหม่ๆ ได้สะดวกขึ้น\n\nCopy: คัดลอกรายการที่เลือกไว้ไปยังคลิปบอร์ด\n\nUid Page: คัดลอกเฉพาะหมายเลข ID ของหน้าเพจ\n\nIdBusiness: คัดลอก ID ของบัญชีธุรกิจ (Business ID)\n\nIdBusiness|token: คัดลอก ID ธุรกิจควบคู่กับรหัส Token สำหรับการเข้าถึง\n\nPage name: คัดลอกชื่อของหน้าเพจ\n\nCokie page: คัดลอกข้อมูล Cookie ของเพจนั้นๆ (สำหรับใช้รักษาเซสชันการล็อกอิน)\n\nUid page|Cokie page คัดลอกทั้ง ID เพจและข้อมูล Cookie พร้อมกัน\n\nUid Admin: คัดลอกหมายเลข ID ของผู้ดูแลระบบ (Admin)\n\nName Admin: คัดลอกชื่อของผู้ดูแลระบบ\n\nUid page|Page name|Name Admin: คัดลอกข้อมูลรวม 3 อย่าง (ID เพจ, ชื่อเพจ และชื่อแอดมิน)\n\nOther formats ...: เลือกรูปแบบการคัดลอกอื่นๆ ที่ผู้ใช้กำหนดเอง\n\nDelete selected: ลบรายการที่ถูกเลือกไว้ออก\n\nSwitch categories: เปลี่ยนกลุ่มหรือประเภทให้กับรายการที่เลือกไว้\n\nPage function: จัดการคำสั่งต่างๆ ที่เกี่ยวกับเพจ\n\nCreate a location page: ใช้สำหรับสร้างหน้าเพจใหม่ที่เน้นระบุตำแหน่งที่ตั้งทางธุรกิจ (Location-based page)\n\nShare administrative rights: ใช้สำหรับส่งต่อหรือเพิ่มสิทธิ์การเป็นผู้ดูแล (Admin) ให้กับบัญชีอื่น\n\nPersonal page: ใช้สำหรับส่งสิทธิ์ผู้ดูแลเพจให้กับ \"บัญชีผู้ใช้ส่วนตัว\" (Personal Profile) โดยตรง เหมาะสำหรับการเพิ่มทีมงานหรือบัญชีสำรองส่วนบุคคล\n\nBM indicated: ใช้สำหรับส่งสิทธิ์การจัดการเพจเข้าไปยัง \"บัญชีธุรกิจ\" (Business Manager - BM)\n\nCheck page information: ดึงข้อมูลรายละเอียดเชิงลึกของเพจ\n\nDelete page (disable): สั่งยกเลิกการใช้งานเพจหรือปิดเพจนั้นๆ\n\nReactivate the page: ใช้สำหรับกู้คืนหรือกลับมาเปิดใช้งานเพจที่เคยถูกปิดไปอีกครั้ง\n\nChrome: ดำเนินการกู้คืนสถานะเพจผ่านทางเบราว์เซอร์ Chrome โดยตรง ระบบจะจำลองการเข้าถึงผ่านหน้าเว็บเพื่อทำรายการ\n\nToken: ดำเนินการกู้คืนโดยใช้รหัส Access Token ซึ่งเป็นวิธีการทางเทคนิคที่รวดเร็วและช่วยข้ามขั้นตอนบางประการในหน้าเว็บปกติ เหมาะสำหรับการจัดการในปริมาณมาก\n\nCheck avatars and covers: ตรวจเช็กความถูกต้องหรือสถานะการแสดงผลของรูป Avatar (Profile picture) และรูป Cover ของเพจ\n\nUse proxies by account: ระบบจะใช้ Proxy ที่ผูกไว้กับบัญชีนั้นๆ ในการเชื่อมต่อเพื่อเข้าไปตรวจสอบรูปภาพ เหมาะสำหรับการจัดการหลายบัญชีเพื่อป้องกันการตรวจจับจากแพลตฟอร์ม\n\nDo not use proxies: ระบบจะใช้เครือข่ายอินเทอร์เน็ตปกติของเครื่องคอมพิวเตอร์ในการเชื่อมต่อโดยตรงเพื่อตรวจสอบรูปภาพ\n\nDelete admin page: สั่งถอดถอนสิทธิ์ผู้ดูแลออกจากเพจที่เลือกไว้\n\nOpen the browser: เปิดลิงก์หรือข้อมูลที่เกี่ยวข้องผ่านเว็บเบราว์เซอร์ (Chrome)\n\nOther function: เมนูรวมคำสั่งเสริมเพิ่มเติมที่ไม่ได้อยู่ในหมวดหมู่หลัก\n\nDelete duplicate pages: ระบบจะทำการตรวจสอบรายการเพจที่มีชื่อหรือข้อมูลซ้ำซ้อนกัน และทำการลบออก\n\nGet tokens: ใช้สำหรับสร้างหรือดึงรหัส Token ของเพจหรือบัญชี เพื่อนำไปใช้ในฟังก์ชันอัตโนมัติอื่นๆ\n\n",
                "type": "markdown",
                "images": [
                  "image705.png"
                ]
              }
            ]
          },
          {
            "id": "cat_afp7a",
            "name": "การใช้งานฟังก์ชั่นอื่นๆ",
            "sections": []
          },
          {
            "id": "cat_ks6aa",
            "name": "อธิบายเมนูฟังก์ชั่นการทำงาน Action list",
            "sections": [
              {
                "title": "อธิบายเมนูฟังก์ชั่นการทำงาน Action list",
                "content": "",
                "type": "markdown",
                "images": [
                  "image776.png"
                ]
              },
              {
                "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
                "content": "Seeding function\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Buff follows personal page (บัฟการติดตามเพจส่วนตัว)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image132.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลา",
                "content": "Waiting time: ระยะเวลาเริ่มรอ\n\nArrive: ระยะเวลาสิ้นสุดการรอ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รายการเป้าหมาย (List of personal page UIDs)",
                "content": "รูปแบบข้อมูล: ใส่ UID (User ID) ของบัญชีส่วนตัวที่ต้องการ\n\nจำนวน: ระบบจะแสดงตัวเลขในวงเล็บ (0) เพื่อบอกจำนวน UID ทั้งหมดที่คุณใส่ลงไปในรายการ\n\nวิธีใส่: พิมพ์หรือคัดลอก UID มาวาง โดยปกติจะใส่ 1 UID ต่อ 1 บรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Buff like and comment on the article (กดไลค์และแสดงความคิดเห็น)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image557.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลาและการโต้ตอบ",
                "content": "Post spacing: กำหนดเวลาพักระหว่างแต่ละโพสต์\n\narrive: กำหนดระยะเวลาที่จะให้บัญชีอยู่ในหน้าโพสต์นั้นๆก่อน\n\nInteract: กำหนดจำนวนโพสต์ที่จะให้แต่ละบัญชีเข้าไปกดไลก์หรือคอมเมนต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "รายการโพสต์เป้าหมาย",
                "content": "Danh sách Id/link bài viết: ช่องสำหรับใส่ ID หรือ URL ของโพสต์ที่ต้องการไปเพิ่มยอด\n\nOption: เลือกลักษณะการโต้ตอบ\n\nEach page interacts with one post: 1 เพจ ต่อ 1 โพสต์\n\nOne post interacts with multiple pages: 1 โพสต์ ต่อ หลายเพจ\n\nDelete id after use: หากติ๊กถูก ระบบจะลบลิงก์ทิ้งทันทีเมื่อทำงานเสร็จ เพื่อป้องกันการทำงานซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแชร์",
                "content": "Share on story: แชร์โพสต์ไปยังสตอรี่\n\nShare on wall: แชร์โพสต์ไปยังหน้าวอลล์ (ไทม์ไลน์)\n\nContent: ใส่ข้อความที่จะให้เขียนกำกับเวลาแชร์\n\nOption: เลือกรูปแบบข้อความ\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก(Release Emotions)",
                "content": "ปุ่มเลือก: สามารถเลือกไอคอนความรู้สึกได้หลากหลาย เช่น Like, Love, Care, Haha, Wow, Sad, Angry\n\nการสุ่ม: ระบบมักจะสุ่มไอคอนที่คุณเลือกเพื่อให้ดูเป็นธรรมชาติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การคอมเมนต์",
                "content": "Text comment: ใส่เนื้อหาคอมเมนต์ในช่องว่าง\n\nSpin Content: ใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มคำพูด ไม่ให้ซ้ำกัน\n\nTag: สามารถใช้คำสั่ง [@uid] เพื่อแท็กผู้ใช้ได้\n\nOption: เลือกรูปแบบข้อความ\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\nComment photo: ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ พร้อมระบุที่อยู่ไฟล์ (Photo folder) ในคอมพิวเตอร์\n\nExport link: ติ๊กถูกเพื่อให้ระบบบันทึกหรือส่งออกลิงก์ที่คอมเมนต์สำเร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Buff like, follow page (กดไลค์และติดตามเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image19.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลา",
                "content": "Delay time: ใส่ตัวเลขวินาทีเริ่มต้นที่ต้องการให้ระบบรอ\n\nArrive: ใส่ตัวเลขวินาทีสิ้นสุด\n\nตัวอย่าง: หากตั้งค่าไว้ 5 ถึง 10 วินาที ระบบจะสุ่มเวลาพักระหว่างการกดแต่ละเพจในช่วง 5-10 วินาที เพื่อให้ดูเหมือนพฤติกรรมมนุษย์จริงๆ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เลือกรูปแบบการทำงาน (Action options)",
                "content": "Follow the page: สั่งให้ระบบกด \"ติดตาม\" เพจ\n\nLike the page: สั่งให้ระบบกด \"ถูกใจ\" เพจ\n\nคำแนะนำ: คุณสามารถเลือกทำทั้งสองอย่างพร้อมกัน หรือเลือกเพียงอย่างใดอย่างหนึ่งก็ได้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การใส่รายชื่อเพจ (List of page ids/links)",
                "content": "คุณสามารถใส่เป็น ID ของเพจ หรือ Link (URL) ของเพจ ก็ได้\n\nใส่ 1 รายการต่อ 1 บรรทัด\n\nตัวเลขในวงเล็บ (0) จะแสดงจำนวนรายการทั้งหมดที่คุณใส่ลงไปในรายการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Spam posts (group, page, profile) (โพสต์สแปม (กลุ่ม เพจ โปรไฟล์))",
                "content": "",
                "type": "markdown",
                "images": [
                  "image591.png"
                ]
              },
              {
                "title": "ส่วนตั้งค่าจำนวนและการหน่วงเวลา",
                "content": "Number of ids: กำหนดจำนวนบัญชีที่จะใช้\n\nNumber of posts/id: กำหนดจำนวนโพสต์ที่แต่ละบัญชีจะดำเนินการ\n\nDelay time: ระยะเวลาหน่วงระหว่างแต่ละการกระทำ\n\nSweep: จำนวนโพสต์ที่จะทำการกวาด (Sweep) ในหนึ่งรอบการทำงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนจัดการเป้าหมาย",
                "content": "List of ids: ช่องสำหรับใส่ ID ของกลุ่ม (Group), เพจ (Page) หรือโปรไฟล์ (Profile) ที่ต้องการเข้าถึง\n\nDelete the used id: หากติ๊กเลือก ระบบจะลบ ID ออกจากรายการทันทีเมื่อทำงานเสร็จสิ้น เพื่อไม่ให้เกิดการทำงานซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนการโต้ตอบและอารมณ์",
                "content": "Release emotions: ติ๊กเพื่อเลือกให้แสดงความรู้สึกอัตโนมัติ (Like, Love, Haha, Wow, Sad, Angry)\n\nText comment: ช่องสีขาวขนาดใหญ่สำหรับพิมพ์ข้อความคอมเมนต์\n\nSpin Content {a|b|c}: รองรับการสลับคำเพื่อให้ข้อความไม่ซ้ำกัน\n\nOption: เลือกรูปแบบเนื้อหา\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\nComment photo: ติ๊กเพื่อแนบรูปภาพในคอมเมนต์ โดยสามารถระบุที่อยู่ไฟล์ (Path) ในคอมพิวเตอร์ของคุณได้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนเงื่อนไขและลำดับการทำงาน",
                "content": "Skip ... first article: ข้ามโพสต์แรกๆ (เช่น ข้าม 2-3 โพสต์แรกที่เป็นโพสต์ปักหมุด)\n\nShare on wall: แชร์โพสต์ไปยังหน้าวอลล์ของบัญชีที่ใช้งาน\n\nDo not comment on old posts: ไม่คอมเมนต์โพสต์เก่า เพื่อเน้นโพสต์ที่เป็นปัจจุบัน\n\nEdit comments: แก้ไขคอมเมนต์เดิม (ถ้ามี)\n\nGet the article: เลือกลำดับการดึงโพสต์ เช่น \"In order\" (ตามลำดับ) หรือ \"Unexpectedly\" (แบบสุ่ม)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนการบันทึกและจัดการไฟล์",
                "content": "Export link: ส่งออกลิงก์ที่ดำเนินการแล้วเพื่อเก็บเป็นรายงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Spam posts by keywords (โพสต์สแปมตามคีย์เวิร์ด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image83.png"
                ]
              },
              {
                "title": "การตั้งค่าจำนวนและเวลา",
                "content": "Number of keywords/page: จำนวนคีย์เวิร์ดที่จะใช้ค้นหาต่อหนึ่งหน้า\n\nNumber of articles/keywords: จำนวนโพสต์ที่จะเข้าไปดำเนินการต่อหนึ่งคีย์เวิร์ด\n\nDelay time: ระยะเวลาหน่วงระหว่างการทำงานแต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการคีย์เวิร์ด",
                "content": "Keyword list (0): พื้นที่สำหรับใส่คำค้นหาที่ต้องการให้ระบบไปไล่หาโพสต์\n\nDelete used keywords: หากติ๊กถูก ระบบจะลบคีย์เวิร์ดทิ้งหลังจากใช้งานเสร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึกและคอมเมนต์",
                "content": "Release emotions: เลือก \"ความรู้สึก\" ที่ต้องการให้ระบบไปกด (Like, Love, Haha, Wow, Sad, Angry)\n\nText comment: Content (0): ช่องสำหรับใส่ข้อความที่จะนำไปคอมเมนต์\n\nSpin Content {a|b|c}: รองรับการสลับคำอัตโนมัติเพื่อให้ข้อความไม่ซ้ำกัน\n\nOption: เลือกรูปแบบเนื้อหา\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\nComment photo: หากติ๊กเลือก ระบบจะดึงรูปภาพจากโฟลเดอร์ในเครื่องไปแปะในคอมเมนต์ด้วย\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเงื่อนไขการทำงานเพิ่มเติม",
                "content": "Skip ... first article: ข้ามโพสต์แรกๆ ไปกี่โพสต์\n\nShare on wall: ติ๊กเพื่อให้ระบบแชร์โพสต์นั้นลงบนวอลล์ของตัวเองด้วย\n\nDo not comment on old posts: ไม่ลงคอมเมนต์ในโพสต์เก่า\n\nEdit comments: แก้ไขคอมเมนต์\n\nExport link: ติ๊กหากต้องการบันทึกลิงก์ของโพสต์ที่ระบบได้เข้าไปทำงานแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6.Rate the page (ให้คะแนนเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image779.png"
                ]
              },
              {
                "title": "ส่วนตั้งค่าข้อมูลและขีดจำกัด",
                "content": "One page with maximum [ ] id: กำหนดจำนวน ID สูงสุดที่จะให้คะแนนต่อหนึ่งหน้าเพจ\n\nA maximum rating id: [ ] time: กำหนดจำนวนครั้งสูงสุดในการให้คะแนนต่อหนึ่ง ID\n\nList of page ids or links: ช่องสำหรับกรอก รายการ ID ของหน้าเพจ หรือ ลิงก์ URL ที่ต้องการดำเนินการ (แสดงจำนวนรายการในวงเล็บ)\n\nDelete the id when used: หากเลือกไว้ ระบบจะลบ ID ออกจากรายการทันทีเมื่อทำงานเสร็จสิ้น เพื่อป้องกันการทำงานซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนจัดการเนื้อหาและรูปแบบ",
                "content": "Export link: ติ๊กถูกหากต้องการให้ระบบส่งออกลิงก์ที่ดำเนินการแล้ว\n\nOption: เลือกแหล่งที่มาของเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: เลือกรูปแบบคำสั่ง AI\n\nComment AI\n\nReply tin nhắn: ตอบกลับข้อความ\n\nViết bài đăng: เขียนโพสต์\n\nList of page review text: ช่องสำหรับใส่ ข้อความรีวิว ที่ต้องการให้ระบบนำไปโพสต์ (แสดงจำนวนข้อความในวงเล็บ)\n\nOption: เลือกรูปแบบการจัดวางเนื้อหา\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "7.Livestream interaction (การโต้ตอบแบบไลฟ์สตรีม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image15.png"
                ]
              },
              {
                "title": "การต้องค่าข้อมูลพื้นฐานและระยะเวลา",
                "content": "Livestream link: วางลิงก์ของไลฟ์สดที่ต้องการให้ระบบเข้าไปทำงาน\n\nLive viewing time: กำหนดระยะเวลาที่จะให้บัญชีอยู่ในไลฟ์ (หน่วยเป็นวินาที)\n\nตัวอย่าง: ตั้งไว้ 30 ถึง 60 วินาที เพื่อให้ระบบสุ่มเวลาในช่วงนี้ ป้องกันการตรวจจับว่าเป็นบอท\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตอบสนองทางอารมณ์และข้อความ",
                "content": "Release emotions: เลือกประเภทความรู้สึกที่ต้องการส่ง (Like, Love, Care, Haha, Wow, Sad, Angry) สามารถติ๊กเลือกได้หลายแบบเพื่อให้ระบบสุ่มส่ง\n\nText comment: คอมเม้นต์ด้วยข้อความ\n\nContent: ใส่ข้อความที่ต้องการให้คอมเมนต์ (1 บรรทัดต่อ 1 ข้อความ)\n\nDelete used text: หากติ๊กถูก ระบบจะลบข้อความที่ใช้ไปแล้วออกจากรายการ เพื่อไม่ให้ส่งซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแท็กผู้ใช้และการแชร์",
                "content": "Comment the uid tag: สำหรับการแท็กเพื่อนหรือกลุ่มเป้าหมายในคอมเมนต์\n\nList of uids: ใส่รายการ ID ผู้ใช้ที่ต้องการแท็ก\n\nOne maximum tag comment: กำหนดว่าจะให้แท็กกี่คนต่อ 1 คอมเมนต์\n\nDelete used uid: ลบ ID ที่ถูกแท็กไปแล้วออกจากรายการ\n\nSocial Sharing:\n\nShare on wall: แชร์ไลฟ์สดไปยังหน้าโปรไฟล์หลัก\n\nShare on story: แชร์ไลฟ์สดไปยังสตอรี่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเพิ่มเติม",
                "content": "Repeat action: ติ๊กเพื่อให้ระบบวนลูปทำงานซ้ำตามค่าที่ตั้งไว้\n\nRepeat later: กำหนดช่วงเวลาที่จะให้ระบบ \"พัก\" ก่อนจะเริ่มทำงานซ้ำในรอบถัดไป\n\nช่องตัวเลข (1 arri 1 second): คือการตั้งค่าสุ่มเวลาพัก (หน่วยเป็นวินาที) เช่น ถ้าตั้ง 60 ถึง 120 ระบบจะสุ่มหยุดพักในช่วงเวลานี้ก่อนเริ่มรอบใหม่ เพื่อความเป็นธรรมชาติ\n\nตัวเลือกกิจกรรมที่ต้องการทำซ้ำ (เลือกได้มากกว่า 1 อย่าง):\n\nText comment: ให้กลับไปสุ่มคอมเมนต์ข้อความซ้ำอีกครั้ง\n\nComment the uid tag: ให้กลับไปทำการแท็ก UID ซ้ำ (ระบบจะดึง UID ใหม่จากลิสต์ที่เหลืออยู่)\n\nShare on wall: ให้ทำการแชร์ลงหน้าโปรไฟล์ซ้ำ\n\nShare on story: ให้ทำการแชร์ลงสตอรี่ซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "8.Post on another page's wall (reminders) (โพสต์บนหน้าเพจอื่น)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image65.png"
                ]
              },
              {
                "title": "ส่วนการตั้งค่าความถี่และเป้าหมาย",
                "content": "Maximum posting per page: จำนวนโพสต์สูงสุดที่จะให้ลงในแต่ละเพจ\n\nOne maximum posting id: จำกัดจำนวนครั้งที่บัญชีหนึ่ง ๆ จะใช้โพสต์\n\nPosting distance: ระยะห่างระหว่างการโพสต์แต่ละครั้ง ช่วยลดความเสี่ยงในการถูกมองว่าเป็นสแปม\n\nList of page ids or links: ช่องสำหรับใส่ ID ของเพจ หรือลิงก์ URL ของเพจเป้าหมายที่ต้องการไปโพสต์\n\nDelete the id when used: หากเลือกไว้ ระบบจะลบรายชื่อเพจออกจากรายการทันทีเมื่อโพสต์สำเร็จ เพื่อป้องกันการโพสต์ซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนการจัดการเนื้อหาและรูปแบบ",
                "content": "Export link: ตัวเลือกสำหรับการแนบลิงก์ออกไปในโพสต์\n\nDocument: เมื่อติ๊กส่วนนี้ คุณสามารถเลือกแหล่งที่มาของเนื้อหาได้\n\nOption: เลือกรูปแบบเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: กรณีใช้ AI ช่วยเขียน สามารถเลือกคำสั่ง (Prompt) ได้จากตรงนี้\n\nComment AI\n\nReply tin nhắn: ตอบกลับข้อความ\n\nViết bài đăng: เขียนโพสต์\n\nContent: ช่องสำหรับพิมพ์ข้อความที่ต้องการโพสต์\n\nSpin Content: รองรับการใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มคำสลับกันไปในแต่ละโพสต์ (ป้องกันเนื้อหาซ้ำซ้อน)\n\nOption: เลือกว่าจะให้อ่านเนื้อหาแบบไหน\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนการตั้งค่ารูปภาพ",
                "content": "Post photos: ติ๊กถูกหากต้องการให้มีรูปภาพในโพสต์ด้วย\n\nPhoto folder: ระบุที่อยู่ของโฟลเดอร์ในเครื่องคอมพิวเตอร์ที่เก็บรูปภาพไว้ ระบบจะดึงรูปจากโฟลเดอร์ไปโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "9.Spam replies to comments by keyword (การตอบกลับสแปมต่อความคิดเห็นโดยใช้คีย์เวิร์ด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image383.png"
                ]
              },
              {
                "title": "กำหนดขอบเขตและจำนวน",
                "content": "Number of Keywords: กำหนดว่าจะใช้คีย์เวิร์ดกี่คำในการค้นหา\n\nNumber of post: จำนวนโพสต์ที่จะเข้าไปจัดการต่อ 1 คีย์เวิร์ด\n\nNumber of comment: จำนวนคอมเมนต์ที่จะไปตอบโต้ (Reply) ในแต่ละโพสต์\n\nDelay time: ระยะเวลาหน่วง ระหว่างแต่ละการกระทำ เพื่อลดการโดนบล็อกหรือตรวจจับจากระบบ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการคีย์เวิร์ด",
                "content": "Keyword list: ช่องสำหรับใส่คำค้นหาที่ต้องการให้ระบบไปไล่ดูคอมเมนต์\n\nSearch type: เลือกประเภทการค้นหา\n\nBài viết: โพสต์\n\nPage: เพจ\n\nNhóm: กลุ่ม\n\nDelete used keywords: หากติ๊กถูก ระบบจะลบคีย์เวิร์ดทิ้งหลังจากใช้งานเสร็จแล้ว\n\nIgnore spam posts: ข้ามโพสต์ที่ระบบวิเคราะห์ว่าเป็นสแปมอยู่แล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตอบโต้ด้วยอารมณ์และข้อความ",
                "content": "Release emotions: ติ๊กเพื่อกดแสดงความรู้สึก (Like, Love, Haha, ฯลฯ)\n\nText comment: ส่วนการตอบกลับด้วยข้อความ\n\nOption: เลือกรูปแบบเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt สำเร็จรูปให้เลือกใช้ตามวัตถุประสงค์ดังนี้\n\nComment AI: สร้างข้อความคอมเมนต์\n\nReply tin nhắn: ร่างข้อความตอบกลับ\n\nViết bài đăng: ร่างเนื้อหาสำหรับนำไปโพสต์ใหม่\n\nContent: ช่องสำหรับพิมพ์ข้อความที่ต้องการตอบกลับ รองรับระบบ Spin Content {a|b|c} เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nOption: เลือกว่าจะให้อ่านเนื้อหาแบบไหน\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\nComment photo: หากต้องการตอบกลับด้วยรูปภาพ ให้ติ๊กเลือกและระบุที่อยู่ไฟล์ (Path) ในช่อง Photo folder\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การบันทึกและส่งออก",
                "content": "Export link: ติ๊กเพื่อให้ระบบบันทึกหรือส่งออกลิงก์ของคอมเมนต์/โพสต์ที่เราได้เข้าไปทำงานไว้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10.Spam replies to comments (group, page,profile) (การตอบกลับสแปมในความคิดเห็น (กลุ่ม เพจ โปรไฟล์))",
                "content": "",
                "type": "markdown",
                "images": [
                  "image365.png"
                ]
              },
              {
                "title": "การตั้งค่าจำนวนและเวลา",
                "content": "Number of ids/page: กำหนดจำนวน ID หรือจำนวนหน้าที่จะให้โปรแกรมเข้าไปทำงาน\n\nPost number/id: จำนวนโพสต์ต่อ 1 ID ที่จะให้เข้าไปตอบคอมเมนต์\n\nNumber of comment: จำนวนคอมเมนต์ที่จะให้เข้าไปตอบต่อ 1 โพสต์\n\nDelay time: ระยะเวลาหน่วงระหว่างการทำงาน เพื่อลดการโดนตรวจจับว่าเป็นสแปม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ากลุ่มเป้าหมาย",
                "content": "List of ids or links: ช่องสำหรับใส่รายชื่อ ID  หรือลิงก์ที่ต้องการให้โปรแกรมเข้าไปทำงาน\n\nDelete the used id: หากติ๊กถูก โปรแกรมจะลบ ID หรือลิงก์นั้นออกจากรายการทันทีเมื่อทำงานเสร็จสิ้น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาข้อความ",
                "content": "Content: ช่องสำหรับใส่ข้อความที่จะใช้ตอบกลับ\n\nSpin Content: รองรับการใช้รูปแบบ {a|b|c} เพื่อให้โปรแกรมสุ่มคำพูดที่แตกต่างกันในแต่ละคอมเมนต์ (ช่วยลดโอกาสการถูกบล็อก)\n\nOption: เลือกรูปแบบการอ่านข้อความ\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าไฟล์ภาพและส่วนเสริม",
                "content": "Comment photo: ติ๊กถูกเพื่อแนบรูปภาพไปกับคอมเมนต์\n\nPhoto folder: ระบุที่อยู่ไฟล์ (Path) ของโฟลเดอร์รูปภาพในคอมพิวเตอร์\n\nExport link: ติ๊กถูกเพื่อให้โปรแกรมบันทึกหรือส่งออกลิงก์ที่ได้ทำการคอมเมนต์สำเร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "11.Spam replies to comments on specified posts (การตอบกลับสแปมต่อความคิดเห็นในโพสต์ที่ระบุ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image103.png"
                ]
              },
              {
                "title": "การกำหนดเป้าหมายและความถี่",
                "content": "Number of ids/page: ตั้งค่าจำนวน ID ที่จะให้ทำงานต่อหนึ่งหน้า\n\nNumber of comment: ตั้งค่าจำนวนคอมเมนต์ที่จะให้ตอบกลับ\n\nDelay time: ระยะเวลาหน่วงระหว่างการทำงาน เพื่อลดการโดนตรวจจับว่าเป็นบอท\n\nList of article ids or links: ช่องสำหรับใส่ URL หรือ ID ของโพสต์เป้าหมายที่ต้องการให้บอทเข้าไปตอบคอมเมนต์\n\nIgnore replied comments: หากติ๊กเลือก ระบบจะข้ามคอมเมนต์ที่เคยตอบไปแล้ว\n\nDelete the used id: หากติ๊กเลือก ระบบจะลบ ID นั้นออกหลังจากใช้งานเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึก",
                "content": "Release emotions: เปิด/ปิด ฟังก์ชันการกด Reaction\n\nตัวเลือก Icon: สามารถเลือกประเภทความรู้สึกได้ เช่น Like, Love, Care, Haha, Wow, Sad หรือ Angry\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาข้อความ (Text Comment)",
                "content": "Option: เลือกรูปแบบเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: เลือกชุดคำสั่ง AI ในการช่วยตอบ\n\nComment AI: สร้างข้อความคอมเมนต์\n\nReply tin nhắn: ร่างข้อความตอบกลับ\n\nViết bài đăng: ร่างเนื้อหาสำหรับนำไปโพสต์ใหม่\n\nContent: ช่องสำหรับพิมพ์ข้อความที่ต้องการ โดยรองรับระบบ Spin Content เช่น {a|b|c} เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nOption: เลือกรูปแบบการแสดงผล\n\nOne-line content: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: หลายบรรทัด คือ 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าส่วนเสริมและสื่อ",
                "content": "Comment photo: หากติ๊กเลือก ระบบจะแนบรูปภาพไปกับคอมเมนต์ด้วย โดยต้องระบุที่อยู่โฟลเดอร์รูปภาพในช่อง Photo folder\n\nExport link: หากติ๊กเลือก ระบบจะทำการส่งออก (Export) ลิงก์ที่ได้ไปดำเนินการเสร็จสิ้นแล้วเก็บไว้เป็นหลักฐาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "12.Spam replies to specified comments (การตอบกลับสแปมต่อความคิดเห็นที่ระบุไว้)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image143.png"
                ]
              },
              {
                "title": "การตั้งค่ากำหนดเป้าหมาย",
                "content": "List of comment ids: ช่องสำหรับใส่รหัส ID ที่ต้องการ โดยต้องพิมพ์ในรูปแบบ ID POST_ID COMMENT (ตามตัวอย่างในภาพคือ 123456_123456)\n\nDelete the used id: หากติ๊กถูก โปรแกรมจะลบ ID นั้นออกจากรายการทันทีหลังจากทำงานเสร็จ เพื่อป้องกันการทำงานซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าความเร็วและปริมาณ",
                "content": "Number of ids/page: ตั้งค่าจำนวน ID ที่จะให้ทำต่อหนึ่งเพจ\n\nDelay time: ระยะเวลาหน่วงระหว่างการทำงานแต่ละครั้ง เช่น ตั้งไว้ 5 ถึง 10 วินาที เพื่อให้ดูเป็นธรรมชาติเหมือนมนุษย์ใช้งาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารูปแบบการตอบกลับ",
                "content": "Release emotions: เลือก \"ความรู้สึก\" (Like, Love, Wow, ฯลฯ) ที่ต้องการให้โปรแกรมไปกดที่คอมเมนต์เป้าหมาย\n\nText comment:\n\nOption: เลือกแหล่งที่มาของข้อความ เช่น Custom Content (พิมพ์เอง)\n\nSelect Prompt: เลือกใช้ AI ในการช่วยคิดคำตอบ (Comment AI)\n\nContent Box: ช่องสำหรับใส่ข้อความที่ต้องการตอบกลับ รองรับระบบ Spin Content โดยใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มคำพูดไม่ให้ซ้ำกัน\n\nComment photo: หากต้องการตอบกลับด้วยรูปภาพ ให้ติ๊กถูกแล้วเลือก Path หรือโฟลเดอร์เก็บรูปภาพในเครื่องคอมพิวเตอร์ของคุณ\n\nExport link: ติ๊กถูกเพื่อให้โปรแกรมบันทึกหรือส่งออกลิงก์ที่ทำงานสำเร็จแล้วออกมาให้ตรวจสอบ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "13.Edit comments (แก้ไขความคิดเห็น)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image452.png"
                ]
              },
              {
                "title": "การตั้งค่าจัดการรายการข้อความ",
                "content": "Text list (0): ช่องว่างสำหรับพิมพ์หรือวางข้อความที่ต้องการใช้ ตัวเลขในวงเล็บจะแสดงจำนวนรายการข้อความที่มีอยู่\n\nDelete text when used: หากติ๊กถูก ระบบจะลบข้อความออกจากรายการทันทีหลังจากที่ถูกนำไปใช้งานแล้ว (ป้องกันการใช้ซ้ำ)\n\nContent options: ตัวเลือกรูปแบบเนื้อหา\n\nOne-line content: 1 บรรทัด = 1 คอมเมนต์\n\nContent many lines: ข้อความทั้งหมดในช่อง Text list คือ 1 คอมเมนต์เดียว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าปริมาณ",
                "content": "One page with maximum: กำหนดจำนวนคอมเมนต์สูงสุดที่จะให้ระบบทำงานต่อหนึ่งหน้า\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวเลือกการสแกนและการจัดเรียง",
                "content": "Comment scanning options: เลือกขอบเขตการสแกนคอมเมนต์\n\nAll comments: สแกนความคิดเห็น \"ทั้งหมด\"\n\nJust comment within the group: สแกน \"เฉพาะความคิดเห็นที่อยู่ในกลุ่ม\" ที่กำหนดไว้เท่านั้น\n\nSort comments: เลือกการเรียงลำดับคอมเมนต์\n\nIn order: รียงตามลำดับ\n\nAbsolutely: การดึงข้อมูลแบบ \"ตายตัว\"\n\nExport link: หากติ๊กถูก ระบบจะทำการส่งออกลิงก์ที่เกี่ยวข้องหลังจากทำงานเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "14.Post reel (โพสต์คลิปรีล)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image585.png"
                ]
              },
              {
                "title": "การจัดการวิดีโอ",
                "content": "Video folder: ระบุที่อยู่ไฟล์ (Path) ในเครื่องคอมพิวเตอร์ของคุณที่เก็บคลิปวิดีโอไว้\n\nVideo selection options: เลือกรูปแบบการนำวิดีโอมาโพสต์\n\nIn order: เรียงตามลำดับ\n\nRandom: สุ่ม\n\nDelete video file when finished posting: หากติ๊กถูก โปรแกรมจะลบไฟล์วิดีโอออกจากเครื่องทันทีเมื่อโพสต์เสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเวลาและปริมาณ",
                "content": "One page posted: จำนวนวิดีโอที่จะให้โพสต์ต่อ 1 เพจ\n\nVideo upload time: เวลารอสำหรับการอัปโหลดวิดีโอ\n\nPosting distance: ระยะห่างระหว่างการโพสต์แต่ละครั้ง เพื่อความเป็นธรรมชาติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "15.Delete page post (ลบโพสต์หน้าเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image490.png"
                ]
              },
              {
                "title": "การตั้งค่ารายละเอียดการลบ",
                "content": "Sweep: กำหนดจำนวนรอบในการกวาดหาโพสต์ เพื่อดึงข้อมูล \"latest article\" หรือโพสต์ล่าสุด\n\nNumber of deletions: ระบุจำนวนโพสต์ที่ต้องการลบในแต่ละครั้ง\n\nDistance: เป็นการตั้งค่าการสุ่มเวลาเพื่อไม่ให้ระบบตรวจจับว่าเป็นบอท\n\nDelete options: เมนูสำหรับเลือกว่าจะลบแบบไหน\n\nDelete all posts: ลบโพสต์ทั้งหมด\n\nDelete latest post: ลบโพสต์ล่าสุด\n\nDelete oldest post: ลบโพสต์เก่าที่สุด\n\nDelete posts by date range: ลบโพสต์ตามช่วงวันที่\n\nPage interactions\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Read the announcement (อ่านประกาศ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image346.png"
                ]
              },
              {
                "title": "การกำหนดค่าการแสดงผล",
                "content": "Quantity: จำนวนที่ต้องการอ่าน\n\nWaiting time: ระยะเวลาพัก ขั้นต่ำหลังจากจบแต่ละรอบ\n\nViewing options: รูปแบบการแสดงผล\n\nSequence: ตามลำดับ\n\nRandom: สุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Reel interaction (ปฏิสัมพันธ์ของรีล)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image619.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลาและปริมาณ",
                "content": "Waiting time: ตั้งค่าเวลาหน่วงในการดู Reel\n\nAn interactive page: จำนวนคลิป Reel ที่ต้องการให้โปรแกรมเข้าไปมีปฏิสัมพันธ์ด้วย\n\nWaiting time for link transfer: ระยะเวลาพักระหว่างการเปลี่ยนจากลิงก์หนึ่งไปอีกลิงก์หนึ่ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการลิงก์เป้าหมาย",
                "content": "List of id or link reel: วางไอดีหรือลิงก์ของคลิป Reel ที่ต้องการให้ระบบเข้าไปทำงาน\n\nAutomatically delete links when interacted: หากติ๊กถูก ระบบจะลบลิงก์ออกจากรายการทันทีหลังจากทำงานเสร็จ เพื่อป้องกันการทำงานซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การแสดงความรู้สึกและคอมเมนต์",
                "content": "Release emotions: ติ๊กเพื่อเลือกกด \"ความรู้สึก\" (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nText comment: ติ๊กเพื่อพิมพ์ข้อความแสดงความคิดเห็น\n\nContent: ช่องสำหรับใส่ข้อความ (รองรับระบบ Spin Content เช่น {ดีมาก|สุดยอด|สวยมาก} เพื่อสุ่มข้อความ)\n\nOption: เลือกรูปแบบการคอมเมนต์\n\nOne-line content:1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: ทุกบรรทัดในช่อง Content คือข้อความเดียวกันทั้งหมด\n\nComment photo: ติ๊กหากต้องการคอมเมนต์ด้วยรูปภาพ พร้อมช่องระบุที่อยู่โฟลเดอร์รูปภาพในเครื่อง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Post (โพสต์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image577.png"
                ]
              },
              {
                "title": "การตั้งค่าจำนวนการโพสต์",
                "content": "One page posted: ตั้งค่าจำนวนขั้นต่ำที่จะโพสต์ต่อหนึ่งเพจ/บัญชี\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการเนื้อหา",
                "content": "Option: เลือกรูปแบบเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: กรณีใช้งานร่วมกับ AI สามารถเลือกคำสั่งที่ตั้งไว้ได้\n\nComment AI: ให้ AI เขียน \"ข้อความแสดงความคิดเห็น\"\n\nReply tin nhắn: ให้ AI ตอบกลับข้อความ\n\nViết bài đăng: ให้ AI \"เขียนเนื้อหาโพสต์ใหม่\"\n\nContent (0): ช่องว่างสำหรับพิมพ์หรือวางข้อความที่จะนำไปโพสต์\n\nDelete text when used: หากติ๊กเลือก ระบบจะลบข้อความนั้นทิ้งทันทีหลังจากโพสต์สำเร็จ\n\nContent options: เลือกว่าเนื้อหาถูกแบ่งแบบใด\n\nOne-line content: 1 บรรทัด = 1 โพสต์\n\nContent many lines: ข้อความทั้งหมดที่ใส่ไว้ = 1 โพสต์เดียว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการรูปภาพ",
                "content": "Photo folder: ระบุตำแหน่ง (Path) ของโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nNumber of photos/article: กำหนดจำนวนรูปที่จะใช้ต่อ 1 โพสต์\n\nDelete photos when used: ลบไฟล์ภาพออกจากเครื่องทันทีเมื่อโพสต์เสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ส่วนเสริมและการตั้งค่าอื่น ๆ",
                "content": "Schedule: ติ๊กเพื่อตั้งเวลาโพสต์ล่วงหน้า\n\nScheduling type: รูปแบบการเว้นระยะ เพื่อไม่ให้บัญชีถูกแบนจากการโพสต์ถี่เกินไป\n\nOption 1 (eg post 2 hours apart): ระบบจะคำนวณเวลาโพสต์โดยนับจากเวลาเริ่มต้น แล้วบวกเพิ่มไปตามระยะที่กำหนด (เช่น ทุกๆ 2 ชั่วโมง)\n\nOption 2 (eg 11am every day): ระบบจะทำการโพสต์ในเวลาเดิมที่กำหนดไว้ทุกๆ วัน (เช่น ตั้งไว้ 11 โมงเช้า พรุ่งนี้ 11 โมงก็จะโพสต์อีก)\n\nStarting date: วันที่ต้องการให้เริ่มงาน\n\nTime: เวลาที่ต้องการให้เริ่มทำงาน\n\nPost interaction after posting: ติ๊กเพื่อให้ระบบทำปฏิกิริยาหลังโพสต์ (เช่น กดไลก์ตัวเอง หรือคอมเมนต์) สามารถกด Setting เพื่อตั้งค่าเพิ่ม\n\nAdd a send message button: เพิ่มปุ่ม \"ส่งข้อความ\" ไว้ใต้โพสต์\n\nExport link: ติ๊กเพื่อให้ระบบบันทึกลิงก์ของโพสต์ที่ทำสำเร็จออกมาเป็นไฟล์\n\nDelete link (Post with link): ลบลิงก์ออกหลังจากโพสต์เสร็จ (กรณีที่เป็นการโพสต์แบบใช้ Link)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Breaks (หยุดพัก)",
                "content": "Waiting time: ระยะเวลาที่ต้องการหยุดพักก่อนจะทำงานในขั้นตอนถัดไป\n\n",
                "type": "markdown",
                "images": [
                  "image266.png"
                ]
              },
              {
                "title": "5.Post stories (โพสต์สตอรี่)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image701.png"
                ]
              },
              {
                "title": "การตั้งค่าการโพสต์",
                "content": "One page posted: กำหนดจำนวนสตอรี่ที่จะโพสต์ต่อหนึ่งเพจ\n\nPosting distance: ระยะห่างระหว่างการโพสต์แต่ละครั้ง เพื่อลดโอกาสการโดนบล็อก\n\nPhoto folder: ตำแหน่งที่จัดเก็บรูปภาพในเครื่องคอมพิวเตอร์ของคุณที่ต้องการให้นำไปโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการปุ่มและลิงก์",
                "content": "Add button: ติ๊กถูกเพื่อเปิดใช้งานการเพิ่มปุ่มบนสตอรี่\n\nButton Type: เลือกประเภทของปุ่ม\n\nView store: ดูร้านค้า\n\nSee more: ดูเพิ่มเติม\n\nFind out more: หาข้อมูลเพิ่มเติม\n\nBuy now: ซื้อเลย\n\nBook now: จองเลย\n\nLink list: ช่องสำหรับใส่ URL หรือลิงก์ที่ต้องการให้ปุ่มเชื่อมโยงไป คุณสามารถใส่ได้หลายลิงก์\n\nRemove link when in use: หากติ๊กช่องนี้ ระบบจะลบลิงก์ออกจากรายการทันทีหลังจากถูกนำไปโพสต์แล้ว\n\nExport link: ติ๊กถูกหากต้องการให้ระบบส่งออกข้อมูลลิงก์ที่ใช้งานแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6.Post the specified uid tag (โพสต์แท็ก uid ที่ระบุ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image773.png"
                ]
              },
              {
                "title": "การกำหนดค่าการโพสต์",
                "content": "Maximum posting per page: กำหนดจำนวนโพสต์สูงสุดต่อหนึ่งเพจ\n\nMaximum tag per article: กำหนดจำนวน UID ที่จะถูกแท็กสูงสุดต่อหนึ่งโพสต์\n\nPosting distance: การตั้งค่าระยะห่างเวลาในการโพสต์แต่ละครั้ เพื่อลดโอกาสการถูกบล็อก โดยระบบจะสุ่มเวลาในช่วงที่ระบุ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการรายชื่อ UID",
                "content": "List of uids: ช่องสำหรับใส่รายการ ID ผู้ใช้ที่ต้องการนำไปแท็กในโพสต์\n\nDelete uid when used: หากติ๊กถูก ระบบจะลบ UID นั้นออกจากรายการทันทีหลังจากใช้งานเสร็จ เพื่อป้องกันการแท็กซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการเนื้อหาและตัวเลือกเสริม",
                "content": "Export link: หากติ๊กถูก ระบบจะทำการส่งออก (Export) ลิงก์ของโพสต์ที่ทำสำเร็จเก็บไว้\n\nAdd text to the beginning of the post: เปิดใช้งานการเพิ่มข้อความนำหน้าการแท็ก\n\nOption: เลือกรูปแบบเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: เลือกคำสั่ง AI กรณีใช้ระบบช่วยเขียน\n\nComment AI\n\nReply tin nhắn: ตอบกลับข้อความ\n\nViết bài đăng: เขียนโพสต์\n\nContent: ช่องสำหรับพิมพ์ข้อความที่ต้องการให้แสดงก่อนการแท็ก UID\n\nDelete text when used: หากติ๊กถูก ระบบจะลบข้อความนั้นออกหลังจากโพสต์เสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "7.Respond to messages (ตอบกลับข้อความ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image582.png"
                ]
              },
              {
                "title": "การตั้งค่าเงื่อนไขเวลาและจำนวน",
                "content": "A page replied: ตั้งค่าช่วงจำนวนข้อความที่จะให้เพจตอบกลับ\n\nResponse distance: ระยะห่างของการตอบแต่ละข้อความ เพื่อลดโอกาสการโดนมองว่าเป็นสแปม\n\nA message retrieved: จำนวนเนื้อหา/ข้อความที่จะดึงขึ้นมาจัดการต่อหนึ่งรอบ\n\nReply to messages by: เลือกรูปแบบการตอบกลับ\n\nOrder: ตามลำดับ\n\nUnexpectedly: แบบสุ่ม/ไม่คาดเดา\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการเนื้อหาข้อความ",
                "content": "Option: เลือกประเภทเนื้อหา\n\nCustom Content: เนื้อหากำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: กรณีใช้ AI ช่วยตอบ สามารถเลือก Prompt ที่ตั้งค่าไว้ได้\n\nComment AI:\n\nReply tin nhắn: ตอบกลับข้อความ\n\nViết bài đăng: เขียนโพสต์\n\nContent (0): ช่องสำหรับกรอกข้อความที่คุณต้องการใช้ตอบกลับ\n\nDelete text when used: หากติ๊กถูก ระบบจะลบข้อความนั้นออกจากรายการเมื่อใช้งานแล้ว\n\nContent options: รูปแบบการดึงข้อความไปใช้\n\nOne-line content: 1 บรรทัด คือ 1 คำตอบ\n\nContent many lines: ระบบจะดึงข้อความ ทั้งหมดในช่อง Content ไปตอบในการส่งครั้งเดียว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวเลือกสื่อและการคัดกรอง",
                "content": "Image: หากติ๊กถูก ระบบจะส่งรูปภาพแนบไปด้วย\n\nPhoto folder: เลือกที่อยู่ไฟล์ (Path) ของรูปภาพในเครื่องคอมพิวเตอร์\n\nDelete photos when used: ลบรูปภาพทิ้งเมื่อส่งออกไปแล้ว\n\nPrioritize unread messages: ให้ความสำคัญกับข้อความที่ \"ยังไม่ได้อ่าน\" ก่อน\n\nReply to incoming messages only: ตอบกลับเฉพาะข้อความใหม่ที่ส่งเข้ามาเท่านั้น\n\nReply to messages by keyword: ตั้งค่าให้ตอบกลับตาม \"คีีย์เวิร์ด\"\n\nKeywords | Answer content: ช่องสำหรับระบุว่าถ้าเจอคำว่าอะไร ให้ตอบด้วยประโยคไหน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การส่งออกข้อมูล",
                "content": "Export messages: เปิดใช้งานการบันทึกข้อความลงเครื่อง\n\nSave folder: เลือกโฟลเดอร์ที่จะจัดเก็บไฟล์รายงาน\n\nKey word: กำหนดคีย์เวิร์ดที่ต้องการให้ระบบคัดแยกออกมาเพื่อบันทึก\n\nFile output type: รูปแบบการตั้งชื่อไฟล์หรือการแยกไฟล์\n\nSave by admin uid: ระบบจะแยกไฟล์ตาม ID ของผู้ดูแล (Admin) ที่เป็นคนรันระบบนั้นๆ\n\nSave by page id page: ระบบจะแยกไฟล์ตาม ID ของแฟนเพจ\n\nSave to a common file: ระบบจะบันทึกข้อมูลทุกอย่างรวมกันไว้ใน ไฟล์เดียว (Common File)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "8.Reply to comments (ตอบกลับความคิดเห็น)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image229.png"
                ]
              },
              {
                "title": "การควบคุมเวลาและปริมาณ",
                "content": "Comment space: ระยะห่างระหว่างการตอบแต่ละคอมเมนต์  แนะนำให้ตั้งค่าให้มีความเป็นธรรมชาติ\n\nOne page replied to me: จำนวนคอมเมนต์สูงสุดที่ระบบจะทำการตอบกลับต่อหนึ่งหน้าหรือหนึ่งโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อความ",
                "content": "Text comments: ติ๊กถูกเพื่อเปิดใช้งานการตอบกลับด้วยข้อความ\n\nOption: เลือกรูปแบบของเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: กรณีใช้ AI ช่วยเขียน สามารถเลือกคำสั่ง (Prompt) ที่ต้องการได้\n\nComment AI\n\nReply tin nhắn: ตอบกลับข้อความ\n\nViết bài đăng: เขียนโพสต์\n\nช่องกรอกข้อความ (สีขาวขนาดใหญ่): ใส่ข้อความที่คุณต้องการให้ระบบพิมพ์ตอบกลับ\n\nDelete text when used: หากติ๊กช่องนี้ ข้อความที่ใช้ไปแล้วจะถูกลบออกจากรายการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การส่งสื่อและฟีเจอร์เสริม",
                "content": "Comment photo: หากต้องการตอบกลับด้วยรูปภาพ ให้ติ๊กถูกที่ช่องนี้\n\nPhoto folder: ระบุที่อยู่ไฟล์ (Path) ในคอมพิวเตอร์ที่เก็บรูปภาพไว้ เพื่อให้ระบบดึงไปใช้งาน\n\nSend message: ตัวเลือกสำหรับส่งข้อความส่วนตัว (Inbox) ไปหาผู้คอมเมนต์เพิ่มเติม\n\nExport link: ตัวเลือกสำหรับการดึงลิงก์ที่เกี่ยวข้องออกมาใช้งานภายนอก\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "9.Post a tag with a button (โพสต์แท็กพร้อมปุ่ม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image371.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลาและจำนวน",
                "content": "Post distance: ตั้งค่าช่วงเวลาห่างระหว่างแต่ละโพสต์\n\nMaximum posting per...posts: กำหนดจำนวนโพสต์สูงสุดต่อรอบการทำงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการเนื้อหา",
                "content": "Content: เนื้อหาหลักของโพสต์ (Caption)\n\nTitle 1, 2, 3 content: ส่วนหัวข้อที่จะไปปรากฏในตำแหน่งต่าง ๆ ของโพสต์\n\nButton Type: เลือกประเภทของปุ่ม\n\nLikePage: ปุ่มกดถูกใจเพจ\n\nNoButton: ไม่แสดงปุ่มใดๆ บนโพสต์\n\nContactUs: ติดต่อเรา (มักใช้เชื่อมไปยังหน้ากรอกฟอร์มหรือข้อมูลติดต่อ)\n\nMessagePage: ส่งข้อความเข้า Inbox ของเพจโดยตรง\n\nShopNow: ซื้อเลย (เหมาะสำหรับลิงก์ไปหน้าสินค้า/E-commerce)\n\nBookTravel: จองการเดินทาง\n\nGetQuote: ขอใบเสนอราคา\n\nStartOrder: เริ่มสั่งซื้อสินค้า/อาหาร\n\nLearnMore: ดูเพิ่มเติม (ปุ่มยอดนิยม ใช้เพื่อให้คนคลิกเข้าไปอ่านรายละเอียดในเว็บไซต์)\n\nDownload: ดาวน์โหลดเอกสารหรือไฟล์\n\nSeeMore: ดูเพิ่มเติม (คล้าย LearnMore)\n\nWatchMore: ชมวิดีโอเพิ่มเติม\n\nInstallApp: ติดตั้งแอปพลิเคชัน\n\nUseApp: ใช้งานแอปพลิเคชัน (สำหรับผู้ที่มีแแอปอยู่แล้ว)\n\nPlayGame: เล่นเกม\n\nSignUp: ลงชื่อเข้าใช้ / สมัครสมาชิก\n\nSubscribe: ติดตามข่าวสาร (เช่น จดหมายข่าว หรือช่อง YouTube)\n\nListenMusic: ฟังเพลง\n\nOpenLink: เปิดลิงก์เว็บไซต์\n\nTryIt: ทดลองใช้งาน\n\nApplyNow: สมัครตอนนี้ (มักใช้กับการสมัครงานหรือหลักสูตร)\n\nLink web: ใส่ URL หรือลิงก์ที่ต้องการให้ปุ่มเชื่อมโยงไป\n\nPhoto folder: ที่อยู่ไฟล์ (Path) ของโฟลเดอร์รูปภาพที่ต้องการใช้โพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเพิ่มเติม",
                "content": "Export article link: หากติ๊กเลือก โปรแกรมจะส่งออก (Save) ลิงก์ของโพสต์ที่ทำสำเร็จแล้วเก็บไว้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10.Send invitation to like page (ส่งคำเชิญให้กดไลค์เพจ)",
                "content": "Select sending type: เลือกประเภทการส่ง\n\nFeeling: ความรู้สึก\n\nFriend: เพื่อน\n\nBình luận: ความคิดเห็น\n\n",
                "type": "markdown",
                "images": [
                  "image659.png"
                ]
              },
              {
                "title": "11.Copy the specified article (คัดลอกบทความที่ระบุ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image720.png"
                ]
              },
              {
                "title": "การจัดการบทความต้นทาง",
                "content": "One page posted: กำหนดจำนวนหน้าหรือจำนวนบทความที่จะดึงมาโพสต์ในหนึ่งรอบ\n\nList of article ids or links: ช่องสำหรับใส่ ID ของบทความ หรือ URL ลิงก์ที่ต้องการให้ระบบไปคัดลอกมา (ใส่ 1 รายการต่อ 1 บรรทัด)\n\nDelete id when using: หากติ๊กถูก ระบบจะลบ ID/ลิงก์ออกจากรายการทันทีที่ใช้งานเสร็จ (ป้องกันการโพสต์ซ้ำ)\n\nRemove hashtags from content: หากติ๊กถูก ระบบจะลบเครื่องหมาย # หรือคำที่เป็น hashtag ออกจากเนื้อหาต้นฉบับอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การปรับแต่งเนื้อหาเพิ่มเติม",
                "content": "Add content at the end of the article: ติ๊กถูกหากต้องการเพิ่มข้อความปิดท้ายบทความ\n\nช่องกรอก Content: พิมพ์ข้อความที่คุณต้องการให้ปรากฏต่อท้ายบทความทุกอันในช่องนี้\n\nDelete text when used: ลบข้อความเสริมนี้ทิ้งหลังจากใช้งานไปแล้ว\n\nContent options: เลือกรูปแบบการดึงเนื้อหามาใช้\n\nOne-line content: 1 บรรทัด = 1 ข้อความ\n\nContent many lines: ข้อความทั้งหมดในช่อง = 1 ข้อความ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งเวลาและตัวเลือกเสริม",
                "content": "Schedule: การตั้งเวลาล่วงหน้า\n\nScheduling type: เลือกรูปแบบการเว้นระยะการโพสต์\n\nOption 1 (eg post 2 hours apart): เมื่อเริ่มงานโพสต์แรกเสร็จแล้ว ระบบจะนับถอยหลังตามระยะเวลาที่คุณกำหนด (เช่น ทุกๆ 2 ชั่วโมง) เพื่อเริ่มโพสต์ถัดไป\n\nOption 2 (eg 11am every day): ระบบจะโพสต์เฉพาะตามเวลาที่คุณตั้งค่าไว้เป๊ะๆ ในแต่ละวัน (เช่น ตั้งไว้ 11:56 น. ระบบก็จะทำงานเวลานี้ของทุกวัน)\n\nStarting date: กำหนดวันที่เริ่มต้นทำงาน\n\nTime (Hour/Minute): กำหนดเวลาที่ต้องการให้เริ่มโพสต์บรรทัดแรกหรือรอบแรก\n\nAdd a send message button: เพิ่มปุ่ม \"ส่งข้อความ\" เข้าไปในโพสต์\n\nExport link: ให้ระบบส่งออกลิงก์ที่โพสต์สำเร็จแล้วออกมาเพื่อเก็บเป็นรายงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "12.Copy specified page post (คัดลอกโพสต์เพจที่ระบุ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image536.png"
                ]
              },
              {
                "title": "การนำเข้าข้อมูล",
                "content": "Import list: PAGE ID | Copy PAGE ID: ช่องสำหรับใส่ ID ของเพจต้นทางที่ต้องการคัดลอก และ ID ของเพจปลายทางที่จะให้นำไปโพสต์\n\nรูปแบบปกติมักจะเป็น ID เพจต้นทาง | ID เพจปลายทาง\n\nตัวเลขด้านบน (0): แสดงจำนวนรายการที่ถูกเพิ่มเข้าไปในรายการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการดึงข้อมูล",
                "content": "Sweep [ ] latest article: กำหนดว่าจะให้ดึงโพสต์ล่าสุดจำนวนกี่โพสต์จากเพจต้นทาง\n\nMaximum posting per page [ ] post per run: กำหนดจำนวนโพสต์สูงสุดที่จะให้โปรแกรมโพสต์ต่อเพจ ต่อการทำงานหนึ่งรอบ\n\nDo not post copied articles: หากติ๊กถูก โปรแกรมจะไม่โพสต์ซ้ำหากบทความนั้นเคยถูกคัดลอกไปแล้ว\n\nRemove hashtags from content: หากติ๊กถูก โปรแกรมจะลบ Hashtag ออกจากข้อความต้นฉบับก่อนโพสต์\n\nPosting distance [ ] arrive [ ] second: ตั้งค่าหน่วงเวลา หรือระยะห่างระหว่างการโพสต์แต่ละครั้ง เพื่อป้องกันการโดนแบน\n\nPosting options: ตัวเลือกเสริมอื่นๆ\n\nPost random article: สุ่มโพสต์\n\nPost articles in order of newest: โพสต์จากใหม่ไปเก่า\n\nPost oldest first: โพสต์จากเก่าไปใหม่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวเลือกเสริมในการโพสต์",
                "content": "Add content at the end of the article: เพิ่มข้อความพิเศษต่อท้ายบทความที่คัดลอกมา\n\nSchedule: ตั้งเวลาโพสต์ล่วงหน้า\n\nPost interaction after posting: ตั้งค่าการโต้ตอบหลังโพสต์เสร็จ สามารถกดที่ Setting เพื่อตั้งค่ารายละเอียด\n\nAdd a send message button: เพิ่มปุ่ม \"ส่งข้อความ\" เข้าไปในโพสต์\n\nExport link: ส่งออกลิงก์ของโพสต์ที่ทำเสร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "13.Post Reel (โพสต์คลิปรีล)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image516.png"
                ]
              },
              {
                "title": "การจัดการวิดีโอและลำดับการโพสต์",
                "content": "Video folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บไฟล์วิดีโอที่ต้องการอัปโหลด\n\nOne page posted: กำหนดจำนวนวิดีโอที่จะโพสต์ต่อ 1 เพจ\n\nVideo selection options: เลือกรูปแบบการเลือกวิดีโอจากโฟลเดอร์\n\nตามลำดับ: In order\n\nRandom: สุ่ม\n\nDelete video file when finished posting: หากเลือกไว้ ระบบจะลบไฟล์วิดีโอออกจากเครื่องทันทีเมื่อโพสต์เสร็จสิ้น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเวลาและขนาดวิดีโอ",
                "content": "Video upload time: กำหนดเวลารอระหว่างการอัปโหลด\n\nPosting distance: ระยะห่างระหว่างการโพสต์แต่ละครั้ง\n\nAutomatically cut video when too long: หากวิดีโอยาวเกินไป ระบบจะตัดคลิปให้อัตโนมัติ\n\nDuration: กำหนดช่วงเวลาที่ต้องการ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ฟีเจอร์เสริมและการปฏิสัมพันธ์",
                "content": "Describe: สำหรับใส่คำอธิบายวิดีโอ (Caption)\n\nSchedule: ตั้งเวลาโพสต์ล่วงหน้า\n\nPost interaction after posting: ตั้งค่าการปฏิสัมพันธ์หลังโพสต์เสร็จ (สามารถกด Setting เพื่อตั้งค่าเชิงลึก)\n\nExport link: ส่งออกลิงก์ของโพสต์ที่ทำสำเร็จแล้ว\n\nThumbnail: เลือกหรือตั้งค่ารูปหน้าปกวิดีโอ\n\nShare on story: แชร์วิดีโอที่โพสต์ไปยัง Story โดยอัตโนมัติ\n\nFunctions related to groups\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Join groups by keywords (เข้าร่วมกล่มโดยใช้คีย์เวิร์ด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image453.png"
                ]
              },
              {
                "title": "การจัดการคำค้นหา",
                "content": "Keyword list: ช่องสำหรับใส่คำค้นหา (Keywords) ที่ต้องการ เช่น \"ขายของมือสอง\", \"คนรักแมว\" (ใส่ 1 คำต่อ 1 บรรทัด)\n\nDelete used keywords: หากติ๊กถูก ระบบจะลบคำค้นหานั้นออกจากรายการทันทีเมื่อใช้งานคำนั้นเสร็จแล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเวลา",
                "content": "Delay time: ตั้งค่าการหน่วงเวลาระหว่างการเริ่มทำงานแต่ละครั้ง เพื่อป้องกันไม่ให้ระบบมองว่าเป็นสแปม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจำกัดจำนวน",
                "content": "Maximum participation per page: จำนวนกลุ่มสูงสุดที่จะกดเข้าร่วมต่อหน้าการค้นหา 1 หน้า\n\nOne maximum engagement keyword: จำนวนกลุ่มสูงสุดที่จะเข้าร่วมต่อ 1 คำค้นหา\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ตัวกรองและเงื่อนไข",
                "content": "Only join public groups: หากติ๊กถูก ระบบจะเลือกเข้าเฉพาะ \"กลุ่มสาธารณะ\" เท่านั้น (ข้ามกลุ่มปิด)\n\nCity: จะเป็นการระบุให้ค้นหากลุ่มตามพื้นที่หรือเมืองที่กำหนด\n\nAutomatically answer questions: หากกลุ่มมีคำถามก่อนเข้า ระบบจะตอบคำถามให้โดยอัตโนมัติ\n\nList of answers: ช่องสำหรับใส่คำตอบเตรียมไว้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Share the article to the group (แชร์บทความนี้ให้กับกลุ่ม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image148.png"
                ]
              },
              {
                "title": "การตั้งค่าจำนวนและเวลา",
                "content": "An article shared > group: กำหนดจำนวนกลุ่มที่จะให้บทความหนึ่งรายการถูกแชร์ลงไป\n\nShared distance > second: เวลาระหว่างการแชร์แต่ละครั้ง แนะนำให้ตั้งค่าแบบสุ่มช่วงเวลา เช่น 60 ถึง 120 วินาที เพื่อความเป็นธรรมชาติ\n\nOne page shares > post: กำหนดจำนวนโพสต์ที่แต่ละเพจ/บัญชีจะแชร์ในหนึ่งรอบการทำงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการลิงก์บทความ",
                "content": "List of article ids/links (0): ให้คุณวาง URL ของบทความ หรือ ID ของโพสต์ ที่ต้องการนำไปแชร์ (ใส่ 1 ลิงก์ต่อ 1 บรรทัด)\n\nตัวเลขในวงเล็บจะบอกจำนวนลิงก์ทั้งหมดที่คุณใส่ไว้\n\nDelete the used id: หากติ๊กถูกไว้ ระบบจะลบลิงก์ออกจากรายการทันทีหลังจากแชร์เสร็จ เพื่อป้องกันการแชร์ซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหา",
                "content": "Share with content: หากติ๊กช่องนี้ ระบบจะแชร์บทความพร้อมกับข้อความประกอบ (Caption)\n\nContent: พื้นที่สำหรับใส่เนื้อหาที่คุณต้องการ\n\nSpin Content {a|b|c}: ระบบรองรับการสุ่มคำ (Spin Tax)\n\nตัวอย่าง: {สวัสดี|ทักทาย|ไฮ} ระบบจะสุ่มเลือกคำใดคำหนึ่งมาใช้ในแต่ละครั้ง\n\nContent Options: รูปแบบการเลือกเนื้อหา\n\nOne-line content: 1 บรรทัด คือ 1 ชุดข้อความ\n\nContent many lines: ข้อความทั้งหมดในช่องคือ 1 ชุดข้อความเดียว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Join designated groups (เข้าร่วมกลุ่มที่กำหนดไว้)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image729.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลา",
                "content": "Delay time: ตั้งค่าระยะเวลาหยุดพัก\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารายชื่อกลุ่มเป้าหมาย",
                "content": "List of group ids or link: ให้คุณนำ ID ของกลุ่ม หรือ ลิงก์ (URL) ของกลุ่มที่ต้องการเข้าร่วมมาใส่ที่นี่ (หนึ่งรายการต่อหนึ่งบรรทัด)\n\nDelete id once joined: หากติ๊กถูกที่ช่องนี้ ระบบจะลบรายชื่อกลุ่มออกจากช่องนี้โดยอัตโนมัติหลังจากที่ทำการกดเข้าร่วมสำเร็จแล้ว เพื่อป้องกันการทำงานซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การเงื่อนไขการเข้าร่วม",
                "content": "Maximum participation per page: กำหนดจำนวนกลุ่มสูงสุดที่จะเข้าร่วมต่อหนึ่งรอบหรือต่อหนึ่งหน้า\n\nOnly join public groups: หากติ๊กถูก ระบบจะเลือกเข้าเฉพาะ \"กลุ่มสาธารณะ\" เท่านั้น (ไม่เข้ากลุ่มปิดหรือกลุ่มส่วนตัว)\n\nAutomatically answer questions: ฟังก์ชันตอบคำถามอัตโนมัติ\n\nใช้สำหรับกลุ่มที่ตั้งคำถามก่อนเข้า (เช่น \"คุณมาจากไหน?\" หรือ \"กฎของกลุ่มคืออะไร?\")\n\nList of answers: ใส่คำตอบที่ต้องการให้บอทพิมพ์ตอบ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.Spam joined group posts (สแปมเข้าร่วมกลุ่มโพสต์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image216.png"
                ]
              },
              {
                "title": "การตั้งค่าขอบเขตและระยะเวลา",
                "content": "A page uses: ตั้งค่าจำนวนเพจที่จะใช้งาน\n\nNumber of posts/group: กำหนดจำนวนโพสต์ที่จะเข้าไปมีส่วนร่วมในแต่ละกลุ่ม\n\nDelay time: ระยะเวลาหน่วงระหว่างการกระทำ เพื่อป้องกันการโดนบล็อก\n\nSkip ... first article: ตัวเลือกข้ามโพสต์แรกๆ ของกลุ่ม (เช่น ข้าม 2 ถึง 3 โพสต์แรก)\n\nShare on wall: ติ๊กถูกหากต้องการให้แชร์โพสต์นั้นลงบนหน้า Wall ของตัวเองด้วย\n\nDo not comment on old posts: ป้องกันการไปคอมเมนต์ในโพสต์ที่เก่าเกินไป\n\nEdit comments: แก้ไขคอมเมนต์\n\nGet the article: รูปแบบการเลือกโพสต์\n\nIn order: ตามลำดับ\n\nUnexpectedly: แบบสุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการแสดงความรู้สึก",
                "content": "Release emotions: ติ๊กถูกเพื่อเปิดใช้งานการกด Reaction\n\nReaction Icons: สามารถเลือกรูปแบบอารมณ์ที่ต้องการได้ (Like, Love, Care, Haha, Wow, Sad, Angry) โดยโปรแกรมจะสุ่มใช้งานตามที่เลือกไว้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าความคิดเห็น",
                "content": "Text comment: ติ๊กถูกเพื่อเปิดใช้งานการพิมพ์ข้อความ\n\nContent: ช่องสำหรับใส่ข้อความที่ต้องการ\n\nTag [@uid]: รองรับการแท็กผู้ใช้ด้วย ID\n\nSpin Content {a|b|c}: รองรับการหมุนเวียนคำพูดเพื่อไม่ให้ข้อความซ้ำกัน\n\nOption: รูปแบบข้อความ\n\nOne-line content: เนื้อหาบรรทัดเดียว\n\nContent many lines: เนื้อหาหลายบรรทัด\n\nComment photo: ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nPhoto folder: ระบุที่อยู่ไฟล์รูปภาพในคอมพิวเตอร์ (Path) ที่ต้องการให้ระบบดึงไปใช้\n\nExport link: ติ๊กถูกหากต้องการให้ระบบส่งออกลิงก์ของโพสต์ที่ได้ไปคอมเมนต์เสร็จแล้ว เพื่อการตรวจสอบภายหลัง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Post to the joined group (โพสต์ไปยังกลุ่มที่เข้าร่วม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image722.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลาและปริมาณ",
                "content": "Waiting time: กำหนดช่วงเวลาพักระหว่างการโพสต์แต่ละครั้ง\n\nA page posted: กำหนดจำนวนกลุ่มที่ต้องการให้แต่ละเพจ/บัญชีโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการเนื้อหา",
                "content": "Document: เปิดใช้งานการดึงเนื้อหาจากเอกสาร\n\nOption: เลือกรูปแบบเนื้อหา\n\nCustom Content: เนื้อหาที่กำหนดเอง\n\nAI-generated content: เนื้อหาที่สร้างโดย AI\n\nSelect Prompt: หากใช้ระบบ AI ในการช่วยเขียน สามารถเลือกคำสั่ง (Prompt) ได้จากที่นี่\n\nComment AI\n\nReply tin nhắn: ตอบกลับข้อความ\n\nViết bài đăng: เขียนโพสต์\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าส่วนเสริมและตัวเลือกเพิ่มเติม",
                "content": "Image: ติ๊กเลือกหากต้องการแนบรูปภาพไปพร้อมกับโพสต์\n\nPost interaction after posting: ติ๊กเพื่อให้ระบบทำการโต้ตอบ ทันทีหลังจากโพสต์เสร็จ โดยสามารถกดที่ Setting เพื่อตั้งค่ารายละเอียดการโต้ตอบได้\n\nExport link: ติ๊กเมื่อต้องการให้ระบบส่งออกลิงก์ของโพสต์ที่ทำสำเร็จแล้วออกมาเป็นไฟล์รายงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6.Post to the designated group (โพสต์ไปยังกลุ่มที่กำหนด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image692.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลาและจำนวน",
                "content": "Waiting time: ตั้งค่าช่วงเวลาการรอระหว่างแต่ละโพสต์\n\nA page posted: ตั้งค่าว่าหนึ่งเพจจะโพสต์ลงกี่กลุ่มแล้วจึงหยุดหรือเปลี่ยน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการจัดการรายชื่อกลุ่ม",
                "content": "List of group ids or links: วาง ID ของกลุ่มหรือลิงก์ของกลุ่มที่ต้องการโพสต์ลงในช่องนี้\n\nDelete the used group id: หากติ๊กถูกช่องนี้ ระบบจะลบรายชื่อกลุ่มออกจากรายการทันทีที่โพสต์สำเร็จ เพื่อป้องกันการโพสต์ซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาและตัวเลือกเสริม",
                "content": "Document: ติ๊กเพื่อใส่ข้อความในการโพสต์\n\nImage: ติ๊กเพื่อแนบรูปภาพในการโพสต์\n\nPost interaction after posting: เมื่อโพสต์เสร็จแล้ว ให้ระบบทำกิจกรรมเพิ่มเติม สามารถกด Setting เพื่อตั้งค่ารายละเอียด\n\nExport link: ติ๊กเพื่อให้ระบบส่งออก (Export) ลิงก์ของโพสต์ที่ทำสำเร็จแล้วออกมาให้ตรวจสอบ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "7. spam replies to comments from participating groups (การตอบกลับสแปมต่อความคิดเห็นจากกลุ่มที่เข้าร่วม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image412.png"
                ]
              },
              {
                "title": "การตั้งค่าจำนวนและเวลา",
                "content": "Number of arrive id: ตั้งค่าจำนวนบัญชี (ID) ที่จะใช้ในการทำงาน\n\nNumber of arrive post: ตั้งค่าจำนวนโพสต์ที่จะเข้าไปโต้ตอบต่อหนึ่งกลุ่ม\n\nNumber of arrive comment: ตั้งค่าจำนวนคอมเมนต์ที่จะตอบกลับต่อหนึ่งโพสต์\n\nDelay time: ระยะเวลาหน่วงระหว่างการทำงานแต่ละครั้ง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าความรู้สึก",
                "content": "หากติ๊กถูกที่ช่อง \"Release emotions\" โปรแกรมจะกด Reaction ให้กับคอมเมนต์นั้นๆ ด้วย:\n\nคุณสามารถเลือก Emotion ที่ต้องการได้ (ไลก์, หัวใจ, ห่วงใย, ขำ, ว้าว, เศร้า, โกรธ)\n\nระบบจะทำการสุ่มหรือกดตามที่คุณเลือกไว้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เนื้อหาข้อความ",
                "content": "Content Area: ช่องว่างสำหรับใส่ข้อความที่ต้องการ\n\nSpin Content {a|b|c}: รองรับการสุ่มคำเพื่อให้ข้อความไม่ซ้ำกัน เช่น {สวัสดีครับ|ยินดีที่ได้รู้จัก|ทักทายครับ}\n\nOption (One-line content): เลือกรูปแบบเนื้อหา\n\nContent many lines: 1 บรรทัด คือ 1 ข้อความ\n\nContent many lines: ข้อความทั้งหมดทุกบรรทัด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ามัลติมีเดียและการบันทึกผล",
                "content": "Comment photo: หากติ๊กช่องนี้ โปรแกรมจะแนบรูปภาพไปกับคอมเมนต์ด้วย\n\nPhoto folder: ระบุที่อยู่ไฟล์ภาพในเครื่องคอมพิวเตอร์ของคุณ (Path)\n\nExport link: หากติ๊กไว้ โปรแกรมจะบันทึกหรือส่งออกลิงก์ของโพสต์/คอมเมนต์ที่ได้เข้าไปทำงานแล้ว เพื่อใช้ในการตรวจสอบภายหลัง\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "8.Create a group (สร้างกลุ่ม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image514.png"
                ]
              },
              {
                "title": "การตั้งค่าข้อมูลพื้นฐาน",
                "content": "Group name: คลิกที่ปุ่ม \"Enter\" เพื่อพิมพ์ชื่อกลุ่มที่ต้องการ\n\nPrivacy: เลือกประเภทความเป็นส่วนตัวของกลุ่ม เช่น Public หรือ Private\n\nNumber of groups: กำหนดจำนวนกลุ่มทั้งหมดที่ต้องการให้โปรแกรมสร้างขึ้นในรอบนี้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การเชิญสมาชิก",
                "content": "Invite followers to join the group: ติ๊กถูกที่ช่องนี้หากต้องการให้โปรแกรมส่งคำเชิญไปยังผู้ติดตามทันทีหลังจากสร้างกลุ่มเสร็จ\n\nQuantity: ระบุจำนวนผู้ติดตามที่ต้องการเชิญเข้ากลุ่ม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารูปภาพหน้าปก",
                "content": "Add cover photo: ติ๊กถูกที่ช่องนี้เพื่อเปิดใช้งานการอัปโหลดรูปภาพหน้าปกอัตโนมัติ\n\nPhoto folder: ระบุที่อยู่ไฟล์ (Path) ในเครื่องคอมพิวเตอร์ของคุณที่เก็บรูปภาพไว้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "9.Create event (สร้างกิจกรรม)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image539.png"
                ]
              },
              {
                "title": "การตั้งค่าการจัดการชื่อและจำนวนกิจกรรม",
                "content": "Number of events in a page: ช่องสำหรับระบุจำนวนกิจกรรมที่ต้องการให้แสดงผลในหนึ่งหน้า\n\nList of event names: ใช้สำหรับใส่รายชื่อกิจกรรม\n\nDelete name when used: หากติ๊กเลือก ระบบจะลบชื่อออกจากรายการทันทีหลังจากถูกนำไปสร้างกิจกรรมแล้ว\n\nContent options: ตัวเลือกสำหรับการเลือกชื่อกิจกรรมมาใช้ เช่น \"Random\" หรือ \"In order\"\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าวันและเวลา",
                "content": "Start date / Time: กำหนดวันที่และเวลาเริ่มต้นของกิจกรรม\n\nEnd date / Time: กำหนดวันที่และเวลาสิ้นสุดของกิจกรรม\n\nTime zone: แสดงเขตเวลาที่ใช้งานอยู่\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารายละเอียดและข้อมูลเพิ่มเติม",
                "content": "Description of the event: ช่องสำหรับพิมพ์คำอธิบายหรือเนื้อหาของกิจกรรม\n\nตัวเลือกเสริม (Checkboxes):\n\nEvent Promotion: ตั้งค่าการโฆษณาหรือโปรโมตกิจกรรม\n\nAdd organizer: เพิ่มข้อมูลผู้จัดงาน\n\nAdd ticket: ตั้งค่าระบบตั๋วหรือบัตรเข้างาน\n\nRecurring event: ตั้งค่ากิจกรรมแบบเกิดซ้ำ (เช่น รายสัปดาห์/รายเดือน)\n\nContact settings: ตั้งค่าข้อมูลการติดต่อสอบถาม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่ารูปแบบและสื่อ",
                "content": "Event format: เลือกประเภทหรือรูปแบบของกิจกรรม\n\nCover photo: ใช้สำหรับอัปโหลดภาพหน้าปกกิจกรรมเพื่อความสวยงาม\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "10.Share the post to the designated group (แชร์โพสต์ไปยังกลุ่มที่กำหนด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image152.png"
                ]
              },
              {
                "title": "การตั้งค่าเวลา",
                "content": "Shared distance: สุ่มรอระหว่างการแชร์แต่ละครั้ง เช่น 10-15 วินาที\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการจัดการลิงก์บทความ",
                "content": "List of article links: วางลิงก์โพสต์ที่ต้องการแชร์ ใส่ 1 ลิงก์ต่อ 1 บรรทัด\n\nDelete used link: ติ๊กแล้วระบบจะลบลิงก์อัตโนมัติหลังแชร์เสร็จ ป้องกันแชร์ซ้ำ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการกลุ่มเป้าหมาย",
                "content": "List of group ids/links: ใส่ ID กลุ่มหรือลิงก์กลุ่ม Facebook\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเนื้อหาเพิ่มเติม",
                "content": "Share with content: แชร์แบบแนบข้อความไปด้วย ไม่ใช่แค่กดแชร์เปล่าๆ\n\nContent (0): ใส่ข้อความที่อยากให้โพสต์\n\nSpin Content: [a|b|c] สูตรสุ่มคำ เพื่อไม่ให้โพสต์ซ้ำกันเป๊ะๆ\n\nรูปแบบ: ใส่วงเล็บก้ามปูและคั่นด้วย |\n\nตัวอย่าง: สวัสดีค่ะ [เช้า|บ่าย|เย็น] สนใจทักแชทได้เลย [ครับ|ค่ะ|นะคะ]\n\nระบบจะสุ่มได้: \"สวัสดีค่ะ เช้า สนใจทักแชทได้เลย ครับ\" หรือ \"สวัสดีค่ะ เย็น สนใจทักแชทได้เลย นะคะ\"\n\nContent options: รูปแบบการนำข้อความไปใช้\n\nOne-line content: 1 บรรทัด = 1 ข้อความ\n\nContent many lines: ระบบจะใช้ ข้อความทั้งหมดนั้นเป็น 1 ข้อความ\n\nInformation exchange function\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Update profile picture (อัปเดตรูปโปรไฟล์)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image320.png"
                ]
              },
              {
                "title": "การตั้งค่าแหล่งข้อมูล",
                "content": "Photo folder: ช่องสำหรับระบุที่อยู่ไฟล์ (Path) ของโฟลเดอร์ที่เก็บรูปภาพที่ต้องการนำไปอัปโหลด\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าเงื่อนไขการทำงาน",
                "content": "Automatically delete image files after uploading: ลบไฟล์รูปอัตโนมัติหลังอัปโหลดสำเร็จ\n\nSkip when avatar is available: ข้ามการอัปโหลดถ้าบัญชีนั้นมีรูปโปรไฟล์อยู่แล้ว\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Update cover photo (อัปเดตภาพหน้าปก)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image707.png"
                ]
              },
              {
                "title": "การตั้งค่าการกำหนดตำแหน่งโฟลเดอร์รูปภาพ",
                "content": "Photo folder: ตำแหน่งโฟล์เดอร์จะเข้าไปดึงรูปภาพ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การจัดการไฟล์หลังอัปโหลด",
                "content": "Automatically delete image files after uploading: ลบไฟล์รูปอัตโนมัติหลังอัปโหลดเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Update biography (อัปเดตประวัติส่วนตัว)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image101.png"
                ]
              },
              {
                "title": "4.Update page name (อัปเดตชื่อเพจ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image205.png"
                ]
              },
              {
                "title": "การตั้งค่าจัดการรายชื่อ",
                "content": "Page name (0): สำหรับพิมพ์หรือวางรายชื่อเพจ\n\nRandom number: ฟังก์ชันการสุ่มเลือกชื่อจากรายการนี้ไปใช้งาน\n\nDelete name when used: หากติ๊กถูกเมื่อระบบสุ่มเลือกชื่อใดชื่อหนึ่งไปใช้แล้ว ชื่อนั้นจะถูกลบออกจากรายการทางด้านซ้ายทันที\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.Update information (อัปเดตข้อมูล)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image728.png"
                ]
              },
              {
                "title": "การตั้งค่าข้อมูลการทำงานและประวัติการศึกษา",
                "content": "Work (ที่ทำงาน): สำหรับระบุตำแหน่งงานหรือสถานที่ทำงาน\n\nHigh school (มัธยมศึกษา): สำหรับระบุชื่อโรงเรียนมัธยม\n\nUniversity (มหาวิทยาลัย): สำหรับระบุชื่อมหาวิทยาลัยหรือสถาบันการศึกษาชั้นสูง\n\nIf you have information: หากมีข้อมูลอยู่แล้ว\n\nContinue adding information: ใช้เมื่อต้องการเพิ่มข้อมูลใหม่เข้าไปโดยที่ยังคงรักษาข้อมูลเดิมไว้\n\nNo more information: ใช้เพื่อยืนยันว่าไม่มีข้อมูลที่จะเพิ่มแล้ว หรือให้ข้ามการดำเนินการในส่วนนี้ไปโดยไม่เปลี่ยนแปลงข้อมูลเดิม\n\nDelete old information: ใช้สำหรับล้างข้อมูลเก่าที่เคยบันทึกไว้ในหัวข้อนั้นๆ ออกทั้งหมดก่อนจะดำเนินการขั้นต่อไป\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อมูลที่อยู่และสถานที่",
                "content": "City (เมือง): ระบุเมืองที่คุณอาศัยอยู่ทั่วไป\n\nAddress (ที่อยู่โดยละเอียด): ประกอบด้วยช่องกรอกข้อมูลย่อย 4 ส่วน:\n\nAddress: บ้านเลขที่/ชื่อถนน\n\nCity/Town: เมืองหรือเขต\n\nMã ZIP: รหัสไปรษณีย์\n\nArea: พื้นที่หรือภูมิภาค\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าข้อมูลการติดต่อและสื่อสังคมออนไลน์",
                "content": "Current city: เมืองปัจจุบันที่อาศัยอยู่\n\nHometown: บ้านเกิด\n\nPhone number: หมายเลขโทรศัพท์\n\nEmail: ที่อยู่อีเมล\n\nService area: พื้นที่ให้บริการ (กรณีเป็นบัญชีธุรกิจ)\n\nWebpage: เว็บไซต์ส่วนตัวหรือธุรกิจ\n\nSocial network: บัญชีโซเชียลมีเดียอื่นๆ\n\nFunction related to pagesettings\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.Country restrictions (ข้อจำกัดของประเทศ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image106.png"
                ]
              },
              {
                "title": "การตั้งค่าการแสดงผล",
                "content": "Only shown in some countries: แสดงเนื้อหาเฉพาะในประเทศที่เลือกเท่านั้น\n\nHidden in some countries: ซ่อนเนื้อหาในประเทศที่เลือก\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการเลือกและจัดการรายชื่อประเทศ",
                "content": "ช่อง Dropdown: คลิกเพื่อพิมพ์ค้นหาหรือเลือกรายชื่อประเทศที่ต้องการเพิ่มเข้าในรายการ\n\nMore: ให้เลือกประเทศที่ต้องการก่อนแล้วกดปุ่มนี้เพื่อเพิ่มประเทศนั้น\n\nCountry list (0): แสดงรายชื่อประเทศที่คุณทำการเลือกไว้แล้ว (ตัวเลขในวงเล็บจะบอกจำนวนประเทศที่ถูกเลือกในปัจจุบัน)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.Age restrictions (ข้อจำกัดด้านอายุ)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image325.png"
                ]
              },
              {
                "title": "การตั้งค่าการเลือกเกณฑ์อายุ",
                "content": "Everyone (no age limit): อนุญาตทุกคน ไม่จำกัดอายุ (ค่าเริ่มต้น)\n\nPeople 17 years of age and older: จำกัดเฉพาะผู้ที่มีอายุตั้งแต่ 17 ปีขึ้นไป\n\nPeople 18 years and older: จำกัดเฉพาะผู้ที่มีอายุตั้งแต่ 18 ปีขึ้นไป\n\nPeople 19 years and older: จำกัดเฉพาะผู้ที่มีอายุตั้งแต่ 19 ปีขึ้นไป\n\nPeople 21 years and older: จำกัดเฉพาะผู้ที่มีอายุตั้งแต่ 21 ปีขึ้นไป\n\nAlcohol related: จำกัดเนื้อหาที่เกี่ยวข้องกับเครื่องดื่มแอลกอฮอล์ (ตามกฎหมายท้องถิ่น)\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.Delete all location pages (ลบหน้าข้อมูลสถานที่ทั้งหมด)",
                "content": "",
                "type": "markdown",
                "images": [
                  "image629.png"
                ]
              },
              {
                "title": "การตั้งค่าพารามิเตอร์",
                "content": "Distance: สุ่มเวลาพักระหว่างการลบแต่ละครั้ง เช่น ตั้งแต่ 5 ถึง 10 วินาที\n\nA page blocks: กำหนดขอบเขตหรือจำนวน UID ที่จะดำเนินการต่อหนึ่งรอบการทำงาน\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "การตั้งค่าการจัดการข้อมูล UID",
                "content": "List of uids you want to block: ช่องสำหรับใส่รายการ UID (User ID) ที่ต้องการให้สคริปต์เข้าไปดำเนินการ\n\nตัวเลขในวงเล็บ (0): แสดงจำนวน UID ทั้งหมดที่อยู่ในรายการปัจจุบัน\n\nDelete used uid: หากติ๊กเลือกไว้ ระบบจะลบ UID นั้นออกจากรายการทันทีเมื่อทำงานสำเร็จ เพื่อป้องกันการทำงานซ้ำในรอบถัดไป\n\n",
                "type": "markdown",
                "images": []
              }
            ]
          }
        ]
      },
      {
        "id": "cat_nxi5f",
        "name": "คำถามและปัญหาที่พบบ่อย MaxCarePage",
        "sections": [
          {
            "title": "คำถามและปัญหาที่พบบ่อย MaxCarePage",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_gojxf",
            "name": "แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome Maxcare Page",
            "sections": [
              {
                "title": "แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome Maxcare Page",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เข้าไปที่เว็บ",
                "content": "https://sourceforge.net/projects/portableapps/files/Google%20Chrome%20Portable/\n\nหลังจากนั้น กด Ctrl+F แล้วพิมพ์ตรงช่องค้นหา 123 เลือกดาวน์โหลดตามที่ในกรอบสีแดง รอจนกว่าจะดาวน์โหลดเสร็จ\n\n",
                "type": "markdown",
                "images": [
                  "image645.png"
                ]
              },
              {
                "title": "2.ติดตั้งไฟล์ที่ดาวน์โหลดมา",
                "content": "",
                "type": "markdown",
                "images": [
                  "image340.png"
                ]
              },
              {
                "title": "3.หลังจากดาวน์โหลดเสร็จ ไปที่อยู่ไฟล์ที่ดาวน์โหลดเสร็จ",
                "content": "3.1 ไปที่ app\n\n3.2 ไปที่ chrome-bin\n\n3.3 จากนั้นพิมพ์\\chrome.exe ในช่องที่อยู่ไฟล์ แล้วคัดลอก\n\n",
                "type": "markdown",
                "images": [
                  "image574.png",
                  "image497.png",
                  "image402.png"
                ]
              },
              {
                "title": "4.นำไปวางในโปรแกรม MaxCare Page",
                "content": "ไปที่ general configuration ==> Đường dẫn chrome\n\n",
                "type": "markdown",
                "images": [
                  "image409.png"
                ]
              },
              {
                "title": "5. https://minsoftware.xyz/chromedriver.php?v=123 คัดลอกลิงค์ไปวางในแท็บใหม่",
                "content": "รอจนโหลดเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "6.จากนั้นเปลี่ยนชื่อไฟล์ เพิ่ม .zip",
                "content": "6.1 กด Yes\n\n",
                "type": "markdown",
                "images": [
                  "image120.png",
                  "image165.png"
                ]
              },
              {
                "title": "7.หลังจากแตกไฟล์เข้าไปที่ driver > win32 จากนั้นกดคัดลอก chromedriver.exe",
                "content": "",
                "type": "markdown",
                "images": [
                  "image636.png"
                ]
              },
              {
                "title": "8.นำไปวางในโฟลเดอร์ MaxCare Page",
                "content": "หากขึ้นหน้าต่างแบบนี้\n\nให้ไปที่โปรแกรม MaxCare Page ==> Utilities แล้วกด Kill chromedriver\n\nจากนั้น กด Try Again เป็นอันเสร็จขั้นตอนการแก้ปัญหา\n\n",
                "type": "markdown",
                "images": [
                  "image256.png",
                  "image116.png"
                ]
              },
              {
                "title": "Maxphone Farm",
                "content": "Maxphone Farm คือ การพัฒนาต่อยอดระบบ ฟาร์มบัญชี ของ Maxcare ด้วยเทคโนโลยี ออกแบบใหม่ โดยการใช้เครื่อง มือถือ แบบ Physical ( เครื่องจริง ) ทำให้เปรียบเสมือนเรามีจำนวน โปรไฟล์จริง ที่ใช้รันระบบฟาร์ม\n\nMaxphone คือ การพัฒนาต่อยอดระบบ ฟาร์มบัญชี ของ Maxcare ด้วยเทคโนโลยี ออกแบบใหม่ เพื่อให้ตอบสนอง และประสิทธิภาพ ดีขึ้น ระบบฟาร์มบัญชี โดยการใช้เครื่อง มือถือ แบบ Physical ( เครื่องจริง ) และพัฒนา Custom Rom ตามฉบับของ Maxcare ทำให้ตัวเครื่อง เปรียบเสมือนจำนวน โปรไฟล์ ที่ใช้รันระบบฟาร์ม จุดเด่น maxphone farm\n\nมีฟังชั่นเพิ่มเติมจาก Maxcare และ Maxsystemcare คือ ฟังก์ชั่น Post Reels เนื่องจากปัจจุบันผู้คนหันมาสนใจคลิปสั้นใน Reels มากขึ้นจึงมีฟังก์ชั่นนี้ เพื่อให้ตอบโจทย์ผู้ใช้งาน\n\nมีให้เลือก Buff Like page ทั้ง 2 แบบ เพจทั่วไป และ เพจโปรไฟล์ ที่คนหันมานิยมใช้\n\nลดอัตราการแบนลงอย่างมาก เนื่องจากมีฟังก์ชั่น change device เปลี่ยนข้อมูลอุปกรณ์ ใหม่หมดในทุกครั้งทีมีการเปิดโปรไฟล์ใช้งาน\n\n",
                "type": "markdown",
                "images": [
                  "image170.png"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maxphonefarm",
    "name": "MaxPhoneFarm",
    "categories": [
      {
        "id": "cat_xc4mx",
        "name": "การดาวน์โหลดและการติดตั้งโปรแกรม Max Phone Farm",
        "sections": [
          {
            "title": "การดาวน์โหลดและการติดตั้งโปรแกรม Max Phone Farm",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.หลังจากดาวน์โหลดโปรแกรม Maxphonefarm เสร็จแล้วตลิกขวาเพื่อแตกไฟล์โปรแกรม",
            "content": "1.Extract files - สามารถเลือกได้ว่าต้องการให้ไปแตกไฟล์ลงที่ไหน\n\n2.Extract to \"MaxTwitterPro\\\" เลือกให้แตกไฟล์ลงที่ Download\n\n",
            "type": "markdown",
            "images": [
              "image548.png"
            ]
          },
          {
            "title": "2.ไปที่โฟล์เดอร์ Maxphonefarm  ==> กดเปิดไฟล์ Setup Environment",
            "content": "2.1 รอจนกว่าจะดาวน์โหลดเสร็จ\n\n2.2 กด open จากนั้นติดตั้ง node.js ให้เสร็จ\n\n2.3 คัดลอกข้อมูลทั้งหมดในช่อง\n\n2.4 ไปที่ Command Prompt ==> วางข้อมูลที่คัดลอกไว้จากนั้นกด Enter รอจนกว่าจะเสร็จ\n\n2.5 กด Setup  จากนั้นทำการรีสตาร์ทคอมพิวเตอร์ 1 รอบ\n\n",
            "type": "markdown",
            "images": [
              "image756.png",
              "image754.png",
              "image296.png",
              "image426.png",
              "image300.png",
              "image119.png"
            ]
          },
          {
            "title": "3.หลังจากรีสตาร์ทเสร็จแล้ว ให้ไปที่โฟลเดอร์ Maxphonefarm ==. กด Auto Update รอจนกว่าจะเสร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image71.png"
            ]
          },
          {
            "title": "4.อัปเดตเสร็จแล้ว ==> เข้าใช้งานโปรแกรมจากเวอร์ชันล่าสุด",
            "content": "",
            "type": "markdown",
            "images": [
              "image768.png"
            ]
          },
          {
            "title": "5.ล็อคอินเข้าใช้งานโปรแกรม",
            "content": "",
            "type": "markdown",
            "images": [
              "image240.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_ytdyo",
        "name": "MaxPhone Farm ขั้นตอนการลงเฟิร์มแวร์ในมือถือ (สำหรับมือถือที่ไม่ใช่ Boxphone)",
        "sections": [
          {
            "title": "MaxPhone Farm ขั้นตอนการลงเฟิร์มแวร์ในมือถือ (สำหรับมือถือที่ไม่ใช่ Boxphone)",
            "content": "ขั้นตอนการลงเฟิร์มแวร์ MaxPhoneFarm ในมือถือ(สำหรับมือถือที่ไม่ใช่ Boxphone)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "สิ่งที่ต้องมีก่อนลงเฟิร์มแวร์",
            "content": "มือถือ samsung galaxy s7\n\nไฟล์ SOFTWARE\n\nไฟล์ ROOT S7\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ขั้นตอนการลงเฟิร์มแวร์ในมือถือ",
            "content": "ให้ปิดเครื่องมือถือ\n\nให้กด ปุ่มลดเสียง+ปิดเครื่อง+ปุ่มโฮม ตามรูป\n\nกดปุ่มลดเสียง + ปิดเครื่อง + ปุ่มโฮม พร้อมกัน\n\nหลังจากนั้นมือถือจะขึ้นหน้าจอสีฟ้า\n\nให้กด ปุ่มเพิ่มเสียง\n\nกด 1 ครั้ง รอขึ้นหน้าดาวน์โหลด\n\nหลังจากกดปุ่มเพิ่มเสียงแล้วหน้าจอจะขึ้น Downloading\n\n*** ทำการเสียบ USB เชื่อมต่อเครื่องคอม และมือ ***\n\n4.ให้เปิดโปรแกรม Odin 3.13.1 ในคอมพิวเตอร์\n\n4.1.ให้กด AP แล้วเลือกไฟล์ twrp-3.6.0_9-0-herolte.img.tar\n\nไฟล์ twrp-3.6.0_9-0-herolte.img.tar\n\n4.2 หลังจากอัพไฟล์ให้กด Start\n\n5.หลังจากกด Start มือถือจะปิดเครื่อง ให้กด ปุ่มเพิ่มเสียง+ปิดเครื่อง+ปุ่มโฮม ตามรูป\n\nกดปุ่มลดเสียง + ปิดเครื่อง + ปุ่มโฮม พร้อมกัน\n\n6.หลังจากหน้าหน้าจอมือถือขึ้นตามรูปแล้วให้กด Wipe\n\n6.1 กด Format Data\n\n6.2 พิมพ์คำว่า yes\n\n6.3 กด Advanced Wipe\n\n6.4 เลือกไฟล์ตามรูป\n\n6.5 เลือนปุ่ม Swipe to Wipe ไปด้านขวา\n\n7.หลังจากอัพข้อมูลเสร็จสิ้นให้กด “Reboot”\n\n7.1 กด “Recovery”\n\n7.2 เลือนปุ่ม Swipe to Wipe ไปด้านขวา\n\n8.ให้มาที่คอมพิวเตอร์แล้วคัดลอกไฟล์ ROOT S7 ไปว่างในเครื่อง\n\n8.1 เลือกอุปกรณ์\n\n8.2 ว่างไฟล์ ROOT S7 ในเครื่อง\n\n9.หลังคอมพิวเตอร์อัพข้อมูลเสร็จ ให้มาที่มือถือแล้วเลือก Install\n\n9.1 เลือก ROOT S7\n\n9.2 เลือกไฟล์ตามรูปด้านล่าง (ต้องตั้งค่าตามรูปเท่านั้น)\n\n9.2.1 ไม่ต้องเลือกช่องไหนแล้วกด Add more Zips\n\nตั้งค่าไฟล์ 1\n\nตั้งค่าไฟล์ 2\n\nตั้งค่าไฟล์ 3\n\nไฟล์ที่ 4 ไม่ต้องกด Add more Zips แต่ให้เลื่อนปุ่ม Swipe to Wipe ไปด้านขวาแทน\n\nตั้งค่าไฟล์ 4\n\n9.3 หลังจากกดปุ่ม Swipe to Wipe จะอัพเดทข้อมูลเมื่ออัพเดทข้อมูลเสร็จให้กด Reboot System\n\n10.การติดตั้งในมือถือ\n\nเลือก START\n\nเลือก SKIP\n\nเลือก SKIP\n\nเลือก NEXT\n\nเลือก MORE\n\nเลือก ACCEPT\n\nเลือก Fingerpring + Password\n\nเลือก SKIP\n\nเลือก NEXT\n\nเลือก SKIP\n\nเลือก START\n\nเลือก Magisk\n\nเลือก OK\n\nเลือก Settings\n\nเปิดปุ่ม Allow from this source\n\nเลือก Install\n\nเลือก Magisk\n\nปิดปุ่ม Check Updates\n\nเลื่อนลงข้างล่างสุดเลือก Superuser Notification\n\nเลือก None\n\nเลื่อนขึ้นมาแล้วเปิดปุ่ม Zygisk (Beta)\n\nเลือก Hide the Magisk app\n\nเลือก OK หลังจากนั้นจะโหลดอยู่สักพัก\n\nเลือก Charing this device via USB\n\nเลือก File Transfer\n\n11.จากนั้นให้มาที่คอมพิมพ์เตอร์เพื่อคัดลอกเลือกไฟล์ MINSOFTWARE_Setup ลงเครื่อง\n\n11.1 ไปที่ Computer เลือก อุปกรณ์มือถือ SM-G930F\n\n11.2 เลือก Internal shared storage\n\n11.3 วางไฟล์ที่คัดลอกมาลงเครื่อง\n\n12.หลังจากวางไฟล์เสร็จให้มาที่มือถือเข้าโปรแกรม Magisk แล้วเลือกไปที่ Modules\n\n12.1 เลือก Install from storage\n\n12.2 กด Allow\n\n12.3 กดไปที่ขีดสามขีดด้านบนซ้าย\n\n12.4 เลือก  SM-G930F\n\n12.5 เลือก MINSOFTWARE_Setup\n\n12.6 ติดตั้งไฟล์ safetynet-fix-v2.2.1-zygisk.zip\n\n12.7 หลังจากติดตั้งเสร็จให้กดกลับ\n\n12.8 เลือก Install from storage อีกครั้ง\n\n12.9 ติดตั้งไฟล์ LSPosed-v1.8.0-6483-zygisk.zip\n\n12.10 หลังจากติดตั้งเสร็จให้กด Reboot\n\n13. หลังจากเครื่องเปิดมาจะมีโปรแกรม LSPosed เด้งขึ้นมาให้กด Add automatically\n\n14.หลังจากนั้นไปที่ Settings\n\n14.1 เลื่อนลงไปข้างล่างสุดกด About phone\n\n14.2 เลื่อนลงไปข้างล่างสุดกดที่ Build number  8 ครั้ง แบบเร็วๆ\n\n14.3 หลังจากให้กลับมาที่ Settings แล้วเลือก System\n\n14.4 เลื่อนลงไปข้างล่างกดที่ Developer options\n\n14.5 เปิด Stay awake\n\n14.6 เปิด Android debugging\n\n14.7 หลังจากนั้นกด OK\n\n14.8 จากนั้นจะมีแจ้งเตือนใหม่ขึ้นมาให้กด Cancel\n\n*** เสร็จสิ้นการลงเฟิร์มแวร์ ลงมือถือ ***\n\n",
            "type": "markdown",
            "images": [
              "image195.png",
              "image41.png",
              "image287.png",
              "image333.png",
              "image541.png",
              "image110.png",
              "image118.png",
              "image191.png",
              "image215.png",
              "image451.png",
              "image789.png",
              "image38.png",
              "image592.png",
              "image606.png",
              "image286.png",
              "image314.png",
              "image769.png",
              "image318.png",
              "image583.png",
              "image439.png",
              "image635.png",
              "image634.png",
              "image802.png",
              "image611.png",
              "image525.png",
              "image155.png",
              "image388.png",
              "image595.png",
              "image780.png",
              "image587.png",
              "image223.png",
              "image400.png",
              "image596.png",
              "image395.png",
              "image513.png",
              "image504.png",
              "image766.png",
              "image26.png",
              "image111.png",
              "image64.png",
              "image33.png",
              "image433.png",
              "image242.png",
              "image589.png",
              "image450.png",
              "image664.png",
              "image685.png",
              "image666.png",
              "image392.png",
              "image718.png",
              "image275.png",
              "image748.png",
              "image161.png",
              "image322.png",
              "image528.png",
              "image505.png",
              "image330.png",
              "image323.png",
              "image231.png",
              "image88.png",
              "image517.png",
              "image415.png",
              "image725.png",
              "image78.png",
              "image269.png",
              "image658.png",
              "image351.png",
              "image212.png",
              "image198.png",
              "image338.png",
              "image571.png",
              "image432.png",
              "image783.png",
              "image455.png",
              "image268.png",
              "image172.png",
              "image429.png",
              "image653.png",
              "image251.png"
            ]
          },
          {
            "title": "คลิปขั้นตอนการลงเฟิร์มแวร์",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_g2grb",
        "name": "Max Phone Farm อธิบายการตั้งค่าต่างๆเบื้องต้น",
        "sections": [
          {
            "title": "Max Phone Farm อธิบายการตั้งค่าต่างๆเบื้องต้น",
            "content": "อธิบายการตั้งค่าต่างๆเบื้องต้น general config\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "General configs การตั้งค่าทั่วไป",
            "content": "",
            "type": "markdown",
            "images": [
              "image774.png"
            ]
          },
          {
            "title": "การตั้งค่าทั่วไป",
            "content": "Sync data with MaxCare: ติ๊กถูกหากต้องการซิงค์ข้อมูลกับโปรแกรม MaxCare\n\nPath to MaxCare: ช่องสำหรับเลือกที่อยู่ไฟล์ (Path) ของโปรแกรม MaxCare ในเครื่อง\n\nNumbers threads check info: กำหนดจำนวน Thread ที่จะใช้ในการเช็คข้อมูล\n\nSave [Description] column data: ติ๊กถูกเพื่อบันทึกข้อมูลในคอลัมน์คำอธิบาย (Description)\n\nBackup Database: ตัวเลือกสำหรับสำรองฐานข้อมูล\n\nKill ADB when finished: ติ๊กถูกเพื่อให้โปรแกรมปิดกระบวนการ ADB (Android Debug Bridge) โดยอัตโนมัติเมื่อทำงานเสร็จสิ้น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเปลี่ยนอุปกรณ์",
            "content": "Change device: เลือก Yes หากต้องการให้มีการเปลี่ยนข้อมูลอุปกรณ์\n\nBrand device (1): กำหนดชื่อยี่ห้ออุปกรณ์\n\nChoose: ปุ่มสำหรับเลือกยี่ห้อหรือรุ่นอุปกรณ์ที่ต้องการแบบเฉพาะเจาะจง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเปลี่ยน IP",
            "content": "Change IP: เลือกรูปแบบการเปลี่ยน IP\n\nDon't Check IP before running: ติ๊กถูกหากไม่ต้องการให้ระบบตรวจสอบ IP ก่อนเริ่มทำงาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Interactive configs : การกำหนดค่าการโต้ตอบ",
            "content": "",
            "type": "markdown",
            "images": [
              "image690.png"
            ]
          },
          {
            "title": "การตั้งค่าก่อนเริ่มรันสคริปต์",
            "content": "Check wall account: ตรวจสอบหน้าวอลล์ของบัญชีก่อนเริ่มงาน\n\nShuffle account order: สลับลำดับบัญชีแบบสุ่ม เพื่อความเป็นธรรมชาติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเข้าสู่ระบบ",
            "content": "Login type: เลือกรูปแบบการล็อกอิน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการทำงาน",
            "content": "Select script: เลือกสคริปต์ที่จะใช้งาน\n\nปุ่ม Script: สำหรับจัดการหรือแก้ไขรายละเอียดของสคริปต์\n\nLimit run time per account (seconds): จำกัดระยะเวลาทำงานต่อ 1 บัญชี\n\nLimit run time per script (minutes): จำกัดระยะเวลาทำงานต่อ 1 สคริปต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าหลังการทำงาน",
            "content": "Auto get token / Auto get cookie: ดึง Token และ Cookie โดยอัตโนมัติ\n\nCheck Info Acc after running: ตรวจสอบข้อมูลบัญชีหลังรันเสร็จ ซึ่งสามารถเลือกเจาะจงข้อมูลได้ เช่น:\n\nข้อมูลส่วนตัว: ชื่อ (Name), เพศ (Gender), วันเกิด (Birthday), อีเมล (Email), เบอร์โทร (Phone)\n\nข้อมูลสังคม: เพื่อน (Friend), กลุ่ม (Group), ผู้ติดตาม (Follow), เพจ (Page)\n\nข้อมูลอื่นๆ: วันที่สร้าง (Date create), รูปโปรไฟล์ (Avatar), โฆษณา (Ads), สถานที่ (Location)\n\nPublic info account: ตั้งค่าให้ข้อมูลบัญชีเป็นสาธารณะ\n\nCheck Friend Suggestions: ตรวจสอบการแนะนำเพื่อน\n\nAllow follow: อนุญาตให้มีการกดติดตาม\n\nPrivate friend list: ตั้งค่ารายการเพื่อนเป็นส่วนตัว\n\nHide number of reactions: ซ่อนจำนวนความรู้สึก (Reactions)\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_5tryi",
        "name": "การใช้งานฟังก์ชั่่น MaxPhoneFarm",
        "sections": [
          {
            "title": "การใช้งานฟังก์ชั่่น MaxPhoneFarm",
            "content": "",
            "type": "markdown",
            "images": [
              "image366.png"
            ]
          },
          {
            "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
            "content": "Seeding\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Review Pages(รีวิวเพจ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image16.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Id Page: ช่องสำหรับระบุ ID ของหน้าที่คุณต้องการเข้าไปทำการรีวิว\n\nLike page: ติ๊กเครื่องหมายถูก หากต้องการให้ระบบกด Like เพจนั้น ๆ ไปด้วยในตัว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการเนื้อหา",
            "content": "Review content (0): ช่องสี่เหลี่ยมขนาดใหญ่สำหรับพิมพ์หรือวางข้อความรีวิว โดยตัวเลขในวงเล็บจะแสดงจำนวนเนื้อหาที่มีอยู่\n\nOption: รูปแบบเนื้อหา\n\nContent is only 1 line: เลือกข้อนี้หากต้องการให้ระบบมองว่าเนื้อหา 1 บรรทัด คือ 1 รีวิว\n\nContent has many lines: เลือกข้อนี้หากเนื้อหารีวิวหนึ่งรายการมีความยาวหลายบรรทัด\n\nปุ่ม (?): ปุ่มช่วยเหลือเพื่อดูคำอธิบายเพิ่มเติมเกี่ยวกับรูปแบบการใส่เนื้อหา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเพิ่มเติม",
            "content": "Auto Delete used content: หากติ๊กช่องนี้ ระบบจะลบเนื้อหาที่ถูกใช้งานไปแล้วออกจากรายการโดยอัตโนมัติ เพื่อป้องกันการรีวิวซ้ำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Buff Like Page(การกดไลค์เพจและติดตามเพจ)",
            "content": "Enter Id Page : ไอดีเพจ\n\n",
            "type": "markdown",
            "images": [
              "image233.png"
            ]
          },
          {
            "title": "3.Buff Follow UID(การกดติดตามโปรไฟล์)",
            "content": "Enter UID : ID Account ที่ต้องการติดตาม\n\n",
            "type": "markdown",
            "images": [
              "image431.png"
            ]
          },
          {
            "title": "4.Interact specified posts (โต้ตอบโพสต์ที่ระบุ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image312.png"
            ]
          },
          {
            "title": "ข้อมูลพื้นฐานและการตั้งค่าเวลา",
            "content": "Posts/account: กำหนดจำนวนโพสต์ที่ต้องการให้แต่ละบัญชีเข้าไปมีปฏิสัมพันธ์\n\nBreak (s): ระยะเวลาหยุดพักระหว่างการทำแต่ละโพสต์\n\nRead post: ระยะเวลาที่ระบบจะทำการ \"เปิดอ่าน\" หรือค้างอยู่ที่หน้าโพสต์นั้นๆ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าข้อมูลเป้าหมาย",
            "content": "List of post links: ช่องสำหรับใส่ URL หรือลิงก์ของโพสต์ที่ต้องการให้ระบบเข้าไปจัดการ โดยตัวเลขในวงเล็บจะแสดงจำนวนลิงก์ที่มีอยู่ในรายการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแสดงความรู้สึกและแชร์",
            "content": "Express feelings: ติ๊กถูกเพื่อเลือกการกด Reaction (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nShare wall: ติ๊กถูกหากต้องการให้ระบบแชร์โพสต์นั้นๆ ไปยังหน้า Timeline ของบัญชี\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าความคิดเห็น",
            "content": "Comment by text: แสดงความเห็นด้วยข้อความ\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: ตัวเลือกรูปแบบข้อความ\n\nAuto Delete used content: ติ๊กถูกหากต้องการให้ระบบลบข้อความที่ใช้ไปแล้วออกจากรายการอัตโนมัติ\n\nComment by image: แสดงความเห็นด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุที่อยู่ของโฟลเดอร์รูปภาพที่ต้องการใช้ในการคอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการวิดีโอ",
            "content": "Interact with videos on posts: ติ๊กถูกหากในโพสต์นั้นเป็นวิดีโอและต้องการให้ระบบดูวิดีโอด้วย\n\nTime watch: กำหนดช่วงเวลาที่จะให้ระบบรับชมวิดีโอ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Interact Posts by Keyword (โต้ตอบโพสต์ด้วยคีย์เวิร์ด)",
            "content": "",
            "type": "markdown",
            "images": [
              "image319.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Posts: กำหนดจำนวนโพสต์ที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์\n\nDelay time: ระยะเวลาหน่วงระหว่างการทำงานในแต่ละโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งการจัดการคีย์เวิร์ด",
            "content": "List of keywords: ใส่คีย์เวิร์ดที่คุณต้องการค้นหา\n\nรูปแบบการกรอก:\n\nใส่ 1 คำต่อ 1 บรรทัด\n\nรองรับระบบ Spin content โดยใช้รูปแบบ {คำที่1|คำที่2|คำที่3} เพื่อสุ่มคำในการค้นหา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบด้วยความรู้สึก",
            "content": "Express feelings: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nตัวเลือกความรู้สึก: เลือกกด Like, Love, Care, Haha, Wow, Sad หรือ Angry ได้ตามต้องการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบด้วยข้อความ",
            "content": "Comment by text: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์\n\nList Comments: ใส่ข้อความที่ต้องการคอมเมนต์ (รองรับ Spin content {a|b|c})\n\nOption: ตัวเลือกเสริม\n\nContent is only 1 line: คอมเมนต์เพียง 1 บรรทัด\n\nContent has many lines: คอมเมนต์แบบมีหลายบรรทัด\n\nRandom icon: ปุ่มสำหรับสุ่มไอคอนใส่ในคอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบด้วยรูปภาพ",
            "content": "Comment by image: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูป\n\nImage folder: ระบุตำแหน่งที่เก็บไฟล์รูปภาพในเครื่องคอมพิวเตอร์ของคุณ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Interact Video (ตอบโต้วิดีโอ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image575.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Link video: ใส่ URL หรือลิงก์ของวิดีโอที่ต้องการให้ระบบเข้าไปดำเนินการ\n\nTime watch: ตั้งค่าระยะเวลาในการรับชมวิดีโอ โดยระบุเป็นช่วง ขั้นต่ำ > สูงสุด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแสดงความรู้สึก",
            "content": "Express feelings: เมื่อติ๊กถูกที่ช่องนี้ คุณสามารถเลือกอิโมจิที่ต้องการให้ระบบกดเลือกได้ เช่น ถูกใจ (Like), รักเลย (Love), ห่วงใย, หัวเราะ, ว้าว, เศร้า หรือ โกรธ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าความคิดเห็น",
            "content": "List Comments: พิมพ์ข้อความที่ต้องการลงในกล่องข้อความ\n\nเทคนิค: สามารถใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มเลือกข้อความ ลดการโดนตรวจจับว่าเป็นบอท\n\nRandom icon: ระบบสุ่มใส่อิโมจิในคอมเมนต์\n\nComment many times: หากต้องการคอมเมนต์หลายครั้ง ให้ตั้งค่า Delay time (s) เพื่อเว้นช่วงเวลาระยะห่างระหว่างแต่ละคอมเมนต์\n\nAuto Delete used content: ติ๊กหากต้องการให้ระบบลบข้อความที่ใช้ไปแล้วออกจากรายการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแชร์",
            "content": "Share wall: ติ๊กถูกหากต้องการให้ระบบแชร์วิดีโอนี้ลงไปที่หน้าไทม์ไลน์ (Wall) ของคุณ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.Invite Friends like Pages (ชวนเพื่อนกดไลค์เพจ)",
            "content": "Quantity : จำนวนเพื่อนที่ต้องการชวน\n\nList of Page IDs : รายการไอดีเพื่อนที่ต้องการกวน\n\n",
            "type": "markdown",
            "images": [
              "image474.png"
            ]
          },
          {
            "title": "8.Invite friends join group (ชวนเพื่อนเข้าร่วมกลุ่ม)",
            "content": "Quantity : จำนวนเพื่อนที่ต้องการชวน\n\nDelay time : ระยะเวลาดีเลย์ในการช่วนเพื่อน\n\nGroup ID : ไอดีกลุ่มที่ต้องการเชิญเพื่อนเข้าร่วม\n\n",
            "type": "markdown",
            "images": [
              "image578.png"
            ]
          },
          {
            "title": "9.Interact Reels by Link (ตอบโต้เรียลด้วยลิงค์)",
            "content": "",
            "type": "markdown",
            "images": [
              "image356.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Time watch: ตั้งค่าระยะเวลาในการรับชมคลิป Reels โดยกำหนดเป็นช่วง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบ",
            "content": "Like: ติ๊กถูกเพื่อกดถูกใจคลิปอัตโนมัติ\n\nShare Wall: ติ๊กถูกเพื่อแชร์คลิปลงบนหน้าวอลล์ (Timeline) ของตนเอง\n\nComment: ติ๊กถูกเพื่อเปิดใช้งานการแสดงความคิดเห็นอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการความคิดเห็น",
            "content": "List Comments: ช่องสำหรับใส่ข้อความที่ต้องการนำไปคอมเมนต์\n\nSpin content {a|b|c}: รองรับการสุ่มคำ (Spin Syntax) เพื่อให้แต่ละคอมเมนต์มีความหลากหลาย\n\nOption (รูปแบบเนื้อหา):\n\nContent is only 1 line: เลือกเมื่อต้องการให้ 1 บรรทัด คือ 1 ข้อความคอมเมนต์\n\nContent has many lines: เลือกเมื่อ 1 ข้อความคอมเมนต์ของคุณมีความยาวหลายบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รายการลิงก์เป้าหมาย",
            "content": "List of reel links: ช่องขนาดใหญ่ทางด้านขวา สำหรับวาง URL หรือลิงก์ของคลิป Reels ที่ต้องการให้ระบบเข้าไปทำงาน\n\nตัวเลขในวงเล็บ (0): จะแสดงจำนวนลิงก์ทั้งหมดที่คุณใส่ลงไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Interact Reels by keywords (ตอบโต้เรียลด้วยคีย์เวิร์ด)",
            "content": "",
            "type": "markdown",
            "images": [
              "image443.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Quantity: กำหนดจำนวนวิดีโอ Reels ที่ต้องการให้ระบบเข้าไปดู โดยระบุเป็นช่วง\n\nTime watch: กำหนดระยะเวลาในการรับชมวิดีโอแต่ละตัว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารูปแบบการปฏิสัมพันธ์",
            "content": "Like: กดถูกใจวิดีโอ\n\nShare Wall: แชร์วิดีโอไปยังหน้าโปรไฟล์ (Wall) ของตนเอง\n\nComment: แสดงความคิดเห็นใต้วิดีโอ (หากเลือกช่องนี้ จะต้องไปตั้งค่าในส่วน \"List Comments\" ต่อ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการความคิดเห็น",
            "content": "List Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nSpin content {a|b|c}: รองรับการใช้รูปแบบ Spin เพื่อสุ่มคำพูด เช่น {สวัสดี|ทักทาย|เยี่ยมเลย} เพื่อลดการตรวจจับว่าเป็นสแปม\n\nOption: รูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัด คือ 1 ข้อความคอมเมนต์\n\nContent has many lines: ข้อความหนึ่งคอมเมนต์มีหลายบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการระบุคำค้นหา",
            "content": "Enter keywords: ช่องสี่เหลี่ยมด้านขวาขนาดใหญ่ ให้คุณระบุคีย์เวิร์ด (คำค้นหา) ที่ต้องการให้ระบบใช้ค้นหาวิดีโอ Reels โดยระบุ 1 คำต่อ 1 บรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Sync Contact (ซิงค์ผู้ติดต่อ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image480.png"
            ]
          },
          {
            "title": "การตั้งค่าการนำเข้าข้อมูล",
            "content": "Import list of Phone numbers: ช่องสี่เหลี่ยมขนาดใหญ่สำหรับใส่รายการหมายเลขโทรศัพท์ที่ต้องการซิงค์\n\nรูปแบบการกรอก: ข้อมูลแต่ละรายการต้องอยู่แยกกันบรรทัดละ 1 รายชื่อ (Each content 1 line)\n\nตัวนับจำนวน: มีตัวเลขแสดงจำนวนหมายเลขที่ถูกนำเข้าในวงเล็บหลังหัวข้อ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการกำหนดปริมาณและการจัดการหมายเลข",
            "content": "Quantity/device: ตั้งค่าจำนวนหมายเลขที่จะใช้ต่อหนึ่งอุปกรณ์ สามารถกำหนดเป็นช่วง\n\nAuto delete used phone numbers: สั่งให้ระบบลบหมายเลขโทรศัพท์ออกจากรายการโดยอัตโนมัติเมื่อใช้งานเสร็จสิ้นแล้ว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเพิ่มเพื่อน",
            "content": "Amount: กำหนดจำนวนเพื่อนที่จะเพิ่ม\n\nDelay time: กำหนดระยะเวลาหน่วงหรือรอระหว่างการดำเนินการ\n\nChange Info\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Change password(เปลี่ยนรหัสผ่าน)",
            "content": "Import new password : นำเข้ารหัสผ่านใหม่\n\nRandom : แบบสุ่ม\n\nImport password : แบบนำเข้าระหัสผ่าน\n\nImport : นำเข้า\n\nLogout of old devices : ออกจากระบบอุปกรณ์เก่า\n\n",
            "type": "markdown",
            "images": [
              "image339.png"
            ]
          },
          {
            "title": "2.Up avatar(อัพรูปโปรไฟล์)",
            "content": "Image folder : เพิ่ม Path Folder ของรูปภาพ เช่น C:\\MaxPhoneFarmPro\\profiles\\img\n\nDelete used images : ลบรูปภาพที่ใช้แล้ว\n\nSkip if already have avatar : ข้ามไปหากมีรูปโปไฟล์อยู่แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image489.png"
            ]
          },
          {
            "title": "3.Up cover(การอัพรูปภาพหน้าปก)",
            "content": "Image folder : ที่อยู่ไฟล์รูปภาพ เช่น C:\\MaxPhoneFarmPro\\profiles\\img Delete used images : ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image86.png"
            ]
          },
          {
            "title": "4.Remove Phone(การลบหมายเลขโทรศัพท์ออกจาก FB)",
            "content": "",
            "type": "markdown",
            "images": [
              "image788.png"
            ]
          },
          {
            "title": "5.On - Off 2FA(การเปิด-ปิด 2FA หรือการยืนยันตัวตนแบบสองชั้น)",
            "content": "Disable 2FA : คือ การปิด 2 FA (ปิดการยืนยันตัวตน 2 ชั้น)\n\nEnable 2FA : คือ  การเปิด 2 FA (เปิดการยืนยันตัวตน 2 ชั้น) - If the account already has 2FA : หาก 2 FA เปิดอยู่แล่ว - Don't enable 2FA : ไม่ต้องการเปิดซ้ำ - Add new 2FA : เพิ่ม 2FA ใหม่ - Remove 2FA + Add new 2FA : ลบ 2FA เก่าออก เพิ่มใหม่6.Add mail (เพิ่มอีเมล์)\n\n",
            "type": "markdown",
            "images": [
              "image131.png"
            ]
          },
          {
            "title": "6.Add mail (เพิ่มอีเมล์)",
            "content": "Add Mail : เพิ่มอีเมล์\n\nType Mail : ประเภทอีเมลล์\n\nSet new mail to primary mail : ตั้งค่าเมลใหม่เป็นเมลหลัก\n\nRemove second mail : ลบอีเมลล์ที่สอง\n\n",
            "type": "markdown",
            "images": [
              "image434.png"
            ]
          },
          {
            "title": "7.Change name (เปลี่ยนชื่อ)",
            "content": "Random name : สุ่มชื่อ\n\nVN name : ชื่อเวียดนาม\n\nForeign name : ชื่อต่างประเทศ\n\nImport : นำเข้าชื่อ\n\nLname : นามสกุล\n\nMiddle name : ชื่อลาง\n\nFname : ชื่อ\n\n",
            "type": "markdown",
            "images": [
              "image57.png"
            ]
          },
          {
            "title": "8.Change Info Account (เปลี่ยนข้อมูลบัญชี)",
            "content": "Bio : เรื่องราว\n\nWork : การทำงาน\n\nHigh School : มัธยม\n\nCollege : วิทยาลัย\n\nCurrent City : เมืองปัจจุบัน\n\nHometown : บ้านเกิด\n\nRelationship : ความสัมพันธ์\n\ngender : เพศ\n\nBirthday : วันเกิด\n\nDon't change info if already has : ไม่เปลี่ยนข้อมูลหากมีอยู่แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image156.png"
            ]
          },
          {
            "title": "9.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)",
            "content": "",
            "type": "markdown",
            "images": [
              "image652.png"
            ]
          },
          {
            "title": "10.Remove Trusted Devices (ลบอุปกรณ์ที่เชื่อถือได้)",
            "content": "",
            "type": "markdown",
            "images": [
              "image554.png"
            ]
          },
          {
            "title": "11.Professional mode (โหมดมืออาชีพ)",
            "content": "Option : ตัวเลือก\n\nTurn on : เปิดโหมดมืออาชีพ\n\nTurn off : ปิดโหมดมืออาชีพ\n\n",
            "type": "markdown",
            "images": [
              "image733.png"
            ]
          },
          {
            "title": "12.Unlock profile (ปลดล็อคโปรไฟล์)",
            "content": "Post - Share - Spam\n\n",
            "type": "markdown",
            "images": [
              "image302.png"
            ]
          },
          {
            "title": "1.Post Wall(การโพสต์หน้าไทม์ไลน์)",
            "content": "",
            "type": "markdown",
            "images": [
              "image454.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Số lượng bài: กำหนดจำนวนโพสต์ที่ต้องการให้ระบบทำ โดยระบุเป็นช่วง\n\nBreak: กำหนดเวลาหยุดพักระหว่างการโพสต์แต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการเนื้อหาข้อความ",
            "content": "List of contents: ช่องสำหรับใส่ข้อความที่ต้องการโพสต์\n\nUse Background: ตัวเลือกสำหรับใช้พื้นหลังสี\n\nAuto delete used content: หากติ๊กช่องนี้ ระบบจะลบข้อความที่โพสต์ไปแล้วออกจากรายการอัตโนมัติ\n\nOption: ตัวเลือกเสริมสำหรับกำหนดรูปแบบข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการรูปภาพ",
            "content": "Image folder: ช่องสำหรับระบุที่อยู่ของโฟลเดอร์รูปภาพในคอมพิวเตอร์\n\nImages: กำหนดจำนวนรูปภาพที่จะใช้ต่อการโพสต์ 1 ครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแท็กเพื่อน",
            "content": "Amount: กำหนดจำนวนเพื่อนที่จะแท็กในแต่ละโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Post Groups (โพสต์กลุ่ม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image67.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Amount groups: กำหนดจำนวนกลุ่มที่จะโพสต์\n\nDelay time: กำหนดเวลาหน่วงระหว่างการโพสต์แต่ละกลุ่ม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเนื้อหาการโพสต์",
            "content": "ส่วนข้อความ (Text)\n\nList of contents: ช่องสำหรับใส่ข้อความที่ต้องการโพสต์\n\nSpin content: รองรับการใช้รูปแบบ {a|b|c} เพื่อสุ่มคำพูด\n\nRandom icon: ปุ่มสำหรับเลือกใส่ไอคอนแบบสุ่ม\n\nUse Background: เลือกโพสต์ข้อความแบบมีพื้นหลัง (Color Background)\n\nAuto delete used content: ลบเนื้อหาที่ใช้แล้วอัตโนมัติ\n\nOption: ตัวเลือกรูปแบบเนื้อหา\n\nContents is only 1 line: 1 ชุดคือ 1 บรรทัด\n\nContents has many lines: เนื้อหา 1 ชุดมีหลายบรรทัด\n\nส่วนรูปภาพ (Image)\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในคอมพิวเตอร์\n\nImages/post: กำหนดจำนวนรูปภาพที่จะใช้ต่อ 1 โพสต์\n\nส่วนแท็กและกิจกรรม (Tag Event)\n\nEvent name: ใส่ชื่อกิจกรรมที่ต้องการแท็ก\n\nExport posted article link: ติ๊กเพื่อให้ระบบส่งออกลิงก์ของโพสต์ที่ทำสำเร็จแล้ว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเลือกกลุ่มเป้าหมาย",
            "content": "Random group joined: สุ่มจากกลุ่มที่เป็นสมาชิกอยู่แล้ว\n\nเลือกเฉพาะกลุ่มที่ไม่ต้องรออนุมัติ (Uncensored)\n\nให้ความสำคัญกับกลุ่มที่มีสมาชิกจำนวนมาก (Priority many members)\n\nป้องกันการโพสต์กลุ่มซ้ำกับบัญชีอื่น (Don't post same group)\n\nโพสต์เฉพาะกลุ่มที่ระบุไว้ในลิสต์ (Only post groups in the list)\n\nImport Group ID: ใส่ ID ของกลุ่มที่ต้องการโพสต์โดยตรง พร้อมตัวเลือก \"Auto delete used ID\" (ลบ ID ที่โพสต์แล้ว)\n\nCreate new group: ใส่ชื่อกลุ่มเพื่อสร้างกลุ่มใหม่\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตัวเลือกเพิ่มเติม",
            "content": "Leave group post approval: ออกจากกลุ่มหากโพสต์นั้นต้องรอการอนุมัติจากแอดมิน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Post Pages(โพสต์เพจ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image449.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number pages: กำหนดจำนวนเพจที่ต้องการโพสต์\n\nDelay time: กำหนดเวลาหน่วงระหว่างการโพสต์แต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการเนื้อหาข้อความ",
            "content": "List of contents: ช่องสำหรับใส่ข้อความที่ต้องการโพสต์ สามารถรองรับรูปแบบ Spin Content เช่น {a|b|c} เพื่อสุ่มคำได้\n\nOption: รูปแบบเนื้อหา\n\nContent is only 1 line: ถือว่าเนื้อหา 1 บรรทัดคือ 1 โพสต์\n\nContent has many lines: ถือว่าเนื้อหาหลายบรรทัดรวมกันเป็น 1 โพสต์\n\nฟีเจอร์เพิ่มเติม:\n\nUse Background: เลือกใช้พื้นหลังสีสันต่าง ๆ\n\nAuto delete used content: ลบเนื้อหาที่ใช้แล้วออกจากรายการโดยอัตโนมัติ\n\nRandom icon: สุ่มใส่ไอคอนหรืออีโมจิในข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการรูปภาพ",
            "content": "Image folder: ระบุที่อยู่ของโฟลเดอร์ที่เก็บรูปภาพในเครื่องคอมพิวเตอร์\n\nImages/post: กำหนดจำนวนรูปภาพที่จะใช้ต่อ 1 โพสต์\n\nDelete used images: เมื่อโพสต์รูปนั้นไปแล้ว ให้ลบไฟล์รูปออกจากโฟลเดอร์ทันที\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.Share(แชร์)",
            "content": "",
            "type": "markdown",
            "images": [
              "image4.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Delay time: กำหนดระยะเวลาหน่วงระหว่างการทำงาน\n\nLink to share: ช่องสำหรับใส่ลิงก์ที่ต้องการนำไปแชร์\n\nType link: เลือกประเภทของลิงก์ ได้แก่ Livestream, Post, หรือ Reel\n\nShare content:\n\nList of contents: ใส่ข้อความที่ต้องการแชร์\n\nOption: เลือกรูปแบบเนื้อหา\n\nAuto Delete used content: ติ๊กเพื่อลบข้อความที่ใช้แล้วโดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์ก่อนแชร์",
            "content": "Time watch: ตั้งเวลาในการดูโพสต์ก่อนแชร์\n\nExpress feelings: เลือกกดแสดงความรู้สึก (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nAuto comment: ตั้งค่าการคอมเมนต์อัตโนมัติ\n\nList Comments: ใส่ข้อความคอมเมนต์\n\nComment many times: เลือกหากต้องการให้คอมเมนต์หลายครั้ง\n\nDelay comment: ระยะเวลาหน่วงระหว่างคอมเมนต์แต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกการแชร์",
            "content": "Share post to wall: แชร์ลงหน้าโปรไฟล์ตนเอง\n\nQuantity: กำหนดจำนวนที่ต้องการแชร์\n\nShare post to group: แชร์ลงกลุ่ม\n\nNumber groups: กำหนดจำนวนกลุ่มที่ต้องการแชร์\n\nAdvanced configs: การตั้งค่าขั้นสูง\n\nOnly share to group uncensored: แชร์เฉพาะกลุ่มที่ไม่ต้องรออนุมัติโพสต์\n\nPriority sharing groups with many members: ให้ความสำคัญกับกลุ่มที่มีสมาชิกจำนวนมากก่อน\n\nDon't share same group with another account: ป้องกันการแชร์ซ้ำในกลุ่มเดียวกันจากหลายบัญชี\n\nUse backed up groups: ใช้รายชื่อกลุ่มที่สำรองไว้\n\nOnly share groups in the list: แชร์เฉพาะกลุ่มที่มีรายชื่ออยู่ในลิสต์ที่กำหนด (ปุ่ม Enter เพื่อจัดการลิสต์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Spam Newfeed(สแปมฟีดข่าว)",
            "content": "",
            "type": "markdown",
            "images": [
              "image735.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Posts: กำหนดช่วงจำนวนโพสต์ที่ต้องการให้ระบบเข้าไปจัดการ\n\nBreak: กำหนดระยะเวลาหยุดพักระหว่างการทำงานในแต่ละโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การแสดงความรู้สึก",
            "content": "Checkbox Express feelings: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nEmoji Selection: สามารถเลือกประเภทของความรู้สึกที่ต้องการได้ (Like, Love, Care, Haha, Wow, Sad, Angry)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแสดงความคิดเห็นด้วยข้อความ",
            "content": "Comment by text: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยข้อความ\n\nList Comments: ช่องว่างสำหรับใส่ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: ตัวเลือกรูปแบบข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแสดงความคิดเห็นด้วยรูปภาพ",
            "content": "Comment by image: ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุที่อยู่ของโฟลเดอร์ (Path) ที่เก็บรูปภาพในเครื่องคอมพิวเตอร์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Spam Friends (สแปมเพื่อน)",
            "content": "",
            "type": "markdown",
            "images": [
              "image293.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Quantity: จำนวนเพื่อนที่ต้องการดำเนินการ\n\nPosts/Friend: จำนวนโพสต์ต่อเพื่อน 1 คน ที่ต้องการให้ระบบเข้าไปจัดการ\n\nBreak: ระยะเวลาหยุดพักระหว่างการทำงาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบด้วยความรู้สึก",
            "content": "Express feelings: สามารถเลือกส่ง Emoji แสดงความรู้สึกไปยังโพสต์ของเพื่อนได้\n\nตัวเลือกที่มี: Like (ถูกใจ), Love (รักเลย), Care (ห่วงใย), Haha (หัวเราะ), Wow (ว้าว), Sad (เศร้า) และ Angry (โกรธ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการแสดงความคิดเห็น",
            "content": "Comment by text: คอมเมนต์ด้วยข้อความ\n\nList Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: รูปแบบการอ่านค่าข้อความ\n\nComment by image: คอมเมนต์ด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุที่อยู่ของโฟลเดอร์รูปภาพในเครื่องคอมพิวเตอร์ที่ต้องการนำมาใช้คอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.Spam Groups (สแปมกลุ่ม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image406.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number groups: จำนวนกลุ่มที่ต้องการให้ระบบทำงาน\n\nPosts/group: จำนวนโพสต์ที่ต้องการดำเนินการต่อ 1 กลุ่ม\n\nBreak: ระยะเวลาหยุดพักระหว่างการทำงาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการตอบสนองด้วยความรู้สึก",
            "content": "Express feelings: คุณสามารถเลือกส่ง Emoji ต่างๆ ได้\n\nปุ่มเลือก Emoji ประกอบด้วย: ถูกใจ (Like), รัก (Love), ห่วงใย (Care), หัวเราะ (Haha), ว้าว (Wow), เศร้า (Sad) และ โกรธ (Angry)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การแสดงความคิดเห็นด้วยข้อความ (Comment by text)",
            "content": "List Comments: ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nOption: ตัวเลือกรูปแบบเนื้อหา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การแสดงความคิดเห็นด้วยรูปภาพ (Comment by image)",
            "content": "Image folder: ช่องสำหรับระบุที่อยู่ไฟล์ (Path) ของโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.Spam Post (สแปมโพสต์)",
            "content": "",
            "type": "markdown",
            "images": [
              "image92.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "IDs/Account: กำหนดจำนวน ID เป้าหมายที่จะให้แต่ละบัญชีเข้าไปจัดการ\n\nAmount posts/ID: จำนวนโพสต์ที่จะให้ลงต่อ 1 ID เป้าหมาย\n\nBreak: ระยะเวลาหยุดพักระหว่างการทำงาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเลือกเป้าหมาย",
            "content": "Object type: เลือกประเภทของเป้าหมายที่ต้องการโพสต์ ประกอบด้วย\n\nProfile: หน้าโปรไฟล์ส่วนตัว\n\nGroup: กลุ่มต่างๆ\n\nPage: หน้าแฟนเพจ\n\nEnter ID User/Group/Page: ช่องสำหรับใส่หมายเลข ID ของเป้าหมายที่คุณต้องการลงโพสต์\n\nAuto delete used ID: หากติ๊กถูก ระบบจะลบ ID ที่ทำงานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารูปแบบการโต้ตอบ",
            "content": "Express feelings: ติ๊กถูกหากต้องการให้ระบบกด Reaction โดยสามารถเลือกไอคอนอารมณ์ต่างๆ ได้\n\nComment by text: ติ๊กถูกเพื่อคอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่ข้อความที่ต้องการในช่อง\n\nOption: ตัวเลือกรูปแบบข้อความ\n\nShare wall: ติ๊กถูกหากต้องการให้มีการแชร์ไปยังหน้า Wall ของตนเอง\n\nComment by image: ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ โดยเลือกโฟลเดอร์รูปภาพจากเครื่องของคุณ\n\nReel: ติ๊กถูกหากต้องการเน้นการทำงานไปที่ส่วนของ Reels\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9.Post Reels (โพสต์เรียล)",
            "content": "",
            "type": "markdown",
            "images": [
              "image390.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Quantity: กำหนดจำนวนคลิป Reels ที่ต้องการโพสต์\n\nDelay time: กำหนดระยะเวลาหน่วงระหว่างการโพสต์แต่ละคลิป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการไฟล์วิดีโอ",
            "content": "Video folder: ช่องระบุที่อยู่ของโฟลเดอร์ (Path) ที่เก็บไฟล์วิดีโอไว้\n\nDelete used video: หากเลือกช่องนี้ ระบบจะลบไฟล์วิดีโอออกจากโฟลเดอร์ทันทีหลังจากโพสต์สำเร็จ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการเนื้อหาและแฮชแท็ก",
            "content": "Description: ติ๊กถูกเพื่อเปิดใช้งานการใส่คำบรรยายใต้โพสต์\n\nList of contents: ช่องสำหรับพิมพ์เนื้อหา (รองรับระบบ Spin content {a|b|c} เพื่อสุ่มข้อความ)\n\nRandom icon: ปุ่มสำหรับสุ่มใส่ไอคอนในเนื้อหา\n\nOption: เลือกว่าเนื้อหา 1 บรรทัดคือ 1 โพสต์ (Content is only 1 line) หรือเนื้อหาหลายบรรทัดรวมเป็น 1 โพสต์ (Content has many lines)\n\nAuto delete used content: ลบเนื้อหาที่ใช้แล้วออกจากรายการอัตโนมัติ\n\nHashtag: ติ๊กถูกเพื่อเปิดใช้งานการใส่แฮชแท็ก\n\nList of Hashtag: ช่องสำหรับใส่รายการแฮชแท็กที่ต้องการ\n\nHashtags/content: กำหนดจำนวนแฮชแท็กที่จะสุ่มมาใช้ต่อ 1 โพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าขั้นสูง",
            "content": "Timeout chờ load video: กำหนดเวลาสูงสุดในการรอโหลดวิดีโอ\n\nNếu timeout thì sẽ tính là: หากเกิดกรณีหมดเวลา (Timeout) จะให้ระบบบันทึกสถานะเป็นอะไร\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Post Story (โพสต์สตอรี่)",
            "content": "",
            "type": "markdown",
            "images": [
              "image713.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐานของการทำงาน",
            "content": "Amount stories: กำหนดจำนวนสตอรี่ที่ต้องการโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกรูปแบบเนื้อหา",
            "content": "ข้อความ (Text)\n\nStory content: ช่องสำหรับใส่ข้อความที่ต้องการโพสต์ลงในสตอรี่\n\nUse Background: ติ๊กถูกหากต้องการใช้พื้นหลังสำหรับข้อความ\n\nรูปภาพหรือวิดีโอ (Post Image/Video)\n\nMedia folder: เลือกโฟลเดอร์ที่เก็บไฟล์ภาพหรือวิดีโอที่ต้องการใช้งาน\n\nDelete used media: ติ๊กถูกหากต้องการให้ระบบลบไฟล์ออกจากโฟลเดอร์หลังจากโพสต์เสร็จแล้ว\n\nAttach link: ติ๊กถูกเพื่อแนบลิงก์ (หมายเหตุ: ใช้ได้เฉพาะบางบัญชีที่มีสิทธิ์เท่านั้น)\n\nList of links: ช่องสำหรับระบุลิงก์ที่ต้องการแนบไปกับโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเพลงประกอบ",
            "content": "Song (Radio Button): เลือกหากต้องการใส่เพลง\n\nRandom song: เลือกเพื่อให้ระบบสุ่มเพลงให้โดยอัตโนมัติ\n\nEnter song: เลือกหากต้องการระบุเพลงเอง\n\nList songs: ช่องสำหรับใส่รายชื่อเพลงที่ต้องการ\n\nUse Background (Song): ติ๊กถูกเพื่อใช้พื้นหลังในขณะที่เล่นเพลง\n\nImage: ติ๊กถูกหากต้องการใส่รูปภาพประกอบกับเพลง\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพ\n\nDelete used images: ติ๊กถูกหากต้องการลบรูปภาพที่ใช้งานแล้วออก\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Seeding Events (การดันอีเวนต์)",
            "content": "",
            "type": "markdown",
            "images": [
              "image476.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Link Event: ช่องสำหรับวาง URL หรือลิงก์ของกิจกรรม (Event) ที่คุณต้องการให้ระบบเข้าไปดำเนินการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกการดำเนินการ",
            "content": "Interested: ติ๊กถูกเพื่อให้บัญชีเข้าไปกด \"สนใจ\" กิจกรรม\n\nGoing: ติ๊กถูกเพื่อให้บัญชีเข้าไปกด \"เข้าร่วม\" กิจกรรม\n\nInvite friends: ติ๊กถูกหากต้องการให้บัญชีทำการเชิญเพื่อนมาเข้าร่วมกิจกรรมนี้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การควบคุมปริมาณและเวลา",
            "content": "Quantity: กำหนดจำนวนครั้งหรือจำนวนบัญชีที่จะใช้งาน\n\nDelay: กำหนดเวลาหน่วงในการทำงาน\n\nAdd Friends - Join Groups\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Add friends by keyword (เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
            "content": "",
            "type": "markdown",
            "images": [
              "image584.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Quantity: จำนวนเพื่อนทั้งหมดที่ต้องการเพิ่มในรอบนั้นๆ\n\nDelay time: ระยะเวลาการรอ ระหว่างการดำเนินการแต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าคีย์เวิร์ด",
            "content": "List of keywords: ช่องสำหรับใส่คำค้นหาที่คุณต้องการ\n\nกฎการพิมพ์: 1 คีย์เวิร์ด ต่อ 1 บรรทัด\n\nฟีเจอร์ Spin Content: คุณสามารถใช้รูปแบบ {a|b|c} เพื่อให้ระบบสุ่มเลือกคำมาใช้ได้\n\nFriends/keyword: กำหนดจำนวนเพื่อนที่จะเพิ่มต่อหนึ่งคีย์เวิร์ด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Add friends by UID (เพิ่มเพื่อนด้วย UID)",
            "content": "",
            "type": "markdown",
            "images": [
              "image540.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number friends: กำหนดช่วงจำนวนเพื่อนที่ต้องการเพิ่ม\n\nDelay time: กำหนดระยะเวลาการรอ ระหว่างการส่งคำขอแต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารายชื่อเป้าหมายและการจัดการ",
            "content": "List Uid to add friends: ช่องสำหรับใส่หมายเลข UID ของผู้ที่ต้องการเพิ่มเป็นเพื่อน\n\nหมายเหตุ: ใส่ 1 UID ต่อ 1 บรรทัดเท่านั้น\n\nAuto delete Uid after sent invitation: หากติ๊กถูก ระบบจะลบ UID ออกจากรายการโดยอัตโนมัติหลังจากส่งคำขอแล้ว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบก่อนเพิ่มเพื่อน",
            "content": "Interact before add friends: ติ๊กถูกที่ช่องนี้เพื่อเปิดใช้งานระบบโต้ตอบก่อนส่งคำขอ\n\nTotal time: กำหนดช่วงเวลาทั้งหมดที่จะใช้ในการโต้ตอบ\n\nLike: ติ๊กเพื่อระบุจำนวนครั้งที่ต้องการกดถูกใจ\n\nComment: ติ๊กเพื่อระบุจำนวนครั้งที่ต้องการแสดงความคิดเห็น\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nหมายเหตุ: ใส่ 1 ข้อความต่อ 1 บรรทัด และรองรับการใช้รูปแบบ Spin Content เช่น {ข้อความA|ข้อความB|ข้อความC} เพื่อสุ่มคำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Add friends by suggestions (เพิ่มเพื่อนตามคำแนะนำ)",
            "content": "Number frinds : จำนวนเพื่อน\n\nDelay time : ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image176.png"
            ]
          },
          {
            "title": "4.Confirm Friend (ยืนยันเพื่อน)",
            "content": "Number friends : จำนวนเพื่อน\n\nDelay time : ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image177.png"
            ]
          },
          {
            "title": "5.Unfriend (เลิกเป็นเพื่อน)",
            "content": "",
            "type": "markdown",
            "images": [
              "image201.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Delay time: ตั้งค่าการหน่วงเวลาระหว่างการลบแต่ละคน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกการลบเพื่อน",
            "content": "สุ่มลบเพื่อน (Random friends)\n\nAmount: กำหนดจำนวนเพื่อนที่ต้องการลบ\n\nลบเพื่อนตามรหัส UID (Unfriend by UID)\n\nList of Uid to unfriend: ช่องสำหรับใส่รหัส UID ของเพื่อนที่ต้องการลบ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารายชื่อที่ต้องการยกเว้น",
            "content": "List of UID friends to keep: ช่องขนาดใหญ่ทางด้านขวา มีไว้สำหรับใส่รหัส UID ของเพื่อนที่ \"ต้องการเก็บไว้\" (ห้ามลบเด็ดขาด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Add friends vs group members (เพิ่มเพื่อนในสมาชิกกลุ่ม)",
            "content": "Number friends : จำนวนเพื่อน\n\nBreak : ระยะเวลาหยุดพัก\n\nList of group Ids : รายการ ID กลุ่ม\n\n",
            "type": "markdown",
            "images": [
              "image399.png"
            ]
          },
          {
            "title": "7.Join groups by keyword (เข้าร่วมกลุ่มตามคำสำคัญ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image93.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number groups: กำหนดจำนวนกลุ่มที่ต้องการให้ระบบเข้าร่วม\n\nDelay time: กำหนดระยะเวลาการรอ ระหว่างการดำเนินการแต่ละครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการคำค้นหา",
            "content": "List of keywords: ช่องสำหรับใส่คำค้นหาที่ต้องการ\n\nใส่คำค้นหา 1 คำต่อ 1 บรรทัด\n\nสามารถใช้รูปแบบการปั่นข้อความ (Spin content) ได้ เช่น {คำที่1|คำที่2|คำที่3} เพื่อให้ระบบสุ่มเลือกคำมาใช้งาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการตอบคำถามอัตโนมัติ",
            "content": "Auto answer questions: ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบตอบคำถามโดยอัตโนมัติ\n\nList of answers: ช่องสำหรับใส่คำตอบที่เตรียมไว้\n\nใส่ 1 คำตอบต่อ 1 บรรทัด\n\nรองรับการใช้งานรูปแบบ Spin content {a|b|c} เช่นเดียวกับคำค้นหา เพื่อให้คำตอบมีความหลากหลาย\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.Join groups by ID",
            "content": "",
            "type": "markdown",
            "images": [
              "image640.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Number groups: กำหนดจำนวนกลุ่มที่ต้องการเข้าร่วม\n\nDelay time: ระยะเวลาหน่วง ระหว่างการส่งคำขอเข้าร่วมแต่ละกลุ่ม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการ ID กลุ่ม",
            "content": "List of Id groups to join: ช่องสำหรับใส่ ID หรือ UID ของกลุ่มที่ต้องการเข้าร่วม\n\nกฎการกรอก: ใส่ 1 ID ต่อ 1 บรรทัด (Each Uid 1 line)\n\nAuto delete Id group that sent a join request: หากติ๊กถูกที่ช่องนี้ ระบบจะลบ ID กลุ่มออกจากรายการโดยอัตโนมัติหลังจากส่งคำขอเข้าร่วมสำเร็จ เพื่อป้องกันการส่งซ้ำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าระบบตอบคำถามอัตโนมัติ",
            "content": "Auto answer questions: ติ๊กถูกที่หน้าช่องนี้ หากกลุ่มที่คุณจะเข้าร่วมมีการตั้งคำถามก่อนเข้า\n\nList of answers: ช่องสำหรับใส่คำตอบล่วงหน้า\n\nกฎการกรอก: ใส่ 1 คำตอบ ต่อ 1 บรรทัด (Each content 1 line) หากมีหลายคำถาม ระบบจะดึงคำตอบจากรายการนี้ไปตอบตามลำดับ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9.Join suggestion group (เข้าร่วมกลุ่มที่แนะนำ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image362.png"
            ]
          },
          {
            "title": "การตั้งค่าปริมาณและระยะเวลา",
            "content": "Number groups: ตั้งค่าจำนวนกลุ่มที่ต้องการเข้าร่วม\n\nDelay time: ตั้งค่าระยะเวลารอคอย ระหว่างการเข้ากลุ่มแต่ละกลุ่ม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการตอบคำถามอัตโนมัติ",
            "content": "Auto answer questions: ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบตอบคำถามก่อนเข้ากลุ่มโดยอัตโนมัติ\n\nList of answers: ช่องสำหรับกรอกคำตอบที่เตรียมไว้\n\nเงื่อนไขการกรอก: ให้ใส่คำตอบ 1 บรรทัด ต่อ 1 ข้อความ (Each content 1 line)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Leave group (ออกจากกลุ่ม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image743.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number groups: กำหนดจำนวนกลุ่มที่ต้องการให้ออก\n\nDelay time: ระยะเวลาหน่วง ระหว่างการออกจากแต่ละกลุ่ม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกรูปแบบการออกจากกลุ่ม",
            "content": "Random group list: ระบบจะสุ่มเลือกกลุ่มที่จะออกจากรายชื่อกลุ่มทั้งหมดที่มีอยู่\n\nLeave group with conditions: ออกจากกลุ่มตามเงื่อนไขที่กำหนด\n\nLeave group moderating posts: ออกจากกลุ่มที่เราต้องรอการอนุมัติโพสต์ (Admin ตรวจสอบโพสต์)\n\nNumber of members is less: ออกจากกลุ่มที่มีจำนวนสมาชิกน้อยกว่าค่าที่ระบุ\n\nGroup name contains keywords: ออกจากกลุ่มที่ชื่อกลุ่มมีคำค้นหา (Keywords) ที่เรากำหนด\n\nใส่คำที่ต้องการในช่อง List of keywords (1 คำต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารายชื่อกลุ่มที่ไม่ต้องการออก",
            "content": "List of ID groups to keep: ใส่ ID ของกลุ่ม ที่คุณต้องการเก็บไว้ (ไม่ให้ออกจากกลุ่มเหล่านี้เด็ดขาด) แม้ว่ากลุ่มนั้นจะตรงกับเงื่อนไขการออกก็ตาม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Create group (สร้างกลุ่ม)",
            "content": "Amount groups : จำนวนกลุ่ม\n\nGroup name : ชื่อกลุ่ม\n\n",
            "type": "markdown",
            "images": [
              "image558.png"
            ]
          },
          {
            "title": "12.Create page (สร้างเพจ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image252.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Amount pages: กำหนดจำนวนเพจที่ต้องการสร้าง\n\nDelay time (s): กำหนดระยะเวลาหน่วง ระหว่างการสร้างแต่ละเพจ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารายละเอียดข้อมูลเพจ",
            "content": "Page name (1): ช่องสำหรับกรอกชื่อเพจที่ต้องการสร้าง โดยสามารถระบุชื่อที่ต้องการลงในช่องข้อความ\n\nPage category (1): ช่องสำหรับกำหนดหมวดหมู่ของเพจ เพื่อให้ตรงกับวัตถุประสงค์การใช้งาน\n\nInteractive\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Read notification (อ่านข้อความแจ้งเตือน)",
            "content": "Quantity : คือ จำนวน ข้อความแจ้งเตือนที่ต้องการให้อ่านDelay time : คือ ระยะเวลาดีเลย์ของการอ่านแจ้งเตือนแต่ละอัน\n\n",
            "type": "markdown",
            "images": [
              "image627.png"
            ]
          },
          {
            "title": "2. Watch Reels (ดูวีดีโอสั้น)",
            "content": "",
            "type": "markdown",
            "images": [
              "image328.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Time watch: กำหนดช่วงระยะเวลาในการรับชมวิดีโอแต่ละคลิป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าปฏิสัมพันธ์",
            "content": "Like: กดถูกใจวิดีโออัตโนมัติ\n\nShare Wall: แชร์วิดีโอไปยังหน้าโปรไฟล์ (Wall) ของตนเอง\n\nComment: แสดงความคิดเห็นใต้คลิปวิดีโอ (หากเลือกข้อนี้ จะต้องตั้งค่าในส่วนถัดไป)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการความคิดเห็น",
            "content": "List Comments: กรอกข้อความที่ต้องการใช้คอมเมนต์\n\nOption: ตัวเลือกรูปแบบของเนื้อหา\n\nปุ่ม [?]: ใช้สำหรับดูคำแนะนำเพิ่มเติมเกี่ยวกับวิธีการพิมพ์ข้อความหรือการใช้สัญลักษณ์พิเศษ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Watch Story (ดูสตอรี่)",
            "content": "Time watch : ระยะเวลาในการดู\n\nExpress felings : แสดงความรู้สึก\n\nAuto comment : แสดงความคิดเห็น\n\nList Comments : รายการความคิดเห็น\n\n",
            "type": "markdown",
            "images": [
              "image422.png"
            ]
          },
          {
            "title": "4.Watch video (ดูวีดีโอ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image353.png"
            ]
          },
          {
            "title": "การตั้งค่าเวลา",
            "content": "Time watch: กำหนดช่วงเวลาในการรับชมวิดีโอ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การโต้ตอบอัตโนมัติ",
            "content": "Like: กดถูกใจวิดีโอ\n\nShare Wall: แชร์วิดีโอไปยังหน้าวอลล์ (Timeline)\n\nComment: แสดงความคิดเห็นใต้คลิปวิดีโอ\n\nหมายเหตุ: ช่องตัวเลขด้านหลัง Like, Share, และ Comment (เช่น 1 > 3) ใช้สำหรับกำหนด จำนวนครั้ง หรือ ช่วงการสุ่ม ในการทำกิจกรรมนั้นๆ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารายละเอียดความคิดเห็น",
            "content": "List Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: เมนูเลือกรูปแบบเนื้อหา\n\nปุ่ม ?: ปุ่มช่วยเหลือสำหรับดูคำแนะนำเพิ่มเติมในการใส่ข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5. Watch Videos by keywords (ดูวีดีโอ ตามคีย์เวิร์ด )",
            "content": "",
            "type": "markdown",
            "images": [
              "image512.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Keywords: ช่องสำหรับใส่คำค้นหาที่ต้องการให้ระบบไปค้นหาวิดีโอ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเวลาในการรับชม",
            "content": "Time watch: กำหนดช่วงเวลาเป็น วินาที\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบ",
            "content": "Like: กดถูกใจวิดีโอ\n\nShare Wall: แชร์วิดีโอไปยังหน้าโปรไฟล์หรือวอลล์\n\nComment: แสดงความคิดเห็น\n\nหมายเหตุ: ตัวเลขด้านหลัง (เช่น 1 > 3) คือการสุ่มจำนวนครั้งหรือเงื่อนไขการทำงานในแต่ละรอบ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการความคิดเห็น",
            "content": "List Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: เลือกรูปแบบของเนื้อหา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6. Interact Newsfeed (โต้ตอบฟีดข่าว)",
            "content": "",
            "type": "markdown",
            "images": [
              "image98.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Time watch: ตั้งค่าช่วงเวลาที่ต้องการให้โปรแกรมหยุดดู (Watch) ในแต่ละโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเลือกประเภทการปฏิสัมพันธ์",
            "content": "Like: ติ๊กเพื่อสั่งให้กดถูกใจโพสต์ (ระบุจำนวนครั้งที่ต้องการสุ่มกด)\n\nShare Wall: ติ๊กเพื่อสั่งให้แชร์โพสต์ไปยังหน้าวอลล์ของตัวเอง (ระบุจำนวนครั้งที่ต้องการสุ่มแชร์)\n\nComment: ติ๊กเพื่อสั่งให้แสดงความคิดเห็นใต้โพสต์ (ระบุจำนวนครั้งที่ต้องการสุ่มคอมเมนต์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการข้อความความคิดเห็น",
            "content": "List Comments: ช่องสำหรับใส่ข้อความที่ต้องการให้โปรแกรมนำไปคอมเมนต์\n\nOption: เมนูเลือกรูปแบบการดึงข้อความไปใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7. Interact Friends (โต้ตอบกับเพื่อน)",
            "content": "",
            "type": "markdown",
            "images": [
              "image463.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "Number friends: กำหนดจำนวนเพื่อนที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารายละเอียดการปฏิสัมพันธ์",
            "content": "Time watch: ระยะเวลาที่ระบบจะ \"เปิดดู\" หน้าของเพื่อน\n\nLike: ติ๊กถูกเพื่อสั่งให้ระบบกด Like โพสต์ของเพื่อน โดยกำหนดจำนวนครั้งเป็นช่วง\n\nShare Wall: ติ๊กถูกเพื่อสั่งให้ระบบแชร์โพสต์ไปยังหน้า Wall ของเรา โดยกำหนดจำนวนครั้งเป็นช่วง\n\nComment: ติ๊กถูกเพื่อสั่งให้ระบบพิมพ์ข้อความแสดงความคิดเห็น โดยกำหนดจำนวนครั้งเป็นช่วง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การจัดการข้อความคอมเมนต์",
            "content": "List Comments: พื้นที่สีเทาขนาดใหญ่สำหรับใส่เนื้อหาคอมเมนต์ที่ต้องการให้ระบบสุ่มไปใช้งาน\n\nOption: รูปแบบการอ่านค่าข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.Interact Groups(การดูและการมีส่วนร่วมกับกลุ่ม)",
            "content": "",
            "type": "markdown",
            "images": [
              "image21.png"
            ]
          },
          {
            "title": "การตั้งค่าพื้นฐาน",
            "content": "Number groups: กำหนดจำนวนกลุ่มที่ต้องการให้ระบบเข้าไปดำเนินการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์",
            "content": "Time watch: ระยะเวลาในการรับชมหรืออยู่ในกลุ่ม\n\nLike: ติกถูกเพื่อสั่งให้กดไลก์ และกำหนดจำนวนครั้ง\n\nShare Wall: ติกถูกเพื่อสั่งให้แชร์โพสต์ไปยังหน้าวอลล์ (ไทม์ไลน์) และกำหนดจำนวนครั้ง\n\nComment: ติกถูกเพื่อสั่งให้แสดงความคิดเห็น และกำหนดจำนวนครั้ง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการข้อความความคิดเห็น",
            "content": "List Comments (0): ช่องสำหรับใส่ข้อความที่ต้องการให้ระบบนำไปสุ่มใช้คอมเมนต์ (ใส่ 1 ข้อความต่อ 1 บรรทัด)\n\nOption: ตัวเลือกรูปแบบของเนื้อหา\n\nปุ่ม ? (Help): ปุ่มสำหรับดูคำอธิบายหรือคำแนะนำเพิ่มเติมเกี่ยวกับการใช้ฟีเจอร์คอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9.Interact Page (โต้ตอบเพจ)",
            "content": "",
            "type": "markdown",
            "images": [
              "image17.png"
            ]
          },
          {
            "title": "การตั้งค่าการจัดการเป้าหมาย",
            "content": "Number pages: กำหนดจำนวนเพจที่ต้องการให้ระบบเข้าไปดำเนินการ\n\nList ID pages (0): ช่องว่างสำหรับใส่รายการ ID ของเพจที่ต้องการให้ระบบเข้าไปปฏิสัมพันธ์\n\nAuto delete Used Id Page: หากเลือกช่องนี้ ระบบจะลบ ID ของเพจทิ้งโดยอัตโนมัติหลังจากที่ทำงานเสร็จแล้ว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์",
            "content": "Time watch: กำหนดระยะเวลา ที่จะให้ระบบหยุดดูหรือแช่อยู่ในหน้าเพจนั้น ๆ\n\nLike: ติ๊กถูกเพื่อสั่งให้ระบบกด \"ถูกใจ\" (สามารถกำหนดจำนวนครั้งเป็นช่วงได้)\n\nShare Wall: ติ๊กถูกเพื่อสั่งให้ระบบกด \"แชร์\" ลงบนวอลล์ (สามารถกำหนดจำนวนครั้งเป็นช่วงได้)\n\nComment: ติ๊กถูกเพื่อสั่งให้ระบบทำการ \"คอมเมนต์\"\n\nList Comments (0): ช่องสำหรับระบุข้อความที่จะใช้คอมเมนต์\n\nOption: ตัวเลือกรูปแบบข้อความสำหรับการคอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Interact Wall (ตอบโต้หน้าไทม์ไลน์)",
            "content": "",
            "type": "markdown",
            "images": [
              "image12.png"
            ]
          },
          {
            "title": "การตั้งค่าการกำหนดข้อมูลพื้นฐาน",
            "content": "Time watch: กำหนดช่วงเวลา ในการรับชมโพสต์หรือหน้าวอลล์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการเลือกประเภทการโต้ตอบ",
            "content": "Like: คลิกเพื่อเปิดการใช้งานการกดไลก์\n\nShare Wall: คลิกเพื่อเปิดการใช้งานการแชร์โพสต์ไปยังวอลล์\n\nComment: คลิกเพื่อเปิดการใช้งานการแสดงความคิดเห็น\n\nหมายเหตุ: สามารถเลือกเปิด-ปิดฟังก์ชันที่ต้องการได้โดยการทำเครื่องหมายถูกที่ช่องด้านหน้า และกำหนดจำนวนครั้งแบบสุ่ม (Min > Max)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการความคิดเห็น",
            "content": "List Comments (0): ช่องสำหรับกรอกข้อความที่ต้องการให้ระบบนำไปคอมเมนต์ โดยตัวเลขในวงเล็บจะบอกจำนวนข้อความที่มีอยู่\n\nOption: เมนูสำหรับตั้งค่ารูปแบบข้อความ\n\nปุ่ม ?: ปุ่มช่วยเหลือหรือคำแนะนำเพิ่มเติมเกี่ยวกับการตั้งค่าคอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Breaks (พัก)",
            "content": "Delay time (s) : ระยะเวลา (วินาที)\n\n",
            "type": "markdown",
            "images": [
              "image573.png",
              "image281.jpg"
            ]
          },
          {
            "title": "MaxCloudPhone ฟังก์ชันหลัก",
            "content": "อ่านการแจ้งเตือน\n\nสุ่มดูวิดีโอ\n\nดูวิดีโอที่ระบุเฉพาะเจาะจง\n\nดูวิดีโอจากคีย์เวิร์ด\n\nดูวิดีโอของผู้ใช้\n\nสุ่มเข้าดูไลฟ์สด\n\nเข้าดูไลฟ์สดที่ระบุเฉพาะเจาะจง\n\nติดตามผู้ใช้งาน\n\nติดตามผู้ใช้งานจากคีย์เวิร์ด\n\nติดตามกลับ\n\nติดตามผู้ใช้งานจากโปรไฟล์\n\nติดตามผู้ใช้งานที่ระบบแนะนำ\n\nส่งข้อความไปยังเป้าหมายที่กำหนด\n\nตอบกลับความคิดเห็นที่ระบุเฉพาะเจาะจง\n\nปั๊มยอดเข้าชมสินค้า\n\nสร้างรายได้\n\nสร้างโพสต์\n\nอัปเดตรูปโปรไฟล์\n\nเปลี่ยนชื่อ\n\nเปลี่ยนคำอธิบายโปรไฟล์\n\nกดไลก์สาธารณะ\n\nโหมดพักการทำงาน\n\nลบโพสต์บนหน้าวอลล์\n\n",
            "type": "markdown",
            "images": [
              "image192.png"
            ]
          }
        ],
        "subCategories": []
      }
    ]
  },
  {
    "id": "maxcloudphone",
    "name": "MaxCloudPhone",
    "categories": [
      {
        "id": "cat_d3486",
        "name": "การตั้งค่ามือถือ",
        "sections": [
          {
            "title": "การตั้งค่ามือถือ",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_vt9zv",
            "name": "วิธีติดตั้งแอป (Install App)",
            "sections": [
              {
                "title": "วิธีติดตั้งแอป (Install App)",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "MaxCloudPhone วิธีติดตั้งแอป",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "ขั้นตอนการติดตั้ง",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.ขั้นตอนการติดตั้งดาวน์โหลดไฟล์ APK",
                "content": "เข้าไปที่เว็บไซต์ Max Cloud Phone\n\n",
                "type": "markdown",
                "images": [
                  "image782.png"
                ]
              },
              {
                "title": "2. เริ่มการติดตั้งแอป",
                "content": "ไปที่เมนู ติดตั้ง APK ในอุปกรณ์ของคุณ\n\nเลือกแอปที่ต้องการติดตั้งจากรายการ\n\n",
                "type": "markdown",
                "images": [
                  "image542.png"
                ]
              },
              {
                "title": "3. เลือกไฟล์ที่ดาวน์โหลด",
                "content": "ค้นหาไฟล์ APK ที่ดาวน์โหลดจากเว็บไซต์\n\nกดติดตั้งแอปตามขั้นตอนที่แสดงบนหน้าจอ\n\n",
                "type": "markdown",
                "images": [
                  "image349.png",
                  "image739.png",
                  "image4.png"
                ]
              },
              {
                "title": "4. ติดตั้งสำเร็จ",
                "content": "รอจนกว่าการติดตั้งจะเสร็จสมบูรณ์\n\nเมื่อเสร็จสิ้น คุณสามารถเปิดแอปและเริ่มใช้งานได้ทันที\n\n✅ หมายเหตุ: หากมีการแจ้งเตือนเกี่ยวกับความปลอดภัยในการติดตั้งแอปจากแหล่งที่ไม่รู้จัก กรุณาไปที่การตั้งค่าอุปกรณ์และอนุญาตให้ติดตั้งแอปจากแหล่งที่ไม่รู้จักก่อนทำการติดตั้ง\n\n",
                "type": "markdown",
                "images": [
                  "image552.png"
                ]
              }
            ]
          },
          {
            "id": "cat_sgjwo",
            "name": "วิธีใส่ Token เพื่อเชื่อมต่อกับมือถือ",
            "sections": [
              {
                "title": "วิธีใส่ Token เพื่อเชื่อมต่อกับมือถือ",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.คัดลอก Token จากเว็บไซต์",
                "content": "ไปที่ Max Cloud Phone\n\nเข้าสู่ระบบบัญชีของคุณ\n\nไปที่ การจัดการอุปรณ์ แล้วคัดลอก Token ตามตัวอย่างในรูป\n\n",
                "type": "markdown",
                "images": [
                  "image618.png",
                  "image532.png",
                  "image545.png"
                ]
              },
              {
                "title": "2. เปิดแอปบนมือถือ",
                "content": "เปิดแอป Maxcloud บนอุปกรณ์ของคุณ\n\nวาง Token ที่คัดลอกมาลงในช่องที่กำหนด\n\nแล้วกด Login ได้เลย\n\n",
                "type": "markdown",
                "images": [
                  "image552.png",
                  "image241.png"
                ]
              }
            ]
          },
          {
            "id": "cat_xz4nc",
            "name": "วิธีตั้งค่าแอป MaxCloudPhone หลังจากใส่ Token",
            "sections": [
              {
                "title": "วิธีตั้งค่าแอป MaxCloudPhone หลังจากใส่ Token",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1. เริ่มต้นการตั้งค่าแอป",
                "content": "หลังจากใส่ Token เสร็จแล้ว แอปจะพาคุณมายังหน้า ตั้งค่าแอป\n\nกดปุ่ม Start เพื่อเริ่มการตั้งค่า\n\n",
                "type": "markdown",
                "images": [
                  "image686.png"
                ]
              },
              {
                "title": "2.อนุญาตการเข้าถึง",
                "content": "ให้กด อนุญาต\n\n",
                "type": "markdown",
                "images": [
                  "image425.png"
                ]
              },
              {
                "title": "3. แอปจะพาคุณไปยังหน้าตั้งค่าใหม่",
                "content": "รอจนระบบพามายังหน้านี้\n\nให้กลับไปที่แอพ MaxCloudphone\n\n",
                "type": "markdown",
                "images": [
                  "image24.png"
                ]
              },
              {
                "title": "4.จากนั้นกดที่ MOBILE DATA",
                "content": "ทำการตั้งค่า Device assistance app\n\nเลือก MaxCloudPhone\n\nกด OK\n\n",
                "type": "markdown",
                "images": [
                  "image144.png",
                  "image153.png",
                  "image477.png",
                  "image303.png"
                ]
              },
              {
                "title": "5.ทำการตั้งค่าคีย์บอร์ด",
                "content": "กดที่ KEYBOARD\n\nเลือก Maxcloud เป็นคีย์บอร์ดหลัก\n\n✅ เสร็จสิ้นขั้นตอนการติดตั้ง หากหน้าจอการตั้งค่ามือถือของคุณไม่ตรงตามคู่มือนี้ กรุณาติดต่อ แอดมิน เพื่อสอบถามรายละเอียดเพิ่มเติม\n\n",
                "type": "markdown",
                "images": [
                  "image308.png",
                  "image294.png",
                  "image435.png"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_h6fq8",
        "name": "การตั้งค่าเบื้องต้น",
        "sections": [
          {
            "title": "การตั้งค่าเบื้องต้น",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_le4ey",
            "name": "วิธีการเพิ่มบัญชี Tiktok",
            "sections": [
              {
                "title": "วิธีการเพิ่มบัญชี Tiktok",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.ไปที่เมนู Social Accounts",
                "content": "",
                "type": "markdown",
                "images": [
                  "image196.png"
                ]
              },
              {
                "title": "2.ไปที่เมนู นำเข้าบัญชี",
                "content": "",
                "type": "markdown",
                "images": [
                  "image127.png"
                ]
              },
              {
                "title": "3.เพิ่มข้อมูลบัญชี TikTok",
                "content": "กรอกข้อมูลบัญชี\n\nตัวอย่างเช่น:\n\npatsadchara9|78sadas8F1Zr@|4NYFSDGHEWFWFKDWUQDFJLASUIL|JanendsfseNit59@hotmail.com|KWTvasfdsadsad16O\n\nเลือก Format\n\nUID|Pass|2Fa|Email|Pass_mail (ให้ใส่ Format ตามข้อมูลที่มีได้เลย)\n\nจากนั้นกด บันทึก\n\n",
                "type": "markdown",
                "images": [
                  "image261.png"
                ]
              }
            ]
          },
          {
            "id": "cat_r0ejf",
            "name": "วิธีการลบบัญชี Tiktok",
            "sections": [
              {
                "title": "วิธีการลบบัญชี Tiktok",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เลือกบัญชีที่ต้องการลบ",
                "content": "",
                "type": "markdown",
                "images": [
                  "image358.png"
                ]
              },
              {
                "title": "2.กดคลิกขวา แล้วเลือกคำว่า Delete",
                "content": "เป็นอันเสร็จในการลบบัญชี\n\n",
                "type": "markdown",
                "images": [
                  "image105.png"
                ]
              }
            ]
          },
          {
            "id": "cat_umxr4",
            "name": "วิธีเปิดใช้งาน ADB Debug (ในโทรศัพท์ที่มีหน้าจอ)",
            "sections": [
              {
                "title": "วิธีเปิดใช้งาน ADB Debug (ในโทรศัพท์ที่มีหน้าจอ)",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เข้าไปที่ตั้งค่า เลื่อนลงมาให้สุด แล้วเลือก About phone",
                "content": "",
                "type": "markdown",
                "images": [
                  "image66.png"
                ]
              },
              {
                "title": "2.เลือก Software information",
                "content": "",
                "type": "markdown",
                "images": [
                  "image203.png"
                ]
              },
              {
                "title": "3.กดที่ Build number 4-5 ครั้ง",
                "content": "",
                "type": "markdown",
                "images": [
                  "image51.png"
                ]
              },
              {
                "title": "4.จะมีโหมด Developer Options ขึ้นมา ให้กดเข้าไป",
                "content": "",
                "type": "markdown",
                "images": [
                  "image267.png"
                ]
              },
              {
                "title": "5.ให้มาเลือกเปิด USB debugging",
                "content": "",
                "type": "markdown",
                "images": [
                  "image46.png"
                ]
              },
              {
                "title": "6.เลือก OK เป็นอันเสร็จสิ้นการเปิดใช้งาน ADB Debug",
                "content": "",
                "type": "markdown",
                "images": [
                  "image506.png"
                ]
              }
            ]
          },
          {
            "id": "cat_nluz6",
            "name": "วิธีกำหนดข้อความสำหรับคอมเม้น และแคปชั่น",
            "sections": [
              {
                "title": "วิธีกำหนดข้อความสำหรับคอมเม้น และแคปชั่น",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.ไปที่ คลังภาพ",
                "content": "",
                "type": "markdown",
                "images": [
                  "image74.png"
                ]
              },
              {
                "title": "2.เลือก New Category ตั้งชื่อตามที่ต้องการ",
                "content": "",
                "type": "markdown",
                "images": [
                  "image465.png",
                  "image397.png"
                ]
              },
              {
                "title": "3.จากนั้นเลือก New Content",
                "content": "ตั้งชื่อตามต้องการ จากนั้นกด Add\n\n",
                "type": "markdown",
                "images": [
                  "image581.png",
                  "image184.png"
                ]
              },
              {
                "title": "4.เลือก AddContent",
                "content": "Content Items: รายการเนื้อหาที่ต้องการ(1 รายการต่อ 1 บรรทัด)\n\nหมายเหตุ:บรรทัดว่างจะถูกระบบละเว้น\n\nเนื้อหาหนึ่งบรรทัด: เลือกเมื่อต้องการให้แต่ละบรรทัดแยกเป็นรายการอิสระจากกัน\n\nเนื้อหาหลายบรรทัด: เลือกในกรณีที่เนื้อหาหนึ่งรายการมีความยาวหลายบรรทัด\n\nหลังจากเพิ่มข้อมูลเสร็จแล้วให้กด Add\n\n",
                "type": "markdown",
                "images": [
                  "image700.png",
                  "image315.png"
                ]
              }
            ]
          },
          {
            "id": "cat_v7agq",
            "name": "วิธีเปิดใช้งาน 2FA",
            "sections": [
              {
                "title": "วิธีเปิดใช้งาน 2FA",
                "content": "คำถาม: ทำไมต้องเปิดใช้งาน 2FA?\n\nคำตอบ: เพื่อให้ระบบ MaxCloudPhone สามารถยืนยันตัวได้ง่าย โดยไม่ต้องยืนยันผ่านอีเมล เพื่อให้การล็อกอินบัญชี ง่าย และสะดวกมากขึ้น\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.กดที่ขีด 3 ขีด ที่หน้าโปรไฟล์",
                "content": "",
                "type": "markdown",
                "images": [
                  "image625.png"
                ]
              },
              {
                "title": "2.ไปที่ Setting and privacy",
                "content": "",
                "type": "markdown",
                "images": [
                  "image538.png"
                ]
              },
              {
                "title": "3.ไปที่ Security",
                "content": "",
                "type": "markdown",
                "images": [
                  "image799.png"
                ]
              },
              {
                "title": "4.ไปที่เมนู 2-step verification",
                "content": "",
                "type": "markdown",
                "images": [
                  "image647.png"
                ]
              },
              {
                "title": "5.ปรับการตั้งค่าดังนี้แล้วกด Turn on",
                "content": "",
                "type": "markdown",
                "images": [
                  "image50.png"
                ]
              },
              {
                "title": "6.Copy key",
                "content": "",
                "type": "markdown",
                "images": [
                  "image259.png"
                ]
              },
              {
                "title": "7.จากนั้นไปที่เว็บไซต์ 2fa.live",
                "content": "",
                "type": "markdown",
                "images": [
                  "image77.png"
                ]
              },
              {
                "title": "8.วางคีย์ที่คัดลอกมาจาก Tiktok ที่ช่องด้านบน แล้วกด Submit",
                "content": "",
                "type": "markdown",
                "images": [
                  "image417.png"
                ]
              },
              {
                "title": "9.คัดลอกรหัสตัวเลข 6 ตัวสุดท้าย จากช่องด้านล่าง",
                "content": "",
                "type": "markdown",
                "images": [
                  "image511.png"
                ]
              },
              {
                "title": "10.จากนั้นกลับที่แอพ Tiktok แล้วกด Next",
                "content": "",
                "type": "markdown",
                "images": [
                  "image620.png"
                ]
              },
              {
                "title": "11.วางตัวเลขที่คัดลอกมาลงไป",
                "content": "หมายเหตุ: หากนำรหัสตัวเลขมาใส่ช้าไปจนขึ้นแบบภาพด้านล่างนี้ ให้ทำการกลับไปกด Submit ที่เว็บไซต์ 2fa.live แล้วคัดลอกรหัสตัวเลข 6 หลัก แล้วนำมาวางอีกครั้ง\n\n",
                "type": "markdown",
                "images": [
                  "image238.png",
                  "image124.png"
                ]
              },
              {
                "title": "12.หลังจากนั้นระบบจะพามาที่หน้านี้ ให้ทำการ Skip",
                "content": "",
                "type": "markdown",
                "images": [
                  "image297.png"
                ]
              },
              {
                "title": "13.ทำการ Skip อีกครั้ง",
                "content": "",
                "type": "markdown",
                "images": [
                  "image234.png"
                ]
              },
              {
                "title": "14.เมื่อเปิด 2FA สำเร็จจะได้หน้าตาประมาณนี้",
                "content": "",
                "type": "markdown",
                "images": [
                  "image129.png"
                ]
              },
              {
                "title": "15.กลับไปคัดลอกคีย์ 2fa ในเว็บไซต์",
                "content": "",
                "type": "markdown",
                "images": [
                  "image507.png"
                ]
              },
              {
                "title": "16.กลับไปที่เว็บไซต์ Max Cloud Phone จากนั้นไปที่ Social Account",
                "content": "",
                "type": "markdown",
                "images": [
                  "image800.png"
                ]
              },
              {
                "title": "17.ทำการนำคีย์ที่คัดลอกมา ไปวางลงในบัญชีที่เราทำการเปิด 2fa โดยไปที่ปุ่ม Edit(ไอคอนดินสอ)",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "18.นำคีย์ไปวางในช่อง Two FA แล้วกด Save",
                "content": "",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_d2cid",
            "name": "วิธีใช้งาน Proxy (IPv4 เท่านั้น)",
            "sections": [
              {
                "title": "วิธีใช้งาน Proxy (IPv4 เท่านั้น)",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "วิธีตั้งค่าการใช้งาน Proxy",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.ไปที่ การจัดการอุปรณ์",
                "content": "ติ๊กเลือกและคลิกขวาที่มือถือ > เลือก แก้ไขการตั้งค่า\n\nเลือก Proxy และกด บันทึก\n\nไปที่ Social Accounts\n\nติ๊กเลือกและคลิกขวาที่บัญชีที่ต้องการใส่ Proxy > เลือก Proxy\n\nใส่ Proxy ลงในช่องตามรูปแบบ IPหรือ IP:PORT|IP:PORT:USER:PASS และกด บันทึก\n\n",
                "type": "markdown",
                "images": [
                  "image532.png",
                  "image786.png",
                  "image579.png",
                  "image747.png",
                  "image403.png",
                  "image759.png"
                ]
              }
            ]
          },
          {
            "id": "cat_a5n8w",
            "name": "วิธีการลบ Proxy IPv4",
            "sections": [
              {
                "title": "วิธีการลบ Proxy IPv4",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เลือกบัญชีที่ต้องการลบ Proxy",
                "content": "",
                "type": "markdown",
                "images": [
                  "image440.png"
                ]
              },
              {
                "title": "2.คลิกขวาเลือก proxy",
                "content": "",
                "type": "markdown",
                "images": [
                  "image360.png"
                ]
              },
              {
                "title": "3.กด ลบ ได้เลย",
                "content": "",
                "type": "markdown",
                "images": [
                  "image182.png"
                ]
              },
              {
                "title": "4.หลังจากกดลบแล้ว ให้คลิกขวาเลือกคำว่า โหลดใหม่ เป็นอันเสร็จ",
                "content": "",
                "type": "markdown",
                "images": [
                  "image47.png"
                ]
              }
            ]
          },
          {
            "id": "cat_cpevo",
            "name": "วิธีการตั้ง Configure Register",
            "sections": [
              {
                "title": "วิธีการตั้ง Configure Register",
                "content": "Configure Register ตั้งค่าข้อมูลการลงทะเบียนบัญชีอัตโนมัติ\n\n",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_2twtb",
            "name": "วิธีการตั้ง General Configuration",
            "sections": []
          },
          {
            "id": "cat_6e7an",
            "name": "วิธีการตั้งสคริปต์",
            "sections": [
              {
                "title": "วิธีการตั้งสคริปต์",
                "content": "ก่อนที่จะกำหนดสคริปต์ให้กับบัญชี TikTok เราต้องสร้างสคริปต์ก่อน\n\nไปที่เมนู \"สคริปต์\"\n\nคลิกที่ เพิ่ม\n\nตั้งชื่อ Script และกด บันทึก\n\nหลังจากสร้าง Script แล้ว ดับเบิลคลิกที่ Script ที่สร้างไว้ ไปที่ เพิ่ม\n\nแล้วเลือกสคริปต์ที่ต้องการ\n\nเมื่อสร้างสคริปต์เสร็จแล้ว กด บันทึก\n\nหลังจากสร้างสคริปต์เสร็จแล้ว ทำการเพิ่มสคริปให้กับบัญชี Tiktok\n\nเลือกบัญชีที่ต้องการเพิ่มสคริปต์\n\nคลิกขวา จากนั้นเลือกตั้งค่าสคริปต์\n\nเลือกสคริปต์ที่ต้องการ\n\nกด บันทึก\n\n",
                "type": "markdown",
                "images": [
                  "image377.png",
                  "image134.png",
                  "image484.png",
                  "image428.png",
                  "image615.png",
                  "image235.png",
                  "image765.png",
                  "image244.png",
                  "image181.png",
                  "image117.png"
                ]
              }
            ]
          },
          {
            "id": "cat_ptn4m",
            "name": "การกำหนดค่าบัญชี",
            "sections": []
          },
          {
            "id": "cat_zp3di",
            "name": "การกำหนดแพ็คเกจและการรันบัญชี",
            "sections": []
          }
        ]
      },
      {
        "id": "cat_g6q92",
        "name": "อธิบายการใช้งานฟังก์ชัน",
        "sections": [
          {
            "title": "อธิบายการใช้งานฟังก์ชัน",
            "content": "โต้ตอบ\n\n",
            "type": "markdown",
            "images": [
              "image355.png"
            ]
          },
          {
            "title": "1.อ่านการแจ้งเตือน",
            "content": "",
            "type": "markdown",
            "images": [
              "image183.png"
            ]
          },
          {
            "title": "การตั้งค่าเวลาและจำนวน",
            "content": "นับการแจ้งเตือน: กำหนดช่วงช่วงเวลาในการตรวจสอบการแจ้งเตือน\n\nเวลาในการหน่วง: กำหนดระยะเวลาหยุดรอก่อนจะเริ่มดำเนินการถัดไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกเพิ่มเติม",
            "content": "Count Follow: ตั้งค่าเวลาหน่วงสำหรับการกดติดตาม\n\nCount Say Hi: ตั้งค่าเวลาหน่วงสำหรับการส่งข้อความทักทาย\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.วิดีโอสุ่ม",
            "content": "",
            "type": "markdown",
            "images": [
              "image298.png"
            ]
          },
          {
            "title": "การตั้งค่าเป้าหมายและจำนวน",
            "content": "ข้อเสนอ: ระบบจะสุ่มดูวิดีโอจากหน้า \"แนะนำ\" หรือ \"For You\" (หน้าฟีดหลักที่ระบบสุ่มมาให้)\n\nติดตาม: ระบบจะสุ่มดูวิดีโอจากบัญชีที่คุณได้กด \"ติดตาม\" (Following) ไว้แล้วเท่านั้น\n\nเพื่อน: ระบบจะเลือกดูวิดีโอจากกลุ่มที่เป็น \"เพื่อน\" (บัญชีที่ติดตามซึ่งกันและกัน)\n\nตัวเลือกจำกัด:\n\nจำกัดวิดีโอ: กำหนดจำนวนวิดีโอที่จะสุ่ม (ตัวอย่าง: 1 - 2 วิดีโอ)\n\nจำกัดเวลาการโต้ตอบ (s): กำหนดระยะเวลาการทำงานรวมเป็นวินาที\n\nดูวิดีโอ: กำหนดระยะเวลาที่จะใช้ในการดูวิดีโอแต่ละตัว (ตัวอย่าง: 3 - 5 วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบพื้นฐาน",
            "content": "การโต้ตอบ (Interaction)\n\nความน่าจะเป็น: ตั้งค่าเป็น % ว่าจะให้เกิดการโต้ตอบบ่อยแค่ไหน\n\nเวลาในการหน่วง: ระยะเวลารอก่อนเริ่มโต้ตอบ (หน่วย: วินาที)\n\nติดตาม (Follow)\n\nความน่าจะเป็น: โอกาสที่จะกดติดตามบัญชีนั้น ๆ\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดติดตาม\n\nเพิ่มในรายการโปรด (Add to Favorites)\n\nความน่าจะเป็น: โอกาสที่จะกดบันทึกวิดีโอเป็นรายการโปรด\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดบันทึก\n\nโพสต์ใหม่ (Repost)\n\nความน่าจะเป็น: โอกาสที่จะกดรีโพสต์วิดีโอ\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดรีโพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าความคิดเห็น",
            "content": "ชื่อแท็ก: สามารถเลือกหรือพิมพ์แท็กที่ต้องการใช้\n\nความน่าจะเป็น: โอกาสที่จะทำการพิมพ์ความคิดเห็น\n\nรายการเนื้อหา: เลือกชุดข้อความที่จะนำไปคอมเมนต์ (สามารถกดรูปดินสอเพื่อแก้ไขเนื้อหาได้)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนที่จะส่งความคิดเห็น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.วิดีโอที่ระบุ",
            "content": "",
            "type": "markdown",
            "images": [
              "image533.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐานและรายการเป้าหมาย",
            "content": "รายการลิงก์ (*): ช่องสำหรับใส่ URL หรือลิงก์ของวิดีโอที่ต้องการดำเนินการ\n\nจำนวนวิดีโอ: กำหนดช่วงจำนวนวิดีโอที่จะให้ระบบทำงาน\n\nดูวิดีโอ: กำหนดระยะเวลาในการเปิดดูวิดีโอแต่ละตัว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์กับช่องและโพสต์",
            "content": "ติดตาม (Follow):\n\nความน่าจะเป็น: ตั้งค่าโอกาสที่จะกดติดตามเป็นเปอร์เซ็นต์ (%)\n\nเวลาในการหน่วง: กำหนดช่วงเวลาพักก่อนกดติดตาม (วินาที)\n\nเพิ่มในรายการโปรด (Add to Favorites):\n\nความน่าจะเป็น: โอกาสที่จะกดเพิ่มเป็นรายการโปรด (%)\n\nเวลาในการหน่วง: ช่วงเวลาพักก่อนดำเนินการ (วินาที)\n\nโพสต์ใหม่ (Repost):\n\nความน่าจะเป็น: โอกาสที่จะกดรีโพสต์หรือแชร์ (%)\n\nเวลาในการหน่วง: ช่วงเวลาพักก่อนดำเนินการ (วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการตอบโต้และแสดงความคิดเห็น",
            "content": "โต้ตอบ (Interaction): การตั้งค่าพื้นฐานสำหรับการกดถูกใจ พร้อมช่องกำหนดความน่าจะเป็นและเวลาหน่วง\n\nแสดงความคิดเห็น (Comment):\n\nชื่อแท็ก: ระบุแท็กชื่อที่ต้องการใช้\n\nความน่าจะเป็น: โอกาสที่ระบบจะทำการคอมเมนต์ (%)\n\nรายการเนื้อหา: เลือกชุดข้อความที่จะใช้คอมเมนต์ (สามารถกดไอคอนดินสอเพื่อแก้ไขเนื้อหาได้)\n\nเวลาในการหน่วง: ช่วงเวลาพักก่อนพิมพ์ข้อความคอมเมนต์ (วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.วิดีโอจากคีย์เวิร์ด",
            "content": "",
            "type": "markdown",
            "images": [
              "image274.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐานและคีย์เวิร์ด",
            "content": "รายการคำสำคัญ (Keywords): ใส่รายการคีย์เวิร์ดที่ต้องการค้นหา (1 บรรทัดต่อ 1 คำ) เพื่อให้ระบบเข้าถึงวิดีโอที่เกี่ยวข้อง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจำกัดปริมาณและการรับชม",
            "content": "ตัวเลือกการจำกัด: เลือกตั้งค่าอย่างใดอย่างหนึ่งระหว่าง:\n\nจำกัดวิดีโอ: กำหนดจำนวนวิดีโอขั้นต่ำและสูงสุดที่จะให้ระบบเข้าไปจัดการ\n\nจำกัดเวลาการโต้ตอบ (s): กำหนดระยะเวลาการทำงานเป็นวินาที\n\nดูวิดีโอ: กำหนดช่วงเวลา (วินาที) ที่จะให้บอทเปิดดูวิดีโอนั้นๆ ก่อนจะเริ่มทำกิจกรรมถัดไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบ",
            "content": "โต้ตอบ (Like): ตั้งค่าเปอร์เซ็นต์ความน่าจะเป็นที่จะกดถูกใจ และเวลาหน่วงก่อนกด\n\nติดตาม (Follow): ตั้งค่าโอกาสที่จะกดติดตามบัญชีเจ้าของวิดีโอ\n\nเพิ่มในรายการโปรด: ตั้งค่าโอกาสในการกดบันทึกวิดีโอไว้ในรายการโปรด\n\nโพสต์ใหม่ (Repost): ตั้งค่าโอกาสที่จะแชร์วิดีโอต่อ\n\nแสดงความคิดเห็น: หากเปิดใช้งาน คุณสามารถระบุรายละเอียดได้ดังนี้:\n\nชื่อแท็ก: ระบุแท็กชื่อที่ต้องการใช้\n\nรายการเนื้อหา: เลือกชุดข้อความคอมเมนต์ที่เตรียมไว้ (สามารถแก้ไขได้ผ่านไอคอนรูปดินสอ)\n\nเวลาในการหน่วง: กำหนดระยะเวลารอก่อนที่จะทำการพิมพ์คอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.วิดีโอจากผู้ใช้",
            "content": "",
            "type": "markdown",
            "images": [
              "image675.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐาน",
            "content": "รายชื่อผู้ใช้งาน: เลือกรายชื่อบัญชีผู้ใช้ที่จะให้ระบบเข้าไปดึงข้อมูลหรือปฏิสัมพันธ์ด้วย\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการกำหนดขอบเขตและระยะเวลา",
            "content": "ตัวเลือก (จำกัดจำนวน):\n\nจำกัดวิดีโอ: กำหนดช่วงจำนวนวิดีโอที่จะดำเนินการ (เช่น 1 ถึง 2 วิดีโอ)\n\nจำกัดเวลาการโต้ตอบ (s): กำหนดระยะเวลาการทำงาน\n\nดูวิดีโอ: ตั้งค่าช่วงเวลาในการรับชมวิดีโอแต่ละคลิป (หน่วยเป็นวินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์หลัก",
            "content": "ติดตาม (Follow):\n\nความน่าจะเป็น: ตั้งค่าโอกาสที่จะกดติดตาม (0-100%)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดติดตาม\n\nเพิ่มในรายการโปรด (Favorite):\n\nความน่าจะเป็น: ตั้งค่าโอกาสที่จะกดเพิ่มเป็นรายการโปรด\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดเพิ่มเป็นรายการโปรด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการโต้ตอบและการมีส่วนร่วม",
            "content": "โต้ตอบ (Like/Interaction): ตั้งค่าโอกาสและระยะเวลาหน่วงสำหรับการกดถูกใจ\n\nแสดงความคิดเห็น (Comment):\n\nชื่อแท็ก: ระบุแท็กชื่อที่ต้องการใช้\n\nความน่าจะเป็น: โอกาสที่จะทำการคอมเมนต์ในวิดีโอนั้น\n\nรายการเนื้อหา: เลือกชุดข้อความที่จะใช้คอมเมนต์ (สามารถจัดการเนื้อหาได้ที่ปุ่มรูปดินสอ)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนพิมพ์คอมเมนต์\n\nโพสต์ใหม่ (Repost/Share): ตั้งค่าโอกาสและระยะเวลาหน่วงสำหรับการแชร์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.ถ่ายทอดสดสุ่ม",
            "content": "",
            "type": "markdown",
            "images": [
              "image549.png"
            ]
          },
          {
            "title": "การตั้งค่าตัวเลือกการจำกัด",
            "content": "จำกัดวิดีโอ: กำหนดจำนวนวิดีโอที่ต้องการให้ระบบทำงาน (เช่น 1 ถึง 2 วิดีโอ)\n\nจำกัดเวลาการโต้ตอบ (s): กำหนดระยะเวลาเป็นวินาทีในการปฏิสัมพันธ์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการดูถ่ายทอดสด",
            "content": "ดูถ่ายทอดสด: กำหนดช่วงเวลาที่จะรับชมในแต่ละไลฟ์ (ระบุเป็นวินาที เช่น 3 ถึง 5 วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการปฏิสัมพันธ์หลัก",
            "content": "โต้ตอบ (Interaction)\n\nความน่าจะเป็น: ระบุโอกาสที่จะเกิดการโต้ตอบเป็นเปอร์เซ็นต์ (%)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนเริ่มโต้ตอบ (ระบุเป็นวินาที)\n\nแชร์ถ่ายทอดสด (Share Live)\n\nความน่าจะเป็น: ระบุโอกาสที่จะกดแชร์เป็นเปอร์เซ็นต์ (%)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดแชร์ (ระบุเป็นวินาที)\n\nติดตาม (Follow)\n\nความน่าจะเป็น: ระบุโอกาสที่จะกดติดตามเจ้าของไลฟ์เป็นเปอร์เซ็นต์ (%)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนกดติดตาม (ระบุเป็นวินาที)\n\nแสดงความคิดเห็น (Comment)\n\nความน่าจะเป็น: ระบุโอกาสที่จะพิมพ์คอมเมนต์เป็นเปอร์เซ็นต์ (%)\n\nรายการเนื้อหา: เลือกชุดข้อความที่ต้องการใช้แสดงความคิดเห็น (สามารถกดไอคอนดินสอเพื่อแก้ไขเนื้อหาได้)\n\nเวลาในการหน่วง: ระยะเวลารอก่อนพิมพ์ความคิดเห็น (ระบุเป็นวินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.ถ่ายทอดสดที่ระบุ",
            "content": "",
            "type": "markdown",
            "images": [
              "image218.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐานการทำงาน",
            "content": "ลิงก์ถ่ายทอดสด: ช่องสำหรับใส่ลิงก์ถ่ายทอดสด\n\nดูถ่ายทอดสด: กำหนดช่วงเวลา (วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกการโต้ตอบ",
            "content": "โต้ตอบ:\n\nความน่าจะเป็น: (กรอกค่า %)\n\nเวลาในการหน่วง: กำหนดช่วงเวลา (วินาที)\n\nแชร์ถ่ายทอดสด:\n\nความน่าจะเป็น: (กรอกค่า %)\n\nเวลาในการหน่วง: กำหนดช่วงเวลา (วินาที)\n\nติดตาม:\n\nความน่าจะเป็น: (กรอกค่า %)\n\nเวลาในการหน่วง: กำหนดช่วงเวลา (วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าตัวเลือกการโต้ตอบเพิ่มเติม",
            "content": "โต้ตอบต่อเนื่อง:\n\nเวลาในการหน่วง: กำหนดช่วงเวลา (วินาที)\n\nแสดงความคิดเห็น:\n\nความน่าจะเป็น: (กรอกค่า %)\n\nรายการเนื้อหา (0): เมนูเลือกรายการ และสามารถแก้ไขได้ที่ปุ่มแก้ไขรูปดินสอ\n\nเวลาในการหน่วง: กำหนดช่วงเวลา (วินาที)\n\nติดตาม & ส่งข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ติดตามผู้ใช้",
            "content": "",
            "type": "markdown",
            "images": [
              "image623.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐานและเป้าหมาย",
            "content": "รายการผู้ใช้: ช่องสำหรับกรอก ID หรือชื่อผู้ใช้งานที่ต้องการติดตาม โดยกรอกเรียงลงมาทีละบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเงื่อนไขและเวลา",
            "content": "นับผู้ใช้: กำหนดช่วงจำนวนผู้ใช้ที่จะติดตามต่อรอบ (ระบุเป็นค่าเริ่มต้น 1 - 2 user)\n\nเวลาในการหน่วง: กำหนดระยะเวลาหยุดพักระหว่างการดำเนินการแต่ละครั้ง (ระบุเป็นค่าเริ่มต้น 3 - 5 วินาที)\n\nออกเมื่อการติดตามล้มเหลว: ตัวเลือกสำหรับหยุดการทำงานอัตโนมัติหากพบข้อผิดพลาดตามจำนวนครั้งที่กำหนด\n\nเปิดลิงก์ด้วยการค้นหา: ตัวเลือกเสริมในการเข้าถึงโปรไฟล์ผู้ใช้ผ่านช่องทางค้นหาแทนการเข้าถึงโดยตรง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.ติดตามจากคีย์เวิร์ด",
            "content": "",
            "type": "markdown",
            "images": [
              "image147.png"
            ]
          },
          {
            "title": "การตั้งค่าการจัดการคำสำคัญ",
            "content": "รายการคำสำคัญ: ช่องขนาดใหญ่สำหรับใส่คำค้นหาที่คุณต้องการให้ระบบไปค้นหาและกดติดตาม\n\nคุณสามารถใส่ได้หลายคำโดยแยกเป็นบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าปริมาณและระยะเวลา",
            "content": "นับผู้ใช้: กำหนดช่วงจำนวนผู้ใช้ที่ต้องการให้ระบบกดติดตามต่อรอบ\n\nระบุเป็นช่วง ขั้นต่ำ - สูงสุด (เช่น 1 - 1 user)\n\nเวลาในการหน่วง: กำหนดระยะเวลาหยุดพักระหว่างการกระทำแต่ละครั้ง\n\nระบุหน่วยเป็น วินาที (เช่น 3 - 5 วินาที)\n\nการตั้งค่าแบบสุ่มช่วงเวลาจะช่วยให้การทำงานดูเหมือนมนุษย์มากขึ้น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.ติดตามกลับ",
            "content": "นับผู้ใช้ (User Count):\n\nใช้สำหรับกำหนดจำนวนผู้ใช้ที่ต้องการให้ระบบดำเนินการ \"ติดตามกลับ\"\n\nสามารถระบุเป็นช่วง (Range) ได้ เช่น ตั้งแต่ 1 ถึง 1 user เพื่อควบคุมปริมาณการทำงานต่อรอบ\n\nเวลาในการหน่วง (Delay Time):\n\nใช้สำหรับตั้งค่าระยะเวลาหยุดรอระหว่างการดำเนินการในแต่ละแอคชั่น เพื่อเลียนแบบพฤติกรรมมนุษย์และลดความเสี่ยงจากการถูกตรวจสอบ\n\nสามารถระบุเป็นช่วงวินาทีได้ เช่น 3 ถึง 5 วินาที\n\n",
            "type": "markdown",
            "images": [
              "image468.png"
            ]
          },
          {
            "title": "4.ติดตามผู้ใช้โดยโปรไฟล์",
            "content": "",
            "type": "markdown",
            "images": [
              "image631.png"
            ]
          },
          {
            "title": "การตั้งค่าการกำหนดปริมาณและเวลา",
            "content": "จำนวนลิงก์ (Link): กำหนดจำนวนลิงก์โปรไฟล์ที่จะให้ระบบเข้าไปทำงานต่อรอบ\n\nนับผู้ใช้ / Link (User): กำหนดจำนวนผู้ใช้ที่จะกดติดตามต่อ 1 ลิงก์\n\nเวลาในการหน่วง (วินาที): ระยะเวลาพักระหว่างการกระทำแต่ละครั้ง เพื่อไม่ให้ระบบทำงานเร็วเกินไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าข้อมูลเป้าหมาย",
            "content": "รายการลิงก์: ช่องสำหรับใส่ URL หรือลิงก์โปรไฟล์ที่ต้องการให้ระบบเข้าไปติดตาม โดยใส่ 1 ลิงก์ต่อ 1 บรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.ติดตามผู้ใช้ที่แนะนำ",
            "content": "",
            "type": "markdown",
            "images": [
              "image444.png"
            ]
          },
          {
            "title": "การตั้งค่าเงื่อนไข",
            "content": "นับผู้ใช้ (User Count):\n\nกำหนดจำนวนผู้ใช้ที่ต้องการให้ระบบเข้าไปติดตาม\n\nระบุเป็นช่วงตัวเลข (ขั้นต่ำ - สูงสุด) เช่น 1 - 1 user\n\nเวลาในการหน่วง (Delay Time):\n\nกำหนดระยะเวลารอคอยระหว่างการกดติดตามแต่ละคน เพื่อป้องกันการถูกตรวจจับว่าเป็นบอท\n\nระบุเป็นช่วงวินาที เช่น 3 - 5 วินาที\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.ส่งข้อความตามที่กำหนด",
            "content": "",
            "type": "markdown",
            "images": [
              "image159.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลพื้นฐานการทำงาน",
            "content": "นับผู้ใช้: กำหนดช่วงจำนวนผู้ใช้ที่ต้องการดำเนินการ (เช่น 1 ถึง 2 user)\n\nเวลาในการหน่วง: กำหนดระยะเวลาหยุดพักระหว่างการส่งแต่ละครั้ง (หน่วยเป็นวินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการรายชื่อผู้รับ",
            "content": "รายการผู้ใช้: ช่องสำหรับกรอกไอดี (ID) ของผู้รับที่ต้องการส่งข้อความไปหา โดยใส่หนึ่งรายการต่อหนึ่งบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเนื้อหาข้อความ",
            "content": "รายการเนื้อหา: เลือกชุดข้อความที่เตรียมไว้จากรายการดรอปดาวน์ และมีปุ่มรูปดินสอสำหรับแก้ไขเนื้อหา\n\nNhắn tin hình ảnh (Texting img): ติ๊กถูกที่ช่องนี้หากต้องการส่งรูปภาพประกอบ\n\nภาพ: เลือกไฟล์รูปภาพจากรายการ\n\nลบภาพที่ใช้แล้ว: ติ๊กถูกหากต้องการให้ระบบลบรูปภาพออกจากรายการหลังจากส่งสำเร็จแล้ว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.บัฟความคิดเห็น",
            "content": "",
            "type": "markdown",
            "images": [
              "image715.png"
            ]
          },
          {
            "title": "การตั้งค่าการกำหนดเงื่อนไขและเวลา",
            "content": "นับความคิดเห็น: กำหนดช่วงจำนวนของความคิดเห็นที่ต้องการดำเนินการ โดยระบุเป็นค่า ขั้นต่ำ - สูงสุด เพื่อให้การทำงานดูเป็นธรรมชาติ\n\nเวลาในการหน่วง: ตั้งค่าระยะเวลาหยุดพักระหว่างการทำงานแต่ละครั้ง (หน่วยเป็น วินาที) โดยกำหนดเป็นช่วงเวลา เพื่อสุ่มความเร็วให้ไม่คงที่จนเกินไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการเป้าหมาย",
            "content": "ลิงก์: ส่วนสำหรับใส่ URL หรือลิงก์ของโพสต์ที่ต้องการให้ระบบเข้าไปดำเนินการ สามารถใส่ได้หลายลิงก์โดยแยกเป็นบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่ารูปแบบการปฏิสัมพันธ์",
            "content": "ถูกใจ: ติ๊กเครื่องหมายถูกหากต้องการให้ระบบกด Like หรือถูกใจในโพสต์เป้าหมาย\n\nแสดงความคิดเห็น: ติ๊กเครื่องหมายถูกหากต้องการให้ระบบพิมพ์ข้อความตอบกลับ โดยมีการตั้งค่าเพิ่มเติมดังนี้:\n\nความน่าจะเป็น: กำหนดโอกาสในการสุ่มแสดงความคิดเห็น (หน่วยเป็น %)\n\nรายการเนื้อหา: เลือกชุดข้อความหรือเนื้อหาที่ต้องการนำไปใช้ (สามารถคลิกไอคอนดินสอเพื่อแก้ไขเนื้อหาได้)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.บัฟดูสินค้า",
            "content": "",
            "type": "markdown",
            "images": [
              "image688.png"
            ]
          },
          {
            "title": "การตั้งค่าปริมาณและเวลา",
            "content": "นับสินค้า: กำหนดจำนวนสินค้าที่ต้องการให้ระบบเข้าไปดู โดยสามารถระบุเป็นช่วง ขั้นต่ำ - สูงสุด (เช่น 1 - 2 ชิ้น) เพื่อให้ระบบทำงานแบบสุ่ม ช่วยให้ดูเป็นธรรมชาติมากขึ้น\n\nเวลาในการหน่วง: กำหนดระยะเวลารอระหว่างการดำเนินการ มีหน่วยเป็น วินาที โดยระบุเป็นช่วง ขั้นต่ำ - สูงสุด (เช่น 1 - 3 วินาที)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าข้อมูลเป้าหมาย",
            "content": "รายการลิงก์: ช่องสำหรับใส่ URL หรือลิงก์ของสินค้าที่ต้องการเพิ่มยอดการเข้าชม โดยคุณสามารถใส่ได้หลายลิงก์ (บรรทัดละ 1 ลิงก์)\n\nฟังก์ชันบัญชี\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ทำเงิน",
            "content": "",
            "type": "markdown",
            "images": [
              "image603.png"
            ]
          },
          {
            "title": "การตั้งค่าการเชื่อมต่อ",
            "content": "Token: ระบุ Token สำหรับเชื่อมต่อกับระบบ (เช่น จาก web.traodoituongtac.com) ซึ่งเป็นส่วนสำคัญในการยืนยันตัวตนเพื่อเริ่มงาน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเวลาและปริมาณงาน",
            "content": "ช่วงเวลาระหว่างงาน (วินาที): กำหนดระยะห่างระหว่างการเริ่มงานแต่ละครั้งแบบสุ่ม (เช่น 5 - 10 วินาที) เพื่อความเป็นธรรมชาติในการใช้งาน\n\nเวลารอทำงาน (วินาที): ระยะเวลาที่ระบบจะรอสั่งการในแต่ละขั้นตอน\n\nจำนวนงานสำเร็จ: กำหนดเป้าหมายจำนวนงานที่ต้องการให้ระบบทำจนเสร็จสิ้น\n\nหยุดเมื่อเกิดความล้มเหลวติดต่อกัน: ระบบจะหยุดทำงานอัตโนมัติหากพบข้อผิดพลาดต่อเนื่องตามจำนวนที่ระบุ (เช่น 5 ครั้ง) เพื่อป้องกันบัญชีถูกระงับ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจำลองพฤติกรรมผู้ใช้",
            "content": "เปิดลิงก์ด้วยการค้นหา: ตัวเลือกสำหรับการเข้าถึงเป้าหมายผ่านการค้นหา แทนการเข้าถึงลิงก์โดยตรง\n\nเลื่อนฟีดข่าวหลังจาก: ตั้งค่าให้มีการเลื่อนดูหน้าฟีดข่าวหลังจากทำงานเสร็จตามจำนวน Jobs ที่กำหนดเพื่อเลียนแบบพฤติกรรมการใช้งานของมนุษย์จริง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ประเภทงานที่เลือกได้",
            "content": "Tiktok Like: กดถูกใจวิดีโอ\n\nTiktok Follow: กดติดตามบัญชีผู้ใช้\n\nTiktok Comment: การเขียนคอมเมนต์อัตโนมัติ\n\nTiktok View: การเข้าชมวิดีโอ\n\nTiktok Share: การแชร์วิดีโอไปยังช่องทางต่างๆ\n\nTiktok livestream: การเข้าไปมีส่วนร่วมในไลฟ์สด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.สร้างโพสต์",
            "content": "",
            "type": "markdown",
            "images": [
              "image737.png"
            ]
          },
          {
            "title": "ข้อมูลพื้นฐานและการตั้งค่าเวลา",
            "content": "เวลารอคอยการโหลดวิดีโอ: กำหนดช่วงเวลา (วินาที) เพื่อให้ระบบรอระหว่างการอัปโหลดไฟล์\n\nโพสต์วิดีโอตามชื่อไฟล์: ตัวเลือกสำหรับสั่งให้ระบบใช้ชื่อไฟล์วิดีโอเป็นชื่อโพสต์โดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าการจัดการรูปภาพและสื่อ",
            "content": "ภาพ: เลือกไฟล์รูปภาพที่ต้องการใช้งาน\n\nลบภาพที่ใช้แล้ว: เมื่อโพสต์เสร็จ ระบบจะลบไฟล์ต้นฉบับออกจากรายการ\n\nหลายรูปภาพ: สำหรับการโพสต์แบบหลายรูปในโพสต์เดียว\n\nAutoCut: ฟังก์ชันช่วยตัดต่อภาพหรือวิดีโออัตโนมัติ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การตั้งค่าเนื้อหาและข้อความ",
            "content": "รายการเนื้อหาที่แทรกลงในภาพ: เลือกข้อความที่ต้องการให้ระบบนำไปวางซ้อนบนรูปภาพ\n\nรายการเนื้อหาเมื่อโพสต์: ระบุแคปชันหรือข้อความที่จะใช้โพสต์คู่กับสื่อ\n\nแนบชื่อสินค้าร้าน Tiktok: ตัวเลือกสำหรับใส่ลิงก์หรือชื่อสินค้าจาก TikTok Shop พร้อมช่องสำหรับใส่รายละเอียดสินค้าด้านล่าง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การปรับแต่งเพิ่มเติมและเสียงเพลง",
            "content": "แก้ไขตัวกรอง: ปรับเปลี่ยน Filter ของภาพ\n\nเพิ่มเพลงยอดนิยม: ระบบจะดึงเพลงที่เป็นกระแสมาใส่ในโพสต์\n\nการเลือกเพลง/ฟิลเตอร์:\n\nRandom: ให้ระบบสุ่มเลือกให้\n\nCustom (List Filter): กำหนดรายการตัวกรองหรือคำค้นหาเฉพาะเจาะจงในช่องด้านล่าง\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.อัปเดตอวาตาร์",
            "content": "ภาพ: ใช้สำหรับเลือกไฟล์ภาพที่ต้องการใช้งาน\n\nไอคอนรูปดินสอ: อยู่ทางด้านขวาของช่องเลือกภาพ ใช้สำหรับแก้ไขภาพที่เลือก\n\nลบภาพที่ใช้แล้ว: หากเลือกไว้ ระบบจะลบภาพที่อัปโหลดไปแล้วออก\n\n",
            "type": "markdown",
            "images": [
              "image53.png"
            ]
          },
          {
            "title": "4.เปลี่ยนชื่อ",
            "content": "ตัวเลือก: เลือกรูปแบบการเปลี่ยนชื่อ เช่น สุ่ม, เฉพาะเจาะจง 1, เฉพาะเจาะจง 2\n\n",
            "type": "markdown",
            "images": [
              "image641.png"
            ]
          },
          {
            "title": "รูปแบบ: สุ่ม",
            "content": "ประเภทชื่อ: สามารถเลือกได้ 2 รูปแบบ\n\nตามชื่อเวียดนาม: ระบบจะสุ่มชื่อและนามสกุลตามฐานข้อมูลชื่อเวียดนาม\n\nตามชื่อชาวต่างชาติ: ระบบจะสุ่มชื่อและนามสกุลในรูปแบบสากล/ภาษาอังกฤษ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รูปแบบ: เฉพาะเจาะจง 1",
            "content": "การป้อนข้อมูล: ระบบจะแสดงช่องให้เติม 3 ส่วน (ใส่ 1 รายการต่อ 1 บรรทัด)\n\nป้อนนามสกุล: ระบุนามสกุลที่ต้องการ\n\nป้อนชื่อกลาง: ระบุชื่อกลาง (ถ้ามี)\n\nป้อนชื่อแรก: ระบุชื่อจริงที่ต้องการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รูปแบบ: เฉพาะเจาะจง 2",
            "content": "การป้อนข้อมูล:\n\nป้อนชื่อเต็ม: ให้ระบุชื่อและนามสกุล (หรือชื่อที่ต้องการแสดงผลทั้งหมด) ลงในช่องนี้ โดยพิมพ์ 1 ชื่อเต็มต่อ 1 บรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.เปลี่ยนประวัติ",
            "content": "รายการเนื้อหา: เลือกรายการเนื้อหาที่ต้องการ โดยคลิกที่ลูกศรชี้ลงด้านขวาเพื่อดูตัวเลือกทั้งหมด\n\nปุ่มแก้ไข (ไอคอนดินสอ):ใช้สำหรับเข้าไปแก้ไขรายละเอียดของเนื้อหาที่เลือกหรือจัดการรายการเพิ่มเติม\n\n",
            "type": "markdown",
            "images": [
              "image42.png"
            ]
          },
          {
            "title": "6.เปิดเผยยอดไลค์",
            "content": "กด \"บันทึก\" เพื่อเริ่มการดำเนินการนี้หากต้องการยกเลิกการดำเนินการนี้ โปรดลบออกจากรายการการดำเนินการ!\n\n",
            "type": "markdown",
            "images": [
              "image785.png"
            ]
          },
          {
            "title": "7.พักผ่อน",
            "content": "",
            "type": "markdown",
            "images": [
              "image638.png"
            ]
          },
          {
            "title": "การตั้งค่าช่วงเวลาพัก",
            "content": "ช่วงเวลาระหว่างงาน (วินาที): กำหนดระยะเวลาที่ต้องการให้ระบบหยุดพัก\n\nช่องแรก: ใส่จำนวนวินาทีเริ่มต้น (เช่น 3 วินาที)\n\nช่องหลัง: ใส่จำนวนวินาทีสิ้นสุด (เช่น 5 วินาที)\n\nหมายเหตุ: ระบบจะทำการสุ่มเวลาพักในช่วงที่คุณกำหนดไว้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.ลบโพสต์บนกำแพง",
            "content": "จำนวนกระทู้ (Number of Posts):\n\nกำหนดจำนวนโพสต์ที่ต้องการให้ระบบลบ โดยใส่เป็น ช่วงจำนวน (ต่ำสุด - สูงสุด)\n\nจากตัวอย่าง: ระบบจะสุ่มลบโพสต์ตั้งแต่ 1 ถึง 2 โพสต์\n\nเวลารอคอย (Delay Time):\n\nกำหนดระยะเวลาที่ระบบจะหยุดพักระหว่างการลบแต่ละโพสต์ (หน่วยเป็น วินาที)\n\nการตั้งค่าแบบสุ่มช่วยให้การทำงานดูเป็นธรรมชาติเหมือนมนุษย์ทำมากขึ้น\n\nจากตัวอย่าง: ระบบจะสุ่มรอระหว่าง 3 ถึง 5 วินาที\n\n",
            "type": "markdown",
            "images": [
              "image135.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_lyft5",
        "name": "โปรแกรมไม่ทำงาน หรือค้าง",
        "sections": [
          {
            "title": "โปรแกรมไม่ทำงาน หรือค้าง",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "แก้ปัญหา ไม่ทำงานตามสคริปต์ หรือค้าง",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ไปที่โปรแกรมแพนด้า --> ทำการเลือกมือถือที่ไม่ทำงาน --> กดดับเบิลคลิก เพื่อแสดงหน้าจอควบคุมมือถือ --> เลื่อนแถบเมนูด้านขวา --> มองหาแอป MaxCloud (หรือ ONOX) --> ทำการกดปิดแอป",
            "content": "",
            "type": "markdown",
            "images": [
              "image691.png"
            ]
          },
          {
            "title": "หลังจากนั้นให้กลับ ไปทำที่ขั้นตอน วิธีตั้งค่าแอป MaxCloudPhone หลังจากใส่ Token อีกครั้ง",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "หากทำแล้วยังใช้งานไม่ได้ ให้ทำการถอนการติดตั้งแอป แล้วติดตั้งใหม่อีกครั้ง หรือแจ้งแอดมินเพื่อรบการซัพพอร์ต",
            "content": "",
            "type": "markdown",
            "images": [
              "image37.jpg"
            ]
          }
        ],
        "subCategories": []
      }
    ]
  },
  {
    "id": "maxdata",
    "name": "MaxData",
    "categories": [
      {
        "id": "cat_w3e19",
        "name": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxData",
        "sections": [
          {
            "title": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxData",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off เป็นอันเสร็จสิ้น\n\n1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย\n\nเข้าไปยังเว็บไซต์ Minsoft https://app.minsoftthailand.com/\n\nล็อคอินเข้าใช้งาน\n\nไปยังหน้าการจัดการซอร์ฟแวร์\n\n",
            "type": "markdown",
            "images": [
              "image97.png",
              "image491.png",
              "image711.png"
            ]
          },
          {
            "title": "2.จากนั้นไปที่โปรแกรม MaxData ==> กด ดาวน์โหลด",
            "content": "",
            "type": "markdown",
            "images": [
              "image466.png",
              "image740.png"
            ]
          },
          {
            "title": "3.หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxData.zip ที่โหลดมา จากนั้นกดแตกไฟล์",
            "content": "",
            "type": "markdown",
            "images": [
              "image684.png"
            ]
          },
          {
            "title": "4.หลังจากแตกไฟล์เสร็จเรียบร้อยแล้ว เข้าไปยังโฟลเดอร์ MaxData แล้วกด AutoUpdate รอจนกว่าจะอัพเดตเสร็จ",
            "content": "",
            "type": "markdown",
            "images": [
              "image391.png"
            ]
          },
          {
            "title": "5.เข้าใช้งานโปรแกรม ทำการเข้าระบบให้เรียบร้อย",
            "content": "",
            "type": "markdown",
            "images": [
              "image682.png"
            ]
          },
          {
            "title": "6.เมื่อเข้าระบบเสร็จแล้ว ให้ไปที่ General configs >> Update chromedriver เพื่ออัพเดตโครมไดรเวอร์",
            "content": "หากติดตั้งเสร็จแล้วรันโปรแกรมแล้วหลังจากรันเสร็จแล้ว CPU ใช้งาน 100% ให้ทำตามลิ้งค์นี้\n\n",
            "type": "markdown",
            "images": [
              "image508.png"
            ]
          },
          {
            "title": "แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_eurhg",
        "name": "วิธีเชื่อมข้อมูลกับ Maxcare",
        "sections": [
          {
            "title": "วิธีเชื่อมข้อมูลกับ Maxcare",
            "content": "",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.ไปที่โฟลเดอร์ Maxcare จากนั้นคัดลอกที่อยู่โฟลเดอร์ Maxcare",
            "content": "",
            "type": "markdown",
            "images": [
              "image273.png"
            ]
          },
          {
            "title": "2.ไปที่ Configs ==> Sync data with Maxcare ==> จากนั้นวางที่อยู่โฟลเดอร์ Maxcare ลงในช่องว่าง",
            "content": "จากนั้นกด Save\n\n",
            "type": "markdown",
            "images": [
              "image136.png"
            ]
          },
          {
            "title": "3.กด Refresh",
            "content": "เสร็จขั้นตอนการเชื่อมข้อมูลกับ Maxcare\n\n",
            "type": "markdown",
            "images": [
              "image523.png"
            ]
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_fc3g6",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [
          {
            "title": "วิธีการใช้งานโปรแกรม",
            "content": "รวมวิธีการใช้งานโปรแกรม Maxcare\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_we67t",
            "name": "อธิบายการตั้งค่าเบื้องต้น",
            "sections": [
              {
                "title": "อธิบายการตั้งค่าเบื้องต้น",
                "content": "",
                "type": "markdown",
                "images": []
              },
              {
                "title": "General configs",
                "content": "",
                "type": "markdown",
                "images": [
                  "image4.png"
                ]
              },
              {
                "title": "General configs (การตั้งค่าทั่วไป)",
                "content": "Chrome threads: กำหนดจำนวนเธรดสำหรับเปิดหรือทำงาน Chrome พร้อมกัน\n\nCheck info threads: กำหนดจำนวนเธรดสำหรับตรวจสอบข้อมูล\n\nFolder profiles: ตำแหน่งโฟลเดอร์เก็บ Chrome Profile\n\nSync data with MaxCare: ตัวเลือกซิงก์ข้อมูลกับ MaxCare\n\nFolder MaxCare: ตำแหน่งโฟลเดอร์ของ MaxCare\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Browser display settings(การตั้งค่าการแสดงผลของเบราว์เซอร์)",
                "content": "Show image when use browser: แสดงรูปภาพขณะใช้งาน Browser\n\nSort chrome window: จัดเรียงตำแหน่งหน้าต่าง Chrome\n\nDelay Open chrome (s): หน่วงเวลาการเปิด Chrome\n\nUpdate Chromedriver: ปุ่มอัปเดต ChromeDriver\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Configure chrome login (ตั้งค่าการเข้าสู่ระบบ Chrome)",
                "content": "Use chrome profile: ใช้ Chrome Profile ในการล็อกอิน\n\nLogin type: ประเภทการล็อกอิน\n\nLogin website: เลือกเว็บไซต์สำหรับล็อกอิน\n\n",
                "type": "markdown",
                "images": []
              }
            ]
          },
          {
            "id": "cat_h5v1q",
            "name": "อธิบายเมนูฟังก์ชันการทำงาน MaxData",
            "sections": [
              {
                "title": "อธิบายเมนูฟังก์ชันการทำงาน MaxData",
                "content": "การใช้โปรแกรมเถื่อนอาจทำให้คอมพิวตอร์เสียหายได้ และมีความผิดทางกฏหมาย\n\nScan group data\n\n",
                "type": "markdown",
                "images": [
                  "image593.png"
                ]
              },
              {
                "title": "1.Scan Group by keyword (สแกนกลุ่มตามคีย์เวิร์ด)",
                "content": "Enter Uid running account : Uid ที่ต้องการใช้งาน\n\nList of keywords : รายการคีย์เวิร์ด\n\nLimit : count groups/keyword : จำนวนกลุ่ม/คีย์เวิร์ด\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image380.png"
                ]
              },
              {
                "title": "2.Scan Group information (สแกนข้อมูลกลุ่ม)",
                "content": "Enter Uid running account : Uid ที่ต้องการใช้งาน\n\nList of group Id : รายการ Id กลุ่ม\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image96.png"
                ]
              },
              {
                "title": "3.Scan group that user joined (สแกนกลุ่มที่ผู้ใช้เข้าร่วม)",
                "content": "Enter Uid running account : Uid ที่ต้องการใช้งาน\n\nList of user Id : รายการ Id ผู้ใช้\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image56.png"
                ]
              },
              {
                "title": "4.Scan group members (สแกนสมาชิกกลุ่ม)",
                "content": "Enter Uid running account : Uid ที่ต้องการใช้งาน\n\nList of group Id : รายการ Id กลุ่ม\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\nScan page data\n\n",
                "type": "markdown",
                "images": [
                  "image220.png"
                ]
              },
              {
                "title": "1.Scan page by keyword (สแกนเพจตามคีย์เวิร์ด)",
                "content": "Enter Uid running account : Uid ที่ต้องการใช้งาน\n\nList of keywords : รายการคีย์เวิร์ด\n\nLimit count groups/keyword : จำกัดจำนวนเพจ/keyword\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\nScan user data\n\n",
                "type": "markdown",
                "images": [
                  "image14.png"
                ]
              },
              {
                "title": "1.Scan user friends (สแกนเพื่อนผู้ใช้)",
                "content": "Enter Uid running account : Uid ที่ต้องการใช้งาน\n\nList of Uid : รายการ Uid\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\nScan post data\n\n",
                "type": "markdown",
                "images": [
                  "image723.png"
                ]
              },
              {
                "title": "1.Scan posts by keyword (สแกนโพสต์ตามคีย์เวิร์ด)",
                "content": "Enter Uid running account Uid : UID ที่ต้องการใช้งาน\n\nList of keywords : รายการคีย์เวิร์ด\n\nLimit count groups/keyword : จำกัดจำนวนกลุ่ม/คีย์เวิร์ด\n\nFilter recent posts : โพสต์ล่าสุด\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image796.png"
                ]
              },
              {
                "title": "2.Count reactions of posts (นับความรู้สึกของโพสต์)",
                "content": "Enter Uid running account Uid : UID ที่ต้องการใช้งาน\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image58.png"
                ]
              },
              {
                "title": "3.Scan user reactions of posts (สแกนผู้ใช้ที่แสดงความรู้สึกโพสต์)",
                "content": "Enter Uid running account Uid : UID ที่ต้องการใช้งาน\n\nList of post Id : รายการ Id โพสต์\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image217.png"
                ]
              },
              {
                "title": "4.Scan posts of user in group (สแกนโพสต์ของผู้ใช้ในกลุ่ม)",
                "content": "Enter Uid running account Uid : UID ที่ต้องการใช้งาน\n\nList of Id_User|Id_Group : รายการ Id_User|Id_Group\n\nLimit number of post/groups : จำกัดจำนวนโพสต์/กลุ่ม\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\nOther functions\n\n",
                "type": "markdown",
                "images": [
                  "image347.png"
                ]
              },
              {
                "title": "1.Find Facebook Id (ค้นหาไอดี Facebook)",
                "content": "List of Facebook links : รายการลิงค์เฟสบุ๊ค\n\nStart : เริ่ม\n\nExport Excel : ส่งออกเป็น Excel\n\nExport Txt : ส่งออกเป็นไฟล์ Text\n\n",
                "type": "markdown",
                "images": [
                  "image546.png"
                ]
              },
              {
                "title": "2.ChatGPT",
                "content": "API Key : API Key ChatGPT\n\nContent : เนื้อหา\n\nStart : เริ่ม\n\nResult : ผลลัพธ์\n\n",
                "type": "markdown",
                "images": [
                  "image441.png"
                ]
              },
              {
                "title": "3.Check Live Uid (ตรวจสอบสถานะ Uid)",
                "content": "Enter : Uidใส่ Uid\n\nThreads : หัวข้อ\n\nStart : เริ่ม\n\nLIVE : ใช้งานได้\n\nDIE : ถูกจำกัด\n\nCan’t check : ไม่สามารถเช็คได้\n\n",
                "type": "markdown",
                "images": [
                  "image639.png"
                ]
              },
              {
                "title": "ระบบ Proxy คืออะไร ใช้ทำอะไร แล้วมีวิธีติดตั้งและวิธีใช้ยังไง ?",
                "content": "ตัวช่วยในการบริหารจัดการกับ IP เพื่อให้มี IP ใช้ที่ไม่ซ้ำกัน หลีกเลี่่ยงการเกิด Checkpoint เมื่อต้องการรันระบบด้วย IP เดิมๆ ซ้ำ จำนวนหลาย account\n\nหน้าตา Xproxy\n\nการตั้งค่า Xproxy กับ maxcare\n\n",
                "type": "markdown",
                "images": [
                  "image672.png",
                  "image232.png"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "proxy",
    "name": "Proxy",
    "categories": []
  },
  {
    "id": "เทคนิคการใช้งานโปรแกรมminsoftware",
    "name": "เทคนิคการใช้งานโปรแกรม Minsoftware",
    "categories": [
      {
        "id": "cat_tanhv",
        "name": "ข้อควรระวังในการใช้งานโปรแกรมฟาร์มเฟส!",
        "sections": [
          {
            "title": "ข้อควรระวังในการใช้งานโปรแกรมฟาร์มเฟส!",
            "content": "1.สลับ script ในการใช้งานเพื่อไม่ให้จับได้ว่าเป็นบอท\n\n2.ใช้ proxy หรือ Aircard เน็ต AIS 4G (หากใช้เน็ตบ้านแนะนำให้รันเฟสทีละ 5 ตัว แล้วรีเน็ตใหม่)\n\n3.ขณะรันโปรแกรมห้ามเปิดเฟสข้างนอกไว้\n\n4.วอมอ่อนๆก่อนทุกครั้งในการวอมครั้งแรก\n\n5.หากไม่ได้ใช้ proxy แนะนำให้เปิดรันทีละ 5 จอ เท่านั้น\n\n6.ใช้ควบคู่กับ Maxcare และ MaxSystemCare (หากต้องการทำให้เฟสแข็งแรงขึ้น)\n\n7.หากเฟสยังบินอยู่ให้รีเซ็ตเน็ต หรือ proxy ใหม่อีกครั้ง\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": []
      },
      {
        "id": "cat_b68r1",
        "name": "เทคนิคใช้งาน MaxsystemCare",
        "sections": [
          {
            "title": "เทคนิคใช้งาน MaxsystemCare",
            "content": "",
            "type": "markdown",
            "images": []
          }
        ],
        "subCategories": [
          {
            "id": "cat_dp2n2",
            "name": "MaxsystemCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
            "sections": [
              {
                "title": "MaxsystemCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
                "content": "",
                "type": "markdown",
                "images": [
                  "image420.png"
                ]
              },
              {
                "title": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
                "content": "เพิ่มเพื่อนด้วยคีย์เวิร์ด เหมาะสำหรับคนที่ต้องการเพิ่มเพื่อนด้วยคีย์เวิร์ดนั้นๆ เช่น\n\n- ต้องการเพิ่มเพื่อนที่มีชื่อว่า สิริ  ให้พิมพ์ สิริ ลงในช่อว List of keywords\n\n",
                "type": "markdown",
                "images": [
                  "image671.png"
                ]
              },
              {
                "title": "2.Add friends by UID (แอดเพื่อนด้วยไอดี)",
                "content": "เพิ่มเพื่อนด้วย UID เหมาะสำหรับคนที่ต้องการเพิ่มเพื่อนตาม UID ที่มีอยู่\n\n",
                "type": "markdown",
                "images": [
                  "image446.png"
                ]
              },
              {
                "title": "3.Add friends by suggestions(เพิ่มเพื่อนตามคำแนะนำ)",
                "content": "เพิ่มเพื่อนตามคำแนะนำ สำหรับบัญชีใหม่จะยังไม่มีเพื่อนที่แนะนำ อาจจะใช้งานฟังก์ชันที่ 2 3 4 ในช่วงแรกของการฟาร์มบัญชี\n\n",
                "type": "markdown",
                "images": [
                  "image628.png"
                ]
              }
            ]
          },
          {
            "id": "cat_98bk7",
            "name": "MaxsystemCare แนะนำการโพสต์",
            "sections": []
          },
          {
            "id": "cat_pacu5",
            "name": "MaxsystemCare แนะนำการการสแปม",
            "sections": []
          },
          {
            "id": "cat_ls6c9",
            "name": "MaxsystemCare แนะนำวิธีการตอบโต้",
            "sections": []
          }
        ]
      },
      {
        "id": "cat_8lls8",
        "name": "เทคนิคการใช้งานโปรแกรม Maxcare",
        "sections": [],
        "subCategories": [
          {
            "id": "cat_7z6oz",
            "name": "MaxCare เทคนิคการเริ่มฟาร์มบัญชีเบื้องต้น",
            "sections": []
          },
          {
            "id": "cat_rp9tf",
            "name": "MaxCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
            "sections": []
          },
          {
            "id": "cat_dynq4",
            "name": "MaxCare แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
            "sections": []
          }
        ]
      },
      {
        "id": "cat_6qiqo",
        "name": "เทคนิคใช้งาน MaxCare Page",
        "sections": [],
        "subCategories": [
          {
            "id": "cat_7ugji",
            "name": "แนะนำการเปลี่ยนข้อมูลเพจ",
            "sections": []
          },
          {
            "id": "cat_ex87y",
            "name": "แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
            "sections": []
          },
          {
            "id": "cat_62xkj",
            "name": "แนะนำการโพสต์ตามกลุ่มอัตโนมัติ",
            "sections": []
          },
          {
            "id": "cat_ndgae",
            "name": "แนะนำการบัพเพจ",
            "sections": []
          },
          {
            "id": "cat_vrl3x",
            "name": "แนะนำการสแปม",
            "sections": []
          }
        ]
      },
      {
        "id": "cat_vpbaq",
        "name": "วิธีการหา ID เฟสบุ๊ค",
        "sections": [],
        "subCategories": []
      },
      {
        "id": "cat_nlwws",
        "name": "ช่องทางการติดต่อ และสื่อต่างๆ",
        "sections": [],
        "subCategories": []
      }
    ]
  },
  {
    "id": "ช่องทางการติดต่อและสื่อต่างๆ",
    "name": "ช่องทางการติดต่อ และสื่อต่างๆ",
    "categories": []
  }
];
