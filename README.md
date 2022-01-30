<div align="center">
<img src="https://github.com/Williancc1557/technology-news/blob/chore/documentation-readme/img/img-documentation.png" width="100%" alt="hi">
</div>

# Para que serve?
Deseja coletar algumas das **novidades** relacionadas a tecnologias e informática? Como **softwares, empresas de tecnologias, lançamento, etc**. Então utilize essa **API facil de utilizar**.

# Primeiro passos

**Como faço para utlizar essa API?** Utilize alguma lib que sirva para realizar requests em API como um Axios da vida.

Qual a **url** da **API**? https://technology-news-api.herokuapp.com

Qual site de **news** utilizado para **realizar a busca**? https://www.theenemy.com.br/

A **rota principal** da API é `/` ou seja, sem nenhum parâmetro a mais!

## Exemplo de retorno `/`

```json
{
  "title": "Here is News Title",
  "paragraph": "Here is paragraph"
}
```

Tá, mas, eu quero **mais de uma notícia**, que que eu posso fazer?

Você pode **selecionar a quantidade** enviando um header com as seguintes credenciais:

```json
{
  "requestsNumber": <number>
}
```

