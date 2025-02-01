import ProjectsData from "./ProjectsData";
import Image from "next/image";
import BodyButton from "@/components/button/bodybutton/BodyButton";
import Styles from "../projects/projects.module.css";

export default function Projects() {
  return (
    <div className={Styles.projects}>
      {ProjectsData.map((project) => (
        <div key={project.id} className={Styles.cardProjects}>
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <BodyButton text="View My work" link={project.link} />
        </div>
      ))}
    </div>
  );
}
