import { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Loading from 'react-loading'
import { useLocation } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../../services/RepositoryService'
import CardList from './components/CardList'
import { Repository } from '../../interfaces/Repository'

import * as S from './styles'

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
    <S.Container>
      <S.ContainerBox>
        <S.Header>
          <S.BackButton to="/">
            <FiArrowLeft size={18} color="#A888C3" />
            <S.BackButtonText>Back</S.BackButtonText>
          </S.BackButton>
          <div>
            <S.HeaderText style={{ color: '#9a63c7' }}>{`<`}</S.HeaderText>
            <S.HeaderText>{(state as RouteProps)?.language}</S.HeaderText>
            <S.HeaderText style={{ color: '#9a63c7' }}>{`>`}</S.HeaderText>
          </div>
        </S.Header>
        <S.SubtitleDiv>
          <S.SubtitleText>Repositories:</S.SubtitleText>
        </S.SubtitleDiv>
        <S.ListContainer>
          {loading && (
            <S.LoadingContainer>
              <Loading
                type={'spinningBubbles'}
                color={'#ffffff'}
                height={24}
                width={24}
              />
            </S.LoadingContainer>
          )}
          {!loading && (
            <CardList
              data={data?.getRepositories ?? (state as RouteProps)?.data}
            />
          )}
        </S.ListContainer>
        <S.FooterContainer>
          <S.FooterButton onClick={() => setPage(page - 1)} disabled={page < 2}>
            Prev
          </S.FooterButton>
          <S.FooterLabel>
            <S.FooterText>{page}</S.FooterText>
          </S.FooterLabel>
          <S.FooterButton onClick={() => setPage(page + 1)} disabled={loading}>
            Next
          </S.FooterButton>
        </S.FooterContainer>
      </S.ContainerBox>
    </S.Container>
  )
}

export default List
