import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${state => state.showSuggestions ? "2em" : "5em"};
`;

const InputField = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 25px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 0 12pt;
  font-size: 1.1em;
  position: absolute;

  :focus{
    outline: none;
  }
`;

const SuggestionsContainer = styled.ul`
  padding: 3em 0em 0.5em;
  border-radius: 25px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 500px;
`;

const SuggestionItem = styled.li`
  padding: 0.5em 1em;
  font-size: 14px;
  list-style-type: none;
`;

const Suggestion = styled.span`
  color: #000000;
`;

const Completion = styled.span`
  color: #b2b2b2;
`;

export {
    Container,
    InputField,
    SuggestionsContainer,
    SuggestionItem,
    Suggestion,
    Completion,
}