import getUserBalance from '@/app/actions/getUserBalance';
import { addCommas } from '@/lib/utils';

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div className="balance-card">
      <div className="balance-content">
        <h4 className="balance-label">Saldo Atual</h4>
        <h1 className="balance-amount">
          ${addCommas(Number(balance?.toFixed(2) ?? 0))}
        </h1>
      </div>
    </div>
  );
};

export default Balance;