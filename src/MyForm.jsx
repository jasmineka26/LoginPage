/* eslint-disable no-unused-vars */
import React from "react";

export default class MyForm extends React.Component {
  state = {
    text: "",
  };

  text = "";

  handleClear = () => {
    // this.setState({ text: "" });
    console.log(this.text);
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    // this.text = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    const data = new FormData(e.currentTarget);
    const username = data.get("username")?.toString().trim();
    const password = data.get("pass")?.toString().trim();
    console.log(username, password, this.state.text);
  };

  render() {
    // console.log("rerender");
    return (
      <div className="p-2 bg-slate-900 h-screen flex flex-col gap-2">
        <form
          //   action="/users"
          //   method="POST"
          onSubmit={this.handleSubmit}
          className="ring-1 ring-white rounded mx-auto mt-12 h-96 w-80 flex flex-col gap-2 p-2"
        >
          <input
            className="ring-1 rounded bg-slate-700 text-white p-2 outline-none"
            type="text"
            name="username"
            placeholder="username"
            //   defaultValue={"ali"}
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            className="ring-1 rounded bg-slate-700 text-white p-2 outline-none"
            type="password"
            name="pass"
            placeholder="Password"
            defaultValue={123}
          />
          <button
            className="rounded p-2 bg-blue-400"
            // onClick={this.handleClear}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
