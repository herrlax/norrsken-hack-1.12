import React from "react";

type Props = {
  name: string;
  onClick(): void;
};

const DinnerItem = ({ name, onClick }: Props) => {
  return (
    <li onClick={onClick} className="List-item">
      {name}
    </li>
  );
};

export default DinnerItem;
