import React, { useState } from 'react'
import Loading from 'react-loading'
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
          <SearchButton />
        </InputContainer>
      </ContainerBox>
    </Container>
  )
}

export default Home
