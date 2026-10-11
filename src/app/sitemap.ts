import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://acda.kr";

const POLICY_PATHS = [
  "/policy/terms/",
  "/policy/license/",
  "/policy/privacy/",
  "/policy/email-collection/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...POLICY_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
