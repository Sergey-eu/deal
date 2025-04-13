import { DealOverview } from '@/components/deal-overview';
import { mockDealDetails } from '@/utils/mockData';

export default function HomePage() {
  return (
    <main>
      <DealOverview deal={mockDealDetails} />
    </main>
  );
}
