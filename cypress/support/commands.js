import "@testing-library/cypress/add-commands"

Cypress.Commands.add("login", ({ email, password }) => {
  return cy.request("POST", `/api/auth/mutations/login`, {
    params: {
      email,
      password,
    },
  })
})
