import Image from "next/image";
import { Button } from "../ui/button";

export default function NavBar() {
  const NavItem = [
    { name: "About", value: "about" },
    { name: "Blog", value: "Blog" },
    { name: "Contact us", value: "Contact us" },
  ];
  return (
    <nav className="flex py-7 text-white items-center max-w-[80%] mx-auto justify-between">
      <div className="flex items-center">
        <Image
          className="w-24"
          src={"/logo.png"}
          width={980}
          height={1080}
          alt=""
        />
        <p>Making trust with blockchain charity</p>
      </div>
      <ul className="flex space-x-7 items-center">
        {NavItem.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
        <Button className="bg-[#65E4A3] hover:text-white text-black text-xl">
          Log In
        </Button>
      </ul>
    </nav>
  );
}
