Hooks.once("ready", () => {
  const base = "modules/custom-foundry-favicon/assets/";

  document.querySelectorAll("link[rel~='icon']").forEach((el) => el.remove());

  const addIcon = (href, type, sizes = null) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = type;
    if (sizes) link.sizes = sizes;
    link.href = href;
    document.head.appendChild(link);
  };

  addIcon(`${base}favicon.ico`, "image/x-icon");
  addIcon(`${base}favicon-32.png`, "image/png", "32x32");
  addIcon(`${base}favicon-48.png`, "image/png", "48x48");
});
