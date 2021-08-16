import { mount } from '@cypress/react'
import CardList from '../pages/List/components/CardList'

describe('Card List Testing', () => {
  it('Redirect is correct', () => {
    const testData = [
      {
        avatarUrl:
          'https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp',
        description: 'Test description',
        fullName: 'Test name',
        starsCount: 5000,
        url: 'https://github.com/AbnerLandim/lang-finder-v2',
      },
    ]
    mount(<CardList data={testData} />)
      .get('a')
      .click({ multiple: true })
    cy.on('url:changed', (newUrl) => {
      expect(newUrl).toBe(testData[0].url)
    })
  })
})
