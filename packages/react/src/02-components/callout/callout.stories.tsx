import { JCallout } from "./callout";

export default {
  title: "Components/Callout",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return <JCallout>This is a default info callout</JCallout>;
}

export function WithContent() {
  return (
    <JCallout>
      <p>
        <b>Top Tip:</b> Callouts are not just limited to basic markup, but can
        also contain some <b>bold text</b> and even some{" "}
        <i>italics like this</i>. Here's even more special things like{" "}
        <code>some code</code> and <a href="#">even a link</a>. This works
        because the callout content section extends the styling of the{" "}
        <code>Prose</code> component.
      </p>
    </JCallout>
  );
}

export function Warning() {
  return (
    <JCallout variant="warning">
      <p>
        This variant can highlight a warning or draw the users attention to
        something they should know about
      </p>
    </JCallout>
  );
}

export function Critical() {
  return (
    <JCallout variant="critical">
      <p>
        This variant can highlight a danger or error and is more severe than a
        warning.
      </p>
    </JCallout>
  );
}

export function Success() {
  return (
    <JCallout variant="success">
      <p>This variant can highlight a success or confirmation.</p>
    </JCallout>
  );
}
