import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import codemirror from 'codemirror'
import { changeContent, getDate } from '../footer/footerSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/edit/matchbrackets'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark.js'
import './index.scss';
let editor: any = null

export function Content() {
  const dispatch = useAppDispatch()
  const submitData = useAppSelector(getDate)
  const setValue = (value: any) => {
    dispatch(changeContent({
      content: value
    }))
  }

  const editorRef = useRef(null);
  if (oneDark?.codeTagProps?.style) {
    oneDark.codeTagProps.style.whiteSpace = 'pre-wrap'
  }
 
  useEffect(()=>{
    if (editor) {
      editor.setValue(submitData.content)
    }
  }, [editor])

  useEffect(()=>{
    editor = codemirror.fromTextArea(editorRef.current, {
      theme: "seti",
      lineNumbers: true,
      lineWrapping: true,
      direction: "ltl",
      styleActiveLine: true,
      matchBrackets: true,
      value: submitData.content
    })
    editor.on("change", () => {
      setValue(editor.getValue())
    })
  },[])
  return (
    <div className="content">
      <div className="columns">
        <div className="column">
        <section className="hero">
              <div className="hero-body">
              <textarea 
                ref={editorRef}
                value={submitData.content}
                onChange={(e) => {setValue(e.target.value)}}>
              </textarea>
              </div>
        </section>
        </div>
        <div className="column">
        <section className="hero">
              <div className="hero-body">
          <div className='markdown-body'>
            <ReactMarkdown
              children={submitData.content}
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
        </section>
        </div>
      </div>
    </div>
  );
}
