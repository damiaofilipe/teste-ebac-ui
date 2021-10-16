/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {

    beforeEach(() => {

        cy.visit('produtos')

    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[Class="product-block grid"]')
            //.first()
            //.last()
            //.eq(5)
            .contains('Aero Daily Fitness Tee')
            .click()

    });

    it.only('Deve adicionar um produto no carrinho', () => {
        cy.get('[Class="product-block grid"]')
            .contains('Aero Daily Fitness Tee')
            .click()
            cy.get('.button-variable-item-L')
            .click()
            cy.get('.button-variable-item-Brown')
            .click()
            cy.get('.input-text').clear().type(6)
            cy.get('.single_add_to_cart_button')
            .click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 6)

    });

    it('Deve adicionar produto ao carrinho - Usando Comando Customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)
    });

    it('Deve adicionar produto ao carrinho - Usando Comando Customizado', () => {
        cy.addProdutos('Deion Long-Sleeve EverCool™ Tee', 'XS', 'Green', 3)
    });
});