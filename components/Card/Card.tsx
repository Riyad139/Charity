import Image from "next/image";

export default function Card() {
  return (
    <div>
      <Image src={"/human.png"} width={1920} height={1080} alt="human" />
      <p>Transparency</p>
      <p>anyone can view the team donation page</p>
    </div>
  );
}
