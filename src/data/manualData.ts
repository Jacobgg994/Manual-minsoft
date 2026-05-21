
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
        "id": "1____________________c84zf",
        "name": "1.วิธีการนำบัญชีเฟสบุ๊คเข้าสู่โปรแกรม Maxcare",
        "sections": [
          {
            "title": "อธิบายรายละเอียดแต่ละฟังก์ชั่น",
            "content": "<p>อธิบายรายละเอียดแต่ละฟังก์ชั่น การนำบัญชีเฟสบุ๊คเข้าโปรแกรม Maxcare ![image](/images/image537.png) หลังจากเปิดโปรแกรมมาแล้ว ให้กดที่ Import accounts เพื่อนำเฟสบุ๊คเข้าระบบ ![image](/images/image180.png) ให้ทำการสร้างไฟล์ขึ้นมา โดยใส่ชื่อตามที่ต้องการได้เลยจากนั้นกด Add ![image](/images/image305.png) ใส่ข้อมูลเฟสลงไป ตามแพทเทิน คั่นด้วยเครื่องหมาย | ยกตัวอย่างการเลือก Format ตามแพทเทินเฟสบุ๊คที่จะนำเข้า ![image](/images/image224.png) จากนั้นเลือก format ตามแพทเทินที่เรากรอกเข้าไป แล้วกดติ้กถูกที่ Option เพื่อให้มันเช็คข้อมูล Account ต่างๆด้วย เช่น ชื่อ,เพศ,จำนวนเพื่อน,จำนวนกลุ่ม เป็นต้น ![image](/images/image734.png) ![image](/images/image197.png) ![image](/images/image260.png) เป็นอันเสร็จสิ้นขั้นตอนการนำเข้าเฟสบุ๊ค</p>",
            "type": "markdown",
            "images": [
              "image537.png",
              "image180.png",
              "image305.png",
              "image224.png",
              "image734.png",
              "image197.png",
              "image260.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "3____________________px543",
        "name": "3.อธิบายเมนูฟังก์ชั่นการทำงาน interactive (Maxcare)",
        "sections": [
          {
            "title": "การใช้โปรแกรมเถื่อนอาจทำให้คอมพิวตอร์เสียหายได้ และมีความผิดทางกฏหมาย",
            "content": "การใช้โปรแกรมเถื่อนอาจทำให้คอมพิวตอร์เสียหายได้ และมีความผิดทางกฏหมาย\n\n![image](/images/image208.png)\n\n![image](/images/image564.png)\n\nอธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น\n\nPersonal Interaction\n\n",
            "type": "markdown",
            "images": [
              "image208.png",
              "image564.png"
            ]
          },
          {
            "title": "1.Read notification (อ่านข้อความแจ้งเตือน)‌",
            "content": "1.Read notification (อ่านข้อความแจ้งเตือน)‌\n\n![image](/images/image563.png)\n\nCount:จำนวน ข้อความแจ้งเตือนที่ต้องการให้อ่าน‌\n\nBreak (s):ระยะเวลาหยุดพัก (วินาที)\n\n",
            "type": "markdown",
            "images": [
              "image563.png"
            ]
          },
          {
            "title": "2.View Story (ดูสตอรี่)‌",
            "content": "2.View Story (ดูสตอรี่)‌\n\n![image](/images/image501.png)\n\nCount stories:จำนวนสตอรี่ที่ดู‌\n\nBreak:ระยะเวลาดีเลย์หลังจากการดูแต่ละสตอรี่‌\n\nExpress feelings:แสดงความรู้สึกต่อสตอรี่ เช่น กดไลค์(Like), กดหัวใจ(Love), กดห่วงใย(Care) เป็นต้น‌\n\nComment by text:รายการข้อความที่จะแสดงความคิดเห็นในสตอรี่‌\n\n",
            "type": "markdown",
            "images": [
              "image501.png"
            ]
          },
          {
            "title": "3.View Video (ดูวีดีโอ)‌",
            "content": "3.View Video (ดูวีดีโอ)‌\n\n![image](/images/image115.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:รูปแบบการหยุดทำงาน ตามจำนวนโพส หรือ ตามเวลาที่กำหนด\n\nCount posts:จำนวนโพสที่ดู‌\n\nBreak (s):ระยะเวลาพักก่อนดูโพสถัดไป (วินาที)\n\nView posts (s):คือ เวลาในการดูโพส‌ (วินาที)\n\nการโต้ตอบและความรู้สึก\n\nInteraction:การกดความรู้สึก‌\n\nProbability (%):โอกาสที่จะเกิดการกด\n\nReactions:เลือกไอคอนความรู้สึกที่ต้องการ\n\nการแสดงความคิดเห็น\n\nComment by text:การพิมพ์ข้อความตอบกลับ\n\nList Comments: ใส่ข้อความที่ต้องการให้ระบบสุ่มพิมพ์ (1 บรรทัดต่อ 1 ข้อความ)\n\nCreate content with AI: ใช้ AI ช่วยคิดข้อความคอมเมนต์อัตโนมัติ\n\nComment by image:การคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nการแบ่งปัน\n\nShare wall:ติ๊กถูกหากต้องการให้ระบบแชร์วิดีโอนั้นลงบนหน้าวอลล์ (Profile) ของตัวเอง\n\nProbability (%):กำหนดโอกาสในการแชร์ เพื่อไม่ให้ดูเป็นการสแปมจนเกินไป\n\n",
            "type": "markdown",
            "images": [
              "image115.png"
            ]
          },
          {
            "title": "4.Poke friends (สะกิดหาเพื่อน)‌",
            "content": "4.Poke friends (สะกิดหาเพื่อน)‌\n\n![image](/images/image461.png)\n\nQuantity:จำนวนเพื่อนที่สะกิด‌\n\nBreak (s):คือ ระยะเวลาพัก ก่อนสะกิดเพื่อนคนถัดไป (วินาที)\n\n",
            "type": "markdown",
            "images": [
              "image461.png"
            ]
          },
          {
            "title": "5.Happy Birthday (ส่งข้อความอวยพรวันเกิด)‌",
            "content": "5.Happy Birthday (ส่งข้อความอวยพรวันเกิด)‌\n\n![image](/images/image146.png)\n\nNumber friends:จำนวนเพื่อนที่จะอวยพรวันเกิด‌\n\nBreak (s):ระยะเวลาพัก (วินาที)\n\n",
            "type": "markdown",
            "images": [
              "image146.png"
            ]
          },
          {
            "title": "6.Post Story (โพสต์สตอรี่)‌",
            "content": "6.Post Story (โพสต์สตอรี่)‌\n\n![image](/images/image442.png)\n\nImage folder path:เพิ่ม Path Folder ของรูปภาพ‌\n\n",
            "type": "markdown",
            "images": [
              "image442.png"
            ]
          },
          {
            "title": "7.Post status (โพสต์สเตตัส)‌",
            "content": "7.Post status (โพสต์สเตตัส)‌\n\n![image](/images/image731.png)\n\nการตั้งค่าพื้นฐาน\n\nPosts:กำหนดจำนวนโพสต์ที่ต้องการทำ\n\nBreak (s):ระยะเวลาหยุดพักระหว่างแต่ละโพสต์\n\nส่วนเนื้อหาข้อความ (Text)\n\nList of contents:ช่องสำหรับพิมพ์หรือวางข้อความที่จะใช้โพสต์\n\n",
            "type": "markdown",
            "images": [
              "image731.png"
            ]
          },
          {
            "title": "Options:ตัวเลือกการจัดการบรรทัด เช่น:",
            "content": "Options:ตัวเลือกการจัดการบรรทัด เช่น:\n\nContent is only 1 line:1 บรรทัดคือ 1 โพสต์\n\nContent has multiple lines:ข้อความหลายบรรทัดรวมเป็น 1 โพสต์\n\nหากต้องการสุ่มให้ใส่ Spin Tax เช่น{สวัสดี|ทักทาย|ฮัลโหล}เพื่อให้ระบบสุ่มคำพูดไม่ให้ซ้ำกัน\n\nส่วนรูปภาพ (Image)\n\nImage folder:กดเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nImages:กำหนดจำนวนรูปภาพที่จะสุ่มมาลงใน 1 โพสต์\n\nPost image files in order:หากติ๊กช่องนี้ ระบบจะโพสต์รูปเรียงตามชื่อไฟล์ ไม่สุ่ม\n\nส่วนการแท็กเพื่อน (Tag friends in the post)\n\nCount people to tag:จำนวนเพื่อนที่จะแท็กต่อ 1 โพสต์\n\nOnly tag people with VN names:ตัวเลือกเฉพาะสำหรับแท็กเฉพาะรายชื่อที่เป็นชื่อเวียดนาม\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการแท็กเพื่อนแต่ละคน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8.Post Reels(โพสเรียล)‌",
            "content": "8.Post Reels(โพสเรียล)‌\n\n![image](/images/image602.png)\n\nการตั้งค่าพื้นฐาน\n\nQuantity:กำหนดจำนวนวิดีโอที่ต้องการให้ระบบโพสต์\n\nDelayTime post (s):ระยะเวลาหน่วงระหว่างการโพสต์แต่ละครั้ง\n\nการจัดการไฟล์วิดีโอ\n\nVideo folder:คลิกที่ช่องว่างเพื่อเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บไฟล์วิดีโอ Reels ไว้\n\nDelete used video:หากติ๊กถูก ระบบจะลบไฟล์วิดีโอทิ้งทันทีหลังจากโพสต์สำเร็จ (ช่วยประหยัดพื้นที่ฮาร์ดดิสก์)\n\nการตั้งค่าเนื้อหาโพสต์\n\nList of contents:ใส่ข้อความบรรยายวิดีโอที่คุณต้องการ\n\nSpin content {a|b|c}:รองรับการใช้รูปแบบ Spin เพื่อสุ่มคำพูด (เช่น{สวัสดี|ทักทาย|ไฮ}) ช่วยลดโอกาสโดนจับว่าเป็นสแปม\n\nOptions:เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: เนื้อหา 1 บรรทัดต่อ 1 โพสต์\n\nContent has many lines: 1 คอนเทนต์สามารถมีได้หลายบรรทัด\n\nAuto delete used content:ลบข้อความที่ใช้แล้วออกจากรายการอัตโนมัติ\n\nการจัดการแฮชแท็ก\n\nList of Hashtag:ใส่แฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แท็ก)\n\nHashtags/content:กำหนดจำนวนแฮชแท็กที่จะสุ่มมาใส่ในแต่ละโพสต์\n\nการตั้งค่าขั้นสูงและปุ่มดำเนินการ\n\nWait for upload video (s):เวลารอให้วิดีโออัปโหลดเสร็จ\n\nExport reel link after post:ติ๊กถูกหากต้องการให้ระบบส่งออกลิงก์ของวิดีโอที่โพสต์สำเร็จลงในไฟล์\n\nInteract posts\n\n",
            "type": "markdown",
            "images": [
              "image602.png"
            ]
          },
          {
            "title": "1.Newsfeed Posts (การมีปฏิสัมพันธ์กับ ฟีดข่าว หน้าฟีดข่าว)",
            "content": "1.Newsfeed Posts (การมีปฏิสัมพันธ์กับ ฟีดข่าว หน้าฟีดข่าว)\n\nวิดีโอ:โต้ตอบหน้าฟีด MaxCare\n\n![image](/images/image569.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:รูปแบบการหยุดทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์ที่ระบุ\n\nLimit interacting time: หยุดตามระยะเวลาที่ระบุ\n\nCount posts:กำหนดจำนวนโพสต์ที่จะให้ระบบทำงาน\n\nView post (s):กำหนดระยะเวลา ในการหยุดดูแต่ละโพสต์ก่อนเริ่มทำกิจกรรมอื่น\n\nการโต้ตอบพื้นฐาน\n\nInteraction:เลือกกด \"ความรู้สึก\" (Like, Love, Haha, ฯลฯ)\n\nProbability (%): โอกาสที่จะกด (เช่น 100% คือทำทุกโพสต์, 50% คือสุ่มทำบ้างไม่ทำบ้าง)\n\nShare wall:การแชร์โพสต์นั้นๆ ลงหน้าวอลล์ของตัวเอง\n\nProbability (%): โอกาสในการกดแชร์\n\nการแสดงความคิดเห็นด้วยรูปภาพ\n\nComment by image:ติ๊กเพื่อเปิดการคอมเมนต์ด้วยภาพ\n\nImage folder:เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nการแสดงความคิดเห็นด้วยข้อความ\n\nComment by text:ติ๊กเพื่อเปิดการคอมเมนต์ด้วยข้อความ\n\nCreate content with AI:หากติ๊กช่องนี้ ระบบจะใช้ AI ช่วยคิดคำตอบให้ดูเป็นธรรมชาติ\n\nList Comments:ใส่ข้อความที่คุณเตรียมไว้\n\nOptions:เลือกรูปแบบการดึงข้อความ\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: ระบบจะมองว่าข้อความทั้งหมดคือ 1 คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image569.png"
            ]
          },
          {
            "title": "2.Friends Posts (การมีปฏิสัมพันธ์กับ เพื่อน)",
            "content": "2.Friends Posts (การมีปฏิสัมพันธ์กับ เพื่อน)\n\n![image](/images/image633.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber friends:จำนวนเพื่อนที่ต้องการให้ระบบเข้าไปหา\n\nOptions:ตัวเลือกการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nLimit interacting time: หยุดตามระยะเวลา\n\nPosts/friend:จำนวนโพสต์ต่อเพื่อน 1 คน ที่ต้องการให้ระบบเข้าไปดู\n\nView post (s):ระยะเวลาที่ใช้ในการหยุดดูแต่ละโพสต์\n\nการโต้ตอบหลัก\n\nInteraction:ติ๊กถูกเพื่อเปิดการกด Like หรือ Reaction\n\nProbability (%): โอกาสที่จะเกิดการโต้ตอบ (100% คือทำทุกครั้ง)\n\nReaction Icons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, ห่วงใย ฯลฯ)\n\nComment by image:ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nShare wall:ติ๊กถูกเพื่อให้ระบบแชร์โพสต์นั้นไปยังวอลล์ของตนเอง\n\nการคอมเมนต์ด้วยข้อความ\n\nComment by text:ติ๊กถูกเพื่อเปิดใช้งานการพิมพ์คอมเมนต์\n\nCreate content with AI:ตัวเลือกเสริมสำหรับใช้ AI ช่วยคิดเนื้อหาคอมเมนต์\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการให้ระบบนำไปตอบ\n\nOptions:ตัวเลือกรูปแบบข้อความ\n\n",
            "type": "markdown",
            "images": [
              "image633.png"
            ]
          },
          {
            "title": "3.Group Posts  (โพสต์ที่อยู่ในกลุ่มที่เราเข้าอยู่)",
            "content": "3.Group Posts  (โพสต์ที่อยู่ในกลุ่มที่เราเข้าอยู่)\n\n![image](/images/image18.png)\n\nการตั้งค่าพื้นฐาน\n\nCount groups:จำนวนกลุ่มที่ต้องการเข้าไปดำเนินการ โดยระบุเป็นช่วง\n\nOptions:ตัวเลือกการหยุดการทำงาน\n\nLimit interacting time: หยุดตามระยะเวลา\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nPosts/group:จำนวนโพสต์ที่จะดำเนินการต่อ 1 กลุ่ม\n\nTương tác bài viết mới nhất:หากเลือก ระบบจะเน้นปฏิสัมพันธ์กับ โพสต์ที่ใหม่ที่สุด\n\nการรับชม\n\nView post (s):ระยะเวลาในการดูโพสต์แต่ละโพสต์\n\nการปฏิสัมพันธ์\n\n",
            "type": "markdown",
            "images": [
              "image18.png"
            ]
          },
          {
            "title": "Interaction (แสดงความรู้สึก):",
            "content": "Interaction (แสดงความรู้สึก):\n\nProbability (%): โอกาสความน่าจะเป็นที่จะกดแสดงความรู้สึก (100% คือทำทุกครั้ง)\n\nIcons: เลือกประเภทของ Emotion ที่ต้องการ (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Comment by image (คอมเมนต์ด้วยรูปภาพ):",
            "content": "Comment by image (คอมเมนต์ด้วยรูปภาพ):\n\nProbability (%): โอกาสที่จะส่งรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในเครื่องที่เก็บรูปภาพที่ต้องการใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Share wall (แชร์ลงหน้าวอลล์):",
            "content": "Share wall (แชร์ลงหน้าวอลล์):\n\nProbability (%): โอกาสที่จะกดแชร์โพสต์นั้นๆ ไปยังโปรไฟล์ส่วนตัว\n\nการคอมเมนต์ด้วยข้อความ\n\nComment by text:ติ๊กเพื่อเปิดใช้งานการพิมพ์คอมเมนต์\n\nCreate content with AI:ใช้ AI ช่วยสร้างเนื้อหาข้อความ (หากต้องการ)\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการ\n\nOptions:เลือกรูปแบบการอ่านไฟล์ข้อความ\n\nContent is only 1 line:  ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะถือว่า ข้อความทั้งหมดในช่องนั้น คือ 1 คอมเมนต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.Group Posts  www(โพสต์ที่อยู่ในกลุ่มที่เราเข้าอยู่)",
            "content": "4.Group Posts  www(โพสต์ที่อยู่ในกลุ่มที่เราเข้าอยู่)\n\n![image](/images/image803.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:เลือกรูปแบบการทำงาน\n\nLimit interacting posts: หยุดทำงานตาม \"จำนวนโพสต์\" ที่เข้าไปมีปฏิสัมพันธ์\n\nLimit interacting time: หยุดทำงานตาม \"เวลาที่ใช้\" ในการรันคำสั่งนี้ ไม่ว่าจะปฏิสัมพันธ์ไปกี่โพสต์ก็ตาม\n\nCount posts:กำหนดจำนวนโพสต์ทั้งหมดที่จะประมวลผล\n\nการดูและการแสดงความรู้สึก\n\nView post (s):ระยะเวลาที่หยุดดูโพสต์นั้นๆ เป็นวินาที\n\nInteraction (ช่องติ๊กถูก):หากต้องการให้กด Like หรือแสดงความรู้สึกให้ติ๊กที่นี่\n\nProbability (%): โอกาสที่จะกดแสดงความรู้สึก (เช่น 100% คือกดทุกโพสต์)\n\nReaction Icons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, หัวเราะ ฯลฯ)\n\nการแสดงความคิดเห็น\n\n",
            "type": "markdown",
            "images": [
              "image803.png"
            ]
          },
          {
            "title": "Comment by text (ข้อความ):",
            "content": "Comment by text (ข้อความ):\n\nList Comments: ใส่ข้อความที่ต้องการ\n\nCreate content with AI: หากติ๊กช่องนี้ ระบบจะใช้ AI ช่วยคิดข้อความให้\n\nOptions: ตัวเลือกรูปแบบเนื้อหา\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะถือว่า ข้อความทั้งหมดในช่องคือ 1 ชุด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Comment by image (รูปภาพ):",
            "content": "Comment by image (รูปภาพ):\n\nImage folder: เลือกโฟลเดอร์รูปภาพในเครื่องที่จะให้ระบบสุ่มดึงไปคอมเมนต์\n\nการแชร์\n\nShare wall:หากติ๊กเลือก ระบบจะนำโพสต์ในกลุ่มนั้นไปแชร์ลงหน้าวอลล์ (Timeline) ของตัวเอง\n\nProbability (%):กำหนดโอกาสในการแชร์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Fanpage Posts (โพสต์ที่อยู่ในเพจ)",
            "content": "5.Fanpage Posts (โพสต์ที่อยู่ในเพจ)\n\n![image](/images/image271.png)\n\nข้อมูลพื้นฐานและการระบุเป้าหมาย\n\nEnter list of page Ids:ใส่ ID ของแฟนเพจที่คุณต้องการให้ระบบเข้าไปทำงาน\n\nCount pages:กำหนดจำนวนเพจที่จะให้ระบบสุ่มเข้าไปทำงาน\n\nLike page after interaction:ติ๊กถูกหากต้องการให้กด Like เพจนั้น ๆ หลังจากทำกิจกรรมเสร็จ\n\nการตั้งค่าขอบเขตงาน\n\nOptions:ตัวเลือกการหยุดการทำงาน\n\nLimit interacting posts: จำกัดจำนวนโพสต์\n\nLimit interacting time: จำกัดระยะเวลา\n\nPosts/page:กำหนดจำนวนโพสต์ที่จะทำต่อ 1 เพจ\n\nView post (s):ระยะเวลาที่ \"เปิดค้างไว้\" เพื่อดูโพสต์\n\nการโต้ตอบ\n\nInteraction:กดแสดงความรู้สึก (Reactions) ให้กับโพสต์\n\nProbability (%):โอกาสที่จะเกิดการกด Like/Reaction (เช่น ตั้งไว้ 100% คือกดทุกครั้ง)\n\nIcon Selection:เลือกสัญลักษณ์ความรู้สึกที่ต้องการ เช่น ถูกใจ, รักเลย, หัวเราะ, ว้าว, เศร้า หรือโกรธ\n\nการแสดงความคิดเห็น\n\n",
            "type": "markdown",
            "images": [
              "image271.png"
            ]
          },
          {
            "title": "Comment by text (คอมเมนต์ด้วยข้อความ)",
            "content": "Comment by text (คอมเมนต์ด้วยข้อความ)\n\nList Comments: ใส่ข้อความที่ต้องการคอมเมนต์\n\nCreate content with AI: ใช้ AI ช่วยสร้างเนื้อหาคอมเมนต์อัตโนมัติ\n\nOptions: เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความคอมเมนต์\n\nContent has many lines: เนื้อหามีหลายบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Comment by image (คอมเมนต์ด้วยรูปภาพ)",
            "content": "Comment by image (คอมเมนต์ด้วยรูปภาพ)\n\nImage folder: ระบุที่อยู่ของโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่ต้องการใช้คอมเมนต์\n\nการแชร์\n\nShare wall:ติ๊กถูกหากต้องการให้ระบบกดแชร์โพสต์นั้นไปที่หน้า Wall ของตัวเอง โดยสามารถตั้งค่าความน่าจะเป็น (Probability) ได้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Posts on the wall (โพสต์หน้าไทม์ไลน์)",
            "content": "6.Posts on the wall (โพสต์หน้าไทม์ไลน์)\n\n![image](/images/image157.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:รูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nLimit interacting time: หยุดตามระยะเวลา\n\nCount posts:กำหนดจำนวนโพสต์ที่จะเข้าไปทำงาน\n\nView post (s):กำหนดเวลา ในการ \"ดู\" โพสต์นั้นๆ\n\nการปฏิสัมพันธ์และการแชร์\n\nInteraction:ติ๊กถูกเพื่อเปิดใช้งานการกด Like\n\nProbability (%): โอกาสที่จะเกิดการกด (100% คือกดทุกโพสต์ที่เลือก)\n\nIcons: เลือกรูปแบบความรู้สึกที่ต้องการ (Like, Love, Haha, Wow, Sad, Angry)\n\nShare wall:ติ๊กถูกเพื่อแชร์โพสต์นั้นลงบนหน้า Wall ของตัวเอง\n\nProbability (%): โอกาสในการกดแชร์\n\nการคอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image157.png"
            ]
          },
          {
            "title": "การคอมเมนต์ด้วยรูปภาพ (Comment by image)",
            "content": "การคอมเมนต์ด้วยรูปภาพ (Comment by image)\n\nProbability (%):โอกาสที่จะลงคอมเมนต์\n\nImage folder:เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "การคอมเมนต์ด้วยข้อความ (Comment by text)",
            "content": "การคอมเมนต์ด้วยข้อความ (Comment by text)\n\nCreate content with AI:หากติ๊กช่องนี้ ระบบจะใช้ AI ช่วยคิดข้อความคอมเมนต์ให้โดยอัตโนมัติ\n\nProbability (%):โอกาสที่จะลงคอมเมนต์\n\nList Comments:ช่องสำหรับพิมพ์ข้อความที่ต้องการ\n\nOptions:เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: 1 คอมเมนต์ มีหลายบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.Break (หยุดการกระทำต่างๆ)",
            "content": "7.Break (หยุดการกระทำต่างๆ)\n\n![image](/images/image566.png)\n\nDelay time (s):ระยะเวลาพัก (วินาที)\n\n",
            "type": "markdown",
            "images": [
              "image566.png"
            ]
          },
          {
            "title": "8.Script GemLogin (ใช้สคริปต์ GemLogin)",
            "content": "8.Script GemLogin (ใช้สคริปต์ GemLogin)\n\n![image](/images/image332.png)\n\nSelect script:เลือกสคริปต์ที่ต้องการใช้งาน\n\nTimeout (s):ระยะเวลาไทม์เอาต์ หากสคริปต์ไม่ทำงาน\n\nChrome size:ขนาดบราวเซอร์โครม\n\n",
            "type": "markdown",
            "images": [
              "image332.png"
            ]
          },
          {
            "title": "9.Interact specified reel โต้ตอบกับรีลที่กำหนด",
            "content": "9.Interact specified reel โต้ตอบกับรีลที่กำหนด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image102.png)\n\nการตั้งค่าพื้นฐานและการสุ่ม\n\nCount posts:จำนวนโพสต์ที่จะให้ระบบเข้าไปทำงาน\n\nBreak (s):ระยะเวลาหยุดพักระหว่างแต่ละโพสต์\n\nView post (s):ระยะเวลาในการดูคลิปก่อนเริ่มกดไลก์หรือคอมเมนต์\n\nการตั้งค่าข้อมูลเป้าหมาย\n\nEnter Id or post link:ใส่ ID ของโพสต์หรือ Link ของ Reel ที่ต้องการให้ระบบเข้าไปทำงาน\n\nDelete used post link:หากติ๊กถูก ระบบจะลบลิงก์ที่ทำงานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\nการโต้ตอบและการแชร์\n\nLike:ติ๊กถูกเพื่อให้ระบบกดถูกใจโพสต์\n\nShare wall:ติ๊กถูกเพื่อแชร์คลิปลงบนหน้าโปรไฟล์ (Timeline) ของตัวเอง\n\nShare content:ใส่ข้อความแคปชั่นที่ต้องการใช้ตอนแชร์\n\nOptions:เลือกรูปแบบของข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความ\n\nContent has many lines: กลุ่มของข้อความที่มีหลายบรรทัดรวมกัน = 1 ข้อความ\n\nDelete used content:ลบข้อความที่ใช้แชร์แล้วออกจากรายการ\n\nการแสดงความคิดเห็น\n\n",
            "type": "markdown",
            "images": [
              "image102.png"
            ]
          },
          {
            "title": "แบบข้อความ (Comment by text)",
            "content": "แบบข้อความ (Comment by text)\n\nCreate content with AI:ใช้ AI ช่วยสร้างเนื้อหาคอมเมนต์อัตโนมัติ\n\nList Comments:ใส่รายการข้อความที่ต้องการ\n\nDelete used content:ลบคอมเมนต์ที่ใช้ไปแล้วเพื่อไม่ให้ซ้ำเดิม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "แบบรูปภาพ (Comment by image)",
            "content": "แบบรูปภาพ (Comment by image)\n\nComment by image:ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nImage folder:เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nFriends-Groups function\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. Add friends by keyword (เพิ่มเพื่อนตามคีย์เวิร์ด)",
            "content": "1. Add friends by keyword (เพิ่มเพื่อนตามคีย์เวิร์ด)\n\n![image](/images/image361.png)\n\nCount:จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s):ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\nList of keywords:คีย์เวิร์ดสำหรับค้นหา\n\n",
            "type": "markdown",
            "images": [
              "image361.png"
            ]
          },
          {
            "title": "2.Add friends by suggestions (เพิ่มเพื่อนตามที่แนะนำ)",
            "content": "2.Add friends by suggestions (เพิ่มเพื่อนตามที่แนะนำ)\n\n![image](/images/image121.png)\n\nCount:จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s):ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\nOnly add friends with VN names:เพิ่มเฉพาะชื่อเวียดนามเท่านั้น\n\nOnly add friends with people with mutual friends:เพิ่มเฉพาะคนที่มีเพื่อมร่วมกันเท่านั้น\n\nStop when see a Facebook warning:หยุดหลังจากเฟสบุ๊คเตือน‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌\n\n",
            "type": "markdown",
            "images": [
              "image121.png"
            ]
          },
          {
            "title": "3.Confirm Friend (ยอมรับเป็นเพื่อน)",
            "content": "3.Confirm Friend (ยอมรับเป็นเพื่อน)\n\n![image](/images/image630.png)\n\nCount:จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s):ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\nOnly add friends with VN names:เพิ่มเฉพาะชื่อเวียดนามเท่านั้น\n\nOnly add friends with people with mutual friends:เพิ่มเฉพาะคนที่มีเพื่อม\n\nร่วมกันเท่านั้น\n\nStop when see a Facebook warning:หยุดหลังจากเฟสบุ๊คเตือน\n\n",
            "type": "markdown",
            "images": [
              "image630.png"
            ]
          },
          {
            "title": "4. Add friends by UID (เพิ่มเพื่อนด้วย UID)",
            "content": "4. Add friends by UID (เพิ่มเพื่อนด้วย UID)\n\n![image](/images/image738.png)\n\nCount:จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak (s):ระยะเวลาพักก่อนเพิ่มคนถัดไป ‌ ‌ ‌\n\nInteract before add friends:ปฏิสัมพันธ์กับโพสก่อนเพิ่มเพื่อน\n\nStop when FB warning:หยุดหลังจากเฟสบุ๊คเตือน\n\n",
            "type": "markdown",
            "images": [
              "image738.png"
            ]
          },
          {
            "title": "5. Cancel sent invitation (ยกเลิกคำขอ)",
            "content": "5. Cancel sent invitation (ยกเลิกคำขอ)\n\n![image](/images/image337.png)\n\nCount:จำนวนเพื่อนที่ต้องการยกเลิก\n\nBreak (s):ระยะเวลาพักก่อนเพิ่มคนถัดไป\n\n",
            "type": "markdown",
            "images": [
              "image337.png"
            ]
          },
          {
            "title": "6.Unfriend (เลิกเป็นเพื่อน)",
            "content": "6.Unfriend (เลิกเป็นเพื่อน)\n\n![image](/images/image288.png)\n\nCount:จำนวนเพื่อนที่ต้องการยกเลิกเป็นเพื่อน\n\nBreak (s):ระยะเวลาพักก่อนยกเลิกคนถัดไป ‌ ‌ ‌\n\nOption :ตัวเลือกในการลบ แบบสุ่ม, เพื่อนที่เป็นชื่อต่างชาติ, ตาม UID\n\nList of UID :ลิสต์ UID ที่ต้องการลบเพื่อน\n\nList of UID friends to keeps :ลิสต์ UID เพื่อนที่ไม่ต้องการลบเพื่อน\n\n",
            "type": "markdown",
            "images": [
              "image288.png"
            ]
          },
          {
            "title": "7.Add friends vs group members (เพิ่มเพื่อนในสมาชิกกลุ่ม)",
            "content": "7.Add friends vs group members (เพิ่มเพื่อนในสมาชิกกลุ่ม)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image414.png)\n\nCount:จำนวนเพื่อนที่ต้องการเพิ่มเป็นเพื่อน\n\nBreak (s):ระยะเวลาพักก่อนเพิ่มคนถัดไป ‌ ‌\n\nList of groups Ids :ลิสต์ไอดีกลุ่ม\n\nOnly add friends with VN names:เพิ่มเฉพาะชื่อเวียดนามเท่านั้น\n\nAdd friend with member who has things in common:หากติ๊กช่องนี้ ระบบจะเลือกเพิ่มเพื่อนเฉพาะคนที่มี จุดร่วมกัน\n\n",
            "type": "markdown",
            "images": [
              "image414.png"
            ]
          },
          {
            "title": "8.Add Friends with friend's friends (เพิ่มเพื่อนกับเพื่อนของเพื่อน)",
            "content": "8.Add Friends with friend's friends (เพิ่มเพื่อนกับเพื่อนของเพื่อน)\n\n![image](/images/image31.png)\n\nCount (จำนวน):จำนวนเพื่อนที่จะให้ระบบส่งคำขอ\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการส่งคำขอแต่ละครั้ง\n\nObject options:เลือกว่าจะส่งคำขอหาใครในรายชื่อเพื่อนของ UID นั้นๆ\n\nRandom friends:สุ่มเพื่อนที่จะส่งคำขอ\n\nSpecified user:ระบุผู้ใช้ที่ต้องการเพิ่มเพื่อนของเขา\n\nStop when see a Facebook warning:กำหนดว่าหากระบบตรวจเจอคำเตือนจาก Facebook จะให้ หยุดทำงาน หลังจากเจอคำเตือนไปแล้วกี่ครั้ง\n\nList of Uid:UID ของบัญชี Facebook ที่คุณต้องการไป \"ดึงเพื่อน\" ของเขามาแอด\n\nAuto delete used uid:ระบบจะลบ UID ที่ใช้งานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": [
              "image31.png"
            ]
          },
          {
            "title": "9.Join group by suggestions (เข้าร่วมกลุ่มแนะนำ)",
            "content": "9.Join group by suggestions (เข้าร่วมกลุ่มแนะนำ)\n\n![image](/images/image632.png)\n\nCount:จำนวนกลุ่ม\n\nBreak (s):ระยะเวลาพักก่อนเข้าร่วมกลุ่มถัดไป (วินาที)\n\nAuto answer questions:ตอบคำถามอัตโนมัติ\n\nList of answers:ลิสต์คำตอบ\n\n10. Join groups by keyword (เข้าร่วมกลุ่มตามคีย์เวิร์ด)\n\n![image](/images/image801.png)\n\nCount:จำนวนกลุ่ม\n\nBreak (s):ระยะเวลาพักก่อนเข้าร่วมกลุ่มถัดไป (วินาที)\n\nList of keywords :ลิสต์คีย์เวิร์ดกลุ่ม\n\nAuto answer questions :ตอบคำถามอัตโนมัติ\n\nList of answers :ลิสต์คำตอบ\n\n",
            "type": "markdown",
            "images": [
              "image632.png",
              "image801.png"
            ]
          },
          {
            "title": "11.Join specified group (เข้าร่วมกลุ่มที่ระบุ)",
            "content": "11.Join specified group (เข้าร่วมกลุ่มที่ระบุ)\n\n![image](/images/image663.png)\n\nCount :จำนวนกลุ่ม\n\nBreak (s) :ระยะเวลาพักก่อนเข้าร่วมกลุ่มถัดไป (วินาที) ‌\n\nAuto answer questions :ตอบคำถามอัตโนมัติ\n\nList of answers :ลิสต์คำตอบ\n\nEnter group link:เพิ่ม Link กลุ่มที่ต้องการ\n\nDelete used group link:ลบ Link กลุ่มที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image663.png"
            ]
          },
          {
            "title": "12.Leave group (ออกจากกลุ่ม)",
            "content": "12.Leave group (ออกจากกลุ่ม)\n\n![image](/images/image411.png)\n\nCount :จำนวน\n\nBreak :หยุด\n\nList of ID groups to keep :รายชื่อกลุ่ม ID ที่ต้องการเก็บไว้\n\nConfigure Leave group :ตั้งค่าการออกจากกลุ่ม\n\nOption :ตัวเลือก\n\nRandom joined groups : สุ่มกลุ่มที่เข้าร่วม\n\nLeave group moderating posts : ออกจากกลุ่มที่กลั่นกรองโพสต์\n\nLeave groups on condition : ออกจากกลุ่มตามเงื่อนไข\n\nCount of members is less :จำนวนสมาชิกน้อยกว่า\n\nGroup name contains keywords :ชื่อกลุ่มมีคีย์เวิร์ด\n\nList of keywords :รายการคีย์เวิร์ด\n\nLeave by group Id :ออกจากกลุ่มด้วย ID กลุ่ม\n\nList of groups Id :รายการ ID กลุ่ม\n\nSeeding function\n\n",
            "type": "markdown",
            "images": [
              "image411.png"
            ]
          },
          {
            "title": "1.Post (โพสต์)",
            "content": "1.Post (โพสต์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image367.png)\n\nการตั้งค่าพื้นฐาน\n\nBreak (s):กำหนดระยะเวลารอระหว่างแต่ละโพสต์\n\nส่วนของเนื้อหา\n\nContent:ติ๊กถูกเพื่อใช้งาน แล้วคลิกปุ่ม Enter เพื่อพิมพ์ข้อความที่ต้องการ\n\nDelete used content: ลบข้อความที่ใช้แล้วทิ้ง\n\nUse Background: ใช้พื้นหลังสีๆ ของแพลตฟอร์ม (เหมือนโพสต์ Facebook ปกติ)\n\nImage:ติ๊กถูกหากต้องการโพสต์รูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในคอมพิวเตอร์\n\nImages: เลือกว่าจะสุ่มใช้กี่รูปต่อ 1 โพสต์\n\nการกำหนดเป้าหมาย\n\nPost to wall:โพสต์ลงบนหน้าโปรไฟล์ (หน้าวอลล์) ของตัวเอง\n\nPost to group:โพสต์ลงในกลุ่มต่างๆ\n\nCount groups: จำนวนกลุ่มที่จะให้โพสต์ต่อการรัน 1 ครั้ง\n\nRandom group joined: สุ่มโพสต์ลงในกลุ่มที่เราเป็นสมาชิกอยู่แล้ว\n\nUser-imported group: ระบุ ID กลุ่มเองเฉพาะเจาะจง\n\n",
            "type": "markdown",
            "images": [
              "image367.png"
            ]
          },
          {
            "title": "ตัวเลือกเพิ่มเติมด้านล่าง:",
            "content": "ตัวเลือกเพิ่มเติมด้านล่าง:\n\nPost anonymously:โพสต์แบบไม่เปิดเผยตัวตน (หากกลุ่มอนุญาต)\n\nPriority posting groups with many members: เน้นโพสต์ลงกลุ่มที่มีจำนวนสมาชิกเยอะก่อน เพื่อเพิ่มการมองเห็น\n\nNo duplicate groups:ป้องกันการโพสต์ซ้ำกลุ่มเดิม\n\nOnly post uncensored group: โพสต์เฉพาะกลุ่มที่ไม่มีระบบกรองคำหรือแอดมินไม่ต้องอนุมัติโพสต์\n\nInteract to group before post:ให้บอทไปกดดูหรือมีปฏิสัมพันธ์กับกลุ่มก่อนโพสต์ เพื่อให้ดูเหมือนคนเล่นจริง\n\nการปฏิสัมพันธ์หลังโพสต์\n\nInteract with posted post:เมื่อโพสต์เสร็จแล้ว ให้บอททำการกดไลก์ หรือคอมเมนต์ใต้โพสต์ของตัวเองทันที เพื่อเป็น��ารดันโพสต์ (สามารถกดที่ Settings เพื่อตั้งค่าคอมเมนต์ได้)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Share (แชร์)",
            "content": "2.Share (แชร์)\n\n![image](/images/image656.png)\n\nการตั้งค่าพื้นฐาน\n\nBreak (s):กำหนดระยะห่างระหว่างการแชร์แต่ละครั้ง\n\nส่วนเนื้อหาที่ต้องการแชร์\n\nLink posts to share:ใส่ URL หรือลิงก์ของโพสต์ที่ต้องการแชร์ลงในช่องนี้ (ใส่ได้มากกว่า 1 ลิงก์)\n\nช่อง Content (ด้านล่าง):ติ๊กถูกที่ช่อง \"Content\" หากต้องการใส่ข้อความประกอบการแชร์\n\nCreate content with AI: ตัวเลือกสำหรับให้ AI ช่วยร่างข้อความให้\n\nOptions: เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัด = 1 โพสต์\n\nContent has many lines: ทุกบรรทัดรวมกัน = 1 โพสต์\n\nDelete used content: หากติ๊กช่องนี้ ระบบจะลบข้อความที่ใช้ไปแล้วทิ้ง เพื่อป้องกันการใช้ข้อความซ้ำเดิม\n\nการตั้งค่ากลุ่มเป้าหมาย\n\nShare post to wall:ติ๊กเลือกหากต้องการแชร์ลงบนหน้าโปรไฟล์ (Wall) ของตัวเอง\n\nShare post to group:ติ๊กเลือกหากต้องการแชร์เข้ากลุ่มต่างๆ\n\nCount groups: กำหนดจำนวนกลุ่มที่จะแชร์\n\nRandom group joined: ระบบจะสุ่มเลือกกลุ่มที่คุณเป็นสมาชิกอยู่แล้ว\n\nUser-imported group: เลือกแชร์เฉพาะกลุ่มที่คุณระบุ ID หรือใส่รายชื่อไว้ในช่องด้านล่าง\n\nOnly share joined groups: จำกัดให้แชร์เฉพาะกลุ่มที่คุณกดเข้าร่วมแล้วเท่านั้น\n\nตัวเลือกเสริม\n\nOnly uncensored group share:เลือกแชร์เฉพาะกลุ่มที่ไม่ต้องรอการอนุมัติจากแอดมิน (โพสต์แล้วขึ้นทันที)\n\nPriority sharing groups with many members:ให้ความสำคัญกับการแชร์ลงกลุ่มที่มีจำนวนสมาชิกเยอะก่อน เพื่อเพิ่มการมองเห็น\n\nNo duplicate groups:ป้องกันการแชร์ซ้ำกลุ่มเดิมในรอบการทำงานนั้นๆ\n\nInteract to group before share:ระบบจะทำการปฏิสัมพันธ์กับกลุ่มก่อน เช่น กดไลก์โพสต์ในกลุ่ม เพื่อเลียนแบบพฤติกรรมมนุษย์ก่อนที่จะทำการแชร์ ช่วยลดโอกาสโดนแบนได้ดีมากครับ (สามารถกด Settings ข้างๆ เพื่อตั้งค่าการปฏิสัมพันธ์ได้)\n\n",
            "type": "markdown",
            "images": [
              "image656.png"
            ]
          },
          {
            "title": "3.Message (ส่งข้อความ)",
            "content": "3.Message (ส่งข้อความ)\n\n![image](/images/image478.png)\n\nการตั้งค่าพื้นฐาน\n\nCount Uid:กำหนดจำนวน UID (บัญชีผู้รับ) ที่ต้องการส่งในรอบนี้\n\nBreak (s):ตั้งค่าเวลาพักระหว่างการส่งแต่ละข้อความ\n\nOptions:เลือกรูปแบบการดึงข้อมูล UID\n\nUID specified: ระบบจะส่งข้อความหาเฉพาะรายชื่อ UID ที่คุณคัดลอกมาวางในช่องList of Uidเท่านั้น (แม่นยำที่สุด)\n\nRandom friends: ระบบจะสุ่มเลือกเพื่อนที่มีอยู่ในบัญชีของคุณ เพื่อส่งข้อความไปหาตามจำนวนที่ตั้งค่าไว้\n\nInbox message: ระบบจะส่งข้อความหาคนที่เคยมีประวัติการคุยกันใน Inbox (กล่องข้อความ)\n\nUnread message: ระบบจะเลือกส่งหาเฉพาะคนที่มีข้อความค้างอยู่แต่คุณยังไม่ได้เปิดอ่าน\n\nSpam messag: ระบบจะส่งข้อความหาคนที่มีบทสนทนาอยู่ในโฟลเดอร์ Spam/Filter\n\nการจัดการรายชื่อ UID\n\nList of Uid:ช่องสำหรับใส่หมายเลขไอดี (UID) ของผู้รับ\n\nAuto delete used Uid:หากติ๊กถูก ระบบจะลบรายชื่อ UID ทิ้งทันทีที่ส่งสำเร็จ\n\nInteract when messaging:การปฏิสัมพันธ์ขณะส่ง (เช่น การเข้าไปดูโปรไฟล์ก่อนส่ง) สามารถเลือกตั้งค่าได้ที่ปุ่ม Settings เพื่อให้ดูเหมือนพฤติกรรมมนุษย์มากขึ้น\n\nการส่งข้อความ (Send text)\n\nMessage content: พิมพ์ข้อความที่ต้องการส่งในช่องนี้\n\nCreate content with AI: ใช้ระบบ AI ช่วยเขียนข้อความให้ (ถ้าเปิดใช้งาน)\n\nOptions (Content style): เลือกว่าจะส่งทีละบรรทัด หรือส่งทั้งหมดพร้อมกัน\n\nDelete used content: ลบข้อความที่ใช้แล้วทิ้ง (กรณีเตรียมไว้หลายชุด)\n\nการส่งรูปภาพ (Send image)\n\nSend image: ติ๊กถูกเพื่อเปิดการส่งรูปภาพแนบไปกับข้อความ\n\nImage folder: กดเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการส่ง\n\nImages/message: กำหนดว่าจะส่งรูปภาพจำนวนเท่าไหร่ต่อการส่ง 1 ครั้ง (เช่น 1 ถึง 2 รูป)\n\n",
            "type": "markdown",
            "images": [
              "image478.png"
            ]
          },
          {
            "title": "4.Spam post (สแปมโพสต์)",
            "content": "4.Spam post (สแปมโพสต์)\n\n![image](/images/image421.png)\n\nการตั้งค่าพื้นฐาน\n\nCount ID:จำนวน ID เป้าหมาย เช่น โปรไฟล์,กลุ่ม หรือเพจ ที่จะให้ระบบเข้าไปทำงาน\n\nCount posts/ID:จำนวนโพสต์ในแต่ละ ID ที่ต้องการให้เข้าไปโต้ตอบ\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการทำแต่ละรายการ\n\nObject type:ประเภทของเป้าหมาย\n\nProfile: หน้าเฟซบุ๊กส่วนตัว\n\nGroup: กลุ่มต่างๆ\n\nPage: หน้าแฟนเพจ\n\nรายชื่อเป้าหมายและการคัดกรอง\n\nEnter list of ID:ใส่ ID ของProfile, Group หรือ Page ที่คุณต้องการให้ระบบทำงาน\n\nAuto delete used ID:ติ๊กถูกเพื่อให้ระบบลบ ID ทิ้งทันทีเมื่อทำงานเสร็จ (ป้องกันการทำซ้ำ)\n\nSkip:ใช้สำหรับสั่งให้ระบบ \"ข้าม\" โพสต์แรกๆ ในหน้า Feed หรือกลุ่มนั้นไปก่อน\n\nตัวอย่าง: หากตั้งเป็น1 > 3ระบบจะสุ่มข้ามโพสต์ 1 ถึง 3 โพสต์แรก แล้วค่อยเริ่มทำงานในโพสต์ถัดไป\n\nDon't comment duplicate posts:ป้องกันการไปคอมเมนต์ซ้ำในโพสต์เดิมที่เคยทำไปแล้ว\n\nรูปแบบการปฏิสัมพันธ์\n\nInteraction:ติ๊กถูกเพื่อเปิดการกด Reaction (ไลก์, หัวใจ, ว้าว ฯลฯ)\n\nShare wall:ติ๊กถูกหากต้องการให้แชร์โพสต์นั้นไปที่หน้าวอลล์ของตัวเอง\n\nComment by text:ติ๊กถูกเพื่อเปิดการคอมเมนต์ด้วยข้อความ\n\nList Comments: พิมพ์ข้อความที่ต้องการสุ่มใช้ในช่องนี้\n\nOptions: เลือกรูปแบบคอมเม้น\n\nContent is only 1 line: ระบบจะถือว่าข้อความ 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: ระบบจะรวมข้อความทุกบรรทัดในช่อง List Comments เป็น 1 คอมเมนต์เดียว\n\nDelete used content: ลบข้อความที่ใช้ไปแล้วออกจากรายการ\n\nComment by image:ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ โดยเลือกที่อยู่ของ Image folder\n\nImage folder:เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
            "type": "markdown",
            "images": [
              "image421.png"
            ]
          },
          {
            "title": "5.Follow (ติดตาม)",
            "content": "5.Follow (ติดตาม)\n\n![image](/images/image518.png)\n\nBreak :ระยะเวลาดีเลย์ในการติดตาม\n\nEnter list of ID :ลิสต์ไอดีที่ต้องการติดตาม\n\n",
            "type": "markdown",
            "images": [
              "image518.png"
            ]
          },
          {
            "title": "6.Like page (กดไลค์เพจ)",
            "content": "6.Like page (กดไลค์เพจ)\n\n![image](/images/image757.png)\n\nBreak :ระยะเวลาดีเลย์ในการไลค์เพจ\n\nEnter list of Uid :ลิสต์ไอดีเพจที่ต้องการไลค์\n\n",
            "type": "markdown",
            "images": [
              "image757.png"
            ]
          },
          {
            "title": "7.Review page (รีวิวเพจ)",
            "content": "7.Review page (รีวิวเพจ)\n\n![image](/images/image693.png)\n\nId Page :ลิสต์ไอดีเพจที่ต้องการรีวิว\n\nReview content :เนื้อหาที่ต้องการรีวิว\n\nOption :เนื้อหาเพียง 1 บรรทัด, เนื้อหาหลายบรรทัด\n\nAuto Delete used content :ลบเนื้อหาที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image693.png"
            ]
          },
          {
            "title": "8.Reply to comment (ตอบกลับความคิดเห็น)",
            "content": "8.Reply to comment (ตอบกลับความคิดเห็น)\n\n![image](/images/image475.png)\n\nการตั้งค่าเวลาและจำนวน\n\nView post (s):ระยะเวลาที่ระบบเปิดดูโพสต์\n\nCount ID/Nick:จำนวนครั้งที่จะให้ทำงานต่อหนึ่งรอบ\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการทำงานแต่ละครั้ง\n\nการเลือกกลุ่มเป้าหมาย\n\nPhản hồi nhiều bình luận trong 1 bài viết:ตอบกลับหลายๆ คอมเมนต์ภายในโพสต์เดียว (ต้องใส่ลิงก์โพสต์ในช่อง Post link)\n\nPhản hồi bình luận chỉ định:ตอบกลับเฉพาะคอมเมนต์ที่ระบุไว้เท่านั้น (ต้องนำ ID หรือ Link ของคอมเมนต์มาใส่ในช่อง Danh sách ID...)\n\nAuto delete used ID:ติ๊กถูกเพื่อให้ระบบลบ ID ที่ทำงานเสร็จแล้วออกจากรายการอัตโนมัติ\n\nรูปแบบการโต้ตอบ\n\nInteraction:ติ๊กเพื่อกด \"ความรู้สึก\" (Like, Love, Haha, ฯลฯ) ให้กับคอมเมนต์นั้นๆ\n\nComment by text:ตอบกลับด้วยข้อความ\n\nใส่ข้อความที่ต้องการในช่อง List Comments\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความคอมเมนต์\n\nContent has many lines: หลายบรรทัด = 1 ข้อความคอมเมนต์\n\nDelete commented content: ลบข้อความทิ้งหลังจากใช้งานแล้ว\n\nComment by image:ตอบกลับด้วยรูปภาพ\n\nเลือกโฟลเดอร์เก็บรูปภาพในช่อง Image folder\n\n",
            "type": "markdown",
            "images": [
              "image475.png"
            ]
          },
          {
            "title": "9.Interact specified post (การมีปฏิสัมพันธ์กับโพสต์)",
            "content": "9.Interact specified post (การมีปฏิสัมพันธ์กับโพสต์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image207.png)\n\nกลุ่มการตั้งค่าพื้นฐาน\n\nCount posts:จำนวนโพสต์ที่ต้องการให้ระบบทำต่อการรัน 1 ครั้ง (ตั้งเป็นช่วงสุ่ม เช่น 1 ถึง 1)\n\nBreak (s):เวลาพักระหว่างแต่ละโพสต์ (หน่วยเป็นวินาที) เพื่อป้องกันการโดนแบน\n\nView post (s):ระยะเวลาที่ค้างหน้าจอเพื่อ \"ดู\" โพสต์ก่อนเริ่มทำกิจกรรม (ช่วยให้ดูเหมือนมนุษย์มากขึ้น)\n\nEnter Id or post link:ช่องสำหรับใส่ URL ของโพสต์ หรือ ID ของโพสต์ที่ต้องการ (1 บรรทัดต่อ 1 รายการ)\n\nDelete used post link:หากติ๊กถูก ระบบจะลบลิงก์ที่ทำเสร็จแล้วออกจากรายการอัตโนมัติ\n\nกลุ่มการปฏิสัมพันธ์และการแชร์\n\nInteraction:ติ๊กเพื่อเปิดการกด Reaction (Like, Love, Haha ฯลฯ)\n\nShare wall:ติ๊กหากต้องการให้นำโพสต์นั้นไปแชร์บนหน้าโปรไฟล์ (Timeline) ของเราเอง\n\nShare content:ใส่ข้อความที่จะเขียนประกอบการแชร์\n\nOptions:ตัวเลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\nDelete used content:ลบข้อความที่ใช้ไปแล้วเพื่อไม่ให้ซ้ำเดิม\n\nการคอมเมนต์ด้วยข้อความ (Comment by text)\n\nList Comments:ใส่รายการข้อความที่ต้องการใช้คอมเมนต์\n\nCreate content with AI:ใช้ AI ช่วยคิดคำคอมเมนต์ให้\n\nDelete used content:ลบข้อความที่ใช้ไปแล้วเพื่อไม่ให้ซ้ำเดิม\n\nการคอมเมนต์ด้วยรูปภาพ (Comment by image)\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nDelete used images: ลบรูปภาพที่ถูกใช้ไปแล้วออกจากเครื่องหรือรายการ\n\n",
            "type": "markdown",
            "images": [
              "image207.png"
            ]
          },
          {
            "title": "10.Interact posts by keyword (การมีปฏิสัมพันธ์กับโพสต์ตามคีย์เวิด)",
            "content": "10.Interact posts by keyword (การมีปฏิสัมพันธ์กับโพสต์ตามคีย์เวิด)\n\n![image](/images/image307.png)\n\nการตั้งค่าพื้นฐาน\n\nCount posts:กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปทำงาน\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการสลับไปทำโพสต์ถัดไป\n\nการกำหนดเป้าหมาย\n\nEnter list of keywords:ใส่คำค้นหาที่ต้องการ ระบบจะวิ่งไปหาโพสต์ที่มีคำเหล่านี้\n\nSearch posts in groups:หากติ๊กถูก ระบบจะเน้นค้นหาภายในกลุ่ม\n\nEnter group Id: ใส่ไอดีของกลุ่มที่ต้องการเจาะจง\n\nAuto join group: ติ๊กเพื่อให้ระบบกดเข้ากลุ่มอัตโนมัติหากยังไม่ได้เป็นสมาชิก สามารถใส่คำตอบล่วงหน้าได้ที่ปุ่ม Answers สำหรับกลุ่มที่ต้องการให้ตอบคำถามก่อนเข้ากลุ่ม\n\nรูปแบบการปฏิสัมพันธ์\n\nView post (s):ระยะเวลาในการ \"ดู\" โพสต์\n\nInteraction:ติ๊กเพื่อกด Like หรือแสดงความรู้สึก (Reactions)\n\nProbability (%):เพื่อสุ่มความถี่ในการกดได้\n\nComment by image:ส่งคอมเมนต์เป็นรูปภาพ โดยระบุที่อยู่ของโฟลเดอร์รูปภาพ\n\nShare wall:ติ๊กเพื่อให้ระบบแชร์โพสต์นั้นไปที่หน้าโปรไฟล์ของตัวเอง\n\nการจัดการความคิดเห็น\n\nComment by text:ติ๊กเพื่อเปิดใช้งานการคอมเมนต์ด้วยตัวอักษร\n\nCreate content with AI:ใช้ AI ช่วยเขียนเนื้อหาคอมเมนต์ให้\n\nList Comments:ช่องสำหรับพิมพ์ข้อความที่ต้องการคอมเมนต์\n\nOptions:เลือกรูปแบบข้อความ\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines: ระบบจะถือว่า ข้อความทั้งหมดในช่องคือ 1 คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image307.png"
            ]
          },
          {
            "title": "11.Interact Livestream (โต้ตอบถ่ายทอดสด)",
            "content": "11.Interact Livestream (โต้ตอบถ่ายทอดสด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image70.png)\n\nการตั้งค่าพื้นฐาน\n\nLink livestream:วางลิงก์ (URL) ของไลฟ์สดที่ต้องการให้ระบบเข้าไปทำงาน\n\nTime to view (s):กำหนดเวลาที่จะให้ระบบเปิดดูไลฟ์สด\n\nการแสดงความรู้สึก (Express feelings)\n\nตัวเลือกไอคอน: เลือกรูปแบบความรู้สึกที่ต้องการ เช่น ถูกใจ (Like), รักเลย (Love), ว้าว (Wow), เศร้า (Sad) หรือโกรธ (Angry)\n\nการแสดงความคิดเห็น (Comment)\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nSpin content {a|b|c}:ระบบรองรับการสุ่มคำ เช่น{สวัสดี|ทักทาย|รอดูเลย}เพื่อให้แต่ละบัญชีพิมพ์ข้อความไม่ซ้ำกัน\n\nDelete used content:หากติ๊กช่องนี้ ระบบจะลบข้อความที่ใช้ไปแล้วออกจากรายการ เพื่อไม่ให้คอมเมนต์ซ้ำเดิม\n\nการโต้ตอบซ้ำ\n\nRepeat Interact:ติ๊กถูกเพื่อเปิดโหมดทำงานซ้ำ\n\nDelay time (s):ระยะเวลาพักก่อนจะเริ่มโต้ตอบใหม่อีกครั้ง\n\nตัวเลือกย่อย:เลือกว่าในการวนซ้ำแต่ละรอบ จะให้ทำอะไรบ้าง (Express feelings หรือ Comment)\n\n",
            "type": "markdown",
            "images": [
              "image70.png"
            ]
          },
          {
            "title": "12.Invite friends like pages (ชวนเพื่อนกดไลค์เพจ)",
            "content": "12.Invite friends like pages (ชวนเพื่อนกดไลค์เพจ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image299.png)\n\nEnter ID Page :ใส่ไอดีของเพจที่ต้องการชวนเพื่อน\n\nFriends :จำนวนเพื่อน\n\nDelay :ระยะเวลาดีเลย์ในการรันต่อ\n\n",
            "type": "markdown",
            "images": [
              "image299.png"
            ]
          },
          {
            "title": "13.Invite friends join group (เชิญเพื่อนเข้าร่วมกลุ่ม)",
            "content": "13.Invite friends join group (เชิญเพื่อนเข้าร่วมกลุ่ม)\n\n![image](/images/image310.png)\n\n",
            "type": "markdown",
            "images": [
              "image310.png"
            ]
          },
          {
            "title": "Count/group :จำนวนกลุ่ม Invite options : ตัวเลือกคำเชิญ:",
            "content": "Count/group :จำนวนกลุ่ม Invite options : ตัวเลือกคำเชิญ:\n\nInvite random :เชิญแบบสุ่ม\n\nFacebook Suggestions :รายการที่แนะนำ List of Id groups to Ids: ลิสต์ไอดีกลุ่มที่จะเชิญเพื่อน\n\nChange info function\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Change Password (เปลี่ยนรหัสผ่าน)",
            "content": "1.Change Password (เปลี่ยนรหัสผ่าน)\n\n![image](/images/image189.png)\n\nNew password :รหัสผ่านใหม่ ทำการใส่ * หากต้องการสุ่ม\n\n",
            "type": "markdown",
            "images": [
              "image189.png"
            ]
          },
          {
            "title": "2.Remove Phone (ลบเบอร์โทรศัพท์)",
            "content": "2.Remove Phone (ลบเบอร์โทรศัพท์)\n\n![image](/images/image393.png)\n\nOption :เลือกรูปแบบสำหรับเปลี่ยนรหัสผ่าน\n\nUse Account Center: ลบผ่าน Account Center\n\nUse m.fb: ลบผ่าน m.fb\n\nUse mbasic: ลบผ่าน mbasic\n\nUse www.fb : ลบผ่าน www.fb\n\nUse tut no pass: ลบผ่าน tut no pass\n\n",
            "type": "markdown",
            "images": [
              "image393.png"
            ]
          },
          {
            "title": "3.Add mail (เพิ่มอีเมลล์)",
            "content": "3.Add mail (เพิ่มอีเมลล์)\n\n![image](/images/image199.png)\n\nadd mail :เพิ่มอีเมลล์\n\nType Mail :ชนิดของอีเมลล์\n\nTime get otp :เวลาในการรับ otp\n\nDelete mail not on the tool :ลบอีเมลที่ไม่สามารถใช้ร่วมกับโปรแกรม\n\n",
            "type": "markdown",
            "images": [
              "image199.png"
            ]
          },
          {
            "title": "4.Change name (เปลี่ยนชื่อ)",
            "content": "4.Change name (เปลี่ยนชื่อ)\n\n![image](/images/image605.png)\n\nRandom name :เปลี่ยนชื่อแบบสุ่ม\n\nVN name : ชื่อภาษาเวียดนาม\n\nForeign name : ชื่อภาษาต่างประเทศ\n\nName set by user :นำเข้าชื่อด้วยตัวเอง\n\nLname :นามสกุล\n\nMiddle name :ชื่อกลาง\n\nFname :ชื่อ\n\nEnter list of full name :ป้อนรายชื่อเต็ม\n\nDelete used name:ลบชื่อที่ใช้แล้วออก\n\n",
            "type": "markdown",
            "images": [
              "image605.png"
            ]
          },
          {
            "title": "5.Up Avatar (อัพรูปภาพโปรไฟล์)",
            "content": "5.Up Avatar (อัพรูปภาพโปรไฟล์)\n\n![image](/images/image285.png)\n\nImage folder :เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images :ลบรูปภาพที่ใช้แล้ว\n\nAdd profile frames :เพิ่มกรอบรูปภาพ\n\nSkip if already have avatar :ข้ามบัญชีที่มีอวตารแล้ว\n\n",
            "type": "markdown",
            "images": [
              "image285.png"
            ]
          },
          {
            "title": "6.Up Cover (อัพรูปภาพหน้าปก)",
            "content": "6.Up Cover (อัพรูปภาพหน้าปก)\n\n![image](/images/image272.png)\n\nImage folder :เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images :ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image272.png"
            ]
          },
          {
            "title": "7.On - Off 2FA (เปิด/ปิด 2FA)",
            "content": "7.On - Off 2FA (เปิด/ปิด 2FA)\n\n![image](/images/image607.png)\n\nTurn off: ปิด 2FA\n\nTurn on:  เปิด 2FA\n\n",
            "type": "markdown",
            "images": [
              "image607.png"
            ]
          },
          {
            "title": "8.Change Info Account (เปลี่ยนข้อมูลโปรไฟล์)",
            "content": "8.Change Info Account (เปลี่ยนข้อมูลโปรไฟล์)\n\n![image](/images/image369.png)\n\nBio :คำอธิบายตัวตน\n\nWork :ที่ทำงาน\n\nHigh School :การศึกษาระดับมัธยม\n\nCollege :การศึกษาระดับมหาวิทยาลัย\n\nCurrent City :เมืองปัจุบัน\n\nHometown :บ้านเกิด\n\nRelationship :สถานะความสัมพันธ์\n\nGender :เพศ\n\nBirthday :วันเกิด\n\nNickname :ชื่อเล่น\n\n",
            "type": "markdown",
            "images": [
              "image369.png"
            ]
          },
          {
            "title": "9.Remove Trusted Devices (ลบอุปกรณ์ที่เชื่อถือได้)",
            "content": "9.Remove Trusted Devices (ลบอุปกรณ์ที่เชื่อถือได้)\n\n![image](/images/image43.png)\n\n10.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)\n\n![image](/images/image243.png)\n\nOther functions\n\n",
            "type": "markdown",
            "images": [
              "image43.png",
              "image243.png"
            ]
          },
          {
            "title": "1.Search Google (ค้นหาใน Google)",
            "content": "1.Search Google (ค้นหาใน Google)\n\n![image](/images/image551.png)\n\nKeyword|Link web :คีย์เวิร์ด/ลิงก์เว็บไซต์\n\nNumber keywords to search :จำนวนคีย์เวิร์ดที่ต้องการค้นหา\n\nNumber search pages :จำนวนหน้าที่ต้องการค้นหา\n\nClick random link on web :คลิกลิงค์สุ่มบนเว็บ\n\nTime on web :เวลาที่อยู่บนหน้าเว็บ\n\n2.Access website (เข้าถึงเว็บไซต์)\n\n",
            "type": "markdown",
            "images": [
              "image551.png"
            ]
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image430.png)\n\nList Links :ลิสต์ลิงค์เว็บไซต์\n\nCount link to access :จำนวนลิงค์ที่เข้าถึง\n\nClick random link on web :สุ่มคลิกลิงค์บนเว็บ\n\nTime on web :เวลาที่อยู่หน้าเว็บ\n\n",
            "type": "markdown",
            "images": [
              "image430.png"
            ]
          },
          {
            "title": "3.Unlike page (ยกเลิกไลค์เพจ)",
            "content": "3.Unlike page (ยกเลิกไลค์เพจ)\n\n![image](/images/image292.png)\n\nCount :จำนวนเพจที่ต้องการยกเลิกไลค์เพจ\n\nBreak :ระยะเวลาดีเลย์ในการยกเลิกไลค์เพจ\n\n",
            "type": "markdown",
            "images": [
              "image292.png"
            ]
          },
          {
            "title": "4.Link with Instagram (เชื่อมโยงกับอินสตาแกรม)",
            "content": "4.Link with Instagram (เชื่อมโยงกับอินสตาแกรม)\n\n![image](/images/image530.png)\n\nPassword :รหัสผ่าน\n\nRandom : สุ่มรหัสผ่าน\n\nEnter : นำเข้ารหัสผ่านด้วยตัวเอง\n\n2fa:เปิด 2fa\n\nAccount file path :path ของไฟล์บัญชี\n\n",
            "type": "markdown",
            "images": [
              "image530.png"
            ]
          },
          {
            "title": "5.Unlink Instagram (ยกเลิกการเชื่อมโยงอินสตาแกรม)",
            "content": "5.Unlink Instagram (ยกเลิกการเชื่อมโยงอินสตาแกรม)\n\n![image](/images/image730.png)\n\n",
            "type": "markdown",
            "images": [
              "image730.png"
            ]
          },
          {
            "title": "6.Delete posts on Wall (ลบโพสต์บนไทม์ไลน์)",
            "content": "6.Delete posts on Wall (ลบโพสต์บนไทม์ไลน์)\n\n![image](/images/image598.png)\n\nCount:จำนวนโพสต์ที่ต้องการลบ\n\nBreak :ระยะเวลาพักในการลบโพสต์\n\nOnly delete tagged posts :ลบโพสที่ถูกแท็กเท่านั้น\n\n",
            "type": "markdown",
            "images": [
              "image598.png"
            ]
          },
          {
            "title": "7.Disagree spam (ร้องแย้งขัดต่อมาตรฐานชุมชน)",
            "content": "7.Disagree spam (ร้องแย้งขัดต่อมาตรฐานชุมชน)\n\n![image](/images/image326.png)\n\nQuantity :จำนวนในการกระทำต่อมาตรฐานชุมชน\n\n",
            "type": "markdown",
            "images": [
              "image326.png"
            ]
          },
          {
            "title": "8.Professional mode (โหมดมืออาชีพ)",
            "content": "8.Professional mode (โหมดมืออาชีพ)\n\n![image](/images/image714.png)\n\nOption :ตัวเลือกTurn on :เปิดโหมดมืออาชีพTurn off: ปิดโหมดมืออาชีพ\n\n",
            "type": "markdown",
            "images": [
              "image714.png"
            ]
          },
          {
            "title": "9.Create Page (สร้างเพจ)",
            "content": "9.Create Page (สร้างเพจ)\n\n![image](/images/image265.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:กำหนดจำนวนเพจที่ต้องการสร้าง\n\nBreak (s):กำหนดเวลาพักระหว่างการสร้างแต่ละเพจ\n\nการตั้งค่าข้อมูลพื้นฐานหน้าเพจ\n\nPage name:ใส่ชื่อเพจที่ต้องการ (สามารถใช้สัญลักษณ์*เพื่อสุ่มตัวอักษรได้ เช่น nickn*** )\n\nDelete used content: ติ๊กถูกเพื่อให้ลบชื่อที่ใช้ไปแล้วออกจากรายการ\n\nPage category:ใส่หมวดหมู่ของเพจ (ควรระบุเป็นภาษาอังกฤษ)\n\nการตั้งค่าข้อมูลติดต่อและรายละเอียด\n\nBio:คำอธิบายสั้น ๆ เกี่ยวกับเพจ\n\nWebsite:ลิงก์เว็บไซต์\n\nPhone:หมายเลขโทรศัพท์\n\nEmail:อีเมลสำหรับติดต่อ\n\nการตั้งค่าข้อมูลสถานที่\n\nAddress: ที่อยู่ (เลขที่บ้าน/ถนน)\n\nCity/town: เมืองหรือจังหวัด\n\nZIP code: รหัสไปรษณีย์\n\nการตั้งค่ารูปภาพและข้อมูลทางเทคนิค\n\nFolder avatar:ใส่ที่อยู่ Path ของโฟลเดอร์รูปโปรไฟล์\n\nFolder cover:ใส่ที่อยู่ Path ของโฟลเดอร์รูปหน้าปก\n\nPage recipient UID:ใส่หมายเลข UID ของบัญชีที่ต้องการให้รับสิทธิ์เป็นผู้ดูแลเพจ (Admin) หลังจากสร้างเสร็จ\n\n10.Unlock profile (ปลดล็อคโปรไฟล์)\n\n",
            "type": "markdown",
            "images": [
              "image265.png"
            ]
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image378.png)\n\n",
            "type": "markdown",
            "images": [
              "image378.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "4_maxcare____________xl2pd",
        "name": "4.MaxCare วิธีการนำบัญชีเฟสบุ๊คเข้าสู่โปรแกรม",
        "sections": [
          {
            "title": "อธิบายรายละเอียดแต่ละฟังก์ชั่น",
            "content": "อธิบายรายละเอียดแต่ละฟังก์ชั่น\n\nการนำบัญชีเฟสบุ๊คเข้าโปรแกรม Maxcare\n\n![image](/images/image698.png)\n\nหลังจากเปิดโปรแกรมมาแล้ว ให้กดที่ Import accounts เพื่อนำเฟสบุ๊คเข้าระบบ\n\n![image](/images/image531.png)\n\nให้ทำการสร้างไฟล์ขึ้นมา โดยใส่ชื่อตามที่ต้องการได้เลยจากนั้นกด Add\n\n![image](/images/image646.png)\n\nใส่ข้อมูลเฟสลงไป ตามแพทเทิน คั่นด้วยเครื่องหมาย |\n\nยกตัวอย่างการเลือก Format ตามแพทเทินเฟสบุ๊คที่จะนำเข้า\n\n![image](/images/image437.png)\n\nจากนั้นเลือก format ตามแพทเทินที่เรากรอกเข้าไป แล้วกดติ้กถูกที่ Option เพื่อให้มันเช็คข้อมูล Account ต่างๆด้วย เช่น ชื่อ,เพศ,จำนวนเพื่อน,จำนวนกลุ่ม เป็นต้น\n\n![image](/images/image316.png)\n\n![image](/images/image276.png)\n\n![image](/images/image109.png)\n\nเป็นอันเสร็จสิ้นขั้นตอนการนำเข้าเฟสบุ๊ค\n\n",
            "type": "markdown",
            "images": [
              "image698.png",
              "image531.png",
              "image646.png",
              "image437.png",
              "image316.png",
              "image276.png",
              "image109.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "5___________proxy____yydqy",
        "name": "5.การใช้งาน Proxy กับ Maxcare",
        "sections": [
          {
            "title": "ขั้นตอนการนำ  Proxy เข้าใน Maxcare แบบ Import",
            "content": "ขั้นตอนการนำ  Proxy เข้าใน Maxcare แบบ Import\n\n![image](/images/image264.png)\n\n1.เลือกบัญชีที่ต้องการ ==> คลิกขวา ==> Enter Proxies\n\n![image](/images/image254.png)\n\n2.นำ proxy มาวางในช่อง List Proxys ==> เลือก Type ของ Proxy ในช่อง Proxy Type ==> เลือกจำนวน บัญชี ต่อ Proxy หากกำหนด 2 หมายถึง ใช้ 2 บัญชี ต่อ 1 proxy ในช่อง Accounts/Proxy ==>  ในช่อง Option import Proxy ตัวเลือกการนำเข้า เลือกระหว่าง Sequence(แบบเจาะจง) Random(แบบสุ่ม) ==> หากต้องการให้ข้ามบัญชีที่มี Proxy อยู่เเล้วให้เลือกในช่อง Skip account that already have Proxy ==> จากนั้นกด Confirm\n\n![image](/images/image248.png)\n\n3.หลังจากที่นำเข้า Proxy เสร็จแล้ว ไปที่หน้า General configs   ==> ไปที่เมนู Chang IP  เลือก Proxy ==> ในช่อง Option เลือก Entered For each account เป็นการใช้ proxy ที่อยู่ในบัญชี ==> จากนั้นกด Save ==>เสร็จขั้นตอนการนำเข้า  Proxy แบบ Import\n\n",
            "type": "markdown",
            "images": [
              "image264.png",
              "image254.png",
              "image248.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "maxcare_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย Maxcare",
        "sections": [],
        "subCategories": [
          {
            "id": "maxcare_________chec_rcxwp",
            "name": "วิธีแก้ Checkpoint 282,956",
            "sections": [
              {
                "title": "Maxcare วิธีแก้ Checkpoint 282",
                "content": "Maxcare วิธีแก้ Checkpoint 282\n\nเลือกบัญชีที่ต้องการแก้282--> คลิกขวา -->Unlock checkpoint-->282-->Use cookie stored on thetool\n\n![image](/images/image600.png)\n\nการตั้งค่าเมนูUnlock Checkpoiontสำหรับ282\n\n",
                "type": "markdown",
                "images": [
                  "image600.png"
                ]
              },
              {
                "title": "-ByPass captcha",
                "content": "-ByPass captcha\n\n-API Key Omocaptcha:ทำการใส่API Key\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "-capsolver.com:ทำการใส่API Key",
                "content": "-capsolver.com:ทำการใส่API Key\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "-Checkpoint 282",
                "content": "-Checkpoint 282\n\n-Add phone:ทำการนำAPI Keyของviotp.comมาใส่\n\n-Switch 956 (if can):เปลี่ยนเป็น956หากสามารถเปลี่ยนได้\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "-Up image",
                "content": "-Up image\n\n-Folder path:นำPathโฟลเดอร์ที่เก็บรูปภาพมาใส่ หรือใช้เป็นFrom Web\n\n-Upload image using free.facebook.com:กรณีเฟสบุ๊คให้อัปโหลดวิดีโอ ให้เลือกเมนูนี้ด้วย\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "- จากนั้นกดSave",
                "content": "- จากนั้นกดSave\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Maxcare วิธีแก้ Checkpoint 956",
                "content": "Maxcare วิธีแก้ Checkpoint 956\n\n*กรณีติด956อีเมลของบัญชีจำเป็นต้องล็อกอินได้ และเป็นHotmail*\n\n*หากติด956 xmdtจะไม่สามารถแก้ได้*\n\nเลือกบัญชีที่ต้องการแก้956--> คลิกขวา -->Unlock checkpoint-->956-->Use cookie stored on the tool\n\n![image](/images/image85.png)\n\nการตั้งค่าเมนูUnlock Checkpoiontสำหรับ956\n\n",
                "type": "markdown",
                "images": [
                  "image85.png"
                ]
              },
              {
                "title": "-ByPass captcha",
                "content": "-ByPass captcha\n\n-API Key Omocaptcha:ทำการใส่API Key\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "-capsolver.com:ทำการใส่API Key",
                "content": "-capsolver.com:ทำการใส่API Key\n\n-Delete contact info othe than email on tool:ลบเมลที่ใช้กับโปรแกรมไม่ได้ออก\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "- จากนั้นกดSave",
                "content": "- จากนั้นกดSave\n\nหมายเหตุ\n\ncheck point 956ใช้api omocaptchaเข้าช่วยค่ะ\n\ncheck point 282ใช้api omocaptcha,Capsolverและโปรแกรม OTP\n\nomocaptchaสมัครที่OMOCaptcha\n\nCapsolverสมัครที่CapSolver\n\nโปรแกรมรับ OTPแนะนำ สมัครที่Viotp\n\nทั้ง 3 เว็บไซต์ ที่ใช้นอกเหนือจากโปรแกรมมีค่าใช้จ่ายเพิ่มเติม\n\nลูกค้าต้องเติมเงินในแต่ละเว็บ เพื่อนำAPIมาใช้ค่ะ\n\n",
                "type": "markdown",
                "images": []
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________754t3",
            "name": "ดาวน์โหลดโปรแกรมไม่ได้ Maxcare.zip เป็นอันตราย ทำอย่างไร ?",
            "sections": [
              {
                "title": "โปรแกรมเป็นบอทฟาร์มเฟสบุ๊ค เครื่องคอมพิวเตอร์จึงคิดว่าเป็นไวรัส แต่จริงๆแล้วไม่ใช่นะคะ",
                "content": "โปรแกรมเป็นบอทฟาร์มเฟสบุ๊ค เครื่องคอมพิวเตอร์จึงคิดว่าเป็นไวรัส แต่จริงๆแล้วไม่ใช่นะคะ\n\n![image](/images/image676.png)\n\nเมื่อดาวน์โหลดโปรแกรม แล้วเจอแจ้งเตือนแบบนี้ ให้ทำการแก้ไขดังนี้\n\n1. กด CTRL+J\n\n![image](/images/image697.png)\n\n2.ให้เลือกเก็บไฟล์อันตรายไว้\n\n![image](/images/image599.png)\n\n3. .ให้เลือกเก็บเอาไว้ ไม่ว่าอย่างไรก็ตาม จากนั้นไฟล์จะทำการดาวน์โหลดได้แล้ว\n\n",
                "type": "markdown",
                "images": [
                  "image676.png",
                  "image697.png",
                  "image599.png"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare_____maxsyste_6o5de",
            "name": "และ MaxSystemCare แตกต่างกันยังไง ?",
            "sections": [
              {
                "title": "Maxcare v4.0 จะเป็นการรันผ่าน Chrome Browser ส่วน MaxSystemCare จะรันผ่าน LDplayer Android Emulatorซึ่งจะเป็นตัวโปรแกรมเสริม ใช้ควบคู่กับ Maxcare ซึ่งหลังจากวอมบัญชีจาก Maxcare แล้วนำมาวอมต่อที่ MaxSystemCare หากบัญชีที่วอมรอด จะทำให้บัญชีนั้นแข็งแรงขึ้นมาก ซึ่งฟังก์ชั่นการใช้งานนั้นก็จะคล้ายกันกับ Maxcare",
                "content": "Maxcare v4.0 จะเป็นการรันผ่าน Chrome Browser ส่วน MaxSystemCare จะรันผ่าน LDplayer Android Emulatorซึ่งจะเป็นตัวโปรแกรมเสริม ใช้ควบคู่กับ Maxcare ซึ่งหลังจากวอมบัญชีจาก Maxcare แล้วนำมาวอมต่อที่ MaxSystemCare หากบัญชีที่วอมรอด จะทำให้บัญชีนั้นแข็งแรงขึ้นมาก ซึ่งฟังก์ชั่นการใช้งานนั้นก็จะคล้ายกันกับ Maxcare\n\n![image](/images/image777.png)\n\nตัวอย่างการทำงานของ Maxcare\n\n![image](/images/image279.png)\n\nตัวอย่างการทำงานของ MaxSystemCare\n\n",
                "type": "markdown",
                "images": [
                  "image777.png",
                  "image279.png"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare____________c_pllzo",
            "name": "แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome",
            "sections": [
              {
                "title": "1.เข้าไปที่เว็บ",
                "content": "1.เข้าไปที่เว็บ\n\n![image](/images/image27.png)\n\nหลังจากนั้น กด Ctrl+F แล้วพิมพ์ตรงช่องค้นหา 123 เลือกดาวน์โหลดตามที่ในกรอบสีแดง รอจนกว่าจะดาวน์โหลดเสร็จ\n\n2.ติดตั้งไฟล์ที่ดาวน์โหลดมา\n\n![image](/images/image621.png)\n\n3.หลังจากดาวน์โหลดเสร็จ ไปที่อยู่ไฟล์ที่ดาวน์โหลดเสร็จ\n\n3.1 ไปที่ app\n\n![image](/images/image494.png)\n\n3.2 ไปที่ chrome-bin\n\n![image](/images/image559.png)\n\n3.3 จากนั้นพิมพ์\\chrome.exe ในช่องที่อยู่ไฟล์ แล้วคัดลอก\n\n![image](/images/image343.png)\n\n4.นำไปวางในโปรแกรม MaxCare\n\nไปที่ general configs\n\n![image](/images/image535.png)\n\n5คัดลอกลิงค์ไปวางในแท็บใหม่\n\n![image](/images/image40.png)\n\nรอจนโหลดเสร็จ\n\n6.จากนั้นเปลี่ยนชื่อไฟล์ เพิ่ม .zip\n\n![image](/images/image34.png)\n\n",
                "type": "markdown",
                "images": [
                  "image27.png",
                  "image621.png",
                  "image494.png",
                  "image559.png",
                  "image343.png",
                  "image535.png",
                  "image40.png",
                  "image34.png"
                ]
              },
              {
                "title": "กด Yes",
                "content": "กด Yes\n\n![image](/images/image336.png)\n\n7.หลังจากแตกไฟล์เข้าไปที่ driver > win32 จากนั้นกดคัดลอก chromedriver.exe\n\n![image](/images/image418.png)\n\n8.นำไปวางในโฟลเดอร์ MaxCare\n\n",
                "type": "markdown",
                "images": [
                  "image336.png",
                  "image418.png"
                ]
              },
              {
                "title": "หากขึ้นหน้าต่างแบบนี้",
                "content": "หากขึ้นหน้าต่างแบบนี้\n\n![image](/images/image81.png)\n\nให้ไปที่โปรแกรม MaxCare แล้วกด close chromedriver\n\n![image](/images/image247.png)\n\nจากนั้น กด Try Again เป็นอันเสร็จขั้นตอนการแก้ปัญหา\n\n![image](/images/image81.png)\n\n",
                "type": "markdown",
                "images": [
                  "image81.png",
                  "image247.png",
                  "image81.png"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________m6sv8",
            "name": "ไม่สามารถเปิดใช้งานโปรแกรมได้",
            "sections": [
              {
                "title": "โปรแกรมทำงานมาถึงหน้า 2fa แล้วปิดไป !",
                "content": "โปรแกรมทำงานมาถึงหน้า 2fa แล้วปิดไป !\n\n1.โปรแกรมขึ้นว่า 2fa is in correct!\n\n2.โปรแกรมขึ้นว่า login fail!\n\n3.โปรแกรมขึ้นว่า close chrome\n\n4.โปรแกรมขึ้นว่า Error opening browser\n\nวิธีแก้ไข\n\n1.อัพเดตเวอร์ชัน Maxcare\n\nไปที่โฟล์เดอร์ Maxcare => AutoUpdate รอจนกว่าจะเสร็จ\n\n![image](/images/image746.png)\n\nเสร็จสิ้นขั้นตอนการอัพเดตเวอร์ชัน Maxcare เข้าใช้งานเวอร์ชันล่าสุด\n\n2.อัพเดตโครมไดร์เวอร์\n\nไปที่ General configs => Update Chromedriver รอจนกว่าจะเสร็จ\n\n![image](/images/image334.png)\n\nเสร็จสิ้นขั้นตอนการอัพเดตโครมไดร์เวอร์\n\n",
                "type": "markdown",
                "images": [
                  "image746.png",
                  "image334.png"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________o9tlz",
            "name": "วิธีย้ายข้อมูลจากเครื่องเดิมไปยังเครื่องใหม่",
            "sections": [
              {
                "title": "1.วิธี Exprot ข้อมูลจากเครื่องเก่า",
                "content": "1.วิธี Exprot ข้อมูลจากเครื่องเก่า\n\n1.1.เลือกบัญชีที่ต้องการย้ายข้อมูล ==> คลิกขวา ==> Exprot data acc\n\n![image](/images/image470.png)\n\n1.2 เลือกโฟลเดอร์ที่ต้องการเก็บไฟล์ข้อมูล ==>  กด Select folder\n\n![image](/images/image560.png)\n\n1.3 จากนั้นจะได้ไฟล์ชื่อ data_acc นำไฟล์ไปที่เครื่องใหม่ที่ต้องการย้ายข้อมูล\n\n![image](/images/image87.png)\n\n2.วิธี Import ข้อมูลเข้าที่เครื่องใหม่\n\n2.1 คลิกขวา ==> Import data acc\n\n![image](/images/image25.png)\n\n2.2 เลือกไฟล์ที่ Exprot ข้อมูลจากเครื่องเก่า ==> กด open\n\n![image](/images/image375.png)\n\n",
                "type": "markdown",
                "images": [
                  "image470.png",
                  "image560.png",
                  "image87.png",
                  "image25.png",
                  "image375.png"
                ]
              },
              {
                "title": "เป็นอันเสร็จขึ้นตอนการย้ายข้อมูลจากเครื่องเก่าไปยังเครื่องใหม่",
                "content": "เป็นอันเสร็จขึ้นตอนการย้ายข้อมูลจากเครื่องเก่าไปยังเครื่องใหม่\n\n",
                "type": "markdown",
                "images": []
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________98k67",
            "name": "วิธีการย้ายเครื่องใช้งานจากเครื่องเก่าไปเครื่องใหม่ทำยังไง ?",
            "sections": [
              {
                "title": "คัดลอกDevice codeจากเครื่องใหม่ เสร็จแล้วไปที่เว็บไซต์แล้วล็อคอิน",
                "content": "คัดลอกDevice codeจากเครื่องใหม่ เสร็จแล้วไปที่เว็บไซต์แล้วล็อคอิน\n\n![image](/images/image4.png)\n\nจากนั้นไปหน้าการจัดการซอร์ฟแวร์คลิกชื่อMaxcare-English(หรือโปรแกรมที่เราต้องการจะย้ายเครื่อง) จากนั้นกดปุ่มเปลี่ยนเครื่องบนขวามือ แล้วนำDevide codeของเครื่องใหม่มาใส่ กดตกลง เป็นอันเสร็จสิ้น\n\n",
                "type": "markdown",
                "images": [
                  "image4.png"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________5quyz",
            "name": "วิธีดาวน์โหลด Chrome driver และติดตั้ง ?",
            "sections": [
              {
                "title": "ไปที่มุมขวาบนของโครม กดที่ 3 จุด แล้วเลือกSettings",
                "content": "ไปที่มุมขวาบนของโครม กดที่ 3 จุด แล้วเลือกSettings\n\n![image](/images/image576.png)\n\nกดที่About Chromeให้ดาวน์โหลดตามเวอร์ชั่นของตัวเอง (จากรูปจะเป็นVersion 92.0.451.5.159)\n\n![image](/images/image23.png)\n\nสามารถไปดาวน์โหลดได้ที่ลิ้งตามนี้จากนั้นเลือกตามเวอร์ชั่นโครมของตัวเอง ซึ่งจากตัวอย่างโครมจะเป็นเวอร์ชั่น92ให้เลือกChromeDriver 92.0.4515.107\n\n![image](/images/image750.png)\n\nจากนั้นให้กดดาวน์โหลดตามรูปด้านบนได้เลย\n\n![image](/images/image447.png)\n\n![image](/images/image482.png)\n\nแตกไฟล์หรือลากไฟล์chromedriver.exeไปใส่ในโฟลเดอร์Maxcareเป็นอันเสร็จสิ้นเรียบร้อย\n\nหากต้องใช้Chromeเวอร์ชัน115หรือใหม่กว่าหน้านี้มีปลายทางJSONที่สะดวกสำหรับการดาวน์โหลด ChromeDriver เวอร์ชันเฉพาะ\n\n![image](/images/image163.png)\n\nให้ทำการดาวน์โหลดchromedriverเวอร์ชันที่ต้องการ โดยการคัดลอกลิงค์แล้วนำไปวางในแถบใหม่\n\n",
                "type": "markdown",
                "images": [
                  "image576.png",
                  "image23.png",
                  "image750.png",
                  "image447.png",
                  "image482.png",
                  "image163.png"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________6ldm0",
            "name": "วิธีแก้ปัญหาไม่สามารถเปิดใช้งานโปรแกรมได้ ตามรูป",
            "sections": [
              {
                "title": "ขั้นตอนที่ 1 :แตกไฟล์maxcareใหม่อีกไฟล์",
                "content": "ขั้นตอนที่ 1 :แตกไฟล์maxcareใหม่อีกไฟล์\n\n![image](/images/image790.png)\n\n",
                "type": "markdown",
                "images": [
                  "image790.png"
                ]
              },
              {
                "title": "ขั้นตอนที่ 2 :เข้าไปที่ไฟล์maxcareที่พึ่งแตกไฟล์ จากนั้นหาไฟล์ที่มีชื่อว่าMySql.Data.dll",
                "content": "ขั้นตอนที่ 2 :เข้าไปที่ไฟล์maxcareที่พึ่งแตกไฟล์ จากนั้นหาไฟล์ที่มีชื่อว่าMySql.Data.dll\n\n![image](/images/image174.png)\n\nขั้นตอนที่ 3 :คัดลอกไฟล์MySql.Data.dllมาวางในโฟล์เดอร์maxcareที่ไม่สามารถเข้าใช้งานได้\n\n",
                "type": "markdown",
                "images": [
                  "image174.png"
                ]
              },
              {
                "title": "เสร็จสิ้นขั้นตอนการแก้ปัญหา",
                "content": "เสร็จสิ้นขั้นตอนการแก้ปัญหา\n\n",
                "type": "markdown",
                "images": []
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________q7rdy",
            "name": "ไม่ทำตามสคริปต้องทำอย่างไร",
            "sections": [
              {
                "title": "นำ Useragent ด้านล่างใส่เพิ่มในทุกบัญชี2",
                "content": "นำ Useragent ด้านล่างใส่เพิ่มในทุกบัญชี2\n\nMozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\n\nวิธีการนำเข้า\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "1.เลือกบัญชีที่ต้องการนำuseragentเข้า >> คลิกขวา  >>Update data>>Useragent",
                "content": "1.เลือกบัญชีที่ต้องการนำuseragentเข้า >> คลิกขวา  >>Update data>>Useragent\n\n![image](/images/image617.png)\n\n2.นำUseragentด้านล่าง\n\nMozilla/5.0 (Linux; Android 6.0.1; SAMSUNG-SM-J320A Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/301.0.0.37.477;]\n\n",
                "type": "markdown",
                "images": [
                  "image617.png"
                ]
              },
              {
                "title": "ไปวางที่Enter data>> กดSave",
                "content": "ไปวางที่Enter data>> กดSave\n\n![image](/images/image555.png)\n\n**กรณีที่ใส่ Useragent อยู่แล้วแต่โปรแกรมไม่ทำตามสคริปให้นำ  Useragent ออกจากบัญชี**\n\nวิธีการนำ Useragent ออกจากบัญชี\n\n",
                "type": "markdown",
                "images": [
                  "image555.png"
                ]
              },
              {
                "title": "1.เลือกบัญชีที่ต้องการนำUseragentออก >> คลิกขวา >>Update data>>Useragent",
                "content": "1.เลือกบัญชีที่ต้องการนำUseragentออก >> คลิกขวา >>Update data>>Useragent\n\n![image](/images/image239.png)\n\n2.กดSaveเป็นอันเสร็จขั้นตอนการนำUseragentออก\n\n![image](/images/image55.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image239.png",
                  "image55.jpg"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare___________ch_dfw7r",
            "name": "การอัพเดต Chorme driver version.115 ขึ้นไป",
            "sections": [
              {
                "title": "1.ให้ทำการเปิดGoogle Chromeจากนั้นคลิกที่จุดสามจุด",
                "content": "1.ให้ทำการเปิดGoogle Chromeจากนั้นคลิกที่จุดสามจุด\n\n![image](/images/image481.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image481.jpg"
                ]
              },
              {
                "title": "2.เลือกที่หน้าเมนูการตั้งค่า",
                "content": "2.เลือกที่หน้าเมนูการตั้งค่า\n\n![image](/images/image258.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image258.jpg"
                ]
              },
              {
                "title": "3.ให้คลิกไปที่เกี่ยวกับ Chrome",
                "content": "3.ให้คลิกไปที่เกี่ยวกับ Chrome\n\n![image](/images/image717.jpg)\n\n4.จากนั้นให้ตรวจสอบChrome Versionว่าเป็นVersionอะไร\n\n![image](/images/image230.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image717.jpg",
                  "image230.jpg"
                ]
              },
              {
                "title": "5.จากนั้นให้พิมพ์ว่าChromeDriver",
                "content": "5.จากนั้นให้พิมพ์ว่าChromeDriver\n\n![image](/images/image76.jpg)\n\n6.เลือกเว็บแรกตามรูปที่ทำกรอบไว้ได้เลย\n\n![image](/images/image510.jpg)\n\n7.จากนั้นให้คลิกตามที่ทำกรอบไว้\n\n![image](/images/image696.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image76.jpg",
                  "image510.jpg",
                  "image696.jpg"
                ]
              },
              {
                "title": "8.จากนั้นให้ทำการหาChrome Versionที่ตรงกับChrome versionปัจจุบัน แล้วทำการคัดลอกLink",
                "content": "8.จากนั้นให้ทำการหาChrome Versionที่ตรงกับChrome versionปัจจุบัน แล้วทำการคัดลอกLink\n\n![image](/images/image794.jpg)\n\n9.ให้ทำการเปิดแท็บใหม่จากนั้นวางLinkที่คัดลอกลงในช่องที่ทำกรอบไว้ แล้วจะขึ้นดาวน์โหลด\n\n![image](/images/image648.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image794.jpg",
                  "image648.jpg"
                ]
              },
              {
                "title": "10.เมื่อดาวน์โหลดเสร็จแล้ว ให้ทำการกด ปุ่มCtrl + J",
                "content": "10.เมื่อดาวน์โหลดเสร็จแล้ว ให้ทำการกด ปุ่มCtrl + J\n\n![image](/images/image568.jpg)\n\n11.จากนั้นทำการคลิกที่แสดงในโฟลเดอร์\n\n![image](/images/image457.jpg)\n\n12.ให้เปิดไฟล์ที่เราโหลดมา\n\n![image](/images/image304.jpg)\n\n",
                "type": "markdown",
                "images": [
                  "image568.jpg",
                  "image457.jpg",
                  "image304.jpg"
                ]
              },
              {
                "title": "13.เมื่อกดเปิดไฟล์แล้ว ให้ทำการคัดลอกChromedriver",
                "content": "13.เมื่อกดเปิดไฟล์แล้ว ให้ทำการคัดลอกChromedriver\n\n![image](/images/image660.jpg)\n\n14.หลังจากคัดลอกแล้วให้ทำการเปิดโฟลเดอร์MaxCareจากนั้นให้ ทำการวางChromedriverที่คัดลอกไว้\n\n![image](/images/image363.jpg)\n\n15.จากนั้นคลิก ให้ทำการวางทับไปเลย\n\n![image](/images/image423.jpg)\n\nเสร็จสิ้นขั้นตอนการอัพเดต Chorme driver\n\n",
                "type": "markdown",
                "images": [
                  "image660.jpg",
                  "image363.jpg",
                  "image423.jpg"
                ]
              },
              {
                "title": "16.หากขึ้นหน้าแบบนี้ ให้ทำการเปิดTask Managerโดยการคลิกขวาที่Taskbar",
                "content": "16.หากขึ้นหน้าแบบนี้ ให้ทำการเปิดTask Managerโดยการคลิกขวาที่Taskbar\n\n![image](/images/image194.jpg)\n\n17.ให้หาคำว่าChromedriverจากนั้นกดคลิกขวา เลือกคำว่าEntaskหรือไม่ก็ทำการRestartเครื่อง\n\n![image](/images/image373.jpg)\n\n18.เมื่อทำการปิดChromedriverหรือRestartเรียบร้อยแล้ว ทำการคัดลอกChormedriverและนำมาวางในMaxCareอีกครั้ง\n\n![image](/images/image724.jpg)\n\nขอบคุณที่ใช้บริการและเชื่อใจ Minsoft Thailand\n\n",
                "type": "markdown",
                "images": [
                  "image194.jpg",
                  "image373.jpg",
                  "image724.jpg"
                ]
              }
            ],
            "originalProgramName": "Maxcare"
          },
          {
            "id": "maxcare______________caszs",
            "name": "วิธีการตั้งค่ารันบัญชีผ่าน Gologin",
            "sections": [
              {
                "title": "1.ไปที geneal configs",
                "content": "1.ไปที geneal configs\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "2.ไปที่ Chrome configs ตามที่ลูกศรชี้ตามภาพ",
                "content": "2.ไปที่ Chrome configs ตามที่ลูกศรชี้ตามภาพ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "3.เลือก Use Gologin",
                "content": "3.เลือก Use Gologin\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "4.กด Download",
                "content": "4.กด Download\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "5.หลังจากดาวน์โหลดเสร็จกด Save",
                "content": "5.หลังจากดาวน์โหลดเสร็จกด Save\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "เป็นอันเสร็จขั้นตอนการตั้งค่าใช้งานบัญชีด้วย Gologin",
                "content": "เป็นอันเสร็จขั้นตอนการตั้งค่าใช้งานบัญชีด้วย Gologin\n\n",
                "type": "markdown",
                "images": []
              }
            ],
            "originalProgramName": "Maxcare"
          }
        ]
      },
      {
        "id": "maxcare______________754t3",
        "name": "ดาวน์โหลดโปรแกรมไม่ได้ Maxcare.zip เป็นอันตราย ทำอย่างไร ?",
        "sections": [
          {
            "title": "โปรแกรมเป็นบอทฟาร์มเฟสบุ๊ค เครื่องคอมพิวเตอร์จึงคิดว่าเป็นไวรัส แต่จริงๆแล้วไม่ใช่นะคะ",
            "content": "โปรแกรมเป็นบอทฟาร์มเฟสบุ๊ค เครื่องคอมพิวเตอร์จึงคิดว่าเป็นไวรัส แต่จริงๆแล้วไม่ใช่นะคะ\n\n![image](/images/image676.png)\n\nเมื่อดาวน์โหลดโปรแกรม แล้วเจอแจ้งเตือนแบบนี้ ให้ทำการแก้ไขดังนี้\n\n1. กด CTRL+J\n\n![image](/images/image697.png)\n\n2.ให้เลือกเก็บไฟล์อันตรายไว้\n\n![image](/images/image599.png)\n\n3. .ให้เลือกเก็บเอาไว้ ไม่ว่าอย่างไรก็ตาม จากนั้นไฟล์จะทำการดาวน์โหลดได้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image676.png",
              "image697.png",
              "image599.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "_____________________vousi",
        "name": "วิธีการเชื่อมข้อมูลกับ Maxcare",
        "sections": [
          {
            "title": "1.ไปที่โฟลเดอร์ Maxcare จากนั้นคัดลอกที่อยู่โฟลเดอร์ Maxcare",
            "content": "1.ไปที่โฟลเดอร์ Maxcare จากนั้นคัดลอกที่อยู่โฟลเดอร์ Maxcare\n\n![image](/images/image370.png)\n\n2.กลับมาที่โปรแกรม MaxCarePage ไปที่ genneral configuration ==> ไปที่ Data synchronization เลือกเชื่อมต่อกับ maxcare ==> วางที่อยู่โฟลเดอร์ในช่องว่าง ==> กด Save\n\n![image](/images/image309.png)\n\n3.กด Refresh\n\n![image](/images/image604.png)\n\nเสร็จขั้นตอนการเชื่อมข้อมูลกับ Maxcare\n\n",
            "type": "markdown",
            "images": [
              "image370.png",
              "image309.png",
              "image604.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "1____________________ao7ol",
        "name": "1.วิธีการเชื่อมข้อมูลกับ Maxcare",
        "sections": [
          {
            "title": "ตัวอย่างวิธีคัดลอก path folder Maxcare",
            "content": "ตัวอย่างวิธีคัดลอก path folder Maxcare\n\n![image](/images/image460.png)\n\nหลังจากเปิดโปรแกรมเสร็จแล้ว ให้คลิกเมนูGeneral configsจากนั้น ติ๊กsync data with Maxcareเพื่อเชื่อมข้อมูลเฟสที่อยู่ในMaxcareจากนั้นกดSaveแล้วกดRefresh1 ครั้ง\n\n",
            "type": "markdown",
            "images": [
              "image460.png"
            ]
          }
        ],
        "subCategories": [
          {
            "id": "__image___images_ima_yl5lm_sub",
            "name": "",
            "sections": []
          },
          {
            "id": "__image___images_ima_hfhdk_sub",
            "name": "",
            "sections": [
              {
                "title": "ตัวอย่างวิธีคัดลอก path folder Maxcare",
                "content": "ตัวอย่างวิธีคัดลอก path folder Maxcare\n\n![image](/images/image460.png)\n\nหลังจากเปิดโปรแกรมเสร็จแล้ว ให้คลิกเมนูGeneral configsจากนั้น ติ๊กsync data with Maxcareเพื่อเชื่อมข้อมูลเฟสที่อยู่ในMaxcareจากนั้นกดSaveแล้วกดRefresh1 ครั้ง\n\n",
                "type": "markdown",
                "images": [
                  "image460.png"
                ]
              }
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "_____________________hap3e",
        "name": "วิธีเชื่อมข้อมูลกับ Maxcare",
        "sections": [
          {
            "title": "1.ไปที่โฟลเดอร์ Maxcare จากนั้นคัดลอกที่อยู่โฟลเดอร์ Maxcare",
            "content": "1.ไปที่โฟลเดอร์ Maxcare จากนั้นคัดลอกที่อยู่โฟลเดอร์ Maxcare\n\n![image](/images/image273.png)\n\n2.ไปที่ Configs ==> Sync data with Maxcare ==> จากนั้นวางที่อยู่โฟลเดอร์ Maxcare ลงในช่องว่าง\n\n![image](/images/image136.png)\n\nจากนั้นกด Save\n\n3.กด Refresh\n\n![image](/images/image523.png)\n\nเสร็จขั้นตอนการเชื่อมข้อมูลกับ Maxcare\n\n",
            "type": "markdown",
            "images": [
              "image273.png",
              "image136.png",
              "image523.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "tech_maxcare",
        "name": "เทคนิคการใช้งานโปรแกรม Maxcare",
        "sections": [],
        "subCategories": [
          {
            "id": "tech_mc_start",
            "name": "MaxCare เทคนิคการเริ่มฟาร์มบัญชีเบื้องต้น",
            "sections": []
          },
          {
            "id": "tech_mc_add_friend",
            "name": "MaxCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
            "sections": []
          },
          {
            "id": "tech_mc_join_group",
            "name": "MaxCare แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
            "sections": []
          }
        ]
      },
      {
        "id": "tech_mc_start",
        "name": "MaxCare เทคนิคการเริ่มฟาร์มบัญชีเบื้องต้น",
        "sections": []
      },
      {
        "id": "tech_mc_add_friend",
        "name": "MaxCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
        "sections": []
      },
      {
        "id": "tech_mc_join_group",
        "name": "MaxCare แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
        "sections": []
      }
    ]
  },
  {
    "id": "maxcare_page_suite",
    "name": "MaxCare Page",
    "categories": [
      {
        "id": "_____________________942pm",
        "name": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxCare Page",
        "sections": [
          {
            "title": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off\n\n1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย\n\nเข้าไปยังเว็บไซต์ Minsoft\n\n![image](/images/image793.png)\n\nล็อคอินเข้าใช้งาน\n\n![image](/images/image755.png)\n\nไปยังหน้าการจัดการซอร์ฟแวร์\n\n![image](/images/image711.png)\n\n2.จากนั้นไปที่โปรแกรม MaxCarePage ==> กด ดาวน์โหลด\n\n![image](/images/image499.png)\n\nหากขึ้นไม่สามารถดาวน์โหลดได้ ให้กด Ctrl + J\n\n![image](/images/image280.png)\n\nกดที่ จุด 3 จุด\n\n![image](/images/image488.png)\n\nเลือกดาวน์โหลดไฟล์อันตราย\n\n![image](/images/image655.png)\n\n3.หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxCarePage.zip ที่โหลดมา จากนั้นกดแตกไฟล์\n\n![image](/images/image787.png)\n\n4.หลังจากแตกไฟล์เสร็จเรียบร้อยแล้ว เข้าไปยังโฟลเดอร์ MaxCarePage แล้วกด AutoUpdate รอจนกว่าจะอัพเดตเสร็จ\n\n![image](/images/image278.png)\n\n5.เข้าใช้งานโปรแกรม ทำการเข้าระบบให้เรียบร้อย\n\n![image](/images/image357.png)\n\n6.เลือกServer เป็น Thailand\n\n![image](/images/image225.png)\n\nเมื่อเข้าระบบเสร็จแล้ว ให้ไปที่ Utilities >> Update chromedriver เพื่ออัพเดตโครมไดรเวอร์\n\n![image](/images/image154.png)\n\n*เป็นอันเสร็จขั้นตอนการติดตั้งโปรแกรม MaxCare Page***\n\n",
            "type": "markdown",
            "images": [
              "image793.png",
              "image755.png",
              "image711.png",
              "image499.png",
              "image280.png",
              "image488.png",
              "image655.png",
              "image787.png",
              "image278.png",
              "image357.png",
              "image225.png",
              "image154.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare Page"
      },
      {
        "id": "maxcarepage__________raa5v",
        "name": "MaxCarePage วิธีเพิ่มบัญชีเฟสบุ๊คโปรแกรม",
        "sections": [
          {
            "title": "1.ไปที่ More account",
            "content": "1.ไปที่ More account\n\n![image](/images/image613.png)\n\nเพิ่มข้อมูลบัญชีในช่องว่าง\n\nจากนั้นเลือก Import format ให้ตรงกับข้อมูลบัญชี จากนั้กด comfirm\n\n![image](/images/image732.png)\n\n",
            "type": "markdown",
            "images": [
              "image613.png",
              "image732.png"
            ]
          },
          {
            "title": "รูปแบบข้อมูล",
            "content": "รูปแบบข้อมูล\n\n![image](/images/image224.png)\n\n",
            "type": "markdown",
            "images": [
              "image224.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare Page"
      },
      {
        "id": "maxcare_page_________b7hty",
        "name": "MaxCare Page วิธีการเช็คเพจเช็คและดึงเพจ",
        "sections": [
          {
            "title": "หลังจากเพิ่มบัญชีเข้าในโปรแกรมแล้ว",
            "content": "หลังจากเพิ่มบัญชีเข้าในโปรแกรมแล้ว\n\n1.คลิกขวาไปที่ Page function  ==> Check the list pages ==> Open the browser\n\n![image](/images/image384.png)\n\nConfigure check page (การตั้งค่าหน้าตรวจสอบ)\n\nCheck the location page: ตรวจสอบตำแหน่งที่ตั้งของเพจ\n\nEnable disabled page: เปิดใช้งานเพจที่ถูกปิดใช้งาน\n\nDo not add a page that already exists: ห้ามเพิ่มเพจที่มีอยู่แล้ว\n\n![image](/images/image436.png)\n\n2.หลังจากเช็คเพจเสร็จแล้วคลิกขวา ==> จากนั้น Load page list ==> สามารถเลือกจำนวนเพจที่ต้องการได้\n\n![image](/images/image503.png)\n\nเป็นอันเสร็จขึ้นตอนการเช็คและดึงเพจเพื่อใช้งาน\n\n",
            "type": "markdown",
            "images": [
              "image384.png",
              "image436.png",
              "image503.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare Page"
      },
      {
        "id": "maxcare_page_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย MaxCarePage",
        "sections": [],
        "subCategories": [
          {
            "id": "___________cpu_100___wsipf",
            "name": "แก้ไขปัญหา CPU 100% เมื่อใช้ Chrome Page",
            "sections": [
              {
                "title": "Details",
                "content": "![image](/images/image645.png)\n\nหลังจากนั้น กด Ctrl+F แล้วพิมพ์ตรงช่องค้นหา 123 เลือกดาวน์โหลดตามที่ในกรอบสีแดง รอจนกว่าจะดาวน์โหลดเสร็จ\n\n",
                "type": "markdown",
                "images": [
                  "image645.png"
                ]
              },
              {
                "title": "Details",
                "content": "![image](/images/image340.png)\n\n",
                "type": "markdown",
                "images": [
                  "image340.png"
                ]
              },
              {
                "title": "3.1 ไปที่ app",
                "content": "3.1 ไปที่ app\n\n![image](/images/image574.png)\n\n3.2 ไปที่ chrome-bin\n\n![image](/images/image497.png)\n\n3.3 จากนั้นพิมพ์\\chrome.exe ในช่องที่อยู่ไฟล์ แล้วคัดลอก\n\n![image](/images/image402.png)\n\n",
                "type": "markdown",
                "images": [
                  "image574.png",
                  "image497.png",
                  "image402.png"
                ]
              },
              {
                "title": "ไปที่ general configuration ==> Đường dẫn chrome",
                "content": "ไปที่ general configuration ==> Đường dẫn chrome\n\n![image](/images/image409.png)\n\n",
                "type": "markdown",
                "images": [
                  "image409.png"
                ]
              },
              {
                "title": "รอจนโหลดเสร็จ",
                "content": "รอจนโหลดเสร็จ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Details",
                "content": "![image](/images/image120.png)\n\n6.1 กด Yes\n\n![image](/images/image165.png)\n\n",
                "type": "markdown",
                "images": [
                  "image120.png",
                  "image165.png"
                ]
              },
              {
                "title": "Details",
                "content": "![image](/images/image636.png)\n\n",
                "type": "markdown",
                "images": [
                  "image636.png"
                ]
              },
              {
                "title": "หากขึ้นหน้าต่างแบบนี้",
                "content": "หากขึ้นหน้าต่างแบบนี้\n\n![image](/images/image256.png)\n\nให้ไปที่โปรแกรม MaxCare Page ==> Utilities แล้วกด Kill chromedriver\n\n![image](/images/image116.png)\n\nจากนั้น กด Try Again เป็นอันเสร็จขั้นตอนการแก้ปัญหา\n\n",
                "type": "markdown",
                "images": [
                  "image256.png",
                  "image116.png"
                ]
              }
            ],
            "subCategories": [
              {
                "id": "1_______________6bfwl_sub",
                "name": "1.เข้าไปที่เว็บ",
                "sections": [
                  {
                    "title": "Details",
                    "content": "![image](/images/image645.png)\n\nหลังจากนั้น กด Ctrl+F แล้วพิมพ์ตรงช่องค้นหา 123 เลือกดาวน์โหลดตามที่ในกรอบสีแดง รอจนกว่าจะดาวน์โหลดเสร็จ\n\n",
                    "type": "markdown",
                    "images": [
                      "image645.png"
                    ]
                  }
                ]
              },
              {
                "id": "2____________________0bkdv_sub",
                "name": "2.ติดตั้งไฟล์ที่ดาวน์โหลดมา",
                "sections": [
                  {
                    "title": "Details",
                    "content": "![image](/images/image340.png)\n\n",
                    "type": "markdown",
                    "images": [
                      "image340.png"
                    ]
                  }
                ]
              },
              {
                "id": "3____________________e1sbd_sub",
                "name": "3.หลังจากดาวน์โหลดเสร็จ ไปที่อยู่ไฟล์ที่ดาวน์โหลดเสร็จ",
                "sections": [
                  {
                    "title": "3.1 ไปที่ app",
                    "content": "3.1 ไปที่ app\n\n![image](/images/image574.png)\n\n3.2 ไปที่ chrome-bin\n\n![image](/images/image497.png)\n\n3.3 จากนั้นพิมพ์\\chrome.exe ในช่องที่อยู่ไฟล์ แล้วคัดลอก\n\n![image](/images/image402.png)\n\n",
                    "type": "markdown",
                    "images": [
                      "image574.png",
                      "image497.png",
                      "image402.png"
                    ]
                  }
                ]
              },
              {
                "id": "4__________________m_n250l_sub",
                "name": "4.นำไปวางในโปรแกรม MaxCare Page",
                "sections": [
                  {
                    "title": "ไปที่ general configuration ==> Đường dẫn chrome",
                    "content": "ไปที่ general configuration ==> Đường dẫn chrome\n\n![image](/images/image409.png)\n\n",
                    "type": "markdown",
                    "images": [
                      "image409.png"
                    ]
                  }
                ]
              },
              {
                "id": "5____________________3hba5_sub",
                "name": "5คัดลอกลิงค์ไปวางในแท็บใหม่",
                "sections": [
                  {
                    "title": "รอจนโหลดเสร็จ",
                    "content": "รอจนโหลดเสร็จ\n\n",
                    "type": "markdown",
                    "images": []
                  }
                ]
              },
              {
                "id": "6____________________l3z74_sub",
                "name": "6.จากนั้นเปลี่ยนชื่อไฟล์ เพิ่ม .zip",
                "sections": [
                  {
                    "title": "Details",
                    "content": "![image](/images/image120.png)\n\n6.1 กด Yes\n\n![image](/images/image165.png)\n\n",
                    "type": "markdown",
                    "images": [
                      "image120.png",
                      "image165.png"
                    ]
                  }
                ]
              },
              {
                "id": "7____________________w84v3_sub",
                "name": "7.หลังจากแตกไฟล์เข้าไปที่ driver > win32 จากนั้นกดคัดลอก chromedriver.exe",
                "sections": [
                  {
                    "title": "Details",
                    "content": "![image](/images/image636.png)\n\n",
                    "type": "markdown",
                    "images": [
                      "image636.png"
                    ]
                  }
                ]
              },
              {
                "id": "8____________________a85pz_sub",
                "name": "8.นำไปวางในโฟลเดอร์ MaxCare Page",
                "sections": [
                  {
                    "title": "หากขึ้นหน้าต่างแบบนี้",
                    "content": "หากขึ้นหน้าต่างแบบนี้\n\n![image](/images/image256.png)\n\nให้ไปที่โปรแกรม MaxCare Page ==> Utilities แล้วกด Kill chromedriver\n\n![image](/images/image116.png)\n\nจากนั้น กด Try Again เป็นอันเสร็จขั้นตอนการแก้ปัญหา\n\n",
                    "type": "markdown",
                    "images": [
                      "image256.png",
                      "image116.png"
                    ]
                  }
                ]
              }
            ],
            "originalProgramName": "Maxcare Page"
          }
        ]
      },
      {
        "id": "4__________________m_n250l_sub",
        "name": "4.นำไปวางในโปรแกรม MaxCare Page",
        "sections": [
          {
            "title": "ไปที่ general configuration ==> Đường dẫn chrome",
            "content": "ไปที่ general configuration ==> Đường dẫn chrome\n\n![image](/images/image409.png)\n\n",
            "type": "markdown",
            "images": [
              "image409.png"
            ]
          }
        ]
      },
      {
        "id": "8____________________a85pz_sub",
        "name": "8.นำไปวางในโฟลเดอร์ MaxCare Page",
        "sections": [
          {
            "title": "หากขึ้นหน้าต่างแบบนี้",
            "content": "หากขึ้นหน้าต่างแบบนี้\n\n![image](/images/image256.png)\n\nให้ไปที่โปรแกรม MaxCare Page ==> Utilities แล้วกด Kill chromedriver\n\n![image](/images/image116.png)\n\nจากนั้น กด Try Again เป็นอันเสร็จขั้นตอนการแก้ปัญหา\n\n",
            "type": "markdown",
            "images": [
              "image256.png",
              "image116.png"
            ]
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
            "sections": []
          },
          {
            "id": "tech_mcp_join_group",
            "name": "แนะนำการเข้าร่วมกลุ่มอัตโนมัติ",
            "sections": []
          },
          {
            "id": "tech_mcp_post_group",
            "name": "แนะนำการโพสต์ตามกลุ่มอัตโนมัติ",
            "sections": []
          },
          {
            "id": "tech_mcp_buff",
            "name": "แนะนำการบัพเพจ",
            "sections": []
          },
          {
            "id": "tech_mcp_spam",
            "name": "แนะนำการสแปม",
            "sections": []
          }
        ]
      }
    ]
  },
  {
    "id": "maxsystemcare_suite",
    "name": "MaxSystemCare",
    "categories": [
      {
        "id": "maxcare_____maxsyste_6o5de",
        "name": "และ MaxSystemCare แตกต่างกันยังไง ?",
        "sections": [
          {
            "title": "Maxcare v4.0 จะเป็นการรันผ่าน Chrome Browser ส่วน MaxSystemCare จะรันผ่าน LDplayer Android Emulatorซึ่งจะเป็นตัวโปรแกรมเสริม ใช้ควบคู่กับ Maxcare ซึ่งหลังจากวอมบัญชีจาก Maxcare แล้วนำมาวอมต่อที่ MaxSystemCare หากบัญชีที่วอมรอด จะทำให้บัญชีนั้นแข็งแรงขึ้นมาก ซึ่งฟังก์ชั่นการใช้งานนั้นก็จะคล้ายกันกับ Maxcare",
            "content": "Maxcare v4.0 จะเป็นการรันผ่าน Chrome Browser ส่วน MaxSystemCare จะรันผ่าน LDplayer Android Emulatorซึ่งจะเป็นตัวโปรแกรมเสริม ใช้ควบคู่กับ Maxcare ซึ่งหลังจากวอมบัญชีจาก Maxcare แล้วนำมาวอมต่อที่ MaxSystemCare หากบัญชีที่วอมรอด จะทำให้บัญชีนั้นแข็งแรงขึ้นมาก ซึ่งฟังก์ชั่นการใช้งานนั้นก็จะคล้ายกันกับ Maxcare\n\n![image](/images/image777.png)\n\nตัวอย่างการทำงานของ Maxcare\n\n![image](/images/image279.png)\n\nตัวอย่างการทำงานของ MaxSystemCare\n\n",
            "type": "markdown",
            "images": [
              "image777.png",
              "image279.png"
            ]
          }
        ],
        "originalProgramName": "Maxcare"
      },
      {
        "id": "_____________________ibx2z",
        "name": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxSystemCare",
        "sections": [
          {
            "title": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่Windows Security>>Virus & Threat protection>>Virus & Threat protection settingsจากนั้นกดManage settingsจากนั้นปิดReal-time protectionเป็นOff",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่Windows Security>>Virus & Threat protection>>Virus & Threat protection settingsจากนั้นกดManage settingsจากนั้นปิดReal-time protectionเป็นOff\n\nVirus & Threat protection\n\n![image](/images/image775.jpg)\n\nVirus & Threat protection settingsจากนั้นกดManage settings\n\n![image](/images/image245.jpg)\n\nReal-time protectionเป็นOff\n\n![image](/images/image228.jpg)\n\nหลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย\n\n1.ให้มาหน้าการจัดการซอร์ฟแวร์จากนั้นให้คลิกขวาที่คำว่าดาวน์โหลดและกดคัดลอกที่อยู่ลิงก์ไปวางในแท็บใหม่\n\n![image](/images/image226.jpg)\n\n2.จากนั้นให้เปิดแท็บใหม่ รอให้โปรแกรมดาวน์โหลดเสร็จสิ้น\n\n![image](/images/image459.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image775.jpg",
              "image245.jpg",
              "image228.jpg",
              "image226.jpg",
              "image459.jpg"
            ]
          },
          {
            "title": "3.ไปที่ดาวน์โหลด หรือCtrl + Jแล้วไปที่เก็บเอาไว้ไม่ว่าอย่างไรก็ตาม+เก็บไฟล์อันตรายไว้",
            "content": "3.ไปที่ดาวน์โหลด หรือCtrl + Jแล้วไปที่เก็บเอาไว้ไม่ว่าอย่างไรก็ตาม+เก็บไฟล์อันตรายไว้\n\n![image](/images/image350.jpg)\n\n4.ไปที่โฟลเดอร์ที่ดาวน์โหลด\n\n![image](/images/image710.jpg)\n\n5.หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์MaxSystemCarePro.zipที่โหลดมา จากนั้นสามารถเลือกได้ว่าจะแตกไฟล์แบบไหน\n\n![image](/images/image669.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image350.jpg",
              "image710.jpg",
              "image669.jpg"
            ]
          },
          {
            "title": "6.เปิดโฟลเดอร์MaxSystemCarePro",
            "content": "6.เปิดโฟลเดอร์MaxSystemCarePro\n\n![image](/images/image185.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image185.jpg"
            ]
          },
          {
            "title": "7.เปิดAutoUpdate.exeหากมีเวอร์ชันใหม่ให้ทำการUpdate",
            "content": "7.เปิดAutoUpdate.exeหากมีเวอร์ชันใหม่ให้ทำการUpdate\n\n![image](/images/image667.png)\n\n8.เมื่อทำการUpdateเสร็จแล้วจะมีโปรแกรมเวอร์ชันล่าสุดปรากฏขึ้นมา ทำการเปิดโปรแกรมเพื่อใช้งาน\n\n![image](/images/image91.png)\n\n9.ทำการเข้าสู่ระบบให้เรียบร้อย\n\n![image](/images/image795.png)\n\n",
            "type": "markdown",
            "images": [
              "image667.png",
              "image91.png",
              "image795.png"
            ]
          },
          {
            "title": "10.ไปที่General configs",
            "content": "10.ไปที่General configs\n\n![image](/images/image137.jpg)\n\nกรณีใช้โปรแกรม Maxcare หากไม่ได้ใช้ข้ามไปขั้นตอนที่ 11-12 ได้เลย\n\n",
            "type": "markdown",
            "images": [
              "image137.jpg"
            ]
          },
          {
            "title": "11Copy PathของMaxcareที่โฟลเดอร์Maxcare",
            "content": "11Copy PathของMaxcareที่โฟลเดอร์Maxcare\n\n![image](/images/image410.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image410.jpg"
            ]
          },
          {
            "title": "12.นำPathโฟลเดอร์Maxcareมาวางที่Path to Maxcare",
            "content": "12.นำPathโฟลเดอร์Maxcareมาวางที่Path to Maxcare\n\n![image](/images/image36.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image36.jpg"
            ]
          },
          {
            "title": "13.คลิกที่Download LDplayerเพื่อดาวน์โหลดLDplayer",
            "content": "13.คลิกที่Download LDplayerเพื่อดาวน์โหลดLDplayer\n\n![image](/images/image270.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image270.jpg"
            ]
          },
          {
            "title": "14.หลังจากดาวน์โหลดLDplayerเสร็จแล้ว ให้ทำการแตกไฟล์ldplayer",
            "content": "14.หลังจากดาวน์โหลดLDplayerเสร็จแล้ว ให้ทำการแตกไฟล์ldplayer\n\n![image](/images/image679.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image679.jpg"
            ]
          },
          {
            "title": "15.จากนั้นทำการคัดลอกPath LDplayer",
            "content": "15.จากนั้นทำการคัดลอกPath LDplayer\n\n![image](/images/image35.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image35.jpg"
            ]
          },
          {
            "title": "16.นำมาวางในช่องPath to LDPlayer",
            "content": "16.นำมาวางในช่องPath to LDPlayer\n\n![image](/images/image492.jpg)\n\n",
            "type": "markdown",
            "images": [
              "image492.jpg"
            ]
          },
          {
            "title": "17.คลิกปุ่ม ลง ในช่องLDplayer configs",
            "content": "17.คลิกปุ่ม ลง ในช่องLDplayer configs\n\n![image](/images/image562.jpg)\n\n18.ไปที่RAMแล้วเลือก1024Mแล้วกดSaveเป็นอันเสร็จสิ้น\n\n![image](/images/image695.jpg)\n\nขอบคุณที่ใช้บริการและเชื่อใจ Minsoft Thailand\n\n",
            "type": "markdown",
            "images": [
              "image562.jpg",
              "image695.jpg"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "2___________ldplayer_ak2sb",
        "name": "2.ดาวน์โหลด LDplayer ที่ถูกตั้งค่าเข้ากับ MaxSystemCare",
        "sections": [
          {
            "title": "ต้องใช้โปรแกรม LDplayer ที่ถูกตั้งค่าเข้ากับ MaxSystemCare นี้เท่านั้น โดยสามารถดาวน์โหลดได้ผ่านที่นี่:",
            "content": "ต้องใช้โปรแกรม LDplayer ที่ถูกตั้งค่าเข้ากับ MaxSystemCare นี้เท่านั้น โดยสามารถดาวน์โหลดได้ผ่านที่นี่:\n\nหลังจากดาวน์โหลดเสร็จแล้วให้แตกไฟล์เป็นโฟลเดอร์ ไปไว้ตามที่ต้องการ\n\n![image](/images/image52.png)\n\n![image](/images/image699.png)\n\nหลังจากแตกไฟล์เสร็จให้คัดลอกpath folderมาใส่ในโปรแกรมMaxSystemCareโดยไปที่General configsและวางpath folderที่LDplayer configsดังตัวอย่างข้างบน เป็นอันเสร็จสิ้น\n\n",
            "type": "markdown",
            "images": [
              "image52.png",
              "image699.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "4____________________sm9qo",
        "name": "4. อธิบายเมนูฟังก์ชั่นการทำงาน interactive (MaxSystemCare)",
        "sections": [
          {
            "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
            "content": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น\n\ninterraction\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. Read notification(อ่านการแจ้งเตือน)",
            "content": "1. Read notification(อ่านการแจ้งเตือน)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image354.png)\n\nCount:จำนวนการแจ้งเตือนที่ต้องการอ่าน\n\nBreak :ระยะเวลาดีเลย์ในการอ่านการแจ้งเตือน\n\n",
            "type": "markdown",
            "images": [
              "image354.png"
            ]
          },
          {
            "title": "2. Interact Newsfeed(โต้ตอบฟีดข่าว)",
            "content": "2. Interact Newsfeed(โต้ตอบฟีดข่าว)\n\n![image](/images/image186.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์ที่เข้าไปมีส่วนร่วม\n\nLimit interacting time: หยุดดตามระยะเวลาที่ใช้\n\nCount:กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปทำงาน\n\nView post (s):กำหนดระยะเวลาในการ \"หยุดดู\" ต่อ 1 โพสต์\n\nการโต้ตอบและความรู้สึก\n\nProbability (%):โอกาสที่จะกดแสดงความรู้สึก (เช่น ตั้ง 50% ระบบจะสุ่มกดบ้างไม่กดบ้าง)\n\nเลือกประเภทของความรู้สึกที่ต้องการ (Like, Love, Care, Haha, Wow, Sad, Angry) โดยระบบจะสุ่มจากที่คุณเลือกไว\n\nการแชร์โพสต์\n\nProbability (%):โอกาสความน่าจะเป็นในการแชร์\n\nShare content: ข้อความที่จะพิมพ์ประกอบการแชร์ (ใส่ได้หลายประโยคเพื่อให้ระบบสุ่ม)\n\nOptions:เลือกรูปแบบการดึงเนื้อหา\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะมองว่าหลายบรรทัดรวมกัน คือ 1 ข้อความ\n\nคอมเมนต์ด้วยข้อความ (Comment by text)\n\nList Comments:ใส่ข้อความที่ต้องการให้ระบบนำไปคอมเมนต์\n\nOptions:เลือกรูปแบบการดึงเนื้อหา\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines: ระบบจะมองว่าหลายบรรทัดรวมกัน คือ 1 ข้อความ\n\nคอมเมนต์ด้วยรูปภาพ (Comment by image)\n\nImage folder:คลิกปุ่ม [...] เพื่อเลือกโฟลเดอร์ในเครื่องคอมพิวเตอร์ที่เก็บไฟล์ภาพที่ต้องการใช้ส่งคอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image186.png"
            ]
          },
          {
            "title": "3.Interact Friends(โต้ตอบกับเพื่อน)",
            "content": "3.Interact Friends(โต้ตอบกับเพื่อน)\n\n![image](/images/image179.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนเพื่อนที่คุณต้องการเข้าไปมีปฏิสัมพันธ์ด้วย\n\nOptions:เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์ที่เข้าไปมีส่วนร่วม\n\nLimit interacting time: หยุดดตามระยะเวลาที่ใช้\n\nPosts/friend:จำนวนโพสต์ที่จะเข้าไปจัดการต่อเพื่อน 1 คน\n\nการตั้งค่าการรับชมและการแสดงความรู้สึก\n\nView post (s):ระยะเวล ที่จะเปิดค้างไว้ที่โพสต์นั้น ๆ ก่อนเริ่มดำเนินการถัดไป\n\nInteraction:เมื่อติ๊กเลือก จะเป็นการเปิดการใช้งานการกด \"ความรู้สึก\"\n\nProbability (%):โอกาสความน่าจะเป็นที่จะกด (เช่น ตั้งไว้ 100% คือกดทุกครั้ง)\n\nReactions:สามารถเลือกรูปแบบความรู้สึกได้ (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nComment by text (คอมเมนต์ด้วยข้อความ)\n\nProbability (%):โอกาสที่จะทำการคอมเมนต์\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการใช้คอมเมนต์\n\nOptions:ตั้งค่ารูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: 1 ข้อความมีได้หลายบรรทัด\n\nComment by image (คอมเมนต์ด้วยรูปภาพ)\n\nProbability (%): โอกาสที่จะคอมเมนต์ด้วยรูป\n\nImage folder: เลือกโฟลเดอร์ในเครื่องคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nการแชร์โพสต์\n\nShare to wall:ติ๊กเพื่อเปิดใช้งานการแชร์\n\nProbability (%):โอกาสที่จะทำการแชร์\n\nShare content:ข้อความประกอบการแชร์\n\nOptions:ตั้งค่ารูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: 1 ข้อความมีได้หลายบรรทัด\n\n",
            "type": "markdown",
            "images": [
              "image179.png"
            ]
          },
          {
            "title": "4.Interact Group (กลุ่มโต้ตอบ)",
            "content": "4.Interact Group (กลุ่มโต้ตอบ)\n\n![image](/images/image49.png)\n\nการตั้งค่ากลุ่มเป้าหมาย\n\nCount groups:จำนวนกลุ่มที่ต้องการให้ระบบเข้าไปทำงาน\n\nObject options:เลือกว่าจะปฏิสัมพันธ์กับกลุ่มประเภทไหน\n\nInteract joined groups: ระบบจะสุ่มเข้าไปปฏิสัมพันธ์กับกลุ่มที่คุณ เป็นสมาชิกอยู่แล้ว\n\nInteract specified groups: ระบบจะทำงานเฉพาะกับ กลุ่มที่คุณระบุ ID ไว้ในช่องList Id Groupsเท่านั้น\n\nList Id Groups:หากต้องการระบุกลุ่มเฉพาะเจาะจง ให้กดปุ่ม Enter เพื่อใส่ ID ของกลุ่ม\n\nTự động xóa Id nhóm đã tương tác:หากติ๊กถูก ระบบจะลบ ID กลุ่มที่ทำรายการเสร็จแล้วออกจากรายการอัตโนมัติ เพื่อไม่ให้ทำซ้ำ\n\nการตั้งค่าโพสต์และการเข้าชม\n\nOptions:เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: ระบบจะหยุดทำงานเมื่อปฏิสัมพันธ์ครบ \"จำนวนโพสต์\"\n\nLimit interacting time: ระบบจะหยุดทำงานเมื่อ \"ใช้เวลา\" ครบตามที่กำหนด\n\nCount:จำนวนโพสต์ต่อ 1 กลุ่มที่คุณต้องการให้ระบบเข้าไปจัดการ\n\nView post (s):ระยะเวลาที่ใช้ในการ \"หยุดดู\" โพสต์นั้นๆ\n\nการแชร์และการคอมเมนต์\n\nInteraction:ติ๊กถูกเพื่อเปิดใช้งานการกด Like/Reaction\n\nProbability (%): โอกาสที่จะกด (100% คือกดทุกโพสต์)\n\nเลือกสัญลักษณ์ที่ต้องการ (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nShare to wall:ติ๊กถูกหากต้องการแชร์โพสต์นั้นลงหน้าโปรไฟล์ตัวเอง\n\nShare content: ใส่ข้อความที่จะพิมพ์กำกับตอนแชร์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความ\n\nContent has many lines: ข้อความ 1 ชุด มีหลายบรรทัด\n\nComment by text:คอมเมนต์ด้วยข้อความ\n\nProbability (%): โอกาสในการพิมพ์คอมเมนต์\n\nList Comments: ใส่ข้อความที่ต้องการนำไปคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด = 1 ข้อความ\n\nContent has many lines: ข้อความ 1 ชุด มีหลายบรรทัด\n\nComment by image:คอมเมนต์ด้วยรูปภาพ\n\nProbability (%): โอกาสในการส่งคอมเมนต์เป็นรูป\n\nImage folder: กดปุ่ม...เพื่อเลือกโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่จะให้โปรแกรมสุ่มไปใช้\n\n",
            "type": "markdown",
            "images": [
              "image49.png"
            ]
          },
          {
            "title": "5.Interact Page (โต้ตอบเพจ)",
            "content": "5.Interact Page (โต้ตอบเพจ)\n\n![image](/images/image770.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนเพจที่จะเข้าไปปฏิสัมพันธ์\n\nOptions:รูปแบบการหยุดการทำงาน\n\nLimit interacting posts: ระบบจะหยุดเมื่อทำครบ \"จำนวนโพสต์\" ที่กำหนด\n\nLimit interacting time: ระบบจะหยุดเมื่อทำครบ \"จำนวนนาที\" ที่กำหนด\n\nPosts/page:จำนวนโพสต์ต่อ 1 เพจ ที่จะให้เครื่องมือเข้าไปทำงาน\n\nEnter list of page Ids:ช่องสำหรับใส่ ID ของเพจเป้าหมายที่ต้องการให้ระบบเข้าไปทำงาน\n\nพฤติกรรมการรับชม\n\nView post (s):ตั้งค่าเวลาในการ \"ดู\" โพสต์นั้นๆ\n\nการโต้ตอบและการแชร์\n\nInteraction:การแสดงความรู้สึก\n\nProbability (%): โอกาสที่จะกดแสดงความรู้สึก (เช่น 100% คือกดทุกครั้ง)\n\nเลือกประเภทของ Emotion ที่ต้องการ (Like, Love, Haha, Wow, Sad, Angry)\n\nShare to wall:แชร์ลงวอลล์\n\nShare content: ใส่ข้อความที่ต้องการเขียนประกอบการแชร์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line:1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines:ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\nการแสดงความคิดเห็น\n\nComment by text:คอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่ข้อความคอมเมนต์ที่ต้องการ\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line:1 บรรทัด คือ 1 ข้อความ\n\nContent has many lines:ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\nComment by image:คอมเมนต์ด้วยรูปภาพ\n\nImage folder: คลิกปุ่ม...เพื่อเลือกโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่ต้องการใช้คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image770.png"
            ]
          },
          {
            "title": "6. Interact Profiles (โต้ตอบโปรไฟล์)",
            "content": "6. Interact Profiles (โต้ตอบโปรไฟล์)\n\n![image](/images/image263.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting posts: หยุดตามจำนวนโพสต์\n\nLimit interacting time: หยุดตามระยะเวลา\n\nPosts/user:กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปจัดการต่อ 1 บัญชี\n\nObject options:เลือกเป้าหมายที่ต้องการปฏิสัมพันธ์\n\nAccount wall interaction: หน้าวอลล์ทั่วไป\n\nInteract specified profiles: เจาะจงรายชื่อโปรไฟล์\n\nCount: จำนวนบัญชีที่จะให้เข้าถึง\n\nList of User Id: กดปุ่ม Enter เพื่อนำ ID ของบัญชีเป้าหมายมาใส่\n\nการดูและการแสดงความรู้สึก\n\nView post (s):ระยะเวลาในการหยุดดูโพสต์\n\nInteraction:ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nProbability (%): โอกาสสุ่มที่จะกด (100% คือกดทุกครั้ง)\n\nเลือกความรู้สึกที่ต้องการจากสัญลักษณ์ (Like, Love, Haha, Wow, Sad, Angry)\n\nการแชร์และการแสดงความคิดเห็น\n\nShare to wall:การนำโพสต์นั้นไปแชร์ลงบนวอลล์ของตัวเอง\n\nสามารถใส่ข้อความประกอบการแชร์ได้ในช่องว่าง (Share content)\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ระบบจะดึงข้อความทั้งหมดทุกบรรทัดมาโพสต์ในครั้งเดียว\n\nComment by text:การพิมพ์คอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่รายการข้อความที่ต้องการ\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: ระบบจะมองว่า 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ระบบจะดึงข้อความทั้งหมดทุกบรรทัดมาคอมเมนต์ในครั้งเดียว\n\nComment by image:การคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์รูปภาพจากคอมพิวเตอร์เพื่อใช้ในการคอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image263.png"
            ]
          },
          {
            "title": "7. Interact Watch (ดูวิดีโอ)",
            "content": "7. Interact Watch (ดูวิดีโอ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image473.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions (ซ้าย):ตัวเลือกการหยุดการทำงาน\n\nLimit interacting videos: หยุดตามจำนวน \"คลิปวิดีโอ\" ที่จะดู\n\nLimit interacting time: หยุดตาม \"ระยะเวลา\" รวมในการทำงาน\n\nCount:กำหนดจำนวนวิดีโอที่จะดู\n\nOptions (ขวา):รูปแบบการเลือกวิดีโอ\n\nInteract video randomly: ระบบจะสุ่มเลือกวิดีโอที่พบในหน้า Feed\n\nInteract video by keyword: ระบบจะค้นหาวิดีโอเฉพาะที่มีคำค้นหาตรงตามที่คุณระบุ\n\nEnter list of keywords:ช่องสำหรับใส่คำค้นหาที่ต้องการให้ระบบเข้าไปดูวิดีโอ\n\nการตั้งค่าการรับชม\n\nView post (s):ระยะเวลาในการดูวิดีโอต่อหนึ่งโพสต์\n\nการโต้ตอบและการแชร์\n\nInteraction:ติ๊กถูกเพื่อเปิดการ \"กดแสดงความรู้สึก\"\n\nProbability (%): โอกาสที่จะกด (เช่น 100% คือกดทุกคลิป)\n\nReaction Icons: เลือกประเภทของความรู้สึก (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nShare to wall:ติ๊กถูกเพื่อแชร์วิดีโอลงในหน้าโปรไฟล์ของตนเอง\n\nShare content: ใส่ข้อความที่จะเขียนตอนแชร์ (ปล่อยว่างได้)\n\nOptions: เลือกรูปแบบข้อความที่จะเขียนตอนแชร์\n\nContent is only 1 line:1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines:ข้อความทั้งหมดในช่องคือ 1 โพสต์\n\nการคอมเมนต์\n\nComment by text:การคอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่รายการข้อความที่ต้องการคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความที่จะคอมเมนต์\n\nContent is only 1 line:1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines:ข้อความทั้งหมดในช่องคือ 1 คอมเมนต์\n\nComment by image:การคอมเมนต์ด้วยรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพสำหรับใช้คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image473.png"
            ]
          },
          {
            "title": "8. Interact Reels (ดู Reels)",
            "content": "8. Interact Reels (ดู Reels)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image113.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions (ซ้าย):เลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting videos: หยุดตามจำนวน \"คลิปวิดีโอ\" ที่จะเข้าไปดู\n\nLimit interacting time: หยุดตาม \"เวลาทำงานรวม\"\n\nCount:กำหนดจำนวนวิดีโอที่จะดำเนินการ\n\nOptions (ขวา):เลือกวิธีการค้นหาวิดีโอ\n\nInteract video randomly: สุ่มวิดีโอจากหน้าฟีดทั่วไป\n\nInteract video by keyword: ค้นหาวิดีโอเฉพาะเจาะจงตามคำค้นหา\n\nEnter list of keywords:ช่องสำหรับใส่คำค้นหา (Keyword) ที่ต้องการให้ระบบเข้าไปดู\n\nการรับชมและแสดงความรู้สึก\n\nView post (s):กำหนดระยะเวลาในการดูวิดีโอแต่ละคลิป\n\nInteraction:หากติ๊กถูก จะเป็นการเปิดโหมดการกด Like หรือแสดงความรู้สึก\n\nProbability (%): โอกาสความน่าจะเป็นที่จะกด (เช่น 100% คือกดทุกคลิป)\n\nReaction Icons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nการแชร์\n\nShare to wall:หากติ๊กถูก ระบบจะนำวิดีโอนั้นไปแชร์บนหน้าโปรไฟล์ (Wall)\n\nProbability (%): โอกาสที่จะทำการแชร์\n\nShare content: ข้อความที่จะเขียนประกอบการแชร์\n\nOptions: รูปแบบการเลือกข้อความ\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความโพสต์แบบจบในตัว\n\nContent has multiple lines: ระบบจะถือว่า ข้อความทั้งหมดในช่อง คือ 1 โพสต์\n\nการคอมเมนต์\n\nComment by text:คอมเมนต์ด้วยข้อความ\n\nProbability (%): โอกาสที่จะพิมพ์คอมเมนต์\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการ\n\nOptions: รูปแบบการเลือกข้อความ\n\nContent is only 1 line: ระบบจะถือว่า 1 บรรทัด คือ 1 ข้อความคอมเมนต์แบบจบในตัว\n\nContent has multiple lines: ระบบจะถือว่า ข้อความทั้งหมดในช่อง คือ 1 คอมเมนต์\n\nComment by image:คอมเมนต์ด้วยรูปภาพ\n\nProbability (%): โอกาสที่จะคอมเมนต์ด้วยรูป\n\nImage folder: เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image113.png"
            ]
          },
          {
            "title": "9. Interact Story (ดูสตอรี่)",
            "content": "9. Interact Story (ดูสตอรี่)\n\n![image](/images/image84.png)\n\nการตั้งค่าพื้นฐาน\n\nOptions:ตัวเลือกรูปแบบการหยุดการทำงาน\n\nLimit interacting stories: หยุดตาม \"จำนวนสตอรี่\" ที่เข้าชม\n\nLimit interacting time: หยุดตาม \"เวลา\" ที่ใช้ในการทำงาน\n\nCount:กำหนดจำนวนสตอรี่ที่จะให้ระบบเข้าไปดู\n\nView post (s):ระยะเวลาในการเปิดดูแต่ละสตอรี่\n\nการตอบโต้และความรู้สึก\n\nInteraction:เมื่อติ๊กถูก จะเป็นการเปิดโหมด \"กดความรู้สึก\"\n\nProbability (%): โอกาสที่จะเกิดการกดความรู้สึก (0-100%)\n\nIcons: เลือกประเภทความรู้สึกที่ต้องการ (ถูกใจ, รักเลย, ห่วงใย, ฮ่าๆ, ว้าว, เศร้า, โกรธ)\n\nShare to wall:เมื่อติ๊กถูก จะเป็นการแชร์สตอรี่นั้นไปที่หน้าวอลล์ของตนเอง\n\nProbability (%): โอกาสที่จะทำการแชร์\n\nShare content: ช่องสำหรับใส่ข้อความที่จะพิมพ์ไปพร้อมกับการแชร์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 ชุด\n\nการแสดงความคิดเห็น\n\nComment by text:คอมเมนต์ด้วยข้อความ\n\nProbability (%): โอกาสที่จะสุ่มพิมพ์คอมเมนต์\n\nList Comments: ช่องสำหรับใส่รายการข้อความคอมเมนต์\n\nOptions: เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดคือ 1 ข้อความ\n\nContent has many lines: ข้อความทั้งหมดในช่องคือ 1 ชุด\n\nComment by image:คอมเมนต์ด้วยรูปภาพ\n\nProbability (%): โอกาสที่จะส่งคอมเมนต์เป็นรูปภาพ\n\nImage folder: กดปุ่ม...เพื่อเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่ต้องการใช้ส่ง\n\n",
            "type": "markdown",
            "images": [
              "image84.png"
            ]
          },
          {
            "title": "10. Breaks (ตั้งค่าช่วงพัก)",
            "content": "10. Breaks (ตั้งค่าช่วงพัก)\n\n![image](/images/image781.png)\n\nBreak (s):การตั้งค่า \"สุ่มเวลาพัก\" โดยมีหน่วยเป็นวินาที (s)\n\n",
            "type": "markdown",
            "images": [
              "image781.png"
            ]
          },
          {
            "title": "11. Newfeed interaction 2 (โต้ตอบฟีด 2)",
            "content": "11. Newfeed interaction 2 (โต้ตอบฟีด 2)\n\n![image](/images/image104.png)\n\nTotal time :ระยะเวลาที่ดู\n\nLike :จำนวนการกดไลค์\n\nShare Wall :จำนวนที่แชร์ไปยังไทม์ไลน์\n\nComment :จำนวนแสดงความคิดเห็น\n\nList Comments :รายการที่ต้องการความคิดเห็น\n\nadd-friend-join-group\n\n",
            "type": "markdown",
            "images": [
              "image104.png"
            ]
          },
          {
            "title": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
            "content": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)\n\n![image](/images/image727.png)\n\nCount :จำนวนที่ต้องการเพิ่มเพื่อน\n\nBreak :ระยะเวลาดีเลย์ในการเพิ่มเพื่อน\n\nList of keywords :รายการคีย์เวิร์ดที่ต้องการเพิ่มเพื่อน\n\nDelete used content :ลบ Keyword ที่ใช้แล้ว ออกไป\n\nCount :จำนวนเพื่อนที่ต้องการเพิ่มต่อคีย์เวิร์ด\n\n",
            "type": "markdown",
            "images": [
              "image727.png"
            ]
          },
          {
            "title": "2.Add friends by UID (แอดเพื่อนด้วยไอดี)",
            "content": "2.Add friends by UID (แอดเพื่อนด้วยไอดี)\n\n![image](/images/image73.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนเพื่อนที่จะเพิ่มในรอบนี้\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการแอดแต่ละคน\n\nList Uid to add friends:ช่องสำหรับใส่หมายเลข UID ของคนที่คุณต้องการเพิ่มเพื่อน\n\nAuto delete Uid after sent invitation:หากติ๊กถูก ระบบจะลบ UID ออกจากรายการทันทีหลังจากส่งคำขอไปแล้ว เพื่อป้องกันการส่งซ้ำในครั้งถัดไป\n\nการตั้งค่าการปฏิสัมพันธ์\n\nInteract before add friends:ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบทำกิจกรรมก่อนกดแอด\n\nView post (s): ระยะเวลาในการสุ่มดูโพสต์\n\nLike: ติ๊กถูกหากต้องการให้กดถูกใจโพสต์\n\nComment: ติ๊กถูกหากต้องการให้คอมเมนต์ใต้โพสต์\n\nList Comments:ช่องสำหรับใส่ข้อความคอมเมนต์\n\nใส่ 1 ข้อความต่อ 1 บรรทัด\n\nSpin content: สามารถใช้รูปแบบ{a|b|c}เพื่อสุ่มคำพูดได้ เช่น{สวัสดีครับ|ทักทายครับ|ยินดีที่ได้รู้จัก}เพื่อไม่ให้คอมเมนต์ซ้ำซาก\n\n",
            "type": "markdown",
            "images": [
              "image73.png"
            ]
          },
          {
            "title": "3.Add friends by suggestions(เพิ่มเพื่อนตามคำแนะนำ)",
            "content": "3.Add friends by suggestions(เพิ่มเพื่อนตามคำแนะนำ)\n\n![image](/images/image673.png)\n\nCount :จำนวนที่ต้องการเพิ่มเพื่อน\n\nBreak :ระยะเวลาดีเลย์ในการเพิ่มเพื่อน\n\nStop when Facebook warning appears :หยุดเมื่อเห็นคำเตือนเฟสบุ๊ค\n\n",
            "type": "markdown",
            "images": [
              "image673.png"
            ]
          },
          {
            "title": "4.Confirm Friend (ยืนยันเป็นเพื่อน)",
            "content": "4.Confirm Friend (ยืนยันเป็นเพื่อน)\n\n![image](/images/image677.png)\n\nCount :จำนวนที่ต้องการยืนยันเพื่อน\n\nBreak :ระยะเวลาในการยืนยันเพื่อน\n\n",
            "type": "markdown",
            "images": [
              "image677.png"
            ]
          },
          {
            "title": "5.Unfriend (เลิกเป็นเพื่อน)",
            "content": "5.Unfriend (เลิกเป็นเพื่อน)\n\n![image](/images/image80.png)\n\nBreak :ระยะเวลาดีเลย์ในการเลิกเป็นเพื่อน\n\nUnfriend options :ตัวเลือกการเลิกเป็นเพื่อน\n\nRandom friends :สุ่มตามรายการเพื่อน\n\nUnfriend by UID :เลิกเป็นเพื่อนด้วย UID\n\nList of UID to unfriend :ไอดีที่ต้องการเลิกเป็นเพื่อน\n\nList of UID friends to keep :ไอดีเพื่อนที่ต้องการเก็บไว้\n\n",
            "type": "markdown",
            "images": [
              "image80.png"
            ]
          },
          {
            "title": "6. Cancel friend invitation (ยกเลิกคำเชิญเป็นเพื่อน)",
            "content": "6. Cancel friend invitation (ยกเลิกคำเชิญเป็นเพื่อน)\n\n![image](/images/image290.png)\n\nCount:จำนวนที่ต้องการยกเลิก\n\nBreak (s):ระยะเวลาพัก\n\n",
            "type": "markdown",
            "images": [
              "image290.png"
            ]
          },
          {
            "title": "7. Add group members as friends (เพิ่มสมาชิกกลุ่มเป็นเพื่อน)",
            "content": "7. Add group members as friends (เพิ่มสมาชิกกลุ่มเป็นเพื่อน)\n\n![image](/images/image469.png)\n\nCount groups:จำนวนกลุ่มที่จะให้ระบบเข้าไปทำงานในแต่ละรอบ\n\nNumber friends:จำนวนเพื่อนที่จะกดเพิ่มในแต่ละกลุ่ม\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการส่งคำขอแต่ละคน\n\nType group:การเลือกกลุ่ม\n\nRandom group joined:ระบบจะสุ่มเลือกจากกลุ่มที่คุณกดเข้าร่วม (Join) ไว้เรียบร้อยแล้วในบัญชีนั้นๆ\n\nEnter Group:หากเลือกข้อนี้ คุณต้องระบุ ID ของกลุ่มที่ต้องการเจาะจงลงในช่องว่างด้านล่าง\n\nEnter Group ID:ใส่ ID ของกลุ่ม\n\nAuto delete used ID:หากติ๊กถูก ระบบจะลบ ID กลุ่มนั้นออกจากรายการทันทีเมื่อทำงานเสร็จ\n\n",
            "type": "markdown",
            "images": [
              "image469.png"
            ]
          },
          {
            "title": "8. Join groups by keyword (เข้าร่วมกลุ่มตามคีย์เวิร์ด)",
            "content": "8. Join groups by keyword (เข้าร่วมกลุ่มตามคีย์เวิร์ด)\n\n![image](/images/image60.png)\n\nCount :จำนวนกลุ่มที่ต้องการเข้าร่วม\n\nBreak :ระยะเวลาดีเลย์ในการเข้ากลุ่ม\n\nList of keywords :รายการคีย์เวิร์ดที่ต้องการเข้าร่วม\n\nAuto answer questions :ตอบคำถามเข้าร่วมกลุ่ม\n\nList of answers :รายการคำตอบ\n\n",
            "type": "markdown",
            "images": [
              "image60.png"
            ]
          },
          {
            "title": "9. Join specified group (เข้าร่วมกลุ่มตามไอดี)",
            "content": "9. Join specified group (เข้าร่วมกลุ่มตามไอดี)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image114.png)\n\nCount :จำนวนกลุ่มที่ต้องการเข้าร่วม\n\nBreak :ระยะเวลาดีเลย์ในการเข้ากลุ่ม\n\nList of Id groups to join :รายการคีย์เวิร์ดที่ต้องการเข้าร่วม\n\nAuto answer questions :ตอบคำถามเข้าร่วมกลุ่ม\n\nList of answers :รายการคำตอบ\n\n",
            "type": "markdown",
            "images": [
              "image114.png"
            ]
          },
          {
            "title": "10. Join suggestion group (เข้าร่วมกลุ่มที่แนะนำ)",
            "content": "10. Join suggestion group (เข้าร่วมกลุ่มที่แนะนำ)\n\n![image](/images/image496.png)\n\nCount:กำหนดจำนวนกลุ่มที่จะเข้าร่วมต่อรอบ\n\nBreak (s):กำหนดระยะเวลาการหยุดพักระหว่างการส่งคำขอแต่ละครั้ง\n\nAuto answer questions:การตอบคำถามอัตโนมัติ\n\nList of answers:ใส่คำตอบที่ต้องการในช่องว่างด้านล่าง (1 ข้อต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": [
              "image496.png"
            ]
          },
          {
            "title": "11. Leave group (ออกจากกลุ่ม)",
            "content": "11. Leave group (ออกจากกลุ่ม)\n\n![image](/images/image211.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนกลุ่มที่ต้องการให้ออก\n\nBreak (s):ระยะห่างในการพักการทำงาน ระหว่างการออกจากแต่ละกลุ่ม\n\nตัวเลือกการเลือกกลุ่ม\n\nRandom group list:สุ่มรายชื่อกลุ่มที่มีอยู่แล้วกดออกจากกลุ่มทันที\n\nLeave group with conditions:ออกจากกลุ่มตามเงื่อนไขที่กำหนด (หากเลือกข้อนี้ คุณต้องตั้งค่าเงื่อนไขเพิ่มเติมด้านล่าง)\n\nเงื่อนไขการออกจากกลุ่ม\n\nLeave group moderating posts:ออกจากกลุ่มที่มีการคัดกรองโพสต์ (ต้องรออนุมัติโพสต์)\n\nCount of members is less:ออกจากกลุ่มที่มีจำนวนสมาชิก น้อยกว่า จำนวนที่ระบุไว้ในช่องตัวเลข\n\nGroup name contains keywords:ออกจากกลุ่มที่ชื่อกล�����่มมีคำค้นหา (Keywords) ที่กำหนด\n\nวิธีระบุ:พิมพ์คำที่ต้องการในช่อง \"List of keywords\" โดยพิมพ์ 1 คำ ต่อ 1 บรรทัด\n\nList of ID groups to keep: รายการยกเว้น\n\n",
            "type": "markdown",
            "images": [
              "image211.png"
            ]
          },
          {
            "title": "ช่องขนาดใหญ่ทางด้านขวามือมีไว้สำหรับ \"กลุ่มที่ไม่ต้องการให้ออก\":",
            "content": "ช่องขนาดใหญ่ทางด้านขวามือมีไว้สำหรับ \"กลุ่มที่ไม่ต้องการให้ออก\":\n\nหากคุณมีกลุ่มสำคัญที่ไม่ต้องการให้ระบบกดออกเด็ดขาด ให้นำ ID ของกลุ่ม มาใส่ในช่องนี้\n\nวิธีระบุ:พิมพ์ 1 ID ต่อ 1 บรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "12. Create group (สร้างกลุ่ม)",
            "content": "12. Create group (สร้างกลุ่ม)\n\n![image](/images/image797.png)\n\nCount:การกำหนดจำนวนกลุ่มที่ต้องการสร้าง\n\nGroup name:การตั้งชื่อกลุ่ม\n\npost-share-spam\n\n",
            "type": "markdown",
            "images": [
              "image797.png"
            ]
          },
          {
            "title": "1.Post Wall (โพสต์ไทม์ไลน์)",
            "content": "1.Post Wall (โพสต์ไทม์ไลน์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image612.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนครั้งที่จะโพสต์\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการโพสต์แต่ละครั้ง\n\nการตั้งค่าเนื้อหาข้อความ\n\nText:ติ๊กถูกเพื่อเปิดใช้งานการโพสต์ข้อความ\n\nOptions:เลือกรูปแบบเนื้อหา\n\nCustom content: พิมพ์ข้อความลงไปในช่อง List of contents เองโดยตรง\n\nContent created by AI: ให้ระบบ AI ช่วยสร้างเนื้อหาให้โดยอัตโนมัติ\n\nContent from file: เลือกดึงข้อความมาจากไฟล์ภายนอกที่เตรียมไว้\n\nList of contents:พื้นที่สำหรับใส่ข้อความที่ต้องการโพสต์\n\nAuto delete used content:ลบเนื้อหาทิ้งทันทีเมื่อโพสต์เสร็จ (ป้องกันการโพสต์ซ้ำ)\n\nOptions:เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัด คือ 1 เนื้อหา\n\nContent has many lines: 1 เนื้อหา มีได้หลายบรรทัด\n\nUse Background:ติ๊กเพื่อใช้พื้นหลังสี (คล้ายฟีเจอร์พื้นหลังสีของ Facebook)\n\nEdit post:หากติ๊กจะเป็นการแก้ไขโพสต์ที่มีอยู่แทนการสร้างใหม่\n\nการตั้งค่ารูปภาพ\n\nImage:ติ๊กถูกเพื่อเปิดใช้งานการโพสต์รูปภาพ\n\nImage folder:เลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nCount:จำนวนรูปภาพที่ต้องการให้ดึงออกมาโพสต์ในแต่ละครั้ง\n\nDelete used images:ลบรูปภาพออกจากโฟลเดอร์ทันทีหลังจากโพสต์สำเร็จ\n\nการแท็กเพื่อนและลิงก์\n\nTag friends:ติ๊กถูกเพื่อแท็กเพื่อนในโพสต์ พร้อมกำหนดจำนวน Count ว่าจะแท็กกี่คน\n\nExport posted article link:ติ๊กเพื่อให้โปรแกรมบันทึก (Extract) ลิงก์ของโพสต์ที่ทำสำเร็จแล้วออกมาไว้ใช้งานต่อ\n\nการใส่เพลง\n\nMusic:ติ๊กถูกเพื่อเพิ่มเพลงเข้าไปในโพสต์\n\nRandom song:ให้ระบบสุ่มเลือกเพลงให้เอง\n\nSpecified song:เลือกเพลงที่กำหนดเองจากเพลย์ลิสต์ (Playlist)\n\nการตั้งค่าเพิ่มเติม\n\nInteract with post after publish:ติ๊กเพื่อให้ระบบมีปฏิสัมพันธ์กับโพสต์ตัวเองทันที (เช่น กดไลก์ หรือคอมเมนต์ตัวเอง) สามารถกด Settings เพื่อตั้งค่ารายละเอียดได้\n\nUse page profile:ติ๊กหากต้องการโพสต์ในนามของ \"เพจ\" แทนที่จะเป็น \"โปรไฟล์ส่วนตัว\"\n\n",
            "type": "markdown",
            "images": [
              "image612.png"
            ]
          },
          {
            "title": "2.Post Groups (โพสต์กลุ่ม)",
            "content": "2.Post Groups (โพสต์กลุ่ม)\n\n![image](/images/image500.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนกลุ่มที่ต้องการให้โพสต์ในรอบนั้น ๆ\n\nBreak (s):เวลาพักระหว่างการโพสต์แต่ละกลุ่ม\n\nการตั้งค่าเนื้อหาการโพสต์\n\nText:ส่วนข้อความ\n\nList of contents: ช่องสำหรับใส่ข้อความที่จะโพสต์ (รองรับการทำ Spin Content เช่น{สวัสดี|ทักทาย|ฮัลโหล}เพื่อสุ่มข้อความ)\n\nCreate content with AI: ใช้ระบบ AI ช่วยเขียนเนื้อหา\n\nUse Background: โพสต์ข้อความแบบมีพื้นหลังสี ๆ (แบบ Facebook Status)\n\nAuto delete used content: ลบเนื้อหาที่ใช้แล้วอัตโนมัติหลังจากโพสต์เสร็จ\n\nImage:ส่วนรูปภาพ\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nCount: จำนวนรูปภาพที่จะใช้ต่อหนึ่งโพสต์\n\nDelete used image: ลบรูปภาพทิ้งเมื่อโพสต์เสร็จแล้ว\n\nType group:ส่วนการเลือกกลุ่มเป้าหมาย\n\nRandom group joined: โพสต์สุ่มในกลุ่มที่เป็นสมาชิกอยู่แล้ว\n\nPost only uncensored groups: โพสต์เฉพาะกลุ่มที่ไม่ต้องรออนุมัติจากแอดมิน\n\nPriority posting groups with many members: เน้นโพสต์กลุ่มที่มีสมาชิกจำนวนมากก่อน\n\nDon't post same group with another account: ป้องกันไม่ให้บัญชีอื่นในระบบไปโพสต์ซ้ำในกลุ่มเดียวกัน\n\nOnly post groups in the list: เลือกโพสต์เฉพาะกลุ่มที่ระบุไว้ในรายชื่อเท่านั้น\n\nEnter Group: ระบุกลุ่มเองตาม ID\n\nEnter Group ID: ใส่เลข ID ของกลุ่มที่ต้องการโพสต์โดยตรง\n\nDelete posted group: เมื่อโพสต์ในกลุ่มที่ระบุไอดีเสร็จแล้ว ให้ลบไอดีนั้นออกจากรายการทันที เพื่อไม่ให้โพสต์ซ้ำในรอบถัดไป\n\nAuto join group: หากยังไม่ได้เป็นสมาชิก โปรแกรมจะกดเข้ากลุ่มให้โดยอัตโนมัติ\n\nAnswers: ตั้งค่าคำตอบอัตโนมัติกรณีกลุ่มมีคำถามก่อนเข้า\n\nCreate new group: สร้างกลุ่มใหม่\n\nใช้สำหรับสั่งให้บัญชีทำการสร้างกลุ่มใหม่ขึ้นมาเอง โดยใส่ชื่อกลุ่มที่ต้องการในช่อง Group names\n\nฟีเจอร์เพิ่มเติม\n\nInteract with post after publish:ตั้งค่าให้บัญชีเข้าไปกดไลก์หรือคอมเมนต์โพสต์ตัวเองหลังจากโพสต์เสร็จเพื่อดันโพสต์\n\nExport posted article link:ส่งออกลิงก์ที่โพสต์สำเร็จแล้วเก็บไว้เป็นรายงาน\n\nUse page profile:ใช้ในนาม \"เพจ\" เพื่อทำการโพสต์แทนบัญชีส่วนตัว\n\n",
            "type": "markdown",
            "images": [
              "image500.png"
            ]
          },
          {
            "title": "3. Post Reels (โพสต์รีล)",
            "content": "3. Post Reels (โพสต์รีล)\n\n![image](/images/image382.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวน Reels ที่ต้องการโพสต์\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการโพสต์แต่ละคลิป\n\nVideo folder:กดเพื่อเลือกโฟลเดอร์ในคอมพิวเตอร์ที่เก็บไฟล์วิดีโอ Reels ไว้\n\nDelete used video:หากติ๊กเลือก โปรแกรมจะลบไฟล์วิดีโอออกจากโฟลเดอร์ทันทีหลังจากโพสต์เสร็จ\n\nการตั้งค่าเนื้อหาและคำบรรยาย\n\nDescription:ติ๊กถูกเพื่อเปิดใช้งานการใส่คำบรรยาย\n\nList of contents:ช่องสำหรับใส่ข้อความบรรยาย (Caption)\n\nรองรับระบบ Spin Content เช่น{สวัสดี|ทักทาย|ไฮ}เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\n",
            "type": "markdown",
            "images": [
              "image382.png"
            ]
          },
          {
            "title": "Options(รูปแบบเนื้อหา):",
            "content": "Options(รูปแบบเนื้อหา):\n\nContent is only 1 line: 1 บรรทัดคือ 1 โพสต์\n\nContent has many lines: ข้อความหลายบรรทัดรวมเป็น 1 โพสต์\n\nAuto delete used content:ลบข้อความที่ใช้ไปแล้วออกจากรายการอัตโนมัติ\n\nแฮชแท็ก (Hashtag)\n\nHashtag:ติ๊กถูกเพื่อเปิดใช้งาน\n\nList of Hashtag:ใส่รายการแฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แฮชแท็ก)\n\nCount:กำหนดจำนวนแฮชแท็กที่จะดึงไปใช้ต่อหนึ่งโพสต์\n\nเพลงและเสียงประกอบ (Music)\n\nMusic:ติ๊กถูกเพื่อใส่เพลงประกอบ\n\nRandom song:ให้ระบบสุ่มเพลงให้โดยอัตโนมัติ\n\nSpecified song:เลือกเพลงที่ต้องการจาก Playlist ที่คุณกำหนดไว้เอง\n\nการตั้งค่าเพิ่มเติม\n\nMax wait for video loading:ระยะเวลาสูงสุด ที่จะรอให้วิดีโออัปโหลดเสร็จ หากเกินนี้ระบบจะข้ามหรือลองใหม่\n\nExport posted reels link:ติ๊กถูกหากต้องการให้ระบบส่งออกลิงก์ของ Reels ที่โพสต์สำเร็จแล้วเก็บไว้ในไฟล์\n\nUse page profile:เลือกโพสต์ในนาม \"เพจ\" (Page) แทนที่จะเป็นโปรไฟล์ส่วนตัว\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4. Post Story (โพสต์สตอรี่)",
            "content": "4. Post Story (โพสต์สตอรี่)\n\n![image](/images/image616.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:กำหนดจำนวนสตอรี่ที่ต้องการโพสต์\n\nUse page profile:ติ๊กเลือกหากต้องการโพสต์ในนาม \"เพจ\" แทนเฟซบุ๊กส่วนตัว\n\nText (ข้อความ): ใส่ข้อความที่ช่อง Story content.\n\nรองรับระบบ Spin content รูปแบบ{ข้อความ1|ข้อความ2|ข้อความ3}เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nUse Background:ติ๊กเพื่อให้ระบบใส่พื้นหลังสีๆ ให้กับข้อความ\n\nPost Image (โพสต์รูปภาพ)\n\nMedia folder:เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการโพสต์\n\nDelete used media:ติ๊กเพื่อให้ระบบลบรูปออกจากโฟลเดอร์ทันทีหลังจากโพสต์เสร็จ (กันโพสต์ซ้ำ)\n\nAttach link:ติ๊กหากต้องการใส่ลิงก์ในสตอรี่ และกรอกรายการลิงก์ในช่อง List of links\n\nSong (ใส่เพลง)\n\nRandom song:ให้ระบบสุ่มเพลง\n\nSpecified song:เลือกเพลงที่ต้องการโดยระบุชื่อในช่อง List songs (1 บรรทัดต่อ 1 เพลง)\n\nUse Background / Image:ตั้งค่าพื้นหลังของเพลงว่าจะใช้เป็นสีพื้นหลังปกติ หรือจะใช้รูปภาพจากโฟลเดอร์ (Image folder) มาเป็นฉากหลังประกอบเพลง\n\nDelete used images:หากติ๊กไว้ ระบบจะลบรูปออกจากโฟลเดอร์หลังโพสต์เสร็จ เพื่อป้องกันการโพสต์ซ้ำ\n\nการตั้งค่าระบบและเงื่อนไขเวลา\n\nWait post success:ระยะเวลาหน่วง หลังจากโพสต์เสร็จ 1 ครั้ง ก่อนจะเริ่มทำรายการถัดไป\n\nIf time out, unpublished stories will be counted as:หากเกิดกรณีอินเทอร์เน็ตหลุด หรือโปรแกรมค้างจนหมดเวลา (Timeout) จะให้ระบบสรุปผลว่าอย่างไร?\n\nSuccess: นับว่าสำเร็จไปเลย\n\nFail: นับว่าล้มเหลว\n\n",
            "type": "markdown",
            "images": [
              "image616.png"
            ]
          },
          {
            "title": "5. Share(แชร์)",
            "content": "5. Share(แชร์)\n\n![image](/images/image112.png)\n\nการตั้งค่าพื้นฐาน\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการแชร์แต่ละครั้ง\n\nLink to share:ช่องสำหรับใส่ลิงก์ (URL) ที่ต้องการนำไปแชร์\n\nType link:เลือกประเภทของลิงก์ว่าเป็น Livestream (ไลฟ์สด), Post (โพสต์ทั่วไป), หรือ Reel (คลิปสั้น)\n\nการตั้งค่าเนื้อหาการแชร์\n\nShare content:ติ๊กถูกหากต้องการใส่ข้อความประกอบ\n\nList of contents:ช่องใส่ข้อความ\n\nOptions:เลือกรูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัดคือ 1 คอนเทนต์\n\nContent has many lines: 1 คอนเทนต์สามารถมีได้หลายบรรทัด\n\nAuto Delete used content:ลบเนื้อหาที่ใช้แล้วทิ้งอัตโนมัติเพื่อไม่ให้โพสต์ซ้ำเดิม\n\nการตั้งค่าการปฏิสัมพันธ์ก่อนแชร์ (Interact before share)\n\nView post (s):ตั้งเวลาดูโพสต์ก่อนจะกดแชร์\n\nExpress feelings:เลือกกดแสดงความรู้สึก (Like, Love, Wow ฯลฯ) ก่อนแชร์\n\nAuto comment:ติ๊กเพื่อคอมเมนต์โพสต์ก่อนแชร์\n\nList Comments: ใส่รายการข้อความคอมเมนต์\n\nComment many times: ตั้งค่าให้คอมเมนต์หลายครั้งพร้อมระบุช่วงเวลาพัก (Break)\n\nการตั้งค่าตัวเลือกการแชร์ (Share options)\n\nShare post to wall:แชร์ไปยังหน้าโปรไฟล์ส่วนตัว (Timeline)\n\nShare post to group:แชร์ไปยังกลุ่มต่าง ๆ\n\nCount: จำนวนกลุ่มที่ต้องการแชร์\n\n",
            "type": "markdown",
            "images": [
              "image112.png"
            ]
          },
          {
            "title": "Advanced configs (ตั้งค่าขั้นสูง):",
            "content": "Advanced configs (ตั้งค่าขั้นสูง):\n\nOnly share to group uncensored: แชร์เฉพาะกลุ่มที่โพสต์ได้เลยไม่ต้องรออนุมัติ (Uncensored)\n\nPriority sharing groups with many members:เน้นแชร์กลุ่มที่มีสมาชิกจำนวนมาก\n\nDon't share same group with another account: ไม่แชร์ซ้ำกลุ่มเดิมกับบัญชีอื่น\n\nOnly share groups in the list: แชร์เฉพาะกลุ่มที่ระบุไว้ในรายชื่อ (กดปุ่ม Enter เพื่อใส่รายชื่อกลุ่ม)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6. Spam Post (สแปมโพสต์)",
            "content": "6. Spam Post (สแปมโพสต์)\n\n![image](/images/image486.png)\n\nการตั้งค่าพื้นฐาน\n\nIDs/Account:กำหนดจำนวนบัญชีที่จะใช้ทำงาน\n\nCount posts/ID:จำนวนโพสต์ที่ต้องการโต้ตอบต่อ 1 บัญชี\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการทำงาน\n\nObject type:เลือกประเภทเป้าหมายที่จะเข้าไปทำงาน เช่น Profile, Group, Page\n\nการจัดการเป้าหมาย\n\nEnter ID User/Group/Page:ช่องสำหรับกรอก ID ของเป้าหมายที่ต้องการให้ระบบเข้าไปทำงาน\n\nAuto delete used ID:หากติ๊กถูก ระบบจะลบ ID ที่ทำงานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\nOnly interact with groups that have joined:(หากเลือกObject type เป็น Group จะมีการตั้งค่านี้ขึ้นมา)บอทจะเข้าทำงานเฉพาะในกลุ่มที่บัญชีนั้นเป็นสมาชิกอยู่แล้วเท่านั้น\n\nการตั้งค่าการโต้ตอบ\n\nExpress feelings:ติ๊กเพื่อเลือกกด \"ความรู้สึก\" (Reaction) โดยมีไอคอนให้เลือก เช่น ไลค์, หัวใจ, หัวเราะ, เศร้า หรือโกรธ\n\nShare wall:ติ๊กหากต้องการแชร์โพสต์นั้นไปที่หน้าวอลล์ของตนเอง\n\nComment by text:ติ๊กหากต้องการคอมเมนต์ด้วยข้อความ\n\nList Comments: ช่องสำหรับพิมพ์ข้อความคอมเมนต์\n\nSpin content {a|b|c}: รูปแบบการสุ่มคำเพื่อให้ข้อความไม่ซ้ำกัน\n\nOptions: เลือกระหว่าง \"ข้อความบรรทัดเดียว\" หรือ \"ข้อความหลายบรรทัด\"\n\nRandom icon:ปุ่มสำหรับสุ่มใส่อีโมจิในคอมเมนต์\n\nการจัดการรูปภาพ\n\nComment by image:ติ๊กหากต้องการคอมเมนต์ด้วยรูปภาพ\n\nImage folder:ช่องสำหรับระบุที่อยู่ไฟล์ (Path) ของโฟลเดอร์รูปภาพในคอมพิวเตอร์\n\nDelete used images:ติ๊กเพื่อให้ระบบลบรูปภาพที่ใช้ไปแล้วทิ้ง\n\n",
            "type": "markdown",
            "images": [
              "image486.png"
            ]
          },
          {
            "title": "7. Spam Newfeed(สแปมฟีดข่าว)",
            "content": "7. Spam Newfeed(สแปมฟีดข่าว)\n\n![image](/images/image204.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:กำหนดจำนวนครั้งหรือจำนวนโพสต์ที่จะให้โปรแกรมทำรายการ\n\nBreak (s):ระยะเวลาพักระหว่างการทำงานในแต่ละโพสต์\n\nการแสดงความรู้สึก\n\nExpress feelings: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nไอคอนความรู้สึก: เมื่อเปิดใช้งาน คุณสามารถเลือกติ๊กถูกหน้ารูปไอคอนที่ต้องการให้สุ่มกดได้ ได้แก่ ไลก์ (Like), หัวใจ (Love), ห่วงใย (Care), ขำ (Haha), ว้าว (Wow), เศร้า (Sad) และ โกรธ (Angry)\n\nการคอมเมนต์ด้วยข้อความ\n\nComment by text:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยข้อความ\n\nList Comments:กล่องสำหรับใส่ข้อความคอมเมนต์\n\nคำแนะนำ:รองรับการใช้รูปแบบ(Spin content {a|b|c})เพื่อสุ่มสลับข้อความ และรองรับการสุ่มไอคอนอีโมจิ (Random icon)\n\n",
            "type": "markdown",
            "images": [
              "image204.png"
            ]
          },
          {
            "title": "Options (ตัวเลือกรูปแบบข้อความ):",
            "content": "Options (ตัวเลือกรูปแบบข้อความ):\n\nContent is only 1 line: เลือกเมื่อข้อความ 1 คอมเมนต์ของคุณมีความยาวเพียง 1 บรรทัด (Enter = ขึ้นคอมเมนต์ใหม่)\n\nContent has many lines: เลือกเมื่อ 1 คอมเมนต์ของคุณมีความยาวหลายบรรทัด\n\nการคอมเมนต์ด้วยรูปภาพ\n\nComment by image:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูปภาพ\n\nImage folder:ช่องสำหรับระบุเส้นทาง (Path) ของโฟลเดอร์ที่เก็บรูปภาพไว้\n\nDelete used images:ติ๊กถูกหากต้องการให้ระบบลบรูปภาพนั้นๆ ออกจากโฟลเดอร์ทันทีหลังจากที่ถูกนำไปใช้คอมเมนต์แล้ว\n\nการปฏิสัมพันธ์เพิ่มเติม\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Click See more (คลิก \"ดูเพิ่มเติม\"):",
            "content": "Click See more (คลิก \"ดูเพิ่มเติม\"):\n\nติ๊กถูกเพื่อให้โปรแกรมกดอ่านข้อความโพสต์แบบเต็ม\n\nBreak (s): ระยะเวลาหน่วงหลังจากการคลิก\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Click Photo (คลิกรูปภาพ):",
            "content": "Click Photo (คลิกรูปภาพ):\n\nติ๊กถูกเพื่อให้โปรแกรมคลิกเข้าไปดูรูปภาพในโพสต์\n\nBreak (s): ระยะเวลาหน่วงหลังจากการคลิกดูรูป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "8. Spam Friends (สแปมเพื่อน)",
            "content": "8. Spam Friends (สแปมเพื่อน)\n\n![image](/images/image90.png)\n\nการตั้งค่าพื้นฐาน\n\nQuantity:จำนวนเพื่อนที่ต้องการให้ระบบเข้าไปปฏิสัมพันธ์ด้วย\n\nPosts/Friend:จำนวนโพสต์ต่อเพื่อน 1 คน ที่ต้องการเข้าไปปฏิสัมพันธ์\n\nBreak (s):ระยะเวลาพักเบรกระหว่างการทำงานแต่ละครั้งในหน่วยวินาที\n\nการแสดงความรู้สึก\n\nExpress feelings: ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nตัวเลือกไอคอน: หากเปิดใช้งาน สามารถเลือกรีแอคชันที่ต้องการสุ่มกดได้\n\nการคอมเมนต์ด้วยข้อความ\n\nComment by text:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยข้อความ\n\nList Comments:กล่องสำหรับใส่รายการข้อความที่ต้องการใช้คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image90.png"
            ]
          },
          {
            "title": "การตั้งค่าเพิ่มเติมในกล่องข้อความ:",
            "content": "การตั้งค่าเพิ่มเติมในกล่องข้อความ:\n\n(Spin content {a|b|c}):ระบบรองรับการทำ Spintax หรือการสุ่มคำสั่งข้อความเพื่อไม่ให้คอมเมนต์ซ้ำซาก (เช่น พิมพ์ว่า{สวัสดี|ดีจ้า|ทักทาย})\n\nRandom icon:ฟังก์ชันเสริมสำหรับสุ่มใส่อีโมจิลงไปในข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Options (ตัวเลือกการอ่านบรรทัด):",
            "content": "Options (ตัวเลือกการอ่านบรรทัด):\n\nContent is only 1 line:กำหนดให้ระบบนับว่า 1 บรรทัด คือ 1 คอมเมนต์\n\nContent has many lines:กำหนดให้ระบบอนุญาตให้ 1 คอมเมนต์สามารถมีหลายบรรทัดได้ (มีไอคอน?สำหรับดูคำอธิบายเพิ่มเติม)\n\nคอมเมนต์ด้วยรูปภาพ\n\nComment by image:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูปภาพ\n\nImage folder:ช่องสำหรับระบุตำแหน่ง (Path) ของโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพที่คุณต้องการให้ระบบดึงไปใช้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9. Spam Groups (สแปมกลุ่ม)",
            "content": "9. Spam Groups (สแปมกลุ่ม)\n\n![image](/images/image749.png)\n\nการตั้งค่าพื้นฐาน\n\nCount groups:จำนวนกลุ่มที่ต้องการเข้าถึง\n\nPosts/group:จำนวนโพสต์ที่จะดำเนินการต่อหนึ่งกลุ่ม\n\nBreak (s):เวลาพักระหว่างการทำงานในแต่ละจุด\n\nการแสดงความรู้สึก (Express feelings)\n\nเปิดใช้งานการกด Reaction\n\nไอคอน: สามารถเลือกประเภทความรู้สึกได้ เช่น Like (ถูกใจ), Love (รักเลย), Haha (ขำกลิ้ง), Wow (ว้าว), Sad (เศร้า) หรือ Angry (โกรธ)\n\nการแสดงความคิดเห็นด้วยข้อความ (Comment by text)\n\nเปิดใช้งานการคอมเมนต์เป็นตัวอักษร\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nSpin content:รองรับการใช้รูปแบบ{a|b|c}เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nOptions:การเลือกรูปแบบข้อความ\n\nContent is only 1 line:ข้อความบรรทัดเดียว\n\nContent has many lines:ข้อความแบบหลายบรรทัด\n\nการแสดงความคิดเห็นด้วยรูปภาพ (Comment by image)\n\nเปิดใช้งานการคอมเมนต์ด้วยภาพ\n\nImage folder:เลือกโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\nDelete used images:หากติ๊กช่องนี้ ระบบจะลบรูปภาพที่ถูกใช้งานไปแล้วออกจากโฟลเดอร์ทันที\n\nการตั้งค่าการคลิกเพิ่มเติม (Interaction Settings)\n\nClick See more:เปิดใช้งานการกด \"ดูเพิ่มเติม\" เพื่อให้การทำงานดูเหมือนพฤติกรรมมนุษย์ พร้อมตั้งเวลาพัก (Break)\n\nClick Photo:เปิดใช้งานการกดคลิกที่รูปภาพในโพสต์ พร้อมตั้งเวลาพัก (Break)\n\n",
            "type": "markdown",
            "images": [
              "image749.png"
            ]
          },
          {
            "title": "10. Run Earn Money",
            "content": "10. Run Earn Money\n\n![image](/images/image761.png)\n\nการตั้งค่าพื้นฐาน\n\nApi Key:ช่องสำหรับใส่รหัส API จากเว็บไซต์traodoituongtac.comเพื่อใช้เชื่อมต่อกับระบบ\n\nCheck:ใช้สำหรับตรวจสอบว่า Api Key ที่ใส่ไปนั้นถูกต้องและพร้อมใช้งานหรือไม่\n\nการตั้งค่าเวลาและขีดจำกัด\n\nBreak between 2 jobs:ตั้งค่าระยะเวลาหยุดพักระหว่างงาน\n\nTimeout get job:ระยะเวลารอคอยหากระบบหาตัวงานไม่เจอ\n\nCount job success:กำหนดจำนวนงานที่ทำสำเร็จก่อนจะมีการประมวลผลหรือบันทึก\n\nStop when fail continuously:สั่งให้หยุดทำงานทันทีหากมีงานล้มเหลวติดต่อกันกี่ครั้ง เพื่อป้องกันบัญชีมีปัญหา\n\nMax job/account/day:ขีดจำกัดจำนวนงานสูงสุดที่แต่ละบัญชีจะทำได้ต่อวัน\n\nเลือกประเภทงาน (Choose Job Type)\n\nreaction:กดแสดงความรู้สึก (Like, Love, Wow ฯลฯ)\n\ncomment:เขียนความคิดเห็น\n\nlike page:กดถูกใจเพจ\n\nadd friend:กดเพิ่มเพื่อน\n\njoin group:กดเข้าร่วมกลุ่ม\n\nfollow:กดติดตาม\n\nRun cheap jobs:ติ๊กถูกหากต้องการรับงานราคาถูกด้วย\n\nเงื่อนไขและตัวเลือกเสริม\n\nStop job when account is logged out:สั่งให้หยุดงานทันทีหากบัญชีหลุดออกจากระบบ\n\nUse page profile:ใช้โปรไฟล์ในนาม \"เพจ\" แทนการใช้โปรไฟล์ส่วนตัว\n\nSkip blocked accounts:ข้ามบัญชีที่ถูกบล็อกไปโดยอัตโนมัติ\n\nseeding\n\n",
            "type": "markdown",
            "images": [
              "image761.png"
            ]
          },
          {
            "title": "1.Review Page (รีวิวเพจ)",
            "content": "1.Review Page (รีวิวเพจ)\n\n![image](/images/image721.png)\n\nId Page :ไอดีเพจ\n\nLike page :กดไลค์เพจ\n\nReview content :เนื้อหาที่จะรีวิว\n\nOption :ตัวเลือกเนื้อหา\n\nContent is only 1 line : เนื้อหาเพียง 1 บรรทัด\n\nContent has many lines : เนื้อหาหลายบรรทัด\n\nAuto Delete used content :ลบเนื้อหาที่ใช้แล้วออก\n\n",
            "type": "markdown",
            "images": [
              "image721.png"
            ]
          },
          {
            "title": "2.Buff Like Page (กดไลค์เพจ)",
            "content": "2.Buff Like Page (กดไลค์เพจ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image214.png)\n\nBreak :ระยะเวลาดีเลย์ในการไลค์\n\nEnter Page Id :ไอดีเพจ\n\n",
            "type": "markdown",
            "images": [
              "image214.png"
            ]
          },
          {
            "title": "3.Buff Follow UID (กดติดตามด้วยไอดี)",
            "content": "3.Buff Follow UID (กดติดตามด้วยไอดี)\n\n![image](/images/image345.png)\n\nBreak (s):ระยะเวลาพัก\n\nEnter Uid:กรอกรายชื่อ UID\n\n",
            "type": "markdown",
            "images": [
              "image345.png"
            ]
          },
          {
            "title": "4. Interact specified posts (โต้ตอบโพสต์ที่ระบุ)",
            "content": "4. Interact specified posts (โต้ตอบโพสต์ที่ระบุ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image178.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:จำนวนโพสต์ที่จะให้ระบบทำงาน\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการสลับไปทำโพสต์ถัดไป\n\nView post (s):ระยะเวลาที่ให้ระบบ \"เปิดดู\" โพสต์นั้นๆ ค้างไว้ก่อนเริ่มทำกิจกรรมอื่น\n\nการจัดการลิงก์โพสต์\n\nList of post links:ช่องสำหรับกรอก URL หรือลิงก์ของโพสต์ที่ต้องการให้ระบบเข้าไปทำงาน (ใส่ 1 ลิงก์ต่อ 1 บรรทัด)\n\nAuto delete used links:หากติ๊กเลือก ระบบจะลบลิงก์ออกจากรายการทันทีเมื่อทำงานในลิงก์นั้นสำเร็จแล้ว\n\nการแสดงความรู้สึก (Express feelings)\n\nเมื่อติ๊กเลือก คุณสามารถเลือกกดไอคอนแสดงอารมณ์ต่างๆ ได้ (Like, Love, Care, Haha, Wow, Sad, Angry) สามารถเลือกได้มากกว่า 1 อย่างเพื่อให้ระบบสุ่มใช้งาน\n\nการคอมเมนต์ด้วยข้อความ (Comment by text)\n\nList Comments:ช่องสำหรับพิมพ์ข้อความที่ต้องการสุ่มไปคอมเมนต์\n\nOptions:เลือกรูปแบบข้อความ\n\nContent is only 1 line: 1 บรรทัดเท่ากับ 1 ข้อความ\n\nContent has many lines: 1 ข้อความมีหลายบรรทัด\n\nAuto Delete used content:ลบข้อความที่ใช้ไปแล้วออกจากรายการ\n\nการคอมเมนต์ด้วยรูปภาพ (Comment by image)\n\nImage folder:ระบุที่อยู่ (Path) ของโฟลเดอร์รูปภาพในคอมพิวเตอร์ที่ต้องการให้ระบบดึงไปโพสต์\n\nDelete used images:ลบรูปภาพออกจากโฟลเดอร์หลังจากโพสต์เสร็จแล้ว\n\n",
            "type": "markdown",
            "images": [
              "image178.png"
            ]
          },
          {
            "title": "5.Interact Posts by Keyword (โต้ตอบโพสต์ด้วยคีย์เวิร์ด)",
            "content": "5.Interact Posts by Keyword (โต้ตอบโพสต์ด้วยคีย์เวิร์ด)\n\n![image](/images/image556.png)\n\nการตั้งค่าพื้นฐาน\n\nCount:กำหนดจำนวนโพสต์ที่จะให้ระบบเข้าไปปฏิสัมพันธ์\n\nBreak (s):เว้นเวลาระหว่างการกระทำแต่ละครั้ง\n\nรายการคำค้นหา\n\nList of keywords:ใส่คำที่คุณต้องการให้ระบบไปค้นหา\n\nข้อกำหนด: ใส่คีย์เวิร์ด 1 คำต่อ 1 บรรทัด\n\nรองรับระบบ Spin content โดยใช้รูปแบบ{คำที่1|คำที่2|คำที่3}เพื่อสุ่มคีย์เวิร์ดในการค้นหา\n\nExpress feelings (การแสดงความรู้สึก)\n\nติ๊กถูกเพื่อเปิดใช้งาน\n\nเลือกไอคอนความรู้สึกที่ต้องการ (เช่น ถูกใจ, รักเลย, ฮ่าๆ, ว้าว, เศร้า หรือโกรธ)\n\nComment by text (คอมเมนต์ด้วยข้อความ)\n\nList Comments:ใส่ข้อความที่คุณต้องการจะคอมเมนต์\n\nSpin content:รองรับการใช้{a|b|c}เพื่อสุ่มข้อความไม่ให้ซ้ำกัน\n\nOptions:เลือกรูปแบบข้อความ\n\nContent is only 1 line:1 บรรทัดคือ 1 ข้อความคอมเมนต์\n\nContent has many lines:1 ข้อความประกอบด้วยหลายบรรทัด\n\nRandom icon:ระบบสุ่มใส่ไอคอน\n\nComment by image (คอมเมนต์ด้วยรูปภาพ)\n\nImage folder:เลือกที่อยู่ของโฟลเดอร์รูปภาพในคอมพิวเตอร์ของคุณที่ต้องการใช้คอมเมนต์\n\nDelete used images:หากติ๊กถูก ระบบจะลบรูปภาพทิ้งหลังจากที่ใช้งานไปแล้ว เพื่อไม่ให้ใช้รูปซ้ำ\n\n",
            "type": "markdown",
            "images": [
              "image556.png"
            ]
          },
          {
            "title": "6.Interact Video (ตอบโต้วิดีโอ)",
            "content": "6.Interact Video (ตอบโต้วิดีโอ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image526.png)\n\nLink video :ลิงค์วิดีโอ\n\nView post :ระยะเวลาในการดูวิดีโอ\n\nExpress feelings :การแสดงความรู้สึก\n\nAuto comment :แสดงความคิดเห็น\n\nList Comments :รายการความคิดเห็น\n\nComment many times :แสดงความคิดเห็นหลายบรรทัด\n\nBreak :ระยะเวลาดีเลย์ในการแสดงความคิดเห็น\n\n",
            "type": "markdown",
            "images": [
              "image526.png"
            ]
          },
          {
            "title": "7. Interact Reels by Link",
            "content": "7. Interact Reels by Link\n\n![image](/images/image364.png)\n\nLink reel :ลิงก์เรียล\n\nView post :ระยะเวลาในการดู\n\nLike :กดไลค์\n\nShare Wall :แชร์ไปยังไทม์ไลน์\n\nComment :แสดงความคิดเห็น\n\nList Comments :รายการความคิดเห็น\n\nDelete commented content :ลบความคิดเห็นที่ใช้แล้วออก\n\n",
            "type": "markdown",
            "images": [
              "image364.png"
            ]
          },
          {
            "title": "8. Invite Friends like Pages (ชวนเพื่อนกดไลค์เพจ)",
            "content": "8. Invite Friends like Pages (ชวนเพื่อนกดไลค์เพจ)\n\n![image](/images/image150.png)\n\nList of ID pages :รายการไอดีเพื่อนที่ต้องการชวน\n\n",
            "type": "markdown",
            "images": [
              "image150.png"
            ]
          },
          {
            "title": "9. Invite friends join group (ชวนเพื่อนเข้าร่วมกลุ่ม)",
            "content": "9. Invite friends join group (ชวนเพื่อนเข้าร่วมกลุ่ม)\n\n![image](/images/image784.png)\n\nCount :จำนวนเพื่อนที่ต้องการชวน\n\nBreak :ระยะเวลาดีเลย์ในการช่วนเพื่อน\n\nGroup ID :ไอดีกลุ่มที่ต้องการเชิญเพื่อนเข้าร่วม\n\nInvit options :ตัวเลือกการเชิญ\n\nSuggested friedns :เพื่อนที่แนะนำ\n\nNearby friends :เพื่อนใกล้เคียง\n\nฺBoth :เลือกทั้งคู่\n\n",
            "type": "markdown",
            "images": [
              "image784.png"
            ]
          },
          {
            "title": "10.Sync Contact (ซิงค์ผู้ติดต่อ)",
            "content": "10.Sync Contact (ซิงค์ผู้ติดต่อ)\n\n![image](/images/image379.png)\n\nImport list of Phone numbers :นำเข้ารายการหมายเลขโทรศัพท์\n\nCount :จำนวน/อุปกรณ์\n\nAuto delete used phone numbers :ลบหมายเลขโทรศัพท์ที่ใช้แล้วโดยอัตโนมัติ\n\nAdd friends :เพิ่มเพื่อน\n\nCount:จำนวนเพื่อนที่ต้องการเพิ่ม\n\nBreak :ระยะเวลาดีเลย์ในการเพิ่มเพื่อน\n\n",
            "type": "markdown",
            "images": [
              "image379.png"
            ]
          },
          {
            "title": "11.Unlike page (ยกเลิกไลค์เพจ)",
            "content": "11.Unlike page (ยกเลิกไลค์เพจ)\n\n![image](/images/image387.png)\n\nCount :จำนวนเพจ\n\nBreak :ระยะเวลาดีเลย์\n\nchange-info\n\n1.Change password (เปลี่ยนรหัสผ่าน)\n\n![image](/images/image82.png)\n\nOptions new password :ตัวเลือกการนำเข้ารหัสผ่านใหม่\n\nRandom :แบบสุ่ม\n\nEnter password :แบบนำเข้าระหัสผ่าน\n\nEnter :นำเข้า\n\nLogout of old devices :ออกจากระบบอุปกรณ์เก่า\n\n",
            "type": "markdown",
            "images": [
              "image387.png",
              "image82.png"
            ]
          },
          {
            "title": "2.Up avatar (อัพอวาตาร์)",
            "content": "2.Up avatar (อัพอวาตาร์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image438.png)\n\nImage folder :เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images :ลบรูปภาพที่ใช้แล้ว\n\nSkip if already have avatar :ข้าม หากมีอวาต้าอยู่แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image438.png"
            ]
          },
          {
            "title": "3.Up cover (อัพหน้าปก)",
            "content": "3.Up cover (อัพหน้าปก)\n\n![image](/images/image138.png)\n\nImage folder :เพิ่ม Path Folder ของรูปภาพ\n\nDelete used images :ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image138.png"
            ]
          },
          {
            "title": "4.Remove Phone(ลบเบอร์โทรศัพท์)",
            "content": "4.Remove Phone(ลบเบอร์โทรศัพท์)\n\n![image](/images/image45.png)\n\n",
            "type": "markdown",
            "images": [
              "image45.png"
            ]
          },
          {
            "title": "5.On - Off 2FA (เปิด - ปิด 2FA )",
            "content": "5.On - Off 2FA (เปิด - ปิด 2FA )\n\n![image](/images/image642.png)\n\nDisable 2FA :ปิดการใช้งาน 2FA\n\nEnable 2FA :เปิดการใช้งาน 2FA\n\nIf the account already has 2FA :หากบัญชีมี 2FA อยู่แล้ว\n\nDon't enable 2FA :ไม่เปิดใช้งาน 2FA\n\nAdd new 2FA :เพิ่ม 2FA ใหม่\n\nRemove 2FA + Add new 2FA :ลบ 2FA + เพิ่ม 2FA ใหม่\n\nAdd new 2FA + Delete old 2FA :เพิ่ม 2FA ใหม่ + ลบ 2FA เก่า\n\n",
            "type": "markdown",
            "images": [
              "image642.png"
            ]
          },
          {
            "title": "6.Add mail (เพิ่มอีเมล์)",
            "content": "6.Add mail (เพิ่มอีเมล์)\n\n![image](/images/image236.png)\n\nAdd Mail :เพิ่มอีเมล์\n\nType Mail :ประเภทอีเมลล์\n\nType Mail :เลือกประเภทของบริการอีเมลที่คุณต้องการเพิ่ม\n\nDelete mail not on the tool :ลบอีเมลที่ไม่มีอยู่ในเครื่องมือ\n\n",
            "type": "markdown",
            "images": [
              "image236.png"
            ]
          },
          {
            "title": "7.Change name (เปลี่ยนชื่อ)",
            "content": "7.Change name (เปลี่ยนชื่อ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "วิดีโอ:",
            "content": "วิดีโอ:\n\n![image](/images/image752.png)\n\nRandom name :สุ่มชื่อ\n\nVN name :ชื่อเวียดนาม\n\nForeign name :ชื่อต่างประเทศ\n\nName set by user :นำเข้า\n\nLname :นามสกุล\n\nMiddle name :ชื่อลาง\n\nFname :ชื่อ\n\nEnter list of full name :ป้อนรายชื่อเต็ม\n\nDelete used name :ลบชื่อที่ใช้แล้ว\n\n8.Change Info Account (เปลี่ยนข้อมูลบัญชี)\n\n![image](/images/image331.png)\n\nBio :เรื่องราว\n\nWork :การทำงาน\n\nHigh School :มัธยม\n\nCollege :วิทยาลัย\n\nCurrent City :เมืองปัจจุบัน\n\nHometown :บ้านเกิด\n\nRelationship :ความสัมพันธ์\n\ngender :เพศ\n\nBirthday :วันเกิด\n\nDon't change info if already has :ไม่เปลี่ยนข้อมูลหากมีอยู่แล้ว\n\nDelete info if exists :ลบข้อมูลหากมีอยู่แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image752.png",
              "image331.png"
            ]
          },
          {
            "title": "9.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)",
            "content": "9.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)\n\n![image](/images/image745.png)\n\n",
            "type": "markdown",
            "images": [
              "image745.png"
            ]
          },
          {
            "title": "10.Professional mode (โหมดมืออาชีพ)",
            "content": "10.Professional mode (โหมดมืออาชีพ)\n\n![image](/images/image44.png)\n\nOptions:ตัวเลือกสถานะการทำงาน\n\n11. Delete wall post(ลบโพสต์บนวอลล์)\n\n![image](/images/image11.png)\n\nCount:จำนวนโพสต์\n\nBreak (s):ระยะห่างเวลาพัก\n\n",
            "type": "markdown",
            "images": [
              "image44.png",
              "image11.png"
            ]
          },
          {
            "title": "12.Unlock profile (ปลดล็อคโปรไฟล์)",
            "content": "12.Unlock profile (ปลดล็อคโปรไฟล์)\n\n![image](/images/image736.png)\n\n",
            "type": "markdown",
            "images": [
              "image736.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "maxsystemcare_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย MaxSystemCare",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________de0a8",
            "name": "วิธีแก้ไขปัญหาการโหลดล้มเหลวหยุดค้างที่ 94%",
            "sections": [
              {
                "title": "ดูที่อยู่ไฟล์ ไปที่ Genneral configs",
                "content": "ดูที่อยู่ไฟล์ ไปที่ Genneral configs\n\n![image](/images/image39.png)\n\n",
                "type": "markdown",
                "images": [
                  "image39.png"
                ]
              },
              {
                "title": "Details",
                "content": "![image](/images/image145.png)\n\n",
                "type": "markdown",
                "images": [
                  "image145.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          },
          {
            "id": "____________status___n5q9y",
            "name": "ล็อคอินแล้ว Status ขึ้น Changed pass แก้ยังไง",
            "sections": [
              {
                "title": "กรณีที่ล็อคอินจากด้านนอกแล้วเข้าใช้งานได้ปกติ",
                "content": "กรณีที่ล็อคอินจากด้านนอกแล้วเข้าใช้งานได้ปกติ\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Details",
                "content": "![image](/images/image764.png)\n\n",
                "type": "markdown",
                "images": [
                  "image764.png"
                ]
              },
              {
                "title": "Details",
                "content": "![image](/images/image30.png)\n\n",
                "type": "markdown",
                "images": [
                  "image30.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          },
          {
            "id": "_____________failed__jd14s",
            "name": "วิธีแก้ปัญหา failed to load 4.0",
            "sections": [
              {
                "title": "วิธีแก้ปัญหาหลังจากติดตั้งเสร็จรันโปรแกรมแล้วติดปัญหาเหมือนในรูป",
                "content": "วิธีแก้ปัญหาหลังจากติดตั้งเสร็จรันโปรแกรมแล้วติดปัญหาเหมือนในรูป\n\n![image](/images/image651.png)\n\nวิธีแก้ปัญหา :ดาวน์โหลด ldplayer 4.0 ที่\n\n![image](/images/image614.png)\n\nจากนั้นติดตั้ง ldplayer 4.0 แล้วลองรันโปรแกรมอีกรอบ\n\n",
                "type": "markdown",
                "images": [
                  "image651.png",
                  "image614.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          }
        ]
      },
      {
        "id": "tech_maxsystemcare",
        "name": "เทคนิคใช้งาน MaxsystemCare",
        "sections": [],
        "subCategories": [
          {
            "id": "maxsystemcare________wpg3p",
            "name": "MaxsystemCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
            "sections": [
              {
                "title": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
                "content": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)\n\nเพิ่มเพื่อนด้วยคีย์เวิร์ด เหมาะสำหรับคนที่ต้องการเพิ่มเพื่อนด้วยคีย์เวิร์ดนั้นๆ เช่น\n\n- ต้องการเพิ่มเพื่อนที่มีชื่อว่า สิริ  ให้พิมพ์ สิริ ลงในช่อว List of keywords\n\n![image](/images/image671.png)\n\n2.Add friends by UID (แอดเพื่อนด้วยไอดี)\n\nเพิ่มเพื่อนด้วย UID เหมาะสำหรับคนที่ต้องการเพิ่มเพื่อนตาม UID ที่มีอยู่\n\n![image](/images/image446.png)\n\n3.Add friends by suggestions(เพิ่มเพื่อนตามคำแนะนำ)\n\nเพิ่มเพื่อนตามคำแนะนำ สำหรับบัญชีใหม่จะยังไม่มีเพื่อนที่แนะนำ อาจจะใช้งานฟังก์ชันที่ 2 3 4 ในช่วงแรกของการฟาร์มบัญชี\n\n![image](/images/image628.png)\n\n",
                "type": "markdown",
                "images": [
                  "image671.png",
                  "image446.png",
                  "image628.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          },
          {
            "id": "tech_msc_post",
            "name": "MaxsystemCare แนะนำการโพสต์",
            "sections": []
          },
          {
            "id": "tech_msc_spam",
            "name": "MaxsystemCare แนะนำการการสแปม",
            "sections": []
          },
          {
            "id": "tech_msc_respond",
            "name": "MaxsystemCare แนะนำวิธีการตอบโต้",
            "sections": []
          }
        ]
      },
      {
        "id": "maxsystemcare________wpg3p",
        "name": "MaxsystemCare แนะนำการเพิ่มเพื่อนอัตโนมัติ",
        "sections": [
          {
            "title": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
            "content": "1.Add friends by keyword(เพิ่มเพื่อนด้วยคีย์เวิร์ด)\n\nเพิ่มเพื่อนด้วยคีย์เวิร์ด เหมาะสำหรับคนที่ต้องการเพิ่มเพื่อนด้วยคีย์เวิร์ดนั้นๆ เช่น\n\n- ต้องการเพิ่มเพื่อนที่มีชื่อว่า สิริ  ให้พิมพ์ สิริ ลงในช่อว List of keywords\n\n![image](/images/image671.png)\n\n2.Add friends by UID (แอดเพื่อนด้วยไอดี)\n\nเพิ่มเพื่อนด้วย UID เหมาะสำหรับคนที่ต้องการเพิ่มเพื่อนตาม UID ที่มีอยู่\n\n![image](/images/image446.png)\n\n3.Add friends by suggestions(เพิ่มเพื่อนตามคำแนะนำ)\n\nเพิ่มเพื่อนตามคำแนะนำ สำหรับบัญชีใหม่จะยังไม่มีเพื่อนที่แนะนำ อาจจะใช้งานฟังก์ชันที่ 2 3 4 ในช่วงแรกของการฟาร์มบัญชี\n\n![image](/images/image628.png)\n\n",
            "type": "markdown",
            "images": [
              "image671.png",
              "image446.png",
              "image628.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "tech_msc_post",
        "name": "MaxsystemCare แนะนำการโพสต์",
        "sections": []
      },
      {
        "id": "tech_msc_spam",
        "name": "MaxsystemCare แนะนำการการสแปม",
        "sections": []
      },
      {
        "id": "tech_msc_respond",
        "name": "MaxsystemCare แนะนำวิธีการตอบโต้",
        "sections": []
      }
    ]
  },
  {
    "id": "maxdata_suite",
    "name": "MaxData",
    "categories": [
      {
        "id": "_____________________wpldc",
        "name": "คู่มือดาวน์โหลดและติดตั้งโปรแกรม MaxData",
        "sections": [
          {
            "title": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off เป็นอันเสร็จสิ้น",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off เป็นอันเสร็จสิ้น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย\n\nเข้าไปยังเว็บไซต์ Minsoft\n\n![image](/images/image97.png)\n\nล็อคอินเข้าใช้งาน\n\n![image](/images/image491.png)\n\nไปยังหน้าการจัดการซอร์ฟแวร์\n\n![image](/images/image711.png)\n\n2.จากนั้นไปที่โปรแกรม MaxData ==> กด ดาวน์โหลด\n\n![image](/images/image466.png)\n\n![image](/images/image740.png)\n\n3.หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxData.zip ที่โหลดมา จากนั้นกดแตกไฟล์\n\n![image](/images/image684.png)\n\n4.หลังจากแตกไฟล์เสร็จเรียบร้อยแล้ว เข้าไปยังโฟลเดอร์ MaxData แล้วกด AutoUpdate รอจนกว่าจะอัพเดตเสร็จ\n\n![image](/images/image391.png)\n\n5.เข้าใช้งานโปรแกรม ทำการเข้าระบบให้เรียบร้อย\n\n![image](/images/image682.png)\n\n6.เมื่อเข้าระบบเสร็จแล้ว ให้ไปที่ General configs >> Update chromedriver เพื่ออัพเดตโครมไดรเวอร์\n\n![image](/images/image508.png)\n\nหากติดตั้งเสร็จแล้วรันโปรแกรมแล้วหลังจากรันเสร็จแล้ว CPU ใช้งาน 100% ให้ทำตามลิ้งค์นี้\n\n",
            "type": "markdown",
            "images": [
              "image97.png",
              "image491.png",
              "image711.png",
              "image466.png",
              "image740.png",
              "image684.png",
              "image391.png",
              "image682.png",
              "image508.png"
            ]
          }
        ],
        "originalProgramName": "MaxData"
      },
      {
        "id": "_____________________4s2ub",
        "name": "อธิบายเมนูฟังก์ชันการทำงาน MaxData",
        "sections": [
          {
            "title": "การใช้โปรแกรมเถื่อนอาจทำให้คอมพิวตอร์เสียหายได้ และมีความผิดทางกฏหมาย",
            "content": "การใช้โปรแกรมเถื่อนอาจทำให้คอมพิวตอร์เสียหายได้ และมีความผิดทางกฏหมาย\n\nScan group data\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Scan Group by keyword (สแกนกลุ่มตามคีย์เวิร์ด)",
            "content": "1.Scan Group by keyword (สแกนกลุ่มตามคีย์เวิร์ด)\n\n![image](/images/image380.png)\n\nEnter Uid running account :Uid ที่ต้องการใช้งาน\n\nList of keywords :รายการคีย์เวิร์ด\n\nLimit : count groups/keyword :จำนวนกลุ่ม/คีย์เวิร์ด\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n",
            "type": "markdown",
            "images": [
              "image380.png"
            ]
          },
          {
            "title": "2.Scan Group information (สแกนข้อมูลกลุ่ม)",
            "content": "2.Scan Group information (สแกนข้อมูลกลุ่ม)\n\n![image](/images/image96.png)\n\nEnter Uid running account :Uid ที่ต้องการใช้งาน\n\nList of group Id :รายการ Id กลุ่ม\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n",
            "type": "markdown",
            "images": [
              "image96.png"
            ]
          },
          {
            "title": "3.Scan group that user joined (สแกนกลุ่มที่ผู้ใช้เข้าร่วม)",
            "content": "3.Scan group that user joined (สแกนกลุ่มที่ผู้ใช้เข้าร่วม)\n\n![image](/images/image56.png)\n\nEnter Uid running account :Uid ที่ต้องการใช้งาน\n\nList of user Id :รายการ Id ผู้ใช้\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n",
            "type": "markdown",
            "images": [
              "image56.png"
            ]
          },
          {
            "title": "4.Scan group members (สแกนสมาชิกกลุ่ม)",
            "content": "4.Scan group members (สแกนสมาชิกกลุ่ม)\n\n![image](/images/image220.png)\n\nEnter Uid running account :Uid ที่ต้องการใช้งาน\n\nList of group Id :รายการ Id กลุ่ม\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\nScan page data\n\n",
            "type": "markdown",
            "images": [
              "image220.png"
            ]
          },
          {
            "title": "1.Scan page by keyword (สแกนเพจตามคีย์เวิร์ด)",
            "content": "1.Scan page by keyword (สแกนเพจตามคีย์เวิร์ด)\n\n![image](/images/image14.png)\n\nEnter Uid running account :Uid ที่ต้องการใช้งาน\n\nList of keywords :รายการคีย์เวิร์ด\n\nLimit count groups/keyword :จำกัดจำนวนเพจ/keyword\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\nScan user data\n\n1.Scan user friends (สแกนเพื่อนผู้ใช้)\n\n![image](/images/image723.png)\n\nEnter Uid running account :Uid ที่ต้องการใช้งาน\n\nList of Uid :รายการ Uid\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\nScan post data\n\n1.Scan posts by keyword (สแกนโพสต์ตามคีย์เวิร์ด)\n\n![image](/images/image796.png)\n\nEnter Uid running account Uid :UID ที่ต้องการใช้งาน\n\nList of keywords :รายการคีย์เวิร์ด\n\nLimit count groups/keyword :จำกัดจำนวนกลุ่ม/คีย์เวิร์ด\n\nFilter recent posts :โพสต์ล่าสุด\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n2.Count reactions of posts (นับความรู้สึกของโพสต์)\n\n![image](/images/image58.png)\n\nEnter Uid running account Uid :UID ที่ต้องการใช้งาน\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n3.Scan user reactions of posts (สแกนผู้ใช้ที่แสดงความรู้สึกโพสต์)\n\n![image](/images/image217.png)\n\nEnter Uid running account Uid :UID ที่ต้องการใช้งาน\n\nList of post Id :รายการ Id โพสต์\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n4.Scan posts of user in group (สแกนโพสต์ของผู้ใช้ในกลุ่ม)\n\n![image](/images/image347.png)\n\nEnter Uid running account Uid :UID ที่ต้องการใช้งาน\n\nList of Id_User|Id_Group :รายการ Id_User|Id_Group\n\nLimit number of post/groups :จำกัดจำนวนโพสต์/กลุ่ม\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\nOther functions\n\n1.Find Facebook Id (ค้นหาไอดี Facebook)\n\n![image](/images/image546.png)\n\nList of Facebook links :รายการลิงค์เฟสบุ๊ค\n\nStart :เริ่ม\n\nExport Excel :ส่งออกเป็น Excel\n\nExport Txt :ส่งออกเป็นไฟล์ Text\n\n2.ChatGPT\n\n![image](/images/image441.png)\n\nAPI Key :API Key ChatGPT\n\nContent :เนื้อหา\n\nStart :เริ่ม\n\nResult :ผลลัพธ์\n\n3.Check Live Uid (ตรวจสอบสถานะ Uid)\n\n![image](/images/image639.png)\n\nEnter :Uidใส่ Uid\n\nThreads :หัวข้อ\n\nStart :เริ่ม\n\nLIVE :ใช้งานได้\n\nDIE :ถูกจำกัด\n\nCan’t check :ไม่สามารถเช็คได้\n\n",
            "type": "markdown",
            "images": [
              "image14.png",
              "image723.png",
              "image796.png",
              "image58.png",
              "image217.png",
              "image347.png",
              "image546.png",
              "image441.png",
              "image639.png"
            ]
          }
        ],
        "originalProgramName": "MaxData"
      }
    ]
  },
  {
    "id": "maxphonefarm_suite",
    "name": "MaxPhoneFarm",
    "categories": [
      {
        "id": "_____________________lwboe",
        "name": "การใช้งานฟังก์ชั่่น MaxPhoneFarm",
        "sections": [
          {
            "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
            "content": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น\n\nSeeding\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Review Pages(รีวิวเพจ)",
            "content": "1.Review Pages(รีวิวเพจ)\n\n![image](/images/image16.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nId Page:ช่องสำหรับระบุ ID ของหน้าที่คุณต้องการเข้าไปทำการรีวิว\n\nLike page:ติ๊กเครื่องหมายถูก หากต้องการให้ระบบกด Like เพจ���ั้��� ๆ ��ปด้วยในตัว\n\nการตั้งค่าการจัดการเนื้อหา\n\nReview content (0):ช่องสี่เหลี่ยมขนาดใหญ่สำหรับพิมพ์หรือวางข้อความรีวิว โดยตัวเลขในวงเล็บจะแสดงจำนวนเนื้อหาที่มีอยู่\n\n",
            "type": "markdown",
            "images": [
              "image16.png"
            ]
          },
          {
            "title": "Option: รูปแบบเนื้อหา",
            "content": "Option: รูปแบบเนื้อหา\n\nContent is only 1 line: เลือกข้อนี้หากต้องการให้ระบบมองว่าเนื้อหา 1 บรรทัด คือ 1 รีวิว\n\nContent has many lines: เลือกข้อนี้หากเนื้อหารีวิวหนึ่งรายการมีความยาวหลายบรรทัด\n\nปุ่ม (?): ปุ่มช่วยเหลือเพื่อดูคำอธิบายเพิ่มเติมเกี่ยวกับรูปแบบการใส่เนื้อหา\n\nการตั้งค่าเพิ่มเติม\n\nAuto Delete used content:หากติ๊กช่องนี้ ระบบจะลบเนื้อหาที่ถูกใช้งานไปแล้วออกจากรายการโดยอัตโนมัติ เพื่อป้องกันการรีวิวซ้ำ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "2.Buff Like Page(การกดไลค์เพจและติดตามเพจ)",
            "content": "2.Buff Like Page(การกดไลค์เพจและติดตามเพจ)\n\n![image](/images/image233.png)\n\nEnter Id Page :ไอดีเพจ\n\n",
            "type": "markdown",
            "images": [
              "image233.png"
            ]
          },
          {
            "title": "3.Buff Follow UID(การกดติดตามโปรไฟล์)",
            "content": "3.Buff Follow UID(การกดติดตามโปรไฟล์)\n\n![image](/images/image431.png)\n\nEnter UID: ID Account ที่ต้องการติดตาม\n\n",
            "type": "markdown",
            "images": [
              "image431.png"
            ]
          },
          {
            "title": "4.Interact specified posts (โต้ตอบโพสต์ที่ระบุ)",
            "content": "4.Interact specified posts (โต้ตอบโพสต์ที่ระบุ)\n\n![image](/images/image312.png)\n\nข้อมูลพื้นฐานและการตั้งค่าเวลา\n\nPosts/account:กำหนดจำนวนโพสต์ที่ต้องการให้แต่ละบัญชีเข้าไปมีปฏิสัมพันธ์\n\nBreak (s):ระยะเวลาหยุดพักระหว่างการทำแต่ละโพสต์\n\nRead post:ระยะเวลาที่ระบบจะทำการ \"เปิดอ่าน\" หรือค้างอยู่ที่หน้าโพสต์นั้นๆ\n\n",
            "type": "markdown",
            "images": [
              "image312.png"
            ]
          },
          {
            "title": "การตั้งค่าข้อมูลเป้าหมาย",
            "content": "การตั้งค่าข้อมูลเป้าหมาย\n\nList of post links:ช่องสำหรับใส่ URL หรือลิงก์ของโพสต์ที่ต้องการให้ระบบเข้าไปจัดการ โดยตัวเลขในวงเล็บจะแสดงจำนวนลิงก์ที่มีอยู่ในรายการ\n\nการตั้งค่าการแสดงความรู้สึกและแชร์\n\nExpress feelings:ติ๊กถูกเพื่อเลือกการกด Reaction (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nShare wall:ติ๊กถูกหากต้องการให้ระบบแชร์โพสต์นั้นๆ ไปยังหน้า Timeline ของบัญชี\n\nการตั้งค่าความคิดเห็น\n\nComment by text:แสดงความเห็นด้วยข้อความ\n\nList Comments: ช่องสำหรับใส่ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: ตัวเลือกรูปแบบข้อความ\n\nAuto Delete used content: ติ๊กถูกหากต้องการให้ระบบลบข้อความที่ใช้ไปแล้วออกจากรายการอัตโนมัติ\n\nComment by image:แสดงความเห็นด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุที่อยู่ของโฟลเดอร์รูปภาพที่ต้องการใช้ในการคอมเมนต์\n\nการตั้งค่าการจัดการวิดีโอ\n\nInteract with videos on posts:ติ๊กถูกหากในโพสต์นั้นเป็นวิดีโอและต้องการให้ระบบดูวิดีโอด้วย\n\nTime watch:กำหนดช่วงเวลาที่จะให้ระบบรับชมวิดีโอ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Interact Posts by Keyword (โต้ตอบโพสต์ด้วยคีย์เวิร์ด)",
            "content": "5.Interact Posts by Keyword (โต้ตอบโพสต์ด้วยคีย์เวิร์ด)\n\n![image](/images/image319.png)\n\nการตั้งค่าพื้นฐาน\n\nPosts:กำหนดจำนวนโพสต์ที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์\n\nDelay time:ระยะเวลาหน่วงระหว่างการทำงานในแต่ละโพสต์\n\nการตั้งการจัดการคีย์เวิร์ด\n\nList of keywords:ใส่คีย์เวิร์ดที่คุณต้องการค้นหา\n\n",
            "type": "markdown",
            "images": [
              "image319.png"
            ]
          },
          {
            "title": "รูปแบบการกรอก:",
            "content": "รูปแบบการกรอก:\n\nใส่ 1 คำต่อ 1 บรรทัด\n\nรองรับระบบ Spin content โดยใช้รูปแบบ{คำที่1|คำที่2|คำที่3}เพื่อสุ่มคำในการค้นหา\n\nการตั้งค่าการโต้ตอบด้วยความรู้สึก\n\nExpress feelings:ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nตัวเลือกความรู้สึก:เลือกกด Like, Love, Care, Haha, Wow, Sad หรือ Angry ได้ตามต้องการ\n\nการตั้งค่าการโต้ตอบด้วยข้อความ\n\nComment by text:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์\n\nList Comments:ใส่ข้อความที่ต้องการคอมเมนต์ (รองรับ Spin content{a|b|c})\n\nOption:ตัวเลือกเสริม\n\nContent is only 1 line: คอมเมนต์เพียง 1 บรรทัด\n\nContent has many lines: คอมเมนต์แบบมีหลายบรรทัด\n\nRandom icon:ปุ่มสำหรับสุ่มไอคอนใส่ในคอมเมนต์\n\nการตั้งค่าการโต้ตอบด้วยรูปภาพ\n\nComment by image:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูป\n\nImage folder:ระบุตำแหน่งที่เก็บไฟล์รูปภาพในเครื่องคอมพิวเตอร์ของคุณ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Interact Video (ตอบโต้วิดีโอ)",
            "content": "6.Interact Video (ตอบโต้วิดีโอ)\n\n![image](/images/image575.png)\n\nการตั้งค่าพื้นฐาน\n\nLink video:ใส่ URL หรือลิงก์ของวิดีโอที่ต้องการให้ระบบเข้าไปดำเนินการ\n\nTime watch:ตั้งค่าระยะเวลาในการรับชมวิดีโอ โดยระบุเป็นช่วง ขั้นต่ำ > สูงสุด\n\nการตั้งค่าการแสดงความรู้สึก\n\nExpress feelings:เมื่อติ๊กถูกที่ช่องนี้ คุณสามารถเลือกอิโมจิที่ต้องการให้ระบบกดเลือกได้ เช่น ถูกใจ (Like), รักเลย (Love), ห่วงใย, หัวเราะ, ว้าว, เศร้า หรือ โกรธ\n\nการตั้งค่าความคิดเห็น\n\nList Comments:พิมพ์ข้อความที่ต้องการลงในกล่องข้อความ\n\nเทคนิค:สามารถใช้รูปแบบ{a|b|c}เพื่อให้ระบบสุ่มเลือกข้อความ ลดการโดนตรวจจับว่าเป็นบอท\n\nRandom icon:ระบบสุ่มใส่อิโมจิในคอมเมนต์\n\nComment many times:หากต้องการคอมเมนต์หลายครั้ง ให้ตั้งค่า Delay time (s) เพื่อเว้นช่วงเวลาระยะห่างระหว่างแต่ละคอมเมนต์\n\nAuto Delete used content:ติ๊กหากต้องการให้ระบบลบข้อความที่ใช้ไปแล้วออกจากรายการ\n\nการตั้งค่าการแชร์\n\nShare wall:ติ๊กถูกหากต้องการให้ระบบแชร์วิดีโอนี้ลงไปที่หน้าไทม์ไลน์ (Wall) ของคุณ\n\n",
            "type": "markdown",
            "images": [
              "image575.png"
            ]
          },
          {
            "title": "7.Invite Friends like Pages (ชวนเพื่อนกดไลค์เพจ)",
            "content": "7.Invite Friends like Pages (ชวนเพื่อนกดไลค์เพจ)\n\n![image](/images/image474.png)\n\nQuantity :จำนวนเพื่อนที่ต้องการชวน\n\nList of Page IDs :รายการไอดีเพื่อนที่ต้องการกวน\n\n",
            "type": "markdown",
            "images": [
              "image474.png"
            ]
          },
          {
            "title": "8.Invite friends join group (ชวนเพื่อนเข้าร่วมกลุ่ม)",
            "content": "8.Invite friends join group (ชวนเพื่อนเข้าร่วมกลุ่ม)\n\n![image](/images/image578.png)\n\nQuantity :จำนวนเพื่อนที่ต้องการชวน\n\nDelay time :ระยะเวลาดีเลย์ในการช่วนเพื่อน\n\nGroup ID :ไอดีกลุ่มที่ต้องการเชิญเพื่อนเข้าร่วม\n\n",
            "type": "markdown",
            "images": [
              "image578.png"
            ]
          },
          {
            "title": "9.Interact Reels by Link (ตอบโต้เรียลด้วยลิงค์)",
            "content": "9.Interact Reels by Link (ตอบโต้เรียลด้วยลิงค์)\n\n![image](/images/image356.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nTime watch:ตั้งค่าระยะเวลาในการรับชมคลิป Reels โดยกำหนดเป็นช่วง\n\nการตั้งค่าการโต้ตอบ\n\nLike:ติ๊กถูกเพื่อกดถูกใจคลิปอัตโนมัติ\n\nShare Wall:ติ๊กถูกเพื่อแชร์คลิปลงบนหน้าวอลล์ (Timeline) ของตนเอง\n\nComment:ติ๊กถูกเพื่อเปิดใช้งานการแสดงความคิดเห็นอัตโนมัติ\n\nการจัดการความคิดเห็น\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการนำไปคอมเมนต์\n\nSpin content {a|b|c}:รองรับการสุ่มคำ (Spin Syntax) เพื่อให้แต่ละคอมเมนต์มีความหลากหลาย\n\n",
            "type": "markdown",
            "images": [
              "image356.png"
            ]
          },
          {
            "title": "Option (รูปแบบเนื้อหา):",
            "content": "Option (รูปแบบเนื้อหา):\n\nContent is only 1 line:เลือกเมื่อต้องการให้ 1 บรรทัด คือ 1 ข้อความคอมเมนต์\n\nContent has many lines:เลือกเมื่อ 1 ข้อความคอมเมนต์ของคุณมีความยาวหลายบรรทัด\n\nรายการลิงก์เป้าหมาย\n\nList of reel links:ช่องขนาดใหญ่ทางด้านขวา สำหรับวาง URL หรือลิงก์ของคลิป Reels ที่ต้องการให้ระบบเข้าไปทำงาน\n\nตัวเลขในวงเล็บ (0):จะแสดงจำนวนลิงก์ทั้งหมดที่คุณใส่ลงไป\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Interact Reels by keywords (ตอบโต้เรียลด้วยคีย์เวิร์ด)",
            "content": "10.Interact Reels by keywords (ตอบโต้เรียลด้วยคีย์เวิร์ด)\n\n![image](/images/image443.png)\n\nการตั้งค่าพื้นฐาน\n\nQuantity:กำหนดจำนวนวิดีโอ Reels ที่ต้องการให้ระบบเข้าไปดู โดยระบุเป็นช่วง\n\nTime watch:กำหนดระยะเวลาในการรับชมวิดีโอแต่ละตัว\n\nการตั้งค่ารูปแบบการปฏิสัมพันธ์\n\nLike:กดถูกใจวิดีโอ\n\nShare Wall:แชร์วิดีโอไปยังหน้าโปรไฟล์ (Wall) ของตนเอง\n\nComment:แสดงความคิดเห็นใต้วิดีโอ (หากเลือกช่องนี้ จะต้องไปตั้งค่าในส่วน \"List Comments\" ต่อ)\n\nการตั้งค่าการจัดการความคิดเห็น\n\nList Comments:ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nSpin content {a|b|c}:รองรับการใช้รูปแบบ Spin เพื่อสุ่มคำพูด เช่น{สวัสดี|ทักทาย|เยี่ยมเลย}เพื่อลดการตรวจจับว่าเป็นสแปม\n\nOption:รูปแบบเนื้อหา\n\nContent is only 1 line: 1 บรรทัด คือ 1 ข้อความคอมเมนต์\n\nContent has many lines: ข้อความหนึ่งคอมเมนต์มีหลายบรรทัด\n\nการตั้งค่าการระบุคำค้นหา\n\nEnter keywords:ช่องสี่เหลี่ยมด้านขวาขนาดใหญ่ ให้คุณระบุคีย์เวิร์ด (คำค้นหา) ที่ต้องการให้ระบบใช้ค้นหาวิดีโอ Reels โดยระบุ 1 คำต่อ 1 บรรทัด\n\n",
            "type": "markdown",
            "images": [
              "image443.png"
            ]
          },
          {
            "title": "11.Sync Contact (ซิงค์ผู้ติดต่อ)",
            "content": "11.Sync Contact (ซิงค์ผู้ติดต่อ)\n\n![image](/images/image480.png)\n\nการตั้งค่าการนำเข้าข้อมูล\n\nImport list of Phone numbers:ช่องสี่เหลี่ยมขนาดใหญ่สำหรับใส่รายการหมายเลขโทรศัพท์ที่ต้องการซิงค์\n\nรูปแบบการกรอก:ข้อมูลแต่ละรายการต้องอยู่แยกกันบรรทัดละ 1 รายชื่อ (Each content 1 line)\n\nตัวนับจำนวน:มีตัวเลขแสดงจำนวนหมายเลขที่ถูกนำเข้าในวงเล็บหลังหัวข้อ\n\nการตั้งค่าการกำหนดปริมาณและการจัดการหมายเลข\n\nQuantity/device:ตั้งค่าจำนวนหมายเลขที่จะใช้ต่อหนึ่งอุปกรณ์ สามารถกำหนดเป็นช่วง\n\nAuto delete used phone numbers:สั่งให้ระบบลบหมายเลขโทรศัพท์ออกจากรายการโดยอัตโนมัติเมื่อใช้งานเสร็จสิ้นแล้ว\n\nการตั้งค่าการเพิ่มเพื่อน\n\nAmount:กำหนดจำนวนเพื่อนที่จะเพิ่ม\n\nDelay time:กำหนดระยะเวลาหน่วงหรือรอระหว่างการดำเนินการ\n\nChange Info\n\n",
            "type": "markdown",
            "images": [
              "image480.png"
            ]
          },
          {
            "title": "1.Change password(เปลี่ยนรหัสผ่าน)",
            "content": "1.Change password(เปลี่ยนรหัสผ่าน)\n\n![image](/images/image339.png)\n\nImport new password :นำเข้ารหัสผ่านใหม่\n\nRandom :แบบสุ่ม\n\nImport password :แบบนำเข้าระหัสผ่าน\n\nImport :นำเข้า\n\nLogout of old devices :ออกจากระบบอุปกรณ์เก่า\n\n",
            "type": "markdown",
            "images": [
              "image339.png"
            ]
          },
          {
            "title": "2.Up avatar(อัพรูปโปรไฟล์)",
            "content": "2.Up avatar(อัพรูปโปรไฟล์)\n\n![image](/images/image489.png)\n\nImage folder :เพิ่ม Path Folder ของรูปภาพ เช่น C:\\MaxPhoneFarmPro\\profiles\\img\n\nDelete used images :ลบรูปภาพที่ใช้แล้ว\n\nSkip if already have avatar: ข้ามไปหากมีรูปโปไฟล์อยู่แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image489.png"
            ]
          },
          {
            "title": "3.Up cover(การอัพรูปภาพหน้าปก)",
            "content": "3.Up cover(การอัพรูปภาพหน้าปก)\n\n![image](/images/image86.png)\n\nImage folder :ที่อยู่ไฟล์รูปภาพเช่น C:\\MaxPhoneFarmPro\\profiles\\imgDelete used images:ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image86.png"
            ]
          },
          {
            "title": "4.Remove Phone(การลบหมายเลขโทรศัพท์ออกจาก FB)",
            "content": "4.Remove Phone(การลบหมายเลขโทรศัพท์ออกจาก FB)\n\n![image](/images/image788.png)\n\n",
            "type": "markdown",
            "images": [
              "image788.png"
            ]
          },
          {
            "title": "5.On - Off 2FA(การเปิด-ปิด 2FA หรือการยืนยันตัวตนแบบสองชั้น)",
            "content": "5.On - Off 2FA(การเปิด-ปิด 2FA หรือการยืนยันตัวตนแบบสองชั้น)\n\n![image](/images/image131.png)\n\nDisable 2FA :คือ การปิด 2 FA (ปิดการยืนยันตัวตน 2 ชั้น)\n\nEnable 2FA :คือ  การเปิด 2 FA (เปิดการยืนยันตัวตน 2 ชั้น)- If the account already has 2FA :หาก 2 FA เปิดอยู่แล่ว -Don't enable 2FA :ไม่ต้องการเปิดซ้ำ- Add new 2FA :เพิ่ม 2FA ใหม่- Remove 2FA + Add new 2FA :ลบ 2FA เก่าออก เพิ่มใหม่6.Add mail (เพิ่มอีเมล์)\n\n",
            "type": "markdown",
            "images": [
              "image131.png"
            ]
          },
          {
            "title": "6.Add mail (เพิ่มอีเมล์)",
            "content": "6.Add mail (เพิ่มอีเมล์)\n\n![image](/images/image434.png)\n\nAdd Mail :เพิ่มอีเมล์\n\nType Mail :ประเภทอีเมลล์\n\nSet new mail to primary mail :ตั้งค่าเมลใหม่เป็นเมลหลัก\n\nRemove second mail :ลบอีเมลล์ที่สอง\n\n",
            "type": "markdown",
            "images": [
              "image434.png"
            ]
          },
          {
            "title": "7.Change name (เปลี่ยนชื่อ)",
            "content": "7.Change name (เปลี่ยนชื่อ)\n\n![image](/images/image57.png)\n\nRandom name :สุ่มชื่อ\n\nVN name :ชื่อเวียดนาม\n\nForeign name :ชื่อต่างประเทศ\n\nImport :นำเข้าชื่อ\n\nLname :นามสกุล\n\nMiddle name :ชื่อลาง\n\nFname :ชื่อ\n\n",
            "type": "markdown",
            "images": [
              "image57.png"
            ]
          },
          {
            "title": "8.Change Info Account (เปลี่ยนข้อมูลบัญชี)",
            "content": "8.Change Info Account (เปลี่ยนข้อมูลบัญชี)\n\n![image](/images/image156.png)\n\nBio :เรื่องราว\n\nWork :การทำงาน\n\nHigh School :มัธยม\n\nCollege :วิทยาลัย\n\nCurrent City :เมืองปัจจุบัน\n\nHometown :บ้านเกิด\n\nRelationship :ความสัมพันธ์\n\ngender :เพศ\n\nBirthday :วันเกิด\n\nDon't change info if already has :ไม่เปลี่ยนข้อมูลหากมีอยู่แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image156.png"
            ]
          },
          {
            "title": "9.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)",
            "content": "9.Logout of old devices (ออกจากระบบอุปกรณ์เก่า)\n\n![image](/images/image652.png)\n\n",
            "type": "markdown",
            "images": [
              "image652.png"
            ]
          },
          {
            "title": "10.Remove Trusted Devices (ลบอุปกรณ์ที่เชื่อถือได้)",
            "content": "10.Remove Trusted Devices (ลบอุปกรณ์ที่เชื่อถือได้)\n\n![image](/images/image554.png)\n\n",
            "type": "markdown",
            "images": [
              "image554.png"
            ]
          },
          {
            "title": "11.Professional mode (โหมดมืออาชีพ)",
            "content": "11.Professional mode (โหมดมืออาชีพ)\n\n![image](/images/image733.png)\n\nOption :ตัวเลือก\n\nTurn on :เปิดโหมดมืออาชีพ\n\nTurn off: ปิดโหมดมืออาชีพ\n\n",
            "type": "markdown",
            "images": [
              "image733.png"
            ]
          },
          {
            "title": "12.Unlock profile (ปลดล็อคโปรไฟล์)",
            "content": "12.Unlock profile (ปลดล็อคโปรไฟล์)\n\n![image](/images/image302.png)\n\nPost - Share - Spam\n\n",
            "type": "markdown",
            "images": [
              "image302.png"
            ]
          },
          {
            "title": "1.Post Wall(การโพสต์หน้าไทม์ไลน์)",
            "content": "1.Post Wall(การโพสต์หน้าไทม์ไลน์)\n\n![image](/images/image454.png)\n\nการตั้งค่าพื้นฐาน\n\nSố lượng bài:กำหนดจำนวนโพสต์ที่ต้องการให้ระบบทำ โดยระบุเป็นช่วง\n\nBreak:กำหนดเวลาหยุดพักระหว่างการโพสต์แต่ละครั้ง\n\nการตั้งค่าการจัดการเนื้อหาข้อความ\n\nList of contents:ช่องสำหรับใส่ข้อความที่ต้องการโพสต์\n\nUse Background:ตัวเลือกสำหรับใช้พื้นหลังสี\n\nAuto delete used content:หากติ๊กช่องนี้ ระบบจะลบข้อความที่โพสต์ไปแล้วออกจากรายการอัตโนมัติ\n\nOption:ตัวเลือกเสริมสำหรับกำหนดรูปแบบข้อความ\n\nการตั้งค่าการจัดการรูปภาพ\n\nImage folder:ช่องสำหรับระบุที่อยู่ของโฟลเดอร์รูปภาพในคอมพิวเตอร์\n\nImages:กำหนดจำนวนรูปภาพที่จะใช้ต่อการโพสต์ 1 ครั้ง\n\nการตั้งค่าการแท็กเพื่อน\n\nAmount:กำหนดจำนวนเพื่อนที่จะแท็กในแต่ละโพสต์\n\n",
            "type": "markdown",
            "images": [
              "image454.png"
            ]
          },
          {
            "title": "2.Post Groups (โพสต์กลุ่ม)",
            "content": "2.Post Groups (โพสต์กลุ่ม)\n\n![image](/images/image67.png)\n\nการตั้งค่าพื้นฐาน\n\nAmount groups:กำหนดจำนวนกลุ่มที่จะโพสต์\n\nDelay time:กำหนดเวลาหน่วงระหว่างการโพสต์แต่ละกลุ่ม\n\nการตั้งค่าเนื้อหาการโพสต์\n\n",
            "type": "markdown",
            "images": [
              "image67.png"
            ]
          },
          {
            "title": "ส่วนข้อความ (Text)",
            "content": "ส่วนข้อความ (Text)\n\nList of contents:ช่องสำหรับใส่ข้อความที่ต้องการโพสต์\n\nSpin content:รองรับการใช้รูปแบบ{a|b|c}เพื่อสุ่มคำพูด\n\nRandom icon:ปุ่มสำหรับเลือกใส่ไอคอนแบบสุ่ม\n\nUse Background:เลือกโพสต์ข้อความแบบมีพื้นหลัง (Color Background)\n\nAuto delete used content:ลบเนื้อหาที่ใช้แล้วอัตโนมัติ\n\nOption:ตัวเลือกรูปแบบเนื้อหา\n\nContents is only 1 line: 1 ชุดคือ 1 บรรทัด\n\nContents has many lines: เนื้อหา 1 ชุดมีหลายบรรทัด\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนรูปภาพ (Image)",
            "content": "ส่วนรูปภาพ (Image)\n\nImage folder:เลือกโฟลเดอร์ที่เก็บรูปภาพในคอมพิวเตอร์\n\nImages/post:กำหนดจำนวนรูปภาพที่จะใช้ต่อ 1 โพสต์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ส่วนแท็กและกิจกรรม (Tag Event)",
            "content": "ส่วนแท็กและกิจกรรม (Tag Event)\n\nEvent name:ใส่ชื่อกิจกรรมที่ต้องการแท็ก\n\nExport posted article link:ติ๊กเพื่อให้ระบบส่งออกลิงก์ของโพสต์ที่ทำสำเร็จแล้ว\n\nการตั้งค่าการเลือกกลุ่มเป้าหมาย\n\nRandom group joined:สุ่มจากกลุ่มที่เป็นสมาชิกอยู่แล้ว\n\nเลือกเฉพาะกลุ่มที่ไม่ต้องรออนุมัติ (Uncensored)\n\nให้ความสำคัญกับกลุ่มที่มีสมาชิกจำนวนมาก (Priority many members)\n\nป้องกันการโพสต์กลุ่มซ้ำกับบัญชีอื่น (Don't post same group)\n\nโพสต์เฉพาะกลุ่มที่ระบุไว้ในลิสต์ (Only post groups in the list)\n\nImport Group ID:ใส่ ID ของกลุ่มที่ต้องการโพสต์โดยตรง พร้อมตัวเลือก \"Auto delete used ID\" (ลบ ID ที่โพสต์แล้ว)\n\nCreate new group:ใส่ชื่อกลุ่มเพื่อสร้างกลุ่มใหม่\n\nตัวเลือกเพิ่มเติม\n\nLeave group post approval:ออกจากกลุ่มหากโพสต์นั้นต้องรอการอนุมัติจากแอดมิน\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "3.Post Pages(โพสต์เพจ)",
            "content": "3.Post Pages(โพสต์เพจ)\n\n![image](/images/image449.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber pages:กำหนดจำนวนเพจที่ต้องการโพสต์\n\nDelay time:กำหนดเวลาหน่วงระหว่างการโพสต์แต่ละครั้ง\n\nการจัดการเนื้อหาข้อความ\n\nList of contents:ช่องสำหรับใส่ข้อความที่ต้องการโพสต์ สามารถรองรับรูปแบบ Spin Content เช่น{a|b|c}เพื่อสุ่มคำได้\n\nOption:รูปแบบเนื้อหา\n\nContent is only 1 line:ถือว่าเนื้อหา 1 บรรทัดคือ 1 โพสต์\n\nContent has many lines:ถือว่าเนื้อหาหลายบรรทัดรวมกันเป็น 1 โพสต์\n\n",
            "type": "markdown",
            "images": [
              "image449.png"
            ]
          },
          {
            "title": "ฟีเจอร์เพิ่มเติม:",
            "content": "ฟีเจอร์เพิ่มเติม:\n\nUse Background:เลือกใช้พื้นหลังสีสันต่าง ๆ\n\nAuto delete used content:ลบเนื้อหาที่ใช้แล้วออกจากรายการโดยอัตโนมัติ\n\nRandom icon:สุ่มใส่ไอคอนหรืออีโมจิในข้อความ\n\nการจัดการรูปภาพ\n\nImage folder:ระบุที่อยู่ของโฟลเดอร์ที่เก็บรูปภาพในเครื่องคอมพิวเตอร์\n\nImages/post:กำหนดจำนวนรูปภาพที่จะใช้ต่อ 1 โพสต์\n\nDelete used images:เมื่อโพสต์รูปนั้นไปแล้ว ให้ลบไฟล์รูปออกจากโฟลเดอร์ทันที\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "4.Share(แชร์)",
            "content": "4.Share(แชร์)\n\n![image](/images/image4.png)\n\nการตั้งค่าพื้นฐาน\n\nDelay time:กำหนดระยะเวลาหน่วงระหว่างการทำงาน\n\nLink to share:ช่องสำหรับใส่ลิงก์ที่ต้องการนำไปแชร์\n\nType link:เลือกประเภทของลิงก์ ได้แก่ Livestream, Post, หรือ Reel\n\n",
            "type": "markdown",
            "images": [
              "image4.png"
            ]
          },
          {
            "title": "Share content:",
            "content": "Share content:\n\nList of contents: ใส่ข้อความที่ต้องการแชร์\n\nOption: เลือกรูปแบบเนื้อหา\n\nAuto Delete used content: ติ๊กเพื่อลบข้อความที่ใช้แล้วโดยอัตโนมัติ\n\nการตั้งค่าการปฏิสัมพันธ์ก่อนแชร์\n\nTime watch:ตั้งเวลาในการดูโพสต์ก่อนแชร์\n\nExpress feelings:เลือกกดแสดงความรู้สึก (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nAuto comment:ตั้งค่าการคอมเมนต์อัตโนมัติ\n\nList Comments: ใส่ข้อความคอมเมนต์\n\nComment many times: เลือกหากต้องการให้คอมเมนต์หลายครั้ง\n\nDelay comment: ระยะเวลาหน่วงระหว่างคอมเมนต์แต่ละครั้ง\n\nการตั้งค่าตัวเลือกการแชร์\n\nShare post to wall:แชร์ลงหน้าโปรไฟล์ตนเอง\n\nQuantity: กำหนดจำนวนที่ต้องการแชร์\n\nShare post to group:แชร์ลงกลุ่ม\n\nNumber groups: กำหนดจำนวนกลุ่มที่ต้องการแชร์\n\nAdvanced configs: การตั้งค่าขั้นสูง\n\nOnly share to group uncensored: แชร์เฉพาะกลุ่มที่ไม่ต้องรออนุมัติโพสต์\n\nPriority sharing groups with many members: ให้ความสำคัญกับกลุ่มที่มีสมาชิกจำนวนมากก่อน\n\nDon't share same group with another account: ป้องกันการแชร์ซ้ำในกลุ่มเดียวกันจากหลายบัญชี\n\nUse backed up groups: ใช้รายชื่อกลุ่มที่สำรองไว้\n\nOnly share groups in the list: แชร์เฉพาะกลุ่มที่มีรายชื่ออยู่ในลิสต์ที่กำหนด (ปุ่ม Enter เพื่อจัดการลิสต์)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Spam Newfeed(สแปมฟีดข่าว)",
            "content": "5.Spam Newfeed(สแปมฟีดข่าว)\n\n![image](/images/image735.png)\n\nการตั้งค่าพื้นฐาน\n\nPosts:กำหนดช่วงจำนวนโพสต์ที่ต้องการให้ระบบเข้าไปจัดการ\n\nBreak:กำหนดระยะเวลาหยุดพักระหว่างการทำงานในแต่ละโพสต์\n\nการแสดงความรู้สึก\n\nCheckbox Express feelings:ติ๊กถูกเพื่อเปิดใช้งานการกดความรู้สึก\n\nEmoji Selection:สามารถเลือกประเภทของความรู้สึกที่ต้องการได้ (Like, Love, Care, Haha, Wow, Sad, Angry)\n\nการตั้งค่าการแสดงความคิดเห็นด้วยข้อความ\n\nComment by text:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยข้อความ\n\nList Comments:ช่องว่างสำหรับใส่ข้อความที่ต้องการใช้คอมเมนต์\n\nOption:ตัวเลือกรูปแบบข้อความ\n\nการตั้งค่าการแสดงความคิดเห็นด้วยรูปภาพ\n\nComment by image:ติ๊กถูกเพื่อเปิดใช้งานการคอมเมนต์ด้วยรูปภาพ\n\nImage folder:ช่องสำหรับระบุที่อยู่ของโฟลเดอร์ (Path) ที่เก็บรูปภาพในเครื่องคอมพิวเตอร์\n\n",
            "type": "markdown",
            "images": [
              "image735.png"
            ]
          },
          {
            "title": "6.Spam Friends (สแปมเพื่อน)",
            "content": "6.Spam Friends (สแปมเพื่อน)\n\n![image](/images/image293.png)\n\nการตั้งค่าพื้นฐาน\n\nQuantity:จำนวนเพื่อนที่ต้องการดำเนินการ\n\nPosts/Friend:จำนวนโพสต์ต่อเพื่อน 1 คน ที่ต้องการให้ระบบเข้าไปจัดการ\n\nBreak:ระยะเวลาหยุดพักระหว่างการทำงาน\n\nการตั้งค่าการโต้ตอบด้วยความรู้สึก\n\nExpress feelings:สามารถเลือกส่ง Emoji แสดงความรู้สึกไปยังโพสต์ของเพื่อนได้\n\nตัวเลือกที่มี: Like (ถูกใจ), Love (รักเลย), Care (ห่วงใย), Haha (หัวเราะ), Wow (ว้าว), Sad (เศร้า) และ Angry (โกรธ)\n\nการตั้งค่าการแสดงความคิดเห็น\n\nComment by text:คอมเมนต์ด้วยข้อความ\n\nList Comments: ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nOption: รูปแบบการอ่านค่าข้อความ\n\nComment by image:คอมเมนต์ด้วยรูปภาพ\n\nImage folder: ช่องสำหรับระบุที่อยู่ของโฟลเดอร์รูปภาพในเครื่องคอมพิวเตอร์ที่ต้องการนำมาใช้คอมเมนต์\n\n",
            "type": "markdown",
            "images": [
              "image293.png"
            ]
          },
          {
            "title": "7.Spam Groups (สแปมกลุ่ม)",
            "content": "7.Spam Groups (สแปมกลุ่ม)\n\n![image](/images/image406.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber groups:จำนวนกลุ่มที่ต้องการให้ระบบทำงาน\n\nPosts/group:จำนวนโพสต์ที่ต้องการดำเนินการต่อ 1 กลุ่ม\n\nBreak:ระยะเวลาหยุดพักระหว่างการทำงาน\n\nการตั้งค่าการตอบสนองด้วยความรู้สึก\n\nExpress feelings:คุณสามารถเลือกส่ง Emoji ต่างๆ ได้\n\nปุ่มเลือก Emoji ประกอบด้วย: ถูกใจ (Like), รัก (Love), ห่วงใย (Care), หัวเราะ (Haha), ว้าว (Wow), เศร้า (Sad) และ โกรธ (Angry)\n\nการแสดงความคิดเห็นด้วยข้อความ (Comment by text)\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nOption:ตัวเลือกรูปแบบเนื้อหา\n\nการแสดงความคิดเห็นด้วยรูปภาพ (Comment by image)\n\nImage folder:ช่องสำหรับระบุที่อยู่ไฟล์ (Path) ของโฟลเดอร์ที่เก็บรูปภาพที่ต้องการใช้\n\n",
            "type": "markdown",
            "images": [
              "image406.png"
            ]
          },
          {
            "title": "8.Spam Post (สแปมโพสต์)",
            "content": "8.Spam Post (สแปมโพสต์)\n\n![image](/images/image92.png)\n\nการตั้งค่าพื้นฐาน\n\nIDs/Account:กำหนดจำนวน ID เป้าหมายที่จะให้แต่ละบัญชีเข้าไปจัดการ\n\nAmount posts/ID:จำนวนโพสต์ที่จะให้ลงต่อ 1 ID เป้าหมาย\n\nBreak:ระยะเวลาหยุดพักระหว่างการทำงาน\n\nการตั้งค่าการเลือกเป้าหมาย\n\nObject type:เลือกประเภทของเป้าหมายที่ต้องการโพสต์ ประกอบด้วย\n\nProfile: หน้าโปรไฟล์ส่วนตัว\n\nGroup: กลุ่มต่างๆ\n\nPage: หน้าแฟนเพจ\n\nEnter ID User/Group/Page:ช่องสำหรับใส่หมายเลข ID ของเป้าหมายที่คุณต้องการลงโพสต์\n\nAuto delete used ID:หากติ๊กถูก ระบบจะลบ ID ที่ทำงานเสร็จแล้วออกจากรายการโดยอัตโนมัติ\n\nการตั้งค่ารูปแบบการโต้ตอบ\n\nExpress feelings:ติ๊กถูกหากต้องการให้ระบบกด Reaction โดยสามารถเลือกไอคอนอารมณ์ต่างๆ ได้\n\nComment by text:ติ๊กถูกเพื่อคอมเมนต์ด้วยข้อความ\n\nList Comments: ใส่ข้อความที่ต้องการในช่อง\n\nOption: ตัวเลือกรูปแบบข้อความ\n\nShare wall:ติ๊กถูกหากต้องการให้มีการแชร์ไปยังหน้า Wall ของตนเอง\n\nComment by image:ติ๊กถูกหากต้องการคอมเมนต์ด้วยรูปภาพ โดยเลือกโฟลเดอร์รูปภาพจากเครื่องของคุณ\n\nReel:ติ๊กถูกหากต้องการเน้นการทำงานไปที่ส่วนของ Reels\n\n",
            "type": "markdown",
            "images": [
              "image92.png"
            ]
          },
          {
            "title": "9.Post Reels (โพสต์เรียล)",
            "content": "9.Post Reels (โพสต์เรียล)\n\n![image](/images/image390.png)\n\nการตั้งค่าพื้นฐาน\n\nQuantity:กำหนดจำนวนคลิป Reels ที่ต้องการโพสต์\n\nDelay time:กำหนดระยะเวลาหน่วงระหว่างการโพสต์แต่ละคลิป\n\nการจัดการไฟล์วิดีโอ\n\nVideo folder:ช่องระบุที่อยู่ของโฟลเดอร์ (Path) ที่เก็บไฟล์วิดีโอไว้\n\nDelete used video:หากเลือกช่องนี้ ระบบจะลบไฟล์วิดีโอออกจากโฟลเดอร์ทันทีหลังจากโพสต์สำเร็จ\n\nการจัดการเนื้อหาและแฮชแท็ก\n\nDescription:ติ๊กถูกเพื่อเปิดใช้งานการใส่คำบรรยายใต้โพสต์\n\nList of contents: ช่องสำหรับพิมพ์เนื้อหา (รองรับระบบ Spin content{a|b|c}เพื่อสุ่มข้อความ)\n\nRandom icon: ปุ่มสำหรับสุ่มใส่ไอคอนในเนื้อหา\n\nOption: เลือกว่าเนื้อหา 1 บรรทัดคือ 1 โพสต์ (Content is only 1 line) หรือเนื้อหาหลายบรรทัดรวมเป็น 1 โพสต์ (Content has many lines)\n\nAuto delete used content: ลบเนื้อหาที่ใช้แล้วออกจากรายการอัตโนมัติ\n\nHashtag:ติ๊กถูกเพื่อเปิดใช้งานการใส่แฮชแท็ก\n\nList of Hashtag: ช่องสำหรับใส่รายการแฮชแท็กที่ต้องการ\n\nHashtags/content: กำหนดจำนวนแฮชแท็กที่จะสุ่มมาใช้ต่อ 1 โพสต์\n\nการตั้งค่าขั้นสูง\n\nTimeout chờ load video:กำหนดเวลาสูงสุดในการรอโหลดวิดีโอ\n\nNếu timeout thì sẽ tính là:หากเกิดกรณีหมดเวลา (Timeout) จะให้ระบบบันทึกสถานะเป็นอะไร\n\n",
            "type": "markdown",
            "images": [
              "image390.png"
            ]
          },
          {
            "title": "10.Post Story (โพสต์สตอรี่)",
            "content": "10.Post Story (โพสต์สตอรี่)\n\n![image](/images/image713.png)\n\nการตั้งค่าข้อมูลพื้นฐานของการทำงาน\n\nAmount stories:กำหนดจำนวนสตอรี่ที่ต้องการโพสต์\n\nการตั้งค่าตัวเลือกรูปแบบเนื้อหา\n\n",
            "type": "markdown",
            "images": [
              "image713.png"
            ]
          },
          {
            "title": "ข้อความ (Text)",
            "content": "ข้อความ (Text)\n\nStory content: ช่องสำหรับใส่ข้อความที่ต้องการโพสต์ลงในสตอรี่\n\nUse Background: ติ๊กถูกหากต้องการใช้พื้นหลังสำหรับข้อความ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "รูปภาพหรือวิดีโอ (Post Image/Video)",
            "content": "รูปภาพหรือวิดีโอ (Post Image/Video)\n\nMedia folder: เลือกโฟลเดอร์ที่เก็บไฟล์ภาพหรือวิดีโอที่ต้องการใช้งาน\n\nDelete used media: ติ๊กถูกหากต้องการให้ระบบลบไฟล์ออกจากโฟลเดอร์หลังจากโพสต์เสร็จแล้ว\n\nAttach link: ติ๊กถูกเพื่อแนบลิงก์ (หมายเหตุ: ใช้ได้เฉพาะบางบัญชีที่มีสิทธิ์เท่านั้น)\n\nList of links: ช่องสำหรับระบุลิงก์ที่ต้องการแนบไปกับโพสต์\n\nการตั้งค่าเพลงประกอบ\n\nSong (Radio Button): เลือกหากต้องการใส่เพลง\n\nRandom song: เลือกเพื่อให้ระบบสุ่มเพลงให้โดยอัตโนมัติ\n\nEnter song: เลือกหากต้องการระบุเพลงเอง\n\nList songs: ช่องสำหรับใส่รายชื่อเพลงที่ต้องการ\n\nUse Background (Song): ติ๊กถูกเพื่อใช้พื้นหลังในขณะที่เล่นเพลง\n\nImage: ติ๊กถูกหากต้องการใส่รูปภาพประกอบกับเพลง\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพ\n\nDelete used images: ติ๊กถูกหากต้องการลบรูปภาพที่ใช้งานแล้วออก\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Seeding Events (การดันอีเวนต์)",
            "content": "11.Seeding Events (การดันอีเวนต์)\n\n![image](/images/image476.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nLink Event:ช่องสำหรับวาง URL หรือลิงก์ของกิจกรรม (Event) ที่คุณต้องการให้ระบบเข้าไปดำเนินการ\n\nการตั้งค่าตัวเลือกการดำเนินการ\n\nInterested:ติ๊กถูกเพื่อให้บัญชีเข้าไปกด \"สนใจ\" กิจกรรม\n\nGoing:ติ๊กถูกเพื่อให้บัญชีเข้าไปกด \"เข้าร่วม\" กิจกรรม\n\nInvite friends:ติ๊กถูกหากต้องการให้บัญชีทำการเชิญเพื่อนมาเข้าร่วมกิจกรรมนี้\n\nการควบคุมปริมาณและเวลา\n\nQuantity:กำหนดจำนวนครั้งหรือจำนวนบัญชีที่จะใช้งาน\n\nDelay:กำหนดเวลาหน่วงในการทำงาน\n\nAdd Friends - Join Groups\n\n",
            "type": "markdown",
            "images": [
              "image476.png"
            ]
          },
          {
            "title": "1.Add friends by keyword (เพิ่มเพื่อนด้วยคีย์เวิร์ด)",
            "content": "1.Add friends by keyword (เพิ่มเพื่อนด้วยคีย์เวิร์ด)\n\n![image](/images/image584.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nQuantity:จำนวนเพื่อนทั้งหมดที่ต้องการเพิ่มในรอบนั้นๆ\n\nDelay time:ระยะเวลาการรอ ระหว่างการดำเนินการแต่ละครั้ง\n\nการตั้งค่าคีย์เวิร์ด\n\nList of keywords:ช่องสำหรับใส่คำค้นหาที่คุณต้องการ\n\nกฎการพิมพ์: 1 คีย์เวิร์ด ต่อ 1 บรรทัด\n\nฟีเจอร์ Spin Content: คุณสามารถใช้รูปแบบ{a|b|c}เพื่อให้ระบบสุ่มเลือกคำมาใช้ได้\n\nFriends/keyword:กำหนดจำนวนเพื่อนที่จะเพิ่มต่อหนึ่งคีย์เวิร์ด\n\n",
            "type": "markdown",
            "images": [
              "image584.png"
            ]
          },
          {
            "title": "2.Add friends by UID (เพิ่มเพื่อนด้วย UID)",
            "content": "2.Add friends by UID (เพิ่มเพื่อนด้วย UID)\n\n![image](/images/image540.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber friends:กำหนดช่วงจำนวนเพื่อนที่ต้องการเพิ่ม\n\nDelay time:กำหนดระยะเวลาการรอ ระหว่างการส่งคำขอแต่ละครั้ง\n\nการตั้งค่ารายชื่อเป้าหมายและการจัดการ\n\nList Uid to add friends:ช่องสำหรับใส่หมายเลข UID ของผู้ที่ต้องการเพิ่มเป็นเพื่อน\n\nหมายเหตุ:ใส่ 1 UID ต่อ 1 บรรทัดเท่านั้น\n\nAuto delete Uid after sent invitation:หากติ๊กถูก ระบบจะลบ UID ออกจากรายการโดยอัตโนมัติหลังจากส่งคำขอแล้ว\n\nการตั้งค่าการโต้ตอบก่อนเพิ่มเพื่อน\n\nInteract before add friends:ติ๊กถูกที่ช่องนี้เพื่อเปิดใช้งานระบบโต้ตอบก่อนส่งคำขอ\n\nTotal time:กำหนดช่วงเวลาทั้งหมดที่จะใช้ในการโต้ตอบ\n\nLike:ติ๊กเพื่อระบุจำนวนครั้งที่ต้องการกดถูกใจ\n\nComment:ติ๊กเพื่อระบุจำนวนครั้งที่ต้องการแสดงความคิดเห็น\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการคอมเมนต์\n\nหมายเหตุ:ใส่ 1 ข้อความต่อ 1 บรรทัด และรองรับการใช้รูปแบบ Spin Content เช่น{ข้อความA|ข้อความB|ข้อความC}เพื่อสุ่มคำ\n\n",
            "type": "markdown",
            "images": [
              "image540.png"
            ]
          },
          {
            "title": "3.Add friends by suggestions (เพิ่มเพื่อนตามคำแนะนำ)",
            "content": "3.Add friends by suggestions (เพิ่มเพื่อนตามคำแนะนำ)\n\n![image](/images/image176.png)\n\nNumber frinds :จำนวนเพื่อน\n\nDelay time :ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image176.png"
            ]
          },
          {
            "title": "4.Confirm Friend (ยืนยันเพื่อน)",
            "content": "4.Confirm Friend (ยืนยันเพื่อน)\n\n![image](/images/image177.png)\n\nNumber friends :จำนวนเพื่อน\n\nDelay time :ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image177.png"
            ]
          },
          {
            "title": "5.Unfriend (เลิกเป็นเพื่อน)",
            "content": "5.Unfriend (เลิกเป็นเพื่อน)\n\n![image](/images/image201.png)\n\nการตั้งค่าพื้นฐาน\n\nDelay time:ตั้งค่าการหน่วงเวลาระหว่างการลบแต่ละคน\n\nการตั้งค่าตัวเลือกการลบเพื่อน\n\n",
            "type": "markdown",
            "images": [
              "image201.png"
            ]
          },
          {
            "title": "สุ่มลบเพื่อน (Random friends)",
            "content": "สุ่มลบเพื่อน (Random friends)\n\nAmount:กำหนดจำนวนเพื่อนที่ต้องการลบ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ลบเพื่อนตามรหัส UID (Unfriend by UID)",
            "content": "ลบเพื่อนตามรหัส UID (Unfriend by UID)\n\nList of Uid to unfriend:ช่องสำหรับใส่รหัส UID ของเพื่อนที่ต้องการลบ\n\nการตั้งค่ารายชื่อที่ต้องการยกเว้น\n\nList of UID friends to keep:ช่องขนาดใหญ่ทางด้านขวา มีไว้สำหรับใส่รหัส UID ของเพื่อนที่ \"ต้องการเก็บไว้\" (ห้ามลบเด็ดขาด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "6.Add friends vs group members (เพิ่มเพื่อนในสมาชิกกลุ่ม)",
            "content": "6.Add friends vs group members (เพิ่มเพื่อนในสมาชิกกลุ่ม)\n\n![image](/images/image399.png)\n\nNumber friends :จำนวนเพื่อน\n\nBreak :ระยะเวลาหยุดพัก\n\nList of group Ids :รายการ ID กลุ่ม\n\n",
            "type": "markdown",
            "images": [
              "image399.png"
            ]
          },
          {
            "title": "7.Join groups by keyword (เข้าร่วมกลุ่มตามคำสำคัญ)",
            "content": "7.Join groups by keyword (เข้าร่วมกลุ่มตามคำสำคัญ)\n\n![image](/images/image93.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber groups:กำหนดจำนวนกลุ่มที่ต้องการให้ระบบเข้าร่วม\n\nDelay time:กำหนดระยะเวลาการรอ ระหว่างการดำเนินการแต่ละครั้ง\n\nการตั้งค่าการจัดการคำค้นหา\n\nList of keywords:ช่องสำหรับใส่คำค้นหาที่ต้องการ\n\nใส่คำค้นหา 1 คำต่อ 1 บรรทัด\n\nสามารถใช้รูปแบบการปั่นข้อความ (Spin content) ได้ เช่น{คำที่1|คำที่2|คำที่3}เพื่อให้ระบบสุ่มเลือกคำมาใช้งาน\n\nการตั้งค่าการตอบคำถามอัตโนมัติ\n\nAuto answer questions:ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบตอบคำถามโดยอัตโนมัติ\n\nList of answers:ช่องสำหรับใส่คำตอบที่เตรียมไว้\n\nใส่ 1 คำตอบต่อ 1 บรรทัด\n\nรองรับการใช้งานรูปแบบ Spin content{a|b|c}เช่นเดียวกับคำค้นหา เพื่อให้คำตอบมีความหลากหลาย\n\n",
            "type": "markdown",
            "images": [
              "image93.png"
            ]
          },
          {
            "title": "8.Join groups by ID",
            "content": "8.Join groups by ID\n\n![image](/images/image640.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nNumber groups:กำหนดจำนวนกลุ่มที่ต้องการเข้าร่วม\n\nDelay time:ระยะเวลาหน่วง ระหว่างการส่งคำขอเข้าร่วมแต่ละกลุ่ม\n\nการตั้งค่าการจัดการ ID กลุ่ม\n\nList of Id groups to join:ช่องสำหรับใส่ ID หรือ UID ของกลุ่มที่ต้องการเข้าร่วม\n\nกฎการกรอก: ใส่ 1 ID ต่อ 1 บรรทัด (Each Uid 1 line)\n\nAuto delete Id group that sent a join request:หากติ๊กถูกที่ช่องนี้ ระบบจะลบ ID กลุ่มออกจากรายการโดยอัตโนมัติหลังจากส่งคำขอเข้าร่วมสำเร็จ เพื่อป้องกันการส่งซ้ำ\n\nการตั้งค่าระบบตอบคำถามอัตโนมัติ\n\nAuto answer questions:ติ๊กถูกที่หน้าช่องนี้ หากกลุ่มที่คุณจะเข้าร่วมมีการตั้งคำถามก่อนเข้า\n\nList of answers:ช่องสำหรับใส่คำตอบล่วงหน้า\n\nกฎการกรอก: ใส่ 1 คำตอบ ต่อ 1 บรรทัด (Each content 1 line) หากมีหลายคำถาม ระบบจะดึงคำตอบจากรายการนี้ไปตอบตามลำดับ\n\n",
            "type": "markdown",
            "images": [
              "image640.png"
            ]
          },
          {
            "title": "9.Join suggestion group (เข้าร่วมกลุ่มที่แนะนำ)",
            "content": "9.Join suggestion group (เข้าร่วมกลุ่มที่แนะนำ)\n\n![image](/images/image362.png)\n\nการตั้งค่าปริมาณและระยะเวลา\n\nNumber groups:ตั้งค่าจำนวนกลุ่มที่ต้องการเข้าร่วม\n\nDelay time:ตั้งค่าระยะเวลารอคอย ระหว่างการเข้ากลุ่มแต่ละกลุ่ม\n\nการตั้งค่าการตอบคำถามอัตโนมัติ\n\nAuto answer questions:ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบตอบคำถามก่อนเข้ากลุ่มโดยอัตโนมัติ\n\nList of answers:ช่องสำหรับกรอกคำตอบที่เตรียมไว้\n\nเงื่อนไขการกรอก: ให้ใส่คำตอบ 1 บรรทัด ต่อ 1 ข้อความ (Each content 1 line)\n\n",
            "type": "markdown",
            "images": [
              "image362.png"
            ]
          },
          {
            "title": "10.Leave group (ออกจากกลุ่ม)",
            "content": "10.Leave group (ออกจากกลุ่ม)\n\n![image](/images/image743.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber groups:กำหนดจำนวนกลุ่มที่ต้องการให้ออก\n\nDelay time:ระยะเวลาหน่วง ระหว่างการออกจากแต่ละกลุ่ม\n\nการตั้งค่าตัวเลือกรูปแบบการออกจากกลุ่ม\n\nRandom group list:ระบบจะสุ่มเลือกกลุ่มที่จะออกจากรายชื่อกลุ่มทั้งหมดที่มีอยู่\n\nLeave group with conditions:ออกจากกลุ่มตามเงื่อนไขที่กำหนด\n\nLeave group moderating posts: ออกจากกลุ่มที่เราต้องรอการอนุมัติโพสต์ (Admin ตรวจสอบโพสต์)\n\nNumber of members is less: ออกจากกลุ่มที่มีจำนวนสมาชิกน้อยกว่าค่าที่ระบุ\n\nGroup name contains keywords: ออกจากกลุ่มที่ชื่อกลุ่มมีคำค้นหา (Keywords) ที่เรากำหนด\n\nใส่คำที่ต้องการในช่อง List of keywords (1 คำต่อ 1 บรรทัด)\n\nการตั้งค่ารายชื่อกลุ่มที่ไม่ต้องการออก\n\nList of ID groups to keep:ใส่ ID ของกลุ่ม ที่คุณต้องการเก็บไว้ (ไม่ให้ออกจากกลุ่มเหล่านี้เด็ดขาด) แม้ว่ากลุ่มนั้นจะตรงกับเงื่อนไขการออกก็ตาม\n\n",
            "type": "markdown",
            "images": [
              "image743.png"
            ]
          },
          {
            "title": "11.Create group (สร้างกลุ่ม)",
            "content": "11.Create group (สร้างกลุ่ม)\n\n![image](/images/image558.png)\n\nAmount groups :จำนวนกลุ่ม\n\nGroup name :ชื่อกลุ่ม\n\n",
            "type": "markdown",
            "images": [
              "image558.png"
            ]
          },
          {
            "title": "12.Create page (สร้างเพจ)",
            "content": "12.Create page (สร้างเพจ)\n\n![image](/images/image252.png)\n\nการตั้งค่าพื้นฐาน\n\nAmount pages:กำหนดจำนวนเพจที่ต้องการสร้าง\n\nDelay time (s):กำหนดระยะเวลาหน่วง ระหว่างการสร้างแต่ละเพจ\n\nการตั้งค่ารายละเอียดข้อมูลเพจ\n\nPage name (1):ช่องสำหรับกรอกชื่อเพจที��ต้อ��การสร้าง โดยสามารถระบุชื่อที่ต้องการลงในช่องข้อความ\n\nPage category (1):ช่องสำหรับกำหนดหมวดหมู่ของเพจ เพื่อให้ตรงกับวัตถุประสงค์การใช้งาน\n\nInteractive\n\n",
            "type": "markdown",
            "images": [
              "image252.png"
            ]
          },
          {
            "title": "1.Read notification (อ่านข้อความแจ้งเตือน)",
            "content": "1.Read notification (อ่านข้อความแจ้งเตือน)\n\n![image](/images/image627.png)\n\nQuantity :คือ จำนวน ข้อความแจ้งเตือนที่ต้องการให้อ่านDelay time :คือ ระยะเวลาดีเลย์ของกา��อ่านแจ้งเตือนแต่ละอัน\n\n",
            "type": "markdown",
            "images": [
              "image627.png"
            ]
          },
          {
            "title": "2. Watch Reels (ดูวีดีโอสั้น)",
            "content": "2. Watch Reels (ดูวีดีโอสั้น)\n\n![image](/images/image328.png)\n\nการตั้งค่าพื้นฐาน\n\nTime watch:กำหนดช่วงระยะเวล���ในกา���รับ���มวิดีโอแต่ละคลิป\n\nการตั้งค่าปฏิสัมพันธ์\n\nLike:กดถูกใจวิดีโออัตโนมัติ\n\nShare Wall:แชร์วิดีโอไปยังหน้าโปรไฟล์ (Wall) ของตนเอง\n\nComment:แสดงความคิดเห็นใต้คลิปวิดีโอ (หากเลือกข้อนี้ จะต้องตั้งค่าในส่วนถัดไป)\n\nการตั้งค่าการจัดการความคิดเห็น\n\nList Comments:กรอกข้อความที่ต้องการใช้คอมเมนต์\n\nOption:ตัวเลือกรูปแบบของเนื้อหา\n\nปุ่ม [?]: ใช้สำหรับดูคำแนะนำเพิ่มเติมเกี่ยวกับวิธีการพิมพ์ข้อความหรือการใช้สัญลักษณ์พิเศษ\n\n",
            "type": "markdown",
            "images": [
              "image328.png"
            ]
          },
          {
            "title": "3.Watch Story (ดูสตอรี่)",
            "content": "3.Watch Story (ดูสตอรี่)\n\n![image](/images/image422.png)\n\nTime watch :ระยะเวลาในการดู\n\nExpress felings :แสดงความรู้สึก\n\nAuto comment :แสดงความคิดเห็น\n\nList Comments :รายการความคิดเห็น\n\n",
            "type": "markdown",
            "images": [
              "image422.png"
            ]
          },
          {
            "title": "4.Watch video (ดูวีดีโอ)",
            "content": "4.Watch video (ดูวีดีโอ)\n\n![image](/images/image353.png)\n\nการตั้งค่าเวลา\n\nTime watch:กำหนดช่วงเวลาในการรับชมวิดีโอ\n\nการโต้ตอบอัตโนมัติ\n\nLike:กดถูกใจวิดีโอ\n\nShare Wall:แชร์วิดีโอไปยังหน้าวอลล์ (Timeline)\n\nComment:แสดงความคิดเห็นใต้คลิปวิดีโอ\n\nหมายเหตุ:ช่องตัวเลขด้านหลัง Like, Share, และ Comment (เช่น 1 > 3) ใช้สำหรับกำหนด จำนวนครั้ง หรือ ช่วงการสุ่ม ในการทำกิจกรรมนั้นๆ\n\nการตั้งค่ารายละเอียดความคิดเห็น\n\nList Comments:ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nOption:เมนูเลือกรูปแบบเนื้อหา\n\nปุ่ม ?: ปุ่มช่วยเหลือสำหรับดูคำแนะนำเพิ่มเติมในการใส่ข้อความ\n\n",
            "type": "markdown",
            "images": [
              "image353.png"
            ]
          },
          {
            "title": "5. Watch Videos by keywords (ดูวีดีโอ ตามคีย์เวิร์ด )",
            "content": "5. Watch Videos by keywords (ดูวีดีโอ ตามคีย์เวิร์ด )\n\n![image](/images/image512.png)\n\nการตั้งค่าพื้นฐาน\n\nKeywords:ช่องสำหรับใส่คำค้นหาที่ต้องการให้ระบบไปค้นหาวิดีโอ\n\nการตั้งค่าเวลาในการรับชม\n\nTime watch:กำหนดช่วงเวลาเป็น วินาที\n\nการตั้งค่าการโต้ตอบ\n\nLike:กดถูกใจวิดีโอ\n\nShare Wall:แชร์วิดีโอไปยังหน้าโปรไฟล์หรือวอลล์\n\nComment:แสดงความคิดเห็น\n\nหมายเหตุ: ตัวเลขด้านหลัง (เช่น 1 > 3) คือการสุ่มจำนวนครั้งหรือเงื่อนไขการทำงานในแต่ละรอบ\n\nการตั้งค่าการจัดการความคิดเห็น\n\nList Comments:ช่องสำหรับพิมพ์ข้อความที่ต้องการใช้คอมเมนต์\n\nOption:เลือกรูปแบบของเนื้อหา\n\n6Interact Newsfeed (โต้ตอบฟีดข่าว)\n\n![image](/images/image98.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nTime watch:ตั้งค่าช่วงเวลาที่ต้องการให้โปรแกรมหยุดดู (Watch) ในแต่ละโพสต์\n\nการตั้งค่าการเลือกประเภทการปฏิสัมพันธ์\n\nLike:ติ๊กเพื่อสั่งให้กดถูกใจโพสต์ (ระบุจำนวนครั้งที่ต้องการสุ่มกด)\n\nShare Wall:ติ๊กเพื่อสั่งให้แชร์โพสต์ไปยังหน้าวอลล์ของตัวเอง (ระบุจำนวนครั้งที่ต้องการสุ่มแชร์)\n\nComment:ติ๊กเพื่อสั่งให้แสดงความคิดเห็นใต้โพสต์ (ระบุจำนวนครั้งที่ต้องการสุ่มคอมเมนต์)\n\nการจัดการข้อความความคิดเห็น\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการให้โปรแกรมนำไปคอมเมนต์\n\nOption:เมนูเลือกรูปแบบการดึงข้อความไปใช้\n\n7Interact Friends (โต้ตอบกับเพื่อน)\n\n![image](/images/image463.png)\n\nการตั้งค่าข้อมูลพื้นฐาน\n\nNumber friends:กำหนดจำนวนเพื่อนที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์\n\nการตั้งค่ารายละเอียดการปฏิสัมพันธ์\n\nTime watch:ระยะเวลาที่ระบบจะ \"เปิดดู\" หน้าของเพื่อน\n\nLike:ติ๊กถูกเพื่อสั่งให้ระบบกด Like โพสต์ของเพื่อน โดยกำหนดจำนวนครั้งเป็นช่วง\n\nShare Wall:ติ๊กถูกเพื่อสั่งให้ระบบแชร์โพสต์ไปยังหน้า Wall ของเรา โดยกำหนดจำนวนครั้งเป็นช่วง\n\nComment:ติ๊กถูกเพื่อสั่งให้ระบบพิมพ์ข้อความแสดงความคิดเห็น โดยกำหนดจำนวนครั้งเป็นช่วง\n\nการจัดการข้อความคอมเมนต์\n\nList Comments:พื้นที่สีเทาขนาดใหญ่สำหรับใส่เนื้อหาคอมเมนต์ที่ต้องการให้ระบบสุ่มไปใช้งาน\n\nOption:รูปแบบการอ่านค่าข้อความ\n\n",
            "type": "markdown",
            "images": [
              "image512.png",
              "image98.png",
              "image463.png"
            ]
          },
          {
            "title": "8.Interact Groups(การดูและการมีส่วนร่วมกับกลุ่ม)",
            "content": "8.Interact Groups(การดูและการมีส่วนร่วมกับกลุ่ม)\n\n![image](/images/image21.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber groups:กำหนดจำนวนกลุ่มที่ต้องการให้ระบบเข้าไปดำเนินการ\n\nการตั้งค่าการปฏิสัมพันธ์\n\nTime watch:ระยะเวลาในการรับชมหรืออยู่ในกลุ่ม\n\nLike:ติกถูกเพื่อสั่งให้กดไลก์ และกำหนดจำนวนครั้ง\n\nShare Wall:ติกถูกเพื่อสั่งให้แชร์โพสต์ไปยังหน้าวอลล์ (ไทม์ไลน์) และกำหนดจำนวนครั้ง\n\nComment:ติกถูกเพื่อสั่งให้แสดงความคิดเห็น และกำหนดจำนวนครั้ง\n\nการตั้งค่าการจัดการข้อความความคิดเห็น\n\nList Comments (0):ช่องสำหรับใส่ข้อความที่ต้องการให้ระบบนำไปสุ่มใช้คอมเมนต์ (ใส่ 1 ข้อความต่อ 1 บรรทัด)\n\nOption:ตัวเลือกรูปแบบของเนื้อหา\n\nปุ่ม ? (Help):ปุ่มสำหรับดูคำอธิบายหรือคำแนะนำเพิ่มเติมเกี่ยวกับการใช้ฟีเจอร์คอมเมนต์\n\n9Interact Page (โต้ตอบเพจ)\n\n![image](/images/image17.png)\n\nการตั้งค่าการจัดการเป้าหมาย\n\nNumber pages:กำหนดจำนวนเพจที่ต้องการให้ระบบเข้าไปดำเนินการ\n\nList ID pages (0):ช่องว่างสำหรับใส่รายการ ID ของเพจที่ต้องการให้ระบบเข้าไปปฏิสัมพันธ์\n\nAuto delete Used Id Page:หากเลือกช่องนี้ ระบบจะลบ ID ของเพจทิ้งโดยอัตโนมัติหลังจากที่ทำงานเสร็จแล้ว\n\nการตั้งค่าการปฏิสัมพันธ์\n\nTime watch:กำหนดระยะเวลา ที่จะให้ระบบหยุดดูหรือแช่อยู่ในหน้าเพจนั้น ๆ\n\nLike:ติ๊กถูกเพื่อสั่งให้ระบบกด \"ถูกใจ\" (สามารถกำหนดจำนวนครั้งเป็นช่วงได้)\n\nShare Wall:ติ๊กถูกเพื่อสั่งให้ระบบกด \"แชร์\" ลงบนวอลล์ (สามารถกำหนดจำนวนครั้งเป็นช่วงได้)\n\nComment:ติ๊กถูกเพื่อสั่งให้ระบบทำการ \"คอมเมนต์\"\n\nList Comments (0): ช่องสำหรับระบุข้อความที่จะใช้คอมเมนต์\n\nOption: ตัวเลือกรูปแบบข้อความสำหรับการคอมเมนต์\n\n10.Interact Wall (ตอบโต้หน้าไทม์ไลน์)\n\n![image](/images/image12.png)\n\nการตั้งค่าการกำหนดข้อมูลพื้นฐาน\n\nTime watch:กำหนดช่วงเวลา ในการรับชมโพสต์หรือหน้าวอลล์\n\nการตั้งค่าการเลือกประเภทการโต้ตอบ\n\nLike:คลิกเพื่อเปิดการใช้งานการกดไลก์\n\nShare Wall:คลิกเพื่อเปิดการใช้งานการแชร์โพสต์ไปยังวอลล์\n\nComment:คลิกเพื่อเปิดการใช้งานการแสดงความคิดเห็น\n\nหมายเหตุ:สามารถเลือกเปิด-ปิดฟังก์ชันที่ต้องการได้โดยการทำเครื่องหมายถูกที่ช่องด้านหน้า และกำหนดจำนวนครั้งแบบสุ่ม (Min > Max)\n\n",
            "type": "markdown",
            "images": [
              "image21.png",
              "image17.png",
              "image12.png"
            ]
          },
          {
            "title": "การตั้งค่าการจัดการความคิดเห็น",
            "content": "การตั้งค่าการจัดการความคิดเห็น\n\nList Comments (0):ช่องสำหรับกรอกข้อความที่ต้องการให้ระบบนำไปคอมเมนต์ โดยตัวเลขในวงเล็บจะบอกจำนวนข้อความที่มีอยู่\n\nOption:เมนูสำหรับตั้งค่ารูปแบบข้อความ\n\nปุ่ม ?:ปุ่มช่วยเหลือหรือคำแนะนำเพิ่มเติมเกี่ยวกับการตั้งค่าคอมเมนต์\n\n11.Breaks (พัก)\n\n![image](/images/image573.png)\n\nDelay time (s): ระยะเวลา (วินาที)\n\n",
            "type": "markdown",
            "images": [
              "image573.png"
            ]
          }
        ],
        "originalProgramName": "MaxCloud & PhoneFarm"
      }
    ]
  },
  {
    "id": "maxcloudphone_suite",
    "name": "MaxCloudPhone",
    "categories": [
      {
        "id": "_______________maxcl_glp6v",
        "name": "วิธีตั้งค่าแอป MaxCloudPhone หลังจากใส่ Token",
        "sections": [
          {
            "title": "1. เริ่มต้นการตั้งค่าแอป",
            "content": "1. เริ่มต้นการตั้งค่าแอป\n\nหลังจากใส่ Token เสร็จแล้ว แอปจะพาคุณมายังหน้า ตั้งค่าแอป\n\nกดปุ่ม Start เพื่อเริ่มการตั้งค่า\n\n![image](/images/image686.png)\n\n",
            "type": "markdown",
            "images": [
              "image686.png"
            ]
          },
          {
            "title": "2.อนุญาตการเข้าถึง",
            "content": "2.อนุญาตการเข้าถึง\n\nให้กด อนุญาต\n\n![image](/images/image425.png)\n\n",
            "type": "markdown",
            "images": [
              "image425.png"
            ]
          },
          {
            "title": "3. แอปจะพาคุณไปยังหน้าตั้งค่าใหม่",
            "content": "3. แอปจะพาคุณไปยังหน้าตั้งค่าใหม่\n\nรอจนระบบพามายังหน้านี้\n\nให้กลับไปที่แอพ MaxCloudphone\n\n![image](/images/image24.png)\n\n",
            "type": "markdown",
            "images": [
              "image24.png"
            ]
          },
          {
            "title": "4.จากนั้นกดที่ MOBILE DATA",
            "content": "4.จากนั้นกดที่ MOBILE DATA\n\n![image](/images/image144.png)\n\nทำการตั้งค่า Device assistance app\n\n![image](/images/image153.png)\n\nเลือก MaxCloudPhone\n\n![image](/images/image477.png)\n\nกด OK\n\n![image](/images/image303.png)\n\n",
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
            "content": "5.ทำการตั้งค่าคีย์บอร์ด\n\nกดที่ KEYBOARD\n\n![image](/images/image308.png)\n\nเลือก Maxcloud เป็นคีย์บอร์ดหลัก\n\n![image](/images/image294.png)\n\n![image](/images/image435.png)\n\n✅ เสร็จสิ้นขั้นตอนการติดตั้ง หากหน้าจอการตั้งค่ามือถือของคุณไม่ตรงตามคู่มือนี้ กรุณาติดต่อ แอดมิน เพื่อสอบถามรายละเอียดเพิ่มเติม\n\n",
            "type": "markdown",
            "images": [
              "image308.png",
              "image294.png",
              "image435.png"
            ]
          }
        ],
        "originalProgramName": "MaxCloud & PhoneFarm"
      }
    ]
  },
  {
    "id": "maxtwitter_suite",
    "name": "Max Twitter Pro",
    "categories": [
      {
        "id": "1____________________4qzuc",
        "name": "1.วิธีการนำบัญชีเข้าสู่โปรแกรม MaxTwitterPro",
        "sections": [
          {
            "title": "อธิบายรายละเอียดการนำบัญชีเข้าสู่โปรแกรม MaxTwitter",
            "content": "อธิบายรายละเอียดการนำบัญชีเข้าสู่โปรแกรม MaxTwitter\n\n1 การนำบัญชีTwitterเข้าโปรแกรม MaxTwitter\n\n![image](/images/image495.png)\n\n",
            "type": "markdown",
            "images": [
              "image495.png"
            ]
          },
          {
            "title": "ให้ทำการสร้างไฟล์ขึ้นมาโดยใส่ชื่อตามที่ต้องการได้เลย จากนั้นกดAdd",
            "content": "ให้ทำการสร้างไฟล์ขึ้นมาโดยใส่ชื่อตามที่ต้องการได้เลย จากนั้นกดAdd\n\n![image](/images/image68.png)\n\nสำคัญต้องใส่ตามแพทเทิร์นตามที่เราเลือกไว้ User จะใส่เป็นเบอร์หรือเมลล์ก็ได้ แล้วคั่นด้วยเครื่อง “ | ” เสมอ แล้วกดAddได้เลย แล้วจะขึ้นImport Accounts successก็กด OK\n\n![image](/images/image166.png)\n\n![image](/images/image250.png)\n\nเป็นอันเสร็จสิ้นขั้นตอนการนำบัญชี Twitter เข้าระบบ\n\n",
            "type": "markdown",
            "images": [
              "image68.png",
              "image166.png",
              "image250.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "3____________________e2l3z",
        "name": "3.อธิบายเมนูฟังก์ชั่นการทำงาน Interactive (Max Twitter Pro)",
        "sections": [
          {
            "title": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น",
            "content": "อธิบายแต่ละฟังก์ชั่นโดยละเอียดโดยแยกแต่ละกลุ่มฟังก์ชั่น\n\nInteract\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1.Interact Newsfeed (การมีปฏิสัมพันธ์กับ ฟีดข่าว หน้าฟีดข่าว)",
            "content": "1.Interact Newsfeed (การมีปฏิสัมพันธ์กับ ฟีดข่าว หน้าฟีดข่าว)\n\n![image](/images/image295.png)\n\nการตั้งค่าเวลา\n\nSurfing time:ตั้งค่าเวลาที่จะใช้ในการเลื่อนดูฟีด\n\nTime interval between operations:เวลาระหว่างการสลับไปทำกิจกรรมถัดไป\n\nTime spent viewing tweets:ระยะเวลาที่หยุดค้างเพื่อ \"อ่าน\" แต่ละโพสต์\n\nการตอบสนองหลัก\n\nRelease emotions:การกดแสดงความรู้สึก (Like/Heart) สามารถระบุจำนวนครั้งที่ต้องการสุ่มทำได้\n\nRetweet:การรีทวีตโพสต์ ระบุจำนวนครั้งที่ต้องการสุ่ม\n\nComment:การแสดงความคิดเห็น\n\nList Comments:ใส่ข้อความที่ต้องการสุ่มตอบ (1 บรรทัดต่อ 1 ข้อความ)\n\nเทคนิค:สามารถใช้รูปแบบ{a|b|c}เพื่อสุ่มคำในประโยคได้\n\nการตั้งค่าขั้นสูง\n\nTag your friends:แท็กเพื่อนในโพสต์\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็ก\n\nList of users: ใส่รายชื่อ Username ที่ต้องการแท็ก (1 บรรทัดต่อ 1 ชื่อ)\n\nImage:การแนบรูปภาพในการตอบโต้\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: ระบุจำนวนรูปที่จะสุ่มใช้\n\nAdd Hashtag:การเพิ่มแฮชแท็ก\n\nList of hashtags: ใส่รายการ #Hashtag ที่ต้องการ (1 บรรทัดต่อ 1 แท็ก)\n\nการจัดเก็บข้อมูล\n\nExport the link of the interactive post to a file:หากต้องการเก็บประวัติว่าเราไปตอบโต้ที่ลิงก์ไหนบ้าง ให้ติ๊กช่องนี้แล้วระบุ File path เพื่อบันทึกข้อมูลออกมา\n\n",
            "type": "markdown",
            "images": [
              "image295.png"
            ]
          },
          {
            "title": "2.Interact with Followers (ตอบโต้กับผู้ติดตาม)",
            "content": "2.Interact with Followers (ตอบโต้กับผู้ติดตาม)\n\n![image](/images/image580.png)\n\nการตั้งค่าพื้นฐาน\n\nAmount:จำนวนผู้ใช้ (User) ที่ต้องการให้ระบบเข้าไปปฏิสัมพันธ์ด้วย\n\nการตั้งค่าพฤติกรรมการเข้าชม (Interactive Configuration/User)\n\nSurfing time:ระยะเวลาในการเลื่อนดูหน้าฟีด\n\nTime interval between operations:ระยะเวลาพักระหว่างแต่ละการกระทำ\n\nการตั้งค่าการปฏิสัมพันธ์\n\nRelease emotions:การกดแสดงความรู้สึก (Like, Love ฯลฯ) สามารถระบุจำนวนครั้งต่อผู้ใช้ได้\n\nRetweet:การแชร์โพสต์ต่อ (ระบุจำนวนครั้ง)\n\nComment:การแสดงความคิดเห็น\n\nใส่ข้อความในช่อง List Comments (1 บรรทัดต่อ 1 ข้อความ)\n\nรองรับระบบ Spin content สุ่มคำไม่ให้ซ้ำกัน เช่น{a|b|c}\n\nTag your friends:แท็กเพื่อนในโพสต์\n\nAmount:กำหนดจำนวน \"ผู้ใช้งาน\" (User) ที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์ด้วย\n\nใส่ชื่อผู้ใช้ (Username) ในช่อง List of users\n\nImage:การแนบรูปภาพ\n\nImage folder: เลือกโฟลเดอร์รูปภาพ\n\nNumber of photos: ระบุจำนวนรูปที่จะใช้\n\nAdd Hashtag:การใส่แฮชแท็ก\n\nList of hashtags: ใส่รายการแฮชแท็กที่ต้องการ\n\n",
            "type": "markdown",
            "images": [
              "image580.png"
            ]
          },
          {
            "title": "3.Interact with Following (ตอบโต้กับผู้กำลังติดตาม)",
            "content": "3.Interact with Following (ตอบโต้กับผู้กำลังติดตาม)\n\n![image](/images/image594.png)\n\nการตั้งค่าพื้นฐาน\n\nAmount:กำหนดจำนวนผู้ใช้ที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์ด้วย\n\nการกำหนดเวลา\n\nSurfing time:ระยะเวลาในการรับชมเนื้อหา\n\nTime interval between operations:ระยะเวลาพักระหว่างการทำงานแต่ละขั้นตอน\n\nกิจกรรมการปฏิสัมพันธ์\n\nRelease emotions:การกดแสดงความรู้สึก (Like/Heart) สามารถระบุจำนวนครั้งได้\n\nComment:การคอมเมนต์ใต้โพสต์\n\nList Comments:ใส่ข้อความคอมเมนต์ (1 บรรทัดต่อ 1 ข้อความ)\n\nSpin content:รองรับรูปแบบ{a|b|c}เพื่อสุ่มคำพูด\n\nRetweet:การแชร์โพสต์ต่อ\n\nTag your friends:การแท็กเพื่อนในโพสต์\n\nList of users:ใส่รายชื่อ Username ที่ต้องการแท็ก (1 ชื่อต่อ 1 บรรทัด)\n\nImage:การแนบรูปภาพ\n\nImage folder:เลือกโฟลเดอร์ที่เก็บรูปภาพ\n\nNumber of photos:จำนวนรูปที่ต้องการใช้\n\nAdd Hashtag:การเพิ่มแฮชแท็ก\n\nList of hashtags:ใส่รายการแฮชแท็กที่ต้องการ (1 แฮชแท็กต่อ 1 บรรทัด)\n\nการจัดการข้อมูล\n\nExport the link of the interactive post to a file:หากติ๊กถูก ระบบจะบันทึก Link ของโพสต์ที่เราไปมีปฏิสัมพันธ์ด้วยลงในไฟล์ที่กำหนด\n\nFile path:เลือกที่อยู่ของไฟล์ที่ต้องการบันทึกข้อมูล\n\n",
            "type": "markdown",
            "images": [
              "image594.png"
            ]
          },
          {
            "title": "4.User-specified interaction (การโต้ตอบที่ผู้ใช้ระบุ)",
            "content": "4.User-specified interaction (การโต้ตอบที่ผู้ใช้ระบุ)\n\n![image](/images/image72.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber of Users:กำหนดจำนวนผู้ใช้เป้าหมาย\n\nPosts/User:จำนวนโพสต์ที่จะเข้าไปจัดการต่อ 1 ผู้ใช้\n\nWaiting time:ระยะเวลารอคอยระหว่างแต่ละโพสต์\n\nTime interval between actions:ระยะห่างระหว่างช่วงการทำงานแต่ละรอบ\n\nEnter the list of Users:ช่องสำหรับใส่รายชื่อ Username หรือ Link ของเป้าหมาย (1 รายการต่อ 1 บรรทัด)\n\nDelete used users:หากติ๊กถูก ระบบจะลบรายชื่อเป้าหมายที่ดำเนินการเสร็จแล้วออกจากรายการทันที\n\nการตั้งค่าปฏิสัมพันธ์\n\nRelease emotions:ติ๊กเพื่อกดแสดงความรู้สึก (Like, Love ฯลฯ)\n\nRetweet:ติ๊กเพื่อให้ระบบกดรีทวีต (สำหรับ X/Twitter)\n\nComment:ติ๊กเพื่อคอมเมนต์\n\nใส่ข้อความในช่อง List Comments (รองรับระบบ Spin content เช่น{ข้อความ1|ข้อความ2}เพื่อสุ่มคำพูด)\n\nNon-duplicate comment: ป้องกันการใช้คอมเมนต์ซ้ำ\n\nImage:ติ๊กหากต้องการแนบรูปภาพในคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูป\n\nNumber of photos: เลือกจำนวนรูปที่จะสุ่มใช้\n\nExport the link of the interactive post to a file:ส่งออกลิงก์ของโพสต์ที่เข้าไปมีปฏิสัมพันธ์แล้วบันทึกลงไฟล์\n\nการเพิ่มแท็กและแฮชแท็ก\n\nTag your friends:ติ๊กเพื่อแท็กเพื่อนในคอมเมนต์\n\nAmount: กำหนดจำนวนคน\n\nList of users: ใส่รายชื่อเพื่อนในช่องด้านล่าง\n\nAdd Hashtag:ติ๊กเพื่อใส่แฮชแท็กในคอมเมนต์\n\nAmount: กำหนดจำนวนแฮชแท็ก\n\nList of hastags: ใส่รายการแฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แท็ก)\n\nพฤติกรรมการเลื่อนดู\n\nBrowse comments:จำลองการเลื่อนอ่านคอมเมนต์\n\nScrolls: จำนวนครั้งที่จะเลื่อน (Turn)\n\nDelay: ระยะเวลาที่ค้างไว้ในแต่ละการเลื่อน\n\nSurf the ads below in the comments:จำลองการกดดูหรือเลื่อนผ่านโฆษณาในช่องคอมเมนต์\n\nNumber of ads: กำหนดจำนวนโฆษณา\n\nTime viewing ads: เวลาที่ดู\n\nDelay: ระยะเวลารอ\n\n",
            "type": "markdown",
            "images": [
              "image72.png"
            ]
          },
          {
            "title": "5.Interact By Hashtag (โต้ตอบด้วยแฮชแท็ก)",
            "content": "5.Interact By Hashtag (โต้ตอบด้วยแฮชแท็ก)\n\n![image](/images/image448.png)\n\nการตั้งค่าพื้นฐาน\n\nPosts/hashtags:กำหนดจำนวนโพสต์ที่จะเข้าไปโต้ตอบต่อ 1 แฮชแท็ก\n\nWaiting time:ระยะเวลารอระหว่างแต่ละการกระทำ\n\nรายการแฮชแท็ก\n\nEnter a list of Hashtags:ช่องสำหรับใส่แฮชแท็กที่ต้องการให้ระบบไปค้นหา\n\nการโต้ตอบ\n\nRelease emotions:กดแสดงความรู้สึก (Like/Love/ฯลฯ)\n\nRetweet:กดรีทวีตหรือแชร์โพสต์\n\nComment:พิมพ์ข้อความตอบกลับ\n\nList Comments: รายการคอมเมนต์ที่ต้องการ\n\nรองรับระบบ Spin content{a|b|c}เพื่อสุ่มข้อความไม่ให้ซ้ำกัน\n\nImage:แนบรูปภาพไปกับการโต้ตอบ\n\nImage folder: เลือกโฟลเดอร์รูปภาพ\n\nNumber of photos: ระบุจำนวนภาพที่ต้องการใช้\n\nExport the link of the interactive post to a file:ส่งออก (Export) ลิงก์ของโพสต์ที่ระบบไปโต้ตอบแล้วเก็บไว้ในไฟล์\n\nการจัดการแท็กและแฮชแท็กเพิ่มเติม\n\nTag your friends:เลือกแท็กเพื่อนในโพสต์\n\nAmount: กำหนดจำนวนคนที่จะแท็ก\n\nLis of users: ใส่รายชื่อ Username ที่ต้องการแท็ก (1 ชื่อต่อ 1 บรรทัด)\n\nAdd Hashtag:เพิ่มแฮชแท็กอื่นๆ ลงไปในคอมเมนต์หรือโพสต์เพิ่มเติม (1 แฮชแท็กต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": [
              "image448.png"
            ]
          },
          {
            "title": "6.Interraction Designated Articles (ตอบโต้กับโพสต์ที่กำหนด)",
            "content": "6.Interraction Designated Articles (ตอบโต้กับโพสต์ที่กำหนด)\n\n![image](/images/image385.png)\n\nการตั้งค่าพื้นฐาน\n\nLink tweet:วางลิงก์ของทวีต (X Post) ที่ต้องการให้ระบบเข้าไปทำงาน\n\nNumber of links per account:จำนวนลิงก์ที่ต้องการให้แต่ละบัญชีเข้าไปจัดการ\n\nPost viewing time:ระยะเวลาในการหยุดดูโพสต์\n\nCác tài khoản không dùng trùng link nhau:ตั้งค่าไม่ให้แต่ละบัญชีใช้ลิงก์ซ้ำกัน\n\nการโต้ตอบหลัก\n\nRelease emotions:กดแสดงความรู้สึก\n\nRetweet:กดรีทวีตโพสต์\n\nBookmark:กดบันทึกโพสต์ไว้ในบุ๊กมาร์ก\n\nComment:ตั้งค่าการคอมเมนต์\n\nList Comments: ใส่ข้อความที่ต้องการ (1 บรรทัดต่อ 1 ข้อความ) รองรับการสุ่มคำแบบ{a|b|c}\n\nRandom Comment: สุ่มข้อความคอมเมนต์\n\nDo not reuse comments: ไม่ใช้ข้อความซ้ำ\n\nFile comment: ดึงข้อความคอมเมนต์จากไฟล์ข้างนอก\n\nการดึงดูดความสนใจเพิ่มเติม\n\nTag your friends:แท็กเพื่อนในคอมเมนต์\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็ก\n\nList of users: ใส่รายชื่อผู้ใช้\n\nTag in 1 line: แท็กในบรรทัดเดียว\n\nTag in multiple lines: แท็กแยกบรรทัด\n\nAdd Hashtag:ใส่แฮชแท็กที่ต้องการ (1 แฮชแท็กต่อ 1 บรรทัด)\n\nการจัดการสื่อ\n\nNormal photo:อัปโหลดรูปภาพจากโฟลเดอร์ที่กำหนด\n\nImage folder: โฟลเดอร์รูปภาพที่กำหนด\n\nNumber of photos: จำนวนภาพที่ต้องการใช้\n\nGifs:ค้นหาและใช้ GIF ตามหัวข้อที่ระบุ\n\nDo not post photos:ไม่ต้องโพสต์รูปภาพ\n\nการจำลองพฤติกรรมการอ่าน\n\nBrowse comments:สั่งให้เลื่อนดูคอมเมนต์\n\nScrolls: จำนวนรอบการเลื่อน\n\nDelay: ระยะเวลารอระหว่างการเลื่อนแต่ละครั้ง\n\nSurf the ads below in the comments:สั่งให้คลิกดูหรือเลื่อนดูโฆษณาที่อยู่ใต้คอมเมนต์\n\nNumber of ads: จำนวนโฆษณาที่ต้องการดู\n\nTime viewing ads: ระยะเวลาในการดูแต่ละโฆษณา\n\nDelay: ระยะเวลาในการรอก่อนที่จะดูโฆษณาถัดไป\n\nDon't scroll through comments:ไม่ต้องเลื่อนดูคอมเมนต์ใดๆ\n\nClick to see the ad link of the article:คลิกดูลิงก์โฆษณาที่มากับบทความ\n\nฟังก์ชันเสริมและการติดตาม\n\nFollow the tweeter:กดติดตามเจ้าของทวีตนั้นทันที\n\nBấm xem video youtube nếu có:หากในทวีตมีลิงก์ YouTube ให้กดเข้าไปดู\n\nLướt trang user trước khi follow:ให้เลื่อนดูหน้าโปรไฟล์ของผู้ใช้นั้นก่อนจะกดติดตาม\n\nExport comment link to file:บันทึกลิงก์ที่คอมเมนต์สำเร็จลงในไฟล์\n\n",
            "type": "markdown",
            "images": [
              "image385.png"
            ]
          },
          {
            "title": "7.Interaction specified commnet (ตอบโต้กับความคิดเห็นที่ระบุ)",
            "content": "7.Interaction specified commnet (ตอบโต้กับความคิดเห็นที่ระบุ)\n\n![image](/images/image650.png)\n\nการตั้งค่าพื้นฐาน\n\nLink comment:ช่องสำหรับวาง URL หรือลิงก์ของคอมเมนต์ที่คุณต้องการให้ระบบเข้าไปโต้ตอบ\n\nComment viewing time:กำหนดระยะเวลาที่ระบบจะ \"เปิดดู\" คอมเมนต์นั้นๆ\n\nการจัดการเนื้อหาคอมเมนต์\n\nRelease emotions:ติ๊กถูกเพื่อสั่งให้ระบบกดแสดงความรู้สึก\n\nComment:ติ๊กถูกเพื่อเปิดใช้งานการเขียนข้อความตอบกลับ\n\nList Comments:ช่องสำหรับใส่ข้อความที่ต้องการใช้ตอบกลับ\n\nเงื่อนไข:ใส่ 1 ข้อความต่อ 1 บรรทัด\n\nSpin Content:สามารถใช้รูปแบบ{a|b|c}เพื่อให้ระบบสุ่มเลือกคำมาผสมกัน ป้องกันการถูกตรวจจับว่าเป็นสแปม\n\nDelete used comment content:ลบข้อความที่ใช้ไปแล้วออกจากรายการอัตโนมัติ\n\nการปฏิสัมพันธ์เพิ่มเติม\n\nRetweet:ติ๊กถูกหากต้องการให้ระบบทำการรีทวีต\n\nTag your friends:ติ๊กถูกเพื่อระบุตัวตนเพื่อนในคอมเมนต์\n\nAmount: กำหนดจำนวนเพื่อนที่จะแท็ก\n\nList of users: ช่องสำหรับใส่รายชื่อ Username ของเพื่อนที่ต้องการแท็ก (1 รายชื่อต่อ 1 บรรทัด)\n\nการจัดการแฮชแท็กและรูปภาพ\n\nAdd Hashtag:ติ๊กถูกเพื่อใส่แฮชแท็กเพิ่มเติมในคอมเมนต์\n\nList of hashtags: ใส่รายการแฮชแท็กที่ต้องการ (1 แฮชแท็กต่อ 1 บรรทัด)\n\nImage:ติ๊กถูกหากต้องการแนบรูปภาพไปกับคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: กำหนดจำนวนรูปที่จะอัปโหลดต่อหนึ่งครั้ง\n\nการส่งออกข้อมูล\n\nExport comment link to file:ติ๊กถูกเพื่อบันทึกประวัติลิงก์ของคอมเมนต์ที่ได้ดำเนินการแล้วลงในไฟล์ภายนอก\n\nFile path: เลือกที่อยู่ไฟล์ (.txt) ที่ต้องการบันทึกข้อมูล\n\n",
            "type": "markdown",
            "images": [
              "image650.png"
            ]
          },
          {
            "title": "8.Interaction by keywords (ตอบโต้ด้วยคีย์เวิร์ด)",
            "content": "8.Interaction by keywords (ตอบโต้ด้วยคีย์เวิร์ด)\n\n![image](/images/image126.png)\n\nการตั้งค่าพื้นฐาน\n\nPost/keywords:จำนวนโพสต์ที่จะดำเนินการต่อหนึ่งคำค้นหา\n\nWaiting time:ระยะเวลาพักรอระหว่างการทำงาน\n\nPost viewing time:เวลาที่ใช้ในการ \"ดู\" โพสต์\n\nAction spacing:ระยะห่างระหว่างแต่ละการกระทำ\n\nNumber of keywords:จำนวนคำค้นหาที่จะใช้จากรายการด้านล่าง\n\nPost type:เลือกว่าจะไปที่โพสต์ยอดนิยม (Top) หรือโพสต์ใหม่ล่าสุด (New)\n\nEnter keyword list:ช่องสำหรับใส่คำค้นหา (Keyword) ที่ต้องการให้ระบบไปค้นหา (1 บรรทัดต่อ 1 คำ)\n\nการตั้งค่าการโต้ตอบ\n\nRelease emotic:กดแสดงความรู้สึกพร้อมระบุจำนวนครั้ง (turn)\n\nRetweet:กดรีทวีต พร้อมระบุจำนวนครั้ง\n\nComment:พิมพ์ข้อความแสดงความคิดเห็น\n\nList Comments: ช่องสำหรับใส่ข้อความที่จะคอมเมนต์ (รองรับระบบ Spin content เช่น{ดีมาก|เยี่ยม|สุดยอด}เพื่อสุ่มคำพูด)\n\nImage:หากต้องการคอมเมนต์ด้วยรูปภาพ ให้เลือกช่องนี้แล้วระบุ Image folder (ที่อยู่ไฟล์รูปในคอมพิวเตอร์)\n\nExport the link of the interactive post to a file:ติ๊กถูกหากต้องการบันทึก URL ของโพสต์ที่ระบบไปทำรายการไว้ในไฟล์เครื่องคอมพิวเตอร์(ระบุที่อยู่ไฟล์ .txt)\n\nการแท็กเพื่อนและแฮชแท็ก\n\n",
            "type": "markdown",
            "images": [
              "image126.png"
            ]
          },
          {
            "title": "Tag your friends:",
            "content": "Tag your friends:\n\nAmount: ระบุจำนวนเพื่อนที่จะแท็กต่อหนึ่งโพสต์\n\nList of users: รายชื่อ Username ของเพื่อนที่ต้องการแท็ก (1 บรรทัดต่อ 1 ชื่อ)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Add Hashtag:",
            "content": "Add Hashtag:\n\nList of hashtags: รายการแฮชแท็กที่ต้องการใส่เพิ่มเข้าไปในคอมเมนต์ (1 บรรทัดต่อ 1 แฮชแท็ก)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "9.Messaging by User (ส่งข้อความหาผู้ใช้ที่ระบุ)",
            "content": "9.Messaging by User (ส่งข้อความหาผู้ใช้ที่ระบุ)\n\n![image](/images/image543.png)\n\nการตั้งค่าพื้นฐาน\n\nAmount:กำหนดจำนวนผู้ใช้ที่จะส่งข้อความหา\n\nWaiting time:ระยะเวลารอคอยระหว่างการส่งแต่ละครั้ง (หน่วยเป็นวินาที) เพื่อป้องกันการโดนแบน\n\nการจัดการรายชื่อผู้รับ\n\nList of Users to message:ช่องสำหรับใส่ ID หรือ ลิงก์โปรไฟล์ของผู้รับ\n\nDelete the used user:หากติ๊กเลือก ระบบจะลบรายชื่อออกจากรายการหลังจากส่งข้อความสำเร็จแล้ว\n\nDo not follow the user's message:ไม่ติดตาม (Follow) ผู้ใช้เมื่อส่งข้อความ\n\nNhắn qua X Chat qua link:เลือกส่งข้อความผ่านทางลิงก์หน้าแชทโดยตรง\n\nNhắn qua X Chat qua tìm kiếm:เลือกส่งข้อความโดยใช้วิธีค้นหาชื่อผู้ใช้ในช่องค้นหาของหน้าแชท\n\nเนื้อหาข้อความ\n\nMessage content:ช่องสำหรับใส่ข้อความที่ต้องการส่ง\n\nเทคนิค Spin content:ใช้รูปแบบ{สวัสดี|ทักทาย|ฮัลโหล}เพื่อให้ระบบสุ่มคำพูดไม่ให้ซ้ำกันในแต่ละคน\n\nSend photos:ติ๊กเพื่อส่งรูปภาพประกอบ\n\nImage folder path: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: ระบุจำนวนรูปที่จะส่งต่อ 1 ข้อความ\n\nการสร้างปฏิสัมพันธ์อัตโนมัติ\n\nComment ngẫu nhiên vào 1 bài viết:หากเลือกไว้ ระบบจะไปคอมเมนต์ที่โพสต์ล่าสุดของผู้รับ 1 โพสต์ก่อนเริ่มส่งข้อความส่วนตัว\n\nช่องกรอกด้านล่าง:สำหรับใส่ข้อความคอมเมนต์ที่ต้องการสุ่มใช้\n\n",
            "type": "markdown",
            "images": [
              "image543.png"
            ]
          },
          {
            "title": "10.Messaging (ส่งข้อความถึงผู้ติดตาม/กำลังติดตาม)",
            "content": "10.Messaging (ส่งข้อความถึงผู้ติดตาม/กำลังติดตาม)\n\n![image](/images/image572.png)\n\nการตั้งค่าพื้นฐาน\n\nLoại đối tượng :เลือกว่าจะส่งข้อความหาใคร\n\nFollowing: ส่งหาคนที่เราไปกดติดตามเขาไว้\n\nFollower: ส่งหาคนที่มาติดตามเรา\n\nการกำหนดปริมาณและความเร็ว\n\nAmount:กำหนดจำนวนผู้ใช้ที่จะส่งข้อความหาในรอบนั้นๆ\n\nWaiting time:ระยะเวลาหยุดพักระหว่างการส่งข้อความแต่ละคน\n\nการจัดการข้อความ (Message Content)\n\nช่องกรอกข้อความ:พิมพ์ข้อความที่ต้องการส่งในช่องว่างขนาดใหญ่\n\n",
            "type": "markdown",
            "images": [
              "image572.png"
            ]
          },
          {
            "title": "เงื่อนไขการใส่เนื้อหา:",
            "content": "เงื่อนไขการใส่เนื้อหา:\n\nOne content per line: 1 บรรทัด คือ 1 ข้อความ\n\nSpin content {a|b|c}: ใช้รูปแบบการสุ่มคำ เช่น{สวัสดี|ทักทาย|ฮัลโหล}ระบบจะสุ่มเลือกคำใดคำหนึ่งมาส่ง เพื่อให้ข้อความดูไม่เหมือนบอทจนเกินไป\n\nการส่งรูปภาพ\n\nSend photos:ติ๊กถูกหากต้องการส่งรูปภาพไปพร้อมกับข้อความ\n\nImage folder path:ใส่ที่อยู่ของโฟลเดอร์ในคอมพิวเตอร์ที่เก็บรูปภาพไว้\n\nAmount of images:กำหนดว่าจะส่งรูปภาพจำนวนเท่าใดต่อ 1 ข้อความ\n\n11.Ads interactions by user (โต้ตอบกับโฆษณาตามผู้ใช้)\n\n![image](/images/image140.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber of Users:กำหนดจำนวนผู้ใช้ที่จะให้ระบบเข้าไปส่อง\n\nNumber of ads/User:จำนวนโพสต์หรือโฆษณาต่อผู้ใช้ 1 คน ที่ต้องการให้มีปฏิสัมพันธ์ด้วย\n\nWaiting time:ระยะเวลาการรอระหว่างแต่ละการกระทำ\n\nEnter the list of Users:ช่องสำหรับใส่ ID หรือ Link ของผู้ใช้เป้าหมาย (ใส่ 1 รายการต่อ 1 บรรทัด)\n\nการกำหนดรูปแบบปฏิสัมพันธ์\n\nRelease emotions:กดแสดงความรู้สึก\n\nRetweet:กดรีทวีตโพสต์\n\nBookmark:กดบันทึกโพสต์เก็บไว้\n\nClick link:กดคลิกลิงก์ที่อยู่ในโพสต์นั้นๆ\n\nComment:พิมพ์ข้อความแสดงความคิดเห็น\n\nในช่องข้อความสามารถใช้ฟอร์แมต{a|b|c}เพื่อให้ระบบสุ่มคำพูดได้ (Spin content)\n\nการตั้งค่าเสริม\n\nTag your friends:แท็กเพื่อนในคอมเมนต์\n\nAmount: จำนวนเพื่อนที่จะแท็ก\n\nList of users: รายชื่อเพื่อน\n\nAdd Hashtag:ใส่แฮชแท็กที่ต้องการ\n\nPhoto/Gif:เลือกแนบรูปภาพหรือไฟล์ GIF\n\nImage folder: Folder ที่เก็บรูปภาพ\n\nNumber of photos: จำนวนรูปที่จะใช้\n\nExport the link of the interactive post to a file:ติ๊กเลือกหากต้องการให้ระบบบันทึก Link ของโพสต์ที่มีการปฏิสัมพันธ์แล้วลงในไฟล์ตามที่ระบุ\n\n",
            "type": "markdown",
            "images": [
              "image140.png"
            ]
          },
          {
            "title": "12.Interactive Ads on newfeed (โต้ตอบกับโฆษณาตามฟีดข่าว)",
            "content": "12.Interactive Ads on newfeed (โต้ตอบกับโฆษณาตามฟีดข่าว)\n\n![image](/images/image624.png)\n\nการตั้งค่าพื้นฐาน\n\nSurfing time:กำหนดระยะเวลาในการเลื่อนดู (ไถฟีด)\n\nNumber of ads:กำหนดจำนวนโฆษณาที่ต้องการให้ระบบเข้าไปมีปฏิสัมพันธ์ด้วย\n\nWaiting time:ระยะเวลารอคอยระหว่างการย้ายจากโฆษณาหนึ่งไปอีกโฆษณาหนึ่ง\n\nการปฏิสัมพันธ์หลัก\n\nRelease emotions:กดแสดงความรู้สึก\n\nBookmark:กดบันทึกโพสต์เก็บไว้\n\nRetweet:กดรีทวีต\n\nClick link:กดที่ลิงก์ในโฆษณาเพื่อเข้าไปดูหน้าเว็บ\n\nComment:พิมพ์ข้อความแสดงความคิดเห็น\n\nวิธีใส่ข้อมูล:ใส่ข้อความ 1 บรรทัดต่อ 1 ข้อความ หรือใช้รูปแบบ{a|b|c}เพื่อให้ระบบสุ่มคำพูด\n\nPhoto/Gif:การตอบกลับด้วยรูปภาพหรือไฟล์ GIF\n\nNormal photo:เลือกโฟลเดอร์รูปภาพจากคอมพิวเตอร์\n\nGifs:เลือกหมวดหมู่ GIF ที่ต้องการ\n\nการขยายการเข้าถึง\n\nTag your friends:แท็กเพื่อนลงในโพสต์\n\nAmount:ระบุจำนวนเพื่อนที่จะแท็กต่อ 1 โพสต์\n\nList of users:ใส่รายชื่อ User ID หรือชื่อเพื่อนที่ต้องการแท็ก (1 บรรทัดต่อ 1 ชื่อ)\n\nAdd Hashtag:เพิ่มแฮชแท็กในกิจกรรม\n\nList of hashtags:ใส่รายการแฮชแท็กที่ต้องการ (1 บรรทัดต่อ 1 แฮชแท็ก)\n\nการบันทึกข้อมูล\n\nExport the link of the interactive post to a file:หากติ๊กถูก ระบบจะบันทึก \"ลิงก์\" ของโฆษณาที่ระบบได้ไปกดโต้ตอบไว้ในไฟล์ที่กำหนด เพื่อใช้ตรวจสอบย้อนหลัง\n\nFollow\n\n",
            "type": "markdown",
            "images": [
              "image624.png"
            ]
          },
          {
            "title": "1.Follow suggestions (ติดตามผู้ใช่ที่แนะนำ)",
            "content": "1.Follow suggestions (ติดตามผู้ใช่ที่แนะนำ)\n\n![image](/images/image553.png)\n\nNumber of follow :จำนวนที่ต้องการติดตาม\n\nWaiting time :ระยะเวลาดีเลย์\n\nReload the list later :โหลดหน้าติดตามที่แนะนำอีกครั้ง\n\n",
            "type": "markdown",
            "images": [
              "image553.png"
            ]
          },
          {
            "title": "2.Follow by keyword (ติดตามด้วยคีย์เวิร์ด)",
            "content": "2.Follow by keyword (ติดตามด้วยคีย์เวิร์ด)\n\n![image](/images/image534.png)\n\nNumber of follow :จำนวนที่ต้องการติดตาม\n\nWaiting time: ระยะเวลาดีเลย์\n\nList of keywords :รายการคีย์เวิร์ด\n\nDo not preview the profile of the found account:หากติ๊กถูกช่องนี้ ระบบจะกดติดตามทันทีที่เจอโดยไม่กดเข้าไปดูหน้าโปรไฟล์ก่อน\n\n",
            "type": "markdown",
            "images": [
              "image534.png"
            ]
          },
          {
            "title": "3.Follow user (ติดตามผู้ใช้ที่ระบุ)",
            "content": "3.Follow user (ติดตามผู้ใช้ที่ระบุ)\n\n![image](/images/image792.png)\n\nการตั้งค่าพื้นฐาน\n\nWaiting time:กำหนดระยะเวลาการรอระหว่างการติดตามแต่ละบัญชี\n\nNumber of users:กำหนดจำนวนผู้ใช้ที่ต้องการให้ระบบกดติดตามในรอบนี้\n\nการจัดการรายชื่อผู้เป้าหมาย\n\nList of Users to Follow:ช่องว่างขนาดใหญ่สำหรับใส่ Username หรือ Link ของโปรไฟล์ที่ต้องการติดตาม\n\nEnter user (ปุ่มด้านขวา):ใช้สำหรับกดเพื่อนำเข้าข้อมูลรายชื่อผู้ใช้\n\nการจัดการบัญชีซ้ำซ้อน\n\nAccounts following the user do not overlap:ตัวเลือกป้องกันไม่ให้บัญชีไปกดติดตามซ้ำซ้อนกับกลุ่มเป้าหมายเดิม\n\nEnter user (ปุ่มด้านขวา):ปุ่มสำหรับกดเข้าไปกรอกรายชื่อผู้ใช้ เพื่อใช้เป็นฐานข้อมูลในการตรวจสอบความซ้ำซ้อน\n\nตัวเลือกการปรับแต่งการติดตาม\n\nTurn on notifications:กดเปิดกระดิ่งแจ้งเตือนหลังจากกดติดตามทันที\n\nAccess the user's wall via a search tool instead of directly via a link:ให้ระบบพิมพ์ค้นหาชื่อผ่านช่อง Search แทนการเข้าลิงก์ตรง เพื่อจำลองพฤติกรรมให้เหมือนมนุษย์\n\nStop following when the user has a number of followers >=:หยุดติดตามหากบัญชีเป้าหมายมีผู้ติดตามเกินจำนวนที่กำหนด\n\nพฤติกรรมจำลอง\n\nLướt trang user trước khi follow:ตั้งค่าให้ระบบ \"ไถหน้าฟีด\" ดูหน้าโปรไฟล์ก่อนจะกดติดตาม\n\n",
            "type": "markdown",
            "images": [
              "image792.png"
            ]
          },
          {
            "title": "4.Follow Back follower (ติดตามกลับผู้ติดตาม)",
            "content": "4.Follow Back follower (ติดตามกลับผู้ติดตาม)\n\n![image](/images/image608.png)\n\nNumber of follow :จำนวนที่ต้องการติดตาม\n\nWaiting time :ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image608.png"
            ]
          },
          {
            "title": "5.Follow user’s followers (ติดตามผู้ติดตามของผู้ใช้ที่ระบุ)",
            "content": "5.Follow user’s followers (ติดตามผู้ติดตามของผู้ใช้ที่ระบุ)\n\n![image](/images/image210.png)\n\nFollowers/users :จำนวนที่ติดตาม/ผู้ใช้\n\nNumber of users :จำนวนผู้ใช้\n\nDelay time :ระยะเวลาดีเลย์\n\nList of users :รายการผู้ใช้\n\nDo not use duplicate users:ควรติ๊กถูกช่องนี้ เพื่อป้องกันไม่ให้ระบบไปกดติดตามคนเดิมซ้ำๆ\n\n",
            "type": "markdown",
            "images": [
              "image210.png"
            ]
          },
          {
            "title": "6.Follow Following of users (ติดตามผู้ใช้อื่นที่ผู้ใช้ที่ระบุกำลังติดตาม)",
            "content": "6.Follow Following of users (ติดตามผู้ใช้อื่นที่ผู้ใช้ที่ระบุกำลังติดตาม)\n\n![image](/images/image798.png)\n\nFollowers/users :จำนวนที่ติดตาม/ผู้ใช้\n\nNumber of user :จำนวนผู้ใช้\n\nDelay time :ระยะเวลาดีเลย์\n\nList of users :รายการผู้ใช้\n\n7.Follow by Hashtag (ติดตามผู้ใช้ด้วยแฮชแท็ก)\n\n![image](/images/image162.png)\n\nHashtag :แฮชแท็กที่ต้องการติดตาม\n\nNumber of Follow :จำนวนที่ต้องการติดตาม\n\nDelay:ระยะเวลาดีเลย์\n\nOnly Follow green tick :ติดตามเฉพาะบัญชีที่มีการยืนยัน(ติ๊กถูกด้านหลังชื่อ)\n\n8.UnFollow (ยกเลิกติดตาม)\n\n![image](/images/image277.png)\n\nAmount :จำนวนที่ติดการยกเลิกติดตาม\n\nWaiting Time :ระยะเวลาดีเลย์\n\nUnFollow option :ตัวเลือกการยกเลิกติดตาม\n\nRandomly who I follow :สุ่มคนที่กำลังติดตาม\n\nRandom people who followed me back :สุ่มคนที่ติดตามกลับ\n\nList of User retained :รายชื่อผู้ใช้ที่ไม่ต้องการยกเลิกติดตาม  (ไม่จำเป็นต้องมี @ หน้าชื่อผู้ใช้)\n\n9.UnFollow specific users (เลิกติดตามผู้ใช้ที่ระบุ)\n\n![image](/images/image472.png)\n\nNumber of unfollow :จำนวนที่ต้องการเลิกติดตาม\n\nWaiting time :ระยะเวลาดีเลย์\n\nUsername of unfollow :รายชื่อผู้ใช้ที่ต้องการเลิกติดตาม\n\n",
            "type": "markdown",
            "images": [
              "image798.png",
              "image162.png",
              "image277.png",
              "image472.png"
            ]
          },
          {
            "title": "10.Unretweet",
            "content": "10.Unretweet\n\n![image](/images/image32.png)\n\nMaximum quantity:ระบุจำนวนโพสต์ที่คุณต้องการให้ระบบถอนการรีทวีต\n\nKeyword:ใส่คำที่ต้องการกรอง หากคุณใส่คำลงไป ระบบจะเลือกถอนการรีทวีตเฉพาะโพสต์ที่มีคำนั้นๆ อยู่ (ถ้าเว้นว่างไว้ ระบบจะทำกับทุกโพสต์)\n\nCase insensitive:หากติ๊กถูกหน้าช่องนี้ ระบบจะไม่สนใจว่าคำสำคัญจะเป็นตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่ (เช่น \"Apple\" กับ \"apple\" จะถือเป็นคำเดียวกัน)\n\nCommunities\n\n",
            "type": "markdown",
            "images": [
              "image32.png"
            ]
          },
          {
            "title": "1.Join suggested (เข้าร่วมชุมชนตามคำแนะนำ)",
            "content": "1.Join suggested (เข้าร่วมชุมชนตามคำแนะนำ)\n\n![image](/images/image69.png)\n\nNumber of Communities:จำนวนกลุ่มที่ต้องการเข้าร่วม โดยระบบจะสุ่มตัวเลขในช่วงที่กำหนด\n\nWaiting time:ระยะเวลาที่ระบบจะหยุดรอก่อนดำเนินการครั้งถัดไป\n\n",
            "type": "markdown",
            "images": [
              "image69.png"
            ]
          },
          {
            "title": "2.Join specific communities (เข้าร่วมชุมชนเฉพาะกลุ่ม)",
            "content": "2.Join specific communities (เข้าร่วมชุมชนเฉพาะกลุ่ม)\n\n![image](/images/image760.png)\n\nการตั้งค่าเวลาและจำนวน\n\nWaiting time:กำหนดระยะเวลารอคอยระหว่างการเข้าร่วมแต่ละกลุ่ม\n\nNumber of communities:กำหนดจำนวนกลุ่มทั้งหมดที่ต้องการให้ระบบเข้าร่วมในรอบนี้\n\nรายการลิงก์กลุ่ม\n\nList of community links to join:เป็นพื้นที่สำหรับคัดลอก (Copy) และวาง (Paste) ลิงก์ของกลุ่มที่คุณต้องการเข้าร่วม\n\nหมายเหตุ: ต้องใส่หนึ่งลิงก์ต่อหนึ่งบรรทัด และระบบจะแสดงตัวเลขจำนวนลิงก์ทั้งหมดในวงเล็บด้านบนList of community links to join (0)\n\nการแจ้งเตือน\n\nTurn on notifications:เปิดการแจ้งเตือน\n\n",
            "type": "markdown",
            "images": [
              "image760.png"
            ]
          },
          {
            "title": "3.Join communities by keyword (เข้าร่วมชุมชนโดยใช้คำสำคัญ)",
            "content": "3.Join communities by keyword (เข้าร่วมชุมชนโดยใช้คำสำคัญ)\n\n![image](/images/image670.png)\n\nส่วนกำหนดจำนวนและเวลา\n\nQuantity:กำหนดว่าต้องการให้ระบบเข้าร่วมกลุ่ม กี่กลุ่ม\n\nWaiting time:กำหนดเวลาพักระหว่างการเข้าแต่ละกลุ่ม\n\nส่วนรายการคีย์เวิร์ด\n\nList of keywords:ใช้สำหรับพิมพ์คำค้นหา (Keywords) ที่คุณต้องการให้ระบบไปค้นหากลุ่ม\n\nวิธีใส่: ควรใส่ 1 คีย์เวิร์ด ต่อ 1 บรรทัด\n\nตัวเลข (0): จะแสดงจำนวนคีย์เวิร์ดที่คุณใส่ลงไปในรายการ\n\n",
            "type": "markdown",
            "images": [
              "image670.png"
            ]
          },
          {
            "title": "4.Tweet into specific (ทวีตข้อความเฉพาะเจาะจง)",
            "content": "4.Tweet into specific (ทวีตข้อความเฉพาะเจาะจง)\n\n![image](/images/image610.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber of posts:กำหนดจำนวนโพสต์ที่ต้องการ\n\nDelay time:เวลาพักระหว่างการโพสต์แต่ละครั้ง\n\nการจัดการกลุ่มเป้าหมาย\n\nList of group links:ช่องสำหรับใส่ลิงก์กลุ่มที่ต้องการเข้าไปโพสต์\n\nDo not reuse group links:ห้ามนำลิงก์กลุ่มไปใช้ซ้ำ\n\nEnter group link:ปุ่มสำหรับเพิ่มลิงก์\n\nการจัดการเนื้อหาข้อความ (Text Content)\n\n",
            "type": "markdown",
            "images": [
              "image610.png"
            ]
          },
          {
            "title": "เลือกได้ 2 รูปแบบหลัก:",
            "content": "เลือกได้ 2 รูปแบบหลัก:\n\nSelf-edited content: เขียนเนื้อหาเอง\n\nContent imported from textbox: ใส่ข้อความในช่อง List of contents\n\nImport content from text file: ดึงข้อความมาจากไฟล์ .txt ในเครื่อง\n\nOptions พิเศษ\n\nDelete Posted Content: สามารถเลือกให้ลบเนื้อหาที่โพสต์แล้ว\n\nContent is only 1 line: เนื้อหาแบบ 1 บรรทัดต่อ 1 ข้อความ\n\nContent has many lines: เนื้อหาแบบทุกบรรทัดคือ 1 ข้อความ\n\nสุ่มไอคอน/ข้อความ (Spin content)\n\nAccounts do not repost each other's content: บัญชีผู้ใช้จะไม่แชร์เนื้อหาของกันและกัน\n\nEnter unique posting content: ป้อนเนื้อหาโพสต์ที่ไม่ซ้ำกัน\n\nCompound content (content | media file path): โพสต์ข้อความพร้อมกับไฟล์สื่อ (รูปภาพหรือวิดีโอ) ที่เจาะจงคู่กัน\n\nContent taken from photo and video titles: ใช้ชื่อรูปภาพและวิดีโอเป็นเนื้อหา\n\nGPT chat content: ใช้ AI (ChatGPT) ในการสร้างเนื้อหาโดยอัตโนมัติ\n\nการจัดการสื่อ\n\nImage:ติ๊กเพื่อเลือกแนบรูปภาพ\n\nNumber of photos/tweets: กำหนดจำนวนรูปต่อหนึ่งโพสต์\n\nImage folder path: เลือก Folder ที่เก็บรูปภาพในเครื่อง\n\nAdd attached Link:ติ๊กเพื่อแนบลิงก์เว็บไซต์ประกอบโพสต์\n\nNumber of links: จำนวนลิงก์\n\nList of links: รายการลิงก์ (หนึ่งลิงก์ต่อหนึ่งบรรทัด)\n\nGif:เลือกธีมของไฟล์ GIF ที่ต้องการนำมาใช้\n\nฟีเจอร์เสริม\n\nTag your friends:ใส่รายชื่อเพื่อนที่ต้องการแท็กในโพสต์\n\nAmount: จำนวน\n\nList of users: รายชื่อผู้ใช้ (แต่ละชื่อผู้ใช้จะล็อกไว้ 1 บรรทัด)\n\nAdd Hashtag:ใส่รายการ Hashtag ที่ต้องการให้ติดไปกับโพสต์\n\nNumber of hashtags/tweet: จำนวนแฮชแท็กต่อทวีต\n\nList of hashtags: รายชื่อแฮชแท็ก (แต่ละแฮชแท็กจะล็อก 1 บรรทัด)\n\nPin recently posted article:ปักหมุดโพสต์ล่าสุดทันทีหลังโพสต์เสร็จ\n\nการบันทึกและกำหนดเวลา\n\nSave the Tweet link just posted and export to a file:บันทึก URL ของโพสต์ที่สำเร็จแล้วลงในไฟล์ .txt เพื่อเก็บไว้เป็นหลักฐานหรือตรวจสอบภายหลัง\n\nSee you soon to post tweets:ตารางกำหนดเวลาล่วงหน้า (Scheduling) สำหรับการเริ่มทำงานอัตโนมัติตามวันและเวลาที่ระบุ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "5.Surf specific communities (การโต้ตอบกับชุมชนที่ระบุ)",
            "content": "5.Surf specific communities (การโต้ตอบกับชุมชนที่ระบุ)\n\n![image](/images/image654.png)\n\nการตั้งค่าพื้นฐาน\n\nGroup Number:จำนวนกลุ่มที่จะเข้าไปโต้ตอบ\n\nPosts/Group:จำนวนโพสต์ที่จะเข้าไปกดโต้ตอบในแต่ละกลุ่ม\n\nWaiting time:ระยะเวลารอระหว่างการโต้ตอบในแต่ละโพสต์\n\nTime interval between actions:เวลาระยะห่างระหว่างการจบกลุ่มหนึ่งไปยังอีกกลุ่มหนึ่ง\n\nEnter list of Groups:ช่องสำหรับใส่ Link กลุ่ม ที่ต้องการให้โปรแกรมเข้าไปทำงาน\n\nการโต้ตอบหลัก\n\nRelease emotions:กดแสดงความรู้สึก\n\nRetweet:กดรีทวีตโพสต์นั้น\n\nComment:พิมพ์ข้อความแสดงความคิดเห็น\n\nList Comments: ใส่ข้อความที่ต้องการ (1 บรรทัดต่อ 1 ข้อความ)\n\nรองรับระบบ Spin content เช่น{ดีมาก|สวยมาก|สุดยอด}เพื่อสุ่มคำพูดไม่ให้ซ้ำกัน\n\nImage:เลือกส่งรูปภาพประกอบในคอมเมนต์\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพ\n\nNumber of photos: จำนวนรูปที่จะใช้\n\nExport the link of the interactive post to a file:เลือกบันทึก ลิงก์ ของโพสต์ที่ได้ไปโต้ตอบไว้ในไฟล์ที่กำหนด\n\nการเพิ่มลูกเล่นเสริม\n\nTag your friends:แท็กเพื่อนในคอมเมนต์\n\nAmount: จำนวนที่จะแท็กต่อโพสต์\n\nList of users: รายชื่อ Username (แต่ละชื่อผู้ใช้จะล็อกไว้ 1 บรรทัด)\n\nAdd Hashtag:ใส่แฮชแท็กที่ต้องการ\n\nList of hashtags: รายการ Hashtag ที่ต้องการ (1 รายการต่อ 1 บรรทัด)\n\nพฤติกรรมการอ่านและโฆษณา (Browsing & Ads)\n\nBrowse comments:ตั้งค่าการเลื่อนอ่านคอมเมนต์\n\nScrolls: จำนวนครั้งที่จะเลื่อนหน้าจอลง\n\nDelay: ระยะเวลาที่ค้างไว้เพื่ออ่าน\n\nSurf the ads below in the comments:การคลิกหรือดูโฆษณาที่อยู่ใต้คอมเมนต์\n\nNumber of ads: จำนวนโฆษณา\n\nTime viewing ads: เวลาที่ใช้ในการดูแต่ละตัว\n\nDelay : เวลาพักรอระหว่างแต่ละการดู\n\nOther Fuctions\n\n",
            "type": "markdown",
            "images": [
              "image654.png"
            ]
          },
          {
            "title": "1. Breaks (หยุดพักการทำงาน)",
            "content": "1. Breaks (หยุดพักการทำงาน)\n\n![image](/images/image687.png)\n\nWaiting time :ระยะเวลาหยุดพัก\n\n",
            "type": "markdown",
            "images": [
              "image687.png"
            ]
          },
          {
            "title": "2.Read the announcement (อ่านแจ้งเตือน)",
            "content": "2.Read the announcement (อ่านแจ้งเตือน)\n\n![image](/images/image487.png)\n\nAmount :จำนวนแจ้งเตือน\n\nWaiting time :ระยะเวลาดีเลย์\n\n",
            "type": "markdown",
            "images": [
              "image487.png"
            ]
          },
          {
            "title": "3.Post a Tweet (โพสต์ทวิต)",
            "content": "3.Post a Tweet (โพสต์ทวิต)\n\n![image](/images/image522.png)\n\nการตั้งค่าพื้นฐาน\n\nNumber of posts:กำหนดจำนวนโพสต์ที่ต้องการ\n\nDelay time:ระยะเวลาเว้นช่วงระหว่างแต่ละโพสต์\n\nส่วนจัดการเนื้อหาข้อความ\n\nSelf-edited content:พิมพ์เนื้อหาด้วยตัวเอง\n\nGPT chat content:ใช้ AI (ChatGPT) ในการช่วยเขียนเนื้อหา\n\nContent imported from textbox:ใส่ข้อความลงในช่อง List of contents\n\nOption\n\nDelete Posted Content: ลบเนื้อหาหลังจากโพสต์เสร็จ\n\nContent is only 1 line: 1 บรระทัดต่อ 1 โพสต์\n\nContent has many lines: ทุกบรรทัดคือ 1 โพสต์\n\nSpin content:รองรับการใช้รูปแบบ{a|b|c}เพื่อสุ่มคำพูด\n\nImport content from text file:ดึงข้อความจากไฟล์ .txt ในเครื่อง\n\nAccounts do not repost each other's content:ตั้งค่าไม่ให้แต่ละบัญชีโพสต์ซ้ำกัน\n\nEnter unique posting content: ป้อนเนื้อหาโพสต์ที่ไม่ซ้ำกัน\n\nCompound content (content | media file path): โพสต์ข้อความพร้อมกับไฟล์สื่อ (รูปภาพหรือวิดีโอ) ที่เจาะจงคู่กัน\n\nContent taken from photo and video titles:นำชื่อไฟล์ภาพหรือวิดีโอมาเป็นแคปชั่นโพสต์\n\nส่วนจัดการสื่อ\n\nImage:ติ๊กถูกเพื่อเปิดใช้งานการลงรูป\n\nNumber of photos/tweets: ระบุจำนวนภาพต่อหนึ่งโพสต์\n\nImage folder path: เลือกโฟลเดอร์ที่เก็บรูปภาพในคอมพิวเตอร์\n\nDelete used photos: สั่งให้ลบรูปทิ้งทันทีเมื่อโพสต์เสร็จ\n\nส่วนการโต้ตอบและลิงก์\n\nTag your friends:ติ๊กเพื่อแท็กเพื่อน\n\nAmount: จำนวนเพื่อนที่ต้องการแท็ก\n\nList of users: ใส่รายชื่อ Usernames ในช่อง (แต่ละชื่อผู้ใช้จะล็อกไว้ 1 บรรทัด)\n\nAdd Hashtag:ติ๊กเพื่อใส่แฮชแท็ก\n\nNumber of hashtags/tweet: ระบุจำนวน\n\nList of hashtags: รายการ Hashtag ที่ต้องการ (แต่ละแฮชแท็กจะล็อก 1 บรรทัด)\n\nAdd attached Link:สำหรับใส่ URL ลิงก์เว็บไซต์ที่ต้องการให้ปรากฏในโพสต์\n\nNumber of links: จำนวนลิงก์\n\nList of links: รายการลิงก์\n\nGif: เลือกหมวดหมู่ GIF เพื่อแนบไปกับโพสต์\n\nการบันทึกข้อมูล\n\nSave the Tweet link just posted and export to a file:บันทึกลิงก์ที่โพสต์เสร็จแล้วลงในไฟล์ .txt\n\nRetrieve the link of the newly posted video and export to a file:ดึงลิงก์วิดีโอที่เพิ่งโพสต์เสร็จบันทึกลงไฟล์ .txt\n\nส่วนการตั้งเวลาและเสริม\n\nSee you soon to post tweets (Schedule):ตั้งเวลาโพสต์ล่วงหน้า ระบุ วัน/เดือน/ปี และ เวลาที่ต้องการ\n\nGiờ (ชั่วโมง): เลือกชั่วโมงที่ต้องการให้เริ่มโพสต์\n\nPhút (นาที): เลือกนาทีที่ต้องการให้เริ่มโพสต์\n\nRandom: สุ่มเวลา\n\nNgày (วันที่): เลือกวันที่ต้องการโพสต์\n\nTháng (เดือน): เลือกเดือนที่ต้องการ\n\nNăm (ปี): เลือกปี ค.ศ.\n\nPin recently posted article:สั่งให้ปักหมุดโพสต์ล่าสุดทันที\n\nAdd random strings:สุ่มชุดตัวอักษรต่อท้ายเนื้อหา (Chain length) เพื่อป้องกันระบบตรวจจับว่าเป็นสแปมจากข้อความที่เหมือนกันเป๊ะๆ\n\n",
            "type": "markdown",
            "images": [
              "image522.png"
            ]
          },
          {
            "title": "4.Quote tweet (แชร์ทวิต)",
            "content": "4.Quote tweet (แชร์ทวิต)\n\n![image](/images/image22.png)\n\nการตั้งค่าพื้นฐาน\n\nLink tweet:ช่องสำหรับวาง URL ของทวีตต้นทางที่คุณต้องการจะไปทำการโควต\n\nPost viewing time:ตั้งค่าเวลาที่จะให้ระบบ \"หยุดค้าง\" ดูทวีตก่อนเริ่มทำการโควต\n\nเนื้อหาในการโควต\n\nQuoted content:ช่องสำหรับใส่ข้อความที่จะใช้โควตทวีต สามารถใส่ได้หลายข้อความ\n\nComments do not match:หากติ๊กถูก ระบบจะสุ่มดึงข้อความมาใช้โดยไม่เรียงลำดับกับทวีตต้นทาง\n\nการเพิ่มสื่อและบันทึกผล\n\nImage:หากต้องการให้การโควตมีรูปภาพประกอบด้วย\n\nImage folder: เลือกโฟลเดอร์ที่เก็บรูปภาพในเครื่อง\n\nNumber of photos: กำหนดจำนวนรูปภาพที่จะดึงมาใช้ต่อ 1 ทวีต\n\nExport quote link to file:หากต้องการเก็บ Log หรือลิงก์ที่โควตสำเร็จแล้วไว้ใช้งานต่อ\n\nFile path: เลือกที่อยู่ไฟล์ (.txt) ที่ต้องการบันทึกผลลัพธ์\n\nการปฏิสัมพันธ์เพิ่มเติม\n\nTag your friends:ติ๊กเพื่อแท็กชื่อผู้ใช้งานอื่นในข้อความโควต\n\nAmount: กำหนดจำนวนคนที่จะแท็ก\n\nList of users: รายชื่อ @username ที่ต้องการให้ระบบสุ่มไปแท็ก (1 ชื่อต่อ 1 บรรทัด)\n\nAdd Hashtag:ติ๊กเพื่อเพิ่มแฮชแท็กท้ายข้อความ\n\nList of hashtags: รายชื่อ #Hashtag ที่ต้องการใช้ (1 แท็กต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": [
              "image22.png"
            ]
          },
          {
            "title": "5.Update information (การกำหนดค่าการเข้าสู่ระบบเพิ่มเติม)",
            "content": "5.Update information (การกำหนดค่าการเข้าสู่ระบบเพิ่มเติม)\n\n![image](/images/image502.png)\n\neMail :อีเมล\n\nUsername :ชื่อผู้ใช้\n\nPhone number :เบอร์โทรศัพท์\n\nNation :ประเทศ\n\nBackup code :รหัสสำรอง\n\nAnalytics :ข้อมูลการวิเคราะห์\n\n",
            "type": "markdown",
            "images": [
              "image502.png"
            ]
          },
          {
            "title": "6.Get list follower/following (รับรายชื่อผู้ติดตาม/กำลังติดตาม)",
            "content": "6.Get list follower/following (รับรายชื่อผู้ติดตาม/กำลังติดตาม)\n\n![image](/images/image567.png)\n\nList of user :รายชื่อผู้ใช้\n\nUser Type :รูปแบบผู้ใช้ที่ต้องการ\n\nFollower :ผู้ติดตาม\n\nFollowing :กำลังติดตาม\n\nFolder path :ที่อยู่โฟลเดอร์\n\nLimit number of user :จำนวนสูงสุดในการรับรายชื่อผู้ใช้\n\n",
            "type": "markdown",
            "images": [
              "image567.png"
            ]
          },
          {
            "title": "7.Get list user like/retweet (รับรายชื่อคนที่กดไลค์/ติดตาม)",
            "content": "7.Get list user like/retweet (รับรายชื่อคนที่กดไลค์/ติดตาม)\n\n![image](/images/image141.png)\n\nLink Tweet:ช่องสำหรับใส่ URL หรือลิงก์ของโพสต์ (Tweet)\n\nUser Like:ดึงรายชื่อคนที่มากด Like ทวีตนั้น\n\nUser Retweet:ดึงรายชื่อคนที่กด Retweet ทวีตนั้น\n\nLink comment:ดึงรายชื่อคนที่เข้ามาตอบคอมเมนต์ใต้ทวีต\n\nQuote Tweets:ดึงรายชื่อคนที่ทำการ Quote Tweet (รีทวีตแบบใส่ข้อความ)\n\nĐường dẫn folder hoặc file(.txt):ที่อยู่ที่คุณต้องการบันทึกข้อมูลผลลัพธ์ลงในเครื่องคอมพิวเตอร์ (รองรับไฟล์นามสกุล .txt)\n\nLimit number of users:จำนวนผู้ใช้งานสูงสุดที่ต้องการดึงต่อหนึ่งทวีต\n\n",
            "type": "markdown",
            "images": [
              "image141.png"
            ]
          },
          {
            "title": "8.Retrieve tweet and retweet links (รับลิงก์ทวีตและรีทวีต)",
            "content": "8.Retrieve tweet and retweet links (รับลิงก์ทวีตและรีทวีต)\n\n![image](/images/image167.png)\n\nList of usernames :ชื่อผู้ใช้\n\nThe accounts use different users :บัญชีผู้ใช้ที่แตกต่างกัน\n\nNumber of users/accounts :จำนวนผู้ใช้/บัญชี\n\noldest time :บัญชีใช้ผู้ใช้ที่แตกต่างกัน เวลาที่เก่าที่สุด\n\nNumber of links :จำนวนลิงก์\n\nLink type :ประเภทลิงค์\n\nTweet :ทวิต\n\nRetweet :รีทวิต\n\nContent options :ตัวเลือกเนื้อหา\n\nVideo :วิดีโอ\n\nImage :รูปภาพ\n\nFolder path to save :ที่อยู่โฟลเดอร์ที่จะบันทึก\n\n",
            "type": "markdown",
            "images": [
              "image167.png"
            ]
          },
          {
            "title": "9.Change country and language (เปลี่ยนประเทศและภาษา)",
            "content": "9.Change country and language (เปลี่ยนประเทศและภาษา)\n\n![image](/images/image249.png)\n\nNation :ประเทศ\n\nLanguage :ภาษา\n\n",
            "type": "markdown",
            "images": [
              "image249.png"
            ]
          },
          {
            "title": "10.Delete all old tweets (ลบทวิตเก่าทั้งหมด)",
            "content": "10.Delete all old tweets (ลบทวิตเก่าทั้งหมด)\n\n![image](/images/image479.png)\n\nการตั้งค่าพื้นฐาน\n\nSpacing between each tweet deletion :กำหนดเวลาพักระหว่างการลบทวีตแต่ละข้อความ\n\nMaximum quantity:จำนวนทวีตที่ต้องการลบ\n\nตัวเลือกเพิ่มเติม\n\nDelete all other tweet comments:ระบบจะลบการตอบกลับ (Comments) ที่อยู่ในทวีตนั้น ๆ ด้วย\n\nวิธีการลบทวีต\n\n",
            "type": "markdown",
            "images": [
              "image479.png"
            ]
          },
          {
            "title": "ตัวเลือกที่ 1:Delete via search page (ลบผ่านหน้าการค้นหา)",
            "content": "ตัวเลือกที่ 1:Delete via search page (ลบผ่านหน้าการค้นหา)\n\nระบบจะลบทวีตโดยการค้นหาผ่านช่อง Search\n\nKeyword : คุณสามารถระบุคำเฉพาะที่ต้องการลบได้ (เช่น ลบเฉพาะทวีตที่มีคำว่า \"ประกาศ\") หรือหากต้องการลบทวีตทั่วไปให้ เว้นว่างไว้\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "ตัวเลือกที่ 2:Delete via account personal page (ลบผ่านหน้าโปรไฟล์ส่วนตัว)",
            "content": "ตัวเลือกที่ 2:Delete via account personal page (ลบผ่านหน้าโปรไฟล์ส่วนตัว)\n\nระบบจะลบทวีตโดยตรงจากหน้า Timeline ของคุณ\n\nหมายเหตุสำคัญ: ฟังก์ชันนี้จะทำงานได้ถูกต้องก็ต่อเมื่อ ตั้งค่าภาษาหลักของบัญชีเป็นภาษาอังกฤษ (English) เท่านั้น\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "11.Scan comment content (สแกนเนื้อหาคอมเมนต์)",
            "content": "11.Scan comment content (สแกนเนื้อหาคอมเมนต์)\n\n![image](/images/image20.png)\n\nLink Tweet :ลิงก์ทวิต\n\nUser Type :รูปแบบผู้ใช้\n\nCopy all comment content :คัดลอกเนื้อหาความคิดเห็นทั้งหมด\n\nCopy all comment content except tag friends :คัดลอกเนื้อหาความคิดเห็นทั้งหมด ยกเว้นแท็กเพื่อน\n\nCopy each wallet :คัดลอกกระเป๋าเงิน\n\nFolder path :ที่อยู่โฟลเดอร์ที่จะบันทึก\n\nComment limt :จำนวนความคิดเห็นสูงสุด\n\n",
            "type": "markdown",
            "images": [
              "image20.png"
            ]
          },
          {
            "title": "12.Filter top accounts (กรองบัญชียอดนิยม)",
            "content": "12.Filter top accounts (กรองบัญชียอดนิยม)\n\n![image](/images/image257.png)\n\nการตั้งค่าแหล่งข้อมูลและเงื่อนไข\n\n",
            "type": "markdown",
            "images": [
              "image257.png"
            ]
          },
          {
            "title": "List of users to filter:",
            "content": "List of users to filter:\n\nปุ่ม Open folder: คลิกเพื่อเลือกไฟล์หรือโฟลเดอร์ที่มีรายชื่อผู้ใช้งานที่ต้องการนำมากรอง\n\nช่องจำนวน (Users): แสดงจำนวนรายชื่อผู้ใช้งานทั้งหมดที่ถูกโหลดเข้ามา\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Number of users per account:",
            "content": "Number of users per account:\n\nช่องสำหรับกรอกตัวเลขเพื่อกำหนดจำนวนผู้ใช้งานต่อหนึ่งบัญชีที่ต้องการกรองออกมา\n\nการจัดการผลลัพธ์\n\nOutput file path:ช่องแสดงที่อยู่ไฟล์ (Path) ว่าจะให้บันทึกผลลัพธ์ไว้ที่ไหนในเครื่องคอมพิวเตอร์\n\nปุ่ม Open folder:คลิกเพื่อเลือกโฟลเดอร์ปลายทางที่ต้องการบันทึกไฟล์ผลลัพธ์\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "13.Turn on content display 18+ (เปิดการแสดงเนื้อหา 18+)",
            "content": "13.Turn on content display 18+ (เปิดการแสดงเนื้อหา 18+)\n\n![image](/images/image149.png)\n\nOption:ตัวเลือก\n\nShow offensive content :แสดงเนื้อหาที่ไม่เหมาะสม\n\nMark my tweets with offensive content :ทำเครื่องหมายทวิตของฉันด้วยเนื้อหาที่ไม่เหมาะสม\n\nOperation:การดำเนินการ\n\nTurn on :เปิด\n\nTurn off:ปิด\n\n",
            "type": "markdown",
            "images": [
              "image149.png"
            ]
          },
          {
            "title": "14.Delete old device login (ลบการเข้าสู่ระบบอุปกรณ์เก่า)",
            "content": "14.Delete old device login (ลบการเข้าสู่ระบบอุปกรณ์เก่า)\n\n![image](/images/image255.png)\n\n",
            "type": "markdown",
            "images": [
              "image255.png"
            ]
          },
          {
            "title": "15.Get list of users by list of Name (รับรายชื่อผู้ใช้ตามรายการชื่อ)",
            "content": "15.Get list of users by list of Name (รับรายชื่อผู้ใช้ตามรายการชื่อ)\n\n![image](/images/image100.png)\n\nList of names:การจัดการรายชื่อ\n\nNumber of names / accounts:ช่องสำหรับระบุจำนวนชื่อต่อบัญชีที่ต้องการให้ระบบประมวลผล\n\nOutput file path:ช่องแสดงเส้นทาง (Path) ของไฟล์ที่จะถูกบันทึก\n\nOpen folder:คลิกเพื่อเลือกสถานที่จัดเก็บไฟล์ผลลัพธ์ในคอมพิวเตอร์ของคุณ\n\nChange Info\n\n",
            "type": "markdown",
            "images": [
              "image100.png"
            ]
          },
          {
            "title": "1.Change username(เปลี่ยนชื่อผู้ใช้)",
            "content": "1.Change username(เปลี่ยนชื่อผู้ใช้)\n\n![image](/images/image716.png)\n\nการตั้งค่าตัวเลือกรูปแบบชื่อผู้ใช้\n\nMatch sequence:กำหนดรูปแบบตัวอักษรหรือตัวเลขที่ต้องการให้โปรแกรมสุ่มออกมาตามเงื่อนไขที่ระบุ\n\nOpen:คลิกเพื่อเปิดไฟล์หรือใส่รายการชื่อผู้ใช้ที่เตรียมไว้\n\nGet random from the list:สุ่มเลือกชื่อจากรายการที่คุณใส่ไว้\n\nTaken in order from top to bottom:เลือกชื่อเรียงตามลำดับจากบนลงล่าง\n\nDelete used username:เพื่อลบชื่อที่ถูกใช้ไปแล้วออกจากรายการ เพื่อไม่ให้เกิดการใช้ชื่อซ้ำ\n\nUsername by name:ตั้งชื่อตามชื่อหลัก\n\nการตั้งค่าเพิ่มเติม\n\nLength of random string at the end of username:กำหนดความยาวของตัวอักษร/ตัวเลขที่จะให้สุ่มต่อท้ายชื่อ\n\nUsername is all lowercase:ให้ชื่อผู้ใช้ทั้งหมดเป็นตัวพิมพ์เล็กเท่านั้น\n\nCheck the username you just changed:ให้ระบบตรวจสอบความถูกต้องของชื่อหลังจากเปลี่ยนเสร็จทันที\n\nข้อควรระวัง:คุณควรสร้างโปรไฟล์ (Profile) ให้เรียบร้อยก่อนที่จะเริ่มรันฟังก์ชันนี้ เพื่อให้ระบบทำงานได้อย่างถูกต้อง\n\n",
            "type": "markdown",
            "images": [
              "image716.png"
            ]
          },
          {
            "title": "2.Change password (เปลี่ยนรหัส)",
            "content": "2.Change password (เปลี่ยนรหัส)\n\n![image](/images/image79.png)\n\nการเลือกรูปแบบรหัสผ่าน\n\nSelf-setup: เลือกหัวข้อนี้หากต้องการใช้รหัสผ่านชุดเดียวกันทั้งหมด\n\nNew password: พิมพ์รหัสผ่านใหม่ที่ต้องการลงในช่องว่าง\n\nRandom password:เลือกหัวข้อนี้หากต้องการให้ระบบสุ่มรหัสผ่านใหม่ให้แต่ละบัญชีไม่ซ้ำกัน\n\nNew password length: กำหนดความยาวของรหัสผ่าน โดยระบุจำนวนตัวอักษร \"จาก (from)... ถึง (to)...\"\n\nการตรวจสอบและคำแนะนำ\n\nRecheck password after changing:หากติ๊กถูกที่ช่องนี้ ระบบจะทำการตรวจสอบอีกครั้งหลังจากเปลี่ยนรหัสผ่านเสร็จสิ้น เพื่อยืนยันว่ารหัสใหม่ใช้งานได้จริง\n\nNote:\"ควรทดสอบรันกับบัญชีจำนวนน้อยๆ ก่อนสัก 2-3 บัญชี เพื่อให้แน่ใจว่าการตั้งค่าถูกต้องและปลอดภัย\"\n\n",
            "type": "markdown",
            "images": [
              "image79.png"
            ]
          },
          {
            "title": "3.Change Avatar (เปลี่ยนรูปภาพโปรไฟล์)",
            "content": "3.Change Avatar (เปลี่ยนรูปภาพโปรไฟล์)\n\n![image](/images/image680.png)\n\nPhoto folder :ที่อยู่โฟลเดอร์รูปภาพ\n\nDelete used photos :ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image680.png"
            ]
          },
          {
            "title": "4.Change background image (เปลี่ยนรูปภาพหน้าปก)",
            "content": "4.Change background image (เปลี่ยนรูปภาพหน้าปก)\n\n![image](/images/image283.png)\n\nImage folder :ที่อยู่โฟลเดอร์รูปภาพ\n\nDelete used photos :ลบรูปภาพที่ใช้แล้ว\n\n",
            "type": "markdown",
            "images": [
              "image283.png"
            ]
          },
          {
            "title": "5. Update phone (อัปเดตเบอร์มือถือ)",
            "content": "5. Update phone (อัปเดตเบอร์มือถือ)\n\n![image](/images/image123.png)\n\nDelete phone number :ลบหมายเลขโทรศัพท์\n\nDelete phone number data in data :ลบข้อมูลหมายเลขโทรศัพท์ในข้อมูล\n\n",
            "type": "markdown",
            "images": [
              "image123.png"
            ]
          },
          {
            "title": "6.Change Name,Bio, Wed (เปลี่ยนชื่อ ประวัติ และสถานที่)",
            "content": "6.Change Name,Bio, Wed (เปลี่ยนชื่อ ประวัติ และสถานที่)\n\n![image](/images/image222.png)\n\nการเปลี่ยนชื่อ (Change name)\n\nRandom name combination:สุ่มรวมชื่อและนามสกุล\n\nSurname: กดปุ่ม \"Open\" เพื่อเลือกไฟล์รายนามสกุล\n\nName: กดปุ่ม \"Open\" เพื่อเลือกไฟล์รายชื่อ\n\nFull name:ใช้ชื่อ-นามสกุลแบบสำเร็จรูป\n\nPath file: กด \"Open\" เพื่อเลือกไฟล์ที่มีรายชื่อเต็มเตรียมไว้แล้ว\n\nDelete used name: (ติ๊กถูก) เพื่อลบชื่อที่ถูกใช้ไปแล้วออกจากรายการ ป้องกันการใช้ซ้ำ\n\nการเปลี่ยนประวัติส่วนตัว (Change Bio)\n\nBio Content:ช่องสำหรับใส่ข้อความที่จะนำไปใช้เป็น Bio (ประวัติย่อ)\n\nNội dung nhiều dòng:หากติ๊กช่องนี้ จะเป็นการอนุญาตให้ใช้เนื้อหาแบบหลายบรรทัดต่อหนึ่งโปรไฟล์\n\nตำแหน่งที่ตั้งและเว็บไซต์\n\n",
            "type": "markdown",
            "images": [
              "image222.png"
            ]
          },
          {
            "title": "Change position (ตำแหน่งที่ตั้ง):",
            "content": "Change position (ตำแหน่งที่ตั้ง):\n\nLocation list: ใส่รายการสถานที่ที่ต้องการให้แสดงในโปรไฟล์ (ใส่ 1 รายการต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "Web Update (อัปเดตเว็บไซต์):",
            "content": "Web Update (อัปเดตเว็บไซต์):\n\nWebsite list: ใส่ URL ของเว็บไซต์ที่ต้องการ (ใส่ 1 รายการต่อ 1 บรรทัด)\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "7.Generate 2FA code (สร้างรหัส 2FA)",
            "content": "7.Generate 2FA code (สร้างรหัส 2FA)\n\n![image](/images/image237.png)\n\nTurn on 2fa :เปิด 2fa\n\nTurn off 2fa :ปิด 2fa\n\nข้อควรระวังและหมายเหตุ (Important Notes)\n\nการสร้างโปรไฟล์:ควรสร้างโปรไฟล์ให้เรียบร้อยก่อนรันฟังก์ชันนี้เพื่อความถูกต้อง\n\nการจัดเรียงหน้าต่าง Chrome:หน้าต่าง Chrome จะต้องถูกจัดเรียงในรูปแบบ 5x1, 4x1 หรือ 3x1 ตามที่ระบบกำหนด\n\n",
            "type": "markdown",
            "images": [
              "image237.png"
            ]
          },
          {
            "title": "8.Update Date of Birth (วันเดือนปีเกิดสาธารณะ)",
            "content": "8.Update Date of Birth (วันเดือนปีเกิดสาธารณะ)\n\n![image](/images/image485.png)\n\nการตั้งค่าวันเกิด\n\nDay:เลือกวันที่จากรายการ\n\nMonth:เลือกเดือนจากรายการ\n\nYear:เลือกปี ค.ศ. จากรายการ\n\nส่วนนี้ใช้สำหรับกำหนด วัน เดือน และ ปี ที่ต้องการให้อัปเดท โดยแต่ละช่องจะมีตัวเลือก \"Random\" หากต้องการให้ระบบสุ่มค่าแทนการระบุเจาะจง\n\nการตั้งค่าการแสดงผล\n\nCustomize display:1gลือกระดับความเป็นส่วนตัวของข้อมูลวันเกิด\n\nPublic: สาธารณะ\n\nYour Followers: ผู้ติดตามของคุณ\n\nPeople You Follow: บุคคลที่คุณติดตาม\n\nYou Follow Each Other: คุณติดตามกันและกัน\n\nOnly You: เพียงคุณเท่านั้น\n\n",
            "type": "markdown",
            "images": [
              "image485.png"
            ]
          },
          {
            "title": "9.Update Email (อัปเดตอีเมล)",
            "content": "9.Update Email (อัปเดตอีเมล)\n\n![image](/images/image168.png)\n\nการตั้งค่าพื้นฐาน\n\nEmail Type:เลือกประเภทของอีเมลที่ต้องการใช้งาน\n\nHotmail\n\nMail.tm\n\nUnlimitmail\n\nbumba.sb\n\nTinyhost\n\nการนำเข้าข้อมูลอีเมล\n\nImport email list:ปุ่มสำหรับเลือกไฟล์รายชื่ออีเมล\n\nปุ่ม Open folder: คลิกเพื่อเลือกไฟล์.txtหรือไฟล์รายการอีเมลจากคอมพิวเตอร์ของคุณ\n\nรูปแบบข้อมูล (Format): หากไม่ใช้ API ข้อมูลในไฟล์ต้องเรียงในรูปแบบอีเมล|รหัสผ่าน(mail|pass)\n\nการตั้งค่าขั้นสูงผ่าน API\n\nUsing Api Dong Van to read hotmail: หากเลือกช่องนี้ ระบบจะใช้วิธีการอ่านข้อมูลผ่าน Dong Van API ซึ่งมีความเสถียรมากกว่าการล็อกอินปกติ\n\n",
            "type": "markdown",
            "images": [
              "image168.png"
            ]
          },
          {
            "title": "รูปแบบข้อมูลที่ต้องใช้: หากเลือกข้อนี้ รูปแบบในไฟล์รายการอีเมลต้องเปลี่ยนเป็น:",
            "content": "รูปแบบข้อมูลที่ต้องใช้: หากเลือกข้อนี้ รูปแบบในไฟล์รายการอีเมลต้องเปลี่ยนเป็น:\n\nอีเมล|รหัสผ่าน|refresh_token|client_id\n\nการตรวจสอบและการยืนยัน\n\nCheck your email again:ติ๊กถูกที่ช่องนี้หากต้องการให้ระบบทำการตรวจสอบความถูกต้องของอีเมลซ้ำอีกครั้งก่อนเริ่มดำเนินการ\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "10.Account settings (การตั้งค่าบัญชี)",
            "content": "10.Account settings (การตั้งค่าบัญชี)\n\n![image](/images/image313.png)\n\nการตั้งค่าความเป็นส่วนตัวและเนื้อหา\n\nDo not hide sensitive content:หากเลือกข้อนี้ ระบบจะไม่ซ่อนเนื้อหาที่ล่อแหลมหรือละเอียดอ่อน\n\nDo not remove blocked and muted accounts:หากเลือกข้อนี้ ระบบจะไม่ลบบัญชีที่คุณเคยบล็อกหรือปิดการแจ้งเตือนไว้\n\nAllow message requests from everyone:เปิดให้ใครก็ได้สามารถส่งคำขอข้อความมาหาคุณได้\n\nProtect your posts:ตั้งค่าการป้องกันโพสต์ของคุณ (เลือกระหว่าง On เพื่อเปิด หรือ Off เพื่อปิด)\n\nความปลอดภัยและประเภทบัญชี\n\nCreate chat passcode:หากเลือกข้อนี้ คุณสามารถตั้งรหัสผ่านสำหรับการเข้าแชทได้ (ระบุรหัสในช่องว่างด้านข้าง)\n\n",
            "type": "markdown",
            "images": [
              "image313.png"
            ]
          },
          {
            "title": "Account Labeling:การติดป้ายกำกับประเภทบัญชี (เลือกได้เพียงอย่างเดียว):",
            "content": "Account Labeling:การติดป้ายกำกับประเภทบัญชี (เลือกได้เพียงอย่างเดียว):\n\nDo not have: ไม่ระบุป้ายกำกับ\n\nParody account: บัญชีล้อเลียน\n\nComment account: บัญชีสำหรับคอมเมนต์\n\nFan accounts: บัญชีแฟนคลับ\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "4____________________an4le",
        "name": "4.วิธีดาวน์โหลดและติดตั้งโปรแกรม Max Twitter Pro",
        "sections": [
          {
            "title": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off",
            "content": "ก่อนทำการดาวน์โหลดให้ปิดแอนตี้ไวรัสก่อน โดยไปที่ Windows Security >> Virus & Threat protection >> Virus & Threat protection settings จากนั้นกด Manage settings จากนั้นปิด Real-time protection เป็น Off\n\n",
            "type": "markdown",
            "images": []
          },
          {
            "title": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย",
            "content": "1. หลังจากชำระเงินและแอดมินแจ้งแอคทีฟให้เรียบร้อย\n\nเข้าไปยังเว็บไซต์ Minsoft\n\n![image](/images/image4.png)\n\nล็อคอินเข้าใช้งาน\n\n![image](/images/image570.jpg)\n\nไปยังหน้าการจัดการซอฟต์แวร์\n\n![image](/images/image4.png)\n\n2. จากนั้นให้คลิกขวาที่คำว่าดาวน์โหลด และกด Copy link address (คัดลอกที่อยู่ลิ้งก์) ไปวางในแท็บใหม่ กด Enter รอจนกว่าจะดาวน์โหลดสำเร็จ\n\n![image](/images/image741.jpg)\n\n3. หลังจากดาวน์โหลดเสร็จเรียบร้อยแล้ว ให้คลิกขวาที่ไฟล์ MaxTwitterPro.zip ที่โหลดมา จากนั้นสามารถเลือกได้ว่าจะแตกไฟล์แบบไหน\n\n1.Extract files - สามารถเลือกได้ว่าต้องการให้ไปแตกไฟล์ลงที่ไหน\n\n2.Extract to \"MaxTwitterPro\\\" เลือกให้แตกไฟล์ลงที่ Download\n\n![image](/images/image4.png)\n\n",
            "type": "markdown",
            "images": [
              "image4.png",
              "image570.jpg",
              "image4.png",
              "image741.jpg",
              "image4.png"
            ]
          },
          {
            "title": "4.ทำการเปิด AutoUpdate เพื่ออัปเดตโปรแกรม",
            "content": "4.ทำการเปิด AutoUpdate เพื่ออัปเดตโปรแกรม\n\n![image](/images/image394.png)\n\n5. หลังจากอัปเดตเสร็จจะมีโปรแกรมปรากฏขึ้น ให้เข้าใช้งานโปรแกรม ทำการเข้าสู่ระบบให้เรียบร้อย(*ให้เข้าใช้งานจากเวอร์ชันล่าสุด*)\n\n![image](/images/image4.png)\n\n",
            "type": "markdown",
            "images": [
              "image394.png",
              "image4.png"
            ]
          },
          {
            "title": "6.ตั้งค่าภาษา",
            "content": "6.ตั้งค่าภาษา\n\n![image](/images/image341.png)\n\n",
            "type": "markdown",
            "images": [
              "image341.png"
            ]
          },
          {
            "title": "7.เลือก Browser ไปที่ General configs =>Bowser Option เลือก Chrome",
            "content": "7.เลือก Browser ไปที่ General configs =>Bowser Option เลือก Chrome\n\n![image](/images/image753.png)\n\nเป็นอันเสร็จขั้นตอนการติดตั้ง\n\n",
            "type": "markdown",
            "images": [
              "image753.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "5______________proxy_shhso",
        "name": "5.วิธีการเพิ่ม proxy โปรแกรม Maxtwitter",
        "sections": [
          {
            "title": "1.เลือกบัญชีที่ต้องการ ==> คลิกขวา ==>Enter proxy",
            "content": "1.เลือกบัญชีที่ต้องการ ==> คลิกขวา ==>Enter proxy\n\n![image](/images/image404.png)\n\n2.นำproxyมาวางในช่องList Proxys==> เลือกTypeของProxyในช่องProxy Type==> เลือกจำนวน บัญชี ต่อProxyหากกำหนด 2 หมายถึง ใช้ 2 บัญชี ต่อ 1 proxy ในช่องAccounts/Proxy==> ในช่องOption import Proxyตัวเลือกการนำเข้า เลือกระหว่างSequence(แบบเจาะจง)Random(แบบสุ่ม) ==> หากต้องการให้ข้ามบัญชีที่มีProxyอยู่เเล้วให้เลือกในช่องSkip account that already have Proxy==> จากนั้นกดConfirm\n\n![image](/images/image712.png)\n\n",
            "type": "markdown",
            "images": [
              "image404.png",
              "image712.png"
            ]
          },
          {
            "title": "3.ไปที่general configs==>Chang IP configss==>Use Proxy (assigned per account)",
            "content": "3.ไปที่general configs==>Chang IP configss==>Use Proxy (assigned per account)\n\n![image](/images/image791.png)\n\n",
            "type": "markdown",
            "images": [
              "image791.png"
            ]
          },
          {
            "title": "จากนั้นกดsaveเป็นอันเสร็จขั้นตอนการนำเข้าproxyโปรแกรมMaxtwitter",
            "content": "จากนั้นกดsaveเป็นอันเสร็จขั้นตอนการนำเข้าproxyโปรแกรมMaxtwitter\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "maxtwitter_faq",
        "name": "คำถามและปัญหาที่พบบ่อย MaxTwitter",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________jn0yd",
            "name": "โพสต์รูปภาพไม่ได้แก้ไขอย่างไร",
            "sections": [
              {
                "title": "1.ไปที่General configs==> เลือกShow image when opening browser",
                "content": "1.ไปที่General configs==> เลือกShow image when opening browser\n\n![image](/images/image547.png)\n\nจากนั้นกดSaveแล้วรันโปรแกรมอีกรอบ\n\n2.หากตั้งค่าตามขั้นตอนแรกแล้วยังไม่สามารถโพสต์ได้\n\nลบอิโมจิที่อยู่ในช่องข้อความออก\n\nเช็คโฟล์เดอร์รูปภาพว่ามีรูปภาพอยู่หรือไม่\n\n",
                "type": "markdown",
                "images": [
                  "image547.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          },
          {
            "id": "__________________de_nhavs",
            "name": "รันโปรแกรมแล้วที่ Description แจ้งว่า An unkown error!",
            "sections": [
              {
                "title": "1.ไปที่General configs==> เลือกChrome",
                "content": "1.ไปที่General configs==> เลือกChrome\n\n![image](/images/image521.png)\n\nจากนั้นกดSaveแล้วรันโปรแกรมอีกรอบ\n\n",
                "type": "markdown",
                "images": [
                  "image521.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          }
        ]
      }
    ]
  },
  {
    "id": "maxreup_suite",
    "name": "MaxReupFacebook",
    "categories": [
      {
        "id": "2_maxreup____________zp4hr",
        "name": "2.MaxReup การเพิ่มบัญชี",
        "sections": [
          {
            "title": "1.ไปที่Add account",
            "content": "1.ไปที่Add account\n\n![image](/images/image771.png)\n\n2.การตั้งค่าการเพิ่มบัญชี\n\n![image](/images/image590.png)\n\nส่วนแสดงผลสถานะ\n\nSuccess:แสดงจำนวนบัญชีที่นำเข้าสำเร็จ\n\nError:แสดงจำนวนบัญชีที่ไม่สามารถนำเข้าได้ (ข้อมูลผิดรูปแบบ)\n\nTotal:แสดงจำนวนรายการทั้งหมดที่ใส่ลงไปในช่องกรอกข้อมูล\n\nพื้นที่กรอกข้อมูล\n\nช่องสีขาวขนาดใหญ่:คือพื้นที่สำหรับวาง (Paste) หรือพิมพ์ข้อมูลบัญชีที่คุณต้องการนำเข้า\n\nข้อแนะนำ:ควรเตรียมข้อมูลให้ตรงตามรูปแบบที่เลือกไว้ในส่วนถัดไป\n\nส่วนการตั้งค่าการนำเข้า\n\nInput format:เลือกรูปแบบการจัดเรียงข้อมูล (เช่น หากเลือกUid|Passหมายความว่าในหนึ่งบรรทัดต้องมี ID ตามด้วยเครื่องหมาย|และรหัสผ่าน)\n\nChọn thư mục (เลือกโฟลเดอร์):ใช้สำหรับเลือกว่าจะนำบัญชีเหล่านี้ไปเก็บไว้ในกลุ่มหรือโฟลเดอร์ใด (ในภาพคือMặc địnhหรือ ค่าเริ่มต้น)\n\nTự động lấy tên tài khoản (ดึงชื่อบัญชีอัตโนมัติ):หากติ๊กถูก ระบบจะพยายามดึงข้อมูลชื่อเจ้าของบัญชีจากระบบให้โดยอัตโนมัติ\n\n",
            "type": "markdown",
            "images": [
              "image771.png",
              "image590.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "3_maxreup____________yvk33",
        "name": "3.MaxReup วิธีการเช็คเพจเช็คและดึงเพจ",
        "sections": [
          {
            "title": "หลังจากเพิ่มบัญชีเข้าในโปรแกรมแล้ว",
            "content": "หลังจากเพิ่มบัญชีเข้าในโปรแกรมแล้ว\n\n1.คลิกขวาไปที่ Page function  ==> Check out the listing pages ==> Open the browser\n\n![image](/images/image374.png)\n\n2.หลังจากเช็คเพจเสร็จแล้วคลิกขวา ==> จากนั้น Load page list เพื่อโหลดเพจที่มีในบัญชี้ สามารถกรอกจำนวนเพจในช่องด้านบนได้ หรือกดที่ By quantity เพื่อโหลดทั้งหมด\n\n![image](/images/image61.png)\n\nเป็นอันเสร็จขึ้นตอนการเช็คและดึงเพจเพื่อใช้งาน\n\n",
            "type": "markdown",
            "images": [
              "image374.png",
              "image61.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "4____________________fba0p",
        "name": "4.การตั้งค่าทั่วไปโปรแกรม MaxReup (General configuration)",
        "sections": [
          {
            "title": "การตั้งค่าทั่วไป (General configuration)",
            "content": "การตั้งค่าทั่วไป (General configuration)\n\n![image](/images/image742.png)\n\nการตั้งค่าการทำงาน\n\nNumber of chrome open threads:จำนวนหน้าต่าง Chrome ที่จะเปิดขึ้นมาทำงานพร้อมกัน\n\nNumber of hidden check threads:จำนวนเธรดสำหรับตรวจสอบข้อมูลเบื้องหลัง\n\n![image](/images/image169.png)\n\nการเข้าสู่ระบบ\n\nLogin type:เลือกรูปแบบการเข้าใช้งาน มีให้เลือกตั้งแต่ใช้รหัสผ่าน (Uid|Pass), ใช้ Cookies หรือสลับกัน (Cookies > Uid|Pass)\n\nWeb login:เลือกเวอร์ชันของเว็บที่จะเข้า (mbasic, m.fb หรือ www)\n\n![image](/images/image107.png)\n\nการตั้งค่าอื่นๆ\n\nCheck the wall before running:ตรวจสอบหน้าวอลล์ก่อนเริ่มงาน\n\nCheck page information:ตรวจสอบข้อมูลเพจ\n\nReactivate the page when:สั่งให้รีโหลดหรือกระตุ้นหน้าเว็บเมื่อเกิดปัญหา\n\n![image](/images/image424.png)\n\nการซิงค์ข้อมูล\n\nSoftware options:ตัวเลือกในการเลือกซอฟต์แวร์เสริม\n\nDirectory path:ที่อยู่โฟลเดอร์ของโปรแกรมและโปรเจกต์งาน\n\n![image](/images/image762.png)\n\nการจัดการเบราว์เซอร์\n\nBrowser type:เลือกประเภทเบราว์เซอร์\n\nChrome\n\nGO-Login\n\nchrome path\n\nGEM-Login\n\nGPM-Login\n\nBrowser opening time:ตั้งเวลาหน่วงในการเปิดแต่ละหน้าต่าง\n\nUsing profiles:เลือกใช้ Profile ที่บันทึกไว้ตาม Path ที่กำหนด\n\nPut chrome in from view:จัดวางหน้าต่าง Chrome ให้อยู่ในมุมมอง (กำหนดคอลัมน์ x แถว ได้ เช่น 5 x 2)\n\nTurn off chrome images:ปิดการโหลดรูปภาพเพื่อประหยัด RAM และเน็ต\n\nText typing speed:ความเร็วในการพิมพ์\n\nSlow\n\nNormal\n\nFast\n\nVery fast\n\nSuper fast\n\n![image](/images/image372.png)\n\nการแก้แคปช่า\n\nWeb:เลือกบริการที่จะใช้แก้\n\nAPI keys:ช่องสำหรับใส่รหัส API จากเว็บผู้ให้บริการ และกด Check เพื่อดูยอดเงินคงเหลือ\n\n![image](/images/image767.png)\n\nการตั้งค่าหลังล็อกอินสำเร็จ\n\nAutomatically retrieve cookies:ให้โปรแกรมดึง Cookies มาเก็บไว้โดยอัตโนมัติหลังจากล็อกอินผ่านแล้ว\n\n![image](/images/image75.png)\n\nการตั้งค่าไอพี\n\nDo not check IP before running:ไม่ต้องตรวจสอบไอพีก่อนเริ่ม\n\nIP change option:เลือกวิธีเปลี่ยนไอพี\n\nOptions:การจัดสรรไอพี เช่น \"Assigned to each account\" (หนึ่งบัญชีต่อหนึ่งไอพี)\n\n![image](/images/image622.png)\n\nตั้งค่าการรันอัตโนมัติ\n\nAct:ถ้าคุณเลือก Turn off และตั้ง Repeat 1 โปรแกรมจะทำงานเพียงรอบเดียวแล้วปิดตัวเองลงครับ แต่ถ้าเปลี่ยนเป็น Post reel โปรแกรมจะวนกลับมาโพสต์คลิปสั้นตามระยะเวลาที่คุณกำหนดไว้นั่นเอง\n\nRepeat:ตั้งจำนวนครั้งที่จะให้ทำซ้ำ\n\nrepeat later:ระยะเวลาที่จะให้เริ่มใหม่\n\n",
            "type": "markdown",
            "images": [
              "image742.png",
              "image169.png",
              "image107.png",
              "image424.png",
              "image762.png",
              "image372.png",
              "image767.png",
              "image75.png",
              "image622.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "6_maxreup____________a5vpm",
        "name": "6.MaxReup การใช้งานฟังก์ชันอื่นๆ",
        "sections": [
          {
            "title": "ในฝั่งAccount list คลิกขวาจะมีฟังก์ชันขึ้นมาให้ใช้งาน",
            "content": "ในฝั่งAccount list คลิกขวาจะมีฟังก์ชันขึ้นมาให้ใช้งาน\n\n![image](/images/image54.png)\n\nSelect :การเลือก\n\nAll :เลือกบัญชีทั้งหมด\n\nblacken :เลือกเฉพาะบัญชีที่ไฮไลท์\n\nStatusเลือกตามสเตตัส\n\nDeselect all :ยกเลิกการเลือกทั้งหมด\n\nArrange :จัดเรียง\n\nRefresh :รีเฟรช\n\nDelete selected :ลบที่เลือกไว้\n\nCopy :คัดลอกข้อมูลบัญชี\n\n![image](/images/image396.png)\n\nCheck account :ตรวจสอบบัญชี\n\nCheck Wall :เช็คสถานะบัญชี\n\nCheck proxies :เช็คสถานะพร็อกซี่\n\nCheck the token :เช็คสถานะโทเค็น\n\nUpdate data :อัพเดตข้อมูลบัญชี\n\nSwitch folders :ย้ายโฟลเดอร์\n\n![image](/images/image344.png)\n\nFunction page :ฟังก์ชันเพจ\n\nCheck out the listing page :ตรวจสอบรายการเพจOpenthe browser :เปิดเบราว์เซอร์Token: โทเค็น\n\nAccept page admin permissions :ยอมรับสิทธิ์ผู้ดูแลเพจ\n\n![image](/images/image702.png)\n\nOther function :ฟังก์ชั่นอื่น ๆ\n\nDelete duplicate accounts :ลบบัญชีที่ซ้ำกัน\n\n![image](/images/image342.png)\n\nOpen the browser :เปิดเบราว์เซอร์\n\nSign in chrome off :ลงชื่อเข้าใช้แล้วปิด\n\nOpen and login :เปิดและเข้าสู่ระบบ\n\nLoad the list page :โหลดรายการเพจ\n\n",
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
            "title": "ในฝั่ง Pagelist คลิกขวาจะมีฟังก์ชันขึ้นมาให้ใช้งาน",
            "content": "ในฝั่ง Pagelist คลิกขวาจะมีฟังก์ชันขึ้นมาให้ใช้งาน\n\n![image](/images/image200.png)\n\nSelect :การเลือก\n\nAll :เลือกบัญชีทั้งหมด\n\nblacken :เลือกเฉพาะบัญชีที่ไฮไลท์\n\nStatusเลือกตามสเตตัส\n\nDeselect all :ยกเลิกการเลือกทั้งหมด\n\nArrange :จัดเรียง\n\n![image](/images/image694.png)\n\nHide list :ซ่อนรายการ\n\nselected :ที่เลือกไว้\n\nAll :ทั้งหมด\n\nCopy :คัดลอกข้อมูลบัญชี\n\nDelete selected :ลบที่เลือกไว้\n\nSwitch categories :ย้ายหมวดหมู่\n\nopen the browser :เปิดเบราว์เซอร์\n\n![image](/images/image246.png)\n\nFunction page :ฟังก์ชันเพจ\n\nShare administrative rights :แบ่งปันสิทธิ์การดูแลระบบ\n\nCheck out the information page :ตรวจสอบข้อมูลเพจ\n\nPage reactivated :เปิดการใช้งานเพจ\n\n![image](/images/image160.png)\n\nOther function :ฟังก์ชันอื่นๆ\n\nDelete duplicate pags :ลบเพจที่ซ้ำกัน\n\n",
            "type": "markdown",
            "images": [
              "image200.png",
              "image694.png",
              "image246.png",
              "image160.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "7_maxreup____________hq8rk",
        "name": "7.MaxReup ตัดต่อวิดีโอ (Edit video)",
        "sections": [
          {
            "title": "ตัดต่อวิดีโอ (Edit video)",
            "content": "ตัดต่อวิดีโอ (Edit video)\n\n![image](/images/image381.png)\n\nคลิกขวา แล้วไปที่Add videos to the listเพื่อเพิ่มวิดีโอ\n\n![image](/images/image751.png)\n\nการตั้งค่า (Configuration)\n\n![image](/images/image306.png)\n\nRender flow:จำนวนแก้ไขพร้อมกัน\n\nDirectory to save videos:ตำแหน่งโฟลเดอร์ที่ต้องการเซฟวิดีโอหลังแก้ไข\n\nAutomatically remove videos from the list when rendering is complete:เลือกเพื่อลบวิดีโอทันทีหลังแก้ไขเสร็จสิ้น\n\nเพิ่มสีพื้นหลัง (Background color)\n\n![image](/images/image348.png)\n\nSpecified color:เลือกสีพื้นหลัง\n\nเพิ่มข้อความ (Insert the word)\n\n![image](/images/image668.png)\n\nMore:เพิ่มข้อความ\n\nErase:ลบข้อความ\n\nEdit Text:แก้ไขข้อความ\n\nTypeface:แก้ไขตัวอักษร\n\nColor:แก้ไขสีตัวอักษร\n\nLocation:แก้ไขตำแหน่งตัวอักษร\n\nเพิ่มรูปภาพ (Insert photos)\n\n![image](/images/image588.png)\n\nMore:เพิ่มรูปภาพ\n\nErase:ลบรูปภาพ\n\nSize:แก้ไขขนาดรูปภาพ\n\nColor:แก้ไขความโปร่งใสรูปภาพ\n\nLocation:แก้ไขตำแหน่งรูปภาพ\n\nเพิ่มเสียง (Insert music)\n\n![image](/images/image89.png)\n\nMore:เพิ่มเสียง\n\nErase:ลบเสียง\n\nFile retrieval option:ตัวเลือกการเรียกค้นไฟล์\n\nVolume:ระดับเสียง\n\n",
            "type": "markdown",
            "images": [
              "image381.png",
              "image751.png",
              "image306.png",
              "image348.png",
              "image668.png",
              "image588.png",
              "image89.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "maxreup_faq",
        "name": "คำถามและปัญหาที่พบบ่อย MaxReup",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________3iflg",
            "name": "ไม่สามารถเปิดใช้งานโปรแกรมได้",
            "sections": [
              {
                "title": "1.โปรแกรมขึ้นว่า Login fail 2.โปรแกรมเริ่มทำงานแล้วไม่ล็อคอินบัญชี",
                "content": "1.โปรแกรมขึ้นว่า Login fail 2.โปรแกรมเริ่มทำงานแล้วไม่ล็อคอินบัญชี\n\n",
                "type": "markdown",
                "images": []
              },
              {
                "title": "Details",
                "content": "![image](/images/image398.png)\n\n",
                "type": "markdown",
                "images": [
                  "image398.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          },
          {
            "id": "_____________________77ofx",
            "name": "วิธีนำเข้าบัญชีและการเลือก Type login ให้ตรงกับข้อมูลบัญชี",
            "sections": [
              {
                "title": "1.ไปที่ Add account",
                "content": "1.ไปที่ Add account\n\n![image](/images/image509.png)\n\n2.นำเข้าบัญชี\n\n1.นำข้อมูลบัญชีมาวางในช่องว่าง\n\n2.เลือก Format ให้ตรงกับรูปแบบบัญชี\n\n3.เลือกโฟล์เดอร์\n\nจากนั้นกด Confirm\n\n![image](/images/image405.png)\n\n",
                "type": "markdown",
                "images": [
                  "image509.png",
                  "image405.png"
                ]
              },
              {
                "title": "1.ไปที่ General configuration",
                "content": "1.ไปที่ General configuration\n\n![image](/images/image493.png)\n\n2.เลือก Type login\n\nกรณีที่ข้อมูลบัญชีมี UID หรือ Email และ Pass(รหัสผ่าน) ให้เลือก Login Type เป็น UID | Pass\n\nกรณีที่ข้อมูลบัญชีมี Cookie เพิ่มมาด้วย สามารถเลือก Login Type เป็น Cookie หรือ Cookie > Uid|Pass\n\nจากนั้นกด Save\n\n![image](/images/image13.png)\n\n",
                "type": "markdown",
                "images": [
                  "image493.png",
                  "image13.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          },
          {
            "id": "__________proxy____m_7r9vu",
            "name": "การใช้งาน Proxy ใน MaxReup",
            "sections": [
              {
                "title": "การนำเข้าในแต่ละบัญชี",
                "content": "การนำเข้าในแต่ละบัญชี\n\nเลือกบัญชีที่ต้องการนำเข้า Proxy\n\nคลิกขวา => Update data => Proxy\n\n![image](/images/image209.png)\n\nนำ Ip Proxy มาวางในช่องว่าง\n\n![image](/images/image329.png)\n\nเลือก Proxy type\n\n![image](/images/image94.png)\n\nกำหนดจำนวนบัญชีต่อ IP Proxy\n\n![image](/images/image324.png)\n\nจากนั้นกด Confirm\n\n",
                "type": "markdown",
                "images": [
                  "image209.png",
                  "image329.png",
                  "image94.png",
                  "image324.png"
                ]
              },
              {
                "title": "1.ไปที่หน้า General configuration",
                "content": "1.ไปที่หน้า General configuration\n\n![image](/images/image493.png)\n\n2.ในช่อง IP change option : เลือก Proxy\n\n![image](/images/image282.png)\n\n3.ตัวเลือกการใช้ Proxy\n\n![image](/images/image376.png)\n\nAssigned to each acccount :ใช้ Proxy ที่อยู่ในแต่ละบัญชี\n\n![image](/images/image544.png)\n\nRandom in the list :แบบสุ่มในรายการ\n\n![image](/images/image202.png)\n\n",
                "type": "markdown",
                "images": [
                  "image493.png",
                  "image282.png",
                  "image376.png",
                  "image544.png",
                  "image202.png"
                ]
              }
            ],
            "originalProgramName": "โปรแกรมอื่นๆ"
          }
        ]
      },
      {
        "id": "__________proxy____m_7r9vu",
        "name": "การใช้งาน Proxy ใน MaxReup",
        "sections": [
          {
            "title": "การนำเข้าในแต่ละบัญชี",
            "content": "การนำเข้าในแต่ละบัญชี\n\nเลือกบัญชีที่ต้องการนำเข้า Proxy\n\nคลิกขวา => Update data => Proxy\n\n![image](/images/image209.png)\n\nนำ Ip Proxy มาวางในช่องว่าง\n\n![image](/images/image329.png)\n\nเลือก Proxy type\n\n![image](/images/image94.png)\n\nกำหนดจำนวนบัญชีต่อ IP Proxy\n\n![image](/images/image324.png)\n\nจากนั้นกด Confirm\n\n",
            "type": "markdown",
            "images": [
              "image209.png",
              "image329.png",
              "image94.png",
              "image324.png"
            ]
          },
          {
            "title": "1.ไปที่หน้า General configuration",
            "content": "1.ไปที่หน้า General configuration\n\n![image](/images/image493.png)\n\n2.ในช่อง IP change option : เลือก Proxy\n\n![image](/images/image282.png)\n\n3.ตัวเลือกการใช้ Proxy\n\n![image](/images/image376.png)\n\nAssigned to each acccount :ใช้ Proxy ที่อยู่ในแต่ละบัญชี\n\n![image](/images/image544.png)\n\nRandom in the list :แบบสุ่มในรายการ\n\n![image](/images/image202.png)\n\n",
            "type": "markdown",
            "images": [
              "image493.png",
              "image282.png",
              "image376.png",
              "image544.png",
              "image202.png"
            ]
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      }
    ]
  },
  {
    "id": "minsoftware_techniques_suite",
    "name": "เทคนิคการใช้งานโปรแกรม Minsoftware",
    "categories": [
      {
        "id": "_____________________qwxrn",
        "name": "ข้อควรระวังในการใช้งานโปรแกรมฟาร์มเฟส!",
        "sections": [
          {
            "title": "1.สลับ script ในการใช้งานเพื่อไม่ให้จับได้ว่าเป็นบอท",
            "content": "1.สลับ script ในการใช้งานเพื่อไม่ให้จับได้ว่าเป็นบอท\n\n2.ใช้ proxy หรือ Aircard เน็ต AIS 4G (หากใช้เน็ตบ้านแนะนำให้รันเฟสทีละ 5 ตัว แล้วรีเน็ตใหม่)\n\n3.ขณะรันโปรแกรมห้ามเปิดเฟสข้างนอกไว้\n\n4.วอมอ่อนๆก่อนทุกครั้งในการวอมครั้งแรก\n\n5.หากไม่ได้ใช้ proxy แนะนำให้เปิดรันทีละ 5 จอ เท่านั้น\n\n6.ใช้ควบคู่กับ Maxcare และ MaxSystemCare (หากต้องการทำให้เฟสแข็งแรงขึ้น)\n\n7.หากเฟสยังบินอยู่ให้รีเซ็ตเน็ต หรือ proxy ใหม่อีกครั้ง\n\n",
            "type": "markdown",
            "images": []
          }
        ],
        "originalProgramName": "โปรแกรมอื่นๆ"
      },
      {
        "id": "tech_contact",
        "name": "ช่องทางการติดต่อ และสื่อต่างๆ",
        "sections": []
      }
    ]
  }
];
