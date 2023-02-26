import styled from "styled-components";
import Section from "../../common/Section";
import Input from "../../common/Input";
import Button from "../../common/Button";
import LoginImg from "../../../assets/logIn.svg";

const Form = styled.form`
	display: flex;
	flex-flow: column;
	gap: 2rem;
	width: 30rem;
`;

const Img = styled.img`
	width: 30rem;

	@media (max-width: 768px) {
		width: 20rem;
	}
`;

const Login = () => {
	return (
		<>
			<Section
				mAxisAlign="center"
				cAxisAlign="center"
				flow="row"
				flowMobile="column"
				gap="10rem"
				gapMobile="5rem"
			>
				<Img src={LoginImg} alt="log img" />
				<Form>
					<Input
						inputID="Email"
						type="email"
						placeHolder="example@mail.com"
					/>
					<Input
						inputID="Password"
						type="password"
						placeHolder="**********"
						required
					/>
					<Button>Log in</Button>
				</Form>
			</Section>
		</>
	);
};

export default Login;
