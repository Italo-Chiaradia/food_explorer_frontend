import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const DishContext = createContext({});

function DishProvider({children}) {
  async function createDish({dish, dishImg}) {
    try {
      const fileUploadForm = new FormData();
      fileUploadForm.append("img", dishImg);

      await api.patch
    }
  }

  return (
    <DishProvider.Provider>
      {children}
    </DishProvider.Provider>
  );
}

function useDish() {
  const data = useContext(AuthContext);
  return data;
}

export {DishProvider, useDish} 