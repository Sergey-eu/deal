import { DealDetails } from '@/types/deal';
import {
  UserOutlined,
  DollarOutlined,
  AreaChartOutlined,
  BorderOuterOutlined,
  TagOutlined,
} from '@ant-design/icons';

export const usePropertyDetails = (deal: DealDetails) => {
  const propertyDetails = [
    { icon: <UserOutlined />, label: 'Seller', value: deal.seller },
    {
      icon: <DollarOutlined />,
      label: 'Guidance Price',
      value: `$${deal.guidancePrice.toLocaleString()}`,
    },
    { icon: <DollarOutlined />, label: 'Price PSF', value: `$${deal.guidancePricePSF}` },
    { icon: <AreaChartOutlined />, label: 'Cap Rate', value: `${deal.capRate}%` },
    {
      icon: <BorderOuterOutlined />,
      label: 'Property Size',
      value: `${deal.propertySize.toLocaleString()} sqft`,
    },
    { icon: <BorderOuterOutlined />, label: 'Land Area', value: `${deal.landArea} acres` },
    { icon: <TagOutlined />, label: 'Zoning', value: deal.zoning },
  ];

  return propertyDetails;
};
