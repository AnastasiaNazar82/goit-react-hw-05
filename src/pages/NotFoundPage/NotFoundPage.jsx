import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, not found page! Return to<Link to="/">Home</Link>!
      </p>
    </div>
  );
}
