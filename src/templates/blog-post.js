/* eslint-disable react/display-name */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import * as S from '../components/BlogPost/styles'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <S.ContentWrapper>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>
          {post.frontmatter.date} <span>- {post.fields.readingTime.text}</span>
        </S.PostDate>
        <S.MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.ContentWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
