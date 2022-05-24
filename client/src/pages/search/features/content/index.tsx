import React from 'react';
import { getData } from '../header/headerSlice'
import { useAppSelector } from '../../app/hooks'
import './index.scss';

export function Content() {
  const articles = useAppSelector(getData)
  return (
    <div className="search-content">
      <div className="columns table-header">
        <div className='column'>
          <section className="hero">
            <div className="hero-body">
              <div className="field">
                <div className="control">
                  #文章标识
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
                  #文章标题
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
                  #文章类别
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
                  #是否发布
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
                  #是否编辑
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {
        articles.map((item: any) => {
         return <div className="columns" key={item.article_id}>
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
                    {item.category_id}
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
                    {item.is_push}
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
                      <a>编辑</a>
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
