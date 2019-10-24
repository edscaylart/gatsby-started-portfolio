import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const PostItem = ({ id, date, path, title, description, readingTime }) => (
  <S.PostWrapper key={id}>
    <S.PostLinkWrapper key={id} to={path}>
      <S.PostTitle>{title} </S.PostTitle>
      <div>
        <S.PostDate>
          {date} <span>- {readingTime}</span>
        </S.PostDate>
      </div>
      <S.PostExcerpt>{description}</S.PostExcerpt>
    </S.PostLinkWrapper>
  </S.PostWrapper>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
