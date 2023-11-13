import styled from "styled-components"

export const Modal = styled.div`
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: #10100f;
    max-width: 335px;
    width: calc(100% - 40px);
    /* min-height: 280px; */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 32px;
    /* overflow-y: auto;  */

    background: #efefbb; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #d4d3dd,
        #efefbb
  ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #d4d3dd,
        #efefbb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (min-width: 768px) {
        max-width: 479px;
        width: 479px;
        /* height: 286px; */
    }
`;
export const WrapIcon = styled.div`
    position: relative;
`
export const CloseButton = styled.svg`
    stroke: var(--color-text);
    padding: 0;
    transition: all 0.1s linear;
    position: relative;
    left: 94%;
    cursor: pointer;
    &:hover,
    &:focus {
        stroke: black;
        }

    @media screen and (min-width: 768px) {
        width: 26px;
        height: 26px;

        svg {
        width: 26px;
        height: 26px;
        }
    }
`;


