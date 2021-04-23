import "./Home.css";
import { Typography, Divider } from "antd";
const { Title, Paragraph } = Typography;

const Home = () => {
	return (
		<>
			<Typography>
				<Title>Hi there! My name is Jerry Hsieh.</Title>
				<Title level={3}>Welcome to my portfolio website~</Title>
			</Typography>

			<Divider />
		</>
	);
};

export default Home;
