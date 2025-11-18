const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Georgia"', ...defaultTheme.fontFamily.serif]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: theme('colors.slate.800'),
            maxWidth: '75ch',
            a: {
              color: theme('colors.purple.700'),
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.purple.600'),
              },
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
            },
            code: {
              color: theme('colors.purple.700'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.2em 0.4em',
              borderRadius: '3px',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            h1: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
            },
            h4: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.100'),
            a: {
              color: theme('colors.purple.400'),
              '&:hover': {
                color: theme('colors.purple.300'),
              },
            },
            strong: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.purple.300'),
              backgroundColor: theme('colors.slate.700'),
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.slate.200'),
              borderLeftColor: theme('colors.purple.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
