import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import icons from '../components/Projects/icons'
import * as S from '../components/Projects/styles'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>Projects</S.Title>
          <S.Subtitle>
            {`These are some things that I've built. For contracts and for fun!`}
          </S.Subtitle>
        </S.TitleWrapper>
        <S.ProjectListWrapper>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { image, title, links } = node.frontmatter
            const buttons = links ? links.split('<>') : []
            return (
              <S.ProjectWrapper
                key={node.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <S.ProjectContentWrapper>
                  <S.ProjectImage src={image} alt={title} />
                  <S.ProjectTitle>{title}</S.ProjectTitle>
                  <S.ProjectDescription>{node.excerpt}</S.ProjectDescription>
                </S.ProjectContentWrapper>
                <S.ButtonWrapper>
                  {buttons.map((button, i) => {
                    const [label, url, iconName] = button.split('|')
                    const Icon = iconName ? icons[iconName] : null
                    return (
                      <S.Button
                        key={i}
                        href={url}
                        title={label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Icon && (
                          <S.IconWrapper>
                            <Icon />
                          </S.IconWrapper>
                        )}
                        <S.ButtonText>{label}</S.ButtonText>
                      </S.Button>
                    )
                  })}
                </S.ButtonWrapper>
              </S.ProjectWrapper>
            )
          })}
        </S.ProjectListWrapper>
      </S.ContentWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            path
            links
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
// ...GatsbyImageSharpFluid
