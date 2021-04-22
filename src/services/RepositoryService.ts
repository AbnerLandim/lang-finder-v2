import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query getRepositories($input: LanguageQuery!) {
    getRepositories(input: $input) {
      fullName
      description
      url
      avatarUrl
      starsCount
    }
  }
`
