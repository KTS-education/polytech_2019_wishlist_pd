import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);
  word-break: keep-all;
  font-size: 14px;

  :focus {
      outline: none;
  }
`;

const ColoredLink = styled(Link)`
  font-size: 15px;
  color: #329eff;

  :hover {
    text-decoration: none;
    color: #2a85d7;
  }

  :active {
    text-decoration: none;
    color: #2168a8;
  }

  :focus, :visited, :link {
    text-decoration: none;
  }
`;

const Label = styled.div`
  font-family: "Candara Light", monospace;
  margin-top: 0.3em;
  margin-bottom: 0.6em;
  font-size: 32pt;
  text-align: center;
`;

export {
    Button,
    Label,
    ColoredLink,
};
