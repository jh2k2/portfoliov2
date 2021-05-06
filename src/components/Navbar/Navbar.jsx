import { Menu, Affix } from "antd";
import {
    HomeOutlined,
    CodeOutlined,
    PhoneOutlined,
    ContactsOutlined,
    ToolOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <Affix offsetTop={0}>
            <Menu mode="horizontal" className="nav-class">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="career" icon={<ContactsOutlined />}>
                    <Link to="/career">Career</Link>
                </Menu.Item>
                <Menu.Item key="proficiency" icon={<ToolOutlined />}>
                    <Link to="/proficiency">Proficiency</Link>
                </Menu.Item>
                <Menu.Item key="project" icon={<CodeOutlined />}>
                    <Link to="/project">Project</Link>
                </Menu.Item>
                <Menu.Item key="contact" icon={<PhoneOutlined />}>
                    <Link to="/contact">Contact</Link>
                </Menu.Item>
            </Menu>
        </Affix>
    );
};

export default Navbar;
