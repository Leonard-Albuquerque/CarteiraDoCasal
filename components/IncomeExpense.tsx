import getIncomeExpense from '@/app/actions/getIncomeExpense';
import { addCommas } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="inc-exp-wrapper">
      <div className="inc-exp-card income-card">
        <div className="card-icon">📈</div>
        <div className="card-content">
          <h4 className="card-label">Receita</h4>
          <p className="amount-value income-amount">
            ${addCommas(Number(income?.toFixed(2)))}
          </p>
        </div>
      </div>
      
      <div className="inc-exp-card expense-card">
        <div className="card-icon">📉</div>
        <div className="card-content">
          <h4 className="card-label">Despesa</h4>
          <p className="amount-value expense-amount">
            ${addCommas(Number(expense?.toFixed(2)))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;