import React from "react";
class RollNumber extends React.Component {
  state = {
    rollnumber: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var out = this.state.rollnumber.toString();
    var out1 = out.split(/[,]/);
    var api = "https://terriblytinytales.com/testapi?rollnumber=";
    var datahtml = "";
    const tablebody = document.getElementById("tableData");
    for (let i = 0; i < out1.length; i++) {
      var url = api + out1[i];
      var rest = parseInt(out1[i]) % 3 === 0 ? "fail" : "pass";
      datahtml += `<tr><td>${out1[i]}</td><td>${rest}</td></tr>`;
      console.log(rest);
    }
    tablebody.innerHTML = datahtml;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="rollnumber"
              placeholder="Type Roll No."
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody id="tableData"></tbody>
        </table>
      </div>
    );
  }
}

export default RollNumber;
