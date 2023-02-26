import styled from 'styled-components';

const SectionContainer = styled.section`
    padding: 3rem 0;
    border-bottom: .1rem solid rgb(53, 52, 56);
    margin: 0 3.2rem;
    display: flex;
    flex-flow: column;
    flex-grow: 1;
`;

const Wrapper = styled.div`
    max-width: ${props => props.maxWidth? props.maxWidth: props.theme.margin.mainMargin};
    width: 100%;
    display: flex;
    flex-flow: ${props => props.flow? props.flow: 'column nowrap'};
    align-items: ${props => props.cAxisAlign? props.cAxisAlign: null};
    justify-content: ${props => props.mAxisAlign? props.mAxisAlign: null};
    flex-grow: 1;
    gap: ${props => props.gap? props.gap: 0};

    ${props => props.flowMobile && `@media (max-width: 768px){
        flex-flow: ${props.flowMobile};
    }`}

    ${props => props.gapMobile && `@media (max-width: 768px){
        gap: ${props.gapMobile};
    }`}
`;

const Section = (props) => {
    const { children, ...rest } = props;

    return (<SectionContainer>
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    </SectionContainer>);
}
 
export default Section;