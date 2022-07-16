import React, { useEffect } from 'react';
import { changePush, getDate, changeData } from '../footer/footerSlice'
import { useGetCategoryByNameQuery } from '../../app/services/category'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { returnResult } from '../../../../utils/index'
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

  const addNote = async () => {
    const category_id = (data.data.length && data.data[0].category_id)
    const { title, content, category, isPush } = submitData 
    if (!title || !content) {
      alert('日记标题或内容不能为空');
    } else {
      const response = await axios.post('/setArticle', {
        title,
        content: encodeURIComponent(content),
        isPush,
        category: category.length? category: category_id
      })
      return response
    }
  }

  const updateNote = async (id: any) => {
    const { title, content, category, isPush } = submitData 
    if (!title || !content) {
      alert('日记标题或内容不能为空');
    } else {
      const response = await axios.post('/setArticle', {
        id,
        title,
        content: encodeURIComponent(content),
        isPush,
        category
      })
      return response
    }
  }

  const onSubmit = async () => {
    const params = new URLSearchParams(location.search)
    let id = params.get('id')
    if (id) {
      const response = await updateNote(id)
      const msg = response?.data?.data?.message
      returnResult(msg)
    } else {
      const response = await addNote()
      const msg = response?.data?.data?.message
      returnResult(msg)
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    let id = params.get('id')
    if (id) {
      axios.post('/searchNote', {
        article_id: id
      }).then(response => {
        if (response?.data?.data?.length) {
          const data: any = response.data.data[0]
          dispatch(changeData({
            title: data.title,
            category: data.category_id,
            content: decodeURIComponent(data.content),
            isPush: data.is_push
          }))
        }
      })
    }
  }, [])

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