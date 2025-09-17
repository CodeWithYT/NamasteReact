import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine); // ✅ Use initial value from browser
  let count = 0;
  useEffect(() => {
    const handleOnline = () => setStatus(true);
    const handleOffline = () => setStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
};

export default useOnlineStatus;
