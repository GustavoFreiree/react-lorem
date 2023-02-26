import React from 'react';
import Section from '../../common/Section';
import Text from '../../common/Text';
import Button from '../../common/Button';
import ThoughtProcess from '../../../assets/thoughtProcess_home.svg';
import styled from 'styled-components';

const Img = styled.img`
    width: 50rem;

    @media (max-width:768px) {
        width: 30rem;
    }
`;

const Home = () => {
    return (<>  
        <Section cAxisAlign="center" gap="5rem">
            <Text.Block>    
                <Text.Title>Lorem ipsum dolor sit amet.</Text.Title>
                <Text.Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga voluptate sed et, eos saepe repudiandae corrupti animi numquam illum ex nesciunt aperiam sint doloribus vel? Dolorem reprehenderit accusantium reiciendis.
                Voluptatibus fugiat minus quos debitis! Nostrum odit eligendi odio voluptates recusandae blanditiis, reiciendis laudantium ex rem ipsa expedita voluptatibus, molestias ipsam. Enim aut molestiae temporibus nihil commodi facere iste? Deleniti.
                Accusamus porro beatae facere, et veniam quaerat pariatur aspernatur. Sapiente eaque inventore repellendus doloribus quae minima! Corporis suscipit, doloribus consectetur dolorum voluptates, hic assumenda magni nemo deserunt quos laborum et.
                Corporis sapiente eveniet commodi, necessitatibus molestiae doloribus, ea molestias praesentium quos animi maxime quo non minima est natus quaerat iure veritatis aut cum! Asperiores, maxime. Delectus neque perferendis animi error.
                Laboriosam sequi quam omnis rerum suscipit? Asperiores eaque ipsum, veritatis fuga autem culpa quae aut enim soluta consequatur! Delectus ipsa ad distinctio voluptatibus quod voluptatem! Quaerat tempora corporis ad deleniti.</Text.Paragraph>     
            </Text.Block>
            <Img src={ThoughtProcess} alt="image"/>
            <Text.Block>
                <Text.Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eum similique impedit cupiditate, dicta repellat quisquam necessitatibus officia, dolores, reprehenderit nesciunt. Labore corrupti ducimus officia reprehenderit porro illum obcaecati quia.
                    Delectus enim officiis minima quia minus, modi quas iste architecto ad ullam, eveniet fuga eligendi sunt commodi aspernatur molestias possimus voluptatibus placeat necessitatibus deserunt explicabo obcaecati amet consectetur. Doloremque, quam.
                    Reprehenderit cum sint laudantium, aut est praesentium maiores repellat inventore tempora dolor, dolore sapiente libero maxime modi atque voluptate deserunt non fuga id ipsa? Ex laboriosam cupiditate culpa nesciunt dolore?
                </Text.Paragraph>
            </Text.Block>
        </Section> 
        <Section cAxisAlign='center'>
            <Text.Title>Lorem lorem lorem</Text.Title>
            <Text.Paragraph width='60rem' align='center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi magnam rem voluptatibus quae! Distinctio, iusto. Placeat, ad. Laudantium, maxime ab?
            </Text.Paragraph>
            <Button outlined>Lorem, ipsum dolor.</Button>
        </Section>       
    </>);
}

export default Home;