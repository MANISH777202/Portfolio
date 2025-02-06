import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiMysql,
} from "react-icons/si"; // Added SiMysql

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    MySQL: <SiMysql />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
