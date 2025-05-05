import { cn, formatBigIntAsCurrency } from "@/lib/utils";

type Transaction = {
  id: string;
  name: string;
  category: string;
  amount: bigint;
  date: string;
};

type PropsT = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: PropsT) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-accent/50 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div>
          <div className="font-medium text-sm">{transaction.name}</div>
          <div className="text-xs text-muted-foreground">
            {transaction.category}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div
          className={cn(
            "font-medium",
            transaction.amount < 0n ? "text-foreground" : "text-green-600",
          )}
        >
          {transaction.amount < 0n
            ? `-$${formatBigIntAsCurrency(transaction.amount * -1n)}`
            : `$${formatBigIntAsCurrency(transaction.amount)}`}
        </div>
        <div className="text-xs text-muted-foreground">{transaction.date}</div>
      </div>
    </div>
  );
};
