import { StorySection } from "../../../development/story-section/story-section";
import { JColourVariantsList } from "../../../00-foundations/colours/variants/colour-variants";
import { JPill } from "./pill";

export default {
  title: "Atoms/Pills/Pill",
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
        <JPill>Example Pill</JPill>
      </StorySection>
      {JColourVariantsList.map((variant) => (
        <StorySection key={variant}>
          <JPill variant={variant}>Example Pill</JPill>
        </StorySection>
      ))}
    </>
  );
}

export function Small() {
  return (
    <>
      <StorySection>
        <JPill size="sm">Example Pill</JPill>
      </StorySection>
      {JColourVariantsList.map((variant) => (
        <StorySection key={variant}>
          <JPill size="sm" variant={variant}>
            Example Pill
          </JPill>
        </StorySection>
      ))}
    </>
  );
}

export function Interactive() {
  return (
    <>
      <StorySection>
        <JPill interactive={true}>Example Pill</JPill>
      </StorySection>
      {JColourVariantsList.map((variant) => (
        <StorySection key={variant}>
          <JPill interactive={true} variant={variant}>
            Example Pill
          </JPill>
        </StorySection>
      ))}
    </>
  );
}

export function SmallInteractive() {
  return (
    <>
      <StorySection>
        <JPill interactive={true} size="sm">
          Example Pill
        </JPill>
      </StorySection>
      {JColourVariantsList.map((variant) => (
        <StorySection key={variant}>
          <JPill interactive={true} size="sm" variant={variant}>
            Example Pill
          </JPill>
        </StorySection>
      ))}
    </>
  );
}
