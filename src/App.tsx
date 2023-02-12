import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import CreateNewPage from "./pages/RegisterPage/RegisterPage";
import FractionPage from "./pages/FractionPage/FractionPage";
import Layout from "./components/Layout/Layout";

import { ERoutes } from "./enums/routesEnum";

export default function App() {
  return (
    <Routes>
      <Route path={ERoutes.Login} element={<Layout />}>
        <Route path={ERoutes.Login} element={<LoginPage />} />
        <Route path={ERoutes.Register} element={<CreateNewPage />} />
        <Route path={ERoutes.Fraction} element={<FractionPage />} />
      </Route>
    </Routes>
  );
}