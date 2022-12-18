export default {
  title: 'Templates/ContentSection',
};

const Template = () => `
<j-content-section>
  <j-prose>
    <h1>This is the <code>j-content-section</code> component</h1>
    <p>All this component does is make the area have a max-width of <code>--j-spacing-48</code> which is
    useful for generally setting the maximum width of content on a page</p>
    <p>The section also has horizontal padding of <code>--j-spacing-1</code> so it works well with components
    such as the <code>j-prose</code> component on mobile without needing extra styling.</p>
  </j-prose>
</j-content-section>
`;

export const ContentSection = Template.bind({});
