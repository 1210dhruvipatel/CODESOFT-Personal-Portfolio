import { DiMysql } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const skillData = [
    {
        icon: <FaHtml5 />,
        name: 'HTML'
    },
    {
        icon: <FaCss3Alt/>,
        name: 'CSS'
    },
    {
        icon: <FaBootstrap/>,
        name: 'Bootstrap'
    },
    {
        icon: <RiTailwindCssFill/>,
        name: 'Tailwind CSS'
    },
    {
        icon: <IoLogoJavascript />,
        name: 'Javascript'
    },
    {
        icon: <FaReact />,
        name: 'React JS'
    },
    {
        icon: <FaNode />,
        name: 'Node JS'
    },
    {
        icon: <SiExpress />,
        name: 'Express'
    },
    {
        icon: <DiMysql />,
        name: 'SQL'
    },
    {
        icon: <SiMongodb />,
        name: 'MongoDB'
    },
    {
        icon: <FaJava />,
        name: 'Java'
    },
    {
        icon: <FaPython />,
        name: 'Python'
    },
]
export default skillData;