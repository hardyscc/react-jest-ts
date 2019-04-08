import React from "react";

interface IProps {
  items: string[];
}

const BeerList = ({ items }: IProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BeerList;
