'use client';

import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import { 
  DownloadOutlined, 
  HomeOutlined, 
  EnvironmentOutlined, 
  CalendarOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { DealDetails } from '@/types/deal';
import { KeyValueItem, SectionTitle } from '@/components/common';
import { usePropertyDetails } from '@/hooks/usePropertyDetails';

import styles from '../deal-overview.module.scss';

type DealHeaderProps = {
  deal: DealDetails;
}

export const DealHeader: React.FC<DealHeaderProps> = (props) => {
  const { deal } = props;
  const { Title, Text } = Typography;
  const propertyDetails = usePropertyDetails(deal);
  
  return (
    <div className={styles.dealHeader}>
      <SectionTitle 
        title="Deal Overview" 
      />
      <div className={styles.dealHeader__details}>
        <div className={styles.dealHeader__image}>
          <div className={styles.dealHeader__imageContainer}>
            <Image
              src={deal.imageUrl}
              alt={deal.name}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.dealHeader__imageCaption}>
              Click for Google Street View
            </div>
          </div>
        </div>
        
        <div className={styles.dealHeader__info}>
          <Title level={3} className={styles.dealHeader__title}>{deal.name}</Title>
          <div className={styles.dealHeader__meta}>
            <Row gutter={16}>
              <Col><Text><EnvironmentOutlined /> {deal.city}, {deal.state}</Text></Col>
              <Col><Text><HomeOutlined /> {deal.propertyType}</Text></Col>
              <Col><Text><CalendarOutlined /> {deal.dateUpdated}</Text></Col>
            </Row>
          </div>
          
          <div className={styles.dealHeader__metrics}>
            <Row gutter={0}>
              {propertyDetails.map((item, index) => (
                <Col className={styles.dealHeader__metricsItem} key={index}>
                  <KeyValueItem 
                    icon={item.icon} 
                    label={item.label} 
                    value={item.value} 
                  />
                </Col>
              ))}
            </Row>
          </div>
          
          <div className={styles.dealHeader__actions}>
            <Link href={'#'} target="_blank" rel="noopener noreferrer" download={`${deal.name}_Deal_Report.pdf`}>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                className={styles.dealHeader__actionButton}
              >
                Export to PDF
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 