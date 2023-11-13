import styled from "styled-components"

export const ButtonStyled = styled.button`
    display: flex;
    width: 274px;
    height: 44px;
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background-color: var(--color-accent);
    transition: background-color linear 500ms;
    color: var(--color-text-light);
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: var(--color-accent-active);
    }
`
