export default {
    title: "Foundations",
};


export function Typography() {
    return (
      <div className="j-content-section">
          <div className="j-prose">
              <h1>Typography</h1>
              <p>Jigsaw uses a <a href="https://meyerweb.com/eric/tools/css/reset/">CSS reset</a> in order to remove all
                  the
                  default browser styling, which includes things like heading styles, bold, italics etc. This is done to
                  avoid
                  having to fight against default browser styles all the time.
              </p>

              <h2>Text Styling</h2>
              <p>Text styles for content including header sizes, bold, italics etc are provided by
                  the <code>Prose</code> component (inspired by <code><a
                    href="https://tailwindcss.com/docs/typography-plugin">@tailwind/typography</a></code>)
                  which lets you easily apply text styles to things like WYSIWYG outputs, converted markdown content or
                  even just harcoded content that needs it.</p>

              <h2>Fonts</h2>
              <p>The primary font is <b>Open Sans</b> which is used throughout the design system.</p>

              <h2>Text Sizes</h2>
              <div>
                  <p className="text-xs"><code>j-text-size-xs</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-sm"><code>j-text-size-sm</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-rg"><code>j-text-size-rg</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-md"><code>j-text-size-md</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-lg"><code>j-text-size-lg</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-xl"><code>j-text-size-xl</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-2xl"><code>j-text-size-2xl</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-3xl"><code>j-text-size-3xl</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
                  <p className="text-4xl"><code>j-text-size-4xl</code> - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</p>
              </div>
          </div>
      </div>
    )
}
