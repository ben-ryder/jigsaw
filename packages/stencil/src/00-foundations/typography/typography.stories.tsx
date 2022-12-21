export default {
  title: 'Foundations/Typography'
};


const Template = () => `
<style>
  .text-xs {
    font-size: var(--j-text-size-xs);
  }
  .text-sm {
    font-size: var(--j-text-size-sm);
  }
  .text-rg {
    font-size: var(--j-text-size-rg);
  }
  .text-md {
    font-size: var(--j-text-size-md);
  }
  .text-lg {
    font-size: var(--j-text-size-lg);
  }
  .text-xl {
    font-size: var(--j-text-size-xl);
  }
  .text-2xl {
    font-size: var(--j-text-size-2xl);
    line-height: 1.5;
  }
  .text-3xl {
    font-size: var(--j-text-size-3xl);
    line-height: 1.5;
  }
  .text-4xl {
    font-size: var(--j-text-size-4xl);
    line-height: 1.5;
  }
</style>
<j-content-section>
   <j-prose>
    <h1>Typography</h1>
    <p>Jigsaw uses a <a href="https://meyerweb.com/eric/tools/css/reset/">CSS reset</a> in order to remove all the
    default browser styling, which includes things like heading styles, bold, italics etc. This is done to avoid
    having to fight against default browser styles all the time.
    </p>

    <h2>Text Styling</h2>
    <p>Text styles for content including header sizes, bold, italics etc are provided by the <code><a href="/?path=/story/components-prose--prose">j-prose</a></code> component (inspired by <code><a href="https://tailwindcss.com/docs/typography-plugin">@tailwind/typography</a></code>)
    which lets you easily apply text styles to things like WYSIWYG outputs, converted markdown content or even just harcoded content that needs it.</p>

    <h2>Fonts</h2>
    <p>The primary font is <b>Source Sans Pro</b> which is used throughout the design system.</p>

    <h2>Text Sizes</h2>
    <div>
        <p class="text-xs"><code>--j-text-size-xs</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-sm"><code>--j-text-size-sm</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-rg"><code>--j-text-size-rg</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-md"><code>--j-text-size-md</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-lg"><code>--j-text-size-lg</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-xl"><code>--j-text-size-xl</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-2xl"><code>--j-text-size-2xl</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-3xl"><code>--j-text-size-3xl</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-4xl"><code>--j-text-size-4xl</code> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </j-prose>
</j-content-section>
`;

export const Typography = Template.bind({});
