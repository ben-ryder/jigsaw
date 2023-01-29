
export default {
    title: "Atoms",
};

export function Hidden() {
    return (
      <>
          <div className="j-prose">
              <p>The <code>j-hidden</code> class can be used to <b>visually hide</b> something while keeping it
                  accessible to screen readers.</p>
              <p>There is an example below, not that you can see it...</p>
          </div>

          <p className="j-hidden">This text should be hidden</p>
      </>
    )
}

