import React, { useState, useEffect } from "react";

type Skill = {
  type: string;
  level: number;
};

const Skills = ({ hue, saturation, skills } :{ hue: string, saturation: string, skills: Skill[]}) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(false);
    }, 500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={collapsed ? 'collapsed' : ''}>
      <ul className="skills no-bullet">
        {skills.map((skill: Skill, index: number) => (
          <li
            key={skill.type}
            style={{
              width: `${skill.level}%`,
              backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)`,
              transitionDelay: `${Math.round((100 / skill.level) * 100)}ms`,
            }}
          >
            <p>{skill.type}<span>{skill.level}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

