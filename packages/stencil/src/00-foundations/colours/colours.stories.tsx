export default {
  title: 'Foundations/Colours',
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
      <h1>Colours</h1>
      <p>These are the colours used in this design system.</p>

      <h2>Main Colours</h2>
      <p>The <strong>atom</strong> colour palette is the most
      important and is the main colour used for the background and interface.
      The <strong>teal</strong> colour palette is the next most important and is the main "brand" colour of the design system.</p>

      <h2>Semantic Colours</h2>
      <p>Semantic colours are colours that have meaning and are used in specific situations.

      <ul>
        <li><code>--j-c-constructive</code> - Used for a constructive/positive action such as creating something.</li>
        <li><code>--j-c-destructive</code> - Used when an action will be destructive such as deleting or canceling something.</li>
      </ul>

      <h2>All Colours</h2>
    </j-prose>
  </j-content-section>
`;

export const Colours = Template.bind({});
