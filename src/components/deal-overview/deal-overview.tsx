import React from 'react';
import { DealDetails } from '@/types/deal';
import { DealHeader } from './components/deal-header';

type DealOverviewProps = {
  deal: DealDetails;
}

export const DealOverview: React.FC<DealOverviewProps> = ({ deal }) => {
  return (
    <DealHeader deal={deal} />
    // TODO: Add the rest of the components here
  );
}; 