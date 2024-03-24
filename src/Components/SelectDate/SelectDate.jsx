import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fechaSelecionada, getAllNumbers } from '../Redux/Actions';
import "./SelectDate.css";

function SelectDate() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDateValue = event.target.value;
    setSelectedDate(selectedDateValue);
    if (selectedDateValue) {
      dispatch(fechaSelecionada(selectedDateValue));
    }
  };

  console.log(selectedDate);

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
          style={{ backgroundColor: '#fff', color: "#0080F2"}}
        />
      </label>
    </div>
  );
}

export default SelectDate;
