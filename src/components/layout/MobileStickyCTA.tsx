import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-white/92 p-3 backdrop-blur md:hidden">
      <Button href="/" className="flex w-full justify-center">
        [PARTECIPA]
      </Button>
    </div>
  );
}
