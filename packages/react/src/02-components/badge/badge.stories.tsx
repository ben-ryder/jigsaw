import { JBadge } from "./badge";
import { StorySection } from "../../development/story-section";

export default {
  title: "Components/Badge",
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
        <JBadge text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="white" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="blueGrey" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="red" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="orange" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="yellow" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="green" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="blue" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="purple" text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant="pink" text="This is a badge" />
      </StorySection>
    </>
  );
}

export function WithLink() {
  return (
    <>
      <StorySection>
        <JBadge text="This is a badge" href="#" />
      </StorySection>
      <StorySection>
        <JBadge
          variant="white"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant="blueGrey"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge variant="red" text="This is a badge" href="#" />
      </StorySection>
      <StorySection>
        <JBadge
          variant="orange"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant="yellow"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant="green"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant="blue"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant="purple"
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant="pink"
          text="This is a badge"
          href="#"
        />
      </StorySection>
    </>
  );
}
