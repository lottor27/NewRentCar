import React from 'react'
import { Card } from './CardAdverts.styled';

const CardAdverts = ({ children }) => {

    return (
        <Card>
            {children}
        </Card>
    )
};

export default CardAdverts;