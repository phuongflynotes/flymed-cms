import React from 'react';
import { useTranslation } from "react-i18next";

const Header = (props:any) => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1>{t('header.title')}</h1>
        </div>
    )
}

export default Header;