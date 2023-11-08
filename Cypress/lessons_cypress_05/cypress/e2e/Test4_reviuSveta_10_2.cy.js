describe('s1', () => {
    it('t1 clicking Querying', () => {
        cy.visit('https://example.cypress.io') 
        cy.get('.home-list a[href="/commands/querying"]').contains('Querying').click()
        cy.url().should('contain', '/commands/querying')
        cy.go('back')   // так писать не совсем правильно, тесты зависимы др. от др(если завалился этот на асершине - дальше не пойдет, тест должен заканчиваться асершином)
                        // а общий адрес лучше записыать через  before или  beforeEach
    });
    it('t2 clicking Traversal', () => {               // x  перед it - скипаем тест                                       
        cy.get('.home-list a[href="/commands/traversal"]').contains('Traversal').click()
        cy.url().should('include', '/commands/traversal' )
        cy.go('back')
    })
    it('t3 clicking Actions', () => {
        cy.get('.home-list a[href="/commands/actions"]').contains('Actions').click()
        cy.url().should('include', '/commands/actions' )
        cy.go('back')
        
    });
    it('t4 chekcing dropdown', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu a[href="/commands/location"]').click()      // обращение к классу через .  затем назв класса  затем пробел атрибут []
        cy.url().should('include', '/commands/location')
        cy.go('back')   
    })
    it('t5 checking down API', () => {
        cy.get('.home-list a[href="/cypress-api"]').contains('Server').click()  
    })
    // Actions
    // Window
    // Viewport
});


// .home-list a[href="/commands/traversal"] /commands/traversal