'use client';
import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';
import {format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const isExpense = transaction.amount < 0;


  const dataRelativa = formatDistanceToNow(new Date(transaction.createdAt), {
    addSuffix: true,
    locale: ptBR,
  });
  const diaDaSemana = format(new Date(transaction.createdAt), 'EEEE', { locale: ptBR });

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      'Tem certeza que deseja deletar esta transação?'
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <li className={`transaction-item ${isExpense ? 'expense-item' : 'income-item'}`}>
      <div className="transaction-content">
        <div className="transaction-icon">
          {isExpense ? '💸' : '💰'}
        </div>
        <div className="transaction-details">
          <span className="transaction-text">{transaction.text}</span>
          <span className={`transaction-amount ${isExpense ? 'negative' : 'positive'}`}>
            {sign}${addCommas(Math.abs(transaction.amount))}
          </span>
        </div>
      </div>
        <p className="transaction-timestamp">
            {dataRelativa}
        </p>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="delete-button"
        aria-label="Deletar transação"
      >
        ✕
      </button>
    </li>
  );
};

export default TransactionItem;