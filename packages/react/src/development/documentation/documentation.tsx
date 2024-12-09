import {PropsWithChildren} from "react";
import {Unstyled} from "@storybook/blocks";

import "./documentation.css"

export function Documentation(props: PropsWithChildren) {
  return (
    <Unstyled>
      <div className="j-prose">
        {props.children}
      </div>
    </Unstyled>
  );
}
