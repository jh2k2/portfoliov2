import { Table, Tag, Space } from "antd";
import _ from "lodash";
import "./Proficiency.css";

const prof_arr = ["beginner", "intermediate", "advanced"];
const data = [
    {
        category: "Programming Language",
        name: "Java",
        prof: ["intermediate"],
    },
    {
        category: "Programming Language",
        name: "Javascript",
        prof: ["advanced"],
    },
    {
        category: "Programming Language",
        name: "Typescript",
        prof: ["advanced"],
    },
    {
        category: "Programming Language",
        name: "Python",
        prof: ["advanced"],
    },
    {
        category: "Programming Language",
        name: "C++",
        prof: ["intermediate"],
    },
    {
        category: "Programming Language",
        name: "C#",
        prof: ["beginner"],
    },
    {
        category: "Programming Language",
        name: "Go",
        prof: ["beginner"],
    },
    {
        category: "Programming Language",
        name: "Rust",
        prof: ["intermediate"],
    },
    {
        category: "Programming Language",
        name: "R",
        prof: ["beginner"],
    },
    {
        category: "Markup Language",
        name: "HTML",
        prof: ["advanced"],
    },
    {
        category: "Markup Language",
        name: "XML",
        prof: ["intermediate"],
    },
    {
        category: "Stylesheet Language",
        name: "LESS",
        prof: ["intermediate"],
    },
    {
        category: "Stylesheet Language",
        name: "CSS",
        prof: ["advanced"],
    },
    {
        category: "Stylesheet Language",
        name: "SASS",
        prof: ["beginner"],
    },
    {
        category: "Frontend Framework",
        name: "React",
        prof: ["advanced"],
    },
    {
        category: "Frontend Framework",
        name: "Angular",
        prof: ["advanced"],
    },
    {
        category: "Frontend Framework",
        name: "Vue",
        prof: ["beginner"],
    },
    {
        category: "OS Virtualization",
        name: "Docker",
        prof: ["advanced"],
    },
    {
        category: "Cloud Service",
        name: "AWS",
        prof: ["beginner"],
    },
    {
        category: "Cloud Service",
        name: "Heroku",
        prof: ["advanced"],
    },
    {
        category: "Build Tools",
        name: "Webpack",
        prof: ["advanced"],
    },
    {
        category: "Build Tools",
        name: "Vite",
        prof: ["intermediate"],
    },
    {
        category: "Build Tools",
        name: "Rollup",
        prof: ["intermediate"],
    },
]
    .map((data, pos) => ({
        ...data,
        key: pos,
    }))
    .sort((a, b) => prof_arr.indexOf(a.prof[0]) - 1)
    .sort((a, b) => (a.category > b.category ? 1 : -1));

const category_filter = _.uniqBy(
    data.map((obj) => ({
        text: obj.category,
        value: obj.category,
    })),
    "value"
);

const columns = [
    {
        title: "Category",
        dataIndex: "category",
        key: "category",
        filters: category_filter,
        onFilter: (value, record) => record.category === value,
        align: "center",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        align: "center",
    },
    {
        title: "Proficiency",
        key: "prof",
        dataIndex: "prof",
        align: "center",
        render: (prof) => (
            <>
                {prof.map((tag) => {
                    let color;
                    switch (tag) {
                        case "beginner":
                            color = "green";
                            break;
                        case "intermediate":
                            color = "yellow";
                            break;
                        case "advanced":
                            color = "orange";
                            break;
                        default:
                            color = "black";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const Proficiency = () => {
    return (
        <div>
            <h1>Proficiency</h1>
            <Table
                columns={columns}
                bordered
                dataSource={data}
                pagination={{ pageSize: 8, position: ["bottomCenter"] }}
            />
        </div>
    );
};

export default Proficiency;
