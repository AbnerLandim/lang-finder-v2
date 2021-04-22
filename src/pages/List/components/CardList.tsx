/* eslint-disable react/prop-types */
import React from 'react'
import { FiStar } from 'react-icons/fi'
import { Repository } from '../../../interfaces/Repository'
import {
  TableBody,
  RedirectContainer,
  TableItem,
  LeftDiv,
  RightDiv,
  Avatar,
  FullNameText,
  StarFlag,
  StarFlagText,
  DescriptionText,
} from './CardList.styles'

type CardListProps = {
  data: Repository[]
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <TableBody>
      {data.map((item, index) => (
        <RedirectContainer
          key={`id_${index}`}
          href={item?.url}
          className="hyperlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TableItem key={item?.fullName}>
            <LeftDiv>
              <Avatar src={item?.avatarUrl} />
              <FullNameText title={item?.fullName} id="full-name">
                {item?.fullName}
              </FullNameText>
            </LeftDiv>
            <RightDiv>
              <RedirectContainer
                href={`${item?.url}/stargazers`}
                className="hyperlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StarFlag>
                  <FiStar size={12} color="#FFFFFF" />
                  <StarFlagText>{item?.starsCount}</StarFlagText>
                </StarFlag>
              </RedirectContainer>
              <DescriptionText title={item?.description} id="description">
                {item?.description}
              </DescriptionText>
            </RightDiv>
          </TableItem>
        </RedirectContainer>
      ))}
    </TableBody>
  )
}

export default CardList
