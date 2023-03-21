import {JProse, JCallout, JContentSection, JButton} from "@ben-ryder/jigsaw-react";


export function App() {
  return (
    <JContentSection>
      <JProse>
        <h1>Jigsaw React Test</h1>
        <p>This is just a basic test app to ensure that the libraries work as expected in an application.</p>

        <p>Aliquam tristique felis luctus, <a href="#">facilisis enim et</a>, gravida libero. Pellentesque sit amet lorem nec dui accumsan scelerisque.</p>
        <p>Sed egestas ligula quis dapibus suscipit. <i>Nulla elementum</i> varius elit at convallis. <b>Proin maximus</b>, ipsum nec lacinia congue, massa augue mollis ante, sollicitudin finibus mi ante a arcu.</p>
        <ul>
          <li>This is a test</li>
          <li>This is a test two</li>
          <li>This is a test three</li>
        </ul>
      </JProse>
      <JButton>This is a button</JButton>
      <JCallout>
        <p>Gallia est omnis divisa in partes tres, quarum. <i>hasellus laoreet lorem</i> vel dolor <b>tempus</b> vehicula.</p>
      </JCallout>
    </JContentSection>
  )
}
