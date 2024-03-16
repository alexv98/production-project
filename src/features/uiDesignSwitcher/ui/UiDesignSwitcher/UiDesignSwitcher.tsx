import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UiDesignSwitcher.module.scss';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
          userId: authData.id,
        }),
      ).unwrap();
      setIsLoading(false);
    }
  };

  return (
    <HStack align="center" gap="8">
      <Text text={t('Вариант интерфейса')} />
      {isLoading ? (
        <Skeleton width={300} height={40} />
      ) : (
        <ListBox
          items={items}
          onChange={onChange}
          value={isAppRedesigned ? 'new' : 'old'}
          className={classNames(cls.UiDesignSwitcher, {}, [className])}
        />
      )}
    </HStack>
  );
});
