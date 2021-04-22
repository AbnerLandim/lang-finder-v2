import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Loading from 'react-loading'
import { useLocation } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../../services/RepositoryService'
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
  FooterContainer,
  FooterLabel,
  FooterText,
  FooterButton,
  LoadingContainer,
} from './styles'
import { Repository } from '../../interfaces/Repository'

type RouteProps = {
  language: string
  data: Repository[]
}

const List: React.FC = () => {
  const PER_PAGE_DEFAULT = 8
  const [page, setPage] = useState(1)
  const { state } = useLocation()
  const [getRepositories, { data, loading }] = useLazyQuery(GET_REPOSITORIES)

  useEffect(() => {
    getRepositories({
      variables: {
        input: {
          language: (state as RouteProps)?.language,
          page: page,
          perPage: PER_PAGE_DEFAULT,
        },
      },
    })
  }, [page])

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
          {loading && (
            <LoadingContainer>
              <Loading
                type={'spinningBubbles'}
                color={'#ffffff'}
                height={24}
                width={24}
              />
            </LoadingContainer>
          )}
          {!loading && (
            <CardList
              data={data?.getRepositories ?? (state as RouteProps)?.data}
            />
          )}
        </ListContainer>
        <FooterContainer>
          <FooterButton onClick={() => setPage(page - 1)} disabled={page < 2}>
            Prev
          </FooterButton>
          <FooterLabel>
            <FooterText>{page}</FooterText>
          </FooterLabel>
          <FooterButton onClick={() => setPage(page + 1)} disabled={loading}>
            Next
          </FooterButton>
        </FooterContainer>
      </ContainerBox>
    </Container>
  )
}

export default List
