import styled from 'styled-components'

export const ContentWrapper = styled.div`
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

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0.5em;
  margin-bottom: 1rem;
  perspective: 20em;
`

export const Description = styled.h3`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.3;
`
