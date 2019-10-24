import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import Profile from '../components/Profile'
import SEO from '../components/seo'

const instance = axios.create()

const IndexPage = () => {
  const [uselessFact, setFact] = useState(null)
  useEffect(() => {
    instance
      .get('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(response => {
        if (response.status === 200) {
          const { text } = response.data
          setFact(text)
        }
      })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Profile uselessFact={uselessFact} />
    </Layout>
  )
}

export default IndexPage
