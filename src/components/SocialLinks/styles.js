import styled from 'styled-components'

export const SocialLinksWrapper = styled.div``

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  margin-right: 1em;

  :last-of-type {
    margin-right: 0;
  }
`

export const SocialLinksLink = styled.a`
  color: #f8f8f2;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #f8f8f2;
  width: 30px;
  height: 30px;
`
