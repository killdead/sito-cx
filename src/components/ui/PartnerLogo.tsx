interface PartnerLogoProps {
  name: string;
  logo: string;
  url?: string;
}

export function PartnerLogo({ name, logo, url }: PartnerLogoProps) {
  const img = (
    <div className="flex h-24 w-full items-center justify-center transition-all duration-300 ease-out hover:scale-105 hover:opacity-70">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        className="h-full w-auto max-w-full object-contain"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
        {img}
      </a>
    );
  }

  return img;
}
