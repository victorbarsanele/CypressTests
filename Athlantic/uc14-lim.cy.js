describe('Cadastrar Novos Eventos - Análise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.wait(2000)
        cy.visit("http://localhost:4200/dashboard/eventos")
    });

    it('NomeEventoInvalidoLimiteInferiorMenosUm', () => {
        cadastrarEventoAberto('uhuh', 'Festa de 2023', '10', 'Chácara Vila', '2023-11-30T09:30')
        cy.validator('Mínimo de 5 caracteres.')
    });

    it('NomeEventoValidoLimiteInferiorExatamente', () => {
        cadastrarEventoAberto('jogxd', 'Festa de 2023', '10', 'Chácara Vila', '2023-11-30T09:30')
    });

    it('NomeEventoValidoLimiteInferiorMaisUm', () => {
        cadastrarEventoAberto('gojouu', 'Festa de 2023', '10', 'Chácara Vila', '2023-11-30T09:30')
    });

    it('NomeEventoValidoLimiteSuperiorMenosUm', () => {
        cadastrarEventoAberto('XC47Zsl2jcjG1og1VLBx6dnVOztKT8hlZ4OpFa6UVPjrzPtbhirGG5FCSLh', 'Festa de 2023', '10', 'Chácara Vila', '2023-11-30T09:30')
    });

    it('NomeEventoValidoLimiteSuperiorExatamente', () => {
        cadastrarEventoAberto('pzWufbkaxEmAeY3yZVxinMF4qvyuOCI80cHySRAiC5ws4ZbBzIPqDmYOpSPg', 'Festa de 2023', '10', 'Chácara Vila', '2023-11-30T09:30')
    });

    it('NomeEventoInvalidoLimiteSuperiorMaisUm', () => {
        cadastrarEventoAberto('liwW9nUH0fyylJmElfySfWaDUPZjOMndFWcqvnslGZPTTjYIYvtABXSSQqyLH', 'Festa de 2023', '10', 'Chácara Vila', '2023-11-30T09:30')
        cy.validator('Máximo de 60 caracteres.')
    });

    it('DescricaoEventoValidoLimiteSuperiorMenosUm', () => {
        cadastrarEventoAberto('Integracao', 'mlLFPkbx5qjb3dcS79EyoziIf4YYX3yoNJpHkA3BMPCvL8x2QANnfxrl7fbkjfmbysO0SP8WEKex51zo4mpnKSAcOqI2xMYfj5OUcLFr5cVlZn3viytYEQYfBP3A44EVggNMKBsTs8xpUvWB493Pc4aXJ58focoBp9r31O4p61NtM5vAAUW2qduO2sc931wYeJYTyD1kV8VJaYTobLqO3ZhrFsjBhWfMUrgyIDun87jvO7V3h0HzZcwI8auaK6', '10', 'Chácara Vila', '2023-11-30T09:30')
    });

    it('DescricaoEventoValidoLimiteSuperiorExatamente', () => {
        cadastrarEventoAberto('Integracao2', 'aI8uYtiQHVo7jhnpZkjv3w2R56RTKCppnvHA8tUAB1TTRGcQoA9ywnhryV7HTBoIW9FyeXWPL7BXZVWVdRYMSfvLWmcWO2UxT3N4IXQP4zEiaANUJAaq4e6M3dnpjTZoS6Q3fptZ70uQl27aH83yoJkDBQlfAMBOnz7wMWZfZURFOYJnVfmfNuXargL5nsaOIcZDxv57fKgpoh0mx9tQekBD5G5ABIG8Q5f3PKn4qgjMcJjcjlVaGEO5OAZpNQ5', '10', 'Chácara Vila', '2023-11-30T09:30')
    });

    it('DescricaoEventoInvalidoLimiteSuperiorMaisUm', () => {
        cadastrarEventoAberto('Integracao', '5wi6vLyinsvLDMhbKRifUxNvFk3UpvIwCK6eW7W1LQknkhfpqsabVASrqv3JVyeRPMx5SFCUn2HqIm73PSnRUcWknoaoeXf8TDv5ILadb7TwlknayeorNgy9n9FhfSQCTXEO2wE9CHvrvmCg3unKddPvaRXO5MHLbO1fdiIfXJ0q2XFhzb8G30wxPB0dy3OswdVDqNjnn2pEaszsAnjs4KECwe4X57Q4anL9H6bIOB9ib7Ra6EaBTaxJrg2Lw0hz', '10', 'Chácara Vila', '2023-11-30T09:30')
        cy.validator('Máximo de 255 caracteres.')
    });

    it('EnderecoValidoLimiteSuperiorMenosUm', () => {
        cadastrarEventoAberto('Integracao3', 'Integracao gratis', '10', 'YQPHT3sAFNuZpe02mJEoevRhgFsEWkkjcPq1PbzqwdUL9AGDjDZFZqM1kg6', '2023-11-30T09:30')
    });

    it('EnderecoValidoLimiteSuperiorExatamente', () => {
        cadastrarEventoAberto('Integracao4', 'Integracao gratis', '10', '9aGiUWw9ID5CNqSVAL5OSm8w0hVEYW6nzrSEJCayw0Pw7YOYiSrS5mf3so9z', '2023-11-30T09:30')
    });

    it('EnderecoInvalidoLimiteSuperiorMaisUm', () => {
        cadastrarEventoAberto('Integracao5', 'Integracao gratis', '10', 'PvF19Oq9c9cZ8iEdbuYxqB1q2UYBUWYyC65wewSyeeN6Eb41S8xN2yBptJ6Q8', '2023-11-30T09:30')
        cy.validator('Máximo de 60 caracteres.')
    });

    it('PrecoInvalidoLimiteInferiorMenosUm', () => {
        cadastrarEventoAberto('Integracao6', 'Integracao gratis', '-0.01', 'Rua Galvao', '2023-11-30T09:30')
        cy.validator('O valor deve ser maior ou igual a 0.')
    });

    it('PrecoValidoLimiteInferiorExatamente', () => {
        cadastrarEventoAberto('Integracao7', 'Integracao gratis', '0', 'Rua Galvao', '2023-11-30T09:30')
    });

    it('PrecoValidoLimiteInferiorMaisUm', () => {
        cadastrarEventoAberto('Integracao8', 'Integracao gratis', '0.01', 'Rua Galvao', '2023-11-30T09:30')
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