export enum Strings {
  STR_LOGIN_BUTTON,
  STR_MSG_WELCOME,
  STR_MODE_MAP_VIEW,
  STR_MODE_LIST_VIEW,

  STR_FILTER_ALL_LABEL,
  STR_FILTER_LINKED_LABEL,
  STR_FILTER_MY_RECORD_LABEL,
  STR_FILTER_POPULAR_LABEL,
}

export default class String {
  constructor(public lang = "KR") {}

  private resource(): {
    [country: string]: { [key in Strings]: string };
  } {
    return {
      KR: {
        [Strings.STR_LOGIN_BUTTON]: "로그인 하기",
        [Strings.STR_MSG_WELCOME]: "당신의 일상을 기록해보세요.",
        [Strings.STR_FILTER_ALL_LABEL]: "모두보기",
        [Strings.STR_FILTER_LINKED_LABEL]: "연결된",
        [Strings.STR_MODE_MAP_VIEW]: "지도보기",
        [Strings.STR_MODE_LIST_VIEW]: "리스트보기",
        [Strings.STR_FILTER_MY_RECORD_LABEL]: "내 기록",
        [Strings.STR_FILTER_POPULAR_LABEL]: "인기있는",
      },
    };
  }

  get(nkey: Strings) {
    return this.resource()[this.lang][nkey];
  }
}
