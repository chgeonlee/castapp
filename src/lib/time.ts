class Time {
  private static _instance: Time;
  public static get instance() {
    return this._instance || (this._instance = new Time());
  }

  dayDiff = (n: string) => {
    const curr: Date = new Date();
    const targ: Date = new Date(n);
    const diff = Number(curr) - Number(targ);
    return parseInt(diff / (1000 * 60 * 60 * 24) + "");
  };

  tickerForm = (n: string) => {
    const curr: Date = new Date();
    const targ: Date = new Date(n);
    const diff = Number(curr) - Number(targ);
    const hoursDifference = diff / (1000 * 60 * 60);

    if (hoursDifference < 24) {
      return parseInt(hoursDifference + "") + "시간 전";
    } else if (hoursDifference / 24 < 10) {
      return parseInt(hoursDifference / 24 + "") + "일 전";
    } else {
      return (
        targ.getFullYear() +
        "년 " +
        (targ.getMonth() + 1) +
        "월 " +
        targ.getDay() +
        "일"
      );
    }
  };
}

export default Time.instance;
