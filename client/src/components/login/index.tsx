import axios from "axios";
import React, { useState } from "react";
import './index.scss'

function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [isShow, setIsShow] = useState(true)
  const setLogin = async () => {
    const result: any = await axios.post('/login', {
      user,
      pwd
    })
    if (result.data && !result.data.code) {
      setIsShow(false)
    }
  }
  return (
    <div className={`modal ${isShow?'is-active':''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
      <div className="box">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="input"
                type="email"
                placeholder="用户名"
              />
              <span className="icon is-small is-left">
                <i className="fas icon-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="input"
                type="password"
                placeholder="密码"
              />
              <span className="icon is-small is-left">
                <i className="fas icon-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                onClick={setLogin}
                className="button is-success is-fullwidth"
              >
                登录
              </button>
            </p>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Login;

