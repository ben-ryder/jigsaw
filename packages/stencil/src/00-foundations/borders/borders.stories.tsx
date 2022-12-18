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
        background-color: var(--j-atom-500);
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
        border: var(--j-border-width-sm) solid var(--j-teal-600);
    }
    .border-item--width-md {
        border: var(--j-border-width-md) solid var(--j-teal-600);
    }
    .border-item--width-lg {
        border-top: var(--j-border-width-lg) solid var(--j-teal-600);
    }
    .border-item--width-xl {
        border-left: var(--j-border-width-xl) solid var(--j-teal-600);
    }
  </style>
  <j-content-section>
    <j-prose>
      <h1>Borders</h1>
      <p>This is the border system, including width and radius.</p>

      <h2>Border Radius</h2>
      <p>The small radius should be used the most and the large radius used the least.</p>
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
      <p>The small width should be used for most UI elements that need it. The medium is most notably used for form elements
      and the large and extra large widths are used decoratively and will most often be used on only one side such as the top or left.</p>
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
