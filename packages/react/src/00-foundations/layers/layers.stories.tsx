export default {
  title: "Foundations/Layers",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};


export function Layers() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Layers</h1>
        <p>Jigsaw generally has quite a flat design, however elevation & depth can still be conveyed through the use
          of different colour shades.
          Different shades can be used to mimic how light would work in the real world, so elements
          that appear over the top or "nearer" to the user would use a lighter shade.</p>
        <p>Shadows can also be used to improve this effect and z0index can be used to actually order things correctly.</p>


        <h2>Background Colours</h2>
        <p>A layer system of <strong>5</strong> shades is provided through the <code>j-c-background-</code> CSS variables:</p>

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
              <td><span style={{backgroundColor: 'var(--j-c-background-f2)'}}></span></td>
              <td><code>j-c-background-f2</code></td>
              <td><code>j-c-atom-100</code></td>
              <td>The second layer above the main content, can be used for popups, modals etc.</td>
            </tr>
            <tr>
              <td><span style={{backgroundColor: 'var(--j-c-background-f1)'}}></span></td>
              <td><code>j-c-background-f1</code></td>
              <td><code>j-c-atom-300</code></td>
              <td>The first layer above the main content, can be used for menus, side panels etc.</td>
            </tr>
            <tr>
              <td><span style={{backgroundColor: 'var(--j-c-background)'}}></span></td>
              <td><code>j-c-background</code></td>
              <td><code>j-c-atom-500</code></td>
              <td>The main content layer, can be used as the background of a page etc.</td>
            </tr>
            <tr>
              <td><span style={{backgroundColor: 'var(--j-c-background-b1)'}}></span></td>
              <td><code>j-c-background-b1</code></td>
              <td><code>j-c-atom-700</code></td>
              <td>The first layer below the main content, can be used for a background when the main content layer isn't appropriate.</td>
            </tr>
            <tr>
              <td><span style={{backgroundColor: 'var(--j-c-background-b2)'}}></span></td>
              <td><code>j-c-background-b2</code></td>
              <td><code>j-c-atom-800</code></td>
              <td>The second layer behind the main content.</td>
            </tr>
          </tbody>
        </table>

        <p>There are also two mid-layer shades which can be used when required.<br/>
          For example, tables have a background of <code>j-c-background-f1</code> but every other
          row has a background of <code>j-c-background-f0</code> as this makes the table easier to read, while
          also making sure the table still feels separate from the background.
        </p>

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
            <td><span style={{backgroundColor: 'var(--j-c-background-f0)'}}></span></td>
            <td><code>j-c-background-f0</code></td>
            <td><code>j-c-atom-400</code></td>
            <td>f0</td>
          </tr>
          <tr>
            <td><span style={{backgroundColor: 'var(--j-c-background-b0)'}}></span></td>
            <td><code>j-c-background-b0</code></td>
            <td><code>j-c-atom-600</code></td>
            <td>b0</td>
          </tr>
          </tbody>
        </table>

        <h2>Shadows</h2>
        <p>Although shades can be used to coney depth, shadows can also be used as well to enhance this
          effect.</p>
        <div className="panel-item panel-item--shadow-sm">
          <p>Small</p>
          <code>j-shadow-sm</code>
        </div>
        <div className="panel-item panel-item--shadow-md">
          <p>Medium</p>
          <code>j-shadow-md</code>
        </div>
        <div className="panel-item panel-item--shadow-lg">
          <p>Large</p>
          <code>j-shadow-lg</code>
        </div>
        <div className="panel-item panel-item--shadow-xl">
          <p>Extra Large</p>
          <code>j-shadow-xl</code>
        </div>

        <h2>z-index</h2>
        <p>These z-index values can be used to layer/order content.</p>

        <table className="colour-table">
          <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><code>j-z-layer-1</code></td>
            <td><code>20</code></td>
          </tr>
          <tr>
            <td><code>j-z-layer-2</code></td>
            <td><code>40</code></td>
          </tr>
          <tr>
            <td><code>j-z-layer-3</code></td>
            <td><code>60</code></td>
          </tr>
          <tr>
            <td><code>j-z-layer-4</code></td>
            <td><code>80</code></td>
          </tr>
          <tr>
            <td><code>j-z-layer-5</code></td>
            <td><code>100</code></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
