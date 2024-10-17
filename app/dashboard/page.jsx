import Link from "next/link";

export default function Dashboard() {
  return <main className="p-10">
    <Link href={"/admin"}>Admin Panel</Link>
  </main>;
}
