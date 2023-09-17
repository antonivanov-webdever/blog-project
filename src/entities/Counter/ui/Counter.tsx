import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';

export const Counter: FC<{}> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <div>
                <AppButton onClick={increment} data-testid="increment-btn">
                    { t('Добавить') }
                </AppButton>
            </div>
            <div>
                <AppButton onClick={decrement} data-testid="decrement-btn">
                    { t('Убавить') }
                </AppButton>
            </div>
        </div>
    );
};
