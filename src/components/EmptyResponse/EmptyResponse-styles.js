import styled from "styled-components";

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.5em;
`;
const ParagraphText = styled.p`
  font-size: 25px;
`;
const EmojiSpan = styled.span`
  font-size: 50px;
  role="img";
  aria-label="smiling face with heart-eyes";
`;

export {
    Empty,
    ParagraphText,
    EmojiSpan,
}