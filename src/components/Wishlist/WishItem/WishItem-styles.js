import styled from "styled-components";

const WishItemContainer = styled.div`
  width: -moz-min-content;
  position: relative;
  flex-basis: calc(33.333% - 80px);
  margin: 25px;
  text-align: left;
  word-break: break-all;
  white-space: normal;
  line-break: normal;
`;

const SpanContainer = styled.div`
`;

const ProductImg = styled.img`
  width: 11em;
  margin: 0;
  padding: 0;
`;

const Span = styled.span`
  display: block;
  padding-bottom: 4.5pt;
`;

const NameSpan = styled(Span)`
  font-size: 16px;
`;

const PriceSpan = styled(Span)`
  font-size: 12px;
`;

const Description = styled(Span)`
  font-size: 10px;
  word-break: keep-all;
  width: auto;
  color: #929292;
  white-space: normal;
`;

export {
    WishItemContainer,
    SpanContainer,
    ProductImg,
    Span,
    NameSpan,
    PriceSpan,
    Description,
}
