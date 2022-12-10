import React from "react";
import cardmoba from "./cardcontent3";
import { Card } from "../cards/Cards";

export class Mobacc extends React.Component {
  render() {
    const finalcard = cardmoba.map((val) => {
      return (
        <div
        className="cardelement">
          <Card
            img={val.img}
            alter={val.alter}
            title={val.title}
            content={val.content}
            linker={val.linker}
          />
        </div>
      );
    });
    return (
      <>
        <div className="cardrow">{finalcard}</div>
      </>
    );
  }
}