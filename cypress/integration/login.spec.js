/// <reference types="cypress" />

context ('confucionadade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
    });
    
    afterEach(() => {
        cy.screenshot
    });

    it('Deve fazer login com sucesso', () =>{
    
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('a > .hidden-xs').should('contain', 'Welcome aluno_ebac')
    })

    it('Deve ixibir mensagem de erro ao inserir usuario invalido', () =>{
    
    cy.get('#username').type('alunoebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    
    })

    it('Deve ixibir mensagem de erro ao inserir senha invalida', () =>{
    
        cy.get('#username').type('aluno_ ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'O usuário')
    
        })
})