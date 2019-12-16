import styled from "styled-components";

const GiftButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-image: linear-gradient(225deg, #ff0045, #ff9890);
    cursor: help;
    float: right;
    text-align: center;
    margin-left: 10pt;

    img {
        width: 70%;
        height: 60%;
        vertical-align: middle;
        margin: 0;
    }

    :focus {
        outline: none;
    }
`;

export { GiftButton }
