import { Container } from "../layout/Container";

import htmlLogo from "../../assets/html.svg";
import htmlLogoHover from "../../assets/html-c.svg";
import cssLogo from "../../assets/css.svg";
import cssLogoHover from "../../assets/css-c.svg";
import jsLogo from "../../assets/js.svg";
import jsLogoHover from "../../assets/js-c.svg";
import reactLogo from "../../assets/react.svg";
import reactLogoHover from "../../assets/react-c.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import tailwindLogoHover from "../../assets/tailwind-c.svg";
import laravelLogo from "../../assets/laravel.svg";
import laravelLogoHover from "../../assets/laravel-c.svg";
import postgresqlLogo from "../../assets/postgresql.svg";
import postgresqlLogoHover from "../../assets/postgresql-c.svg";
import figmaLogo from "../../assets/figma.svg";
import figmaLogoHover from "../../assets/figma-c.svg";
import gitLogo from "../../assets/git.svg";
import gitLogoHover from "../../assets/git-c.svg";
import drawioLogo from "../../assets/drawio.svg";
import drawioLogoHover from "../../assets/drawio-c.svg";
import excelLogo from "../../assets/excel.svg";
import excelLogoHover from "../../assets/excel-c.svg";
import wordLogo from "../../assets/word.svg";
import wordLogoHover from "../../assets/word-c.svg";
import { LogoIcon } from "../LogoIcon";
import { CertificateCard } from "../CertificateCard";

function SkillSection() {
  return (
    <section
      id="experience"
      className="flex items-center min-h-screen bg-beige"
    >
      <Container>
        <h1 className="scroll-m-20 mb-6 sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-rose-400">
          Skills
        </h1>
        <div className="skills grid lg:grid-cols-12 md:grid-cols-6 grid-cols-4 gap-12">
          <LogoIcon
            src={htmlLogo}
            hoverSrc={htmlLogoHover}
            alt="HTML Logo"
            label="HTML"
          />
          <LogoIcon
            src={cssLogo}
            hoverSrc={cssLogoHover}
            alt="CSS Logo"
            label="CSS"
          />
          <LogoIcon
            src={jsLogo}
            hoverSrc={jsLogoHover}
            alt="JS Logo"
            label="JS"
          />
          <LogoIcon
            src={reactLogo}
            hoverSrc={reactLogoHover}
            alt="React Logo"
            label="React"
          />
          <LogoIcon
            src={laravelLogo}
            hoverSrc={laravelLogoHover}
            alt="Laravel Logo"
            label="Laravel"
          />
          <LogoIcon
            src={postgresqlLogo}
            hoverSrc={postgresqlLogoHover}
            alt="Postgresql Logo"
            label="PostgreSQL"
          />
          <LogoIcon
            src={gitLogo}
            hoverSrc={gitLogoHover}
            alt="Git Logo"
            label="Git"
          />
          <LogoIcon
            src={tailwindLogo}
            hoverSrc={tailwindLogoHover}
            alt="Tailwind Logo"
            label="Tailwind"
          />
          <LogoIcon
            src={figmaLogo}
            hoverSrc={figmaLogoHover}
            alt="Figma Logo"
            label="Figma"
          />
          <LogoIcon
            src={drawioLogo}
            hoverSrc={drawioLogoHover}
            alt="Drawio Logo"
            label="Drawio"
          />
          <LogoIcon
            src={excelLogo}
            hoverSrc={excelLogoHover}
            alt="Excel Logo"
            label="Excel"
          />
          <LogoIcon
            src={wordLogo}
            hoverSrc={wordLogoHover}
            alt="Word Logo"
            label="Word"
          />
        </div>
        <h1 className="scroll-m-20 my-6 sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-rose-400">
          Certificates
        </h1>
        <div className="certificates grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificateCard
            title="Responsive Web Design"
            description="freeCodeCamp | 2022"
          />
          <CertificateCard
            title="Mobile Developer Course (React Native)"
            description="Digital Talent Scholarship (Progate) | 2024"
          />
          <CertificateCard
            title="Belajar Analisis Data dengan Python"
            description="Dicoding | 2023"
          />
          <CertificateCard
            title="English Proficiency Test (EPT) / TOEFL PBT"
            description="Score: 570 | 2024"
          />
        </div>
      </Container>
    </section>
  );
}

export default SkillSection;
