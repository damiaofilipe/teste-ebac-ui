/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/')

    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[Class="product-block grid"]')
            //.first()
            //.last()
            //.eq(5)
            .contains('Ingrid Running Jacket')
            .click()

    });

    it.only('Deve adicionar um produto no carrinho', () => {
        cy.get('[Class="product-block grid"]')
            .contains('Ingrid Running Jacket')
            .click()
            cy.get('.button-variable-item-L')
            .click()
            cy.get('.button-variable-item-Orange')
            .click()
            cy.get('.input-text').clear().type(6)
            cy.get('.single_add_to_cart_button')
            .click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 6)

    });
});