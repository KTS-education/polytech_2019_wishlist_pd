import styled from "styled-components";

const ProfileAvatar = styled.img`
  display: ${props => props.isHide ? "none" : "inline-block"};
  border-radius: 50%;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);

  width: ${props => props.avatarWidth || "100px"};
  margin-left: ${props => props.inHeader ? "-10pt" : "0pt"};
`;

export { ProfileAvatar }
