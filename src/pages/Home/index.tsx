import React from 'react'
import {
  Container,
  SubtitleText,
  ContainerBox,
  Header,
  HeaderTitle,
  LogoImage,
} from './styles'
import Logo from '../../assets/github-logo.svg'

const Home: React.FC = () => {
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
      </ContainerBox>
    </Container>
  )
}

export default Home
