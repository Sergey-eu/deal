'use client';

import React from 'react';
import { Divider, Typography } from 'antd';
import styles from './section-title.module.scss';

type SectionTitleProps = {
  title: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title } = props;
  const { Title } = Typography;

  return (
    <div className={styles.sectionTitle}>
      <Title level={1} className={styles.sectionTitle__text}>
        {title}
      </Title>
      <Divider />
    </div>
  );
};
