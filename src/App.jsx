import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NotFound from "./pages/not-found";
import HeaderBar from "./components/header";

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
