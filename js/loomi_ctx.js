(() => {
  const env = 2;

  var store = "torture-equals-solution.myshopify.com";
  var alias = store.replace(".myshopify.com", "").replaceAll("-", "_").toUpperCase();
  var jitsuKey = "js.2598515";
  var themeId = 181309014394;
  var role = "main";

  window.loomi_ctx = {
    ...(window.loomi_ctx || {}),

    storeAlias: alias,
    jitsuKey,
    env,
    themeId,
    role
  };

  (() => {
    window.loomi_ctx.cc = 1
  })()

  window.loomi_ctx.blockingConcent = false;

  loomi_ctx.ttl = 1793373378;
})();
