describe('reviuStan_10_1.1', () => {
    it('testCase1 Run web site', () => {
        cy.visit('https://example.cypress.io')
        // .get - поиск локатора
        cy.get('a[href="/commands/querying"]').contains('get').click()
       
    })
}

)