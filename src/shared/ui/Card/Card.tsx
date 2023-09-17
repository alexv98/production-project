import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Card, {}, [className])}>
      {children}
    </div>
  );
};
