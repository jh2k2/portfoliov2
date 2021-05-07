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

            <div className="about-content">
                <h1>Hi there! Welcome to my website</h1>
                <p className="about-paragraph">
                    My name is Chun Li Hsieh(Jerry Hsieh). I am currently an
                    undergraduate student pursuing an Electrical Engineering and
                    Computer Science Degree. I am working a full time job as a
                    web developer at RealTime 即時互動科技 at Kaohsiung, Taiwan.
                </p>
                <br />
                <p className="about-paragraph">
                    I am doing Computer Science as both hobby and profession. I
                    enjoyed all field of Computer Science, and eagered to try
                    out new technologies. However, I am currently most
                    knowledgable in web development.
                </p>
            </div>
        </div>
    );
};

export default Home;
