import { JTooltip } from "./tooltip";
import { JIcon } from "../../01-atoms/icons/icon";
import { HelpCircleIcon } from "lucide-react";

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
      <JTooltip tooltip="This is a basic string">
        <button>
          <JIcon>
            <HelpCircleIcon />
          </JIcon>
        </button>
      </JTooltip>

      <JTooltip tooltip="This is a basic string" preferredPosition="right">
        <button>
          <JIcon>
            <HelpCircleIcon />
          </JIcon>
        </button>
      </JTooltip>
    </>
  );
}
