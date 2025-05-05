import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionItem } from "./transaction-item";
import { fetchTransactions } from "@/lib/transactions/api";


export const RecentTransactions = async () => {
  const transactionss = await fetchTransactions()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        {transactionss.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={{
            ...transaction,
            name: "Health Insurance",
            category: "Health",
            date: "Dec 28",
          }} />
        ))}
      </CardContent>
    </Card>
  );
};
