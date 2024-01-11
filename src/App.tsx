import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
