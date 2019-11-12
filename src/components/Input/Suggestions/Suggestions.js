import React from 'react'
import styled from "styled-components";

const SuggestionsContainer = styled.div`
  padding: 3em 1em 0em;
  height: 11.5em;
  border-radius: 25px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 500px;
`;

const SuggestionItem = styled.div`
  margin: 0.75em 0;
  font-size: 14px;
  list-style-type: none;
`;

const Suggestions = (props) => {
    const options = props.results.map((r, index) => (
        <SuggestionItem key={index}>
            {r}
        </SuggestionItem>
    ));
    return (
            <SuggestionsContainer>
                {options}
            </SuggestionsContainer>
    )
};

export default Suggestions;