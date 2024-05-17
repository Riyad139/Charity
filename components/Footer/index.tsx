import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex text-white justify-between py-20">
      <div className="space-y-10">
        <Image
          src={"/logo.png"}
          className="w-14"
          width={1920}
          height={1080}
          alt="logo"
        />
        <p>Making trust with blockchain charity</p>
      </div>
      <div className="space-y-2">
        <p>About us</p>
        <p>Volunteer</p>
        <p>Donation</p>
        <p>Events</p>
        <p>Contact us</p>
      </div>
      <div className="space-y-2">
        <p>Official Info</p>
        <p>+8801303583641</p>
        <p>Mail@trustchain.com</p>
      </div>
    </div>
  );
}
