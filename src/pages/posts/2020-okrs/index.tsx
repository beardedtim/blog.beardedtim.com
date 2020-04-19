import Markdown from 'react-markdown'

import styled from '@emotion/styled'
import PostLayout from '../../../layouts/Post'
import markdownStyles from '../../../styles/markdown'

import readFile from '../../../utils/read-markddown-file'
import markdownPost from '../../../utils/post-read-markdown'

const PostBody = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  font-size: 1.6rem;

  ${markdownStyles}
`

const Post = ({ content }) =>  (
  <PostLayout>
    <PostBody>
      <Markdown source={content}  className="markdown-body"/>
    </PostBody>
  </PostLayout>
)

export const getStaticProps = async () => ({
  props: await readFile(markdownPost('throw-away-code'))
})

export default Post