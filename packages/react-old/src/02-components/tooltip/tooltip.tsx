import * as Tooltip from '@radix-ui/react-tooltip';
import { PropsWithChildren, ReactNode } from "react";

export type JTooltipPosition = "top" | "right" | "bottom" | "left";

import { JProse } from "../prose/prose.js";
import classNames from "classnames";

export type JTooltipVariant = 'light' | 'dark'

export interface JTooltipProps {
  preferredPosition?: JTooltipPosition,
  content: ReactNode,
  renderAsChild?: boolean,
  variant?: JTooltipVariant,
  delayDuration?: number
}

export interface JTooltipPropsWithChildren extends JTooltipProps, PropsWithChildren {}

export function JTooltip(props: JTooltipPropsWithChildren) {
  const popupClassName = classNames("j-tooltip__popup", {
    "j-tooltip__popup--dark": props.variant === "dark"
  })

  return (
    <Tooltip.Provider delayDuration={props.delayDuration ?? 400}>
      <Tooltip.Root>
        <Tooltip.Trigger className="j-tooltip" asChild={props.renderAsChild} type='button'>
          {props.children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={popupClassName}
            sideOffset={2}
            side={props.preferredPosition}
          >
            <JProse>{props.content}</JProse>
            <Tooltip.Arrow className="j-tooltip__arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
