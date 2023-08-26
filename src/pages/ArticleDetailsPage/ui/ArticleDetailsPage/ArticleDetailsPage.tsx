import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      // eslint-disable-next-line i18next/no-literal-string
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        Статья не найдена
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
