import React, {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    value,
    onChange,
    autofocus = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cls.InputWrapper}>
      {placeholder
        && (
          <div className={cls.placeholder}>
            {`${placeholder}>`}
          </div>
        )}
      <input
        className={classNames(cls.Input, {}, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        autoFocus={autofocus}
        {...otherProps}
      />
    </div>

  );
});
