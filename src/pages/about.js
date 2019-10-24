import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../components/Avatar'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import * as S from '../components/About/styles'

const About = () => {
  const {
    site: {
      siteMetadata: { title, about },
    },
  } = useStaticQuery(graphql`
    query {
      sitePage {
        id
      }
      site {
        siteMetadata {
          title
          about
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <S.ContentWrapper>
        <Avatar />
        <S.Title>{`Hi I'm ${title}`}</S.Title>
        <S.Description>{about}</S.Description>
      </S.ContentWrapper>
    </Layout>
  )
}

export default About
