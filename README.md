#  :heavy_check_mark: Desafio: Conceitos do ReactJs 

Este desafio tem como objetivo realizar a comunicação da aplicação back-end com a front-end. Além disso criar uma aplicação front-end para listar, adicionar e remover repositórios. 
Caso não tenha visto a aplicação back-end, acesse: <br/>
https://github.com/otavioluism/conceitos-nodejs

## O que é o ReactJS

- Uma biblioteca para construção de interfaces
- Utiliza o Single-Page-Aplications ( tudo fica em uma página)

## Escrito em JSX 

- Linguagem para escrever Html dentro do JavaScript

Exemplo de JSX

```
Import React from 'react';

import './buttom.css';
import icon from './button.png';

function Button(){
	return(
		<button>
			<img src={icon} />
		</button>
	);
}
```

### Babel 

> O Babel serve como um "convertedor" de código JS para que todos os browsers entendam.

### Webpack
> WebPack: Cria um arquivo que ensina ao JS como importar arquivos com extensões como: .css, .jpg e outras.

## [Axios](https://github.com/axios/axios) 

Uma Api que realiza a conexão da aplicação Back-end com a Front-end 

## Cors 

> CORS (Cross-Origin Resource Sharing) é uma especificação do W3C que, quando implementado pelo navegador, permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.

### Rodar Aplicação 
Ir até a pasta da aplicação e no terminal rodar: 
yarn start 

### Acessar o Back-end da aplicação 
acesse: <a href=https://github.com/otavioluism/conceitos-nodejs>Conceitos-nodejs</a>
