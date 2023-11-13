import React, { useState } from 'react'
import sprite from '../../icon/icon-sprite.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectAdverts,
} from '../../redux/selectors'
import { addFavorite, deleteFavorite } from '../../redux/reducers/favoritiesSlice'
import { Icon } from './AddToFavoritesButton.styled'

const AddToFavoritesButton = ({ advertId }) => {
    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);

    const [isClikedButton, setIsClikedButton] = useState(false);

    const handleClick = id => {
        const favorite = dataAdverts.find(advert => advert.id === id);
        if (!isClikedButton) {

            if (favorite) {
                setIsClikedButton(true);
                dispatch(addFavorite(favorite));
            };
        } else if (isClikedButton) {
            if (favorite) {
                setIsClikedButton(false);
                dispatch(deleteFavorite(favorite));
            };

        }
    }


    return (
        <div onClick={() => handleClick(advertId)}>
            <Icon width='24' height='24' className={isClikedButton && 'active'}>
                <use href={`${sprite}#icon-heart`} />
            </Icon>
        </div>
    )
}

export default AddToFavoritesButton