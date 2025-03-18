import React, { Component } from "react";

export default class App2 extends Component {
  constructor() {
    super();

    // defined state
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Emp").then((result) => {
      result.json().then((res) => {
        console.log(res);

        // set state
        this.setState({
          data: res,
        });
      });
    });
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
        <h1>API Calling Statefull Class Component</h1>

        <hr />

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Skill</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>{val.skill}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
