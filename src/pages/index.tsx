import styled from '@emotion/styled'
import fs, { readFile } from 'fs'
import { promisify } from 'util'
import path from 'path'
import createExcerpt from 'excerpt-html'
import gray from 'gray-matter'
import readMarkdown from '../utils/read-markddown-file'
import marked from 'marked'
const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--dark);
  
  > * {
    padding: 1.25rem;
  }
`

const Header = styled.header`
  flex-grow: 0;
  width: 100%;
  background: var(--light);
  color: var(--dark);
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgba(33, 33, 33, 0.03);
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Footer = styled.footer`
  flex-grow: 0;
  width: 100%;
`


const Main = styled.main`
  flex-grow: 2;
  max-width: 1080px;
  margin: 0 auto;
`

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`

const PostList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const PostItem = styled.a`
  text-decoration: none;
  color: inherit;
  margin-bottom: 2.5rem;
  
  li {
    background: var(--light);
    color: var(--dark);
    padding: 1.5rem;
    border-radius: 4.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const PostItemImg = styled.img`
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 100%;
`

const PostItemTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`

const PostHeader = styled.div``

const PostDescription = styled.div`
  color: var(--dark);
  padding: 1.5rem;
  background: ghostwhite;
  align-self: flex-end;
  border-radius: 4.5px;
  margin: 2rem;

  h4 {
    margin-bottom: 3rem;
  }
`

export default ({ posts }) =>  (
  <Page>
    <Header>
      <a href="/"><Name>The Blog Thing</Name></a>
    </Header>
    <Main>
      <PostList>
      {
        // @ts-ignore
      posts.map(({ data, content, excerpt }) => console.dir(content) || (
        <PostItem key={data.title} href={`/posts/${data.slug}`}>
          <li>
            <PostHeader>
              <PostItemTitle>{data.title}</PostItemTitle>
              <PostItemImg src={data.featuredpath} />
            </PostHeader>
            <PostDescription>
              <h4>Excerpt</h4>
              {excerpt}
            </PostDescription>
          </li>
        </PostItem>
      ))}
      </PostList>
    </Main>
    <Footer>
      <p>Copyright &copy; 2020 - Present Tim Roberts</p>
    </Footer>
  </Page>
)

const POSTS_TO_SHOW = 10

export const getStaticProps = async () => {
  const dir_list = await promisify(fs.readdir)('src/pages/posts')
  const texts = await Promise.all(dir_list.map(dir => path.resolve('src/pages/posts', dir, 'post.md')).map(fullPath => {
    const getStats = promisify(fs.stat)

    return getStats(fullPath).then(({ mtime }) => [fullPath, mtime])
  }))
  
  const to_read = texts.sort(([_, a],[__, b]) => {
    const aDate = new Date(a)
    const bDate = new Date(b)
    // @ts-ignore
    if (aDate - bDate) {
      return -1
    }
    

    // @ts-ignore
    if (bDate - aDate) {
      return 1
    }

    return 0
  }).slice(0, POSTS_TO_SHOW)

  const parsed = await Promise.all(to_read.map(async ([fullPath]: [string]) => {
    const text = await promisify(fs.readFile)(fullPath, 'utf8')
    
    const { data, content } = gray(text)

    const excerpt = createExcerpt(marked(content))
  
    console.dir(content)
    return {
      data,
      content,
      excerpt
    }
  }))
  
  return {
    props: {
      posts: parsed
    }
  }
}
