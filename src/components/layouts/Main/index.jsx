import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Header from '../../common/Header';
import Footer from "../../common/Footer";

const Main = styled.main`
    display: flex;
    flex-flow: column;
    align-items: center;
    flex-grow: 1;

    & > section:last-child{
        border-bottom: none;
    }
`;

const MainLayout = ({header, footer}) => {
    return (<>
        {header && <Header/>}
        <Main>
            <Outlet/>
        </Main>
        {footer && <Footer/>}
    </>);
}
 
export default MainLayout;