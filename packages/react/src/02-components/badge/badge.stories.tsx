import {JBadge} from "./badge";
import {StorySection} from "../../development/story-section";
import {ColourVariants} from "../../00-foundations/colours/variants/colour-variants";

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
        <JBadge
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.white}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.blueGrey}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.red}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.orange}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.yellow}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.green}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.blue}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.purple}
          text="This is a badge"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.pink}
          text="This is a badge"
        />
      </StorySection>
    </>
  )
}

export function WithLink() {
  return (
    <>
      <StorySection>
        <JBadge
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.white}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.blueGrey}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.red}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.orange}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.yellow}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.green}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.blue}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.purple}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={ColourVariants.pink}
          text="This is a badge"
          href="#"
        />
      </StorySection>
    </>
  )
}
