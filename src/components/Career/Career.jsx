import { List, Divider, Typography, Card } from "antd";
import "./Career.css";

const { Title, Paragraph } = Typography;

const data = [
	{
		title: "",
		desc: "",
	},
	{
		title: "",
		desc: "",
	},
	{
		title: "",
		desc: "",
	},
	{
		title: "",
		desc: "",
	},
];

const Career = () => {
	return (
		<>
			<Title>Career</Title>
			<Divider></Divider>
			<List
				grid={{ gutter: 16, column: 4 }}
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<Card title={item.title}>{item.desc}</Card>
					</List.Item>
				)}
			/>
		</>
	);
};

export default Career;
