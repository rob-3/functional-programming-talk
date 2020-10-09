const real_console_log = console.log.bind({});

function get_data() {
  if (typeof message !== "undefined") {
    message = "No!";
  } else {
    console.log = function(value) {
      real_console_log("Better, but still not completely safe.");
    };
  }
  return 42;
}

const my_object = {
  get some_property() {
    console.log = function(value) {
      real_console_log("Even accessing the property of an object isn't safe.");
    };
    return 42;
  }
};

module.exports = { get_data, my_object }
