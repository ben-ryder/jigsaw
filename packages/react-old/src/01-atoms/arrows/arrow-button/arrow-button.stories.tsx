import { JArrowButton } from "./arrow-button";

export default {
  title: "Atoms/Arrows/Arrow Button",
  parameters: {
    status: {
      type: "stable",
    },
  },
};

export function RightArrow() {
  return (
    <JArrowButton
      onClick={() => {
        console.log("arrow button list");
      }}
    >
      Read More
    </JArrowButton>
  );
}

export function LeftArrow() {
  return (
    <JArrowButton
      onClick={() => {
        console.log("arrow button list");
      }}
      direction="left"
    >
      Back
    </JArrowButton>
  );
}

export function Minimal() {
  return (
    <JArrowButton
      onClick={() => {
        console.log("arrow button list");
      }}
      variant="minimal"
    >
      View All
    </JArrowButton>
  );
}
