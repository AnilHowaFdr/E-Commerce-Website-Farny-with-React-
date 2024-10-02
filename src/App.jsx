import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ErrorPage from "./components/ErrorPage";
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Layout from "./components/layout/Layout";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
