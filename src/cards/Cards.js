import React from "react";

export class Card extends React.Component {
  render() {
    let stylecard = {
      width: "18rem",
      margin: "20px 50px",
      height: "31rem",
      backgroundColor: "#555555",
      text: "black",
      borderRadius: "15px",
    };
    return (
      <div class="card" style={stylecard}>
        <img
          src={this.props.img}
          class="card-img-top"
          alt={this.props.alter}
          style={{ borderRadius: "15px 15px 0 0" }}
        />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.content}</p>
          <a href={this.props.linker} class="btn btn-secondary">
            Buy
          </a>
        </div>
      </div>
    );
  }
}
