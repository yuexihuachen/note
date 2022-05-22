import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import codemirror from 'codemirror'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/edit/matchbrackets'
import './index.scss';

export function Content() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
* Lists
* [ ] todo
* [x] done
A table:
| a | b |
| - | - |
`
  const [value,setValue] = useState(markdown)
  const editorRef = useRef(null);
  useEffect(()=>{
    let editor = codemirror.fromTextArea(editorRef.current, {
      theme: "seti",
      lineNumbers: true,
      lineWrapping: true,
      direction: "ltl",
      styleActiveLine: true,
      matchBrackets: true,
      value
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
                value={value}
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
              children={value}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]} />
          </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
