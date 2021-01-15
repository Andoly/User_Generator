import React from "react";
import { Card, CardColumn, Image } from "./styles";

const UserCard = ({ name, picture }) => {
  return (
    <Card>
      <CardColumn>
        <Image src={picture.large} alt={name} />
      </CardColumn>
    </Card>
  );
};

export default UserCard;
