import styled from "styled-components";

export const Section = styled.div`
    margin-top: 70px;

    background: #004FF9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFF94C, #004FF9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFF94C, #004FF9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: 0 5px 20px rgba(74, 82, 124, 0.2);
`

export const Wrapper = styled.div`
    width: 100%;
    padding: 25px 0;
`;

export const Text = styled.p`
    color: var(--color-title);
    font-weight: 500;
    font-size: 15px;
    display: flex;
    justify-content: center;
    @media screen and(max-width: 767px) {
        font-size: 12px;
    }
`;