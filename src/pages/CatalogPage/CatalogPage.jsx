import React, { useEffect } from 'react'
import Container from '../../components/Container/Container'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectAdverts,
    selectCurrentPage,
    selectLoadingAdverts
} from '../../redux/selectors'
import { fetchAdverts } from '../../redux/operations'
import Loading from '../../components/Loading/Loading'
// import LoadMoreButton from '../../components/LoadMore/LoadMore'
import { setCurrentPage } from '../../redux/reducers/paginationSlice'
import { LoadMoreStyled } from './CatalogPage.styled'

const CatalogPage = () => {
    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);
    const isLoader = useSelector(selectLoadingAdverts);
    const currentPage = useSelector(selectCurrentPage);

    useEffect(() => {
        const getDataAdverts = async () => {
            try {
                await dispatch(fetchAdverts())
            } catch (error) {
                console.error("Error fetching adverts: ", error);
            }
        };
        getDataAdverts();
    }, [dispatch, currentPage]);

    const onLoadMore = async () => {
        dispatch(setCurrentPage(currentPage + 1));
    }
    // console.log('NEXT ADVERS :', dataAdverts)


    return (
        <Container>
            {isLoader
                ? <Loading />
                : (<>
                    <AdvertsList adverts={dataAdverts} />
                    {currentPage < 3 && <LoadMoreStyled onLoadMore={onLoadMore} />}
                </>)
            }
        </Container>
    )
}

export default CatalogPage