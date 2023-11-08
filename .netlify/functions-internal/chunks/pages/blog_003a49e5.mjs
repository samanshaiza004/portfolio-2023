/* empty css                          */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_151781c4.mjs';
import 'clsx';
import { $ as $$MainLayout } from './_projects__e7e46efa.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro();
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6"><img class="my-2 shadow-md drop-shadow-sm" src="/images/project1.jpg" alt="blog" width="300px"><p>Hello!</p></div>`;
}, "/Users/keina/Documents/vscode projs/portfolio/src/components/Blog/PostCard.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Saman's Blog", "seoTitle": "Saman Shaiza's Blog, Web Engineer", "seoDesc": "Saman is a web developer with a year of experience" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class=""><h1 class="text-5xl">Posts</h1>${renderComponent($$result2, "PostCard", $$PostCard, { "url": "/", "title": "First Post!!!" })}</div>` })}`;
}, "/Users/keina/Documents/vscode projs/portfolio/src/pages/blog.astro", void 0);

const $$file = "/Users/keina/Documents/vscode projs/portfolio/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
