import React from "react";
import { SelectComponent } from './styles'

const Index = ({ options, value, setValue }) => {
  return (
    <SelectComponent
      value={value}
      onChange={({ target }) => setValue(target.value)}
    >
      <option value="" disabled>
        Selecione uma opção:
      </option>
      {options && options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectComponent>
  );
};

export default Index;
