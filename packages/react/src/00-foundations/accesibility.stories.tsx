export default {
  title: "Foundations/Accessibility",
};

export function Accessibility() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Accessibility</h1>
        <p>All of Jigsaw's components are built to be accessible and to follow <a href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA design patterns</a>.</p>
        <p>To save time and reduce the risk of me making mistakes while implementing these patterns, Jigsaw uses third party libraries to help develop component functionality:</p>

        <ul>
          <li><a href="https://www.radix-ui.com">Radix UI</a> primitives for most things that need to be accessible such as menus, modals etc.</li>
          <li><a href="https://www.downshift-js.com/use-combobox/">Downshift</a> to implement the Combobox component with multi select functionality.</li>
          <li><a href="https://github.com/pacocoursey/cmdk">cmdk</a> to implement the CommandBar component.</li>
        </ul>
      </div>
    </div>
  );
}
