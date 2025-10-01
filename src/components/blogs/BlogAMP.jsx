import React from "react";
import blog1 from "../../assets/blog1.png";

export default function BlogAMP() {
  return (
    <div className="py-12 px-4 md:px-8">
      <article className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
        
      {/* Title Section */}
      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-2 md:pb-3">
        <h1 className="text-4xl font-bold leading-tight mb-2">
          How Google Docs Inspires Smarter Web Experiences with AMP Components?
        </h1>
        <p className="text-sm text-muted-foreground mb-0">
          By <strong>Kapil Kashyap</strong> · September 28, 2025
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src={blog1}
          alt="AMP Components Blog Cover"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>


        {/* Article Content */}
        <div className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none"> </div>

        <div className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          {/* Introduction with highlighted box */}
          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20 mb-8">
            <p className="my-0 text-lg">
              You must have used Google Docs. When sharing access to a document, you might have received an email 
              notifying you that someone is requesting access. What's interesting is that you don't even need to 
              open Google Docs, you can grant or deny access directly from the email itself.
            </p>
          </div>

          <p className="text-lg italic">Ever wondered how that works?</p>
          <div className="md:flex md:items-start md:gap-8 my-8">
            <div className="md:w-2/3">
              <p>
                This is a perfect example of how fast, interactive, and user friendly components can be embedded 
                into lightweight experiences. And on the open web, one of the best frameworks enabling this is 
                AMP (Accelerated Mobile Pages).
              </p>
            </div>
            <div className="md:w-1/3 bg-muted rounded-lg p-4 mt-4 md:mt-0">
              <p className="text-sm font-medium text-muted-foreground m-0">
                "AMP brings interactive components that make web experiences faster and more engaging"
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">What Makes AMP Special</h2>
          <div className="md:flex md:gap-8">
            <div className="md:w-2/3">
              <p>
                AMP started out as a way to make web pages load super fast on mobile, but honestly, its real 
                power is in how it makes building interactive stuff way easier. Instead of juggling a ton of 
                heavy scripts, AMP hands you a set of plug and play components that just work.
              </p>
            </div>
            <div className="md:w-1/3">
              <p className="bg-primary/10 p-4 rounded-lg text-primary-foreground">
                Think of AMP as a streamlined version of HTML with built in components that act like smarter replacements 
                for regular tags, making your pages lightweight and speedy by default.
              </p>
            </div>
          </div>

          <div className="my-8 bg-card rounded-lg shadow-sm border p-6">
            <p className="font-semibold mb-4">Some of the coolest ones are:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <strong>amp-form</strong> instant forms with built in validation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <strong>amp-carousel</strong> smooth, swipeable sliders
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <strong>amp-img</strong> images that resize perfectly on any screen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <strong>amp-analytics</strong> tracking that doesn't slow things down
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <strong>amp-video</strong> video that actually plays nice on mobile
              </li>
            </ul>
          </div>

          <p className="text-lg">
            The vibe here is simple: you get rich functionality without the lag, and your users stay 
            happy because nothing feels clunky.
          </p>

          <div className="my-12 border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold mb-6">Experimenting with AMP in the Playground</h2>
            <p>
              If you're curious about how these components work, the best place to start is the AMP Playground. 
              It's an online tool where you can write AMP code, test it live, and instantly preview results.
            </p>
            <p>
              You can try building something as simple as a form or an image gallery in just a few lines of 
              code and see how it loads lightning fast. The Playground also validates your code, so you know 
              it's following AMP's performance standards.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Use Case</h2>
          <div className="bg-muted p-6 rounded-lg">
            <p>
              I recently used AMP to streamline the way candidate approvals happen in our system. Instead of 
              using a shareable link that makes the hiring managers log in and go through multiple steps, I 
              embedded AMP-powered actions directly inside the email. This allowed a hiring manager to approve 
              or reject a job posting with a single click, right from their inbox.
            </p>
            <p className="m-0">
              It cut out unnecessary friction, saved time, and made the approval process much smoother for everyone involved.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Why This Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p>
                Think about the Google Docs example again. The reason that experience feels so seamless is because 
                it removes friction. You take action right inside the email instead of navigating somewhere else. 
                AMP brings that same philosophy to the web.
              </p>
            </div>
            <div>
              <p>
                Whether you're creating a landing page, an e-commerce site, or even a blog, AMP helps you deliver 
                speed and interaction in a way that keeps users engaged and reduces drop offs. Faster pages mean 
                happier users, better retention, and even SEO benefits.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-accent/5 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            <p>
              Small design choices like removing unnecessary steps or making pages load instantly can completely 
              change the way people experience your product. AMP components make it easier to create those 
              experiences without adding complexity on the development side.
            </p>
            <p className="mb-0">
              If you're building for mobile first users, exploring AMP is worth your time. Jump into the AMP 
              Playground, try out a few components, and see how much faster and smoother your web experience 
              can become.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

