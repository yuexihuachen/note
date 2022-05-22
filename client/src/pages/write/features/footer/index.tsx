import React, { useState } from 'react';
import './index.scss';

export function Footer() {
  const [push, setPush] = useState(false)
  return (
    <div className="headers">
      <div className="columns">
        <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="field">
                  <div className="control">
                  <label className="checkbox is-push">
                    <input type="checkbox" checked={push} onChange={e => setPush(e.target.checked)} />
                    是否发布
                  </label>
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div className="column">
        <section className="hero is-bold">
              <div className="hero-body">
                <div className="field">
                  <div className="control">
                  <button className={`button  is-success is-fullwidth `}>提交</button>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}
