import { useState } from "react";

export default function useLogin() {
  const [loggedUser, setLoggedUser] = useState(true);
  const handleUserLogin = () => {
    /**
     * @todo login api 연동
     */
    setLoggedUser(true);
  };

  return {
    loggedUser,
    handleUserLogin,
  };
}
