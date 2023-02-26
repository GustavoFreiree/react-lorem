import styled from 'styled-components';

const Button = styled.button`
    outline: none;
    padding: 1.5rem 4rem;
    background-color: ${props => props.outlined? `transparent`: props.theme.colors.sub};
    border: ${props => props.outlined? `.2rem solid #fff`: `.2rem solid transparent`};
    border-radius: .5rem;
    color: ${props => props.theme.colors.text};
    transition: .3s;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: ${props => props.theme.colors.subHovered};
        color: ${props => props.theme.colors.bg};
        filter: drop-shadow(0 0 .5rem ${props => props.theme.colors.sub});
    }

    & > a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
    }
`;

export default Button;