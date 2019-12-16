import styled from "styled-components";
import { ColoredLink } from './../../styles/styles.js';

const NavHeader = styled.div`
  padding: 23.5pt 20pt 10pt;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;
const NavLeft = styled.div`
  width: 33%;
  text-align: left;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  text-align: right;
`;
const NavCenter = styled.div`
  display: ${props => props.isFriendPage ? "flex" : "none"}
  width: 33%;
  justify-content: center;
`;
const HeaderLink = styled(ColoredLink)`
  padding: ${props => props.isMyPage ? "0pt" : "12pt"};
`;
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export {
    NavHeader,
    NavLeft,
    NavRight,
    NavCenter,
    HeaderLink,
    AvatarContainer,
}