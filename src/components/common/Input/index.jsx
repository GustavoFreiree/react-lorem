import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    
    & > label {
        cursor: pointer;
        font-size: 1.6rem;
        margin-bottom: .3rem;
    }
`;

const StyledInput = styled.input`
    background-color: transparent;
    outline: none;
    border: .1rem solid ${props => props.theme.colors.text};
    border-radius: .5rem;
    padding: 1.5rem 2.5rem;
    color: ${props => props.theme.colors.text};
`;

const Input = (props) => {
    const {
        inputID,
        placeHolder,
        type,
    } = props;

    return (
        <InputContainer>
            <label htmlFor={inputID}>{`${inputID}:`}</label>
            <StyledInput 
                id={inputID}
                placeholder={placeHolder}
                type={type}
            />
        </InputContainer>
    );
}
 
export default Input;