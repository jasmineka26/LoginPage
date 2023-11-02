import "./App.css";
import Switch from "./components/switchTab";
import Pictures from "./components/pictureInSide";
import React from "react";
export default class App extends React.Component {
  state = {
    users: [],
  };

  saveUsers = [
    { username: "amir", password: "123" },
    { username: "amir2", password: "1234" },
    { username: "amir3", password: "1234" },
    { username: "amir4", password: "1234" },
    { username: "amir5", password: "1234" },
    { username: "amir6", password: "1234" },
    { username: "amir7", password: "1234" },
    { username: "amir8", password: "1234" },
    { username: "amir9", password: "1234" },
    { username: "amir10", password: "1234" },
    { username: "amir11", password: "1234" },
    { username: "amir12", password: "1234" },
    { username: "amir13", password: "1234" },
  ];
  handleSingUp = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("username").trim();
    const password = data.get("pass").trim();
    const repassword = data.get("repass").trim();

    let userExists = false;
    for (const user of this.saveUsers) {
      if (user.username === username) {
        userExists = true;
        break;
      }
    }

    if (userExists) {
      alert("این نام کاربری موجود است");
    } else if (password === repassword) {
      this.saveUsers.push({ username, password });
      alert("خوش آمدید");
    } else {
      alert("پسوورد با تکرار آن یکسان نیست");
    }
    console.log(this.saveUsers);
    this.setState({ users: this.saveUsers });
  };
  handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("username").trim();
    const password = data.get("pass").trim();

    let userFound = false;

    for (let i = 0; i < this.saveUsers.length; i++) {
      const element = this.saveUsers[i];
      if (username === element.username && password === element.password) {
        userFound = true;
        break;
      }
    }

    if (userFound) {
      alert("وارد شدید.");
    } else {
      alert("نام کاربری یا پسوورد صحیح نمی باشد.");
    }
  };

  render() {
    const saveUsers = this.saveUsers;
    return (
      <>
        <div className="flex flex-row justify-center items-center bg-slate-800 w-full h-screen gap-10">
          <div className="flex flex-col justify-center items-center bg-violet-400 h-[60%] w-[20%] rounded-2xl shadow-2xl">
            <div
              className={`flex flex-col items-center border-4 pt-2
             border-slate-300 shadow-2xl bg-sky-200 h-[90%] w-[90%] rounded-2xl
             text-xl font-light gap-1 overflow-x-scroll`}
            >
              {saveUsers.map((user, i) => (
                <div key={i}>{user.username}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center shadow-2xl bg-neutral-900 h-[60%] w-[50%] rounded-2xl overflow-hidden">
            <div className="bg-neutral-50 w-[50%]">
              <Switch onSingUp={this.handleSingUp} onLogin={this.handleLogin} />
            </div>
            <div className="flex flex-col justify-center items-center bg-blue-700 w-[50%] overflow-hidden">
              <Pictures />
            </div>
          </div>
        </div>
      </>
    );
  }
}
