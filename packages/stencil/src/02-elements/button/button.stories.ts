export default {
  title: 'Elements/Button',
};

const Template = () => `
<style>
  .button-group {
      margin-bottom: var(--j-size-1);
  }
</style>
<j-content-section>
  <j-prose>
    <h1>Buttons</h1>
    <p>Buttons are an important part of websites design and user interfaces and Jigsaw provides a number of button styles.</p>

    <h2>Button Types</h2>
    <div class="button-group">
      <j-button styling="primary">Primary</j-button>
      <j-button styling="secondary">Secondary</j-button>
      <j-button styling="tertiary">Tertiary</j-button>
      <j-button styling="destructive">Destructive</j-button>
    </div>

    <h2>Contextual Examples</h2>
    <div class="button-group">
      <j-button styling="secondary">Sign Up</j-button>
      <j-button>Log In</j-button>
    </div>
    <div class="button-group">
        <j-button styling="tertiary">Cancel</j-button>
        <j-button>Save</j-button>
    </div>
    <div class="button-group">
        <j-button styling="tertiary">Cancel</j-button>
        <j-button styling="destructive">Delete</j-button>
    </div>
  </j-prose>
</j-content-section>
`;

export const Button = Template.bind({});
