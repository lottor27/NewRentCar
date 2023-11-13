import React from 'react';

const Backdrop = ({ onClick, children }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 100,
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Backdrop;