import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuth, setIsAuth] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuth(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuth(false);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.link}
          onClick={onOpenModal}
        >
          {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isAuth} onClose={onCloseModal}>
        <LoginForm />
      </Modal>
    </div>
  );
};
