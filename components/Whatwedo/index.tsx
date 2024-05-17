import { Button } from "../ui/button";
import Image from "next/image";

export default function Whatwedo() {
  return (
    <div className="flex text-white  ">
      <div className="flex bg-slate-900 justify-end pl-32 py-16 rounded-r-full  w-[70%]">
        <div className="max-w-">
          <p className="text-3xl font-bold">
            We bridge our clients with excellence, ensuring they thrive and
            remain resilient in an ever-evolving landscape
          </p>
          <ul className="mt-5 mx-5 space-y-3">
            <li className="list-disc">
              We connect our customers with the best.
            </li>
            <li className="list-disc">Real Time Track The Donner profile</li>
            <li className="list-disc">Web3 Domain name </li>
          </ul>
          <Button
            variant={"green"}
            className="mt-10 text-black hover:text-white"
          >
            Trust is a power
          </Button>
        </div>
        <Image
          src={"/Frame.png"}
          className="w-96 object-cover"
          alt="frame"
          width={1920}
          height={1080}
        />
      </div>
      <div className="w-[30%] relative -z-10 -ml-16">
        <Image
          className="w-full  h-full object-cover"
          src={"/child2.jpeg"}
          alt=""
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
