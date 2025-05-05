import { z } from 'zod';

export const transactionSchema = z.object({
  id: z.string().uuid(),
  amount: z.string()
    .refine(val => !isNaN(Number(val)), {
      message: "Amount must be a valid number"
    })
    .transform(val => BigInt(val)),
});
export type Transaction = z.infer<typeof transactionSchema>;

export const fetchTransactionsResponseSchema = z.array(transactionSchema);

export const newTransactionSchema = z.object({
  id: z.string().uuid(),
  amount: z.string().min(1, "Amount is required"),
})
export type NewTransaction = z.infer<typeof newTransactionSchema>

