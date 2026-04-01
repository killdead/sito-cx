import { GALLERY_ITEMS } from "@/data/site";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function GallerySection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Media"
          title="Gallery"
          description="Foto reali, contenuti brevi e materiali pensati per raccontare il festival in modo credibile."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              <MediaPlaceholder
                label={item.label}
                mediaType={item.type === "video" ? "Video" : "Immagine"}
                searchHint={item.src}
                tone={item.type === "video" ? "red" : "sky"}
                className="min-h-[18rem]"
              />
              <div className="absolute left-4 top-4">
                <PlaceholderBadge label={item.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
