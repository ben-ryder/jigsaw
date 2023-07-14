import { ReactNode } from "react";

export interface StorySectionProps {
  label?: string;
  info?: string;
  children: ReactNode;
}

export function StorySection(props: StorySectionProps) {
  return (
    <div className="j-dev-story-section">
      {props.label && (
        <h2 className="j-dev-story-section__label">{props.label}</h2>
      )}
      <div className="j-dev-story-section__content">{props.children}</div>
      {props.info && <p className="j-dev-story-section__info">{props.info}</p>}
    </div>
  );
}
