export default {
  title: 'Foundations/Elevation and Depth',
};

const Template = () => `
  <style>
    .panel-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--j-c-bg-layer-f1);
        margin: auto;
        margin-bottom: var(--j-size-3);
        width: 70%;
        height: var(--j-size-6);
    }

    .panel-item--shadow-sm {
        box-shadow: var(--j-shadow-sm);
    }
    .panel-item--shadow-md {
        box-shadow: var(--j-shadow-md);
    }
    .panel-item--shadow-lg {
        box-shadow: var(--j-shadow-lg);
    }
    .panel-item--shadow-xl {
        box-shadow: var(--j-shadow-xl);
    }
  </style>
  <j-content-section>
    <j-prose>
      <h1>Elevation and Depth</h1>
      <p>Jigsaw generally has quite a flat design, however elevation/depth can still be conveyed through the use of different colour shades.
      Different shades can be used to mimic how light would work in the real world, so elements
      that appear over the top or "nearer" to the user would use a lighter shade.</p>

      <p>A layer system of <strong>5</strong> shades is provided through the <code>--j-c-layer</code> CSS variables:</p>
      <ul>
        <li><code>--j-c-layer-b2</code> - The second layer behind the main content.</li>
        <li><code>--j-c-layer-b1</code> - The first layer below the main content, can be used for a background when the main content layer isn't appropriate.</li>
        <li><code>--j-c-layer-0</code> - The main content layer, can be used as the background of a page.</li>
        <li><code>--j-c-layer-f1</code>- The first layer above the main content, can be used for menus, side panels etc.</li>
        <li><code>--j-c-layer-f2</code> - The second layer above the main content, can be used for popups, modals etc.</li>
      </ul>

      <p>There are also two mid-layer colours <code>--j-c-layer-b0</code> and <code>--j-c-layer-f0</code> which can be used when required.<br>
      For example, tables in the <code>j-prose</code> component have a background of <code>--j-c-layer-f1</code> but every other
      row has a background of <code>--j-c-layer-f0</code> as this makes the table easier to read.</p>

      <h2>Shadows</h2>
      <p>Although shades can be used to coney depth, shadows can also be used as well to enhance this effect.</p>
      <div class="panel-item panel-item--shadow-sm">
        <p>Small</p>
        <code>--j-shadow-sm</code>
      </div>
      <div class="panel-item panel-item--shadow-md">
        <p>Medium</p>
        <code>--j-shadow-md</code>
      </div>
      <div class="panel-item panel-item--shadow-lg">
        <p>Large</p>
        <code>--j-shadow-lg</code>
      </div>
      <div class="panel-item panel-item--shadow-xl">
        <p>Extra Large</p>
        <code>--j-shadow-xl</code>
      </div>
    </j-prose>
  </j-content-section>
`;

export const ElevationandDepth = Template.bind({});
