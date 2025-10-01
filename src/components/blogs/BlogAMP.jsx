import React from "react";

export default function BlogAMP() {
  return (
    <article style={{
      background: "var(--app-bg)",
      color: "var(--app-text)",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "32px",
      maxWidth: "800px",
      margin: "40px auto"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>
        How Google Docs Inspires Smarter Web Experiences with AMP Components
      </h1>
      <div style={{ fontSize: "1rem", color: "var(--app-text)", marginBottom: 16 }}>
        <strong>Kapil Kashyap</strong>, #OPEN_TO_WORK<br />
        SDE-1 @Skima AI | Django &amp; Ruby on Rails | LLMs | RAG Systems | Scalable AI Infrastructure &amp; Analytics<br />
        <span style={{ color: "#888" }}>September 28, 2025</span>
      </div>
      <p>You must have used Google Docs. When sharing access to a document, you might have received an email notifying you that someone is requesting access. What’s interesting is that you don’t even need to open Google Docs, you can grant or deny access directly from the email itself.</p>
      <p>Ever wondered how that works?</p>
      <p>This is a perfect example of how fast, interactive, and user friendly components can be embedded into lightweight experiences. And on the open web, one of the best frameworks enabling this is AMP (Accelerated Mobile Pages).</p>
      <h2>What Makes AMP Special</h2>
      <p>AMP started out as a way to make web pages load super fast on mobile, but honestly, its real power is in how it makes building interactive stuff way easier. Instead of juggling a ton of heavy scripts, AMP hands you a set of plug and play components that just work. Think of AMP as a streamlined version of HTML with built in components that act like smarter replacements for regular tags, making your pages lightweight and speedy by default.</p>
      <p>Some of the coolest ones are:</p>
      <ul>
        <li><strong>amp-form</strong> → instant forms with built in validation</li>
        <li><strong>amp-carousel</strong> → smooth, swipeable sliders</li>
        <li><strong>amp-img</strong> → images that resize perfectly on any screen</li>
        <li><strong>amp-analytics</strong> → tracking that doesn’t slow things down</li>
        <li><strong>amp-video</strong> → video that actually plays nice on mobile</li>
      </ul>
      <p>The vibe here is simple: you get rich functionality without the lag, and your users stay happy because nothing feels clunky.</p>
      <h2>Experimenting with AMP in the Playground</h2>
      <p>If you’re curious about how these components work, the best place to start is the AMP Playground. It’s an online tool where you can write AMP code, test it live, and instantly preview results.</p>
      <p>You can try building something as simple as a form or an image gallery in just a few lines of code and see how it loads lightning fast. The Playground also validates your code, so you know it’s following AMP’s performance standards.</p>
      <h2>Use Case</h2>
      <p>I recently used AMP to streamline the way candidate approvals happen in our system. Instead of using a shareable link that makes the hiring managers log in and go through multiple steps, I embedded AMP-powered actions directly inside the email. This allowed a hiring manager to approve or reject a job posting with a single click, right from their inbox. It cut out unnecessary friction, saved time, and made the approval process much smoother for everyone involved.</p>
      <h2>Why This Matters</h2>
      <p>Think about the Google Docs example again. The reason that experience feels so seamless is because it removes friction. You take action right inside the email instead of navigating somewhere else. AMP brings that same philosophy to the web.</p>
      <p>Whether you’re creating a landing page, an e-commerce site, or even a blog, AMP helps you deliver speed and interaction in a way that keeps users engaged and reduces drop offs. Faster pages mean happier users, better retention, and even SEO benefits.</p>
      <h2>Final Thoughts</h2>
      <p>Small design choices like removing unnecessary steps or making pages load instantly can completely change the way people experience your product. AMP components make it easier to create those experiences without adding complexity on the development side.</p>
      <p>If you’re building for mobile first users, exploring AMP is worth your time. Jump into the AMP Playground, try out a few components, and see how much faster and smoother your web experience can become.</p>
    </article>
  );
}
