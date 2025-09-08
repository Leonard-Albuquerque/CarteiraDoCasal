# 💰 Carteira VJ

Uma aplicação moderna e minimalista para controle financeiro pessoal, construída com Next.js e design elegante em tons de rosa e branco.

## ✨ Features

- 📊 **Dashboard intuitivo** com visão geral do saldo
- 💸 **Controle de receitas e despesas** 
- 📝 **Histórico completo de transações**
- ➕ **Adição fácil de novas transações**
- 🎨 **Design moderno** com paleta rosa e branco
- 📱 **Totalmente responsivo**
- ⚡ **Interface rápida e fluida**

## 🛠️ Tecnologias

- **Frontend:** Next.js 14, React, TypeScript
- **Styling:** CSS3 com design system customizado
- **Database:** Prisma ORM
- **Notifications:** React Toastify
- **Icons:** Emojis nativos para melhor performance

## 🚀 Como executar

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/carteira-vj.git
cd carteira-vj
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Configure o banco de dados:**
```bash
# Configure suas variáveis de ambiente no .env
DATABASE_URL="sua-url-do-banco"

# Execute as migrations
npx prisma generate
npx prisma db push
```

4. **Execute o projeto:**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse:** `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── actions/           # Server Actions
│   │   ├── addTransaction.ts
│   │   ├── deleteTransaction.ts
│   │   ├── getTransactions.ts
│   │   ├── getUserBalance.ts
│   │   └── getIncomeExpense.ts
│   └── components/        # Componentes React
│       ├── Header.tsx
│       ├── Balance.tsx
│       ├── IncomeExpense.tsx
│       ├── AddTransaction.tsx
│       ├── TransactionList.tsx
│       └── TransactionItem.tsx
├── types/
│   └── Transaction.ts     # Tipos TypeScript
├── lib/
│   ├── db.ts             # Configuração do banco
│   └── utils.ts          # Funções utilitárias
└── styles/
    └── globals.css       # Estilos globais
```

## 🎨 Design System

### Paleta de Cores
- **Rosa Principal:** `#f8b4d9`
- **Rosa Secundário:** `#f1a7c6` 
- **Rosa Claro:** `#fef7f4`
- **Branco:** `#ffffff`
- **Preto:** `#2c2c2c`

### Componentes

#### Balance
Exibe o saldo atual do usuário em destaque.

#### IncomeExpense  
Cards separados mostrando total de receitas e despesas.

#### AddTransaction
Formulário para adicionar novas transações com validação.

#### TransactionList
Lista histórica de todas as transações com opção de deletar.

## 📊 Funcionalidades

### Adicionar Transação
- Valores **positivos** = Receitas 💰
- Valores **negativos** = Despesas 💸
- Descrição obrigatória
- Validação de formulário

### Visualizar Transações
- Ordenação por data (mais recente primeiro)
- Diferenciação visual entre receitas e despesas
- Ícones intuitivos
- Botão de deletar com confirmação

### Dashboard
- Saldo atual calculado automaticamente
- Cards de receita e despesa totais
- Design responsivo para mobile

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/carteira_vj"
# ou sua string de conexão preferida
```

### Schema do Banco (Prisma)
```prisma
model Transaction {
  id        String   @id @default(cuid())
  text      String
  amount    Float
  userId    String?  // Opcional para desenvolvimento
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎯 Roadmap

- [ ] Autenticação de usuários
- [ ] Categorias de transações
- [ ] Gráficos e relatórios
- [ ] Filtros por período
- [ ] Exportação de dados
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 💡 Sobre

Desenvolvido com 💜 para tornar o controle financeiro mais simples e agradável.

---

**Carteira VJ** - Sua carteira digital, simples e elegante.
