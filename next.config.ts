import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    images: { unoptimized: true },
    output: "export",
    trailingSlash: true,
    pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
    options: {
        remarkPlugins: ["remark-gfm"],
    },
});

export default withMDX(nextConfig);
