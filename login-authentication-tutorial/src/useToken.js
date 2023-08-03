import React, { useState } from "react";

function useToken() {
  function getToken() {
    const tokenString = sessionStorage.getItem("token");
    const token = JSON.parse(tokenString);
    return token ? token : null;
  }

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    console.log(userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}

export default useToken;
