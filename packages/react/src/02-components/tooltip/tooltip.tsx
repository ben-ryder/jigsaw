import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";

export type JTooltipPosition = "top" | "right" | "bottom" | "left";

export interface JTooltipProps extends PropsWithChildren {
  preferredPosition?: JTooltipPosition,
  tooltip: string | ReactNode
}

export function JTooltip(props: JTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={350}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {props.children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="j-tooltip" sideOffset={5} side={props.preferredPosition}>
            {props.tooltip}
            <Tooltip.Arrow className="j-tooltip__arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
