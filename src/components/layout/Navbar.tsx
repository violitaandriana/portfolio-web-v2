import { LinkIcon } from "../LinkIcon";
import { Separator } from "../ui/separator";
import { Container } from "./Container";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="icons space-x-2">
            <LinkIcon link={"https://github.com/violitaandriana"} className="bx bxl-github" />
            <LinkIcon link={"https://id.linkedin.com/in/violita-andriana-widharma-917a22219"} className="bx bxl-linkedin" />
          </div>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <a href="#about" className="nav-link">
              About
            </a>
            <Separator orientation="vertical" />
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <Separator orientation="vertical" />
            <a href="#project" className="nav-link">
              Projects
            </a>
            <Separator orientation="vertical" />
            <a href="#footer" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
