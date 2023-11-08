/// <reference types="cypress" />

describe('Lesson 17- api testing', () => {
    const BASE_URL = 'https://reqres.in/api'
    const getListUsers = () => cy.request(`${BASE_URL}/users`)
    const getListUsersPlagin = () => cy.api(`${BASE_URL}/users`)
    const postCreatePlagin = () => cy.api({
        method: 'POST',
        url: `${BASE_URL}/users`,
        body: {
            "name": "morpheus",
            "job": "leader"
        }
    })
    const putUptdatePlagin = () => cy.api({
        method: 'PUT',
        url: `${BASE_URL}/api/users/2`,
        body: {
            "name": "Morpheus",
            "job": "leader"
        }
    })
       

    it('Get list users - verify status code', () => {
        getListUsers()
            .then(resp => console.log('response = ', resp))
            .its('status')
            .should('be.eq', 200)
    });

    it('1- Get list users - verify it contains data key', () => {
        getListUsers().then((response) => {
            expect(response.body).to.have.property('data')
        })
    });

    it('1_2- Get list users - verify it contains data key', () => {
        getListUsers()
            .its('body')
            .then((respBody) => {
                console.log('response body = ', respBody)
                expect(respBody).to.have.any.keys('data')
            })
    });

    it('2- Get list users - verify it contains data key', () => {
        getListUsers()
            .its('body')
            .should('have.any.key', 'data')
    });

    /* 

   -    npm i cypress-plugin-api
Import the plugin into your cypress/support/e2e.js file:
   -    import 'cypress-plugin-api'
!! Use cy.api() instead of cy.request() !!
*/

    it('PLAGIN - Get list users - verify status code', () => {
        getListUsersPlagin()
            .then(resp => console.log('response = ', resp))
            .its('status')
            .should('be.eq', 200)
    });

    it('PLAGIN - Post create - verify status code', () => {
       postCreatePlagin()
       .its('status')
       .should('be.eq', 201)
    });

    it('PLAGIN - Post create - verify response has key as "name"', () => {
        postCreatePlagin()
        .its('body')
        .should('have.any.key', 'name')
    });

    it('PLAGIN - Post create - 1-verify key "name" has type as "string', () => {
        postCreatePlagin()
        .then((response) => {
            expect(response.body.name).to.be.a('string')
        })
    });

    it('PLAGIN - Post create - 2-verify key "name" has type as "string', () => {
        postCreatePlagin()
        .its('body.name')
        .should('be.a', 'string')
    });

    
    it.only('PLAGIN - Put Update', () => {
        putUptdatePlagin()
        .its('body.name')
        .should('be.a', 'string')
    });
});