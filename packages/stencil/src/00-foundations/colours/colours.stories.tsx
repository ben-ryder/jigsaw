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
  {token: "--j-c-atom-50", hexCode: "#353f4e"},
  {token: "--j-c-atom-100", hexCode: "#323a47"},
  {token: "--j-c-atom-200", hexCode: "#2e3541"},
  {token: "--j-c-atom-300", hexCode: "#2b303b"},
  {token: "--j-c-atom-400", hexCode: "#272B34"},
  {token: "--j-c-atom-500", hexCode: "#242830"},
  {token: "--j-c-atom-600", hexCode: "#21252d"},
  {token: "--j-c-atom-700", hexCode: "#1e2229"},
  {token: "--j-c-atom-800", hexCode: "#1b1f26"},
  {token: "--j-c-atom-900", hexCode: "#16191e"},

  // Blue Grey
  {token: "--j-c-blueGrey-50", hexCode: "#a9b4c5"},
  {token: "--j-c-blueGrey-100", hexCode: "#9ca7b8"},
  {token: "--j-c-blueGrey-200", hexCode: "#909bab"},
  {token: "--j-c-blueGrey-300", hexCode: "#838e9f"},
  {token: "--j-c-blueGrey-400", hexCode: "#778192"},
  {token: "--j-c-blueGrey-500", hexCode: "#6a7585"},
  {token: "--j-c-blueGrey-600", hexCode: "#5e6878"},
  {token: "--j-c-blueGrey-700", hexCode: "#515b6c"},
  {token: "--j-c-blueGrey-800", hexCode: "#454f5f"},
  {token: "--j-c-blueGrey-900", hexCode: "#374151"},

  // Mono
  {token: "--j-c-mono-50", hexCode: "#fff"},
  {token: "--j-c-mono-100", hexCode: "#eee"},
  {token: "--j-c-mono-200", hexCode: "#ccc"},
  {token: "--j-c-mono-300", hexCode: "#888"},
  {token: "--j-c-mono-400", hexCode: "#666"},
  {token: "--j-c-mono-500", hexCode: "#444"},
  {token: "--j-c-mono-600", hexCode: "#333"},
  {token: "--j-c-mono-700", hexCode: "#222"},
  {token: "--j-c-mono-800", hexCode: "#1a1a1a"},
  {token: "--j-c-mono-900", hexCode: "#111"},

  // Red
  {token: "--j-c-red-200", hexCode: "#ec8585"},
  {token: "--j-c-red-300", hexCode: "#e55c5c"},
  {token: "--j-c-red-400", hexCode: "#e24747"},
  {token: "--j-c-red-500", hexCode: "#df3333"},
  {token: "--j-c-red-600", hexCode: "#c92e2e"},
  {token: "--j-c-red-700", hexCode: "#b22929"},

  // Green
  {token: "--j-c-green-200", hexCode: "#8bb694"},
  {token: "--j-c-green-300", hexCode: "#649d71"},
  {token: "--j-c-green-400", hexCode: "#50915f"},
  {token: "--j-c-green-500", hexCode: "#3d854d"},
  {token: "--j-c-green-600", hexCode: "#377845"},
  {token: "--j-c-green-700", hexCode: "#316a3e"},

  // Orange
  {token: "--j-c-orange-200", hexCode: "#edad80"},
  {token: "--j-c-orange-300", hexCode: "#e79155"},
  {token: "--j-c-orange-400", hexCode: "#e48440"},
  {token: "--j-c-orange-500", hexCode: "#e1762b"},
  {token: "--j-c-orange-600", hexCode: "#cb6a27"},
  {token: "--j-c-orange-700", hexCode: "#b45e22"},

  // Yellow
  {token: "--j-c-yellow-200", hexCode: "#fdd97c"},
  {token: "--j-c-yellow-300", hexCode: "#fccc50"},
  {token: "--j-c-yellow-400", hexCode: "#fbc53a"},
  {token: "--j-c-yellow-500", hexCode: "#FBBF24"},
  {token: "--j-c-yellow-600", hexCode: "#e2ac20"},
  {token: "--j-c-yellow-700", hexCode: "#c9991d"},

  // Blue
  {token: "--j-c-blue-200", hexCode: "#76b2d0"},
  {token: "--j-c-blue-300", hexCode: "#4998c0"},
  {token: "--j-c-blue-400", hexCode: "#328bb8"},
  {token: "--j-c-blue-500", hexCode: "#1B7EB0"},
  {token: "--j-c-blue-600", hexCode: "#18719e"},
  {token: "--j-c-blue-700", hexCode: "#16658d"},

  // Purple
  {token: "--j-c-purple-200", hexCode: "#b69eeb"},
  {token: "--j-c-purple-300", hexCode: "#9d7ee5"},
  {token: "--j-c-purple-400", hexCode: "#916ee1"},
  {token: "--j-c-purple-500", hexCode: "#855ede"},
  {token: "--j-c-purple-600", hexCode: "#7855c8"},
  {token: "--j-c-purple-700", hexCode: "#6a4bb2"},

  // Pink
  {token: "--j-c-pink-200", hexCode: "#e281b1"},
  {token: "--j-c-pink-300", hexCode: "#d85797"},
  {token: "--j-c-pink-400", hexCode: "#d3428a"},
  {token: "--j-c-pink-500", hexCode: "#CE2D7D"},
  {token: "--j-c-pink-600", hexCode: "#b92971"},
  {token: "--j-c-pink-700", hexCode: "#a52464"},
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
