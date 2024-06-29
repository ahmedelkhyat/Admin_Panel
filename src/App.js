import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import styles from "./styles/app.module.css";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className={styles["grid-container"]}>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar
            sidebarToggle={sidebarToggle}
            toggleSidebar={toggleSidebar}
          />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
