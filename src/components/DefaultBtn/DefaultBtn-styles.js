import styled from "styled-components";
import { Button } from "../../styles/styles";

const DefaultButton = styled(Button)`
  padding: ${props => props.inSearch ? "0.5rem" : "0.8rem"} ${props => props.inProfile};
  background-image: linear-gradient(73deg, #7dc4ff, #6700ff);
  color: white;
  flex-grow: 1;

  :hover {
      background-image: linear-gradient(259deg, #7dc4ff, #7dc4ff);
  }

  :active {
      background-color: #6700ff;
      background-image: none;
  }
`;

export { DefaultButton }
