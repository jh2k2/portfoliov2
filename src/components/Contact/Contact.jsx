import { List, Typography } from "antd";
import "./Contact.css";
const { Link } = Typography;
const data = [
    {
        title: "Email",
        description: "jerryhsieh20020220@gmail.com",
    },
    {
        title: "Discord",
        description: "Jake#6197",
    },
    {
        title: "Phone",
        description: "(510) 737-9252",
    },
    {
        title: "Linkedin",
        description: (
            <Link href="https://www.linkedin.com/in/jerry-hsieh-8268a1203/">
                jerry-hsieh-8268a1203
            </Link>
        ),
    },
];

const Contact = () => {
    return (
        <div className="content-page">
            <h1>Contact List</h1>
            <List
                bordered
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <a href="https://ant.design">{item.title}</a>
                            }
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Contact;
