import React from 'react'
import { useAppSelector } from '../../app/hooks'
import {
  getArticle,
} from './indexSlice';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import './index.scss';

export function Article() {
  const article = useAppSelector(getArticle)
  return (
    <div className='article-content'>
      <div className='article content markdown-body'>
        <div className='columns'>
          <div className='column'>
            <ReactMarkdown
              children={article}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]} />
          </div>
        </div>

      </div>
    </div>
  );
}
