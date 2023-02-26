import styled from 'styled-components';
import Button from '../Button';

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.main};
    padding: 3rem 3.2rem;
    font-size: 1.6em;
    margin-top: 2.5rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${props => props.theme.margin.mainMargin};
    @media (max-width: 768px) {
        flex-flow: column;        
    }
`;

const Title = styled.h1`
    text-decoration: underline;
`;

const OptionList = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100rem;
    justify-content: end;
    align-content: start;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-flow: column;
        width: 100%;        
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <Title>Lorem, ipsum dolor.</Title>
                <OptionList>
                    <Button>1 Lorem, ipsum dolor.</Button>
                    <Button>2 Lorem, ipsum dolor.</Button>
                    <Button>3 Lorem, ipsum dolor.</Button>
                    <Button outlined>4 Lorem, ipsum dolor.</Button>
                    <Button outlined>5 Lorem, ipsum dolor.</Button>
                </OptionList>
            </Wrapper>
        </FooterContainer>
    );
}
 
export default Footer;