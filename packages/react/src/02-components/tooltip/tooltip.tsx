import * as Tooltip from '@radix-ui/react-tooltip';
import { PropsWithChildren, ReactNode } from "react";

export type JTooltipPosition = "top" | "right" | "bottom" | "left";

import { JProse } from "../prose/prose.js";

export interface JTooltipProps {
  preferredPosition?: JTooltipPosition,
  content: ReactNode
  renderAsChild?: boolean
}

export interface JTooltipPropsWithChildren extends JTooltipProps, PropsWithChildren {}

export function JTooltip(props: JTooltipPropsWithChildren) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger className='j-tooltip' asChild={props.renderAsChild}>
          {props.children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="j-tooltip__popup"
            sideOffset={2}
            side={props.preferredPosition}
          >
            <JProse>
              {props.content}
            </JProse>
            <Tooltip.Arrow className="j-tooltip__arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
