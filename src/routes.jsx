import { Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
