import React from 'react'
import { MDXProvider } from '@mdx-js/react'
const H1 = (props) => <h2 {...props} />
const H2 = (props) => <h3 {...props} />
const H3 = (props) => <h4 {...props} />
const H4 = (props) => <h5 {...props} />
const H5 = (props) => <h6 {...props} />

const components = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5 }

const DefaultLayout = () => {
  return <MDXProvider components={components} />
}

export default DefaultLayout
