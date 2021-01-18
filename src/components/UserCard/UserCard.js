import React, { Fragment } from "react";
import { GrMapLocation } from "react-icons/gr"
import {
  Card,
  CardColumnFront,
  CardColumnBack,
  Image,
  CardTitle,
  CardSubTitle,
} from "./styles";

const UserCard = ({ name, picture, location, email, dob, login, cell }) => {
  const nameFull = () => {
    return `${name.first} ${name.last}`;
  };
  return (
    <Fragment>
      <Card>
        <CardColumnFront>
          <Image src={picture.large} alt={name} />
          <CardTitle>{nameFull()}</CardTitle>
        </CardColumnFront>
        <CardColumnBack>
        <CardSubTitle><span className="span">País: </span>{location.country}</CardSubTitle>
        <CardSubTitle><span className="span">Estado: </span>{location.state}</CardSubTitle>
        <CardSubTitle><span className="span">Cidade: </span>{location.city}</CardSubTitle>
          <CardSubTitle><span className="span">Rua: </span>{location.street.name}</CardSubTitle>
          <CardSubTitle><span className="span">Email: </span>{email}</CardSubTitle>
          <CardSubTitle><span className="span">Username: </span>{login.username}</CardSubTitle>
          <CardSubTitle><span className="span">Idade: </span>{dob.age} anos</CardSubTitle>
          <CardSubTitle><span className="span">Celular: </span>{cell}</CardSubTitle>
          
          <GrMapLocation size={35} />

        </CardColumnBack>
      </Card>
    </Fragment>
  );
};

export default UserCard;
