import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const D5_Section_Subscribe = () => {
  return (
    <section className="bg-slate-200 px-4 py-16">
      <div className="container flex flex-col items-center gap-12 text-center md:flex-row md:justify-between md:text-start">
        {/* Col */}
        <div className="flex w-full flex-col items-center gap-4 md:w-3/5 md:flex-row">
          <h4 className="text-xl font-bold text-foreground">
            Let&apos;s Stay in Touch
          </h4>
          <div className="flex w-full flex-1 flex-col items-center gap-2 rounded-lg bg-background p-1 md:flex-row">
            <Input
              type="email"
              placeholder="Enter your email..."
              className="border-transparent"
            />
            <Button
              type="submit"
              className="w-full bg-[#37C69A] hover:bg-[#37C69A]/80 md:w-max"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Col */}
        <div className="flex flex-col gap-2">SocialLinks</div>
      </div>
    </section>
  );
};

export default D5_Section_Subscribe;
