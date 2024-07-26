import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not found</h2>
      <Link href="/">click to return home</Link>
    </div>
  );
}
