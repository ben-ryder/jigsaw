export default {
  title: 'Home'
};


const Template = () => `
<j-content-section>
  <j-prose>
    <h1>Welcome to Jigsaw!</h1>
    <p>Jigsaw is a design system and component library for use in my personal projects.</p>
    <p>It aims to provide a universal design system and components that I can use to speed up developing my websites and applications.<br>
    It's kind of like my custom version of libraries like <a href="https://mui.com/">MUI</a> and <a href="https://chakra-ui.com/">Chakra UI</a>.</p>

    <p>You can explore the design system and all the components using this Storybook instance.<br>
    To learn more, including how to use the library itself, check out the <a href="https://github.com/Ben-Ryder/jigsaw">GitHub Repository</a>.</p>
  </j-prose>
</j-content-section>
`;

export const Home = Template.bind({});
Home.args = {};


