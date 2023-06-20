import {JTag} from "./tag";
import {StorySection} from "../../development/story-section";

export default {
  title: "Components/Tag",
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
        <JTag
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="white"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="blueGrey"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="red"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="green"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="orange"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="yellow"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="blue"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="purple"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="pink"
          text="This is a badge"
          value="one"
          onRemove={(value) => {}}
        />
      </StorySection>
    </>
  )
}

export function CustomStyles() {
  return (
    <>
      <StorySection>
        <JTag
          text="This uses custom styles!"
          value="one"
          onRemove={(value) => {}}
          style={{
            backgroundColor: "#00f",
            color: "#fff",
            textTransform:  "uppercase"
          }}
        />
      </StorySection>
    </>
  )
}
