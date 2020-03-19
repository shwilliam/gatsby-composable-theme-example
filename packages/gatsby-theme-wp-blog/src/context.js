import React from 'react'
import {jsxPragma, mdxPragma} from 'isolated-theme-ui'

export const ThemeContext = React.createContext({
  theme: {},
  components: {},
})

export const jsx = jsxPragma(ThemeContext)
export const mdx = mdxPragma(ThemeContext)
