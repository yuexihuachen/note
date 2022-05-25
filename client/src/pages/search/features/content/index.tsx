import React from 'react';
import { getData } from '../header/headerSlice'
import { useAppSelector } from '../../app/hooks'
import { getCategoryData } from '../../app/services/category'
import './index.scss';

const pushName = ['未发布','已发布']

export function Content() {
  const articles = useAppSelector(getData)
  const categorys = useAppSelector(getCategoryData)
  return (
    <div className="search-content">
      <div className="columns table-header">
        <div className='column'>
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  文章标识#
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='column'>
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  文章标题#
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='column'>
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  文章类别#
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='column'>
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  是否发布#
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='column'>
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  是否编辑#
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {
        articles.map((item: any) => {
         return <div className="columns item-hover" key={item.article_id}>
            <div className='column'>
              <section className="hero">
                <div className="hero-body">
                  <div className="field">
                    <div className="control">
                      {item.article_id}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='column'>
              <section className="hero">
                <div className="hero-body">
                  <div className="field">
                    <div className="control">
                    {item.title}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='column'>
              <section className="hero">
                <div className="hero-body">
                  <div className="field">
                    <div className="control">
                    {categorys[item.category_id]}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='column'>
              <section className="hero">
                <div className="hero-body">
                  <div className="field">
                    <div className="control">
                    {pushName[item.is_push]}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='column'>
              <section className="hero">
                <div className="hero-body">
                  <div className="field">
                    <div className="control">
                      <a target='_blank' href={`write?id=${item.article_id}`}>编辑</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        })
      }
    </div>
  );
}
