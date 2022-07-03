import { Header } from "./header";
import { Footer } from "./footer";
import { Home } from "./home";

export function App() {
  return (
    <div id="headerAndFooter" style={{ backgroundColor: "#F3F3F3" }}>
      <section id="header">
        <Header />
      </section>
      <section id="content">
        <div className="container bg-light shadow rounded-3 ">
          <Home />
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
