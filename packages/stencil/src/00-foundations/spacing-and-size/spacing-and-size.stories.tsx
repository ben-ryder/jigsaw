export default {
  title: 'Foundations/Spacing and Size',
};

const spacingSteps = [
  0.25,
  0.5,
  0.75,
  1,
  1.5,
  2,
  3,
  4,
  6,
  8,
  12,
  16,
  24,
  32,
  40,
  48,
  56,
  64
]

const Template = () => `
  <style>
    .size-item {
        margin-bottom: var(--j-size-0-5);
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
    .size-item span {
        display: block;
        height: var(--j-size-1);
        background-color: var(--j-c-brand);
        margin-right: var(--j-size-0-5);
    }
    .size-items {
        overflow: scroll;
    }
  </style>
  <j-content-section>
    <j-prose>
      <h1>Spacing and Size</h1>
      <p>In order to keep the design system consistent and easy to develop with a spacing & size system is used.
      This system is not linear, meaning more options are avaliable for smaller sizes where the
      difference between two sizes is more pronounced.</p>

      <p>A base value of <strong>16</strong> is used and all other values are calculated from that.
      For example:
      <ul>
          <li><code>--j-size-0-75</code> is <strong>16 x 0.75 = 12px</strong></li>
          <li><code>--j-size-32</code> is <strong>16 x 32 = 512px</strong></li>
      </ul>

      <p>This system is mainly used when adding space between elements and components, but it has been made generic as <code>--j-size-</code>
      because it could also be used when picking the size of UI elements.
      </p>

      <div class="size-items">
        ${spacingSteps.map(step =>  `
          <div class="size-item">
            <span style="min-width: var(--j-size-${step.toString().replace(".", "-")})"></span>
            <code>--j-size-${step.toString().replace(".", "-")}</code>
          </div>
        `).join('')}
      </div>
    </j-prose>
  </j-content-section>
`;

export const SpacingandSize = Template.bind({});
