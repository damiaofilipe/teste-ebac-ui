/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/')

    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="image-hover unveil-image"]')
            //.first()
            //.last()
            //.eq(5)
            .contains('Ingrid Running Jacket')
            .click()
    });
});