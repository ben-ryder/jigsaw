import {JContentSection} from "./content-section";
import {JProse} from "../../02-components/prose/prose";

export default {
  title: "Templates/Content Section",
};

export function Default() {
  return (
    <JContentSection>
      <JProse>
        <h1>This is the content section component</h1>
        <p>All this component does is make the area have a max-width of <code>var(--j-spacing-48)</code> which is useful for generally setting the maximum width of content on a page, especially for content pages like blog posts etc.</p>
        <p>The section also has horizontal padding of <code>var(--j-spacing-1)</code> so it works well with components such as the j-prose component on mobile without needing extra styling.</p>
      </JProse>
    </JContentSection>
  )
}
