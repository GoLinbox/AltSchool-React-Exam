import Navigation from "../Navigation/nav";
import Page1 from "../first-page";

function Home() {
  return (
    <section className="container">
      <section className="navigation">
        <Navigation />
        <Page1 />
      </section>
    </section>
  );
}

export default Home;
