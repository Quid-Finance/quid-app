'use server'

import { revalidatePath } from "next/cache"
import { postTransaction } from "./api"
import { newTransactionSchema } from "./model"

export const createTransaction = async (data: FormData): Promise<void> => {
  const rawData = Object.fromEntries(data)
  const validatedTransaction = newTransactionSchema.safeParse(rawData)

  if (!validatedTransaction.success) {
    const errors = validatedTransaction.error.flatten()
    throw new Error(`Invalid transaction data: ${JSON.stringify(errors.fieldErrors)}`)
  }

  await postTransaction(validatedTransaction.data)

  // TODO: look into optimistic updates later on
  revalidatePath('/transactions')
}
