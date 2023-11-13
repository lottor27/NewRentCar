import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import sprite from '../../icon/icon-sprite.svg'
import Backdrop from '../Backdrop/Backdrop'
import { CloseButton, Modal, WrapIcon } from './ModalWindow.styled'
import ModalWindowContent from '../ModalWindowContent/ModalWindowContent'
import { closeModal } from '../../redux/reducers/modalSlice'
import { useDispatch } from 'react-redux'
// import { selectIsOpenModal } from '../../redux/selectors'

const ModalWindow = ({ advert }) => {
    const dispatch = useDispatch();
    // const isOpenModal = useSelector(selectIsOpenModal);

    useEffect(() => {
        const closeESC = (e) => {
            if (e.code === 'Escape') dispatch(closeModal())
        };
        document.addEventListener('keydown', closeESC);
        return () => {
            document.removeEventListener('keydown', closeESC);
        };
    }, [dispatch]);

    useEffect(() => {
        // if (isOpenModal)
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    const handleClickBackground = (e) => {
        if (e.currentTarget === e.target) dispatch(closeModal());
    };

    const handleCloseModal = () => dispatch(closeModal());

    return createPortal(
        <Backdrop onClick={handleClickBackground}>
            <Modal>
                <WrapIcon>
                    <CloseButton width='24' height='24' onClick={handleCloseModal}>
                        <use href={`${sprite}#icon-x`} />
                    </CloseButton>
                </WrapIcon>
                <ModalWindowContent advert={advert} />
            </Modal>
        </Backdrop>,
        document.querySelector('#modal-root')
    )
}

export default ModalWindow