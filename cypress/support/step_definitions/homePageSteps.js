import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("eu acesso a homepage e seleciono um produto para compra e vejo meu carrinho", () => {

  cy.visit('/');
  cy.get('#nav-cart-count')
    .invoke('attr', 'class')
    .then((classes) => {
      expect(classes).to.include('0');
    });
  cy.get("#twotabsearchtextbox").type("fralda pampers p 72 unidades")
  cy.get("#nav-search-submit-button").click()
  cy.get('#a-autoid-1-announce').click()
  cy.get('#nav-cart-count').click()
  cy.get('#nav-cart-count')
    .invoke('attr', 'class')
    .then((classes) => {
      expect(classes).to.include('1');
    });

});

Given("eu acesso a homepage e realizo o login informando usuário incorreto", () => {
  cy.visit('/')
  cy.get("#nav-signin-tooltip > a > span").should('be.visible').click()
  cy.get("#ap_email_login").should('be.visible').type("usurioInvalido@gmail.com")
  cy.get('.a-button-input').should('be.visible').click()
  cy.contains("Parece que você é novo na Amazon")

}); 
