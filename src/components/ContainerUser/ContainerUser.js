import React, { Fragment, useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import SelectComponent from "../Select/Index";
import Button from "../Button/Index";
import Input from "../Input/Index";
import LoadingComponent from "../Loading/Loading";

import { Form, LoadingWrapper, User } from "./styles";
import UserCard from "../UserCard/UserCard";

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

const ContainerUser = () => {
  const [selectMain, setselectMain] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [selectGenre, setSelectGenre] = useState("");
  const [counter, setCounter] = useState(1);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [userInform, setUserInform] = useState([]);

  // console.log(userInform);

  useEffect(() => {
    if (selectMain !== "") {
      setSelectCountry("");
      setSelectGenre("");
    }
  }, [selectMain]);

  const checkInput = () => {
    return selectCountry !== "" || selectGenre !== "";
  };

  const getRequest = () => {
    return selectCountry !== ""
      ? `?nat=${selectCountry}`
      : selectGenre !== ""
      ? `?gender=${selectGenre}`
      : null;
  };

  const handleRequestUser = (event) => {
    event.preventDefault();
    const headers = new Headers();
    headers.append("Context-Type", "application/json");

    if (checkInput() && getRequest()) {
      setLoadingRequest(true);
      fetch(`https://randomuser.me/api/${getRequest()}&results=${counter}`, {
        headers,
      }).then((response) => {
        response.json().then((parsed) => {
          const { results } = parsed;
          setUserInform(results);
          setLoadingRequest(false);
        });
      });
    } else {
      return alert("Selecione uma opção por favor !");
    }
  };

  return (
    <Fragment>
      <hr style={{ border: "none", borderTop: "1px solid #dedede" }} />
      <Form onSubmit={(event) => handleRequestUser(event)}>
        <SelectComponent
          options={mainOption}
          value={selectMain}
          setValue={setselectMain}
        />
        <AiOutlineArrowRight size={40} />

        <Input value={counter} setValue={setCounter} />
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
        <Button disable={loadingRequest} />
      </Form>
      <hr style={{ border: "none", borderTop: "1px solid #dedede" }} />
      {loadingRequest && (
        <LoadingWrapper>
          <LoadingComponent />
        </LoadingWrapper>
      )}
      <User>
        {!loadingRequest &&
          userInform.map((person, index) => {
            return <UserCard key={index} {...person} />;
          })}
      </User>
    </Fragment>
  );
};

export default ContainerUser;
