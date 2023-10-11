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
        <JPillLink href="#">Example Pill</JPillLink>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <JPillLink href="#" variant={variant}>Example Pill</JPillLink>
        </StorySection>
      )}
    </>
  );
}

export function Small() {
  return (
    <>
      <StorySection>
        <JPillLink href="#" size="sm">Example Pill</JPillLink>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <JPillLink href="#" size="sm" variant={variant}>Example Pill</JPillLink>
        </StorySection>
      )}
    </>
  );
}
