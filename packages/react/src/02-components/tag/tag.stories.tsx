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
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="white"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="blueGrey"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="red"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="green"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="orange"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="yellow"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="blue"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="purple"
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant="pink"
          data={{
            text: "This is a tag",
            value: "value"
          }}
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