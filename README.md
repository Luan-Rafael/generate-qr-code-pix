# Gerador de QR Code Pix

## Descrição
Este projeto tem como objetivo gerar QR Codes Pix dinâmicos ou estáticos com base nas informações fornecidas pelo usuário. Utilizando a especificação do **Pix Copia e Cola**, o sistema gera um código no formato **EMV padrão do Banco Central**, que pode ser escaneado para facilitar pagamentos instantâneos via Pix.

## Funcionalidades
- Entrada de dados essenciais para o Pix (chave Pix, valor, descrição, etc.).
- Geração de QR Code baseado no payload Pix Copia e Cola.
- Opção de gerar um Pix dinâmico ou estático.
- Interface para visualização do QR Code gerado.
- API para permitir integração com outros serviços.

## Tecnologias Utilizadas
- **Frontend:** Vue.js (para interface do usuário)
- **Backend:** Node.js com NestJS

## Instalação e Execução

### Requisitos
- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/Luan-Rafael/gerador-qrcode-pix.git
   cd gerador-qrcode-pix
   ```

2. Instale as dependências:
   ```bash
   npm install  # ou yarn install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev  # ou yarn dev
   ```

4. Acesse a interface pelo navegador:
   ```
   http://localhost:3000
   ```

## Uso
1. Insira as informações do Pix (chave, valor, descrição, etc.).
2. Clique em "Gerar QR Code".
3. Escaneie o código gerado para efetuar o pagamento.

## Contribuição
Fique à vontade para contribuir! Abra uma issue ou envie um pull request com melhorias.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

