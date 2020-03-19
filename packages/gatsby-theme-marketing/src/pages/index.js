import React, {useContext} from 'react'
import {Global} from '@emotion/core'
import {ThemeContext} from '../context'
import Header from '../components/header'
import * as H from '../components/headings'
import * as Text from '../components/text'

export default props => {
  const {theme} = useContext(ThemeContext)

  return (
    <div>
      <Global styles={{body: {backgroundColor: theme.colors.background}}} />
      <Header />
      <H.h1>Shwilliam</H.h1>
      <Text.p>Shopify + WordPress + MDX</Text.p>
    </div>
  )
}
