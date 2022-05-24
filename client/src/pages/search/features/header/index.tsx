import React, { useState } from 'react';
import { useGetCategoryByNameQuery } from '../../app/services/category'
import { deepClone } from '../../../../utils';
import { changeData } from './headerSlice'
import { useAppDispatch } from '../../app/hooks'
import './index.scss';
import axios from 'axios';

export function Header() {
  const { data, isLoading } = useGetCategoryByNameQuery('getCategory')
  let categoryList = [{category_id: -1,category_name: 'All'}]
  if (!isLoading) {
    categoryList = categoryList.concat(deepClone(data.data))
  }
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [isPush, setIsPush] = useState('')

  const dispatch = useAppDispatch()
  const onSearch = () => {
    axios.post('/searchNote', {
      category,
      title, 
      isPush
    }).then(response => {
      //console.log(response)
      dispatch(changeData({
        articles: response.data.data
      }))
    })
   
  }
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
                    autoComplete="off"
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
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categoryList.map((item: any) => {
                        return (
                          <option key={item.category_id} value={item.category_id}>
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
        <div className="column">
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  <div className={`select is-large select`}>
                    <select
                      className='select'
                      value={isPush}
                      onChange={(e) => setIsPush(e.target.value)}
                    >
                      <option key={0} value={-1}>
                        All
                      </option>
                      <option key={1} value={1}>
                        已发布
                      </option>
                      <option key={2} value={0}>
                        未发布
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="column">
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  <button onClick={onSearch} className={`button search-button is-success is-fullwidth `}>搜索</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}