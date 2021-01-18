import React, { Fragment } from "react";
import {
  Card,
  CardColumnFront,
  CardColumnBack,
  Image,
  CardTitle,
} from "./styles";

const UserCard = ({ name, picture, nat }) => {
  const nameFull = () => {
    return `${name.first} ${name.last}`;
  };
  return (
    <Fragment>
      <Card>
        <CardColumnFront>
          <Image src={picture.large} alt={name} />
          <CardTitle>{nameFull()}</CardTitle>
          {nat}
        </CardColumnFront>
        <CardColumnBack>
          AAAAAAAAA
        </CardColumnBack>
      </Card>
    </Fragment>
  );
};

export default UserCard;
