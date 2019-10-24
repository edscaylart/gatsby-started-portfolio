import styled from 'styled-components'
import { motion } from 'framer-motion'

export const OuterContainer = styled.div`
  display: flex;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 78vh;
  user-select: none;
  transition: opacity 0.2s ease-out, transform 0.2s ease-out,
    -webkit-transform 0.2s ease-out;
  transform: scale(1);
`
export const Name = styled.h1`
  font-size: 2rem;
  margin-top: 0.5em;
  margin-bottom: 0;
  perspective: 20em;
`
export const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`
export const AvatarWrapper = styled(motion.div)``

export const FactContent = styled.div`
  margin-top: 2rem;
  font-size: 0.7rem;
  line-height: 1.2rem;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`
export const FactTitle = styled.p`
  margin-bottom: 0;
  font-size: 0.7rem;
  transition-delay: 1.5s !important;
`
export const FactText = styled.p`
  margin-bottom: 0;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.7rem;
  transition-delay: 1.5s !important;
`
export const Tooltip = styled.span`
  max-width: 210px;
  background-color: #6272a4;
  color: #f8f8f2;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  bottom: 85%;
  /*bottom: 112%;*/
  /*left: 36%;*/
  /*margin-left: -60px;*/
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;

  :after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #6272a4 transparent transparent transparent;
  }
`
