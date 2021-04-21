import React, { useState } from 'react'
import Loading from 'react-loading'
import { FaSistrix, FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import {
  Container,
  SubtitleText,
  ContainerBox,
  Header,
  HeaderTitle,
  LogoImage,
  InputContainer,
  TextInput,
  SearchButton,
  ContactDiv,
  ContactIcon,
} from './styles'
import Logo from '../../assets/github-logo.svg'
import parseSearchText from '../../helpers/parseSearchText'

const Home: React.FC = () => {
  const [language, setLanguage] = useState('')

  return (
    <Container>
      <ContainerBox>
        <Header>
          <LogoImage src={Logo} alt="lang-finder" />
          <HeaderTitle>Lang Finder</HeaderTitle>
        </Header>
        <SubtitleText>
          {`Search for any language you'd like to see projects about, so we can
          show you repositories containing them.`}
        </SubtitleText>
        <InputContainer>
          <TextInput
            placeholder="Search language..."
            onChange={(e) => setLanguage(parseSearchText(e.target.value))}
            required
            autoFocus
          />
          <SearchButton>
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
      </ContainerBox>
    </Container>
  )
}

export default Home
