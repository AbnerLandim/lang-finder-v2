import React, { useState, useEffect } from 'react'
import Loading from 'react-loading'
import { useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../../services/RepositoryService'
import { FaSistrix, FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import parseSearchText from '../../helpers/parseSearchText'
import Logo from '../../assets/github-logo.svg'

import * as S from './styles'

const Home: React.FC = () => {
  const PER_PAGE_DEFAULT = 8
  const [noResult, setNoResult] = useState(false)
  const [getRepositories, { data, loading }] = useLazyQuery(GET_REPOSITORIES)
  const history = useHistory()

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchText = parseSearchText(document.forms?.[0]?.langInput?.value)
    getRepositories({
      variables: {
        input: {
          language: searchText,
          page: 1,
          perPage: PER_PAGE_DEFAULT,
        },
      },
    })
    if (data?.getRepositories) {
      setNoResult(false)
    } else setNoResult(true)
  }

  useEffect(() => {
    const language = parseSearchText(document.forms?.[0]?.langInput?.value)
    if (data?.getRepositories)
      history.push('/list', {
        language,
        data: data?.getRepositories,
      })
  }, [data])

  return (
    <S.Container>
      <S.ContainerBox>
        <S.Header>
          <S.LogoImage src={Logo} alt="lang-finder" />
          <S.TitleBox>
            <S.HeaderTitle>Lang Finder</S.HeaderTitle>
            <S.AppVersionText>v2</S.AppVersionText>
          </S.TitleBox>
        </S.Header>
        <S.SubtitleText>
          {`Search for any language you'd like to see projects about, so we can
          show you repositories containing them.`}
        </S.SubtitleText>
        <S.InputContainer onSubmit={(e) => search(e)}>
          <S.TextInput
            name="langInput"
            placeholder="Search language..."
            required
            autoFocus
          />
          <S.SearchButton type="submit">
            <FaSistrix size={18} color="#ffffff" />
          </S.SearchButton>
        </S.InputContainer>
        <S.ContactDiv>
          <S.ContactIcon
            href="https://github.com/AbnerLandim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt size={18} color="#000000" />
          </S.ContactIcon>
          <S.ContactIcon
            href="https://www.linkedin.com/in/abner-landim-siqueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} color="#000000" />
          </S.ContactIcon>
          <S.ContactIcon
            href="mailto:abner.landim340@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={18} color="#000000" />
          </S.ContactIcon>
        </S.ContactDiv>
        {loading && (
          <Loading
            type={'spinningBubbles'}
            color={'#ffffff'}
            height={24}
            width={24}
          />
        )}
        {noResult && !loading && (
          <S.NoResultText>There is no match for your search.</S.NoResultText>
        )}
      </S.ContainerBox>
    </S.Container>
  )
}

export default Home
