import React from 'react';
import {
    Empty,
    ParagraphText,
    EmojiSpan,
} from './EmptyResponse-styles';

class EmptyResponse extends React.Component{
    render() {
        return(
            <Empty>
                <EmojiSpan>&#9785;</EmojiSpan>
                <ParagraphText>{this.props.text}</ParagraphText>
            </Empty>
        )
    }
}

export default EmptyResponse;