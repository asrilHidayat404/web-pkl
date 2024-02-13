import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { authenticatedUser } from "../../Store";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setAuthUser = useSetRecoilState(authenticatedUser);
  const navig = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/api/login", { username, password })
      .then(res => {
        console.log(res.data);
        alert(res.data.message);
        setAuthUser({ check: true }); 
        console.log(res.data.token)
        localStorage.setItem("auth", res.data.token)
        navig("/dashboard")
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="kotak_login">
      <p className="tulisan_login">Silahkan login</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form_login"
          placeholder="Username atau email .."
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form_login"
          placeholder="Password .."
        />
        <input type="submit" className="tombol_login" value="LOGIN" />
        <br />
        <br />
        <center>
          <Link to="/">kembali</Link>
        </center>
      </form>
    </div>
  );
}

export default Login;
