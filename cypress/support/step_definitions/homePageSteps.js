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


Given("eu acesso a homepage e seleciono o terceiro registro com o mesmo nome", () => {
  cy.visit('/')

  /*cy.contains('Ver Ofertas do Dia')       // Encontra o primeiro elemento com esse texto
  .parent()                         // Sobe para o pai (opcional, se precisar mais contexto)
  .find(':contains("Ver Ofertas do Dia")') // Encontra todos dentro do contexto
  .eq(0)                            // Pega o segundo
  .click({force:true}); 
*/

cy.get('#desktop-grid-1')
  .then(($cards) => {
    let maiorDesconto = 0;
    let indexDoMaiorDesconto = -1;

    Cypress._.each($cards, (card, index) => {
      const descontoEl = card.querySelector('.a-size-mini');
      const textoDesconto = descontoEl ? descontoEl.innerText : '';
      const match = textoDesconto.match(/(\d+)%/);

      if (match) {
        const valor = parseInt(match[1], 10);
        if (valor > maiorDesconto) {
          maiorDesconto = valor;
          indexDoMaiorDesconto = index; // salva o índice do card
        }
      }
    });

    if (indexDoMaiorDesconto >= 0) {
      // Agora seleciona o card pelo índice e clica no link correto
      cy.get('#desktop-grid-1')
        .eq(indexDoMaiorDesconto)
        .find('a.a-link-normal')
        .first()
        .click();
    } else {
      throw new Error('Nenhum item com desconto encontrado');
    }
  });

})

Given("eu acesso a homepage e seleciono o produto o menor desconto na sessao Ofertas melhores avaliadas", () => {
  cy.visit('/')

  /*cy.contains('Ver Ofertas do Dia')       // Encontra o primeiro elemento com esse texto
  .parent()                         // Sobe para o pai (opcional, se precisar mais contexto)
  .find(':contains("Ver Ofertas do Dia")') // Encontra todos dentro do contexto
  .eq(0)                            // Pega o segundo
  .click({force:true}); 
*/

  cy.get('[data-card-metrics-id="quad-multi-asin-card-v2_desktop-gateway-atf_0"]')
    .then(($cards) => {
      let menorDesconto = Infinity;
      let cardComMenorDesconto;

      $cards.each((_, card) => {
        const textoDesconto = card.innerText;
        const match = textoDesconto.match(/(\d+)%/);
        if (match) {
          const valor = parseInt(match[1], 10);
          if (valor < menorDesconto) {
            menorDesconto = valor;
            cardComMenorDesconto = card;
          }
        }
      });

      if (cardComMenorDesconto) {
        cy.wrap(cardComMenorDesconto).find('a').first().click();
      }
    });

})
