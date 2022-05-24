import React from 'react';
import { changePush, getDate } from '../footer/footerSlice'
import { useGetCategoryByNameQuery } from '../../app/services/category'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import './index.scss';
import axios from 'axios';

export function Footer() {
  const dispatch = useAppDispatch()
  const submitData = useAppSelector(getDate)
  const { data } = useGetCategoryByNameQuery('getCategory')
  const setPush = (value: any) => {
    dispatch(changePush({
      isPush: value?1:0
    }))
  }
  const onSubmit = async () => {
    const category_id = (data.data.length && data.data[0].category_id)
    const { title, content, category, isPush } = submitData 
    if (!title || !content) {
      alert('日记标题或内容不能为空');
    } else {
      const response = await axios.post('/setArticle', {
        title,
        content,
        isPush,
        category: category && category_id
      })
      console.log(response)
    }
  }

  return (
    <div className="headers">
      <div className="columns">
        <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="field">
                  <div className="control">
                  <label className="checkbox is-push">
                    <input type="checkbox" checked={submitData.isPush} onChange={e => setPush(e.target.checked)} />
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
                  <button onClick={onSubmit} className={`button  is-success is-fullwidth `}>提交</button>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}