import { Select } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import "../SelectNames/SelectNames.css";
import { fechaSelecionada, getAllNumbers, getNameLottery } from '../Redux/Actions';
import { dataName } from '../Constantes/Constantes';

export default function SelectInput({ selectedDate }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loteryNumbers);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedLottery, setSelectedLottery] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const [nameLottery, hr] = selectedValue.split('|');
    dispatch(fechaSelecionada(null));
    dispatch(getNameLottery(nameLottery, hr));
    setSelectedOption(selectedValue);
    setSelectedLottery(nameLottery);
  };

  useEffect(() => {
    if (selectedLottery) {
      dispatch(getAllNumbers(selectedLottery));
    }
  }, [dispatch, selectedLottery]);

  const filteredLotteries = dataName.filter(item => {
    // Filtrar loterías basadas en la fecha seleccionada
    return item.date === selectedDate; // Suponiendo que hay una propiedad "date" en tu objeto item de dataName
  });

  return (
    <div className="max-w-md bg-red" id="select">
      <div className="mb-2 block bg-red">
        <Select
          id="lotteries"
          required
          onChange={handleSelectChange}
          value={selectedOption}

          style={{ backgroundColor: '#fff', border: '0.25px solid #0d473b', color: "#0080F2", width:"220px", marginLeft:"10px" }}
        >
          <option value="" disabled={selectedOption ? false : true}>
            Seleccione su lotería
          </option>
          {filteredLotteries.map((item) => (
            <option key={item.id} value={`${item.nameLottery}|${item.hr}`} style={{ padding: '8px', fontSize:"15px" }}>
              {item.nameLottery} {item.hr}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}