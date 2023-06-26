import { createContext, useEffect, useState } from "react";
const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  return (
    <NavigationContext.Provider value={{ navigate, currentPath} }>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
