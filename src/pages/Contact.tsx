import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-lg space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <Input placeholder="Your name" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <Input type="email" placeholder="Your email" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <Textarea placeholder="Write your message..." />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}