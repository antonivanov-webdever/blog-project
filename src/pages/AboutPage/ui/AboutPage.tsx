import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/ErrorBoundary';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О нас')}
            <BugButton />
        </div>
    );
};

export default AboutPage;
