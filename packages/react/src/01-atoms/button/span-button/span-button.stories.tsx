import { JSpanButton } from "./span-button";
import { StorySection } from "../../../development/story-section";
import { JButton } from "../button/button";

export default {
  title: "Atoms/Buttons/SpanButton",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return (
    <>
      <StorySection>
        <JSpanButton>Default</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton disabled={true}>Default Disabled</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton loading={true}>
          Default Loading
        </JSpanButton>
      </StorySection>
    </>
  );
}

export function Secondary() {
  return (
    <>
      <StorySection>
        <JSpanButton variant="secondary">Secondary</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton variant="secondary" disabled={true}>Secondary Disabled</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton variant="secondary" loading={true}>
          Secondary Loading
        </JSpanButton>
      </StorySection>
    </>
  );
}

export function Tertiary() {
  return (
    <>
      <StorySection>
        <JSpanButton variant="tertiary">Tertiary</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton variant="tertiary" disabled={true}>Tertiary Disabled</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton variant="tertiary" loading={true}>
          Tertiary Loading
        </JSpanButton>
      </StorySection>
    </>
  );
}

export function Destructive() {
  return (
    <>
      <StorySection>
        <JSpanButton variant="destructive">Destructive</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton variant="destructive" disabled={true}>Destructive Disabled</JSpanButton>
      </StorySection>
      <StorySection>
        <JSpanButton variant="destructive" loading={true}>
          Destructive Loading
        </JSpanButton>
      </StorySection>
    </>
  );
}
