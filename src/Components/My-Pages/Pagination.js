import Navigation from "../Navigation/nav";
import User from "../Pagination/user";

function Pagination() {
  return (
    <section className="container">
      <section className="navigation">
        <Navigation />
      </section>
      <section className="my-data">
        <User />
      </section>
    </section>
  );
}

export default Pagination;
