import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Homepage = lazy(() => import("./pages/Homepage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
import { Toaster } from "react-hot-toast";
import UserContext from "./context/userContext";
const Products = lazy(() => import("./pages/Products/Products"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductContext from "./context/productContext";
import Spinner from "./ui/Spinner/Spinner";

function App() {
  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/products"
                element={
                  <ProductContext>
                    <Products />
                  </ProductContext>
                }
              />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </UserContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
