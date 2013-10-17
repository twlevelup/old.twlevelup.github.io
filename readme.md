## Running locally

All changes should be made on the `source` branch. To preview the site locally:

    $ bundle install && bundle exec jekyll serve

Note that the normal Jekyll live-code reloading doesn't seem to work with the
sass plugin. If you make styling changes you'll have to restart the server.

## Building

    $ rake generate

## Deploying

**There is no staging. Please make sure that things work locally before
deploying.**

    $ rake publish

Brief technical notes: since we use custom plugins (haml, sass, etc) which
GitHub pages doesn't support our deployment is a bit odd. `rake publish` first
generates the site and then obliterates the existing origin/master replacing it
with the generated code by `push --force`'ing.
