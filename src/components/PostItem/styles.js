import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostWrapper = styled.div`
  margin-bottom: 1rem;
  max-width: 640px;
`

export const PostLinkWrapper = styled(Link)`
  text-decoration: none;
  line-height: 1.5;
`

export const PostTitle = styled.h3`
  font-size: 1.38316rem;
  color: #ffb86c;
`

export const PostDate = styled.h5`
  font-size: 0.85028rem;
  color: #8be9fd;
  span {
    font-size: 0.7rem;
    color: #50fa7b;
  }
`

export const PostExcerpt = styled.p`
  padding: 0;
  margin: 0 0 1.45rem;
  font-size: 112.5%/1.45em;
`
