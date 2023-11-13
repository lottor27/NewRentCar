import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from './loading.module.css';

const Loading = () => {
    return (
        <div className={css.loader}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="35"
                visible={true}
            />
        </div>
    )
}

export default Loading;