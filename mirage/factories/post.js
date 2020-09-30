import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  name() {
    return faker.lorem.sentence();
  },

  body() {
    return faker.lorem.paragraphs(2);
  },
});
