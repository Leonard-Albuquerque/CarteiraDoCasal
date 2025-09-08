'use server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface TransactionData {
  text: string;
  amount: number;
}

type TransactionResult = {
  data?: TransactionData;
  error?: string;
};

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); // Parse amount as number


  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
      },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    return { error: 'Transaction not added' };
  }
}

export default addTransaction;
