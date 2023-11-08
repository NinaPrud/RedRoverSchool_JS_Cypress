/// <reference types="cypress" />

describe('reviu_17_2_Stan_api_intercept()', () => {
    it('API testing - Autorization - positive', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            header: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                userName: 'Nina',
                password: '_Nina@1_'
            }
        })

    })
})