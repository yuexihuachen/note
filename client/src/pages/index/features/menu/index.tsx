import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks'
import { useGetSearchByNameQuery } from '../../app/services/articles'
import { useGetCategoryByNameQuery } from '../../app/services/category'
import { getQueryStringArgs } from '../../../../utils/index'
import {
  changeContent,
} from '../content/indexSlice';
import axios from 'axios'
import './index.scss';

const query = getQueryStringArgs()

export function Menu() {
  const dispatch = useAppDispatch()
  const categorys = useGetCategoryByNameQuery('getCategory')
  const { data, isLoading } = useGetSearchByNameQuery('checkNote')
  const [articleId,setArticleId] = useState('')
  const [category, setCategory] = useState('')
  const fetchArticle = (id: any) => {
    axios.post('/checkNote', {
      article_id: id
    }).then(response => {
      const res = response.data.data
      if (res && res.length) {
        dispatch(changeContent({
          content: res[0].content
        }))
      }
    })
  }
  useEffect(() => {
    if (categorys?.data?.data) {
      const categoryName = categorys.data.data.find(item => item.category_id == query.cid)
      setCategory(categoryName.category_name)
    }
  }, [categorys.isLoading])

  useEffect(() => {
    if (!isLoading && data.data.length) {
      setArticleId(data.data[0].article_id)
      fetchArticle(data.data[0].article_id)
    }
  }, [isLoading])

  const choiceArticle = (id: any) => {
    setArticleId(id)
    fetchArticle(id)
  }
  
  return (
    <div className="asider">
      <section className='sidebar-links'>
        <div className="sidebar-heading">
          {category}
        </div>
        <ul className='sidebar-ul sidebar-group-items'>
          {
            !isLoading && data.data.map(item => {
              return<li onClick={() => { choiceArticle(item.article_id) }} key={item.article_id} className={`${articleId === item.article_id?'sidebar-items':''}`}>
                {item.title}
              </li>
            })
          }
        </ul>
      </section>

    </div>
  );
}
