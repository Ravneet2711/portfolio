import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import Home from "./pages/Home";
import { ToastProvider } from "@/hooks/use-toast";
import AppToast from "@/components/ui/Toast";

function App() {
  return (
    <>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <AppToast />
        </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
