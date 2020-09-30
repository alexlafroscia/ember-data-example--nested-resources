import Controller from "@ember/controller";
import { dropTask, lastValue } from "ember-concurrency-decorators";

export default class ApplicationController extends Controller {
  @lastValue("loadComments") comments;

  @dropTask
  *loadComments() {
    return yield this.model.hasMany("comments").load();
  }
}
