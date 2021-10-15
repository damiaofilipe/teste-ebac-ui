/// <reference types="cypress" />
 const perfil = require('../fixtures/perfil.json')

context ('confucionadade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')  
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

    it('Deve fazer login com sucesso - Arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-form > .button').click()

    cy.get('a > .hidden-xs').should('contain', 'Welcome aluno_ebac')
    
    });

    it.only('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
        
            cy.get('a > .hidden-xs').should('contain', 'Welcome aluno_ebac')
        })
        
    });
    it('Deve ixibir mensagem de erro ao inserir senha invalida', () =>{
    
        cy.get('#username').type('aluno_ ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'O usuário')
    
        })
})