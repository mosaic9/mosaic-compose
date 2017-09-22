# Guide

This guide can help you to explore mosaic and its components. Steps described below are really brief and would still require you to read references, look at diagrams and check the code. The primary goal here is to explore the basic concepts of mosaic and how they fit together.

## Request processing

Let's start from running the whole thing and understanding how routing works for our request:

We start with running the docker-compose services and requesting a page (if you haven't done this as part of README.md — do it now).


When you open the `http://localhost:9090/` page, various things happen:

- Skipper gets our request
- Matches it against its routes
- Applies filters for the matched route
- Proxies the request to the specified backend if present (in case of `<shunt>` sends the response straight away)

By default, the majority of the urls in the current setup will be consumed by Tailor (that's what happens now), Tailor will then try to match the incoming path to available templates and then process and multiplex them in case there are some fragments defined in the template. As you can see from the base template and the content template, there _are_ fragments to load. Tailor will start serving the content and pause whenever one waits for more data to come.

All fragments in this example point to Skipper. Skipper then proxies the requests to the corresponding backends.  (This 'star' style composition is optional.)


## Hello world fragment

You can try returning different things in the response and modifying the express app in different ways.

## New fragment

1. Create a new fragment: it can be a static file, small web-service, running docker images with exposing a http endpoint; run it
2. Add route in Skipper pointing to the fragment you created
3. Restart docker-compose setup (needed for static skipper routes to be taken into account)
4. Add a new fragment somewhere in the templates


## New template

1. Create a new template file
2. Add a route in Skipper with `setPath` corresponding to your newly created template and backend pointing to tailor
3. Add some markup to your template (slots, fragments)


## Directory structure

Each directory contains snippets of code for corresponding component.

Skipper contains route files which are mounted in the skipper directory. One of them `default-routes.eskip` is mounted at startup and contains a few basic routes that can be used in a tailor template to get an impression of how a fragments work.

Tailor contains two directories: `dev` & `templates`. The former one is for injecting tailor configuration and specifying the **name** of the base **body** template. All the templates (including the base one) live in the templates directory.


## References

* [Mosaic website](https://www.mosaic9.org/) — official website with links to nice talks about Mosaic
* [skipper](https://github.com/zalando/skipper)
* [tailor](https://github.com/zalando/tailor)
