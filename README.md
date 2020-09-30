# ember-data-load-resources

This repo contains an example Ember and Ember Data application that is configured to load a model's relationship from a nested API endpoint. This isn't _totally_ clear how to do from Ember's documentation, but can in fact be done (and pretty easily, it turns out, too!).

There are two models here: [`Post`](./app/models/post.js) and [`Comment`](./app/models/comment.js).

In a typical set-up, when you load the comments for a `Post`, Ember Data will attempt to load every individual `Comment` record one at a time from the API endpoint used for `findRecord`. The number of API requests will scale with the number of comments. Not good!

The key here is to define the ["related resource link"](https://jsonapi.org/format/#document-resource-object-related-resource-links) per the JSON:API specification. This will instruct Ember Data _not_ to use `N` calls to `findRecord` to load the related records. Instead, the API endpoint defined as the "related" link will be used instead!

## Demo Site

The application itself is deployed to GitHub Pages and can be viewed here:

https://alexlafroscia.github.io/ember-data-example--nested-resources/

It's recommended that you view it with the JS console open, so that you can view the debugging log from [Mirage](https://miragejs.com/), which serves as our faux API. This helps to illustrate what API calls are being made and what the responses from the API should look like.
