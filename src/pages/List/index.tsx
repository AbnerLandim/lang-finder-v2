import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Loading from 'react-loading'
import { useLocation } from 'react-router-dom'
import CardList from './components/CardList'
import {
  Container,
  ContainerBox,
  Header,
  HeaderText,
  BackButton,
  SubtitleDiv,
  BackButtonText,
  SubtitleText,
  ListContainer,
} from './styles'
import { Repository } from '../../interfaces/Repository'

type RouteProps = {
  language: string
  data: Repository[]
}

const List: React.FC = () => {
  const { state } = useLocation()

  return (
    <Container>
      <ContainerBox>
        <Header>
          <BackButton to="/">
            <FiArrowLeft size={18} color="#A888C3" />
            <BackButtonText>Back</BackButtonText>
          </BackButton>
          <HeaderText style={{ color: '#9a63c7' }}>{`<`}</HeaderText>
          <HeaderText>{(state as RouteProps)?.language}</HeaderText>
          <HeaderText style={{ color: '#9a63c7' }}>{`>`}</HeaderText>
        </Header>
        <SubtitleDiv>
          <SubtitleText>Repositories:</SubtitleText>
        </SubtitleDiv>
        <ListContainer>
          <CardList data={(state as RouteProps)?.data} />
        </ListContainer>
      </ContainerBox>
    </Container>
  )
}

export default List
