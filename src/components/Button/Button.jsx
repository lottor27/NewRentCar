import React from 'react'
import { ButtonStyled } from './Button.styled'

const Button = ({ children, onClick }) => {
    return (
        <>
            <ButtonStyled type='button' onClick={onClick}>{children}</ButtonStyled>
        </>
    )
}

export default Button