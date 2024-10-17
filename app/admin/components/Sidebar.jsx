import {
  LayoutDashboard,
  UserRound,
  ShoppingCart,
  Star,
  LibraryBig,
  Box,
  Package,
  Cat,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const menuList = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Customers",
      link: "/admin/customets",
      icon: <UserRound />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Package />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <Cat />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <Box />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig />,
    },
  ];

  return (
    <section className="border-r bg-white px-5 py-3 h-screen overflow-hidden md:w-[260px] flex flex-col gap-8 ">
      <div className="flex justify-center">
        <Image
          src={"/logo.png"}
          alt="logo image"
          width={200}
          height={200}
          className="w-32"
        />
      </div>
      <ul className="flex-1 flex flex-col gap-5 h-full overflow-y-auto">
        {menuList?.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <li className="flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:font-semibold p-2 rounded-md ease-soft-spring transition-all duration-300">
                {item.icon}
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <button className="flex  gap-2  hover:bg-red-500 hover:text-white hover:font-semibold p-2 rounded-md" ><LogOut/> Logout</button>
    </section>
  );
}
