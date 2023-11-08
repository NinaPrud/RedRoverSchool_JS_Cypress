/// <reference types="cypress"/>

import { endPointUrl, sideMenuItems } from "../fixtures/homePage.json"

describe('13 lecs tests optimisation', () => {
    beforeEach(function () {
        cy.visit(`http://localhost:8080/login`);
        cy.get('#j_username').type('admin');
        cy.get('input[name="j_password"]').type('asd12345');
        cy.get('button[name="Submit"]').click();

        cy.get('#side-panel #tasks a').as('sideMenuLinks')
    })

    sideMenuItems.forEach((pageName, ind) => {
        it(`Verify searchBox is on ${pageName} page`, function () {
            cy.wrap(this.sideMenuLinks[ind]).click()
            cy.url().should('contain', endPointUrl[ind])

            cy.get('input#search-box').should('be.visible')
        })
    })
})

