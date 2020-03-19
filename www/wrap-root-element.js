import React from 'react'
import {ThemeProvider} from 'theme-ui'
import {Global} from '@emotion/core'
import {future} from '@theme-ui/presets'
import * as H from './src/components/headings'
import * as Text from './src/components/text'

const components = {
  ...H,
  ...Text,
}

export default ({element}) => (
  <ThemeProvider theme={future} components={components}>
    <Global styles={{body: {background: future.colors.background}}} />
    {element}
  </ThemeProvider>
)
