import React from "react";
import cardmobile from "./cardcontent";
import { Card } from "./Cards";
import "./mobile.css"

export class Mobile extends React.Component {
  render() {
    const finalcard = cardmobile.map((val) => {
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
