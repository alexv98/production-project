import React, { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { t } = useTranslation();
  const { className, value, onChangeType } = props;

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: 'ALL',
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'SCIENCE',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'ECONOMICS',
    },
  ], []);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeType}
    />
  );
});
