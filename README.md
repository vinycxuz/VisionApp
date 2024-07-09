
# API Cloud Vision do Google em Node.js

## Introdução

Bem-vindo à documentação do programa de OCR (Optical Character Recognition) desenvolvido em Node.js. Este programa utiliza a API de OCR do Google para ler documentos e transcrever o texto contido neles.

## Requisitos do Sistema

Certifique-se de que o sistema atenda aos seguintes requisitos antes de executar o programa:

- Node.js: versão 10 ou superior
- npm (Node Package Manager): versão 6 ou superior
- Conta de serviço do Google Cloud com a API Cloud Vision API ativada
- Chave de API da Cloud Vision API

## Configuração Inicial

1. Clone o repositório do programa:

```bash
git clone https://github.com/vinycxuz/VisionApp
```

2. Instale as dependências do projeto:

```bash
cd visionapp
npm install google-cloud/vision ejs express multer
```

3. Configure a chave de API da Cloud Vision API:

Ao criar sua conta na google cloud, crie uma pasta chamada credentials na raiz do projeto e cole suas credenciais que serão geradas em .json pelo Google. Provavelmente terá o nome de 'google-cloud-credentials.json'.

## Uso do Programa

Para usar o programa, siga estas etapas:

1. Inicie o servidor Node.js:

```bash
node index
```

2. Abra o navegador e acesse `http://localhost:3000/ocr`.

3. No site, clique no botão 'Escolher arquivo' para fazer upload do arquivo para o site e depois 'upload' para enviar a requisição do arquivo que você deseja analisar.

4. O programa enviará a imagem do documento para a API de OCR do Google e exibirá o texto transcriado no navegador.

## Contribuições

Se você deseja contribuir para o desenvolvimento deste programa, principalmente no front-end, sinta-se à vontade!

