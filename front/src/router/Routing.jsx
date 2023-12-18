import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../components/Principal";
import Error from "../Error/Error";
import LayoutPublica from "../components/LayoutPublica";
import CuerpoCalendario from "../components/calendar/CuerpoCalendario";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Ruta Calendario*/}
        <Route path="/" element={<LayoutPublica />} />
        <Route index element={<Principal />} />
        <Route path="/Calendar" element={<CuerpoCalendario />} />
        {/*Rutas Error*/}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
