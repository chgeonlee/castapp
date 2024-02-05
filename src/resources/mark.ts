import { DeviceEventEmitter } from "react-native/types";
import lib from "../lib";
import Wire from "../lib/wire";
import { UserDataProps } from "./user";

export interface MarkDataProps {
  dbid: string; // Mark record unique id,
  location: {
    latitude: number;
    longitude: number;
  };
  record: {
    text: string;
    mediaList: any;
  };
  stat: {
    like: number;
    reply: number;
  };
  user: UserDataProps;
  trace: {
    updated_at: string;
    created_at: string;
  };
}

class MarkResource {
  // null 은 아직 데이터를 받지 않은 상태
  private data: MarkDataProps[] | null = null;

  fetch = async () => {
    this.data = templates;
    lib.wire.fire(lib.const.event.LOADED_MARK_DATA);
  };

  getData = (): MarkDataProps[] => {
    //if (this.data == null) throw new Error("비정상적인 접근입니다.");

    return this.data;
  };
}

export default new MarkResource();

const templates = [
  {
    dbid: "markdatadbid00001",
    location: {
      latitude: 37.498095,
      longitude: 127.02761,
    },
    record: {
      text: "이태원 어디선가",
      mediaList: [
        {
          type: "img",
          url: "https://i.pinimg.com/474x/dc/d2/2c/dcd22c2427dcd3644ea2dc5882edd864.jpg",
          size: {
            width: 235,
            height: 353,
          },
        },
      ],
    },
    stat: {
      like: 32,
      reply: 120,
    },
    user: {
      dbid: "userdbid0001",
      id: "chgeon.lee",
      name: "충건",
      thumbnail:
        "data:image/jpeg;base64,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",
      introduceText: "헬로우",
    },
    trace: {
      updated_at: "2024-01-01T00:00:00",
      created_at: "2024-01-01T00:00:00",
    },
  },
  {
    dbid: "markdatadbid00002",
    location: {
      latitude: 37.478095,
      longitude: 127.05761,
    },
    record: {
      text: "여긴 어디 나는 누구",
      mediaList: [
        {
          type: "img",
          url: "https://i.pinimg.com/474x/a7/94/65/a79465dc5211ba7bde2ae165ee0676d6.jpg",
          size: {
            width: 235,
            height: 353,
          },
        },
        {
          type: "img",
          url: "https://i.pinimg.com/474x/fd/93/d8/fd93d8833963903b87c962ced35ea3e7.jpg",
          size: {
            width: 235,
            height: 353,
          },
        },
      ],
    },
    stat: {
      like: 12,
      reply: 0,
    },
    user: {
      dbid: "userdbid0001",
      id: "chgeon.lee",
      name: "충건",
      thumbnail:
        "data:image/jpeg;base64,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",
      introduceText: "헬로우",
    },
    trace: {
      updated_at: "2024-01-01T00:00:00",
      created_at: "2024-01-01T00:00:00",
    },
  },
];

// = {
//     dbid: "userdbid0001",

//     //   id: "chgeon.lee",
//     //   name: "충건",
//     //   thumbnail: "",
//     //   introduceText: "이충건인데요?",
//   };
