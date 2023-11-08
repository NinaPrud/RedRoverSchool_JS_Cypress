/// <reference types="cypress"/>



describe("example cypres tests", () => {
  // beforeEach(() => {
  //   cy.visit("https://example.cypress.io/commands/actions");
  // });

  it('.trigger()', () => {
    cy.visit("https://example.cypress.io/commands/actions")
    cy.get(".trigger-input-range")
      .invoke("val", 25)
      .trigger("change")
      .get("input[type=range]")
      .siblings("p")
      .should("have.text", "25");
  });

  it('.invoke() + show', () => {
    cy.visit('https://example.cypress.io/commands/connectors')
    cy.get('.connectors-div').should('be.hidden')
      // call the jquery method 'show' on the 'div.container'
      .invoke('show')
      .should('be.visible')
  });

  it('.invoke() + attr', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('[data-test-id="test-example"]')
      .invoke('attr', 'data-test-id')
      .should('equal', 'test-example')
  })

  it('have.attr', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('[data-test-id="test-example"]')
      .should('have.attr', 'data-test-id', 'test-example')
      .and('have.css', 'position', 'static')
  })

  it('.invoke() + css', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('[data-test-id="test-example"]')
      .invoke('css', 'position')
      .should('equal', 'static')
  })


  it('.each() + expect()', () => {
    const names = ['Lara Williams', 'William Grey', 'Monica Pharrel']
    cy.visit('https://example.cypress.io/commands/connectors')
    cy.get('.connectors-each-ul>li')
      .each(function ($el, index, $list) {
        expect($el.text()).to.include(names[index])
      });
  });
  // ПОПРОБОВАТЬ

  /*cy.get('.input').invoke('val').should('eq', 'foo') // Invoke the 'val' function
cy.get('.modal').invoke('show') // Invoke the jQuery 'show' function
cy.wrap({ animate: fn }).invoke('animate') // Invoke the 'animate' function
*/

  it('.eq()', () => {
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.get('.traversal-list>li').eq(2).should('contain', 'persian')
  });

  it('.first()', () => {
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.get('.traversal-table td')
      .first().should('contain', '1')
  })

  it('.find()', () => {
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', '7') 
  });

  it('.filter()', () => {
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.get('.traversal-nav>li')
      .filter('.active').should('contain', 'About')
  });

  it('.contains (selector, content)', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('#querying')
      .contains('ul', 'oranges')
      .should('have.class', 'query-list')
  });
  
  it('.contains()', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('.query-button')
      .contains('Save Form')
      .should('have.class', 'btn')
  });

  it('.within() + placeholder', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email')
      cy.get('input:last').should('have.attr', 'placeholder', 'Password' )
    })
  })

  it('.blur()', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-blur').type('Nina').blur() 
      .should('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')
  })

  it('.focus()', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-focus').focus()    // с .click() тоже проходит
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')
  })
// submit применим только к тегу <form/>
  it('.submit()', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-form')
      .find('[type="text"]').type('info')
    cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
  })

  it('.scrollIntoView()', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('#scroll-horizontal button')
      .should('not.be.visible')
    cy.get('#scroll-horizontal button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-vertical button')
      .should('not.be.visible')
    cy.get('#scroll-vertical button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-both button')
      .should('not.be.visible')
    cy.get('#scroll-both button').scrollIntoView()
      .should('be.visible')
  })
   // cy.scrollTo() прокручивает все окно
  it('cy.scrollTo()', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.scrollTo('bottom')  // в низ
    cy.scrollTo('top')    //  в верх
    cy.scrollTo('center')
  })

  it.only('.scrollTo()', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('#scrollable-horizontal').scrollTo('right')

    cy.get('#scrollable-vertical').scrollTo(250, 250)  //specific coordinate: (x axis, y axis) in pixels
    
    cy.get('#scrollable-both').scrollTo('75%', '25%')  //specific percentage of the (width, height) of the element

    cy.get('#scrollable-vertical').scrollTo('center', {easing: 'linear'})   // control the easing of the scroll (default is 'swing')

    cy.get('#scrollable-both').scrollTo('center', {duration: 2000})   // control the duration of the scroll (in ms)
  })


});
