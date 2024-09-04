import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({email, password}) {
    if (!email || !password) {
      return alert("Preencha todos os campos");
    }
    try {
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({user, token});
    } catch(error) {
      if (error.response) { 
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({user: JSON.stringify(user), token});
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        signIn, 
        signOut,
        user: data.user 
      }}  
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const data = useContext(AuthContext);
  return data;
}

export { AuthProvider, useAuth };