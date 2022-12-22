export default {
  title: 'Foundations/Design Tokens'
};


const Template = () => `
<j-content-section>
  <j-prose>
    <h1>Design Tokens</h1>
    <p>Jigsaw has been built using CSS variables such as <code>--j-size-32</code> and <code>--j-c-primary</code>.
    While in theory this could allow for easy customisation, in practice I have chosen this approach
    right now because it lets consuming applications easily use these variables in their own styling without having
    to worry about tooling.
    In the future I may switch to primarily using Sass variables for the base foundations and only exposing some aspects
    of the library via CSS variables.
    </p>

    <p>All CSS variables in the design system start with <code>--j-</code> so it's clear that they come from Jigsaw.
    This matches how the web components work as all of these start with <code>&lt;j-</code>, for example <code>&lt;j-prose&gt;&lt;/j-prose&gt;</code>.</p>
  </j-prose>
</j-content-section>
`;

export const DesignTokens = Template.bind({});
