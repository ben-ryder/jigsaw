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
          <li>I've used their suggested spacing, text size and shadow systems.</li>
          <li>Some really useful design tips in general too!</li>
        </ul>
        <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
        <ul>
          <li>Used to cross-reference spacing and text size systems.</li>
          <li>Some of Jigsaw's colour palettes started with Tailwind colours, although all have been modified.</li>
        </ul>
        <li><a href="https://blog.superhuman.com/how-to-design-delightful-dark-themes/">blog.superhuman.com</a></li>
        <ul>
          <li>Some great tips on how to design a dark mode, especially around achieving elevation and depth with colour.</li>
        </ul>
        <li><a href="https://seeds.sproutsocial.com/visual/motion/">seeds.sproutsocial.com</a></li>
        <ul>
          <li>My motion and animation system is taken from this design system.</li>
        </ul>
    </ul>
  </j-prose>
</j-content-section>
`;

export const Credits = Template.bind({});
