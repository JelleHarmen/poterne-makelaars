export default {
  methods: {
    // creates a more predictable string
    // replaces spaces dashes and cuppercase lowercase
    toUrlString(value) {
      let str = value.replace(/\s+/g, "-").toLowerCase();
      return str;
    },
  },
};
