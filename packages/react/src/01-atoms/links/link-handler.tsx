import { JTextLinkProps } from "./text-link/text-link.js";
import { JArrowLinkProps } from "./arrow-link/arrow-link.js";
import { JButtonLinkProps } from "./button-link/button-link.js";

export function LinkHelper(
  props: JTextLinkProps | JArrowLinkProps | JButtonLinkProps
) {
  if (props.href?.startsWith("/")) {
    const { href, children, ...htmlProps } = props;

    return (
      <>
        <a href={href} {...htmlProps}>
          {children} [INTERNAL]
        </a>
        <p style={{ marginTop: "10px" }}>
          example link handler in "as" prop added [INTERNAL] text to children
          prop
        </p>
      </>
    );
  }

  return <a {...props} />;
}
