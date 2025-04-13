'use client';

import React from 'react';
import { Typography } from 'antd';
import styles from './key-value-item.module.scss';

const { Text } = Typography;

type KeyValueItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

export const KeyValueItem: React.FC<KeyValueItemProps> = (props: KeyValueItemProps) => {
  const { icon, label, value } = props;

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.icon}>{icon}</span>
        <Text className={styles.label}>{label}</Text>
      </div>
      <Text strong className={styles.value}>
        {value}
      </Text>
    </div>
  );
};
