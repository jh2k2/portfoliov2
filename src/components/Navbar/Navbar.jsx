import { Menu, Layout, Affix } from "antd";
import { HomeOutlined, CodeOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<Affix offsetTop={0}>
			<Layout>
				<Menu mode="horizontal" theme="light" className="nav-class">
					<Menu.Item key="home" icon={<HomeOutlined />}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="project" icon={<CodeOutlined />}>
						<Link to="/project">Project</Link>
					</Menu.Item>
					<Menu.Item key="contact" icon={<PhoneOutlined />}>
						<Link to="/contact">Contact</Link>
					</Menu.Item>
				</Menu>
			</Layout>
		</Affix>
	);
};

export default Navbar;
