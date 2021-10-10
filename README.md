# bld-teste-frontend
Interface gráfica para visualização de dados de API

## Introdução

<p>
Este repositório é uma aplicação Vue que faz request para uma API e mostra dados de kilometragem e multas em forma de gráfico. O usuário é capaz de filtar quais dias são levados em consideração para plotagem do gráfico, através de um range slider. Você pode usar essa base para mostrar outros tipos de dados.
</p>
<p>
O objetivo do projeto foi apresentar as informações solicitadas no teste, de maneira organizada e compreensível.
</p>

## Como usar
<p>
1. Tenha Node.js instalado;
</p>
<p>
2. Clone esse repositório em alguma pasta na sua máquina (baixe os arquivos);
</p>
<p>
3. Acesse a pasta pela linha de comando. Para isso, basta abrir o terminal e mudar o diretório usando o comando (em Windows ou Linux):
 </p>

> cd /caminho/da/sua/pasta

<p>

<p>
4. Instale as dependências necessárias com o comando:
</p>

  > npm install
  
  <p>
5. Deixe o app Vue rodando com o comando
  </p>
  
  > npm run serve
  
  <p>
6. Através do navegador, navegue até o endereço 
</p>

> http://localhost:8080/
> 
<p>
7. O app é carregado, é feita fetch para uma API, e depois de concluída, ele renderiza os gráficos e informações no Card. Basta arrastar o slider para mudar o período de dias ilustrado no gráfico.
</p>

<p>
Stack de tecnologias usadas: Node.js, Vue, Vuex, HTML, CSS, Bootstrap, NPM
  </p>
