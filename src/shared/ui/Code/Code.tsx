import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import CopyIcon from 'shared/assets/icons/articles/details/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
