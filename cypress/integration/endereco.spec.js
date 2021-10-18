/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosendereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados. usuario, dados.senha)
    })
    
});
  
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Damião', 'Filipe', 'Damião Hair Stlys', 'Brasil', 'Av Iraque', '309', 'Uberlândia', 'Minas Gerais', '38410-282', '99107-3746', 'damiaofilipe@hotmail.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosendereco[1].nome,
            dadosendereco[1].sobrenome,
            dadosendereco[1].empresa,
            dadosendereco[1].pais,
            dadosendereco[1].endereco,
            dadosendereco[1].numero,
            dadosendereco[1].cidade,
            dadosendereco[1].estado,
            dadosendereco[1].cep,
            dadosendereco[1].telefone,
            dadosendereco[1].email
        )
            
            

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });
});