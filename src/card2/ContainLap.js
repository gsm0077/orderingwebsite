import React from "react";
import cardpc from "./cardcontent2";
import { Card } from "../cards/Cards";
import "./Cardlap.css";

export class Pcom extends React.Component {
  render() {
    const finalcard = cardpc.map((val) => {
      return (
        <div className="cardelement">
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
