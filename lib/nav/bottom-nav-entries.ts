export type BottomNavEntry = BaseBottomNavEntry | AddTransactionBottomNavEntry;

export type BaseBottomNavEntry = {
  kind: 'base-entry';
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
}

export type AddTransactionBottomNavEntry = {
  kind: 'add-transaction-entry';
  href: "#";
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}
