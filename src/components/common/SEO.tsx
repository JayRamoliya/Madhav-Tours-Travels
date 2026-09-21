import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
}

export const SEO = ({
  title,
  description,
  canonicalPath = "",
  image = "/og-image.jpg",
}: SEOProps) => {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://madhavtourstravels.in";

  const url = `${origin}${canonicalPath}`;

  const fullTitle = title.includes("Madhav Tours & Travels")
    ? title
    : `${title} | Madhav Tours & Travels`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${origin}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${origin}${image}`} />

      {/* Travel Agency Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Madhav Tours & Travels",
          url: origin,
          logo: `${origin}/logo.png`,
        })}
      </script>
    </Helmet>
  );
};