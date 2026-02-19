import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cspdin.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/internal-advisory-committee',
        destination: 'https://cspdin.wordpress.com/internal-advisory-committee/',
      },
      {
        source: '/expert-advisory-board',
        destination: 'https://cspdin.wordpress.com/expert-advisory-board/',
      },
      {
        source: '/team-associate-members',
        destination: 'https://cspdin.wordpress.com/team-associate-members/',
      },
      {
        source: '/team-members',
        destination: 'https://cspdin.wordpress.com/team-members/',
      },
      {
        source: '/research-population-dynamics',
        destination: 'https://cspdin.wordpress.com/research-population-dynamics/',
      },
      {
        source: '/research-health-and-care-economy',
        destination: 'https://cspdin.wordpress.com/research-health-and-care-economy/',
      },
      {
        source: '/research-human-capital-and-labour-markets',
        destination: 'https://cspdin.wordpress.com/research-human-capital-and-labour-markets/',
      },
      {
        source: '/research-technology-and-innovation',
        destination: 'https://cspdin.wordpress.com/research-technology-and-innovation/',
      },
      {
        source: '/research-food-and-ecology',
        destination: 'https://cspdin.wordpress.com/research-food-and-ecology/',
      },
      {
        source: '/intitiatives-lecture-series',
        destination: 'https://cspdin.wordpress.com/intitiatives-lecture-series/',
      },
      {
        source: '/hopes-conference',
        destination: 'https://cspdin.wordpress.com/hopes-conference/',
      },
      {
        source: '/intitiatives-training',
        destination: 'https://cspdin.wordpress.com/intitiatives-training/',
      },
      {
        source: '/intitiatives-doctoral-colloquium',
        destination: 'https://cspdin.wordpress.com/intitiatives-doctoral-colloquium/',
      },
      {
        source: '/intitiatives-faculty-student-exchanges',
        destination: 'https://cspdin.wordpress.com/intitiatives-faculty-student-exchanges/',
      },
      {
        source: '/connect-global',
        destination: 'https://cspdin.wordpress.com/connect-global/',
      },
      {
        source: '/connect-community',
        destination: 'https://cspdin.wordpress.com/connect-community/',
      },
      {
        source: '/resources-publications-2',
        destination: 'https://cspdin.wordpress.com/resources-publications-2/',
      },
      {
        source: '/resources-publications',
        destination: 'https://cspdin.wordpress.com/resources-publications/',
      },
      {
        source: '/resources-data-repository',
        destination: 'https://cspdin.wordpress.com/resources-data-repository/',
      },
      {
        source: '/intitiatives-internships',
        destination: 'https://cspdin.wordpress.com/intitiatives-internships/',
      },
      {
        source: '/about',
        destination: 'https://cspdin.wordpress.com/about/',
      },
      {
        source: '/contact',
        destination: 'https://cspdin.wordpress.com/contact/',
      }
    ];
  },
};

export default nextConfig;
