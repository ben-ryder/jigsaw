import {JColours} from "./colours";
import {JBadge} from "../../02-components/badge/badge";
import {JColourVariants} from "./variants/colour-variants";

export default {
  title: "Foundations/Colours",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

type ColourData = {identifier: string, value: string}[];
const colours = Object.keys(JColours).map(key => {
  return {
    identifier: key,
    // @ts-ignore
    value: JColours[key]
  }
}) as ColourData;


export function AllColours() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Colours</h1>
        <p>The <strong>atom</strong> colour palette is the most
          important and is the main colour used for the background and interface.
          The <strong>teal</strong> colour palette is the next most important and is the main "brand" colour of
          the design system.</p>

        <h2>Accessibility</h2>
        <p>Accessibility is important and all use of colour in Jigsaw must at least meet <a
          href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG AA
          guidelines</a>.
          All colour palettes in Jigsaw have been selected with this in mind, but care must be taken to
          ensure these colours are used correctly when combined.</p>

        <h2>All Colours</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Hex Code</th>
          </tr>
          </thead>
          <tbody>
          {colours.map(colour => {
            return (
              <tr key={colour.value}>
                <td><span style={{backgroundColor: colour.value}}></span></td>
                <td><code>{colour.identifier}</code></td>
                <td><code>{colour.value}</code></td>
              </tr>
            )
          })}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export function Contextual() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Contextual Colours</h1>
        <p>"Contextual" colour variables have meaning and are used in specific situations.
          This is an attempt to seperate the colour itself from its use in the design system, with the
          intention of making it easier to override these colours in the future and potentially allowing for different "themes" at some point.
          You can see these colours in the tables below:</p>

        <h2>Primary</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-primary)'}}></span></td>
            <td><code>j-c-primary</code></td>
            <td><code>j-c-teal-600</code></td>
            <td>The main primary 'brand' colour</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-primary-interaction)'}}></span></td>
            <td><code>j-c-primary-interaction</code></td>
            <td><code>j-c-teal-800</code></td>
            <td>The 'interaction' version of the primary colour, used for things like hover effects</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-primary-text)'}}></span></td>
            <td><code>j-c-primary-text</code></td>
            <td><code>j-c-mono-50</code></td>
            <td>The text colour that can be used with the primary colour</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-primary-interaction-text)'}}></span></td>
            <td><code>j-c-primary-interaction-text</code></td>
            <td><code>j-c-mono-50</code></td>
            <td>The 'interaction' version of the primary text colour, used for things like hover effects</td>
          </tr>
          </tbody>
        </table>

        <h2>Secondary</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-secondary)'}}></span></td>
            <td><code>j-c-secondary</code></td>
            <td><code>j-c-mono-100</code></td>
            <td>The secondary 'brand' colour</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-secondary-interaction)'}}></span></td>
            <td><code>j-c-secondary-interaction</code></td>
            <td><code>j-c-mono-300</code></td>
            <td>The 'interaction' version of the secondary colour, used for things like hover effects</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-secondary-text)'}}></span></td>
            <td><code>j-c-secondary-text</code></td>
            <td><code>j-c-mono-800</code></td>
            <td>The text colour that can be used with the secondary colour</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-secondary-interaction-text)'}}></span></td>
            <td><code>j-c-secondary-interaction-text</code></td>
            <td><code>j-c-mono-800</code></td>
            <td>The 'interaction' version of the secondary text colour, used for things like hover effects</td>
          </tr>
          </tbody>
        </table>

        <h2>Tertiary</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-tertiary)'}}></span></td>
            <td><code>j-c-tertiary</code></td>
            <td><code>j-c-mono-50</code></td>
            <td>The colour of any tertiary things like the "tertiary"
              button type. There are no other colour states as tertiary actions have more basic
              styling.</td>
          </tr>
          </tbody>
        </table>

        <h2>Destructive</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-destructive)'}}></span></td>
            <td><code>j-c-destructive</code></td>
            <td><code>j-c-red-500</code></td>
            <td>Used when an action will be destructive such as deleting or canceling something.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-destructive-interaction)'}}></span></td>
            <td><code>j-c-destructive-interaction</code></td>
            <td><code>j-c-red-700</code></td>
            <td>The 'interaction' version of the destructive colour, used for things like hover effects.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-destructive-text)'}}></span></td>
            <td><code>j-c-destructive-text</code></td>
            <td><code>j-c-mono-50</code></td>
            <td>The text colour that can be used with the destructive colour.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-destructive-interaction-text)'}}></span></td>
            <td><code>j-c-destructive-interaction-text</code></td>
            <td><code>j-c-mono-50</code></td>
            <td>The 'interaction' version of the destructive text colour, used for things like hover effects..</td>
          </tr>
          </tbody>
        </table>

        <h2>Disabled</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-disabled)'}}></span></td>
            <td><code>j-c-disabled</code></td>
            <td><code>j-c-mono-300</code></td>
            <td>The colour of disabled UI elements.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-disabled-text)'}}></span></td>
            <td><code>j-c-disabled-text</code></td>
            <td><code>j-c-mono-600</code></td>
            <td>The text colour of disabled UI elements.</td>
          </tr>
          </tbody>
        </table>

        <h2>Background</h2>
        <p>For details on background colours, see the <a href="/?path=/story/foundations-layers--layers">Layers</a> documentation.</p>

        <h2>Interface</h2>
        <p>Potentially secondary colours for use in the UI such as borders, inputs etc? (TODO)</p>

        <h2>Text</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-text)'}}></span></td>
            <td><code>j-c-text</code></td>
            <td><code>j-c-mono-200</code></td>
            <td>The main colour used for text.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-text-emphasis)'}}></span></td>
            <td><code>j-c-text-emphasis</code></td>
            <td><code>j-c-mono-100</code></td>
            <td>he text colour used for emphasised text such as bold or italics.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-text-heading)'}}></span></td>
            <td><code>j-c-text-heading</code></td>
            <td><code>j-c-mono-100</code></td>
            <td>The text colour used for headings.</td>
          </tr>
          </tbody>
        </table>

        <h2>Status</h2>
        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Colour Token</th>
            <th>Usage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-info)'}}></span></td>
            <td><code>j-c-info</code></td>
            <td><code>j-c-blue-500</code></td>
            <td>Used to convey a piece of information which might be helpful.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-warning)'}}></span></td>
            <td><code>j-c-warning</code></td>
            <td><code>j-c-orange-500</code></td>
            <td>Used to convey a warning, something that the user should be aware of.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-danger)'}}></span></td>
            <td><code>j-c-danger</code></td>
            <td><code>j-c-red-500</code></td>
            <td>Used to convey danger, something the user needs to know about. More severe than a warning.</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-error)'}}></span></td>
            <td><code>j-c-error</code></td>
            <td><code>j-c-red-500</code></td>
            <td>Used to convey an error, for example on invalid input or when an action failed.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Variants() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Variants</h1>
        <p>Some components such as <code>JBadge</code> and <code>JTag</code> allow for colour customisation. In order
          to ensure accessibility only a limit number of colours are supported for these use cases.</p>

        <table className="colour-table">
          <thead>
          <tr>
            <th>Colour</th>
            <th>Token</th>
            <th>Example Badge</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-teal)'}}></span></td>
            <td><code>j-c-variant-teal</code></td>
            <td><JBadge text="Example" /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-white)'}}></span></td>
            <td><code>j-c-variant-white</code></td>
            <td><JBadge text="Example" variant={JColourVariants.white} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-blueGrey)'}}></span></td>
            <td><code>j-c-variant-blueGrey</code></td>
            <td><JBadge text="Example" variant={JColourVariants.blueGrey} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-red)'}}></span></td>
            <td><code>j-c-variant-red</code></td>
            <td><JBadge text="Example" variant={JColourVariants.red} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-orange)'}}></span></td>
            <td><code>j-c-variant-orange</code></td>
            <td><JBadge text="Example" variant={JColourVariants.orange} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-yellow)'}}></span></td>
            <td><code>j-c-variant-yellow</code></td>
            <td><JBadge text="Example" variant={JColourVariants.yellow} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-green)'}}></span></td>
            <td><code>j-c-variant-green</code></td>
            <td><JBadge text="Example" variant={JColourVariants.green} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-blue)'}}></span></td>
            <td><code>j-c-variant-blue</code></td>
            <td><JBadge text="Example" variant={JColourVariants.blue} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-purple)'}}></span></td>
            <td><code>j-c-variant-purple</code></td>
            <td><JBadge text="Example" variant={JColourVariants.purple} /></td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-variant-pink)'}}></span></td>
            <td><code>j-c-variant-pink</code></td>
            <td><JBadge text="Example" variant={JColourVariants.pink} /></td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
