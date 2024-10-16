import Image from "next/image";

export default function page() {
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 min-h-screen">
      <section>
        <Image src={"/logo.png"} width={200} height={200} className="w-26" />
      </section>
    </main>
  );
}
