import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const [customValue, setCustomValue] = useState(35000);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(15); // Valor por defecto para el día
  const [customEventDate, setCustomEventDate] = useState(null);
  const [customEventTitle, setCustomEventTitle] = useState("");
  const [specialEvents, setSpecialEvents] = useState([]);
  const [customEventValue, setCustomEventValue] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [totalIngresos, setTotalIngresos] = useState();
  const [totalGastos, setTotalGastos] = useState();
  const [totalMes, setTotalMes] = useState();
  const [estado, setEstado] = useState();
  const valorDefault = 35000;
  const handleChange = (event) => {
    setCustomValue(event.target.value);
  };

  const handleDayChange = (event) => {
    const dayValue = parseInt(event.target.value, 10);
    setSelectedDay(dayValue);
  };
  const handleEventTitleChange = (event) => {
    if (event.target.value == 1) {
      setCustomEventTitle("Mecanico");
      setEstado(0);
    } else if (event.target.value == 2) {
      setCustomEventTitle("Accidente");
      setEstado(0);
    } else if (event.target.value == 3) {
      setCustomEventTitle("Atraco");
      setEstado(0);
    } else if (event.target.value == 4) {
      setCustomEventTitle("Bonificacion");
      setEstado(1);
    } else if (event.target.value == 5) {
      setCustomEventTitle("Otro");
    }
  };
  const handleEventDateChange = (event) => {
    setCustomEventDate(event.target.value);
  };
  const handleEventValueChange = (event) => {
    setCustomEventValue(parseInt(event.target.value, 10));
  };
  const EventValueChangeDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Obtener la fecha seleccionada
    const selectedDateFromInput = selectedDate ? new Date(selectedDate) : null;
    // Aplicar el valor personalizado solo si la fecha seleccionada es después del día seleccionado
    if (selectedDateFromInput) {
      const selectedDayFromInput = selectedDateFromInput.getDate();
      if (selectedDayFromInput >= selectedDay) {
        setCustomValue(35000); // Cambia 500 al valor que desees aplicar después del día específico
      }
    }
    // Agregar evento a la lista de eventos especiales si la fecha y el título están definidos
    if (customEventDate && customEventTitle && customEventValue) {
      setSpecialEvents((prevEvents) => [
        ...prevEvents,
        {
          title: customEventTitle,
          date: new Date(customEventDate).toISOString().split("T")[0],
        },
      ]);

      setCustomEventDate(null);
      setCustomEventTitle("");
    }

    // Aquí podrías hacer más cosas con el valor personalizado y los eventos si es necesario
  };
  let gastoDeault = 0;
  useEffect(() => {
    let totalGastar = gastoDeault + customEventValue;
    setTotalGastos(totalGastar);
    let total = currentDay * customValue;
    setTotalIngresos(total);
    let totalMes;
    if (estado == 0) {
      totalMes = totalIngresos - totalGastos;
    } else {
      totalMes = totalIngresos + totalGastos;
    }
    if (totalMes <= 0) {
      totalMes = 0;
    }
    setTotalMes(totalMes);
  }, [
    currentDay,
    valorDefault,
    customEventValue,
    gastoDeault,
    totalIngresos,
    totalGastos,
    estado,
    customValue,
  ]);
  // Incrementar currentDate por un día para establecer el límite hasta mañana
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  // Generar eventos para el mes actual
  const generateEventsForMonth = (year, month, initialValue, updatedValue) => {
    const events = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Obtener el último día del mes

    //ciclo para recorrer dias
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const value = day >= selectedDay ? updatedValue : initialValue;
      events.push({
        title: `Ganancia: $${value}`,
        date: date.toISOString().split("T")[0],
      });
    }

    // Agregar eventos especiales a la lista
    specialEvents.forEach((event) => {
      events.push({
        title: event.title,
        date: event.date,
        extendedProps: {
          value: customEventValue, // Agrega el valor al objeto extendedProps
          otherContent: descripcion, // Agrega otro contenido al objeto extendedProps
        },
      });
    });

    return events;
  };

  const eventsForCurrentMonth = generateEventsForMonth(
    currentYear,
    currentMonth,
    valorDefault,
    customValue
  );

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        style={{ textAlign: "center" }}
        className="row g-3 text-center"
      >
        <div className="row">
          <strong>
            <h2 className="text-start">Valor Nuevos Ingresos</h2>
          </strong>
          <div className="col-auto">
            <h3>Valor personalizado:</h3>
          </div>
          <div className="col-auto">
            <div className="">
              <input
                type="number"
                value={customValue}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-auto">
            <h3>Selecciona el Día:</h3>
          </div>
          <div className="col-auto">
            <input
              type="number"
              placeholder="1"
              onChange={handleDayChange}
              className="form-control"
              min="1"
              max="31"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-auto">
            <h3>Fecha del Evento:</h3>
          </div>
          <div className="col-auto">
            <input
              type="date"
              value={customEventDate}
              onChange={handleEventDateChange}
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <select
              className="form-select"
              aria-label="Default select example"
              value={customEventTitle}
              onChange={handleEventTitleChange}
            >
              <option selected>Selecciona el Motivo</option>
              <option value="1">Mecanico</option>
              <option value="2">Accidente</option>
              <option value="3">Atraco</option>
              <option value="4">Bonificacion</option>
              <option value="5">Otro</option>
            </select>
          </div>
          <div className="col-auto">
            <input
              type="number"
              value={customEventValue}
              onChange={handleEventValueChange}
              placeholder="Valor del Evento"
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              value={descripcion}
              onChange={EventValueChangeDescripcion}
              placeholder="Descripcion del Evento"
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-info">
              Aplicar
            </button>
          </div>
        </div>
        <div className="row mt-3 text-start">
          <h5>Total Ingresos Actuales : {totalIngresos}</h5>
        </div>
        <div className="row mt-3 text-start">
          <h5>Total Gastos Actuales : {totalGastos}</h5>
        </div>
        <div className="row mt-3 text-start">
          <h5>Total Dia Actual: {totalMes}</h5>
        </div>
      </form>

      <FullCalendar
        className="mt-5"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={eventsForCurrentMonth}
        validRange={{
          end: tomorrow.toISOString().split("T")[0],
        }}
        eventContent={(info) => {
          return (
            <div>
              <strong>{info.event.title}</strong>
              <p>Fecha: {info.event.start.toISOString().split("T")[0]}</p>
              {info.event.extendedProps && (
                <>
                  <p>Gastos: {info.event.extendedProps.value}</p>
                  <p>Descripcion: {info.event.extendedProps.otherContent}</p>
                </>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

export default Calendar;
