'use client';
import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transação adicionada com sucesso!');
      formRef.current?.reset();
    }
  };

  const containerStyle = {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(248, 180, 217, 0.3)',
    marginBottom: '2rem'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #fef7f4'
  };

  const iconStyle = {
    fontSize: '2rem',
    background: '#f8b4d9',
    padding: '0.75rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.5rem',
    height: '3.5rem'
  };

  const titleStyle = {
    color: '#2c2c2c',
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: '0'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem'
  };

  const groupStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  };

  const labelStyle = {
    color: '#2c2c2c',
    fontWeight: '500',
    fontSize: '0.95rem',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    padding: '1rem',
    border: '2px solid rgba(248, 180, 217, 0.4)',
    borderRadius: '12px',
    background: '#ffffff',
    color: '#2c2c2c',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease'
  };

  const wrapperStyle = {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center'
  };

  const symbolStyle = {
    position: 'absolute' as const,
    left: '1rem',
    color: '#f8b4d9',
    fontWeight: '600',
    fontSize: '1.1rem',
    zIndex: 10,
    pointerEvents: 'none' as const
  };

  const hintStyle = {
    fontSize: '0.85rem',
    color: '#2c2c2c',
    margin: '0.5rem 0 0 0',
    padding: '1rem',
    background: '#fef7f4',
    borderRadius: '8px',
    borderLeft: '4px solid #f8b4d9'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #f8b4d9 0%, #f1a7c6 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '1.125rem 2rem',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    marginTop: '0.5rem',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle} className="add-transaction-container">
      <div style={headerStyle} className="form-header">
        <div style={iconStyle} className="form-icon">💳</div>
        <h3 style={titleStyle} className="form-title">Nova Transação</h3>
      </div>
      
      <form ref={formRef} action={clientAction} style={formStyle} className="transaction-form">
        <div style={groupStyle} className="form-group">
          <label htmlFor="text" style={labelStyle} className="form-label">
            Descrição
          </label>
          <input
            maxLength={25}
            type="text"
            id="text"
            name="text"
            placeholder="Ex: Salário, Mercado, Conta de luz..."
            style={inputStyle}
            className="form-input"
            required
            onFocus={(e) => {
              e.target.style.borderColor = '#f8b4d9';
              e.target.style.boxShadow = '0 0 0 3px rgba(248, 180, 217, 0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(248, 180, 217, 0.4)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        
        <div style={groupStyle} className="form-group">
          <label htmlFor="amount" style={labelStyle} className="form-label">
            Valor
          </label>
          <div style={wrapperStyle} className="amount-input-wrapper">
            <span style={symbolStyle} className="currency-symbol">$</span>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="0.00"
              step="0.01"
              style={{...inputStyle, paddingLeft: '2.5rem'}}
              className="form-input amount-input"
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#f8b4d9';
                e.target.style.boxShadow = '0 0 0 3px rgba(248, 180, 217, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(248, 180, 217, 0.4)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <p style={hintStyle} className="form-hint">
            💡 <strong>Valores positivos</strong> para receitas, <strong>negativos</strong> para despesas
          </p>
        </div>
        
        <button 
          type="submit" 
          style={buttonStyle}
          className="submit-button"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #f1a7c6 0%, #f8b4d9 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #f8b4d9 0%, #f1a7c6 100%)';
          }}
        >
          <span style={{fontSize: '1.1rem'}} className="button-icon">➕</span>
          Adicionar Transação
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;