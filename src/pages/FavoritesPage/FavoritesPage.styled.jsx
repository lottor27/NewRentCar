import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;

    /* padding: 200px 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
     p {
        color: var(--color-text);
        width: 100%;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2; /* 111.429% */
        letter-spacing: 0.7px;
        text-align: center;
    }
`