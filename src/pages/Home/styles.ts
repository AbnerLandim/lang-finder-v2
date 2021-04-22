import styled from 'styled-components'

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
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 640px;
  max-height: 400px;
  background: #3f3f3f;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Header = styled.header`
  display: flex;
  width: 90%;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.span`
  color: #a384ec;
  margin-left: 20px;
  font-size: 48px;
  font-weight: 700;
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
`

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`

export const SubtitleText = styled.span`
  font: 400 14px Roboto, sans-serif;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  width: 90%;
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  min-width: 60%;
`

export const TextInput = styled.input`
  border: none;
  background-color: #474747;
  border-top: 1px solid #585858;
  border-bottom: 1px solid #585858;
  border-left: 1px solid #585858;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  font-family: Roboto;
  color: #b6b6b6;
  padding: 6px;
  flex: 1;
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9d7aec;
  border: 1px solid #9d7aec;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 5px;
  &:hover {
    filter: brightness(75%);
    transition: filter 0.4s;
  }
`

export const ContactDiv = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ContactIcon = styled.a`
  margin: 0px 8px;
`

export const NoResultText = styled.span`
  color: #dfdfdf;
  font-weight: normal;
  font-size: 14px;
  font-family: Roboto;
  margin: 10px 0px 10px;
`
