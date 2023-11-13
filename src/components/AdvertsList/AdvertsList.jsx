import React, { useState } from 'react'
import CardAdverts from '../../components/CardAdverts/CardAdverts'
import AdvertContent from '../../components/AdvertContent/AdvertContent'
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton'
// import { useSelector } from 'react-redux'
// import { selectAdverts } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Wrapper } from './AdvertsList.styled'
import ModalWindow from '../ModalWindow/ModalWindow'
import { selectIsOpenModal } from '../../redux/selectors'
import { openModal } from '../../redux/reducers/modalSlice'



const AdvertsList = ({ adverts }) => {
    const dispatch = useDispatch();
    const isOpenModal = useSelector(selectIsOpenModal);
    const [currentAdverts, setCurrentAdverts] = useState(null)

    const handleOpenModal = (advert) => {
        dispatch(openModal());
        setCurrentAdverts(advert);
    }

    return (
        <Flex>
            {adverts.map(item => {
                return (
                    <Wrapper key={item.id}>
                        <CardAdverts>
                            <AdvertContent
                                advert={item}
                                handleOpenModal={handleOpenModal}
                            />
                            <AddToFavoritesButton
                                advertId={item.id}
                            />
                        </CardAdverts>
                    </Wrapper>)
            })}
            {isOpenModal && <ModalWindow advert={currentAdverts} />}
        </Flex>
    )
}

export default AdvertsList