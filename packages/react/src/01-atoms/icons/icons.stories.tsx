export default {
title: "Atoms/Icons",
};

export function Icons() {
    return (
      <div className="j-content-section">
          <div className="j-prose">
              <h1>Icons</h1>

              <p>Icons currently come from <a href="https://lucide.dev/">Lucide</a>, more specifically from the
                  <a href="https://lucide.dev/docs/lucide-react"><code>lucide-react</code></a> package.
              </p>

              <h2>Icon Styling</h2>

              <p>When styling has to be applied to icons the <code>j-icon</code> class
                  should be added to the icon and then used as the target for CSS. For example:</p>

              <pre>
                  <code>{`<LucideIcon className="j-icon" />`}</code>
              </pre>

              <h2>Icon Visibility</h2>

              <p>In React it is possible to conditionally render things, for example in the context of icons this may involve rendering an "open" icon when
              something is open and a "close" icon when something is closed. While this would work perfectly well, in order
              to reduce the reliance on specific frameworks like React, in Jigsaw it's preferable to always render icons
              and then make use of CSS rules to determine which icon is visible.</p>
          </div>
      </div>

    )
}
