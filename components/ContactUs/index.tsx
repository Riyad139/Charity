import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <div className="text-center pb-14 ">
      <h1 className="text-3xl font-bold ">Stay connect with us</h1>
      <div className="my-7 flex gap-12">
        <Input placeholder="First Name" className="py-7" />
        <Input placeholder="Last Name" className="py-7" />
      </div>
      <div className="my-7 flex gap-12">
        <Input placeholder="Phone" className="py-7" />
        <Input placeholder="Subject" className="py-7" />
      </div>
      <Textarea rows={5} placeholder="Message" />
      <Button
        variant={"green"}
        className="text-black text-xl my-9 px-6 py-4 hover:text-white"
      >
        Send
      </Button>
    </div>
  );
}
