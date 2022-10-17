import React from "react";
import SimpleReactValidator from 'simple-react-validator';

export class Signup extends React.Component {
  constructor(props) {
    super(props)
  this.validator = new SimpleReactValidator();

    this.state = {
      userObjectlist: {
        name: "",
        dob: "",
        email: "",
        phone: "",
        password: "",
      },
      userTabledata: [
        {
          name: "",
          dob: "",
          email: "",
          phone: "",
          password: "",
        },
      ],
    };
  }
 
  handleInputChange = (c) => {
    const name = c.target.name;
    const value = c.target.value;
    this.setState({
      userObjectlist: { ...this.state.userObjectlist, [name]: value },
    });
    
  
  };


  handleSubmit = () => {
    if (this.validator.allValid()) {
      this.state.userTabledata.push(this.state.userObjectlist);
      console.log(this.state.userTabledata);
      this.setState({ userTabledata: this.state.userTabledata });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      
    }
  };

  render() {
    const mystyle = {
      backgroundColor: "#555555",
      color:"white"
    };
    const mystyle2 = {
      backgroundColor: "#555555",
      color:"white"
    };

    return (
      <div className="row">
        <div className="col-md-6" style={mystyle}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={this.state.userObjectlist.name}
                  onChange={this.handleInputChange}
                />
                {this.validator.message(
                  "name",
                  this.state.userObjectlist.name,
                  "required|alpha_space|min:3|max:25",
                  { className: "text-danger" }
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label class="form-label">Dob</label>
                <input
                  type="date"
                  class="form-control"
                  name="dob"
                  value={this.state.userObjectlist.dob}
                  onChange={this.handleInputChange}
                />
                {this.validator.message(
                  "Dob",
                  this.state.userObjectlist.dob,
                  "required",
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
                  name="email"
                  value={this.state.userObjectlist.email}
                  onChange={this.handleInputChange}
                />
                {this.validator.message(
                  "Email",
                  this.state.userObjectlist.email,
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
                  name="phone"
                  value={this.state.userObjectlist.phone}
                  onChange={this.handleInputChange}
                />
                {this.validator.message(
                  "Phone",
                  this.state.userObjectlist.phone,
                  "required|phone",
                  { className: "text-danger" }
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  value={this.state.userObjectlist.password}
                  onChange={this.handleInputChange}
                />
                {this.validator.message(
                  "password",
                  this.state.userObjectlist.password,
                  "required|alpha_num_dash|min:7|max:20",
                  { className: "text-danger" }
                )}
              </div>
            </div>  
              <br/>
              <button
                type="submit"
                className="btn" style={{backgroundColor:"ThreeDShadow",color:"white" , width:'7rem', psdding:'0 0 20px 0'}}
                onClick={this.handleSubmit}>
                Submit
              </button>
          </div>
        </div>
        <div className="col-md-6" style={mystyle2}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Dob</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userTabledata.map((the, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{the.name}</td>
                  <td>{the.dob}</td>
                  <td>{the.email}</td>
                  <td>{the.phone}</td>
                  <td>{the.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}










// export class Signup extends React.Component {

//   constructor(props) {
//     super(props)
//     this.validator = new SimpleReactValidator();
  

//   this.state = {
//     list: {
//     Fname: "",
//     Lname: '',
//     email: "",
//     password: "",
//     dob: "",
//     gender: ""
    
//     }
//     }
//   }
  
//   handleSubmit = () => {
     
//     if (this.validator.allValid()) {
//       alert('you submitted the form ');
//       console.log("clicked ya");
//     } else {
//       this.validator.showMessages();
//       this.forceUpdate();
//     }



//   };
//   handleInputchange = (q) => {
//     const name = q.target.name;
//     const value = q.target.value;
//     this.setState({
//       list: {
//         ...this.state.list, [name]: value
//       }
//     });
    
//   }

//   render() {
//     const contain = {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginBottom: "10px",
//       borderRadius: "10px",
//     };
//     const cont = {
//       backgroundColor: "#555555",
//       display: "flex",
//       justifyContent: "center",
//       width: "450px",
//       height: "410px",
//       padding: "10px",
//       borderRadius:"7px"
//     };
//     const bu = { width: "120px",
//     height: "40px",
//     border: "none",
//       borderRadius: "7px",
//       backgroundColor: "black",
//     color:"white"

//     }
//     return (
//       <div className="container" style={cont}>
//         <div className="row">
//           <div className="col-md-6" style={contain}>
//             <div className="mb-3">
//               <label class="form-label">
//                 <input value={this.state.Fname} onChange={this.handleInputchange}
//                   name= "Fname"
//                   type="text"
//                   placeholder="First Name"
//                   class="form-control"
//                 />
//               </label>
//               {this.validator.message('Fname', this.state.list.Fname, 'required|alpha_space|min:3|max:25',{ className: "text-danger" })}
//             </div>
//           </div>
//           <div className="col-md-6" style={contain}>
//             <div className="mb-3">
//               <label class="form-label">
//                 <input value={this.state.Lname} onChange={this.handleInputchange}
//                   name= "Lname"
//                   type="text"
//                   placeholder="Last Name"
//                   class="form-control"
//                 />
//               </label>
//               {this.validator.message('Lname', this.state.list.Lname, 'required|alpha_space|min:2|max:15', {className: "text-danger" })}
//             </div>
//           </div>
//           <div className="col-md-12" style={contain}>
//             <div className="mb-3">
//               <label class="form-label" style={{ width: "400px" }}>
//                 <input value={this.state.email} onChange={this.handleInputchange} name='email' type="email" placeholder="Email" class="form-control" />
//               </label>
//               {this.validator.message('email', this.state.list.email, 'required|email',{ className: "text-danger" })}
//             </div>
//           </div>
//           <div className="col-md-12" style={contain}>
//             <div className="mb-3">
//               <label class="form-label" style={{ width: "400px" }}>
//                 <input value={this.state.password} onChange={this.handleInputchange}
//                   name="password"
//                   type="password"
//                   class="form-control"
//                   placeholder="New password"
//                 />
//               </label>
//               {this.validator.message('password', this.state.list.password, 'required',{ className: "text-danger" })}
//             </div>
//           </div>

//           <div className="col-md-12" style={contain}>
//             <div className="mb-3">
//               <label class="form-label" style={{ width: "400px" }}>
//                 <input value={this.state.dob} onChange={this.handleInputchange} name="dob" type="date" class="form-control" />
//               </label>
//             </div>
//             {this.validator.message('dob', this.state.list.dob, 'required|date',{ className: "text-danger" })}
//           </div>
//           <div className="col-md-12">
//             <div className="mb-3">
//               <label class="form-label" style={{ marginLeft: "15px" }}>
//                 <select value={this.state.gender} onChange={this.handleInputchange}
//                   class="form-control"
//                   name="gender"
                  
//                   id=""
//                   style={{ width: "400px", borderRadius: "none 5px" }}>
//                   <option >Gender</option>
//                   <option value={this.state.gender}>Male</option>
//                   <option value={this.state.gender}>Female</option>
//                   <option value={this.state.gender}>Custom</option>
//                 </select>
//               </label>
//             </div>
//           </div>
//           <div className="col-md-12" style={contain}>
//             <div className="mb-1">
//               <button type="submit" onClick={this.handleSubmit}
//                 style={
//                   bu
//                 }>
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
