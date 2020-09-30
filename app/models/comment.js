import Model, { attr, belongsTo } from "@ember-data/model";

export default class CommentModel extends Model {
  @attr("string") body;

  @belongsTo("post") post;
}
