/*Stan P.
  22:20
Код с ревью */

// Для тейстрирования дат нужна библтотека dayjs
// https://day.js.org/docs/en/installation/node-js
// https://day.js.org/docs/en/display/format
// npm install dayjs
// добавить в код const dayjs = require('dayjs');
// dayjs()format('формат) -  возвращает текущую дату в нужном формате

import projects from '../fixtures/projects.json';

const dayjs = require('dayjs');

describe('Test', () => {
  it('Timestamp', () => {
    cy.visit(`http://localhost:8080/login`);
        cy.get('#j_username').type('admin');
        cy.get('input[name="j_password"]').type('asd12345');
        cy.get('button[name="Submit"]').click();

    function createProject(nameProject) {
      cy.get('#side-panel [href$=newJob]').click();
      cy.get('form#createItem input[id=name]').type(nameProject);
      cy.get('#items .category [class$=FreeStyleProject]').click();
      cy.get('#ok-button').click();
      cy.get('button[name=Submit]').click();
      cy.get('#main-panel .page-headline').should(
        'contain',
        projects.newProject
      );
    }

    createProject(projects.newProject);
    cy.get('#jenkins-home-link').click();
    cy.get('td:last-child [tooltip]').click();

    cy.get('a[href="/view/all/builds"]').click();
    cy.get('#icon-tl-0-1-e1').click();
    cy.get('div.timeline-event-bubble-title a').should(
      'contain',
      projects.newProject
    );
    cy.get('.timeline-event-bubble-time').then(el => {
      let actualData = el.text().slice(0, 22);
      let expectedData = dayjs().format('ddd, DD MMM YYYY HH:mm'); 
      expect(actualData).to.be.eql(expectedData);
    });
  });
});