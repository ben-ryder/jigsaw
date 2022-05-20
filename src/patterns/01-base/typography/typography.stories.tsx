import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { StrictReactNode } from '../../../extras/strict-react-children';

import { H0, H1, H2, H3, H4, H5, H6 } from './headings';
import { B, Em, I, P, Strong } from './text';
import { Code as CodeElement, Pre } from './code';


interface TypographyElementProps {
  label: string,
  children: StrictReactNode
}
function TypographyElement(props: TypographyElementProps) {
  return (
    <div className="mt-6">
      <p className="text-sm text-br-blueGrey-500 font-bold">{ props.label }</p>
      <div className='mt-2'>
        { props.children }
      </div>
    </div>
  )
}

interface TypographySectionProps {
  children: StrictReactNode
}
function TypographySection(props: TypographySectionProps) {
  return (
    <div className="mt-6 border-t border-br-teal-600">
      { props.children }
    </div>
  )
}


export function Typography() {
  return (
    <div>
      <div>
        {/** // todo: H1 (text-5xl) line height seems broken? */}
        <H1 className="text-br-whiteGrey-100 mb-3">Typography</H1>
        <P className="text-br-whiteGrey-200">These are all the basic typography elements available in this library.</P>
      </div>
      <TypographySection>
        <TypographyElement label="Heading 0">
          <H0 className="text-br-whiteGrey-100">This is a big h1</H0>
        </TypographyElement>
        <TypographyElement label="Heading 1">
          <H1 className="text-br-whiteGrey-100">This is a h1</H1>
        </TypographyElement>
        <TypographyElement label="Heading 2">
          <H2 className="text-br-whiteGrey-100">This is a h2</H2>
        </TypographyElement>
        <TypographyElement label="Heading 3">
          <H3 className="text-br-whiteGrey-100">This is a h3</H3>
        </TypographyElement>
        <TypographyElement label="Heading 4">
          <H4 className="text-br-whiteGrey-100">This is a h4</H4>
        </TypographyElement>
        <TypographyElement label="Heading 5">
          <H5 className="text-br-whiteGrey-100">This is a h5</H5>
        </TypographyElement>
        <TypographyElement label="Heading 6">
          <H6 className="text-br-whiteGrey-100">This is a h6</H6>
        </TypographyElement>
      </TypographySection>
      <TypographySection>
        <TypographyElement label="Paragraph">
          <P className="text-br-whiteGrey-200">This is a basic paragraph tag</P>
        </TypographyElement>
        <TypographyElement label="Strong">
          <Strong className="text-br-whiteGrey-100">This is a strong tag</Strong>
        </TypographyElement>
        <TypographyElement label="Bold">
          <B className="text-br-whiteGrey-100">This is a b tag</B>
        </TypographyElement>
        <TypographyElement label="Emphasis">
          <Em className="text-br-whiteGrey-200">This is an emphasis tag</Em>
        </TypographyElement>
        <TypographyElement label="Italics">
          <I className="text-br-whiteGrey-200">This is an italics tag</I>
        </TypographyElement>
      </TypographySection>
      <TypographySection>
        <TypographyElement label="Inline Code">
          <Pre className="text-br-whiteGrey-100">This is a pre tag</Pre>
        </TypographyElement>
        <TypographyElement label="Inline Code">
          <CodeElement className="text-br-whiteGrey-100">This is a code tag</CodeElement>
        </TypographyElement>
      </TypographySection>
    </div>
  )
}


export default {
  title: 'Base/Typography',
  component: Typography,
  parameters: { options: { showPanel: false } },
} as ComponentMeta<typeof Typography>;
