import React from "react";

export default class SelectForm extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { onSubmit, formType } = this.props;

    const isSingUp = (formType) => {
      if (formType === "singUp") {
        return true;
      }
    };

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
          {isSingUp(formType) && (
            <input
              className="ring-1 rounded bg-slate-700 text-white p-2 outline-none"
              placeholder="repeatPassword"
              type="password"
              name="repass"
            />
          )}
          <button className="rounded p-2 mt-[72px] bg-blue-400" type="submit">
            {isSingUp(formType) ? "ثبت نام" : "ورود"}
          </button>
        </form>
      </div>
    );
  }
}
