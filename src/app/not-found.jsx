import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not found.</h2>
      <Link href="/">Go back to the homepage!</Link>
    </div>
  );
};

export default NotFound;
