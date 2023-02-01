export default {
  title: "Foundations",
};


export function ElevationAndDepth() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Elevation and Depth</h1>
        <p>Jigsaw generally has quite a flat design, however elevation/depth can still be conveyed through the use
          of different colour shades.
          Different shades can be used to mimic how light would work in the real world, so elements
          that appear over the top or "nearer" to the user would use a lighter shade.</p>

        <p>A layer system of <strong>5</strong> shades is provided through the <code>$j-c-background</code> CSS
          variables:</p>
        <ul>
          <li><code>$j-c-background-b2</code> - The second layer behind the main content.</li>
          <li><code>var(--j-c-background-b1)</code> - The first layer below the main content, can be used for a
            background when the main content layer isn't appropriate.
          </li>
          <li><code>$j-c-background</code> - The main content layer, can be used as the background of a page.
          </li>
          <li><code>var(--j-c-background-f1)</code>- The first layer above the main content, can be used for
            menus, side panels etc.
          </li>
          <li><code>$j-c-background-f2</code> - The second layer above the main content, can be used for popups,
            modals etc.
          </li>
        </ul>

        <p>There are also two mid-layer
          shades <code>$j-c-background-b0</code> and <code>var(--j-c-background-f0)</code> which can be used when
          required.<br/>
          For example, tables in the <code>Prose</code> component have a background
          of <code>var(--j-c-background-f1)</code> but every other
          row has a background of <code>var(--j-c-background-f0)</code> as this makes the table easier to read.
        </p>

        <h2>Shadows</h2>
        <p>Although shades can be used to coney depth, shadows can also be used as well to enhance this
          effect.</p>
        <div className="panel-item panel-item--shadow-sm">
          <p>Small</p>
          <code>var(--j-shadow-sm)</code>
        </div>
        <div className="panel-item panel-item--shadow-md">
          <p>Medium</p>
          <code>var(--j-shadow-md)</code>
        </div>
        <div className="panel-item panel-item--shadow-lg">
          <p>Large</p>
          <code>var(--j-shadow-lg)</code>
        </div>
        <div className="panel-item panel-item--shadow-xl">
          <p>Extra Large</p>
          <code>var(--j-shadow-xl)</code>
        </div>
      </div>
    </div>
  )
}
