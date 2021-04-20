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
  justify-content: flex-start;
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
  margin: 32px 0px 32px;
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
`