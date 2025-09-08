import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/types/Transaction';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="transaction-list-container">
      <h3 className="section-title">Histórico de Transações</h3>
      {transactions && transactions.length > 0 ? (
        <ul className="transaction-list">
          {transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <p className="empty-message">Nenhuma transação encontrada</p>
          <p className="empty-subtitle">Adicione sua primeira transação para começar</p>
        </div>
      )}
    </div>
  );
};

export default TransactionList