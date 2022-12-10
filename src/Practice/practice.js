import React from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";

export class Userform extends React.Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    this.state = {
      userObjectlist: {
        pName: "",
        pEmail: "",
        pPhone: "",
      },
    };
  }

  handleInputChange = (c) => {
    const name = c.target.name;
    this.setState({
      userObjectlist: { ...this.state.userObjectlist, [name]: c.target.value },
    });
  };

  handleSubmit = () => {
    if (this.validator.allValid()) {
      console.log(this.state.userObjectlist);
      axios
        .post("http://localhost:4000/product")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <>
        <h4> User form</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="pName"
                value={this.state.pName}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "name",
                this.state.userObjectlist.pName,
                "required|alpha_space|min:3|max:25",
                { className: "text-danger" }
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                name="pEmail"
                value={this.state.userObjectlist.pEmail}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "Email",
                this.state.userObjectlist.pEmail,
                "required|email",
                { className: "text-danger" }
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Phone</label>
              <input
                type="number"
                class="form-control"
                name="pPhone"
                value={this.state.userObjectlist.pPhone}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "Phone",
                this.state.userObjectlist.pPhone,
                "required|phone",
                { className: "text-danger" }
              )}
            </div>
          </div>

          <br />
          <button
            type="submit"
            className="btn btn-danger"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </>
    );
  }
}
