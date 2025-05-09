export const dynamic = 'force-dynamic'

import { RecentTransactions } from "./components/recent-transactions";

export default function Home() {
  return (
    <div className="space-y-6 p-4">
      <RecentTransactions />
    </div>
  );
}
