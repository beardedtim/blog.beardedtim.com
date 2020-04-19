import { useEffect } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import hljs from 'highlight.js'
import styled from '@emotion/styled'

const MarkdownContainer = styled.div`
  > * {
    margin-bottom: 2.5rem;
  } 
`

marked.setOptions({
  highlight: (code, language) => language
    ? hljs.highlight(language, code).value
    : hljs.highlightAuto(code).value
})

const MarkdownRenderer = ({ text }) => {
  useEffect(()=>{
     hljs.initHighlighting.called = false;
      hljs.initHighlighting();
  },[text]);

  return (
    <MarkdownContainer>
      {text ? renderHTML(marked(text, { smartypants: true })) : null}
    </MarkdownContainer>
  )
}

export default MarkdownRenderer