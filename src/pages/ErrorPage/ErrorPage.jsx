import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Section, TextWrapper } from './ErrorPage.styled';

const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <Section>
            <TextWrapper className='text-message'>404 Not Found. <br />Will be redicted to the home page!</TextWrapper>
        </Section>
    )
}

export default ErrorPage