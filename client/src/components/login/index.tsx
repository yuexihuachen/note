import axios from "axios";
import React, { useEffect, useState } from "react";
import './index.scss'

function Login() {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [hasLogin, setHasLogin] = useState(true)
  useEffect(() => {
    axios.get('/isLogin').then(response => {
      setHasLogin(!!response?.data?.data?.isLogin)
    })
  },[])
  const setLogin = async () => {
    const result: any = await axios.post('/login', {
      uname,
      pwd
    })
    if (result?.data?.message.includes('success')) {
      setHasLogin(true)
    }
  }

  const handleKeyLocate = (e: any) => {
    if (e.code === 'Enter') {
      setLogin()
    }
  }
  return (
    <div className={`modal ${ hasLogin ?'':'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
      <div className="box">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                className="input"
                type="email"
                onKeyDown={handleKeyLocate}
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
                onKeyDown={handleKeyLocate}
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

