
import Head from 'next/head'


import styled from '@emotion/styled'
import PostLayout from '../../../layouts/Post'
import MarkdownRender from '../../../layouts/Markdown'


import readFile from '../../../utils/read-markddown-file'
import markdownPost from '../../../utils/post-read-markdown'


const PostBody = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 5rem;
  font-size: 1.6rem;

  .markdown > * {
    margin-bottom: 2.5rem;
  }
`
const Post = ({ content, data }) =>  (
  <PostLayout>
    <Head>
      <title>{data.title}</title>
    </Head>
    <PostBody>
      <MarkdownRender text={content} />
    </PostBody>
  </PostLayout>
)

export const getStaticProps = async () => ({
  props: await readFile(markdownPost('radarr-and-jackett'))
})

export default Post