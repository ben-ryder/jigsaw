export default {
  title: "Credits",
};

export function Credits() {
  return (
    <div className="j-content-section">
      <div className="j-prose">
        <h1>Credits</h1>
        <p>I couldn't have built a design system like this without
          using various articles, resources and other design systems for help and inspiration.</p>

        <ul>
          <li>
            <a href="https://www.refactoringui.com/">Refactoring UI</a>
            <ul>
              <li>Some really useful design tips and starting points for spacing, text size and shadow systems.</li>
            </ul>
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
            <ul>
              <li>Used to cross-reference spacing and text size systems.</li>
              <li>Some of Jigsaw's colour palettes started with Tailwind colours, although all have been modified.</li>
            </ul>
          </li>
          <li>
            <a href="https://blog.superhuman.com/how-to-design-delightful-dark-themes/">blog.superhuman.com</a>
            <ul>
              <li>Some great tips on how to design a dark mode, especially around achieving elevation and depth with colour.
              </li>
            </ul>
          </li>
          <li>
            <a href="https://seeds.sproutsocial.com/visual/motion/">seeds.sproutsocial.com</a>
            <ul>
              <li>My current motion and animation system is taken from this design system.</li>
            </ul>
          </li>
          <li>
            <a href="https://ionicframework.com/docs/layout/css-utilities#ionic-breakpoints">ionicframework.com</a>
            <ul>
              <li>My current breakpoints are taken from this design system.</li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  );
}
