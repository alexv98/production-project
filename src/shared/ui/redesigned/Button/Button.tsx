import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled = false,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullwidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});