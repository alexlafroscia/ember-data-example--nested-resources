export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const post = server.create("post");

  server.createList("comment", 3, {
    post,
  });
}
