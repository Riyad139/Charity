import Image from "next/image";
import { Button } from "../ui/button";

export default function OurSolution() {
  return (
    <section className="flex py-28 flex-col items-center">
      <h2 className="text-5xl font-bold">Our solutions</h2>
      <p className="my-11 text-lg">
        At Charity Verification, we offer a revolutionary solution to ensure
        transparency and accountability in charitable giving through blockchain
        technology. Our platform utilizes the immutable and decentralized nature
        of blockchain to track donations, verify charitable organizations, and
        provide donors with real-time insights into how their contributions are
        making an impact.
      </p>
      <div className="flex gap-7 text-white">
        <div className="bg-[#0A2640] p-7  rounded-lg flex flex-col items-center">
          <Image
            className="w-64"
            src={"/human.png"}
            width={1920}
            height={1080}
            alt="human"
          />
          <p>Transparency</p>
          <p>anyone can view the team donation page</p>
        </div>
        <div className="bg-[#0A2640] p-7  rounded-lg flex flex-col items-center">
          <Image
            className="w-64"
            src={"/human.png"}
            width={1920}
            height={1080}
            alt="human"
          />
          <p>Transparency</p>
          <p>anyone can view the team donation page</p>
        </div>
        <div className="bg-[#0A2640] p-7  rounded-lg flex flex-col items-center">
          <Image
            className="w-64"
            src={"/human.png"}
            width={1920}
            height={1080}
            alt="human"
          />
          <p>Transparency</p>
          <p>anyone can view the team donation page</p>
        </div>
      </div>
      <div className="my-36 flex ">
        <Image
          className="w-[50%] h-[25rem] object-cover rounded-2xl"
          src={"/child.jpeg"}
          width={1920}
          height={1080}
          alt="child"
        />
        <div className="px-12">
          <div className="max-w-96">
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
        </div>
      </div>
    </section>
  );
}
