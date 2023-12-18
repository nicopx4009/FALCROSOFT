import { Navigate, Outlet } from "react-router-dom";
const LayoutPublica = () => {
  return (
    <>
      <Outlet />
      <Navigate to="/" />
    </>
  );
};

export default LayoutPublica;
