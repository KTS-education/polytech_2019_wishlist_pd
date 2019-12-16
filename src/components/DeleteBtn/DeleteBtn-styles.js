import styled from "styled-components";
import { Button } from "../../styles/styles.js";

const DeleteButton = styled(Button)`
padding: ${props => props.size || "0.8em"};
background-image: linear-gradient(79deg, #e0fffd, #e7e1ff);
display: inline-block;
flex-grow: 1;

:hover {
    background-color: #e0fffd;
    background-image: none;
}

:active {
    background-color: #e7e1ff;
    background-image: none;
}
`;

export { DeleteButton }
