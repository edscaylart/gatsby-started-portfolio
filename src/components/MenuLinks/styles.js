import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
  padding: 20px;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  display: inline;
  margin-right: 1rem;

  .active {
    color: #f8f8f2;
  }
`

export const MenuLinksLink = styled(Link)`
  color: #6272a4;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #f8f8f2;
  }
`
