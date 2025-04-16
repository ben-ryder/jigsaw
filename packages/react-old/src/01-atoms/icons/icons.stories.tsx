import { SmileIcon } from "lucide-react";
import { JIcon } from "./icon";

export default {
  title: "Atoms/Icons",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Icons() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Icons</h1>
        <p>
          Icons currently come from <a href="https://lucide.dev/">Lucide</a>,
          more specifically from the
          <a href="https://lucide.dev/docs/lucide-react">
            <code>lucide-react</code>
          </a>{" "}
          package.
        </p>

        <h2>Icon Component</h2>
        <p>
          The <code>{`<JIcon/>`}</code> component allows icon colour and size to
          be controlled, for example:
        </p>
        <pre>
          <code>{`<JIcon variant="red" size="md"><BinIcon /></JIcon>`}</code>
        </pre>

        <h3>Icon Sizes</h3>
        <p>
          Icon sizes directly match with the{" "}
          <a href="/?path=/story/foundations-typography--typography">
            text sizes
          </a>{" "}
          also defined in Jigsaw.
        </p>

        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <code>j-icon-size-xs</code>
            </td>
            <td>
              <code>18px</code>
            </td>
            <td>
              <JIcon size="xs">
                <SmileIcon />
              </JIcon>
            </td>
          </tr>
          <tr>
            <td>
              <code>j-icon-size-sm</code>
            </td>
            <td>
              <code>20px</code>
            </td>
            <td>
              <JIcon size="sm">
                <SmileIcon />
              </JIcon>
            </td>
          </tr>
          <tr>
            <td>
              <code>j-icon-size-rg</code>
            </td>
            <td>
              <code>24px</code>
            </td>
            <td>
              <JIcon size="rg">
                <SmileIcon />
              </JIcon>
            </td>
          </tr>
          <tr>
            <td>
              <code>j-icon-size-md</code>
            </td>
            <td>
              <code>28px</code>
            </td>
            <td>
              <JIcon size="md">
                <SmileIcon />
              </JIcon>
            </td>
          </tr>
          <tr>
            <td>
              <code>j-icon-size-lg</code>
            </td>
            <td>
              <code>32px</code>
            </td>
            <td>
              <JIcon size="lg">
                <SmileIcon />
              </JIcon>
            </td>
          </tr>
          <tr>
            <td>
              <code>j-icon-size-xl</code>
            </td>
            <td>
              <code>36px</code>
            </td>
            <td>
              <JIcon size="xl">
                <SmileIcon />
              </JIcon>
            </td>
          </tr>
          </tbody>
        </table>

        <h3>Icon Variants</h3>
        <p>
          Icon variants can be used to changes the colour of icons, these
          colours are taken from{" "}
          <a href="/?path=/story/foundations-colours--colours">
            Jigsaw's colour variables
          </a>
          .
        </p>

        <table>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>teal</code>
              </td>
              <td>
                <JIcon size="lg" variant="teal">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>white</code>
              </td>
              <td>
                <JIcon size="lg" variant="white">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>blueGrey</code>
              </td>
              <td>
                <JIcon size="lg" variant="blueGrey">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>red</code>
              </td>
              <td>
                <JIcon size="lg" variant="red">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>green</code>
              </td>
              <td>
                <JIcon size="lg" variant="green">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>orange</code>
              </td>
              <td>
                <JIcon size="lg" variant="orange">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>yellow</code>
              </td>
              <td>
                <JIcon size="lg" variant="yellow">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>blue</code>
              </td>
              <td>
                <JIcon size="lg" variant="blue">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>purple</code>
              </td>
              <td>
                <JIcon size="lg" variant="purple">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
            <tr>
              <td>
                <code>pink</code>
              </td>
              <td>
                <JIcon size="lg" variant="pink">
                  <SmileIcon />
                </JIcon>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Icon Visibility</h2>
        <p>
          In React it is possible to conditionally render things, for example in
          the context of icons this may involve rendering an "open" icon when
          something is open and a "close" icon when something is closed. While
          this would work perfectly well, in order to reduce the reliance on
          specific frameworks like React, in Jigsaw it's preferable to always
          render icons and then make use of CSS rules to determine which icon is
          visible.
        </p>
      </div>
    </div>
  );
}
