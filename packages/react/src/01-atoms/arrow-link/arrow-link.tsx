import "./arrow-link.scss";

import {ReactNode} from "react";
import classNames from "classnames";
import {
  ArrowRight as RightArrowIcon,
  ArrowLeft as LeftArrowIcon
} from "lucide-react";

export interface JArrowLinkProps {
    direction?: "left" | "right",
    children: ReactNode,
    link: string
}

export function JArrowLink(props: JArrowLinkProps) {
    const className = classNames(
      "j-arrow-link",
      {
        "j-arrow-link--left": props.direction === "left"
      }
    );

    return (
      <a href={props.link} className={className}>
        <LeftArrowIcon className="j-icon j-arrow-link__icon-left" />
        {props.children}
        <RightArrowIcon className="j-icon j-arrow-link__icon-right" />
      </a>
    )
}
