import { JPillButton } from "./pill-button";
import { StorySection } from "../../../development/story-section";
import {JColourVariantsList} from "../../../00-foundations/colours/variants/colour-variants";

export default {
  title: "Atoms/Pills/PillButton",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

function buttonOnClick() {
  console.log("Button onClick called!")
}

export function Default() {
  return (
    <>
      <StorySection>
        <JPillButton onClick={buttonOnClick}>Example Pill</JPillButton>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <JPillButton onClick={buttonOnClick} variant={variant}>Example Pill</JPillButton>
        </StorySection>
      )}
    </>
  );
}

export function Small() {
  return (
    <>
      <StorySection>
        <JPillButton onClick={buttonOnClick} size="sm">Example Pill</JPillButton>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <JPillButton size="sm" onClick={buttonOnClick} variant={variant}>Example Pill</JPillButton>
        </StorySection>
      )}
    </>
  );
}
