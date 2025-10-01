import React from "react";
import blog2 from "../../assets/blog2.png";

export default function SafetyAndResponsibleAI() {
  return (
    <div className="py-12 px-4 md:px-8">
      <article className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
              
            {/* Title Section */}
            <div className="px-6 md:px-8 pt-6 md:pt-8 pb-2 md:pb-3">
              <h1 className="text-4xl font-bold leading-tight mb-2">
               Safety and Responsible AI: Building Safer AI Systems
              </h1>
              <p className="text-sm text-muted-foreground mb-0">
                By <strong>Kapil Kashyap</strong> · September 28, 2025
              </p>
            </div>
      
            {/* Hero Image */}
            <div className="w-full">
              <img
                src={blog2}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

        {/* Article Content */}
        <div className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
          {/* Introduction with highlighted box */}
          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20 mb-8">
            <p className="my-0 text-lg">
              In the rapidly evolving landscape of artificial intelligence, particularly with Large Language Models (LLMs),
              ensuring safety and responsible deployment has become paramount. The challenge lies not just in creating
              powerful AI systems, but in making sure they operate within ethical boundaries and produce safe, unbiased
              responses.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Need for AI Safety Layers</h2>
          <div className="md:flex md:gap-8">
            <div className="md:w-2/3">
              <p>
                As AI systems become more sophisticated and widely deployed, the importance of incorporating robust safety
                measures cannot be overstated. Without proper safeguards, AI systems might generate:
              </p>
              <div className="my-8 bg-card rounded-lg shadow-sm border p-6">
                <ul className="grid gap-4 list-none p-0">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Toxic or harmful content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Biased responses that perpetuate stereotypes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Unsafe recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Personally identifiable information (PII)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-primary/10 p-4 rounded-lg text-primary-foreground mt-4 md:mt-0">
                <p className="m-0 text-sm">
                  "Safety is not just an add-on feature; it's a fundamental requirement for responsible AI deployment"
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Available Safety Tools</h2>
          <p className="text-lg mb-8">
            Several powerful tools have emerged to help developers implement safety layers in their AI applications:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">GuardrailsAI</h3>
              <p className="m-0">
                GuardrailsAI provides a robust framework for implementing safety measures in AI systems. It allows developers
                to define specific rules and boundaries for AI responses, ensuring they meet safety and ethical standards.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">OpenAI Moderation API</h3>
              <p className="m-0">
                OpenAI's Moderation API is designed specifically to detect and filter potentially harmful or inappropriate
                content. It can identify various categories of concerning content and help maintain safe user interactions.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Microsoft Presidio</h3>
              <p className="m-0">
                Presidio is an open-source tool that helps protect sensitive information. It excels at identifying and
                redacting sensitive information from text, making it invaluable for privacy protection.
              </p>
            </div>
          </div>

          <div className="my-12 border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold mb-6">Key Implementation Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p>
                  When implementing AI safety measures, it's crucial to consider both proactive and reactive approaches.
                  Proactive measures include content filtering, input validation, and output sanitization. Reactive measures
                  involve monitoring, logging, and response mechanisms for when safety issues are detected.
                </p>
              </div>
              <div>
                <p>
                  Regular testing and updates are essential, as new types of harmful content and attack vectors emerge.
                  Safety systems should be treated as living components that require ongoing maintenance and improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-accent/5 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p>
              As AI continues to evolve and become more integrated into our daily lives, the importance of safety
              measures will only grow. Developers and organizations must prioritize safety from the start, making it
              an integral part of the AI development process rather than an afterthought.
            </p>
            <p className="mb-0">
              The future of AI lies not just in its capabilities, but in our ability to ensure it remains safe,
              ethical, and beneficial for all users. By implementing robust safety measures today, we're building
              a foundation for more responsible AI systems tomorrow.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
