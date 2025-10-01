import React from "react";
import { Route, Switch } from "wouter";
import BlogAMP from "./components/blogs/BlogAMP";
import SafetyAndResponsibleAI from "./components/blogs/safety-and-responsible-ai";
import NotFound from "./pages/not-found";

export default function BlogContentRoutes() {
  return (
    <Switch>
      <Route path="/blog-content/BlogAMP" component={BlogAMP} />
      <Route path="/blog-content/safety-and-responsible-ai" component={SafetyAndResponsibleAI} />
      <Route component={NotFound} />
    </Switch>
  );
}