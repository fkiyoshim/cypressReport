import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("eu acesso a homepage e seleciono um produto para compra e vejo meu carrinho", () => {

  cy.visit('/');
  cy.get('#nav-cart-count')
    .invoke('attr', 'class')
    .then((classes) => {
      expect(classes).to.include('0');
    });
  cy.get("#twotabsearchtextbox").type("fralda pampers p 72 unidades")
  //cy.get('#nav-cart-count').should('have.value', '1')
  cy.get("#nav-search-submit-button").click()
  cy.get('#a-autoid-1-announce').click()
  cy.get('#nav-cart-count').click()
  cy.get('#nav-cart-count')
    .invoke('attr', 'class')
    .then((classes) => {
      expect(classes).to.include('1');
    });

}); 