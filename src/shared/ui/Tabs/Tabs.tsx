import React, { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { ArticleType } from 'entities/Article';
import cls from './Tabs.module.scss';

export interface TabItem<T extends ArticleType> {
  value: T;
  content: ReactNode
}

interface TabsProps<T extends ArticleType> {
  className?: string;
  tabs: TabItem<T>[]
  value: string
  onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends ArticleType>(props: TabsProps<T>) => {
  const { t } = useTranslation();

  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const clickHandle = (tab: TabItem<T>) => () => {
    onTabClick(tab);
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
