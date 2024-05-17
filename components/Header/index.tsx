import { Button } from "../ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex py-20 gap-28 text-white">
      <div className="w-[50%]">
        <h1 className="text-6xl mt-7">
          Via Blockchain, Making the World a Better Place
        </h1>
        <p className="text-lg my-9">
          Welcome to Charity Verification with Blockchain, where transparency
          meets trust in the world of philanthropy.
        </p>
        <Button
          variant={"green"}
          className="text-black text-xl hover:text-white"
        >
          Create Account
        </Button>
      </div>
      <div className="w-[50%] flex justify-end">
        <Image
          src={"/header.svg"}
          width={1920}
          height={1080}
          className="w-[60%]"
          alt="header svg"
        />
      </div>
    </div>
  );
}
