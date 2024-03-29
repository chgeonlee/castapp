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
    text?: string;
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
    dbid: "markdatadbid00000",
    location: {
      latitude: 37.509095,
      longitude: 127.02361,
    },
    record: {
      text: "스윙 재즈는 아프리카계 미국인과 서아프리카 음악과 춤과 관련 되는 당김음으로 된 타이밍에 특징이 있다. 많은 스윙댄서들이 ‘트리플 스텝’과 ‘찰스턴’으로 일컫는 4분음표와 8분음표의 조합이 그것이다. 또한 여전히 이 설명은 리듬이 연주되는 방식에 따라 바뀐다. 구분된 지연 혹은 ‘지연된’이라는 말은 타이밍과 관련있다.",
      mediaList: [
        {
          type: "img",
          url: "https://i.pinimg.com/474x/76/ef/1f/76ef1f9f60c2c7d54201bab7a0dd792c.jpg",
          size: {
            width: 235,
            height: 313,
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
      created_at: "2024-02-06T00:00:00+09:00",
    },
  },
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
      created_at: "2024-02-01T00:00:00",
    },
  },
  {
    dbid: "markdatadbid00004",
    location: {
      latitude: 37.491215,
      longitude: 127.02261,
    },
    record: {
      text: "Truecallers users on iOS have a higher conversion rate to also becoming premium users which is an important driver of user subscription income for Truecaller. In Q3 2023 income from consumers subscriptions was 14% of total revenues and grew 20% compared to Q3 2022.",
      mediaList: [],
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
  {
    dbid: "markdatadbid00002",
    location: {
      latitude: 37.495215,
      longitude: 127.02261,
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
  {
    dbid: "markdatadbid00003",
    location: {
      latitude: 37.495215,
      longitude: 127.02261,
    },
    record: {
      //text: "여긴 어디 나는 누구",
      mediaList: [
        {
          type: "img",
          url: "https://i.pinimg.com/474x/2b/54/aa/2b54aaba9f4d2ab44c74c7182cc025d5.jpg",
          size: {
            width: 353,
            height: 235,
          },
        },
        {
          type: "img",
          url: "https://i.pinimg.com/474x/92/4a/65/924a657a399ff18c8cb8995ce68c594d.jpg",
          size: {
            width: 353,
            height: 235,
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

//https://i.pinimg.com/474x/92/4a/65/924a657a399ff18c8cb8995ce68c594d.jpg
