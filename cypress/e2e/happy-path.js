describe('happy path', () => {
  it('should allow basic flow', () => {
    cy.visit('/')

    cy.findByText(/loading/i).should('exist')
    cy.findByText(/loading/i).should('not.exist')

    cy.findByRole('banner').within(() => {
      cy.findByRole('img').should('exist')
    })

    // Pagination
    cy.scrollTo('bottom')
    cy.findByRole('button', {name: /go to page 4/i}).click({force: true})
    cy.wait(1000)
    cy.findByRole('button', {name: /go to page 1/i}).click({force: true})

    // Redirect to single house page
    cy.findByRole('listitem', {
      name: /house algood/i,
    }).within(() => {
      cy.findByText(/learn more/i).click()
    })

    cy.findByText(/loading/i).should('exist')
    cy.findByText(/loading/i).should('not.exist')

    // Single page content
    cy.findByRole('banner').should('not.exist')
    cy.findByRole('img', {
      name: /house image/i,
    }).should('exist')

    cy.findByRole('heading', {
      name: /region the westerlands/i,
    }).should('exist')

    cy.findByTestId('diedOut').should('have.text', 'Died Out: Unknown')
    cy.findByTestId('founded').should('have.text', 'Founded: Unknown')
    cy.findByTestId('seats').should('have.text', 'Seats: Unknown')

    // Go back to the main screen
    cy.findByRole('button', {
      name: /go back/i,
    }).click()

    cy.findByRole('banner').within(() => {
      cy.findByRole('img').should('exist')
    })
    cy.findByRole('img', {
      name: /house image/i,
    }).should('not.exist')
  })
})
