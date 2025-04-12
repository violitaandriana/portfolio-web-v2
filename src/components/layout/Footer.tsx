import { LinkIcon } from "../LinkIcon";
import { Container } from "./Container";

const cards = [
  {
    href: "mailto:violitaandriana2003@gmail.com",
    target: "_blank",
    i: "bx bxs-envelope",
    text: "violitaand1306@gmail.com",
  },
  {
    href: "https://github.com/violitaandriana",
    target: "_blank",
    i: "bx bxl-github",
    text: "@violitaandriana",
  },
  {
    href: "https://id.linkedin.com/in/violita-andriana-widharma-917a22219",
    target: "_blank",
    i: "bx bxl-linkedin",
    text: "Violita Andriana Widharma",
  },
];

function Footer() {
  return (
    <section id="footer">
      <Container>
        <div className="card-container space-x-4 text-center mt-4 mb-2">
          {cards.map((card) => (
            <LinkIcon link={card.href} className={card.i} />
          ))}
        </div>
        <footer className="text-center mb-8">
          © Copyright {new Date().getFullYear()}, Violita Andriana
        </footer>
      </Container>
    </section>
  );
}

export default Footer;
