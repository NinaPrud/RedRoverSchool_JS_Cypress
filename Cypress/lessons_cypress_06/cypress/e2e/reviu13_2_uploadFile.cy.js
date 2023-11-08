/// <reference types="cypress" />
// для команды .selectFile() нужен input[type="file"] или label for input
describe('uppload file - selectFile()', () => {
    it('selectFile() - 1', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input#file-upload').click().selectFile('cypress/fixtures/files/1213744.jpg')
        cy.get('input#file-submit').click()

        cy.get('h3').should('have.text', 'File Uploaded!')
        cy.get('div#uploaded-files').should('have.text', '\n    1213744.jpg\n  ')
    })

    it.only('selectFile() -2 ', () => {
        cy.visit('https://primereact.org/fileupload/#template')
        cy.get('.p-fileupload-choose input[type="file"]').eq(4).selectFile('cypress/fixtures/files/1213744.jpg', {force:true})
        cy.get(':nth-child(7) > .card').should('have.text','1213744.jpg', )
        
       //cy.get('.p-button-label.p-clickable span').first().parent().siblings('input[type="file"]')
    })

})