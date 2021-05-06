import "./Home.css";
import { Divider, Image } from "antd";

const Home = () => {
    return (
        <div className="home-content">
            <Image
                className="home-img"
                preview={false}
                src="assets/image/home-avatar.jpg"
            />
            <h1>Hi there! My name is Jerry Hsieh</h1>

            <Divider />
        </div>
    );
};

export default Home;
