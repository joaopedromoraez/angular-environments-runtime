(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["name"] = "${NAME}";
    window["env"]["version"] = "${VERSION}";
    window["env"]["environment"] = "${ENV}";
    window["env"]["api"] = "${API}";
    window["env"]["backgroundColor"] = "${COLOR}";
})(this);