import React, { useState } from "react";
import { Modal } from "./ui/modal";
import BlogAMP from "./blogs/BlogAMP";
import SafetyAndResponsibleAI from "./blogs/safety-and-responsible-ai";

const blogs = [
  {
    id: 1,
    category: "Upcoming Technologies",
    title: "How Google Docs Inspires Smarter Web Experiences with AMP Components",
    image: require("../assets/blog1.png"),
    date: "Sep 30, 2025",
    link: "/blog-content/BlogAMP"
  },
  {
    id: 2,
    category: "AI Safety",
    title: "Safety and Responsible AI: Building Safer AI Systems",
    image: require("../assets/blog2.png"),
    date: "Oct 1, 2025",
    link: "/blog-content/safety-and-responsible-ai"
  },
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const getBlogComponent = (link) => {
    switch(link) {
      case "/blog-content/BlogAMP":
        return <BlogAMP />;
      case "/blog-content/safety-and-responsible-ai":
        return <SafetyAndResponsibleAI />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-background text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Blogs</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl shadow-lg p-6 flex flex-col bg-card hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-xl mb-4 h-48 w-full object-cover"
            />
            <div className="text-xs font-semibold text-accent mb-2">{blog.category}</div>
            <div className="text-xl font-bold mb-4">{blog.title}</div>
            <div className="flex items-center justify-between mt-auto pt-4">
              <button
                className="ml-2 px-4 py-2 bg-accent text-on-accent rounded-lg font-semibold hover:opacity-90 transition"
                onClick={() => setSelectedBlog(blog.link)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedBlog}
        onClose={() => setSelectedBlog(null)}
      >
        {selectedBlog && getBlogComponent(selectedBlog)}
      </Modal>
    </div>
  );
}
