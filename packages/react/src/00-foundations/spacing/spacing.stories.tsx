import { SIZES } from "./spacing";

export default {
  title: "Foundations/Spacing",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

type MotionData = { identifier: string; value: string }[];

export function Spacing() {
  const sizes = Object.keys(SIZES).map((key) => {
    return {
      identifier: key,
      // @ts-ignore
      value: SIZES[key],
    };
  }) as MotionData;

  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Spacing</h1>
        <p>
          In order to keep the design system consistent and easy to develop with
          a spacing system is used. This system is not linear, meaning more
          options are available for smaller sizes where the difference between
          two values is more pronounced.
        </p>

        <p>
          A base value of <strong>2</strong> is used and all other values are
          calculated from that. For example:
        </p>
        <ul>
          <li>
            <code>j-space-4</code> is <strong>2 x 4 = 8px</strong>
          </li>
          <li>
            <code>j-space-16</code> is <strong>2 x 16 = 32px</strong>
          </li>
        </ul>

        <p>Here is a full list of the available spacing options:</p>

        <div className="size-items">
          {sizes.map((size) => (
            <div className="size-item" key={size.identifier}>
              <span style={{ minWidth: `${size.value}` }}></span>
              <code>
                {size.identifier}
                {` | `}
                {size.value}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
