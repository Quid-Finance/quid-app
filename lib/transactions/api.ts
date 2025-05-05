import { fetchTransactionsResponseSchema, NewTransaction, Transaction, transactionSchema } from "./model";


export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await fetch('http://localhost:8080/transactions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const rawData = await response.json();

  try {
    return fetchTransactionsResponseSchema.parse(rawData);
  } catch (error) {
    throw new Error('Invalid transaction data format received from server', { cause: error });
  }
}

export const postTransaction = async (newTransaction: NewTransaction) => {
  const response = await fetch('http://localhost:8080/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTransaction),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  const rawData = await response.json()

  try {
    return transactionSchema.parse(rawData)
  } catch (error) {
    throw new Error('Invalid transaction data format received from server', { cause: error })
  }
}
