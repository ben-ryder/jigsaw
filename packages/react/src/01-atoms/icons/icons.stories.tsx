export default {
title: "Atoms",
};

export function Icons() {
    return (
      <div className="j-content-section">
          <div className="j-prose">
              <h1>Icons</h1>
              <p>Jigsaw does not come with any predefined icons built in because there is no way
                  of knowing which icons consuming apps would need and including all icons from an icon library would
                  lead to package bloat. I may be able to implement some sort of icon tree-shaking system but that's
                  a lot of extra complexity for this base package.</p>

              <p>Right now it is assumed that icons will come from <a href="https://lucide.dev/">Lucide Icons</a>. For
                  this base
                  library, the SVG elements from Lucide icons are hardcoded into the component demos. It is assumed that
                  most applications using Jigsaw will use a library wrapper
                  like <code>@ben-ryder/jigsaw-react</code> and that these
                  libraries can then use the library-specific versions of Lucide icons such as <a
                    href="https://lucide.dev/docs/lucide-react">Lucide React</a>
                  for easily including the icons.</p>

              <p className="j-d-label">Loading Icon SVG Example (used in loading button etc)</p>
              <svg className="j-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>

              <h2>Icon Styling</h2>
              <p>When components need to make asusmptions about - and style - icons they target the CSS
                  class <code>j-icon</code>.</p>
          </div>
      </div>

    )
}