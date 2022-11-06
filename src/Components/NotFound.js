import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="not-found">
      <img className="NotFound-logo" src={"/Logo/GoLinbox-1.png"} alt="Logo" />
      <h1>Oops! This page does not exist</h1>
      <div className="sol">
        <p>Navigate back to</p>
        <Link to="/">Home</Link>
        <p>Or</p>
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
}
