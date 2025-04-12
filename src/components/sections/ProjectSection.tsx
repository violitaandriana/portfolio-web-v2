import { Container } from "../layout/Container";

import ProjectCard from "../ProjectCard";

function ProjectSection() {
  return (
    <section id="project" className="flex items-center min-h-screen py-20">
      <Container>
        <h1 className="scroll-m-20 mb-6 sm:text-2xl lg:text-4xl font-extrabold tracking-tight">
          Projects
        </h1>
        <div className="grid lg:grid-cols-2 gap-8 grid-cols-1">
          <ProjectCard
            title="Wood Store Management System"
            description={
              <>
                "I designed and developed a complete wood store management
                system using <strong>Laravel and RESTful APIs</strong>. The
                system handles essential business operations such as{" "}
                <strong>
                  production, purchasing, sales, inventory tracking, and
                  accounting."
                </strong>
                <br />
                "My focus was on creating a solution that not only works
                efficiently but also provides{" "}
                <strong>a clean and user-friendly experience.</strong>"
              </>
            }
            techStack={[
              "Laravel",
              "REST API",
              "MySQL",
              "JavaScript",
              "Tailwind",
              "Git",
            ]}
            link="https://github.com/violitaandriana"
          />
          <ProjectCard
            title="Return Merchandise Authorization (RMA)"
            description={
              <>
                "During my internship, I contributed to{" "}
                <strong>front-end development</strong> by resolving bugs,
                implementing four new menu features, and enhancing system
                functionality through minor improvements, utilizing{" "}
                <strong>React JS and Ant Design</strong>. Additionally, I
                contributed to <strong>software documentation </strong>
                by creating{" "}
                <strong>
                  functional specification documents and a user guide."
                </strong>
              </>
            }
            techStack={[
              "React",
              "Axios",
              "REST API",
              "Ant Design",
              "Git",
              "Asana",
            ]}
            link="https://rma.dwp.io/"
          />
          <ProjectCard
            title="Movie App using React Native"
            description={
              <>
                "I developed a movie application leveraging the TMDB (The Movie
                Database) API as part of the Mobile Developer Course by Progate,
                under the{" "}
                <strong>
                  Digital Talent Scholarship 2024 Program by Kominfo
                </strong>
                . The application features three primary sections: Home, Search,
                and Favorites."
              </>
            }
            techStack={["React Native", "TypeScript", "Expo", "Git"]}
            link="https://github.com/violitaandriana/progate-movie-app"
          />
          <ProjectCard
            title="Church Website"
            description={
              <>
                "I contributed to the development of the GPPS Sepanjang Website,
                as a member of the back-end team. I was responsible for{" "}
                <strong>
                  managing the events, livestream, integrating three core
                  services, and facilitating the platform for church ministries
                </strong>
                . My work ensured that these elements were effectively displayed
                on the website for user access."
              </>
            }
            techStack={["HTML", "CSS", "PHP", "MySQL", "Bootstrap"]}
            link="https://gpps-sepanjang.my.id/"
          />
        </div>
      </Container>
    </section>
  );
}

export default ProjectSection;
