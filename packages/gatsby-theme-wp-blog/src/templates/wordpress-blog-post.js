/** @jsx jsx */
import {useContext} from 'react'
import {jsx, ThemeContext} from '../context'
import {Global} from '@emotion/core'
import {graphql} from 'gatsby'
import Header from '../components/header'

export default ({data}) => {
  const {theme} = useContext(ThemeContext)

  return (
    <div>
      <Global styles={{body: {backgroundColor: theme.colors.background}}} />
      <Header />
      <h1
        sx={{variant: 'textStyles.display', color: 'primary'}}
        dangerouslySetInnerHTML={{
          __html: data.blogPost.title,
        }}
      />
      <div
        sx={{
          '& a': {
            color: 'primary',
            '&:hover': {
              color: 'secondary',
            },
          },
          '& h1': {variant: 'textStyles.display', color: 'primary'},
          '& h2': {variant: 'textStyles.heading', color: 'primary'},
          '& h3': {variant: 'textStyles.heading', color: 'primary'},
          '& h4': {variant: 'textStyles.heading', color: 'primary'},
          '& h5': {variant: 'textStyles.heading', color: 'primary'},
          '& h6': {variant: 'textStyles.heading', color: 'primary'},
          '& p': {color: 'text', fontFamily: 'body', lineHeight: 'body'},
          '& li': {color: 'text', fontFamily: 'body', lineHeight: 'body'},
        }}
        dangerouslySetInnerHTML={{
          __html: data.blogPost.content,
        }}
      />
    </div>
  )
}

export const query = graphql`
  query WordPressBlogPostQuery($id: String!) {
    blogPost(id: {eq: $id}) {
      title
      content
    }
  }
`
