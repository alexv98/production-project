import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ButtonIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={ButtonIcon}
      onClick={onClick}
      clickable
      width={32}
      height={32}
      className={classNames(cls.ScrollToTopButton, {}, [className])}
    />
  );
});
