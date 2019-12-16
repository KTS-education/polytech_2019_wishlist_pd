import React from 'react';
import {
    Container,
    InputField,
    SuggestionsContainer,
    SuggestionItem,
    Suggestion,
    Completion,
} from './Input-styles';
import './input.css';


class Input extends React.Component{
    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
            products: [],
        };
    }

    onChange = () => {
        const { suggestions } = this.props;

        this.props.onUserInput(
            this.inputText.value,
        );

        this.setState({
            activeSuggestion: 0,
            showSuggestions: true,
            userInput: this.inputText.value,
            filteredSuggestions: suggestions,
        });
    };

    onClick = e => {
        this.props.onUserInput(
            e.currentTarget.innerText,
            this.getProducts(this.inputText.value)
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User pressed the enter key
        if (e.keyCode === 13) {

            this.props.onUserInput(
                filteredSuggestions[activeSuggestion],
            );

            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <SuggestionsContainer>
                        {this.props.suggestions.map((sugg, index) => {
                            console.log(userInput);
                            let className, suggestion, completion;

                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            suggestion = <Suggestion>{sugg.substr(0, userInput.length)}</Suggestion>;
                            completion =  <Completion>{sugg.substr(userInput.length)}</Completion>;

                            return (
                                <SuggestionItem className={className} key={index} onClick={onClick}>
                                    {suggestion}{completion}
                                </SuggestionItem>
                            );
                        })}
                    </SuggestionsContainer>
                );
            }
        }

        return (
            <>
                <Container>
                    <InputField
                        onKeyDown={ onKeyDown }
                        value={ this.props.query }
                        ref={ (input) => this.inputText = input }
                        onChange={ this.onChange }
                    />
                    {suggestionsListComponent}
                </Container>
            </>
        )
    }
}

export default Input;
