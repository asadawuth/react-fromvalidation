import React, { useState } from "react"; // สร้าง Ui
import ReactDOM from "react-dom/client"; // for Render
import "./index.css"; //styling

//Form Component
// TASK : Create HTML
// TASK : ผูก State ui
function Form() {
  // Data
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");
  // Error State
  const [errorUseName, seterrorUseName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [errorconfirm, seterrorconfirm] = useState("");
  // Color
  const [userNameColor, setuserNameColor] = useState("");
  const [EmailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setconfirmPasswordColor] = useState("");
  const handleSubmit = (e) => {
    // ถ้าไม่  e.preventDefault(); state หายหมด //ผูก type=submit กับ button ด้วย
    e.preventDefault();
    // Validate ข้อมูล ใน State usename
    if (username.length >= 8) {
      seterrorUseName("");
      setuserNameColor("green");
    } else {
      seterrorUseName("กรุณาระบุชื่อผู้ใช้งานอย่างน้อย8ตัวอักษร");
      setuserNameColor("red");
    }
    // Validate ข้อมูล ใน State email
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รุปแบบอีเมลไม่ถูกต้อง");
      setEmailColor("red");
    }
    // Validate ข้อมูล ใน State password
    if (password.length >= 8) {
      seterrorUseName("");
      setPasswordColor("green");
    } else {
      seterrorPassword("กรุณาระบุพาสเวิร์ดอย่างน้อย8ตัวอักษร");
      setPasswordColor("red");
    }
    // Validate ข้อมูล ใน State comfirmpassword
    if (confirmPassword !== password) {
      seterrorconfirm("กรุณาระบุพาสเวิร์ดให้ตรงกัน");
      setconfirmPasswordColor("red");
    } else {
      seterrorconfirm("");
      setconfirmPasswordColor("green");
    }
  };

  return (
    // #1 username
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label>username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUseName}</small>
        </div>
        {/* #2 email */}
        <div className="form-input">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: EmailColor }}
          />
          <small style={{ color: EmailColor }}>{errorEmail}</small>
        </div>
        {/* #2 password */}
        <div className="form-input">
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        {/* #3 confirm Password */}
        <div className="form-input">
          <label>confirm-password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassWord(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
          />
          <small style={{ color: confirmPasswordColor }}>{errorconfirm}</small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

//Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);

// - 4 State
// - Validate Library
