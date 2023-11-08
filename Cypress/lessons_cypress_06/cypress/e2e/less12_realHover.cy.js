/// <reference types="cypress" />

//import messages from '../fixtures/messages.json'   -- ЗДЕСЬ НЕ РАБОТАЕТ - НАВЕРНОЕ ДОП НАСТРОЙКИ

let message

beforeEach(() => {
    // cy.fixture('blogPage').then((data) => {
    //     numberItems = data.blogCategoriesItems.numberOfCategoryItems;
    //     textItem_0 = data.blogCategoriesItems.textItem_0
    // });
    cy.visit(`http://localhost:8080/login`);
    cy.get('#j_username').type('admin');
    cy.get('input[name="j_password"]').type('asd12345');
    cy.get('button[name="Submit"]').click();

    cy.fixture('messages').then((data) => {
        message = data
    })
})

describe('les3 - realHover - create/delete proj - alert - fixtures', function () {
    it('test realhover', () => {
        cy.get('li.jenkins-breadcrumbs__list-item .model-link').should('have.text', 'Dashboard').realHover()
        // cy.get('.jenkins-breadcrumbs__list-item .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('.jenkins-breadcrumbs__list-item .jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('#breadcrumb-menu>div.bd>ul.first-of-type>li>a span').should('have.length', 5)
    })

    it.only('Delete project using dropdown menu', function () {
        // precond - create project
        cy.get('.content-block a[href="newJob"]').click()
        cy.get('input#name').type('project1')
        cy.get('li.hudson_model_FreeStyleProject').click()    // cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
        cy.get('button#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()


        cy.get('tbody tr td a.jenkins-table__link').realHover({ position: "center" });
        cy.get('table#projectstatus button.jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('div#breadcrumb-menu ul li a').contains('Delete Project').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal(message.deleteConfirmMessage)
        })


    })

})