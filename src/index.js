import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Form() {
  const [username, setUserName] = useState({ value: "", error: "", color: "" });
  const [email, setEmail] = useState({ value: "", error: "", color: "" });
  const [password, setPassWord] = useState({ value: "", error: "", color: "" });
  const [confirmPassword, setConfirmPassWord] = useState({
    value: "",
    error: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username
    if (username.value.length >= 8) {
      setUserName({ ...username, error: "", color: "green" });
    } else {
      setUserName({
        ...username,
        error: "กรุณาระบุชื่อผู้ใช้งานอย่างน้อย8ตัวอักษร",
        color: "red",
      });
    }

    // Validate email
    if (email.value.includes("@")) {
      setEmail({ ...email, error: "", color: "green" });
    } else {
      setEmail({
        ...email,
        error: "รุปแบบอีเมลไม่ถูกต้อง",
        color: "red",
      });
    }

    // Validate password
    if (password.value.length >= 8) {
      setPassWord({ ...password, error: "", color: "green" });
    } else {
      setPassWord({
        ...password,
        error: "กรุณาระบุพาสเวิร์ดอย่างน้อย8ตัวอักษร",
        color: "red",
      });
    }

    // Validate confirm password
    if (
      confirmPassword.value !== password.value ||
      confirmPassword.value === ""
    ) {
      setConfirmPassWord({
        ...confirmPassword,
        error: "กรุณาระบุพาสเวิร์ดให้ตรงกัน",
        color: "red",
      });
    } else {
      setConfirmPassWord({ ...confirmPassword, error: "", color: "green" });
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label>username</label>
          <input
            type="text"
            value={username.value}
            onChange={(e) =>
              setUserName({ ...username, value: e.target.value })
            }
            style={{ borderColor: username.color }}
          />
          <small style={{ color: username.color }}>{username.error}</small>
        </div>

        <div className="form-input">
          <label>email</label>
          <input
            type="text"
            value={email.value}
            onChange={(e) => setEmail({ ...email, value: e.target.value })}
            style={{ borderColor: email.color }}
          />
          <small style={{ color: email.color }}>{email.error}</small>
        </div>

        <div className="form-input">
          <label>password</label>
          <input
            type="password"
            value={password.value}
            onChange={(e) =>
              setPassWord({ ...password, value: e.target.value })
            }
            style={{ borderColor: password.color }}
          />
          <small style={{ color: password.color }}>{password.error}</small>
        </div>

        <div className="form-input">
          <label>confirm-password</label>
          <input
            type="password"
            value={confirmPassword.value}
            onChange={(e) =>
              setConfirmPassWord({
                ...confirmPassword,
                value: e.target.value,
              })
            }
            style={{ borderColor: confirmPassword.color }}
          />
          <small style={{ color: confirmPassword.color }}>
            {confirmPassword.error}
          </small>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
