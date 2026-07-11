(() => {
    if (window.matchMedia("(max-width: 719px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (navigator.connection && navigator.connection.saveData) return;

    const widgetBase = "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.1/dist/";

    const loadStylesheet = (url) =>
        new Promise((resolve, reject) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });

    const loadModule = (url) =>
        new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.type = "module";
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });

    const initialiseWidget = async () => {
        try {
            await Promise.all([
                loadStylesheet(`${widgetBase}waifu.css`),
                loadModule(`${widgetBase}waifu-tips.js`),
            ]);

            if (!localStorage.getItem("site-live2d-model-seeded")) {
                localStorage.setItem("modelId", "4");
                localStorage.setItem("modelTexturesId", "1");
                localStorage.setItem("site-live2d-model-seeded", "true");
            }

            window.initWidget({
                waifuPath: `${window.location.origin}/live2d/waifu-tips.json`,
                cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
                cubism2Path: `${widgetBase}live2d.min.js`,
                modelId: 4,
                tools: ["switch-texture", "photo", "info", "quit"],
                drag: false,
                showToggleAfterQuit: true,
                logLevel: "error",
            });
        } catch (error) {
            console.warn("Live2D widget could not be loaded.", error);
        }
    };

    if ("requestIdleCallback" in window) {
        window.requestIdleCallback(initialiseWidget, { timeout: 2500 });
    } else {
        window.addEventListener("load", () => window.setTimeout(initialiseWidget, 400), {
            once: true,
        });
    }
})();
