import React, { useState, useEffect } from 'react'
import Loading from 'react-loading'
import { useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../../services/RepositoryService'
import { FaSistrix, FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import {
  Container,
  SubtitleText,
  ContainerBox,
  Header,
  TitleBox,
  HeaderTitle,
  AppVersionText,
  LogoImage,
  InputContainer,
  TextInput,
  SearchButton,
  ContactDiv,
  ContactIcon,
  NoResultText,
} from './styles'
import Logo from '../../assets/github-logo.svg'
import parseSearchText from '../../helpers/parseSearchText'

const Home: React.FC = () => {
  const PER_PAGE_DEFAULT = 8
  const [language, setLanguage] = useState('')
  const [noResult, setNoResult] = useState(false)
  const [getRepositories, { data, loading }] = useLazyQuery(GET_REPOSITORIES)
  const history = useHistory()

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getRepositories({
      variables: {
        input: {
          language: language,
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
    if (data?.getRepositories)
      history.push('/list', { language: language, data: data?.getRepositories })
  }, [data])

  return (
    <Container>
      <ContainerBox>
        <Header>
          <LogoImage src={Logo} alt="lang-finder" />
          <TitleBox>
            <HeaderTitle>Lang Finder</HeaderTitle>
            <AppVersionText>v2</AppVersionText>
          </TitleBox>
        </Header>
        <SubtitleText>
          {`Search for any language you'd like to see projects about, so we can
          show you repositories containing them.`}
        </SubtitleText>
        <InputContainer onSubmit={(e) => search(e)}>
          <TextInput
            placeholder="Search language..."
            onChange={(e) => setLanguage(parseSearchText(e.target.value))}
            required
            autoFocus
          />
          <SearchButton type="submit">
            <FaSistrix size={18} color="#ffffff" />
          </SearchButton>
        </InputContainer>
        <ContactDiv>
          <ContactIcon
            href="https://github.com/AbnerLandim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt size={18} color="#000000" />
          </ContactIcon>
          <ContactIcon
            href="https://www.linkedin.com/in/abner-landim-siqueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} color="#000000" />
          </ContactIcon>
          <ContactIcon
            href="mailto:abner.landim340@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={18} color="#000000" />
          </ContactIcon>
        </ContactDiv>
        {loading && (
          <Loading
            type={'spinningBubbles'}
            color={'#ffffff'}
            height={24}
            width={24}
          />
        )}
        {noResult && (
          <NoResultText>There is no match for your search.</NoResultText>
        )}
      </ContainerBox>
    </Container>
  )
}

export default Home
