import styled from '@emotion/styled'

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
`

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`

const Post = ({ children }) => {
  return (
    <Page>
      <Header>
        <a href="/"><Name>The Blog Thing</Name></a>
        <nav>
          <a href="/posts">
            Posts
          </a>
        </nav>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
        <p>Copyright &copy; 2020 - Present Tim Roberts</p>
      </Footer>
    </Page>
  )
}

export default Post