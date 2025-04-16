import { ReactNode } from "react";

import "./story-section.css"

export interface StorySectionProps {
  label?: string;
  info?: string;
  children: ReactNode;
}

export function StorySection(props: StorySectionProps) {
  return (
    <div className="story-section">
      {props.label && (
        <h2 className="story-section__label">{props.label}</h2>
      )}
      <div className="story-section__content">{props.children}</div>
      {props.info && <p className="story-section__info">{props.info}</p>}
    </div>
  );
}
