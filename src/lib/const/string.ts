export enum Strings {
  LOGIN_BUTTON,
  MSG_WELCOME,
  MODE_MAP_VIEW,
  MODE_LIST_VIEW,

  FILTER_ALL_LABEL,
  FILTER_LINKED_LABEL,
  FILTER_MY_RECORD_LABEL,
  FILTER_POPULAR_LABEL,
  HEADER_NEW_RECORD,
}

export default class String {
  constructor(public lang = "KR") {}

  private resource(): {
    [country: string]: { [key in Strings]: string };
  } {
    return {
      KR: {
        [Strings.LOGIN_BUTTON]: "로그인 하기",
        [Strings.MSG_WELCOME]: "당신의 일상을 기록해보세요.",
        [Strings.FILTER_ALL_LABEL]: "모두보기",
        [Strings.FILTER_LINKED_LABEL]: "연결된",
        [Strings.MODE_MAP_VIEW]: "지도보기",
        [Strings.MODE_LIST_VIEW]: "리스트보기",
        [Strings.FILTER_MY_RECORD_LABEL]: "내 기록",
        [Strings.FILTER_POPULAR_LABEL]: "인기있는",
        [Strings.HEADER_NEW_RECORD]: "새로운 기록",
      },
    };
  }

  get(nkey: Strings) {
    return this.resource()[this.lang][nkey];
  }
}
