import { JBadge } from "../01-atoms/pills/pill-link/pill-link";

export default {
  title: "Statuses",
};

export function Statuses() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Statuses</h1>
        <p>
          All parts of the component library have a status which shows how
          stable they are for use.
          <br />
          There are currently four statuses, shown below:
        </p>

        <table>
          <thead>
            <tr>
              <th>Badge Example</th>
              <th>Identifier</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <JBadge variant="red" text="Experimental" />
              </td>
              <td>
                <code>experimental</code>
              </td>
              <td>
                In development, use cases still being ironed out, not at all
                ready for production use.
              </td>
            </tr>
            <tr>
              <td>
                <JBadge variant="orange" text="Unstable" />
              </td>
              <td>
                <code>unstable</code>
              </td>
              <td>
                Initially developed but still needs more refinement, could use
                in production but things might change.
              </td>
            </tr>
            <tr>
              <td>
                <JBadge variant="green" text="Stable" />
              </td>
              <td>
                <code>stable</code>
              </td>
              <td>
                Ready for use in production, unlikely to have major changes.
              </td>
            </tr>
            <tr>
              <td>
                <JBadge variant="red" text="Deprecated" />
              </td>
              <td>
                <code>deprecated</code>
              </td>
              <td>
                Being phased out and/or replaced, use the replacement instead.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
