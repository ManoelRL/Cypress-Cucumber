Feature: Cadastrar uma coleira
    
    Essa feature deve permitir que o usuário cadastre uma Coleira no sistema, inserindo um nome e uma duração para ela.

    Scenario Outline: Cadastrar uma coleira no sistema com sucesso
        Given Estou na página de Coleiras do Gestor BAC
        When Eu clico no botão de adicionar a coleira
        And Eu preencho o '<nome>' e a '<duracao>' da coleira
        Then Eu consigo cadastrar a coleira e visualiza-la na tabela

    Examples:
        | nome  | duracao |
        | Teste | 160     |