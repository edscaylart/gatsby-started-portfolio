import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const RANDOM_WORDS = [
  'Heeey! Take it easy',
  'Why you are doing this???',
  `C'mon!!! Stop!! Please!`,
  'There are nothing here',
]

export default function Profile({ uselessFact }) {
  const {
    site: {
      siteMetadata: { title, subtitle },
    },
  } = useStaticQuery(graphql`
    query LandingSiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  const [count, setCount] = useState(0)
  const [tooltipVisible, setVisible] = useState(false)
  const [avatarVisible, setAvatarVisible] = useState(true)
  const [tooltip, setTooltip] = useState('')

  function handleClick() {
    setCount(count + 1)

    if (count > 1 && count % 10 === 0 && count < 50) {
      setTooltip(RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)])
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 1000)
    } else if (count === 50) {
      setTooltip(`I'm too old for this stuff. See ya...`)
      setVisible(true)
      setTimeout(() => {
        setAvatarVisible(false)
        setVisible(false)
      }, 1000)
    }
  }

  return (
    <S.OuterContainer>
      <S.Tooltip visible={tooltipVisible}>{tooltip}</S.Tooltip>
      <S.AvatarWrapper
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={avatarVisible ? {} : { scale: 0 }}
        onClick={handleClick}
      >
        <Avatar />
      </S.AvatarWrapper>
      <S.Name>{title}</S.Name>
      <S.Description>{subtitle}</S.Description>
      <SocialLinks />
      {uselessFact && (
        <S.FactContent>
          <S.FactTitle>Useless Fact</S.FactTitle>
          <S.FactText>{`"${uselessFact}"`}</S.FactText>
        </S.FactContent>
      )}
    </S.OuterContainer>
  )
}
