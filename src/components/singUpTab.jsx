import React from "react";
export default class SingUp extends React.Component {
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
          <input
            className="ring-1 rounded bg-slate-700 text-white p-2 outline-none"
            placeholder="repeatPassword"
            type="password"
            name="repass"
          />
          <button className="rounded p-2 mt-5 bg-blue-400" type="submit">
            ثبت نام
          </button>
        </form>
      </div>
    );
  }
}
