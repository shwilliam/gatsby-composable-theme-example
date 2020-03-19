/** @jsx jsx */
import {useContext} from 'react'
import {jsx, ThemeContext} from '../context'
import {Global} from '@emotion/core'
import {graphql} from 'gatsby'
import Header from '../components/header'
import * as Text from '../components/text'

export default props => {
  const {theme} = useContext(ThemeContext)

  return (
    <div>
      <Global styles={{body: {backgroundColor: theme.colors.background}}} />
      <Header />
      {props.data.allBlogPost.nodes.map(node => (
        <div key={node.id}>
          <Text.Link to={`/blog/${node.slug}`}>
            <strong
              dangerouslySetInnerHTML={{
                __html: node.title,
              }}
            />
          </Text.Link>
          <p
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
            sx={{
              color: 'text',
              fontFamily: 'body',
              lineHeight: 'body',
            }}
          />
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query AllProductBlogsPage {
    allBlogPost {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`
