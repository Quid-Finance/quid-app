import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionItem } from "./transaction-item";
import {
  CarIcon,
  CoffeeIcon,
  HeartIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Grocery Store",
    category: "Shopping",
    icon: ShoppingBagIcon,
    iconColor: "bg-chart-1/10 text-chart-1",
    amount: -86.42,
    date: "Today",
  },
  {
    id: 2,
    name: "Coffee Shop",
    category: "Food",
    icon: CoffeeIcon,
    iconColor: "bg-chart-2/10 text-chart-2",
    amount: -4.5,
    date: "Today",
  },
  {
    id: 3,
    name: "Uber",
    category: "Transport",
    icon: CarIcon,
    iconColor: "bg-chart-3/10 text-chart-3",
    amount: -12.8,
    date: "Yesterday",
  },
  {
    id: 4,
    name: "Rent Payment",
    category: "Housing",
    icon: HomeIcon,
    iconColor: "bg-chart-4/10 text-chart-4",
    amount: -1200.0,
    date: "Jan 1",
  },
  {
    id: 5,
    name: "Health Insurance",
    category: "Health",
    icon: HeartIcon,
    iconColor: "bg-chart-5/10 text-chart-5",
    amount: -180.0,
    date: "Dec 28",
  },
];

export const RecentTransactions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </CardContent>
    </Card>
  );
};
