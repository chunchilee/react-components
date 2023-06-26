import useNavigationContext from "../hooks/useNavigationContext";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;

//todo SideBar -> Link -> a, setCurrentPath -> Route path === currentPath display children
// Link 創建連結
// Route 顯示內容物
