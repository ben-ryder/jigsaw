export default {
  title: "Foundations/Breakpoints",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

export function Breakpoints() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Breakpoints</h1>
        <p>Breakpoints can be used to alter the layout and styling of components at different screen sizes.
            In Jigsaw, components are designed mobile-first which means the mobile styling should be created first
            and then breakpoints can be used to change the styling as the screen width increases.</p>

        <table>
          <thead><tr><th>Token</th><th>Value</th><th>Notes</th></tr></thead>
          <tbody>
          <tr><td>n/a</td><td><code>0px</code></td><td>Included for reference, the "default size" is from 0px.</td></tr>
          <tr><td><code>j-breakpoint-sm</code></td><td><code>576px</code></td><td></td></tr>
          <tr><td><code>j-breakpoint-md</code></td><td><code>768px</code></td><td></td></tr>
          <tr><td><code>j-breakpoint-lg</code></td><td><code>992px</code></td><td></td></tr>
          <tr><td><code>j-breakpoint-xl</code></td><td><code>1200px</code></td><td></td></tr>
          </tbody>
        </table>

        <h2>Breakpoint Mixins</h2>
        <p>The mixin <code>breakpoint()</code> can be used in <code>.scss</code> files to include styles
        for specific breakpoints like so:</p>

        <pre>
            <code>
{`@include breakpoint(md) {
  font-weight: bold;
}`}
            </code>
        </pre>

        <p>Because CSS variables can't be used for media query values, a <code>$breakpoints</code> SASS
          variable is used on this occasion.</p>
      </div>
    </div>
  )
}
