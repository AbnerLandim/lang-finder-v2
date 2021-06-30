/* eslint-disable react/prop-types */
import React from 'react'
import { FiStar } from 'react-icons/fi'

import { Repository } from '../../../interfaces/Repository'

import * as S from './CardList.styles'

type CardListProps = {
  data: Repository[]
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <S.TableBody>
      {data.map((item, index) => (
        <S.RedirectContainer
          key={`id_${index}`}
          href={item?.url}
          className="hyperlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.TableItem key={item?.fullName}>
            <S.LeftDiv>
              <S.Avatar src={item?.avatarUrl} />
              <S.FullNameText title={item?.fullName} id="full-name">
                {item?.fullName}
              </S.FullNameText>
            </S.LeftDiv>
            <S.RightDiv>
              <S.RedirectContainer
                href={`${item?.url}/stargazers`}
                className="hyperlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.StarFlag>
                  <FiStar size={12} color="#FFFFFF" />
                  <S.StarFlagText>{item?.starsCount}</S.StarFlagText>
                </S.StarFlag>
              </S.RedirectContainer>
              <S.DescriptionText title={item?.description} id="description">
                {item?.description}
              </S.DescriptionText>
            </S.RightDiv>
          </S.TableItem>
        </S.RedirectContainer>
      ))}
    </S.TableBody>
  )
}

export default CardList
