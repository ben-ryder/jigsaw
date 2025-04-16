import { ReactNode } from "react";
import { ChevronDown as OpenIcon, ChevronUp as CloseIcon } from "lucide-react";

export interface JAccordionProps {
  children: ReactNode;
}

export function JAccordion(props: JAccordionProps) {
  return <div className="j-accordion">{props.children}</div>;
}

export interface JAccordionItemProps {
  title: string;
  children: ReactNode;
}

export function JAccordionItem(props: JAccordionItemProps) {
  return (
    <details className="j-accordion__item">
      <summary className="j-accordion__item-title">
        {props.title}
        <OpenIcon className="j-icon j-accordion__open-icon" />
        <CloseIcon className="j-icon j-accordion__close-icon" />
      </summary>
      <div className="j-accordion__item-content">{props.children}</div>
    </details>
  );
}
