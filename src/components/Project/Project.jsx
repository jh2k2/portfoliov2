import { useState } from "react";
import { Divider, Typography, Card, Image, Pagination, Button } from "antd";
import { GithubOutlined, FileTextOutlined, ToolOutlined, FileTextFilled, ToolFilled } from "@ant-design/icons";
import "./Project.css";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const card_per_page = 3;

const tmp_data = [
	{
		image: "assets/image/project-gallery-homefetch.png",
		title: "Homefetch",
		description: "A home renting website made using MEAN stack.",
		tools: ["MongoDB", "Angular", "Express", "Node"],
		link: "https://github.com/jh2k2/homefetch",
	},
	{
		image: "assets/image/project-gallery-flaskmask.png",
		title: "Flask Mask",
		description: "A Flask site that checks if facemask is worn.",
		tools: ["Flask", "Object Detection API"],
		link: "https://github.com/jh2k2/flaskmask",
	},
	{
		image: "assets/image/project-gallery-prey.png",
		title: "Prey vs Predator",
		description: "Ecosystem simulation made using Rust.",
		tools: ["Piston", "Cargo"],
		link: "https://github.com/jh2k2/prey-predator-rust",
	},
	{
		image: "assets/image/project-gallery-portv1.png",
		title: "Portfolio Website v1",
		description: "Portfolio Site made using Angular.",
		tools: ["Angular"],
		link: "https://github.com/jh2k2/portfolio",
	},
	{
		image: "assets/image/project-gallery-portv2.png",
		title: "Portfolio Website v2",
		description: "Portfolio Site made using React.",
		tools: ["React", "Ant Design"],
		link: "https://github.com/jh2k2/portfoliov2",
	},
	{
		image: "assets/image/project-gallery-schedule.png",
		title: "React Planner",
		description: "Schedule planning site made using React.",
		tools: ["React"],
		link: "https://github.com/jh2k2/react-planner",
	},
];

const IndividualCard = (props) => {
	const [state, setState] = useState({ key: "━━ Description ━━" });

	function description_getter(obj, key) {
		switch (key) {
			case "━━ Tools ━━":
				return obj.tools.join(" • ");
			case "━━ Description ━━":
				return obj.description;
			default:
				return "Text not found";
		}
	}
	return (
		<Card
			actions={[
				state.key === "━━ Description ━━" ? (
					<FileTextFilled style={{ color: "#e85a4f" }} key="description" onClick={() => setState({ key: "━━ Description ━━" })} />
				) : (
					<FileTextOutlined key="description" onClick={() => setState({ key: "━━ Description ━━" })} />
				),
				state.key === "━━ Tools ━━" ? (
					<ToolFilled style={{ color: "#e85a4f" }} key="tool" onClick={() => setState({ key: "━━ Tools ━━" })} />
				) : (
					<ToolOutlined key="tool" onClick={() => setState({ key: "━━ Tools ━━" })} />
				),
				<GithubOutlined
					key="github"
					onClick={() => {
						window.open(props.data.link);
					}}
				/>,
			]}
			title={props.data.title}
			loading={!props.data}
			className="gallery-card"
			cover={
				<Image
					alt="Project img"
					src={props.data.image}
					height={200}
					fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
				/>
			}
			hoverable={true}
		>
			<Meta title={state.key} description={description_getter(props.data, state.key)} />
		</Card>
	);
};

const ProjectGallery = (props) => {
	let data_arr = [];
	for (let i = 0; i < Math.ceil(props.data.length / card_per_page); i++) {
		let tmp_arr = [];
		for (let ii = 0; ii < card_per_page; ii++) {
			if (props.data[ii + i * card_per_page]) tmp_arr.push(<IndividualCard key={ii + i * card_per_page} data={props.data[ii + i * card_per_page]} />);
		}

		data_arr.push(tmp_arr);
	}
	//todo link to api
	return <div>{data_arr[props.page - 1]}</div>;
};

const Project = () => {
	let data = tmp_data;
	const [page, setPage] = useState(1);
	return (
		<div>
			<Title>My Beautiful Project Gallery~</Title>
			<Paragraph>
				Or go to my{"  "}
				<Button shape="circle" href="https://www.github.com/jh2k2">
					<GithubOutlined style={{ color: "red" }}></GithubOutlined>
				</Button>
				{"  "}
				lol
			</Paragraph>
			<Divider></Divider>
			<div className="gallery-content">
				<ProjectGallery data={data} page={page} />
				<Pagination
					simple
					defaultCurrent={1}
					pageSize={card_per_page}
					total={data.length}
					onChange={(pg) => {
						setPage(pg);
					}}
				/>
			</div>
		</div>
	);
};

export default Project;
