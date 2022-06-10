import React from 'react'
import { useAppSelector } from '../../app/hooks'
import {
  getArticle,
} from './indexSlice';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark.js'
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
              rehypePlugins={[rehypeRaw]}
              components={{
                code({node, inline, className, children, ...props}) {
                  return !inline ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={oneDark}
                      language={'javascript'}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
               />
          </div>
        </div>

      </div>
    </div>
  );
}
