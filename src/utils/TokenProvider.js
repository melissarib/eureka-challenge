// react
import React, { useEffect, useState } from "react";

// getAccessToken Service
import { Auth } from "../services/getAccessToken";

// create context
const TokenProviderContext = React.createContext({
  token: {},
});

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    updateToken();
  }, []);

  const updateToken = async () => {
    const response = await Auth.getToken();

    setToken(response.data.token);
  };

  return (
    <TokenProviderContext.Provider value={{ token: token }}>
      {children}
    </TokenProviderContext.Provider>
  );
};

export default TokenProviderContext;
