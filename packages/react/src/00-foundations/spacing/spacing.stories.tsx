import {SIZES} from "./spacing";

export default {
  title: "Foundations",
};

type MotionData = {identifier: string, value: string}[];

export function Spacing() {
  const sizes = Object.keys(SIZES).map(key => {
    return {
      identifier: key,
      // @ts-ignore
      value: SIZES[key]
    }
  }) as MotionData;

  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Spacing</h1>
        <p>In order to keep the design system consistent and easy to develop with a spacing system is used.
          This system is not linear, meaning more options are available for smaller sizes where the
          difference between two values is more pronounced.</p>

        <p>A base value of <strong>16</strong> is used and all other values are calculated from that.
          For example:</p>
        <ul>
          <li><code>var(--j-spacing-0-75)</code> is <strong>16 x 0.75 = 12px</strong></li>
          <li><code>$j-spacing-32</code> is <strong>16 x 32 = 512px</strong></li>
        </ul>

        <p>This system is mainly used when adding space between elements and components, but it has been made
          generic as <code>var(--j-spacing-)</code>
          because it could also be used when picking the size of UI elements.
        </p>

        <div className="size-items">
          {sizes.map(size =>
            <div className="size-item" key={size.identifier}>
              <span style={{minWidth: `${size.value}`}}></span>
              <code>{size.identifier} / {size.value}</code>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}