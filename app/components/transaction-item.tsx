import { cn } from "@/lib/utils";

type Transaction = {
  id: number;
  name: string;
  category: string;
  amount: number;
  date: string;
  icon: React.ElementType;
  iconColor: string;
};

type PropsT = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: PropsT) => {
  const Icon = transaction.icon;

  return (
    <div className="flex items-center justify-between p-3 hover:bg-accent/50 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            transaction.iconColor,
          )}
        >
          <Icon size={20} />
        </div>
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
            transaction.amount < 0 ? "text-foreground" : "text-green-600",
          )}
        >
          {transaction.amount < 0
            ? `-$${Math.abs(transaction.amount).toFixed(2)}`
            : `$${transaction.amount.toFixed(2)}`}
        </div>
        <div className="text-xs text-muted-foreground">{transaction.date}</div>
      </div>
    </div>
  );
};
