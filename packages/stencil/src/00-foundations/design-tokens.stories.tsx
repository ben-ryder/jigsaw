export default {
  title: 'Design Tokens'
};


const Template = () => `
<j-content-section>
  <j-prose>
    <h1>Design Tokens</h1>
    <p>Jigsaw has been built mainly using CSS variables such as <code>--j-size-32</code> and <code>--j-atom-500</code>.
    While in theory this could allow for easy customisation, in practice I have chosen this approach
    because it lets consuming applications easily use these variables in their own styling.
    </p>

    <p>All CSS variables in the design system will start with <code>--j-</code> so it's clear that they come from Jigsaw.
    This matches how the web components work too as all of these start with <code>&lt;j-</code>, for example <code>&lt;j-prose&gt;</code>.</p>
  </j-prose>
</j-content-section>
`;

export const DesignTokens = Template.bind({});
