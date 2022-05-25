import React from 'react'
import { useGetCategoryByNameQuery } from '../../app/services/category'
import './index.scss';

export function Content() {
  const { data, isLoading } = useGetCategoryByNameQuery('getCategory')
  const jumpPage = !isLoading && data.data.length && `/${data.data[0].category_name}?cid=${data.data[0].category_id}`
  return (
    <React.Fragment>
      <div className="columns">
      <div className="column">
        <section className="hero is-bold">
          <div className="hero-body">
            <div className="field">
              <div className="control">
              <a href={`${jumpPage}`} className={`button is-success `}>开始 →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      <div className="columns">
      <div className="column">
        <section className="hero is-bold">
          <div className="hero-body">
            <div className="field">
              <div className="control">
              <h1>简单至上</h1>
              <div>
                Markdown的编辑器，专注于写作
              </div>
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
              <h1>可维护</h1>
              <div>
              可扩展，可配置，可调试，可适应
              </div>
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
              <h1>高性能</h1>
              <div>
                响应快速，直观性，松散耦合，正确处理
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Javascript</p>
                <p className="subtitle">To Frontend</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">Nodejs</p>
                <p className="subtitle">To mid-Tier</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">设计模式</p>
                <p className="subtitle">To Full-Stack</p>
                <figure className="image is-4by3">
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">算法</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
                二分查找
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">数据可视化</p>
              <p className="subtitle">data visualization</p>
              <div className="content">
                D3
              </div>
            </div>
          </article>
        </div>
      </div>
    </React.Fragment>
  );
}
