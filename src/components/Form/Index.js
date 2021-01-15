import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import SelectComponent from "../Select/Index";
import Button from "../Button/Index";
import Input from "../Input/Index";

import { Form } from "./styles";

const mainOption = [
  { value: "1", label: "País" },
  { value: "2", label: "Gênero" },
];

const genderOptions = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Feminino" },
];

const countryOptions = [
  { value: "au", label: "Australia" },
  { value: "br", label: "Brasil" },
  { value: "ca", label: "Canadá" },
  { value: "ch", label: "Suiça" },
  { value: "de", label: "Alemanha" },
  { value: "dk", label: "Dinamarca" },
  { value: "es", label: "Espanha" },
  { value: "fi", label: "Finlândia" },
  { value: "fr", label: "França" },
  { value: "gb", label: "Reino Unido" },
  { value: "ie", label: "Irlanda" },
  { value: "ir", label: "Irã" },
  { value: "no", label: "Noruega" },
  { value: "nl", label: "Holanda" },
  { value: "nz", label: "Nova Zelândia" },
  { value: "tr", label: "Turquia" },
  { value: "us", label: "EUA" },
];

const Index = () => {
  const [selectMain, setselectMain] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [selectGenre, setSelectGenre] = useState("");
  console.log(selectMain);

  return (
    <Form>
      <SelectComponent
        options={mainOption}
        value={selectMain}
        setValue={setselectMain}
      />
      <AiOutlineArrowRight size={40} />

      <Input />
      {selectMain === "1" && (
        <SelectComponent
          options={countryOptions}
          value={selectCountry}
          setValue={setSelectCountry}
        />
      )}
      {selectMain === "2" && (
        <SelectComponent
          options={genderOptions}
          value={selectGenre}
          setValue={setSelectGenre}
        />
      )}
      <Button />
    </Form>
  );
};

export default Index;
