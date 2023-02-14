import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useEffect, useState } from 'react';
import { t } from 'i18next';

export const BugButton = () => {
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
