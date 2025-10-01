import React from "react";
import { useLocation } from "wouter";

const blogs = [
  {
    id: 1,
    category: "Upcoming Technologies",
    title: "How Google Docs Inspires Smarter Web Experiences with AMP Components",
    image: "/blog1.png",
    date: "Sep 30, 2025",
    link: "/blogs/BlogAMP"
  },
  {
    id: 2,
    category: "How-to Guides",
    title: "Legal Recruiting Ultimate Guide: 7-Step Process & Benefits",
    image: "/blog2.png",
    date: "Sep 30, 2025",
    link: "/blogs/legal-recruiting-guide"
  },
];

export default function Blogs() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen py-12 px-4 bg-background text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Blogs</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
                onClick={() => window.open(blog.link, '_blank')}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
