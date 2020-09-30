import ApplicationSerializer from "./application";

export default ApplicationSerializer.extend({
  links(post) {
    return {
      comments: {
        related: `/api/posts/${post.id}/comments`,
      },
    };
  },
});
