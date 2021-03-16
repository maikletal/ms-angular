(function (window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["appName"] = "${APP_NAME}";
  window["env"]["appVersion"] = "${APP_VERSION}";
  window["env"]["apiUrl"] = "${API_URL}";
  window["env"]["debug"] = "${DEBUG}";
})(this);
