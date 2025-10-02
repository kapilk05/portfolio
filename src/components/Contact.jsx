import React, { useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatusMessage("✅ Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatusMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <section className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Let's Build Something Amazing</h2>
        <p className="text-center text-muted mb-12">
          I'm always excited to collaborate on innovative projects, share knowledge, or discuss new opportunities in AI and web development.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Ways to Connect</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Professional Inquiries</h4>
                <ul className="space-y-2">
                  <li>📧 kapilkashyap3105@gmail.com</li>
                  <li>📞 +91 8591425664</li>
                  <li>🔗 linkedin.com/in/kapilkashyap05</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Looking to Collaborate?</h4>
                <p className="text-sm text-muted-foreground">
                  I'm open to:
                  • AI/ML Projects
                  • Full Stack Development
                  • Research Collaborations
                  • Technical Writing
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 rounded-xl shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={`contact-${field}`} className="block mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={`contact-${field}`}
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    placeholder={`Your ${field}`}
                    required
                    className="w-full p-2 border rounded bg-input text-foreground border-border"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" className="block mb-1">Message</label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full p-2 border rounded bg-input text-foreground border-border"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-accent text-on-accent font-semibold rounded hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
