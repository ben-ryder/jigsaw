import {JButton, JButtonVariant} from "./button";
import {StorySection} from "../../story-section";

export default {
  title: "Atoms/Button",
};

export function Default() {
  return (
    <>
      <StorySection>
        <JButton>Default</JButton>
      </StorySection>
      <StorySection>
        <JButton disabled={true}>Default Disabled</JButton>
      </StorySection>
      <StorySection>
        <JButton loading={true}>Default Loading</JButton>
      </StorySection>
    </>
  )
}

export function Secondary() {
  return (
    <>
      <StorySection>
        <JButton variant="secondary">Secondary</JButton>
      </StorySection>
      <StorySection>
        <JButton variant="secondary" disabled={true}>Secondary Disabled</JButton>
      </StorySection>
      <StorySection>
        <JButton variant="secondary" loading={true}>Secondary Loading</JButton>
      </StorySection>
    </>
  )
}

export function Tertiary() {
  return (
    <>
      <StorySection>
        <JButton variant="tertiary">Tertiary</JButton>
      </StorySection>
      <StorySection>
        <JButton variant="tertiary" disabled={true}>Tertiary Disabled</JButton>
      </StorySection>
      <StorySection>
        <JButton variant="tertiary" loading={true}>Tertiary Loading</JButton>
      </StorySection>
    </>
  )
}

export function Destructive() {
  return (
    <>
      <StorySection>
        <JButton variant="destructive">Destructive</JButton>
      </StorySection>
      <StorySection>
        <JButton variant="destructive" disabled={true}>Destructive Disabled</JButton>
      </StorySection>
      <StorySection>
        <JButton variant="destructive" loading={true}>Destructive Loading</JButton>
      </StorySection>
    </>
  )
}
