import styled from 'styled-components';

const Block = styled.div``;

const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    margin: 0;
    max-width: ${props => props.width? props.width: null};
    text-align: ${props => props.align? props.align: null};
`;

const Paragraph = styled.p`
    font-size: 2em;
    font-weight: 100;
    max-width: ${props => props.width? props.width: null};
    text-align: ${props => props.align? props.align: null};
`;

export default {
    Block, Title, Paragraph
};