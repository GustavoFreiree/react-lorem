import { Link } from "react-router-dom";
import styled from "styled-components";
import Section from "../../common/Section";
import Text from "../../common/Text";
import Button from "../../common/Button";
import error404 from "../../../assets/404.svg";

const Img = styled.img`
	width: 40rem;
	margin-bottom: 2rem;
	user-select: none;

	@media (max-width: 425px) {
		width: 30rem;
	}

	@media (max-width: 321px) {
		display: none;
	}
`;

const Lost = () => {
	return (
		<>
			<Section mAxisAlign="center" cAxisAlign="center" width="20rem">
				<Img src={error404} alt="404 image" />
				<Text.Title align="center">
					Uh-oh, looks like you've stumbled upon a page that's
					gone missing!
				</Text.Title>
				<Text.Paragraph width="90rem" align="center">
					Don't panic, we've sent our top investigators to search
					for it. In the meantime, you can help us out by
					clicking the button below to go back to safety. Thanks
					for your assistance and sorry for the inconvenience!
				</Text.Paragraph>
				<Button>
					<Link to="/">Take me back!</Link>
				</Button>
			</Section>
		</>
	);
};

export default Lost;
