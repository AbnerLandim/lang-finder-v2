import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

export const ContainerBox = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-height: 580px;
  max-width: 660px;
  background: #3f3f3f;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 30px;
`

export const HeaderText = styled.span`
  color: #dfdfdf;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  font-style: italic;
`

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: opacity 0.3s;
  position: absolute;
  left: 0;
  margin-left: 15px;
  text-decoration: none;
`

export const BackButtonText = styled.span`
  color: rgb(182, 182, 182);
  font-weight: 500;
  font-size: 18px;
  font-family: Roboto;
`

export const SubtitleDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 24px 0px 16px;
`

export const SubtitleText = styled.span`
  font-weight: bold;
  font-family: Roboto;
  color: #e7e7e7;
  font-size: 18px;
  margin-left: 20px;
  display: flex;
`

export const ListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 12px;
  margin: 0;
  width: 95%;
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  margin: 16px 0px;
`

export const FooterLabel = styled.footer`
  display: flex;
  justify-content: center;
  padding: 4px;
  border: none;
  border-radius: 2px;
  background-color: #444444;
`

export const FooterText = styled.span`
  font-weight: bold;
  font-family: Roboto;
  color: #939393;
`

export const FooterButton = styled.button`
  border: none;
  color: white;
  font-family: Roboto;
  font-weight: bold;
  background-color: #797979;
  border-radius: 2px;
  padding: 10px;
  &:hover {
    filter: brightness(75%);
    transition: filter 0.3s;
  }
`

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
