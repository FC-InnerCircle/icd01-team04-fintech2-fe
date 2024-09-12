import { atom } from "jotai";

// 상태 정의 (Atom)
export const LoginStatus = atom({
  isLoggedIn: false,
  roll: "",
  user: {
    name: "",
    email: "",
  },
});
