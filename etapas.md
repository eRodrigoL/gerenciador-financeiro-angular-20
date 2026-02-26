# Etapas do desenvolvimento do Gerenciador Financeiro

## 0 – Criação do projeto

A criação do projeto foi realizada por meio do comando:

```bash
npx -p @angular/cli@20 ng new gerenciador-financeiro --skip-tests
```

Descrição detalhada dos parâmetros utilizados:

- **npx** → utilizado porque o ambiente faz uso do **NVM (Node Version Manager)**, permitindo executar pacotes sem a necessidade de instalação global.
- **-p** → indica explicitamente qual pacote deve ser baixado e executado temporariamente pelo `npx`.
- **@angular/cli@20** → força o uso da versão 20 do Angular CLI, garantindo que o projeto seja criado nessa versão específica, independentemente de versões globais instaladas.
- **ng new** → comando padrão do Angular CLI para a criação de um novo projeto Angular.
- **gerenciador-financeiro** → nome do projeto a ser criado.
- **--skip-tests** → instrui o Angular CLI a não gerar os arquivos de testes automáticos (`.spec.ts`), uma vez que este projeto não contará com testes neste momento.

Durante a execução do comando, foi selecionado **Sass (SCSS)** como formato de folhas de estilo. Para todas as demais perguntas interativas do Angular CLI (como criação de rotas ou recursos adicionais), foi escolhida a opção **não**, mantendo a configuração inicial do projeto o mais simples possível para fins didáticos.
