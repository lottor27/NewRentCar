import React, { useCallback, useEffect, useState } from 'react';
import Container from '../../components/Container/Container';

import { useSelector } from 'react-redux';
import { selectAdverts, selectFavoritiesID } from '../../redux/selectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';

import { getCarById } from '../../redux/operations';
import Button from '../../components/Button/Button';
import { Wrapper } from './FavoritesPage.styled';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const getFavoritiesId = JSON.parse(useSelector(selectFavoritiesID));
  const dataAdverts = useSelector(selectAdverts);
  const [getAdverts, setAdverts] = useState([]);

  const getCarData = useCallback(async id => {
    try {
      const data = await getCarById(id);
      setAdverts(prev => {
        if (!prev.some(item => item.id === data.id)) {
          return [...prev, data];
        }
        return prev;
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const carItems = await Promise.all(
        getFavoritiesId.map(element => {
          const foundItem = dataAdverts.find(item => item.id === element);
          return foundItem || getCarData(element);
        })
      );
      setAdverts(carItems.filter(Boolean));
    };

    fetchData();
  }, [dataAdverts, getCarData, getFavoritiesId]);

  return (
    <Container>
      {getFavoritiesId.length > 0 ? (
        <AdvertsList adverts={getAdverts} />
      ) : (
        <Wrapper>
          <p>List is empty.</p>
          <Button onClick={() => navigate('/catalog')}>Back</Button>
        </Wrapper>
      )}
    </Container>
  );
};

export default FavoritesPage;
