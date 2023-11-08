//  дополнение про зависимость тестов
/*
describe('s1', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })

    it('t1 clicking Querying', () => {
        // cy.visit('https://example.cypress.io') 
        cy.get('.home-list a[href="/commands/querying"]').contains('Querying').click()
        cy.url().should('contain', '/commands/querying')   // assertion
        //cy.go('back')   // так писать не совсем правильно, тесты зависимы др. от др(если завалился этот на асершине - дальше не пойдет, тест должен заканчиваться асершином)
        // а общий адрес лучше записыать через  before или  beforeEach
        // либо cy.visit('https://example.cypress.io') прописывать в каждом тесте
    });

    it('t2 clicking Traversal', () => {               // x  перед it - скипаем тест   
        //cy.visit('https://example.cypress.io')                                    
        cy.get('.home-list a[href="/commands/traversal"]').contains('Traversal').click()
        cy.url().should('include', '/commands/traversal')
    })
})
*/


// если в тесте только команды сайпреса, то они выполняютя АСИНХРОННО
// т.е. втjрая команда начнется только, когда закончится первая


/// <reference types="cypress" />  
// такую строку желательно ставить перед  describe вначале каждого файла (по рекомендации сайпрас) (будут выпадающие команды - помшники)
// трипл слэш референс директ

/*
describe('Common methods', () => {
 
    it('test1', () => {
       cy.visit('https://demoqa.com/')
       cy.get('header a img').should('be.visible')            // .should('chainers', 'expected result')
       cy.get('div.card-body h5').should('have.length', 6)
       cy.get('div.card-body').find('h5').should('have.length', 6)
       cy.get('div.card-body h5').contains('Elements').click()
    
       cy.get('div.main-header').should('have.text', 'Elements')
       cy.get('div.main-header').should('include.text', 'Element')
       //cy.pause()       // это только для отладки
       //cy.log('Hello')  // это только для отладки
    })
  
    it('input field', () => {
       cy.get('li#item-0 span').contains('Text Box').click()
       cy.get('#userName')
         .should('have.attr', 'placeholder', 'Full Name')
         .type('Maria', {force: true})
         .clear()
    })
  
    it('input field', () => {
       cy.get('#item-1 span').contains('Check Box').click()
       cy.get('#result').should('not.exist')
       cy.get('input#tree-node-home')
         .check({force:true})
         .should('be.checked')
       cy.get('#result').should('exist')
       cy.get('#result').should('contain', 'You have selected')
    })
       // метод  check или uncheck  можно применить к элементу, только если у него есть атрибут type = "check" (для чеккбокса)
       // метод  check или uncheck  можно применить к элементу, только если у него есть атрибут type = "radio" (для радиобаттона)
       // в дропдаун меню метод select можно применить, если есть тег <select>

       //  ДЗ - сделать тоже самое с Radio Buttom (появление текса, что кода один элемент нажат - второй нет) - 1;18 на видео
       // что No задизейблено (.shouid('have class', 'disabled'))
       
    it('select menu', () => {
       cy.get('div.element-group span.group-header')
         .contains('Widgets')
         .click()
       cy.get('li#item-8 span')
         .contains('Select Menu')
         .click()
       cy.get('select#oldSelectMenu')
         .select('Purple')
        .should('have.value', '4')
    })
 })
 /// <reference types="cypress" />
  
  // разобраться с fixtures лучше 
 describe('Common methods', () => {
  
     beforeEach(function (){
         cy.fixture('example').then((data) => {
             this.data = data
         })
     })
  
     it('test1', function () {
        cy.visit('https://demoqa.com/')
        cy.get('div.card-body h5').contains('Widgets').click()
        cy.get('li#item-5').contains('Tabs').click()
        cy.get('#tabsContainer div.mb-3')
          .should('have.text', this.data.nameHeader)
        cy.get('#demo-tab-origin')
          .click()
          .should('have.text', this.data.tabs[1])
     })
 })
 */
//file from folder fixtures(example.json)

//  {
//    "nameHeader": "Details about Lorem Ipsum",
//    "tabs": ["What", "Origin", "Use", "More"]
//  }

/*
describe('1', () => {
  it('1', () => {
    cy.visit('https://demoqa.com/')
    cy.get('div.card-body h5').contains('Widgets').click()
    cy.go('back')
  })
})
*/

// ПОВТОР

const baseUrlDemoQA = 'https://demoqa.com/'
const headerImage = 'header a img'
const allCards = 'div.card'
const elementsCard = 'div[class="card mt-4 top-card"]:first-child'
const elementsCardName = 'Elements'
const elementsCardUrl = '/elements'
const cardPageMainHeader = 'div.main-header'
const numberOfCards = 6

const textBoxButton ='div[class="element-list collapse show"] #item-0'
const fullNameInput = '#userName'
const fullNamePlaceholder = 'Full Name'
const fullName = 'Nina'

const checkBoxButton = 'div[class="element-list collapse show"] #item-1'
const checkBoxInput = 'input#tree-node-home' // можно 'input[type = "checkbox"]'
const checkBoxResult = 'div#result'
const checkBoxText = 'You have selected :home'

const radioButtonButton= 'div[class="element-list collapse show"] #item-2'
const noRadioButton = 'input#noRadio'
const yesRadioButton = 'input#yesRadio'
const impressiveRadioButton = 'input#impressiveRadio'

const widgetsCard = '.category-cards > div:nth-child(4)'

const selectMenuButton = 'div[class="element-list collapse show"] #item-8'
const oldStyleSelectMenu = '#oldSelectMenu'
const colorStyle = 'Purple'
const valueStyle = '4'

const slider = '[type="range"]'   // div[class="range-slider__tooltip__label"]
const sliderValue ='input#sliderValue'
const sliderButton = 'div[class="element-list collapse show"] #item-3'
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;


const formsCard = '.category-cards > div:nth-child(2)'
const accordeonMenuOpen = '.accordion>div>div'

// переделать в POM на DemoQA
/*
xit('Verify Select Menu < Widgest', () => {
  cy.get('.category-cards > div:nth-child(4)').click()  // widgetsCard
  cy.get('div[class="element-list collapse show"] #item-8').click() // selectMenuButton
  cy.get('#oldSelectMenu') // oldStyleSelectMenu
    .select('Purple')  // colorStyle
    .should('have.value', '4')   // valueStyle

});

xit('Verify Check Box < Elements', () => {
  cy.get('div[class="card mt-4 top-card"]:first-child').click() //elementsCard 
  cy.get('div[class="element-list collapse show"] #item-1').click() // checkBoxButton
  cy.get('input#tree-node-home') // checkBoxInput  // можно 'input[type = "checkbox"]'
    .should('not.be.checked')   
    .check({force:true})        // check() работает ТОЛЬКО если есть тип type = "checkbox" (или radio), с 'span[class="rct-checkbox"]' не сработает
    .should('be.checked')
});
*/


describe('Repet 11 lesson', () => {
  
  beforeEach(() => {
    cy.visit(baseUrlDemoQA)
  })

  it('verify header image is visible < Home', () => {
    cy.get(headerImage)
      .should('exist')
      .and('be.visible')
  });

  it('Verify category card has correct number < Home', () => {
    cy.get(allCards).should('have.length', numberOfCards)   
    cy.get(allCards).find('h5').should('have.length', numberOfCards) 
  });

  it('Verify Elements card < Home', () => {
    cy.get(allCards).contains(elementsCardName).click()
       //cy.pause()  //только для отладки, убирать из конечного варианта
       //cy.log('Hello, Nina! You are Suppper!')  // тоже для отладки, (как console.log()) можно выводить в лог ошибки, например
    cy.url().should('include', elementsCardUrl)
    cy.get(cardPageMainHeader)
      .should('have.text', elementsCardName)  //  можно 'contain' или 'include.text' - если не нужно точное совпадение окончаний
      .and('be.visible')
  });

  it('Verify input field < Text Box < Elements', () => {
    cy.get(elementsCard).click()
    cy.get(textBoxButton).click()    // либо cy.get(li#item-0 span).contains('Text Box').click()
    cy.get(fullNameInput)
      .should('have.attr', 'placeholder', fullNamePlaceholder)
      .type(fullName, {force:true})    // {force:true} если не попадает сам, здесь можно без - просто для примера
      .clear()
  });

  // {force:true} -  принудительное нажатие, введение, выбор - работает с  click(), check(), select(), type()

  it('Verify Check Box < Elements', () => {
    cy.get(elementsCard).click()
    cy.get(checkBoxButton).click()
    cy.get(checkBoxInput)
      .should('not.be.checked')   
      .check({force:true})        // check() работает ТОЛЬКО если есть тип type = "checkbox" (или radio), с 'span[class="rct-checkbox"]' не сработает
      .should('be.checked')
  });
 
  it('Verify Check Box text after checking < Elements', () => {
    cy.get(elementsCard).click()
    cy.get(checkBoxButton).click()
    cy.get(checkBoxResult).should('not.exist')
    cy.get(checkBoxInput).check({force:true})
    cy.get(checkBoxResult)
      .should('exist')
      .and('include.text', checkBoxText)

      // .should('exist) применят к элементу в ДОМе, который появляетя при опред действиях, до этого его не было
      // например, появился какой-то текст (соответсвенно и селектор к нему), когда мы поставили галку в чекбоксе
  });

  it('Verify Radio Button "No" < Elements', () => {
    cy.get(elementsCard).click()
    cy.get(radioButtonButton).click()
    cy.get(noRadioButton).should('have.class', 'disabled')
  });

  it('Verify Radio Button "Yes-Impressive" < Elements', () => {
    cy.get(elementsCard).click()
    cy.get(radioButtonButton).click()
    cy.get(yesRadioButton).check({force:true}).should('be.checked')    //  есть тип 'radio'
    cy.get(impressiveRadioButton).should('not.be.checked')
  });

  it('Verify Select Menu < Widgest', () => {
    cy.get(widgetsCard).click()
    cy.get(selectMenuButton).click()
    cy.get(oldStyleSelectMenu).select(colorStyle).should('have.value', valueStyle)  //  В дробдаун меню для применения select() должен быть ТЕГ <select>
  });

  it("Trigger", () => {
    cy.get(widgetsCard).click()
    cy.get(sliderButton).click()
    cy.get('.range-slider')
    .invoke('val', 83)
    .trigger('change')
    .get('input[type="range"]')
    .should('have.value', '83');
});


/*
  cy.get('[type="range"]')
  .first()
  .invoke('val', 25)
  .trigger('change', { data: '25' })
  */

   //.trigger('mousemove', 'topRight', {force: true} ).click({force: true})       // { which: 100 }  

  //РАЗОБРАТЬСЯ!!!! КАК ПОМЕНЯЗНАЧЕНИЕ В sliderValue???????  ПЕРЕДВИГАЯ ПОЛЗУНОК!!!! 
  it('Verify Slider < Widgest', () => {
    cy.get(widgetsCard).click()
    cy.get(sliderButton).click()
    
    cy.get('input[type="range"]').then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 100);
      // now dispatch the event
      range.dispatchEvent(new Event('change', { value: 100, bubbles: true }));
    });
                                                                          
    cy.get('[type="range"]').should('have.value', '100')
    cy.get('input#sliderValue').should('have.value', '100')
  })

  it('Filter by class "show" and verify Practice form is open < Forms', () => {
    cy.get(formsCard).click()
    cy.get(accordeonMenuOpen).filter('.show')    // и без фильтра работает
      .should('contain', 'Practice Form')
  })

});

/*
https://github.com/cypress-io/cypress/issues/1570
Я собрал обходной путь для этой проблемы, который не требует переключения на inputсобытие.

Есть две части:

Установите значение базового узла DOM ( избегая переопределения React )
Запустите на changeнем событие, чтобы React подхватил изменение.
Это работает следующим образом:

// React overrides the DOM node's setter, so get the original, as per the linked Stack Overflow
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
describe('Range', () => {
  it('Updates the value and UI when changing a range input', () => {
    cy.get('input[type="range"]').then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 15);
      // now dispatch the event
      range.dispatchEvent(new Event('change', { value: 15, bubbles: true }));
    });
  });
});
*/

