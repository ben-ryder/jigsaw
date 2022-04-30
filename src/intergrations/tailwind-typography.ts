import { colourPalette } from "../patterns/01-base/colour-palette";

/**
 * CSS declarations to be used to extend the default @tailwind/typography declarations.
 */
export const tailwindTypographyCSS = {
  '--tw-prose-body': colourPalette.whiteGrey['200'],
  '--tw-prose-headings': colourPalette.whiteGrey['100'],
  '--tw-prose-lead': colourPalette.whiteGrey['100'],
  '--tw-prose-links': colourPalette.whiteGrey['100'],
  '--tw-prose-bold': colourPalette.whiteGrey['100'],
  '--tw-prose-counters': colourPalette.teal['600'],
  '--tw-prose-bullets': colourPalette.teal['600'],
  '--tw-prose-hr': colourPalette.whiteGrey['100'],
  '--tw-prose-quotes': colourPalette.whiteGrey['200'],
  '--tw-prose-quote-borders': colourPalette.teal['600'],
  '--tw-prose-captions': colourPalette.whiteGrey['200'],
  '--tw-prose-code': colourPalette.whiteGrey['100'],
  '--tw-prose-pre-code': colourPalette.whiteGrey['100'],
  '--tw-prose-pre-bg': colourPalette.atom['900'],
  '--tw-prose-th-borders': colourPalette.whiteGrey['100'],
  '--tw-prose-td-borders': colourPalette.whiteGrey['100'],
  a: {
    '&:hover': {
      color: colourPalette.teal['600']
    }
  }
}
