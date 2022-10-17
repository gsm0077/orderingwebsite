import React from "react";
import cardmoba from "./cardcontent3";
import { Card } from "../cards/Cards";

export class Mobacc extends React.Component {
  render() {
    const finalcard = cardmoba.map((val) => {
      return (
        <div
          className="col-6 col-md-4"
          style={{ backgroundColor: "black", textAlign: "center" }}>
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
        <div className="row" style={{display:"flex"}}>{finalcard}</div>
      </>
    );
  }
}