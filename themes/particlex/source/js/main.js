const app = Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: true,
            hiddenMenu: false,
            showMenuItems: false,
            menuColor: false,
            scrollTop: 0,
            scrollFrame: 0,
            renderers: [],
        };
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = false;
        });
    },
    mounted() {
        window.addEventListener("scroll", this.requestScrollUpdate, { passive: true });
        this.handleScroll();
        this.render();
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.requestScrollUpdate);
        if (this.scrollFrame) cancelAnimationFrame(this.scrollFrame);
    },
    methods: {
        render() {
            for (let i of this.renderers) i();
        },
        requestScrollUpdate() {
            if (this.scrollFrame) return;
            this.scrollFrame = requestAnimationFrame(() => {
                this.scrollFrame = 0;
                this.handleScroll();
            });
        },
        handleScroll() {
            let wrap = this.$refs.homePostsWrap;
            let newScrollTop = document.documentElement.scrollTop;
            let shouldHideMenu = this.scrollTop < newScrollTop && newScrollTop > 58;
            if (this.hiddenMenu !== shouldHideMenu) this.hiddenMenu = shouldHideMenu;
            if (shouldHideMenu && this.showMenuItems) this.showMenuItems = false;
            if (wrap) {
                let shouldUseTransparentMenu = newScrollTop <= window.innerHeight - 100;
                if (this.menuColor !== shouldUseTransparentMenu) {
                    this.menuColor = shouldUseTransparentMenu;
                }
            }
            this.scrollTop = newScrollTop;
        },
    },
});
app.mount("#layout");
