import React from "react";
export default class Login extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form
          onSubmit={onSubmit}
          className="ring-1 ring-white rounded mx-auto mt-12 h-56 w-80 flex flex-col gap-3 p-2"
        >
          <input
            className="ring-1 rounded bg-slate-700 text-white p-2 outline-none"
            placeholder="username"
            type="text"
            name="username"
          />
          <input
            className="ring-1 rounded bg-slate-700 text-white p-2 outline-none"
            placeholder="Password"
            type="password"
            name="pass"
          />
          <button className="rounded p-2 mt-[72px] bg-blue-400" type="submit">
            ورود
          </button>
        </form>
      </div>
    );
  }
}
