/// <reference types="cypress"/>

/*
Cypress.on('uncaught:exceptions', (err, runnable) => {
  return false
})
*/  // разобраться с этой ошибкой!!  минута видео

describe('Radio button clickng', () => {

    it('navigate to radio button', () => {
      cy.visit('https://demoqa.com/')
      //cy.get('.card-body h5').contains('Elements').click();
      cy.get('.category-cards > div:first-child ').click()     // .category-cards div.mt-4:first-child
      //cy.get('.menu-list').contains('Radio Button').click()
      cy.get('div[class="element-list collapse show"] #item-2').click()
      //cy.get('label[class="custom-control-label"][for="impressiveRadio"]').click()  // click можно только на ссылку, для типа radio  можно check  и  uncheck
      cy.get('#impressiveRadio').check({force:true}).should('be.checked')                                 // без {force:true} выдает ошибку (надо приложить усилие - типично для радиобаттона?)
      cy.get('.text-success').should('have.text',"Impressive")

    });
})