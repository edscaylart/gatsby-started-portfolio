import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 130px;
  margin: auto;
  width: 130px;
  ${media.lessThan('large')`
    height: 80px;
    width: 80px;
  `}
`
