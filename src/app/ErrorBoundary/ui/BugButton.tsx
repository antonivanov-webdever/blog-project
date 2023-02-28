import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const { t } = useTranslation();
    const [appError, setAppError] = useState(false);

    const setError = () => setAppError(true);

    useEffect(() => {
        if (appError) {
            throw new Error();
        }
    }, [appError]);

    return (
        <AppButton onClick={setError}>
            {t('Вызвать ошибку')}
        </AppButton>
    );
};
