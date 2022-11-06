import { useState } from "react";
import Fetch from "./Fetch";

function User() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = Fetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  console.log({ loading, error, data });
  const pages = 8;

  if (loading) {
    return <div className="load-error">Loading...</div>;
  }

  if (!loading && error) {
    return <div className="load-error">Error</div>;
  }

  return (
    <div className="User">
      <h1 className="title">List of Users</h1>

      <div className="details">
        {data?.results.map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
      </div>

      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      <div className="buttons">
        {
          <button
            className="prev-next"
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
        }

        <div className="pages">
          {Array.from({ length: pages }, (value, index) => index + 1).map(
            (each) => (
              <button className="set-page" onClick={() => setPage(each)}>
                {each}
              </button>
            )
          )}
        </div>

        {
          <button
            className="prev-next"
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        }
      </div>
    </div>
  );
}

export default User;
