import {COLOURS} from "./colours";

export default {
  title: "Foundations/Colours",
};

type ColourData = {identifier: string, value: string}[];


export function Colours() {
  const colours = Object.keys(COLOURS).map(key => {
    return {
      identifier: key,
      // @ts-ignore
      value: COLOURS[key]
    }
  }) as ColourData;

  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Colours</h1>
        <p>These are the colours used in this design system.</p>
        <p>The <strong>atom</strong> colour palette is the most
          important and is the main colour used for the background and interface.
          The <strong>teal</strong> colour palette is the next most important and is the main "brand" colour of
          the design system.</p>

        <h2>Colour Variables</h2>
        <p>All colour CSS variables in Jigsaw start with <code>$j-c-</code>, this includes all colour palette and
          contextual variables.</p>

        <h3>Contextual Colours</h3>
        <p>All colours have their base colour variables, but aditional "contextual" variables are provided that
          have meaning and are used in specific situations.
          This is an attempt to "decopule" the colour itself from its use in the design system, with the
          intention of making
          it easier to override these colours and potentially allowing for different "themes" at some point in
          the future.</p>

        <ul>
          <li><strong>Brand</strong>:</li>
          <ul>
            <li><strong>Primary</strong>:</li>
            <ul>
              <li><code>var(--j-c-primary)</code>/<code>var(--j-c-primary-text)</code> - The main brand colour and
                text colour which can be used with it.
              </li>
              <li><code>var(--j-c-primary-interaction)</code>/<code>var(--j-c-primary-interaction-text)</code> - A
                version of the main brand colours that can be used on interactions like hover.
              </li>
            </ul>
            <li><strong>Secondary</strong>:</li>
            <ul>
              <li><code>var(--j-c-secondary)</code>/<code>var(--j-c-secondary-text)</code> - The secondary brand
                colour and text colour which can be used with it.
              </li>
              <li><code>var(--j-c-secondary-interaction)</code>/<code>var(--j-c-secondary-interaction-text)</code> -
                A version of the secondary brand colours that can be used on interactions like hover.
              </li>
            </ul>
            <li><strong>Tertiary</strong>:</li>
            <ul>
              <li><code>var(--j-c-tertiary)</code> - The colour of any tertiary things like the "tertiary"
                button type. There are no other colour states as tertiary actions have more basic
                styling.
              </li>
            </ul>
            <li><strong>Disabled</strong>:</li>
            <ul>
              <li><code>$j-c-disabled</code> - The colour of disabled UI elements.</li>
              <li><code>var(--j-c-disabled-text)</code> - The text colour of disabled UI elements.</li>
            </ul>
          </ul>
          <li><strong>Background & UI</strong>:</li>
          <ul>
            <li><code>$j-c-background-</code> - A predefined system of shades which can be used for
              backgrounds, using the <code>$j-c-atom-</code> palette, for more details see the <a
                href="/?path=/story/foundations-elevation-and-depth--elevationand-depth">Elevation and
                Depth</a> page.
            </li>
            <li><code>$j-c-interface-</code> - ?? Possibly secondary colours for use in the UI,
              using <code>$j-c-blueGrey-</code>.
            </li>
          </ul>
          <li><strong>Text</strong>:</li>
          <ul>
            <li><code>var(--j-c-text)</code> - The main colour used for text.</li>
            <li><code>var(--j-c-text-emphasis)</code> - The text colour used for emphasised text such as bold or
              italics.
            </li>
            <li><code>var(--j-c-text)-heading</code> - The text used for headings.</li>
          </ul>
          <li><strong>Actions</strong>:</li>
          <ul>
            <li><strong>Destructive</strong>:</li>
            <ul>
              <li><code>var(--j-c-destructive)</code>/<code>var(--j-c-destructive-text)</code> - Used when an action
                will be destructive such as deleting or canceling something.
              </li>
              <li>
                <code>var(--j-c-destructive-interaction)</code>/<code>var(--j-c-destructive-interaction-text)</code> -
                Used for interactions such as hover.
              </li>
            </ul>
          </ul>
          <li><strong>Status</strong>:</li>
          <ul>
            <li><code>var(--$j-c-info)</code> - Used to convey a piece of information which might be helpful.
            </li>
            <li><code>$j-c-warning</code> - Used to convey a warning, something that the user should be
              aware of.
            </li>
            <li><code>$j-c-danger</code> - Used to convey danger, something the user needs to know about.
              More severe than a warning
            </li>
            <li><code>$j-c-error</code> - Used to convey an error, for example on invalid input or when an
              action failed.
            </li>
          </ul>
        </ul>

        <h2>Accessibility</h2>
        <p>Accessibility is important and all use of colour must at least meet <a
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
