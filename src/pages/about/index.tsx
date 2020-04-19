import Head from 'next/head'


import styled from '@emotion/styled'
import PostLayout from '../../layouts/Post'
import MarkdownRender from '../../layouts/Markdown'

import readMarkdownFile from '../../utils/read-markddown-file'

const PostBody = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 5rem;
  font-size: 1.6rem;
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
  props: await readMarkdownFile('src/pages/about/_index.md')
})

export default Post