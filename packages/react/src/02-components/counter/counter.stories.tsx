import {JCounter} from "./counter";

export default {
  title: "Components/Counter",
};

export function Default() {
  return (
    <JCounter
      title="Example Counter"
      body="This is an example counter with interactive, client side JS which can be used for testing the library in other frameworks etc."
    />
  )
}
