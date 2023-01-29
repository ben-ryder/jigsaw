import {ReactNode} from "react";

export interface ArrowLinkProps {
    direction?: "left" | "right",
    children: ReactNode,
    link: string
}

export function ArrowLink(props: ArrowLinkProps) {
    const classNames = ["j-arrow-link"];
    if (props.direction === "left") {
        classNames.push("j-arrow-link--left")
    }

    return (
      <a href={props.link} className={`${classNames.join(" ")}`}>
          <svg className="j-icon j-arrow-link__icon-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          {props.children}
          <svg className="j-icon j-arrow-link__icon-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
      </a>
    )
}
