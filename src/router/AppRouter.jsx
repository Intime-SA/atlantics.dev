import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";
import { routes } from "./routes";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword";
import Staff from "../components/pages/staff/Staff";
import Contacto from "../components/pages/contacto/Contacto";
import Cost from "../components/pages/services-pages/Cost";
import Pasarelas from "../components/pages/services-pages/Pasarelas";
import Shipping from "../components/pages/services-pages/Shipping";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="/staff" element={<Staff />} />

      <Route path="/contacto" element={<Contacto />} />

      <Route path="/pagos" element={<Pasarelas />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/cost" element={<Cost />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* register  */}
      <Route path="/register" element={<Register />} />

      {/* forgot password  */}
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
