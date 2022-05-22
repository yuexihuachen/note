import React, { useState } from 'react';
import { useGetCategoryByNameQuery } from '../../app/services/category'
import './index.scss';

export function Header() {
  const { data, isLoading } = useGetCategoryByNameQuery('getCategory')
  const [selectedValue, setSelectedValue] = useState('')
  const [title, setTitle] = useState('')
  return (
    <div className="headers">
      <div className="columns">
        <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="文章标题"
                    />
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
                    <div className={`select is-large select`}>
                      <select
                        className='select'
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      >
                        {!isLoading && data.data.map((item: any) => {
                          return (
                            <option key={item.category_id} value={item.category_name}>
                              {item.category_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}
