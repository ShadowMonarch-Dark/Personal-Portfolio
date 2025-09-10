import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "Auth0", icon: "auth0.svg" },
    { name: "Blazor", icon: "blazor.svg" },
    { name: "C++", icon: "cplusplus.svg" },
    { name: "C#", icon: "csharp.svg" },
    { name: "CSS3", icon: "css3.svg" },
    { name: ".NET", icon: "dotnet.svg" },
    { name: ".NET Core", icon: "dotnetcore.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "HTML5", icon: "html5.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "Microsoft", icon: "microsoft.svg" },
    { name: "React", icon: "react.svg" },
    { name: "SQLite", icon: "sqlite.svg" },
    { name: "TailwindCSS", icon: "tailwindcss.svg" },
    { name: "ViteJS", icon: "vitejs.svg" },
    { name: "WordPress", icon: "wordpress.svg" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer orbit */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon
            key={index}
            src={`assets/logos/${skill.icon}`}
            name={skill.name}
          />
        ))}
      </OrbitingCircles>

      {/* Inner orbit (reversed, smaller icons, faster speed) */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon
              key={index}
              src={`assets/logos/${skill.icon}`}
              name={skill.name}
            />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => (
  <img
    src={src}
    alt={`${name} logo`}
    className="duration-300 rounded-sm hover:scale-110 hover:drop-shadow-md transition-transform ease-in-out"
  />
);
