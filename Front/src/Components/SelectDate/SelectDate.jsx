import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fechaSelecionada, getAllNumbers } from '../Redux/Actions';
import "./SelectDate.css";

function SelectDate({ onDateChange }) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDateValue = event.target.value;
    setSelectedDate(selectedDateValue);
    if (selectedDateValue) {
      dispatch(fechaSelecionada(selectedDateValue));
      onDateChange(selectedDateValue); // Pasar la fecha seleccionada al componente padre
    }
  };

  useEffect(() => {
    if (selectedDate) {
      dispatch(getAllNumbers(selectedDate));
    }
  }, [dispatch, selectedDate]);

  return (
    <div>
      <label className="labelDate">
        <input
          type="date"
          name="date"
          value={selectedDate === "" ? formattedDate : selectedDate}
          onChange={handleDateChange}
          style={{ backgroundColor: '#ffec5b', color: "#0080F2"}}
        />
      </label>
    </div>
  );
}

export default SelectDate;
