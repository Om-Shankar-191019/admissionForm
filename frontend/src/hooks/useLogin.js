import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userInput) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      const data = await res.json();
      if (data.error) {
        console.log(data.error);
      }
      setAuthUser(data);
      console.log(data);
    } catch (error) {
      throw new Error(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
