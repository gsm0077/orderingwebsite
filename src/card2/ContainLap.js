import React from "react";
import cardpc from "./cardcontent2";
import { Card } from "../cards/Cards";

export class Pcom extends React.Component {
  render() {
    const finalcard = cardpc.map((val) => {
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