import { Timeline, Typography, Popover, Collapse } from "antd";
import { StarFilled } from "@ant-design/icons";
import "./Career.css";

const { Paragraph } = Typography;
const { Panel } = Collapse;

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const data = [
    {
        year: 2019,
        month: 9,
        text: "Participated in OmniHacks",
        detail: "I used my minimal Java knowledge to create a GUI based game.",
    },
    {
        year: 2019,
        month: 9,
        text: "Participated in HyphenHacks",
        detail:
            "Attempted to use Healthcare API to create recommendation, but couldn't finish on time.",
    },
    {
        year: 2019,
        month: 10,
        text: "Participated in MissionHacks",
        detail:
            "This hackathon was my introduction to Web Programming. I made a website with animations using Javascript and JQuery.",
    },
    {
        year: 2019,
        month: 10,
        text: "Participated in SolarHacks",
        detail: "I used Tensorflow along with CV2 to create a text reader.",
    },
    {
        year: 2021,
        month: 1,
        text: "Participated in NewYearHacks",
        detail:
            "I used Object Detection API and custom data to train a model that checks whether a person has a mask on or not. Then integrate it into a Flask Application.",
    },
    {
        year: 2021,
        month: 4,
        important: true,
        text: "Official Web Developer for a Tech Company",
        detail:
            "I started working as a full-time web developer at a Tech Company(RealTime 即時互動科技) in Kaohsiung, Taiwan.",
    },
    {
        year: 2020,
        month: 1,
        text: "Participated in UCIHacks",
        detail:
            "I was really bored so I made a Chrome Extension that blocks everything except the advertisements. Yes, you read it right, it blocks every non-advertisement element.",
    },
    {
        year: 2020,
        month: 3,
        text: "Started Freelancing on Fiverr",
        important: true,
        detail:
            "I started making web applications/scripts for customer on Fiverr.com.",
    },
    {
        year: 2020,
        month: 8,
        text: "Full Stack Developer for an Estate Startup",
        important: true,
        detail:
            'As I work as a freelancer on Fiverr, I received a request to work on a website from a startup titled "Homefetch". Since I was the only developer, I handled pretty much everything; from Frontend design, framework, all the way to database, password encryption, server, and AWS hosting.',
    },
    {
        year: 2021,
        month: 3,
        text: "Participated in LAHacks",
        detail:
            "I created a Ecosystem simulation using Rust and its Piston package.",
    },
    {
        year: 2021,
        month: 8,
        text: "Started a Web Development Club",
        important: true,
        detail:
            "I established a Web Development Club as the the president of the club, at my College.",
    },
];

const TimelineItemGenerator = (props) => {
    const months_obj = data
        .filter((obj) => obj.year === props.year)
        .sort((a, b) => a.month - b.month);
    return (
        <Timeline mode="alternate">
            {months_obj.map((obj, key) => {
                if (obj.important) {
                    return (
                        <Timeline.Item
                            key={key}
                            dot={<StarFilled style={{ color: "#a50000" }} />}
                            style={{ color: "#a50000" }}
                        >
                            <Popover
                                content={
                                    <div
                                        style={{
                                            wordBreak: "break-word",
                                            width: "40vw",
                                        }}
                                    >
                                        {obj.detail}
                                    </div>
                                }
                                title={months[obj.month - 1]}
                            >
                                {`[${months[obj.month - 1]}] ${obj.text}`}
                            </Popover>
                        </Timeline.Item>
                    );
                }
                return (
                    <Timeline.Item key={key}>
                        <Popover
                            content={
                                <div
                                    style={{
                                        wordBreak: "break-word",
                                        width: "40vw",
                                    }}
                                >
                                    {obj.detail}
                                </div>
                            }
                            title={months[obj.month - 1]}
                        >
                            {`[${months[obj.month - 1]}] ${obj.text}`}
                        </Popover>
                    </Timeline.Item>
                );
            })}
        </Timeline>
    );
};

const Career = () => {
    const years = data
        .filter(
            (obj, pos, a) => a.findIndex((t) => t.year === obj.year) === pos
        )
        .map((obj) => obj.year)
        .sort((a, b) => a - b);

    return (
        <div className="career-content">
            <h1>Career</h1>
            <Paragraph>
                Select a year to see the activities of that year. Hover over
                text to see detail.
            </Paragraph>
            <Collapse accordion defaultActiveKey={["0"]}>
                {years.map((y, pos) => (
                    <Panel header={y} key={pos}>
                        <div className="timeline-content">
                            <TimelineItemGenerator
                                year={y}
                            ></TimelineItemGenerator>
                        </div>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};

export default Career;
