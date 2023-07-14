import { JButtonGroup } from "./button-group";
import { JButton } from "../../01-atoms/button/button";
import { StorySection } from "../../development/story-section";

export default {
  title: "Layouts/Button Group",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return (
    <>
      <StorySection label="Default">
        <JButtonGroup>
          <JButton variant="destructive">Button 1</JButton>
          <JButton variant="secondary">Button 2</JButton>
          <JButton>Button 3</JButton>
        </JButtonGroup>
      </StorySection>

      <StorySection label="Separate End">
        <JButtonGroup separateEnd={true}>
          <JButton variant="destructive">Button 1</JButton>
          <JButton variant="secondary">Button 2</JButton>
          <JButton>Button 3</JButton>
        </JButtonGroup>
      </StorySection>
    </>
  );
}

export function LeftAlign() {
  return (
    <>
      <StorySection label="Left Align">
        <JButtonGroup align="left">
          <JButton variant="destructive">Button 1</JButton>
          <JButton variant="secondary">Button 2</JButton>
          <JButton>Button 3</JButton>
        </JButtonGroup>
      </StorySection>

      <StorySection label="Left Align & Seperate End">
        <JButtonGroup align="left" separateEnd={true}>
          <JButton variant="destructive">Button 1</JButton>
          <JButton variant="secondary">Button 2</JButton>
          <JButton>Button 3</JButton>
        </JButtonGroup>
      </StorySection>
    </>
  );
}
