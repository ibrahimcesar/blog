import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getCollection } from 'astro:content';

// Load Inter font from Google Fonts CDN (more reliable)
async function loadFont(): Promise<ArrayBuffer> {
  const response = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff'
  );
  if (!response.ok) {
    throw new Error(`Failed to load font: ${response.status}`);
  }
  return response.arrayBuffer();
}

async function loadBoldFont(): Promise<ArrayBuffer> {
  const response = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff'
  );
  if (!response.ok) {
    throw new Error(`Failed to load bold font: ${response.status}`);
  }
  return response.arrayBuffer();
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('posts');

  return posts
    .filter(post => !post.data.socialImage) // Only for posts without socialImage
    .map(post => ({
      params: { slug: post.slug },
      props: {
        title: post.data.title,
        description: post.data.description || '',
        category: post.data.category || '',
      },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, category } = props as { title: string; description: string; category: string };

  const [fontRegular, fontBold] = await Promise.all([
    loadFont(),
    loadBoldFont(),
  ]);

  // Create the OG image using Satori
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0f172a', // slate-900
          padding: '60px',
          fontFamily: 'Inter',
        },
        children: [
          // Top section with logo and site name
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              },
              children: [
                // Profile image
                {
                  type: 'img',
                  props: {
                    src: 'https://ibrahimcesar.cloud/ibrahimcesar.png',
                    width: 80,
                    height: 80,
                    style: {
                      borderRadius: '50%',
                      border: '3px solid #6366f1',
                    },
                  },
                },
                // Site name
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      {
                        type: 'span',
                        props: {
                          style: {
                            color: '#e2e8f0',
                            fontSize: '28px',
                            fontWeight: 700,
                          },
                          children: 'Ibrahim Cesar',
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: {
                            color: '#94a3b8',
                            fontSize: '18px',
                          },
                          children: 'ibrahimcesar.cloud',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Main title section
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '20px',
                paddingBottom: '20px',
              },
              children: [
                {
                  type: 'h1',
                  props: {
                    style: {
                      color: '#c7d2fe', // indigo-200 - light accent for the title
                      fontSize: title.length > 60 ? '48px' : title.length > 40 ? '56px' : '64px',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textAlign: 'center',
                      maxWidth: '1000px',
                      textShadow: '0 0 40px rgba(129, 140, 248, 0.6), 0 0 80px rgba(99, 102, 241, 0.4)', // glowing effect
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          // Bottom section with category/accent
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              children: [
                // Category badge
                category ? {
                  type: 'div',
                  props: {
                    style: {
                      backgroundColor: '#6366f1',
                      color: '#ffffff',
                      padding: '8px 24px',
                      borderRadius: '9999px',
                      fontSize: '20px',
                      fontWeight: 500,
                    },
                    children: category,
                  },
                } : {
                  type: 'div',
                  props: { children: '' },
                },
                // Decorative accent line
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '200px',
                      height: '4px',
                      backgroundColor: '#6366f1',
                      borderRadius: '2px',
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  // Convert SVG to PNG using Resvg (pure WASM, works everywhere)
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
