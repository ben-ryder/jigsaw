import { JBadge } from "./badge";
import { StorySection } from "../../development/story-section";
import { JColourVariants } from "../../00-foundations/colours/variants/colour-variants";

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
        <JBadge variant={JColourVariants.white} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.blueGrey} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.red} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.orange} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.yellow} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.green} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.blue} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.purple} text="This is a badge" />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.pink} text="This is a badge" />
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
          variant={JColourVariants.white}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.blueGrey}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge variant={JColourVariants.red} text="This is a badge" href="#" />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.orange}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.yellow}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.green}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.blue}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.purple}
          text="This is a badge"
          href="#"
        />
      </StorySection>
      <StorySection>
        <JBadge
          variant={JColourVariants.pink}
          text="This is a badge"
          href="#"
        />
      </StorySection>
    </>
  );
}
