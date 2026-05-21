
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
        "id": "maxcare______________snu8m",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxcare_usage_group",
        "name": "วิธีใช้งานโปรแกรม",
        "sections": [],
        "subCategories": [
          {
            "id": "1____________________c84zf",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "2____________________ecp2m",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "3____________________px543",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "4_maxcare____________xl2pd",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "5___________proxy____yydqy",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "maxcare_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย Maxcare",
        "sections": [],
        "subCategories": [
          {
            "id": "maxcare_________chec_rcxwp",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________754t3",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare_____maxsyste_6o5de",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare____________c_pllzo",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________m6sv8",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________o9tlz",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________98k67",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________5quyz",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________6ldm0",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________q7rdy",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare___________ch_dfw7r",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "maxcare______________caszs",
            "name": "Missing Category",
            "sections": []
          }
        ]
      }
    ]
  },
  {
    "id": "maxcare_page_suite",
    "name": "MaxCare Page",
    "categories": [
      {
        "id": "_____________________942pm",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxcarepage__________raa5v",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxcare_page_________b7hty",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "_____________________vousi",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxcare_page_usage_group",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________ulv5u",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_____________________o4in0",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_____________________6vw49",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "maxcare_page_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย MaxCarePage",
        "sections": [],
        "subCategories": [
          {
            "id": "___________cpu_100___wsipf",
            "name": "Missing Category",
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
        "id": "_____________________ibx2z",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxsystemcare_usage_group",
        "name": "วิธีใช้งานโปรแกรม",
        "sections": [],
        "subCategories": [
          {
            "id": "1____________________ao7ol",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "2___________ldplayer_ak2sb",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "3____________________1ll48",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "4____________________sm9qo",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "maxsystemcare_faq_group",
        "name": "คำถามและปัญหาที่พบบ่อย MaxSystemCare",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________de0a8",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "____________status___n5q9y",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_____________failed__jd14s",
            "name": "Missing Category",
            "sections": []
          }
        ]
      }
    ]
  },
  {
    "id": "maxdata_suite",
    "name": "MaxData",
    "categories": [
      {
        "id": "_____________________wpldc",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "_____________________hap3e",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxdata_usage_group",
        "name": "วิธีการใช้งานโปรแกรม",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________8iax9",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_____________________4s2ub",
            "name": "Missing Category",
            "sections": []
          }
        ]
      }
    ]
  },
  {
    "id": "maxphonefarm_suite",
    "name": "MaxPhoneFarm",
    "categories": [
      {
        "id": "_____________________85j6h",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxphone_farm_________cfwsm",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "max_phone_farm_______ndthg",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "_____________________lwboe",
        "name": "Missing Category",
        "sections": []
      }
    ]
  },
  {
    "id": "maxcloudphone_suite",
    "name": "MaxCloudPhone",
    "categories": [
      {
        "id": "maxcloud_mobile_config",
        "name": "การตั้งค่ามือถือ",
        "sections": [],
        "subCategories": [
          {
            "id": "________________inst_ng0aq",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "________token________uo3lq",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_______________maxcl_glp6v",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "maxcloud_basic_config",
        "name": "การตั้งค่าเบื้องต้น",
        "sections": [],
        "subCategories": [
          {
            "id": "__________________ti_g26ye",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_______________tikto_yk2im",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_______________adb_d_i9lc8",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_____________________iay90",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_______________2fa_hhc7f",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "___________proxy__ip_g4f8q",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "__________proxy_ipv4_63fys",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "____________configur_bkf4p",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "__________general_config_placeholder",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "___________________ctf0o",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "__________account_config_placeholder",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "__________package_config_placeholder",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "_____________________9gj4m",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "_____________________wbjhj",
        "name": "Missing Category",
        "sections": []
      }
    ]
  },
  {
    "id": "maxtwitter_suite",
    "name": "Max Twitter Pro",
    "categories": [
      {
        "id": "1____________________4qzuc",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "2____________________61io0",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "3____________________e2l3z",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "4____________________an4le",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "5______________proxy_shhso",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxtwitter_faq",
        "name": "คำถามและปัญหาที่พบบ่อย MaxTwitter",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________jn0yd",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "__________________de_nhavs",
            "name": "Missing Category",
            "sections": []
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
        "id": "1_max_reup___________35dkq",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "2_maxreup____________zp4hr",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "3_maxreup____________yvk33",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "4____________________fba0p",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "5_________________re_tqyqf",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "6_maxreup____________a5vpm",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "7_maxreup____________hq8rk",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "8_max_reup___________e8f1u",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "9_max_reup___________xg9da",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "maxreup_faq",
        "name": "คำถามและปัญหาที่พบบ่อย MaxReup",
        "sections": [],
        "subCategories": [
          {
            "id": "_____________________3iflg",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "_____________________77ofx",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "__________proxy____m_7r9vu",
            "name": "Missing Category",
            "sections": []
          }
        ]
      }
    ]
  },
  {
    "id": "minsoftware_techniques_suite",
    "name": "เทคนิคการใช้งานโปรแกรม Minsoftware",
    "categories": [
      {
        "id": "_____________________qwxrn",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "tech_maxsystemcare",
        "name": "เทคนิคใช้งาน MaxsystemCare",
        "sections": [],
        "subCategories": [
          {
            "id": "maxsystemcare________wpg3p",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_msc_post_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_msc_spam_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_msc_respond_id",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "tech_maxcare",
        "name": "เทคนิคการใช้งานโปรแกรม Maxcare",
        "sections": [],
        "subCategories": [
          {
            "id": "tech_mc_start_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_mc_add_friend_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_mc_join_group_id",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "tech_maxcare_page",
        "name": "เทคนิคใช้งาน MaxCare Page",
        "sections": [],
        "subCategories": [
          {
            "id": "tech_mcp_change_info_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_mcp_join_group_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_mcp_post_group_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_mcp_buff_id",
            "name": "Missing Category",
            "sections": []
          },
          {
            "id": "tech_mcp_spam_id",
            "name": "Missing Category",
            "sections": []
          }
        ]
      },
      {
        "id": "tech_find_id_id",
        "name": "Missing Category",
        "sections": []
      },
      {
        "id": "tech_contact_id",
        "name": "Missing Category",
        "sections": []
      }
    ]
  }
];
