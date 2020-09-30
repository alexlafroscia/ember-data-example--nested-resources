import Application from "ember-data-load-resources/app";
import config from "ember-data-load-resources/config/environment";
import { setApplication } from "@ember/test-helpers";
import { start } from "ember-qunit";

setApplication(Application.create(config.APP));

start();
