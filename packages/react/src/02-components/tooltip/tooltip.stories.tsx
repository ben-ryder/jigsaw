import { JTooltip } from "./tooltip";
import { JIcon } from "../../01-atoms/icons/icon";
import { HelpCircleIcon } from "lucide-react";
import { StorySection } from "../../development/story-section";
import { JButton } from "../../01-atoms/button/button/button";

export default {
  title: "Components/Tooltip",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  return (
    <>
      <StorySection label="Light variant with icon">
        <JTooltip content={<p>This is a basic string</p>}>
          <JIcon variant='white'><HelpCircleIcon /></JIcon>
        </JTooltip>
      </StorySection>
      <StorySection label="Dark variant with renderAsChild using button">
        <JTooltip content={<p>This is a basic string</p>} renderAsChild={true} variant='dark'>
          <JButton>Example button</JButton>
        </JTooltip>
      </StorySection>
    </>
  );
}
