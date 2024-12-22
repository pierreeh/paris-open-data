import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <p>
      Page not found <Link to="/">Go back home</Link>
    </p>
  );
}
