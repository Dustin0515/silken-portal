(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    menu.querySelectorAll("a.nav__link").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // i18n (simple, page-level keys)
  const dict = {
    zh: {"nav.home":"首页","nav.about":"关于思肯","nav.portfolio":"品牌门户","nav.services":"服务模块","nav.contact":"联系",
         "hero.title":"思肯｜品牌入华与增长的中国本土合伙人",
         "hero.lead":"面向海外消费品牌与中国消费者的双向门户：对外提供合规与增长方案，对内承接品牌资产、渠道与内容落地。",
         "hero.p1":"合规优先","hero.p2":"数据驱动","hero.p3":"结果导向",
         "hero.cta1":"查看品牌","hero.cta2":"了解思肯",
         "portal.title":"2026 代理品牌｜面向消费者的品牌门户",
         "portal.desc":"三条不同的选择逻辑：稳定主义（Brok）｜修道院体系（Van Pur）｜情绪社交（Solveza）。",
         "about.title":"思肯是谁？",
         "about.desc":"思肯（Silken）定位为海外消费品牌的「中国本土合伙人（China Local Partner）」，覆盖品牌入华全生命周期：从准入与合规，到定位、渠道与转化。",
         "services.title":"我们如何把品牌落到中国？",
         "services.desc":"五位一体：准入合规｜市场研究｜品牌中国化｜整合营销｜渠道落地。",
         "contact.title":"联系思肯",
         "contact.desc":"合作洽谈 / 渠道对接 / 展会合作欢迎联系。",
         "footer.meta":"合规优先 · 数据驱动 · 结果导向"},
    en: {"nav.home":"Home","nav.about":"About","nav.portfolio":"Portfolio","nav.services":"Services","nav.contact":"Contact",
         "hero.title":"Silken｜China Local Partner for Overseas Consumer Brands",
         "hero.lead":"A dual-facing portal: compliance & growth for brands, and brand stories & products for consumers in China.",
         "hero.p1":"Compliance-first","hero.p2":"Data-driven","hero.p3":"Result-oriented",
         "hero.cta1":"Explore Brands","hero.cta2":"About Silken",
         "portal.title":"2026 Portfolio｜Consumer-facing Brand Portal",
         "portal.desc":"Three decision logics: Stability (Brok) · Abbey system (Van Pur) · Social mood (Solveza).",
         "about.title":"Who is Silken?",
         "about.desc":"Silken serves as the China Local Partner across the full lifecycle: entry & compliance, positioning, channels, and conversion.",
         "services.title":"How we execute in China",
         "services.desc":"Entry & compliance · Market intelligence · Localization · Marketing & growth · Channels & execution.",
         "contact.title":"Contact",
         "contact.desc":"Partnership / Channels / Trade shows — reach out.",
         "footer.meta":"Compliance-first · Data-driven · Result-oriented"}
  };

  function setLang(lang) {
    const map = dict[lang] || dict.zh;
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (map[key]) el.textContent = map[key];
    });
    document.querySelectorAll(".lang__btn").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    localStorage.setItem("silken_lang", lang);
  }

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  const saved = localStorage.getItem("silken_lang");
  setLang(saved || "zh");
})();
// ===== Load purchase links (future use) =====
async function loadPurchaseLinks() {
  try {
    const response = await fetch('/data/links.json');
    const links = await response.json();

    console.log("Purchase links loaded:", links);

    // 现在不渲染按钮
    // 未来当链接不为 null 时再生成按钮

  } catch (error) {
    console.log("No purchase link data yet.");
  }
}

loadPurchaseLinks();
