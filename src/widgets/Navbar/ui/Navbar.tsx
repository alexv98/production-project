import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

  const [isAuth, setIsAuth] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuth(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuth(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.link}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
        <LoginModal isOpen={isAuth} onClose={onCloseModal} />
      </div>
    );
  }

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
      <LoginModal isOpen={isAuth} onClose={onCloseModal} />
    </div>
  );
};
