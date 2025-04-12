import { Container } from "../layout/Container";
import { Button } from "../ui/button";

function AboutSection() {
  return (
    <section id="about" className="flex items-center min-h-screen">
      <Container>
        <h1 className="scroll-m-20 text-5xl md:text-7xl font-extrabold tracking-tight">
          Hello, I'm <span className="text-rose-400">Violita Andriana</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Web Developer | System Analyst
        </p>
        <div className="badge-group mt-10 flex gap-2">
          <Button className="hover:cursor-pointer" variant="outline">
            <a href="#footer">Contact me</a>
          </Button>
          <Button className="bg-rose-400 hover:bg-rose-500 hover:cursor-pointer">
            <a href="#project">See my works</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
