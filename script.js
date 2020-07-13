// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp\u003EOn the next screen you will see a \u003Cb\u003Edot in the middle of the screen. Please click  on it\u003C\u002Fb\u003E with your mouse to see the trial.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou will then see the names of four objects arranged in a quadrant.\u003C\u002Fp\u003E\n\n\u003Cp\u003EShortly after seeing the names, you will hear a narrative such as \u003Cb\u003E\"The man thought about the apple.\"\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EPlease listen to the narrative and \u003Cb\u003Eclick on the object that is being thought about by the character (e.g. the apple) as quickly and accurately as possible.\u003C\u002Fb\u003E\u003C\u002Fp\u003E \n\n\u003Cp\u003E\u003Cb\u003EYour first response is your final answer\u003C\u002Fb\u003E. This will be underlined in grey when you click in the area containing the word.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou will then see a dot in the middle of the screen which will be coloured \u003Cspan style=\"color:green; font-weight:bold\"\u003Egreen\u003C\u002Fspan\u003E if you selected the correct word, \u003Cspan style=\"color:red; font-weight:bold\"\u003Ered\u003C\u002Fspan\u003E if you selected the incorrect word, or \u003Cspan style=\"color:orange; font-weight:bold\"\u003Eorange\u003C\u002Fspan\u003E if you did not select any word.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cb\u003EClick on the dot again\u003C\u002Fb\u003E to see the next trial.\u003C\u002Fp\u003E\n\nYou can take as many breaks as necessary by simply not clicking on the dot between trials.",
          "title": "Instructions"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "item": "1",
          "word_1": "file",
          "word_2": "phial",
          "word_3": "record",
          "word_4": "corn",
          "condition": "sem_phon",
          "audio_file": "01.mp3",
          "word_onset": "1428",
          "word_offset": "1916",
          "audio_offset": "2038",
          "audio_timeout": "6038",
          "word_loc": "1",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "2",
          "word_1": "cellar",
          "word_2": "seller",
          "word_3": "basement",
          "word_4": "arena",
          "condition": "sem_phon",
          "audio_file": "02.mp3",
          "word_onset": "1649",
          "word_offset": "2159",
          "audio_offset": "1959",
          "audio_timeout": "5959",
          "word_loc": "2",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "3",
          "word_1": "mail",
          "word_2": "male",
          "word_3": "letter",
          "word_4": "earring",
          "condition": "sem_phon",
          "audio_file": "03.mp3",
          "word_onset": "1927",
          "word_offset": "2392",
          "audio_offset": "2194",
          "audio_timeout": "6194",
          "word_loc": "3",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "4",
          "word_1": "war",
          "word_2": "wore",
          "word_3": "combat",
          "word_4": "sea",
          "condition": "sem_phon",
          "audio_file": "04.mp3",
          "word_onset": "1602",
          "word_offset": "2055",
          "audio_offset": "2429",
          "audio_timeout": "6429",
          "word_loc": "4",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "5",
          "word_1": "pie",
          "word_2": "pi",
          "word_3": "cake",
          "word_4": "dust",
          "condition": "sem_phon",
          "audio_file": "05.mp3",
          "word_onset": "1393",
          "word_offset": "1997",
          "audio_offset": "2090",
          "audio_timeout": "6090",
          "word_loc": "5",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "6",
          "word_1": "palette",
          "word_2": "palate",
          "word_3": "easel",
          "word_4": "leader",
          "condition": "sem_phon",
          "audio_file": "06.mp3",
          "word_onset": "1533",
          "word_offset": "2090",
          "audio_offset": "2116",
          "audio_timeout": "6116",
          "word_loc": "6",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "7",
          "word_1": "oar",
          "word_2": "ore",
          "word_3": "boat",
          "word_4": "egg",
          "condition": "sem_phon",
          "audio_file": "07.mp3",
          "word_onset": "1625",
          "word_offset": "2032",
          "audio_offset": "2064",
          "audio_timeout": "6064",
          "word_loc": "7",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "8",
          "word_1": "ball",
          "word_2": "bawl",
          "word_3": "game",
          "word_4": "mug",
          "condition": "sem_phon",
          "audio_file": "08.mp3",
          "word_onset": "1451",
          "word_offset": "1881",
          "audio_offset": "1907",
          "audio_timeout": "5907",
          "word_loc": "8",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "9",
          "word_1": "root",
          "word_2": "route",
          "word_3": "stem",
          "word_4": "blind",
          "condition": "sem_phon",
          "audio_file": "09.mp3",
          "word_onset": "1800",
          "word_offset": "2299",
          "audio_offset": "2325",
          "audio_timeout": "6325",
          "word_loc": "9",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "10",
          "word_1": "steak",
          "word_2": "stake",
          "word_3": "meal",
          "word_4": "door",
          "condition": "sem_phon",
          "audio_file": "10.mp3",
          "word_onset": "1242",
          "word_offset": "1823",
          "audio_offset": "2011",
          "audio_timeout": "6011",
          "word_loc": "10",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "11",
          "word_1": "story",
          "word_2": "storey",
          "word_3": "tale",
          "word_4": "bandage",
          "condition": "sem_phon",
          "audio_file": "11.mp3",
          "word_onset": "1416",
          "word_offset": "2067",
          "audio_offset": "2116",
          "audio_timeout": "6116",
          "word_loc": "11",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "12",
          "word_1": "waste",
          "word_2": "waist",
          "word_3": "trash",
          "word_4": "disc",
          "condition": "sem_phon",
          "audio_file": "12.mp3",
          "word_onset": "2090",
          "word_offset": "2786",
          "audio_offset": "2821",
          "audio_timeout": "6821",
          "word_loc": "12",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "13",
          "word_1": "dough",
          "word_2": "doe",
          "word_3": "phone",
          "word_4": "mouse",
          "condition": "phon",
          "audio_file": "13.mp3",
          "word_onset": "1498",
          "word_offset": "1892",
          "audio_offset": "1881",
          "audio_timeout": "5881",
          "word_loc": "13",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "14",
          "word_1": "cash",
          "word_2": "cache",
          "word_3": "pen",
          "word_4": "cello",
          "condition": "phon",
          "audio_file": "14.mp3",
          "word_onset": "1637",
          "word_offset": "2264",
          "audio_offset": "2299",
          "audio_timeout": "6299",
          "word_loc": "14",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "15",
          "word_1": "carat",
          "word_2": "carrot",
          "word_3": "hoover",
          "word_4": "bulb",
          "condition": "phon",
          "audio_file": "15.mp3",
          "word_onset": "1498",
          "word_offset": "2101",
          "audio_offset": "2142",
          "audio_timeout": "6142",
          "word_loc": "15",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "16",
          "word_1": "eave",
          "word_2": "eve",
          "word_3": "mask",
          "word_4": "cube",
          "condition": "phon",
          "audio_file": "16.mp3",
          "word_onset": "1405",
          "word_offset": "1788",
          "audio_offset": "1829",
          "audio_timeout": "5829",
          "word_loc": "16",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "17",
          "word_1": "brake",
          "word_2": "break",
          "word_3": "mirror",
          "word_4": "leaf",
          "condition": "phon",
          "audio_file": "17.mp3",
          "word_onset": "1451",
          "word_offset": "1950",
          "audio_offset": "1985",
          "audio_timeout": "5985",
          "word_loc": "17",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "18",
          "word_1": "gauze",
          "word_2": "gores",
          "word_3": "card",
          "word_4": "train",
          "condition": "phon",
          "audio_file": "18.mp3",
          "word_onset": "1277",
          "word_offset": "1823",
          "audio_offset": "1855",
          "audio_timeout": "5855",
          "word_loc": "18",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "19",
          "word_1": "quay",
          "word_2": "key",
          "word_3": "pea",
          "word_4": "vice",
          "condition": "phon",
          "audio_file": "19.mp3",
          "word_onset": "1335",
          "word_offset": "1765",
          "audio_offset": "1802",
          "audio_timeout": "5802",
          "word_loc": "19",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "20",
          "word_1": "leak",
          "word_2": "leek",
          "word_3": "triangle",
          "word_4": "cotton",
          "condition": "phon",
          "audio_file": "20.mp3",
          "word_onset": "1358",
          "word_offset": "1741",
          "audio_offset": "1776",
          "audio_timeout": "5776",
          "word_loc": "20",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "21",
          "word_1": "pedal",
          "word_2": "peddle",
          "word_3": "wire",
          "word_4": "cone",
          "condition": "phon",
          "audio_file": "21.mp3",
          "word_onset": "1553",
          "word_offset": "2020",
          "audio_offset": "2064",
          "audio_timeout": "6064",
          "word_loc": "21",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "22",
          "word_1": "vein",
          "word_2": "vane",
          "word_3": "guitar",
          "word_4": "ball",
          "condition": "phon",
          "audio_file": "22.mp3",
          "word_onset": "1509",
          "word_offset": "2032",
          "audio_offset": "2064",
          "audio_timeout": "6064",
          "word_loc": "22",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "23",
          "word_1": "sink",
          "word_2": "sync",
          "word_3": "wrench",
          "word_4": "aerial",
          "condition": "phon",
          "audio_file": "23.mp3",
          "word_onset": "1521",
          "word_offset": "2009",
          "audio_offset": "2038",
          "audio_timeout": "6038",
          "word_loc": "23",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "24",
          "word_1": "wheel",
          "word_2": "weal",
          "word_3": "battery",
          "word_4": "sprout",
          "condition": "phon",
          "audio_file": "24.mp3",
          "word_onset": "1544",
          "word_offset": "1939",
          "audio_offset": "1985",
          "audio_timeout": "5985",
          "word_loc": "24",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "25",
          "word_1": "altar",
          "word_2": "table",
          "word_3": "church",
          "word_4": "slingshot",
          "condition": "sem",
          "audio_file": "25.mp3",
          "word_onset": "1591",
          "word_offset": "2148",
          "audio_offset": "2194",
          "audio_timeout": "6194",
          "word_loc": "1",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "26",
          "word_1": "brows",
          "word_2": "clock",
          "word_3": "lip",
          "word_4": "wrapper",
          "condition": "sem",
          "audio_file": "26.mp3",
          "word_onset": "1997",
          "word_offset": "2694",
          "audio_offset": "2743",
          "audio_timeout": "6743",
          "word_loc": "2",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "27",
          "word_1": "scent",
          "word_2": "water",
          "word_3": "smell",
          "word_4": "paper",
          "condition": "sem",
          "audio_file": "27.mp3",
          "word_onset": "2020",
          "word_offset": "2543",
          "audio_offset": "2586",
          "audio_timeout": "6586",
          "word_loc": "3",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "28",
          "word_1": "eye",
          "word_2": "phone",
          "word_3": "pupil",
          "word_4": "candlestick",
          "condition": "sem",
          "audio_file": "28.mp3",
          "word_onset": "1741",
          "word_offset": "2287",
          "audio_offset": "2325",
          "audio_timeout": "6325",
          "word_loc": "4",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "29",
          "word_1": "herd",
          "word_2": "gold",
          "word_3": "flock",
          "word_4": "hub",
          "condition": "sem",
          "audio_file": "29.mp3",
          "word_onset": "1416",
          "word_offset": "1800",
          "audio_offset": "1829",
          "audio_timeout": "5829",
          "word_loc": "5",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "30",
          "word_1": "hair",
          "word_2": "cord",
          "word_3": "beard",
          "word_4": "puzzle",
          "condition": "sem",
          "audio_file": "30.mp3",
          "word_onset": "1451",
          "word_offset": "1800",
          "audio_offset": "1829",
          "audio_timeout": "5829",
          "word_loc": "6",
          "w1_x": "-225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "31",
          "word_1": "meat",
          "word_2": "lamp",
          "word_3": "chicken",
          "word_4": "coal",
          "condition": "sem",
          "audio_file": "31.mp3",
          "word_onset": "1370",
          "word_offset": "1892",
          "audio_offset": "1933",
          "audio_timeout": "5933",
          "word_loc": "7",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "32",
          "word_1": "paws",
          "word_2": "salt",
          "word_3": "tail",
          "word_4": "thread",
          "condition": "sem",
          "audio_file": "32.mp3",
          "word_onset": "1219",
          "word_offset": "1776",
          "audio_offset": "1802",
          "audio_timeout": "5802",
          "word_loc": "8",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "33",
          "word_1": "pier",
          "word_2": "grass",
          "word_3": "dock",
          "word_4": "bobbin",
          "condition": "sem",
          "audio_file": "33.mp3",
          "word_onset": "1335",
          "word_offset": "1778",
          "audio_offset": "1829",
          "audio_timeout": "5829",
          "word_loc": "9",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "34",
          "word_1": "band",
          "word_2": "field",
          "word_3": "song",
          "word_4": "tub",
          "condition": "sem",
          "audio_file": "34.mp3",
          "word_onset": "1196",
          "word_offset": "1753",
          "audio_offset": "1802",
          "audio_timeout": "5802",
          "word_loc": "10",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "35",
          "word_1": "tide",
          "word_2": "fleet",
          "word_3": "moon",
          "word_4": "bottle",
          "condition": "sem",
          "audio_file": "35.mp3",
          "word_onset": "1486",
          "word_offset": "1997",
          "audio_offset": "2038",
          "audio_timeout": "6038",
          "word_loc": "11",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "36",
          "word_1": "ode",
          "word_2": "iron",
          "word_3": "rhyme",
          "word_4": "case",
          "condition": "sem",
          "audio_file": "36.mp3",
          "word_onset": "1300",
          "word_offset": "1649",
          "audio_offset": "1802",
          "audio_timeout": "5802",
          "word_loc": "12",
          "w1_x": "225",
          "w1_y": "-150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "37",
          "word_1": "camera",
          "word_2": "hat",
          "word_3": "scales",
          "word_4": "yo-yo",
          "condition": "control",
          "audio_file": "37.mp3",
          "word_onset": "1521",
          "word_offset": "2078",
          "audio_offset": "2116",
          "audio_timeout": "6116",
          "word_loc": "13",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "38",
          "word_1": "beer",
          "word_2": "handbag",
          "word_3": "stopwatch",
          "word_4": "chip",
          "condition": "control",
          "audio_file": "38.mp3",
          "word_onset": "1196",
          "word_offset": "1579",
          "audio_offset": "1620",
          "audio_timeout": "5620",
          "word_loc": "14",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "39",
          "word_1": "gun",
          "word_2": "monitor",
          "word_3": "painting",
          "word_4": "mascara",
          "condition": "control",
          "audio_file": "39.mp3",
          "word_onset": "1405",
          "word_offset": "1776",
          "audio_offset": "1802",
          "audio_timeout": "5802",
          "word_loc": "15",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "40",
          "word_1": "sword",
          "word_2": "cactus",
          "word_3": "plunger",
          "word_4": "rivet",
          "condition": "control",
          "audio_file": "40.mp3",
          "word_onset": "1265",
          "word_offset": "1904",
          "audio_offset": "1933",
          "audio_timeout": "5933",
          "word_loc": "16",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "41",
          "word_1": "balloon",
          "word_2": "shovel",
          "word_3": "football",
          "word_4": "swimsuit",
          "condition": "control",
          "audio_file": "41.mp3",
          "word_onset": "1486",
          "word_offset": "2113",
          "audio_offset": "2142",
          "audio_timeout": "6142",
          "word_loc": "17",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "150"
        },
        {
          "item": "42",
          "word_1": "razor",
          "word_2": "clock",
          "word_3": "magazine",
          "word_4": "wand",
          "condition": "control",
          "audio_file": "42.mp3",
          "word_onset": "1231",
          "word_offset": "1834",
          "audio_offset": "1881",
          "audio_timeout": "5881",
          "word_loc": "18",
          "w1_x": "-225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "43",
          "word_1": "shorts",
          "word_2": "megaphone",
          "word_3": "hotdog",
          "word_4": "crown",
          "condition": "control",
          "audio_file": "43.mp3",
          "word_onset": "1219",
          "word_offset": "1811",
          "audio_offset": "1855",
          "audio_timeout": "5855",
          "word_loc": "19",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "44",
          "word_1": "tent",
          "word_2": "soap",
          "word_3": "domino",
          "word_4": "crocus",
          "condition": "control",
          "audio_file": "44.mp3",
          "word_onset": "1533",
          "word_offset": "2020",
          "audio_offset": "2064",
          "audio_timeout": "6064",
          "word_loc": "20",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "45",
          "word_1": "saxophone",
          "word_2": "printer",
          "word_3": "ashtray",
          "word_4": "biscuit",
          "condition": "control",
          "audio_file": "45.mp3",
          "word_onset": "1416",
          "word_offset": "2485",
          "audio_offset": "2534",
          "audio_timeout": "6534",
          "word_loc": "21",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "-150",
          "w3_x": "225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        },
        {
          "item": "46",
          "word_1": "car",
          "word_2": "syringe",
          "word_3": "vase",
          "word_4": "mitten",
          "condition": "control",
          "audio_file": "46.mp3",
          "word_onset": "1405",
          "word_offset": "1811",
          "audio_offset": "1855",
          "audio_timeout": "5855",
          "word_loc": "22",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "150",
          "w4_x": "-225",
          "w4_y": "-150"
        },
        {
          "item": "47",
          "word_1": "comb",
          "word_2": "axe",
          "word_3": "postcard",
          "word_4": "handbook",
          "condition": "control",
          "audio_file": "47.mp3",
          "word_onset": "1486",
          "word_offset": "1950",
          "audio_offset": "1985",
          "audio_timeout": "5985",
          "word_loc": "23",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "-225",
          "w2_y": "150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "225",
          "w4_y": "-150"
        },
        {
          "item": "48",
          "word_1": "toothpaste",
          "word_2": "scissors",
          "word_3": "flag",
          "word_4": "bone",
          "condition": "control",
          "audio_file": "48.mp3",
          "word_onset": "1474",
          "word_offset": "2415",
          "audio_offset": "2456",
          "audio_timeout": "6456",
          "word_loc": "24",
          "w1_x": "225",
          "w1_y": "150",
          "w2_x": "225",
          "w2_y": "-150",
          "w3_x": "-225",
          "w3_y": "-150",
          "w4_x": "-225",
          "w4_y": "150"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "experiment_loop",
      "shuffleGroups": [
        [
          "word_loc",
          "w1_x",
          "w1_y",
          "w2_x",
          "w2_y",
          "w3_x",
          "w3_y",
          "w4_x",
          "w4_y"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "task",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 38.79,
                "height": 38.79,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "line",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 60,
                "height": 0,
                "stroke": "#ffffff",
                "strokeWidth": 5,
                "fill": "rgb(0,0,0)"
              },
              {
                "type": "line",
                "left": 0,
                "top": 0,
                "angle": "90",
                "width": "60",
                "height": 0,
                "stroke": "#ffffff",
                "strokeWidth": 5,
                "fill": "rgb(0,0,0)"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 51.8,
                "height": 51.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "click_fix"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @click_fix": "click_fix"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fix_cross"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "-225",
                "top": -150,
                "angle": 0,
                "width": "225",
                "height": "225",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": -225.25,
                "top": -150.25,
                "angle": 0,
                "width": "210",
                "height": "210",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "rect",
                "left": "225",
                "top": "-150",
                "angle": 0,
                "width": "225",
                "height": "225",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": "225",
                "top": "-150",
                "angle": 0,
                "width": "210",
                "height": "210",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "rect",
                "left": "-225",
                "top": "150",
                "angle": 0,
                "width": "225",
                "height": "225",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": "-225",
                "top": "150",
                "angle": 0,
                "width": "210",
                "height": "210",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "rect",
                "left": "225",
                "top": "150",
                "angle": 0,
                "width": "225",
                "height": "225",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": "225",
                "top": "150",
                "angle": 0,
                "width": "210",
                "height": "210",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "i-text",
                "left": "${this.parameters.w1_x}",
                "top": "${this.parameters.w1_y}",
                "angle": 0,
                "width": 373.55,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.word_1}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "${this.parameters.w2_x}",
                "top": "${this.parameters.w2_y}",
                "angle": 0,
                "width": 373.55,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.word_2}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "${this.parameters.w3_x}",
                "top": "${this.parameters.w3_y}",
                "angle": 0,
                "width": 373.55,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.word_3}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "${this.parameters.w4_x}",
                "top": "${this.parameters.w4_y}",
                "angle": 0,
                "width": 373.55,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.word_4}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": "${this.parameters.w1_x}",
                "top": "${this.parameters.w1_y}",
                "angle": 0,
                "width": 225,
                "height": 225,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "w1_aoi"
              },
              {
                "type": "aoi",
                "left": "${this.parameters.w2_x}",
                "top": "${this.parameters.w2_y}",
                "angle": 0,
                "width": 225,
                "height": 225,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "w2_aoi"
              },
              {
                "type": "aoi",
                "left": "${this.parameters.w3_x}",
                "top": "${this.parameters.w3_y}",
                "angle": 0,
                "width": 225,
                "height": 225,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "w3_aoi"
              },
              {
                "type": "aoi",
                "left": "${this.parameters.w4_x}",
                "top": "${this.parameters.w4_y}",
                "angle": 0,
                "width": "225",
                "height": "225",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "w4_aoi"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "01.mp3": "embedded\u002F6ccb90540a3aedc30472ac1e119eb0211d159d3a72c8b17430bb6df6b24633b5.mp3",
              "02.mp3": "embedded\u002Ffb88157946f7b29be6c330924ff3a9160f9456ea76e94bc94e6f1be19d103015.mp3",
              "03.mp3": "embedded\u002F7d0de7be958b0b5de007aad7e95f706a6019050defe4ac08af244cea0c6120ef.mp3",
              "04.mp3": "embedded\u002F08ee28463eb664c7226e159dda73f2844f5df285939f216b62bc6b97ed0aa71e.mp3",
              "05.mp3": "embedded\u002Fd917418f335cde3b76a141ecd2bb38e545cf6e42dd3dbd75ffabe46271cbcba6.mp3",
              "06.mp3": "embedded\u002Ffc891ad7e9a8de7e685c63f378fd4af2bf1bae8a76a56b839e43abb201bde0d7.mp3",
              "07.mp3": "embedded\u002Fdf088d06f11839bcb3c7703ca40ba18c2cb012f23812b122d8faa1d4bf39ef5f.mp3",
              "08.mp3": "embedded\u002Ff2fda15b9e202558fcf6296a9c38ea104a22d1e6908c7b368aa94569d3f5cf5b.mp3",
              "09.mp3": "embedded\u002F4348e172b6e231f8194fce1e9615cc96d6852b370150a00065c2c5825977828f.mp3",
              "10.mp3": "embedded\u002F736403ed8f5dcd9e68239688d027cba24d481ad92026809b0bdf6cfacae1bf17.mp3",
              "11.mp3": "embedded\u002F9f6369eae285f490fa9712cf04315d70b71d0e4dffcf163e64d29eb9606f3b25.mp3",
              "12.mp3": "embedded\u002F62ac714213b68cdb2744c99ab75ada1c203116986ef53270c02fbbef8d039620.mp3",
              "13.mp3": "embedded\u002Fdf599bbd5863ecb9986117a7c9556c99bfdeabae00b6213980494103ddc384d0.mp3",
              "14.mp3": "embedded\u002F15b08ecfa987a75a611f9aaad32d36a289658c0301bc711be9fad8de939859be.mp3",
              "15.mp3": "embedded\u002F6bd7da45d4570b53ad41938626615fa5c36e11b03139db37b45aeb6fdaa7683a.mp3",
              "16.mp3": "embedded\u002Ff8e1c5aae14e939756cbfa0ffb475ba0d7e347f42e4c20210722d5a18cf8c0c1.mp3",
              "17.mp3": "embedded\u002F6185bd4c9db5a7fa68ee1b170eee59a4f5caac6250a9f7a98162a3f82df92e33.mp3",
              "18.mp3": "embedded\u002F3b2c68cbb8d726059f3720fc9e0423cbeef81a3e3d40b1d2412aa3399a859665.mp3",
              "19.mp3": "embedded\u002F879394bf5ef702d00dd70c7cf6d282c3bed3afac474da3db9a99003ea4da0804.mp3",
              "20.mp3": "embedded\u002Ffc97da788c565c4ba9b88585d917552f23c1fe439b090216ebe508afd98e7d28.mp3",
              "21.mp3": "embedded\u002F492b6d024be00168392be9173925f8ed8c8b009042a14ef85b5d2ead1ac963a1.mp3",
              "22.mp3": "embedded\u002F937e390b40538c3a216826414c32549de2728406e78f375ee19c9a6d3185dd8d.mp3",
              "23.mp3": "embedded\u002F1b54c1f6154642e6fb97ddb4174fee5a6b94260b3db4261ccbd955cc61b0d1f1.mp3",
              "24.mp3": "embedded\u002F104d7d20870d73b35b462429c9fb8a2003c4094b0119665c12d96a6e64790c43.mp3",
              "25.mp3": "embedded\u002F9134eb52af73bafcc33ef12ad2cb56ed09765a65fa0dae134303baeb8aa27b88.mp3",
              "26.mp3": "embedded\u002F4adaae2ef4b86ad49760cbd6fc2a8cbdd20d1b7e9fb7591ed095073f41a93acf.mp3",
              "27.mp3": "embedded\u002Fce8f7f2fb95ab4b426ac7da8314d1b7d5a1c2f9d042d3ff983a300c2516edb61.mp3",
              "28.mp3": "embedded\u002Fb459575d887a9edfdf7ac6b4e6448aa55927925310286211c59ac4a84b721e17.mp3",
              "29.mp3": "embedded\u002F511995c1a7aab79d14118070cf4f1fde4f5d92935eb3684a4b744da93ca6151c.mp3",
              "30.mp3": "embedded\u002F23e3bf2d8dca3d1ad57d3d627d0994be871f5e54aba50f83f7eeb35a459a7eaa.mp3",
              "31.mp3": "embedded\u002Fd46e8d0cb3cf4d1a34f24b8349cc250954a20879ff3a06033d76aa6e27f37651.mp3",
              "32.mp3": "embedded\u002Fc3b79cce7eeae47aab3f8e073bf2cd918a52faba51b078da9673b7c38d476f90.mp3",
              "33.mp3": "embedded\u002Fc8c4245bbde3753f0151f9d522f116eda8f63bfb22505f8b6272a33abf6b09eb.mp3",
              "34.mp3": "embedded\u002F848d90f47d46d4900b1170409d79b8a2ce3edc0725d7f18d73c7457e62497135.mp3",
              "35.mp3": "embedded\u002Fc75ed7cf2ea36d1154f00a0bacbc252520af1c23e977cfaca23ca820c4b06ec1.mp3",
              "36.mp3": "embedded\u002Fb4439f8b56f98d3db244506ba4fad1367540bdc3c20d0ca3f9b64a79f3ab3c69.mp3",
              "37.mp3": "embedded\u002F8d92fcf020e870ff0e535107058227cf284a8759865c3f30f028d26aab465097.mp3",
              "38.mp3": "embedded\u002Fb0d75d17813140c3dac00cc7ff8d2843ffa4f68e4b490bd973388eac1b9e4750.mp3",
              "39.mp3": "embedded\u002F4c32d9efd45d989b3014a840b7515951802d37913ccc77c46a4142fc861a9a23.mp3",
              "40.mp3": "embedded\u002F5c3cb7889f65219cfcca77cc90f94c6e3de9a29ad524c838efb77589f76a3082.mp3",
              "41.mp3": "embedded\u002Ff8e7ebffa384a63de768d10374f0a7b47cae2d5eae623f50e8610156e6deb916.mp3",
              "42.mp3": "embedded\u002F58069065ee5fbf29e5046c1e6fc6e5d817e9f90cf436cca123a1127033689689.mp3",
              "43.mp3": "embedded\u002Fce3f2e54a4422afb8df7f1e1258c33daca737c5788c57380ce6c6143228e5eba.mp3",
              "44.mp3": "embedded\u002F47bb56c1a8a262cb7d17a1f8107e2d40b9e60dfe26737aa060c13be47cf8ce61.mp3",
              "45.mp3": "embedded\u002F4e311d1d50e3c3f8a28b1caa727323c413ef8f332006c1b1b6c22788d6b7f4fa.mp3",
              "46.mp3": "embedded\u002Fa96409dd0e21bc2e98d517abe0bb3928a85b6e494d14b74670708a202f538918.mp3",
              "47.mp3": "embedded\u002Fcce67655fbbc1259fd11cf08c7307f8e0c804fb573fd575d557a5ca51168ecc5.mp3",
              "48.mp3": "embedded\u002Fcb6b8a1bfd4a3272abaeb4bc6355dc3073d68e3baffa0b99d5ce85ca1aa97fc7.mp3"
            },
            "responses": {
              "click(any) @w1_aoi": "word_1",
              "click(any) @w2_aoi": "word_2",
              "click(any) @w3_aoi": "word_3",
              "click(any) @w4_aoi": "word_4"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
// draw point on canvas function
const drawPoint = function(canvas, x, y) {
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = 'gray'
  ctx.font = '50px Georgia'
  ctx.textBaseline = 'middle'
  ctx.textAlign = "center"; 
  ctx.fillText("____", x, y) // allow location to vary
}

// variable to capture click count
var clickCount = 0;

// option: can set clicks to only register after
// a certain time with conditionals
// and push results while forcing a timeout (playing sound)
// using this.data instead of this.respond.
let responded = false

// default; no response
this.data.response = null

this.options.events['click @w1_aoi'] = e => {
  // Prevent default browser response
  e.preventDefault()
  if (responded) { // if responded is true
    // Do nothing
    return
  } else {
    if(clickCount < 1) {
    // draw point to give immediate feedback on click location
      drawPoint(e.target, this.parameters.w1_x, this.parameters.w1_y)
      clickCount ++
    }
    // Record the response
    this.data.response = 'word_1'
    this.data.response_action = 'click @w1_aoi'
    this.data.responseTimestamp = e.timeStamp
    if (this.options.correctResponse !== null) {
      this.data.correctResponse = this.options.correctResponse
      this.data.correct = this.data.response === this.options.correctResponse
    }
  }
}

this.options.events['click @w2_aoi'] = e => {
  // Prevent default browser response
  e.preventDefault()
  if (responded) { // if responded is true
    // Do nothing
    return
  } else {
    // draw point to give immediate feedback on click location
    if(clickCount < 1) {
      drawPoint(e.target, this.parameters.w2_x, this.parameters.w2_y)
      clickCount ++
    }
    // Record the response
    this.data.response = 'word_2'
    this.data.response_action = 'click @w2_aoi'
    this.data.responseTimestamp = e.timeStamp
    if (this.options.correctResponse !== null) {
      this.data.correctResponse = this.options.correctResponse
      this.data.correct = this.data.response === this.options.correctResponse
    }
  }
}

this.options.events['click @w3_aoi'] = e => {
  // Prevent default browser response
  e.preventDefault()
  if (responded) { // if responded is true
    // Do nothing
    return
  } else {
    // draw point to give immediate feedback on click location
    if(clickCount < 1) {
      drawPoint(e.target, this.parameters.w3_x, this.parameters.w3_y)
      clickCount++
    }
    // Record the response
    this.data.response = 'word_3'
    this.data.response_action = 'click @w3_aoi'
    this.data.responseTimestamp = e.timeStamp
    if (this.options.correctResponse !== null) {
      this.data.correctResponse = this.options.correctResponse
      this.data.correct = this.data.response === this.options.correctResponse
    }
  }
}

this.options.events['click @w4_aoi'] = e => {
  // Prevent default browser response
  e.preventDefault()
  if (responded) { // if responded is true
    // Do nothing
    return
  } else {
    if(clickCount < 1) {
      // draw point to give immediate feedback on click location
      drawPoint(e.target, this.parameters.w4_x, this.parameters.w4_y)
      clickCount++
    }
    // Record the response
    this.data.response = 'word_4'
    this.data.response_action = 'click @w4_aoi'
    this.data.responseTimestamp = e.timeStamp
    if (this.options.correctResponse !== null) {
      this.data.correctResponse = this.options.correctResponse
      this.data.correct = this.data.response === this.options.correctResponse
    }
  }
}
}
            },
            "title": "trial_screen",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ],
            "correctResponse": "word_1",
            "timeout": "${this.parameters.audio_timeout}",
            "timeline": [
              {
                "type": "sound",
                "start": "1000",
                "stop": "${ parameters.aud2_duration }",
                "priority": 0,
                "payload": {
                  "src": "${ this.files[parameters.audio_file] } "
                }
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 38.79,
                "height": 38.79,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${feedbackColour}"
              },
              {
                "type": "line",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 60,
                "height": 0,
                "stroke": "#ffffff",
                "strokeWidth": 5,
                "fill": "rgb(0,0,0)"
              },
              {
                "type": "line",
                "left": 0,
                "top": 0,
                "angle": "90",
                "width": "60",
                "height": 0,
                "stroke": "#ffffff",
                "strokeWidth": 5,
                "fill": "rgb(0,0,0)"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
if(this.state.response === null) { 
  feedbackColour = "orange"; // no response
} else if(this.state.response === this.state.correctResponse){
    feedbackColour = "green"; // correct response
  } else {
      feedbackColour = "red"; // incorrect response
  }
}
            },
            "title": "feedback",
            "timeout": "1000",
            "tardy": true
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()