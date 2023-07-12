import {JTag} from "./tag";
import {StorySection} from "../../development/story-section";
import {JColourVariants} from "../../00-foundations/colours/variants/colour-variants";

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
          variant={JColourVariants.white}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.blueGrey}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.red}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.orange}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.yellow}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.green}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.blue}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.purple}
          data={{
            text: "This is a tag",
            value: "value"
          }}
          onRemove={(value) => {}}
        />
      </StorySection>
      <StorySection>
        <JTag
          variant={JColourVariants.pink}
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
