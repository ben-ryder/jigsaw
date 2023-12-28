import { JButton } from "../../01-atoms/button/button/button";
import { JPanelPage } from "./panel-page";
import { JButtonGroup } from "../../03-organisms/button-group/button-group";

export default {
  title: "Layouts/PanelPage",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  return (
    <JPanelPage
      heading="This is a panel page"
      content={
        <>
        <p>This could be used for things like a login page, 404 page, message etc. This is <code>Prose</code> content so can contain anything, including <a href="#">links for example</a>.</p>

          <JButtonGroup>
            <JButton variant="secondary">Button 2</JButton>
            <JButton>Button 1</JButton>
          </JButtonGroup>
        </>
      }
    />
  );
}
