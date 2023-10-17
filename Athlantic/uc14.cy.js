describe('Cadastrar Novos Eventos', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.wait(2000)
        cy.visit("http://localhost:4200/dashboard/eventos")
    });

    it('CadastroEventoBemSucedido', () => {
        cadastrarEventoPago('Halloween 2023', 'Festa de Halloween Outubro 2023', '50', 'Chácara Vila Salma', '2023-10-31T09:30')
    });

    it('CadastroEventoCamposIncorretos', () => {
        cadastrarEventoPago('gqY7zxyNQWY8EGr0bdEwDONxRIL19DHMZwCZMR1BwfBe1joggVo4k0LXhq0vu', 'Festa de Halloween Outubro 2023', '50', 'Chácara Vila Salma', '2023-10-31T09:30')
        cy.validator('Máximo de 60 caracteres.')
    });

    it('CadastroEventoCamposEmBranco', () => {
        cy.contains('Inserir Novo').click()
        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('CadastroEventoJaCadastrado', () => {
        cadastrarEventoPago('Halloween 2023', 'Festa de Halloween Outubro 2023', '50', 'Chácara Vila Salma', '2023-10-31T09:30')
    });

    it('CadastroEventoCancelado', () => {
        cy.contains('Inserir Novo').click()
        cy.contains('Cancelar').click()
    });

});

function cadastrarEventoPago(nome, descricao, preco, endereco, data){

    cy.contains('Inserir Novo').click()

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#paga').click()
    cy.get('#preco').type(preco)
    cy.get('#endereco').type(endereco)
    cy.get('#data').type(data)

    cy.contains('button', 'Concluir Cadastro').click()
}

function cadastrarEventoAberto(nome, descricao, preco, endereco, data){

    cy.contains('Inserir Novo').click()

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#aberta').click()
    cy.get('#preco').type(preco)
    cy.get('#endereco').type(endereco)
    cy.get('#data').type(data)

    cy.contains('button', 'Concluir Cadastro').click()
}