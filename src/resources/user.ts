import lib from "../lib";

export interface UserDataProps {
  dbid: string; // user unique id,
  id: string; // user id, ( id는 고유하나, 탈퇴 및 정지 등에 의하여 다른 사람이 아이디를 가져갈수있다.)
  name: string; // user name,
  thumbnail: string | null; // thumbnail url
  introduceText: string | null; // 소개글
  // ...etc
}

class User {
  private data: UserDataProps | null = null;

  logged() {
    return this.data !== null;
  }

  login = () => {
    this.data = template;
  };
  logout = () => {};
  getData = (): UserDataProps => {
    if (this.data == null) throw new Error("비정상적인 접근입니다.");

    return this.data;
  };
}

export default new User();

const template = {
  dbid: "userdbid0001",
  id: "chgeon.lee",
  name: "충건",
  thumbnail: "",
  introduceText: "이충건인데요?",
};
