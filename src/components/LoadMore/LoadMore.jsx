import React from 'react';
import Button from '../Button/Button';
import { Wrapper } from './LoadMore.styled';

const LoadMoreButton = ({ onLoadMore }) => {

    const handleLoadMore = async (event) => {
        event.preventDefault();
        onLoadMore();
    };

    return (
        <Wrapper>
            <Button onClick={handleLoadMore}>Load more</Button>
        </Wrapper>
    );
}


export default LoadMoreButton;
