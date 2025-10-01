import React from "react";
import { Route, Switch } from "wouter";
import Blogs from "./components/blogs";
import BlogAMP from "./components/blogs/BlogAMP";
import NotFound from "./pages/not-found";

export default function BlogRoutes() {
  return (
    <Switch>
      <Route path="/blogs" component={Blogs} />
      <Route path="/blogs/BlogAMP" component={BlogAMP} />
      <Route component={NotFound} />
    </Switch>
  );
}
