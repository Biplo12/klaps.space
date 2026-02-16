import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getMovies } from "@/lib/movies";
import { getCinemas } from "@/lib/cinemas";
import { getCities } from "@/lib/cities";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const [moviesResponse, cinemasResponse, cities] = await Promise.all([
    getMovies({ page: 1, limit: 1000 }),
    getCinemas({ limit: 1000 }),
    getCities(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/seanse`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/filmy`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/kina`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/miasta`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/o-projekcie`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/jak-to-dziala`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/kontakt`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/regulamin`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${SITE_URL}/dostepnosc`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${SITE_URL}/mapa-witryny`, changeFrequency: "weekly", priority: 0.2 },
  ];

  const moviePages: MetadataRoute.Sitemap = moviesResponse.data.map(
    (movie) => ({
      url: `${SITE_URL}/filmy/${movie.id}`,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })
  );

  const cinemaPages: MetadataRoute.Sitemap = cinemasResponse.data.flatMap(
    (group) =>
      group.cinemas.map((cinema) => ({
        url: `${SITE_URL}/kina/${cinema.id}`,
        changeFrequency: "daily" as const,
        priority: 0.6,
      }))
  );

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/miasta/${city.id}`,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...moviePages, ...cinemaPages, ...cityPages];
};

export default sitemap;
