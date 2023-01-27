export default {
  title: "Foundations",
};

export function Borders() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Borders</h1>
        <p>Borders can be used to separate content and make the interface clearer, but they can also be used decoratively.
          Jigsaw provides a number of predefined width and radius values.</p>

        <h2>Border Radius</h2>
        <p>Giving something a border radius is a great way to soften up hard edges and make the interface more "friendly".<br/>
          In Jigsaw, the small radius can be used on UI elements like panels to soften up the edges, and the
          medium radius can be used when a rounded effect is specifically desired such as on form elements or buttons.</p>
        <div className="border-item border-item--radius-sm">
          <p>Small (4px)</p>
          <code>var(--j-border-radius-sm)</code>
        </div>
        <div className="border-item border-item--radius-md">
          <p>Medium (6px)</p>
          <code>var(--j-border-radius-md)</code>
        </div>
        <div className="border-item border-item--radius-lg">
          <p>Large (8px)</p>
          <code>var(--j-border-radius-lg)</code>
        </div>

        <h2>Border Width</h2>
        <p>The small width can be used in most situations. The medium is most notably used for form elements
          and the large and extra large widths are used decoratively and will most often be used on only one side of the element such as the top or left.</p>
        <div className="border-item border-item--width-sm">
          <p>Small (1px)</p>
          <code>var(--j-border-width-sm)</code>
        </div>
        <div className="border-item border-item--width-md">
          <p>Medium (2px)</p>
          <code>var(--j-border-width-md)</code>
        </div>
        <div className="border-item border-item--width-lg">
          <p>Large (4px)</p>
          <code>var(--j-border-width-lg)</code>
        </div>
        <div className="border-item border-item--width-xl">
          <p>Extra Large (8px)</p>
          <code>var(--j-border-width-lg)</code>
        </div>
      </div>
    </div>
  );
}
