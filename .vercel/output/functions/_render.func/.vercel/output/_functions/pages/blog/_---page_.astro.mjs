import { $ as $$BaseCard, a as $$BaseLayout } from '../../chunks/BaseCard_uqwO2pB_.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, F as Fragment } from '../../chunks/astro/server_Cqm1NFrI.mjs';
import 'kleur/colors';
import { $ as $$EnvelopeCard } from '../../chunks/EnvelopeCard_BMnoKwAD.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BwVghcZN.mjs';
import 'clsx';
/* empty css                                     */
import { t } from 'i18next';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://frosti.saroprock.com");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  const { id, className, query, uiOptions = {} } = Astro2.props;
  const bundlePath = `${"/"}pagefind/`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([className, "pagefind-init"], "class:list")} data-pagefind-ui${addAttribute(bundlePath, "data-bundle-path")}${addAttribute(query, "data-query")}${addAttribute(JSON.stringify(uiOptions), "data-ui-options")}></div> `;
}, "C:/Projects/MyTest/Astro/github/blob/node_modules/astro-pagefind/src/components/Search.astro", void 0);

const $$Astro = createAstro("https://frosti.saroprock.com");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const topPosts = posts.filter((post) => post.data.badge === "Pin");
  const otherPosts = posts.filter((post) => post.data.badge !== "Pin");
  topPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  otherPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const sortedPosts = [...topPosts, ...otherPosts];
  const postsWithStats = await Promise.all(
    sortedPosts.map(async (post) => {
      const { remarkPluginFrontmatter } = await post.render();
      return {
        ...post,
        remarkPluginFrontmatter: {
          readingTime: remarkPluginFrontmatter.readingTime,
          totalCharCount: remarkPluginFrontmatter.totalCharCount
        }
      };
    })
  );
  return paginate(postsWithStats, { pageSize: 8 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  function generatePageLinks(totalPages2) {
    const pages = {
      active: [],
      hidden: []
    };
    if (totalPages2 > 3) {
      pages.active.push("1");
      pages.active.push("...");
      pages.active.push(totalPages2.toString());
      for (let i = 2; i <= totalPages2 - 1; i++) {
        pages.hidden.push(i.toString());
      }
    } else {
      for (let i = 1; i <= totalPages2; i++) {
        pages.active.push(i.toString());
      }
    }
    return pages;
  }
  const totalPages = Math.ceil(page.total / page.size);
  const pageLinks = generatePageLinks(totalPages);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BaseCard", $$BaseCard, { "title": "search" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Search", $$Search, { "id": "search", "className": "pagefind-ui", "uiOptions": { showImages: false } })} ` })} ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "EnvelopeCard", $$EnvelopeCard, { "title": post.data.title, "image": post.data.image, "desc": post.data.description, "url": "/blog/" + post.slug, "pubDate": post.data.pubDate, "badge": post.data.badge, "categories": post.data.categories, "tags": post.data.tags, "word": post.remarkPluginFrontmatter.totalCharCount, "time": post.remarkPluginFrontmatter.readingTime, "target": "_self" })}`)}${maybeRenderHead()}<div class="flex justify-between fade-in-up"> <a${addAttribute(page.url.prev ? page.url.prev : `javascript:`, "href")}${addAttribute(page.url.prev ? `btn bg-base-100 shadow-xl` : `btn btn-disabled bg-base-100 shadow-xl`, "class")}> <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path> </svg> <span class="hidden lg:inline ml-2">${t("label.prevPage")}</span> </a> <div${addAttribute(totalPages > 4 ? "join" : "", "class")}> ${totalPages > 4 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${pageLinks.active.map(
    (link) => link === "..." ? renderTemplate`<div class="dropdown dropdown-top join-item rounded-none"> <div tabindex="0" role="button" class="btn bg-base-100 rounded-none w-[55px]">
...
</div> <ul class="menu dropdown-content bg-base-100 rounded-box z-[100] p-2 shadow-xl"> ${pageLinks.hidden.map((hidden) => renderTemplate`<li> <a${addAttribute(hidden, "title")}${addAttribute(hidden, "aria-label")}${addAttribute(hidden === "1" ? `/blog` : `/blog/${hidden}`, "href")}${addAttribute(`menu-item bg-base-100 ${hidden === page.current ? "btn-active" : ""}`, "class")}> ${hidden} </a> </li>`)} </ul> </div>` : renderTemplate`<a${addAttribute(link, "title")}${addAttribute(link, "aria-label")}${addAttribute(link === "1" ? `/blog` : `/blog/${link}`, "href")}${addAttribute(`join-item btn bg-base-100 ${link === page.current ? "btn-active" : ""}`, "class")}> ${link} </a>`
  )}` })}` : pageLinks.active.map((link) => renderTemplate`<a${addAttribute(link, "title")}${addAttribute(link, "aria-label")}${addAttribute(link === "1" ? `/blog` : `/blog/${link}`, "href")}${addAttribute(`join-item btn bg-base-100 ${link === page.current ? "btn-active" : ""}`, "class")}> ${link} </a>`)} </div> <a${addAttribute(page.url.next ? page.url.next : `javascript:`, "href")}${addAttribute(page.url.next ? `btn bg-base-100 shadow-xl` : `btn btn-disabled bg-base-100 shadow-xl`, "class")}> <span class="hidden lg:inline ml-2">${t("label.nextPage")}</span> <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path> </svg> </a> </div> ` })}`;
}, "C:/Projects/MyTest/Astro/github/blob/src/pages/blog/[...page].astro", void 0);

const $$file = "C:/Projects/MyTest/Astro/github/blob/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };