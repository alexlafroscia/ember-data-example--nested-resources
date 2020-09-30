import Model, { attr, hasMany } from "@ember-data/model";

export default class PostModel extends Model {
  @attr("string") name;
  @attr("string") body;

  @hasMany("comment") comments;
}
