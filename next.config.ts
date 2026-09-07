import type { NextConfig } from "next";

/**
 * GitHub Pages: project site живёт по пути /aybaza-site
 * Vercel: корень домена, basePath не нужен
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Статический экспорт — нужен для GitHub Pages
  output: "export",
  // Картинки без серверного оптимизатора (обязательно при output: export)
  images: {
    unoptimized: true,
  },
  // Только для GitHub Pages
  basePath: isGithubPages ? "/aybaza-site" : "",
  assetPrefix: isGithubPages ? "/aybaza-site" : "",
  trailingSlash: true,
};

export default nextConfig;
