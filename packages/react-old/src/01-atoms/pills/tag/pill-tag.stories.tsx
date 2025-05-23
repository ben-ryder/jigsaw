import { JPillTag } from "./pill-tag";
import { StorySection } from "../../../development/story-section/story-section";
import { JColourVariants } from "../../../00-foundations/colours/variants/colour-variants";

export default {
  title: "Atoms/Pills/PillTag",
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
        <JPillTag
          data={{
            text: "Example Pill",
            value: "value",
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      {JColourVariants.map((variant) => (
        <StorySection>
          <JPillTag
            data={{
              text: "Example Pill",
              value: "value",
            }}
            onRemove={(value) => {}}
            variant={variant}
          />
        </StorySection>
      ))}
    </>
  );
}

export function Small() {
  return (
    <>
      <StorySection>
        <JPillTag
          data={{
            text: "Example Pill",
            value: "value",
          }}
          onRemove={(value) => {}}
          size="sm"
        />
      </StorySection>
      {JColourVariants.map((variant) => (
        <StorySection>
          <JPillTag
            data={{
              text: "Example Pill",
              value: "value",
            }}
            onRemove={(value) => {}}
            variant={variant}
            size="sm"
          />
        </StorySection>
      ))}
    </>
  );
}
