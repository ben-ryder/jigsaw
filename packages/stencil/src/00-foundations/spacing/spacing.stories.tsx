export default {
  title: 'Foundations/Spacing',
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
  48
]

const Template = () => `
  <style>
    .spacing-item {
        margin-bottom: var(--j-spacing-0-5);
    }
  </style>
  <div style="color: var(--j-whiteGrey-100)">
    <j-prose>
      <h1>Spacing</h1>
      <p>In order to prevent lots of variations of padding & margins all components and layouts in Jigsaw are built
    using a spacing scale:</p>
    </j-prose>
  </div>
  <div>
    ${spacingSteps.map(step =>  `
      <div class="spacing-item" style="display: flex; align-items: center">
        <span style="display: block; height: 16px; background-color: var(--j-teal-600); width: var(--j-spacing-${step.toString().replace(".", "-")})"></span>
        <p style="margin-left: var(--j-spacing-0-5); color: var(--j-whiteGrey-50)"><b>--j-spacing-${step.toString().replace(".", "-")}</b> (16 x ${step})</p>
      </div>
    `).join('')}
  </div>
`;

const TemplateTwo = () => `
  <div>
    <h1>Spacing</h1>
    <p>In order to prevent lots of variations of padding & margins all components and layouts in Jigsaw are built
    using a spacing scale:</p>
  </div>
  <div>
    ${spacingSteps.map(step => `
      <div style="display: flex; align-items: center">
        <span style="display: block; height: 16px; background-color: var(--j-teal-600); width: var(--j-spacing-${step.toString().replace(".", "-")})"></span>
        <p style="margin-left: var(--j-spacing-0-5); color: var(--j-whiteGrey-50)"><b>--j-spacing-${step.toString().replace(".", "-")}</b> (16 x ${step})</p>
      </div>
    `)}
  </div>
`;

export const Example = Template.bind({});
Example.args = {};
