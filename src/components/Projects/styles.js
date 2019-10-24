import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

export const TitleWrapper = styled.div`
  margin: 0 0 1.45rem;
`

export const Title = styled.h1`
  font-size: 2.25rem;
  padding: 0;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  line-height: 1.5;
`

export const Subtitle = styled.h3`
  font-size: 1rem;
`

export const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;
`

export const ProjectWrapper = styled(motion.div)`
  cursor: pointer;
  background-color: #252942;
  margin: 10px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 7px rgba(1, 1, 1, 0.7));
`

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
`

export const ProjectImage = styled.img`
  height: 100px;
  width: 100px;
  align-self: center;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`

export const ProjectTitle = styled.h3`
  font-size: 1.45rem;
  margin-bottom: 0.7rem;
`

export const ProjectDescription = styled.p`
  font-size: 0.876rem;
  text-align: justify;
`

export const ButtonWrapper = styled.div`
  display: flex;
`

export const Button = styled.a`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #6272a4;
  border: 1px solid #44475a;
  padding: 5px 0;
  text-decoration: none;
`

export const ButtonText = styled.p`
  font-size: 0.8rem;
`

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`
