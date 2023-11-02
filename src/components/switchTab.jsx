// eslint-disable-next-line no-unused-vars
import React from "react";
import SelectForm from "./selectForm";

class Switch extends React.Component {
  state = {
    selectedTab: "Login",
  };

  choiseIt(choice) {
    this.setState({ selectedTab: choice });
  }

  render() {
    const { selectedTab } = this.state;
    // eslint-disable-next-line react/prop-types
    const { onSingUp, onLogin } = this.props;
    return (
      <div>
        <div className="flex flex-row h-12 justify-start items-center">
          <div
            className={`flex flex-row justify-center items-center h-12 w-[50%] hover:bg-slate-400 ${
              selectedTab === "Login" ? "bg-slate-400" : "bg-slate-200"
            }`}
            onClick={() => this.choiseIt("Login")}
          >
            Login
          </div>
          <div
            className={`flex flex-row justify-center items-center h-12 w-[50%] hover:bg-slate-400 ${
              selectedTab === "Sign up" ? "bg-slate-400" : "bg-slate-200"
            }`}
            onClick={() => this.choiseIt("Sign up")}
          >
            Sign Up
          </div>
        </div>
        <div>
          {selectedTab === "Login" ? (
            <SelectForm onSubmit={onLogin} formType="Login" />
          ) : (
            <SelectForm onSubmit={onSingUp} formType="singUp" />
          )}
        </div>
      </div>
    );
  }
}

export default Switch;
