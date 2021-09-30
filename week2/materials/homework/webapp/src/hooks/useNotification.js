import { useState } from "react";
//import useProducts from "./useProducts";

function useNotifications() {
  const [notification, setNotification] = useState();

  const createNotification = (text) => {
    setNotification(text);
  }

  return {
    notification, createNotification
  };
}

export default useNotifications;
