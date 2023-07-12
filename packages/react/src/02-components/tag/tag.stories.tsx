import {JTag} from "./tag";
import {StorySection} from "../../development/story-section";
import {ColourVariants} from "../../00-foundations/colours/variants/colour-variants";

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
          variant={ColourVariants.white}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.blueGrey}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.red}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.orange}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.yellow}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.green}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.blue}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.purple}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={ColourVariants.pink}
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
