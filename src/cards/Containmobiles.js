import React from "react";
import cardmobile from "./cardcontent";
import { Card } from "./Cards";

export class Mobile extends React.Component {
  render() {
    const finalcard = cardmobile.map((val) => {
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
