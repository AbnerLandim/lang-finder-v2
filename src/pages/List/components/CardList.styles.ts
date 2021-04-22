import styled from 'styled-components'

export const TableBody = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`

export const RedirectContainer = styled.a`
  text-decoration: none;
`

export const TableItem = styled.li`
  padding: 4px;
  border-radius: 4px;
  border-bottom: 1px solid rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(116, 116, 116, 0.2),
      0 3px 10px 0 rgba(116, 116, 116, 0.19);
  }
  height: 36px;
`

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
`

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
`

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`

export const FullNameText = styled.span`
  font-weight: 500;
  font-family: Roboto;
  color: #bdbdbd;
  margin-left: 18px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StarFlag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #8059a0;
  border-radius: 2px;
  padding: 2px;
  min-width: 64px;
  margin-left: 12px;
  &:hover {
    filter: brightness(75%);
    transition: filter 0.3s;
  }
`

export const StarFlagText = styled.span`
  font-weight: 500;
  font-size: 12px;
  font-family: Roboto;
  color: white;
  margin-left: 4px;
`

export const DescriptionText = styled.span`
  font-size: 12px;
  font-weight: 500;
  font-family: Roboto;
  color: #a5a5a5;
  max-width: 256px;
  margin-left: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
