import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'
import SEO from '../components/seo'

import * as S from '../components/Blog/styles'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blog" />
      <S.ContentWrapper>
        <S.Title>Blog</S.Title>
        <S.Subtitle>
          I wrote things for my personal growth. To guide and help someone with
          my mistakes and solutions.
        </S.Subtitle>
        {postList.map(({ node }) => (
          <PostItem
            key={node.id}
            id={node.id}
            date={node.frontmatter.date}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            readingTime={node.fields.readingTime.text}
          />
        ))}
      </S.ContentWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default BlogList

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(locale: "en", formatString: "DD MMMM, YYYY")
            path
            description
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
