import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";
import javascript from "../assets/skills/javascript.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import windows from "../assets/skills/windows.svg";
import docker from "../assets/skills/docker.svg";
import git from "../assets/skills/git.svg";
import express from "../assets/skills/express.svg";
import gitlab from "../assets/skills/gitlab.svg";
import angular from "../assets/skills/AngularJS.png";
import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="Python" experience="1 years" img={python} />
          <SkillCard
            name="Javascript"
            experience="2.7 years"
            img={javascript}
          />
          <SkillCard name="React" experience="2 years" img={reactIcon} />
          <SkillCard name="Tailwind" experience="1 years" img={tailwind} />
          <SkillCard name="Angular" experience="2 years" img={angular} />
          <SkillCard name="Windows" experience="4 years" img={windows} />

          <SkillCard name="Docker" experience="1 years" img={docker} />
          <SkillCard name="Git" experience="3 years" img={git} />
          <SkillCard name="Express" experience="1 years" img={express} />
          <SkillCard name="Gitlab" experience="1 years" img={gitlab} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
