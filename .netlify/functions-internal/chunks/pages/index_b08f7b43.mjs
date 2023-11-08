/* empty css                          */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_151781c4.mjs';
import 'clsx';
import { $ as $$MainLayout } from './_projects__bb4d77b0.mjs';
/* empty css                           */import 'html-escaper';

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, imgUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=""><!-- Card --><a class="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/projects/project1"><div class="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[200px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"><img class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 cursor-pointer transition-transform duration-500 ease-in-out rounded-t-xl"${addAttribute(imgUrl, "src")}></div><div class="absolute bottom-0 inset-x-0 z-10"><div class="flex flex-col h-full p-4 md:p-5"><h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8] transition duration-100">${title}</h3><p class="mt-2 text-white/[.8]">${description}</p></div></div></a><!-- End Card --></div>`;
}, "/Users/keina/Documents/vscode projs/portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Saman Shaiza", "seoTitle": "Saman Shaiza's portfolio website", "seoDesc": "Frontend Developer", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="pb-3 font-bold text-4xl md:text-5xl my-2 [text-shadow:_0_0_40px_rgb(255_255_255_/_10%)] bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-red-200 to-indigo-400 background-animate " data-astro-cid-j7pv25f6>Hi, my name is Saman...</h1><div id="typed-strings" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>I am a <strong class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500 shadow-md [text-shadow:_0_0_40px_rgb(255_255_255_/_20%)]" data-astro-cid-j7pv25f6>Web Developer</strong> with a year of experience...</p><p data-astro-cid-j7pv25f6>I made this <em data-astro-cid-j7pv25f6>website</em> with <strong class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500 shadow-md [text-shadow:_0_0_40px_rgb(255_255_255_/_20%)]" data-astro-cid-j7pv25f6>Astro</strong> and <strong class="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 [text-shadow:_0_0_40px_rgb(255_255_255_/_20%)]" data-astro-cid-j7pv25f6>Hygraph</strong>.</p>xxs
<p data-astro-cid-j7pv25f6>Outside of work I make music and learn new technologies.</p></div><div class="mt-6" data-astro-cid-j7pv25f6><span id="typed" data-astro-cid-j7pv25f6></span></div><section class="mt-12 mb-12" data-astro-cid-j7pv25f6><h1 class="text-4xl my-4" data-astro-cid-j7pv25f6>Selected projects</h1>${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Project One", "description": "Lorem ipsum penis poopis", "imgUrl": "../../public/images/project1.jpg", "data-astro-cid-j7pv25f6": true })}</section>` })}`;
}, "/Users/keina/Documents/vscode projs/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/keina/Documents/vscode projs/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
