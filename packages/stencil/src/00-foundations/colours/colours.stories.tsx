export default {
  title: 'Foundations/Colours',
};


const colours = [
  // Teal
  {token: "--j-c-teal-300", hexCode: "#3da9a0"},
  {token: "--j-c-teal-400", hexCode: "#259f94"},
  {token: "--j-c-teal-500", hexCode: "#0d9488"},
  {token: "--j-c-teal-600", hexCode: "#0c857a"},
  {token: "--j-c-teal-700", hexCode: "#0a766d"},
  {token: "--j-c-teal-800", hexCode: "#09685f"},

  // Atom
  {token: "--j-c-atom-100", hexCode: "#353f4e"},
  {token: "--j-c-atom-200", hexCode: "#323a47"},
  {token: "--j-c-atom-300", hexCode: "#2e3541"},
  {token: "--j-c-atom-400", hexCode: "#2b303b"},
  {token: "--j-c-atom-500", hexCode: "#272B34"},
  {token: "--j-c-atom-600", hexCode: "#242830"},
  {token: "--j-c-atom-700", hexCode: "#21252d"},
  {token: "--j-c-atom-800", hexCode: "#1e2229"},
  {token: "--j-c-atom-900", hexCode: "#1b1f26"},

  // Blue Grey
  {token: "--j-c-blueGrey-300", hexCode: "#A9B4C5"},
  {token: "--j-c-blueGrey-400", hexCode: "#929dae"},
  {token: "--j-c-blueGrey-500", hexCode: "#7c8697"},
  {token: "--j-c-blueGrey-600", hexCode: "#657080"},
  {token: "--j-c-blueGrey-700", hexCode: "#4f5969"},
  {token: "--j-c-blueGrey-800", hexCode: "#374151"},

  // Mono
  {token: "--j-mono-50", hexCode: "#fff"},
  {token: "--j-mono-100", hexCode: "#eee"},
  {token: "--j-mono-200", hexCode: "#ccc"},
  {token: "--j-mono-300", hexCode: "#888"},
  {token: "--j-mono-400", hexCode: "#666"},
  {token: "--j-mono-500", hexCode: "#444"},
  {token: "--j-mono-600", hexCode: "#333"},
  {token: "--j-mono-700", hexCode: "#222"},
  {token: "--j-mono-800", hexCode: "#111"},
  {token: "--j-mono-900", hexCode: "#000"},

  // Red
  {token: "--j-red-500", hexCode: "#EF4444"},
  {token: "--j-red-600", hexCode: "#DC2626"},
  {token: "--j-red-700", hexCode: "#B91C1C"},

  // Green
  {token: "--j-green-700", hexCode: "#15803D"},
  {token: "--j-green-800", hexCode: "#166534"},
  {token: "--j-green-900", hexCode: "#14532D"},

  // Yellow
  {token: "--j-yellow-400", hexCode: "#FBBF24"},
  {token: "--j-yellow-500", hexCode: "#F59E0B"},
  {token: "--j-yellow-600", hexCode: "#D97706"},

  // Blue
  {token: "--j-blue-500", hexCode: "#0EA5E9"},
  {token: "--j-blue-600", hexCode: "#0284C7"},
  {token: "--j-blue-700", hexCode: "#0369A1"},

  // Pink
  {token: "--j-pink-400", hexCode: "#F472B6"},
  {token: "--j-pink-500", hexCode: "#EC4899"},
  {token: "--j-pink-600", hexCode: "#DB2777"},

  // Purple
  {token: "--j-purple-500", hexCode: "#8B5CF6"},
  {token: "--j-purple-600", hexCode: "#7C3AED"},
  {token: "--j-purple-700", hexCode: "#6D28D9"},
]


const Template = () => `
  <style>
    .colour-table td {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
    }
    .colour-table thead tr {
      border-bottom-color: var(--j-whiteGrey-50);
    }
    .colour-table span {
      display: block;
      height: var(--j-size-3);
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

      <ul>
        <li><code>--j-c-brand</code> - The main "brand" colour of the system.</li>
      </ul>
      <ul>
        <li><code>--j-c-background</code> - The main background of the system.</li>
        <li><code>--j-c-panel</code></li>
      </ul>

      <h2>Semantic Colours</h2>
      <p>Semantic colours are colours that have meaning and are used in specific situations.

      <ul>
        <li><strong>Actions</strong>:</li>
        <ul>
          <li><code>--j-c-destructive</code> - Used when an action will be destructive such as deleting or canceling something.</li>
          <li><code>--j-c-constructive</code> - ??</li>
        </ul>
        <li><strong>Status</strong>:</li>
        <ul>
          <li><code>--j-c-info</code> - Used to convey information.</li>
          <li><code>--j-c-warning</code> - Used to convey a warning, but something that isn't critical.</li>
          <li><code>--j-c-danger</code> - Used to convey danger, more severe than a warning.</li>
          <li><code>--j-c-error</code> - Used to convey an error, for example on invalid input or when an action failed.</li>
          <li><code>--j-c-success</code> - ??</li>
        </ul>
      </ul>

      <h2>All Colours</h2>

      <table class="colour-table">
        <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Hex Code</th>
          </tr>
        </thead>
        <tbody>
        ${colours.map(colour => `
          <tr>
            <td><span style="background-color: var(${colour.token});"></span></td>
            <td><code>${colour.token}</code></td>
            <td><code>${colour.hexCode}</td>
          </tr>
        `).join("")}
        </tbody>
      </table>

    </j-prose>
  </j-content-section>
`;

export const Colours = Template.bind({});
