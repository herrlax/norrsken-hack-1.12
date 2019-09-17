import React from "react";

type Props = {
  name: string;
  onClick(): void;
};

const itemsStyles = {
  marginBottom: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyleType: "none",
  height: "50px",
  background: "rgba(0,0,0,0.3)",
  borderRadius: "3px"
};

const DinnerItem = ({ name, onClick }: Props) => {
  return (
    <li style={itemsStyles} onClick={onClick}>
      {name}
    </li>
  );
};

export default DinnerItem;
