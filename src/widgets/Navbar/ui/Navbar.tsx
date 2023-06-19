import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuth, setIsAuth] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuth((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.link}
          onClick={onToggleModal}
        >
          {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isAuth} onClose={onToggleModal}>
        {/* eslint-disable-next-line max-len */}
        {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi illum laborum laudantium magni, natus quae? Animi impedit iure modi nesciunt vel voluptatum. Ad facilis hic magni nesciunt officia repellat.')}
      </Modal>
    </div>
  );
};
