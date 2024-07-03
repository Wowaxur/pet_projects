import React from 'react';
import s from './junior.module.css';
import HW5 from './s2/hw05/HW5';
import { Provider } from 'react-redux';
import store from './s2/hw10/bll/store';

function Junior() {
    return (
        <Provider store={store}>
            <div className={s.container}>
                <HW5 />
            </div>
        </Provider>
    );
}

export default Junior;