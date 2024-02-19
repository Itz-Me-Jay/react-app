import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useRoutes } from "react-router-dom";
import Routers from "./router";

function App() {
  let navigate = useNavigate();
  const Redirectpath = (path) => {
    navigate(path, { replace: true });
  };
  let element = useRoutes(Routers(Redirectpath));
  return (
    <div>
      {window.self === window.top ? (
        element
      ) : (
        <div>This page is secured from the Clickjacking attack</div>
      )}
    </div>
  );
}

export default App;
