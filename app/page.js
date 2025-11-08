export default function Page() {
  return (
    <main className="page">
      <section className="poster">
        <div className="poster__layer poster__layer--pattern" aria-hidden />
        <div className="poster__layer poster__layer--silhouette" aria-hidden />
        <div className="poster__bokeh poster__bokeh--one" aria-hidden />
        <div className="poster__bokeh poster__bokeh--two" aria-hidden />
        <div className="poster__bokeh poster__bokeh--three" aria-hidden />

        <div className="poster__content">
          <header className="poster__header">
            <span className="poster__badge">Islamic Q&amp;A</span>
          </header>

          <div className="poster__question">
            <span aria-hidden className="poster__question-shadow">
              Question Placeholder
            </span>
            <h1>
              ما هو أفضل وقت <br />
              للدعاء اليوم؟
            </h1>
            <p>
              Replace this with the featured question text for each Instagram Reel.
            </p>
          </div>

          <div className="poster__mufti">
            <span className="poster__label">Answer by</span>
            <span className="poster__name">Mufti [Full Name]</span>
            <span className="poster__title">Senior Islamic Scholar</span>
          </div>

          <footer className="poster__footer">
            <div className="poster__handle">
              <div className="poster__logo">Logo</div>
              <span>@YourInstaID</span>
            </div>
          </footer>
        </div>
      </section>

      <section className="guidance">
        <h2>Customizing the Reel Poster</h2>
        <ol>
          <li>Update the large Arabic question text inside the highlighted area.</li>
          <li>Replace the Mufti name and title with accurate credentials.</li>
          <li>Swap the logo placeholder with your brand mark if desired.</li>
          <li>Export the poster image at 1080×1920 for the best Instagram Reels quality.</li>
        </ol>
      </section>
    </main>
  );
}
