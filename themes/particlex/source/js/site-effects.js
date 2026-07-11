(() => {
    const faces = [
        "(◕‿◕)",
        "(≧▽≦)",
        "(｡•̀ᴗ-)✧",
        "ヽ(・∀・)ﾉ",
        "(✿◠‿◠)",
        "(๑˃ᴗ˂)ﻭ",
        "(づ｡◕‿‿◕｡)づ",
        "( ´ ▽ ` )ﾉ",
    ];
    const colors = ["#d94f88", "#3f6fbd", "#16877b", "#a85a35", "#7650ad"];
    const maxEffects = 12;

    document.addEventListener(
        "click",
        (event) => {
            const activeEffects = document.querySelectorAll(".click-kaomoji");
            if (activeEffects.length >= maxEffects) activeEffects[0].remove();

            const effect = document.createElement("span");
            effect.className = "click-kaomoji";
            effect.textContent = faces[Math.floor(Math.random() * faces.length)];
            effect.style.left = `${event.clientX}px`;
            effect.style.top = `${event.clientY}px`;
            effect.style.color = colors[Math.floor(Math.random() * colors.length)];
            effect.style.setProperty("--kaomoji-x", `${Math.round(Math.random() * 30 - 15)}px`);
            effect.style.setProperty("--kaomoji-rotate", `${Math.round(Math.random() * 12 - 6)}deg`);

            document.body.appendChild(effect);
            effect.addEventListener("animationend", () => effect.remove(), { once: true });
        },
        { passive: true },
    );
})();
