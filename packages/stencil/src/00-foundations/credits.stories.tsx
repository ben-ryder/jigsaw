export default {
  title: 'Credits'
};


const Template = () => `
<j-content-section>
  <j-prose>
    <h1>Credits</h1>
    <p>I'm a developer not a designer, and as such I couldn't build a design system like this without
    using various articles, resources and other design systems for help and inspiration.</p>

    <ul>
        <li><a href="https://www.refactoringui.com/">Refactoring UI</a></li>
        <ul>
          <li>Some really useful design tips.</li>
          <li>Predefined spacing and text size systems which I've used.</li>
        </ul>
        <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
        <ul>
          <li>Used to cross-reference spacing and text size systems.</li>
          <li>Some colour palettes started with Tailwind colours, but most have been edited.</li>
        </ul>
        <li><a href="https://blog.superhuman.com/how-to-design-delightful-dark-themes/">blog.superhuman.com</a>
        - Some great tips on how to design a dark mode, especially around achieving elevation and depth.</li>
    </ul>
  </j-prose>
</j-content-section>
`;

export const Credits = Template.bind({});
