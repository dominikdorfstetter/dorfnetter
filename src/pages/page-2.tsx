import * as React from 'react'
import Link from 'gatsby-link'
import Layout from '@layouts/layout';

const location = {
    pathname: 'second'
};

const SecondPage = () => (
  <>
      <Layout location={location}>
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
      </Layout>
  </>
)

export default SecondPage
