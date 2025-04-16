import { ReactNode } from "react";

export interface JPanelPageProps {
  heading: string;
  content: ReactNode;
  extraContent?: ReactNode;
}

export function JPanelPage(props: JPanelPageProps) {
  return (
    <div className="j-panel-page">
      <div className="j-panel-page__panel">
        <h1 className="j-panel-page__panel-heading">{props.heading}</h1>
        <div className="j-panel-page__panel-text">
          <div className="j-prose">{props.content}</div>
        </div>
        <div className="j-panel-page__panel-extra-content">
          {props.extraContent && props.extraContent}
        </div>
      </div>
    </div>
  );
}