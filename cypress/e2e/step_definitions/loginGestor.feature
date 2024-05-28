Feature: Login no Gestor BAC

    Scenario: Login inválido no Gestor BAC
        Given Eu estou na página de login do Gestor BAC
        When Eu insiro um email ou senha inválidos
        Then Uma mensagem de erro é exibida em tela


    Scenario: Login válido no Gestor BAC
        Given Eu estou na página de login do Gestor BAC
        When Eu insiro meu email e senha cadastrados
        Then Eu consigo logar com sucesso e vou para a página de Semoventes