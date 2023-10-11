import { JPillLink } from "./pill-link";
import { StorySection } from "../../../development/story-section";
import {JColourVariantsList} from "../../../00-foundations/colours/variants/colour-variants";

export default {
  title: "Atoms/Pills/PillLink",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  return (
    <>
      <StorySection>
        <JPillLink href="#">This is a pill link</JPillLink>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <JPillLink href="#" variant={variant}>{`This is a ${variant} pill link`}</JPillLink>
        </StorySection>
      )}
    </>
  );
}

export function Small() {
  return (
    <>
      <StorySection>
        <JPillLink href="#" size="sm">This is a small pill link</JPillLink>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <JPillLink href="#" size="sm" variant={variant}>{`This is a small ${variant} pill link`}</JPillLink>
        </StorySection>
      )}
    </>
  );
}
