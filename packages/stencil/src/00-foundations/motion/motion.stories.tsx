export default {
  title: 'Foundations/Motion',
};

const Template = () => `
  <style>

  </style>
  <j-content-section>
    <j-prose>
      <h1>Motion</h1>
      <p>Animations and motion can be used to make UI interactions and events feel more fluid.
      Jigsaw has a number of predefined animation types and durations that can be used.
      </p>

      <h2>Animation Types</h2>
      <table>
      <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
      <tbody>
        <tr><td><code>--j-motion-ease-in</code></td><td><code>cubic-bezier(.4, 0, .7, .2)</code></td><td>Can be used when removing items from the screen.</td></tr>
        <tr><td><code>--j-motion-ease-out</code></td><td><code>cubic-bezier(0, 0, .2, 1)</code></td><td>Can be used when introducing items to the screen.</td></tr>
        <tr><td><code>--j-motion-ease-in-out</code></td><td><code>cubic-bezier(.4, 0, .2, 1)</code></td><td>Can be used when moving items that are already on the screen.</td></tr>
      </tbody>
      </table>

      <h2>Duration</h2>
      <table>
      <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
      <tbody>
        <tr><td><code>--j-motion-duration-fast</code></td><td><code>0.15s</code></td><td>Can be used for small movements or things that require quick feedback like hover states and other UI interaction.</td></tr>
        <tr><td><code>--j-motion-duration-medium</code></td><td><code>0.3s</code></td><td>Can be used for medium movements or in UI interactions that are not too important.</td></tr>
        <tr><td><code>--j-motion-duration-slow</code></td><td><code>0.6s</code></td><td>Can be used for long movements or big UI events like revealing something.</td></tr>
      </tbody>
      </table>

    </j-prose>
  </j-content-section>
`;

export const Motion = Template.bind({});
