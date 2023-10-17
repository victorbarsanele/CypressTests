describe('Cadastrar Novos Eventos - Particionamento por Equivalência', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.wait(2000)
        cy.visit("http://localhost:4200/dashboard/eventos")
    });

    it('EquivalenciaValidaCadastroEventoCorreto', () => {
        cadastrarEventoPago('Caveirada AAAZA', 'Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE', '70', 'XV de Novembro', '2023-04-04T09:30')
    });

    it('EquivalenciaInvalidaCadastroEventoNomeNulo', () => {
        cy.contains('Inserir Novo').click()

        
        cy.get('#descricao').type('Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE')
        cy.get('#paga').click()
        cy.get('#preco').type('70')
        cy.get('#endereco').type('XV de Novembro')
        cy.get('#data').type('2023-04-04T09:30')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaCadastroEventoNomeTamanhoInferior', () => {
        cadastrarEventoPago('C', 'Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE', '70', 'XV de Novembro', '2023-04-04T09:30')
        cy.validator('Mínimo de 5 caracteres.')
    });

    it('EquivalenciaInvalidaCadastroEventoNomeTamanhoSuperior', () => {
        cadastrarEventoPago('9GAwdQalsNovJ97zKB3T7fNZp0q55NVfSqajmx785kHXCbkjB4wcendhCyVlg', 'Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE', '70', 'XV de Novembro', '2023-04-04T09:30')
        cy.validator('Máximo de 60 caracteres.')
    });

    it('EquivalenciaInvalidaCadastroEventoDescricaoTamanhoSuperior', () => {
        cadastrarEventoPago('Caveirada AAAZA', 'OgJ3Ban3LGXw9HvI8Rj0h9JmisowkGhdgRsgr7DnYc34AyOLVDXVtfZT4naPxx3zaBrCAtidt9vzuRdrUGOgt4QSkQvR3XIYITpGcn55sdF9MrxNRsTTxXzcg31EfYwrbg9se6iGINT6zR5ahkhCZ7ast4L9hA5AVVgylVac9pfKXoLaNqu8UIjkNPrKn3wgg8hDg05lzsm1wlBSsvP1gN2dXwpRJcPBMcC38Lnx3hoHsdpukc8VHt1fqTYJi9Nl', '70', 'XV de Novembro', '2023-04-04T09:30')
        cy.validator('Máximo de 255 caracteres.')
    });

    it('EquivalenciaInvalidaCadastroEventoDataIncorreta', () => {
        cadastrarEventoPago('Caveirada AAAZA', 'Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE', '70', 'XV de Novembro', '2023/04/05')
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaCadastroEventoDataNula', () => {
        cy.contains('Inserir Novo').click()

        cy.get('#nome').type('Caveirada AAAZA')
        cy.get('#descricao').type('Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE')
        cy.get('#paga').click()
        cy.get('#preco').type('70')
        cy.get('#endereco').type('XV de Novembro')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaCadastroEventoEnderecoNulo', () => {
        cy.contains('Inserir Novo').click()

        cy.get('#nome').type('Caveirada AAAZA')
        cy.get('#descricao').type('Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE')
        cy.get('#paga').click()
        cy.get('#preco').type('70')
        cy.get('#data').type('2023-04-04T09:30')


        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaCadastroEventoEnderecoTamanhoSuperior', () => {
        cadastrarEventoPago('Caveirada AAAZA', 'Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE', '70', 'MDUyBsTjl217Lx8UlH0mNyYcc7GM8pDROC4FwRIrZvSXJhahBen9d2CqaZ7EJ', '2023-04-04T09:30')
        cy.validator('Máximo de 60 caracteres.')
    });

    it('EquivalenciaInvalidaCadastroEventoPrecoNulo', () => {
        cy.contains('Inserir Novo').click()

        cy.get('#nome').type('Caveirada AAAZA')
        cy.get('#descricao').type('Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE')
        cy.get('#paga').click()
        cy.get('#endereco').type('XV de Novembro')
        cy.get('#data').type('2023-04-04T09:30')


        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaCadastroEventoPrecoNegativo', () => {
        cadastrarEventoPago('Caveirada AAAZA', 'Caveirada 2023 Open Bar é a calourada da Medicina da UNIFAE', '-30', 'XV de Novembro', '2023-04-04T09:30')
        cy.validator('O valor deve ser maior ou igual a 0.')
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