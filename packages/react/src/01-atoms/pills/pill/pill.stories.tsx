import { StorySection } from "../../../development/story-section";
import {JColourVariantsList} from "../../../00-foundations/colours/variants/colour-variants";

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
        <div className="j-pill">This is a pill</div>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <div className={`j-pill j-pill--${variant}`}>{`This is a ${variant} pill`}</div>
        </StorySection>
      )}
    </>
  );
}

export function Small() {
  return (
    <>
      <StorySection>
        <div className="j-pill j-pill--sm">This is a small pill</div>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <div className={`j-pill j-pill--sm j-pill--${variant}`}>{`This is a small ${variant} pill`}</div>
        </StorySection>
      )}
    </>
  );
}

export function Interactive() {
  return (
    <>
      <StorySection>
        <div className="j-pill j-pill--interactive">This is an interactive pill</div>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <div className={`j-pill j-pill--interactive j-pill--${variant}`}>{`This is an interactive ${variant} pill`}</div>
        </StorySection>
      )}
    </>
  );
}

export function SmallInteractive() {
  return (
    <>
      <StorySection>
        <div className="j-pill j-pill--sm j-pill--interactive">This is an interactive pill</div>
      </StorySection>
      {JColourVariantsList.map(variant =>
        <StorySection key={variant}>
          <div className={`j-pill j-pill--sm j-pill--interactive j-pill--${variant}`}>{`This is an interactive ${variant} pill`}</div>
        </StorySection>
      )}
    </>
  );
}
