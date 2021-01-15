import React from "react";
import { Input } from "./styles";

const Index = ({ count, setValue }) => {
  return (
    <Input
      type="number"
      value={count}
      onChange={({ target }) => setValue(target.value > 0 ? target.value : 1)}
      placeholder="Dígite a quantidade de usuários:"
    />
  );
};

export default Index;
