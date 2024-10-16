import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <>
      <nav className="border-b py-4 px-4 flex items-center justify-between font-semibold">
        {" "}
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-36"
        />{" "}
        <div className="flex gap-2 font-semibold">
          {menuList?.map((item) => {
            return (
              <Link href={item?.link}>
                <button>{item?.name}</button>
              </Link>
            );
          })}
        </div>
        <Link href={"/login"}><button className="bg-blue-600 rounded-full px-5 py-2 text-white">login</button></Link>
      </nav>
    </>
  );
}
