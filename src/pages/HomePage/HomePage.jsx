import React from 'react'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import { Section, Wrapper } from './HomePage.styled'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/catalog');
    }

    return (
      <Section>
        <Container>
          <Wrapper>
            <h2>Welcome to NewRentCar</h2>
            <Button onClick={handleButton}>Find a car</Button>
          </Wrapper>
        </Container>
      </Section>
    );
}

export default HomePage