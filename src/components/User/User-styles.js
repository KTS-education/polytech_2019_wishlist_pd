import styled from "styled-components";

const ProfileDetails = styled.div`
  display: ${props => props.inSearch ? "inline-flex" : "flex"};
`;
const ProfileDetailsLeft = styled.div`
  margin: 15pt 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: ${props => props.inSearch ? "space-evenly" : "center"};
  flex-direction: column;
`;
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  flex-grow: ${props => props.inSearch ? "1" : "0"};
`;
const ProfileDetailsBtn = styled.div`
  text-align: left;
  flex-grow: ${props => props.inSearch ? "2" : "0"};
`;

export {
    ProfileDetails,
    ProfileDetailsLeft,
    ProfileDetailsRight,
    ProfileDetailsUsername,
    ProfileDetailsBtn,
}
