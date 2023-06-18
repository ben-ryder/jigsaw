import {JBadge} from "./badge";
import {StorySection} from "../../development/story-section";

export default {
  title: "Components/Badge",
  parameters: {
    status: {
      type: "experimental"
    }
  }
};

export function Default() {
  return (
    <>
      <StorySection>
        <JBadge>This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="white">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="blueGrey">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="red">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="green">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="orange">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="yellow">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="blue">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="purple">This is a badge</JBadge>
      </StorySection>
      <StorySection>
        <JBadge variant="pink">This is a badge</JBadge>
      </StorySection>
    </>
  )
}

export function CustomStyle() {
  return (
    <>
      <JBadge style={{
        backgroundColor: "#f00",
        color: "#fff"
      }}>This is a badge</JBadge>
      <p>This badge has custom CSS properties defining its colour</p>
    </>
  )
}
