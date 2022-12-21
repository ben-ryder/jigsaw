export default {
  title: 'Foundations/Borders',
};

const Template = () => `
  <style>
    .border-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--j-c-background-f1);
        margin: auto;
        margin-bottom: var(--j-size-1);
        width: 70%;
        height: var(--j-size-6);
    }

    .border-item--radius-sm {
        border-radius: var(--j-border-radius-sm);
    }
    .border-item--radius-md {
        border-radius: var(--j-border-radius-md);
    }
    .border-item--radius-lg {
        border-radius: var(--j-border-radius-lg);
    }

    .border-item--width-sm {
        border: var(--j-border-width-sm) solid var(--j-c-primary);
    }
    .border-item--width-md {
        border: var(--j-border-width-md) solid var(--j-c-primary);
    }
    .border-item--width-lg {
        border-top: var(--j-border-width-lg) solid var(--j-c-primary);
    }
    .border-item--width-xl {
        border-left: var(--j-border-width-xl) solid var(--j-c-primary);
    }
  </style>
  <j-content-section>
    <j-prose>
      <h1>Borders</h1>
      <p>Borders can be used to separate content and make the interface clearer, but they can also be used decoratively.
       Jigsaw provides a number of predefined width and radius values.</p>

      <h2>Border Radius</h2>
      <p>Giving something a border radius is a great way to soften up hard edges and make the interface more "friendly".<br>
      In Jigsaw, the small radius can be used on UI elements like panels to soften up the edges, and the
      medium radius can be used when a rounded effect is specifically desired such as on form elements or buttons.</p>
      <div class="border-item border-item--radius-sm">
        <p>Small (4px)</p>
        <code>--j-border-radius-sm</code>
      </div>
      <div class="border-item border-item--radius-md">
        <p>Medium (6px)</p>
        <code>--j-border-radius-md</code>
      </div>
      <div class="border-item border-item--radius-lg">
        <p>Large (8px)</p>
       <code>--j-border-radius-lg</code>
      </div>

      <h2>Border Width</h2>
      <p>The small width can be used in most situations. The medium is most notably used for form elements
      and the large and extra large widths are used decoratively and will most often be used on only one side of the element such as the top or left.</p>
      <div class="border-item border-item--width-sm">
        <p>Small (1px)</p>
        <code>--j-border-width-sm</code>
      </div>
      <div class="border-item border-item--width-md">
        <p>Medium (2px)</p>
        <code>--j-border-width-md</code>
      </div>
      <div class="border-item border-item--width-lg">
        <p>Large (4px)</p>
       <code>--j-border-width-lg</code>
      </div>
      <div class="border-item border-item--width-xl">
        <p>Extra Large (8px)</p>
       <code>--j-border-width-lg</code>
      </div>
    </j-prose>
  </j-content-section>
`;

export const Borders = Template.bind({});
