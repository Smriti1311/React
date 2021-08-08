import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const HomeComponent = () => {
    const inputRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const  buttonClickHandler = () => {
        alert(inputRef.current.value);
    }

    return (
        <h1 className='text-center'>
            {t("homeComponent")}
            <br />
            <input type='text' ref={inputRef} />
            <button onClick={buttonClickHandler}>{t("click")}</button>
        </h1>
    )
}

export default HomeComponent;