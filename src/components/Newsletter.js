import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import img from "../../public/newsImg.png";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="bg-[#333] rounded-lg pt-8 pl-8 pr-8 flex items-center justify-between max-w-5xl mx-auto">
      <div className="flex flex-col space-y-4">
        <h2 className="text-white text-3xl font-bold">
          Get Latest Job Updates
        </h2>
        <p className="text-gray-300">
          Sign up with your email address to receive news and updates.
        </p>
        <form className="flex">
          <Input
            className="rounded-md border-0"
            placeholder="Enter your email"
            type="email"
          />
          <Button className="ml-4 bg-purple-600 text-white p-1 rounded-sm">
            Subscribe
          </Button>
        </form>
      </div>
      <Image
        alt="Happy professional"
        className="hidden lg:block rounded-full"
        height="350"
        src={img}
        style={{
          aspectRatio: "200/200",
          objectFit: "contain",
          marginTop: "-100px",
        }}
        width="300"
      />
    </section>
  );
}
