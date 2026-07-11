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

            const overrideStyle = document.createElement("style");
            overrideStyle.textContent = `
                #waifu { bottom: 0 !important; left: 8px !important; transform: translateY(12px) !important; z-index: 1002 !important; }
                #waifu:hover { transform: translateY(7px) !important; }
                #waifu-tips { display: none !important; }
                #live2d { display: block !important; height: 220px !important; visibility: visible !important; width: 220px !important; }
                #waifu-tool { right: 2px !important; top: 52px !important; }
                #waifu-tool svg { fill: #66779c !important; height: 21px !important; }
                #waifu-toggle { background-color: #5873a7 !important; bottom: 48px !important; z-index: 1002 !important; }
                @media (max-width: 719px) { #waifu, #waifu-toggle { display: none !important; } }
            `;
            document.head.appendChild(overrideStyle);

            const canvasObserver = new MutationObserver(() => {
                const canvas = document.getElementById("live2d");
                if (!canvas) return;
                canvas.width = 440;
                canvas.height = 440;
                canvasObserver.disconnect();
            });
            canvasObserver.observe(document.body, { childList: true, subtree: true });
            window.setTimeout(() => canvasObserver.disconnect(), 5000);

            window.initWidget({
                waifuPath: `${window.location.origin}/live2d/waifu-tips.json`,
                cubism2Path: `${widgetBase}live2d.min.js`,
                tools: ["photo", "info", "quit"],
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
