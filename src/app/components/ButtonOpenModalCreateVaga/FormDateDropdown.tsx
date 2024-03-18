import React, { useState, ChangeEvent } from 'react';

interface FormDateDropdownProps {
  onChange: (formData: { dia: string; mes: string; ano: string }) => void;
  showNextTenYears: boolean;
  showPrevious60Years: boolean;
}

const FormDateDropdown: React.FC<FormDateDropdownProps> = ({ onChange, showNextTenYears, showPrevious60Years }) => {
  const [formData, setFormData] = useState({
    dia: '',
    mes: '',
    ano: ''
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Send the updated formData back to the parent component
    onChange({ ...formData, [name]: value }); // Using the latest state
  };

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const margin10Years = showNextTenYears ? currentYear + 10 : currentYear;
    const margin60Years = showPrevious60Years ? currentYear - 60 : currentYear
    const startYear = 1901;
    return Array.from({ length: margin10Years - startYear + 1 }, (_, index) => margin10Years - index);
  };

  return (
    <> 
      <select className='
        p-21 w-full rounded-8 p-4
        rounded-xl bg-white mr-2 
        '
        name="dia" value={formData.dia} onChange={handleChange}>
        <option >Dia</option>
        {/* Options for days */}
        {Array.from({ length: 31 }, (_, index) => (index + 1).toString().padStart(2, '0'))
          .map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
      </select>
      <select className='
        p-21 w-full rounded-8 p-4 m-2
        rounded-xl bg-white 
        '
        name="mes" value={formData.mes} onChange={handleChange}>
        <option >Mês</option>
        {/* Options for months */}
        {Array.from({ length: 12 }, (_, index) => (index + 1).toString().padStart(2, '0'))
          .map((mes) => (
            <option key={mes} value={mes}>
              {mes}
            </option>
          ))}
      </select>
      <select className='
        p-21 w-full rounded-8 p-4 ml-2
        rounded-xl bg-white 
        ' 
        name="ano" value={formData.ano} onChange={handleChange}>
        <option>Ano</option>
        {/* Options for years */}
        {getYears().map((ano) => (
          <option key={ano} value={ano}>
            {ano}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormDateDropdown;
