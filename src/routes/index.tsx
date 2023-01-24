import { component$, useClientEffect$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Glide from "@glidejs/glide";

export default component$(() => {
  useClientEffect$(() => {
    new Glide(".glide", {
      type: "carousel",
      hoverpause: true,
      autoplay: 3000,
      perView: 4,
      startAt: 0,
      breakpoints: {
        576: { perView: 1 },
        992: { perView: 2 },
        1200: { perView: 3 }
      }
    }).mount();
  });

  return (
    <div>
      <div class="glide">
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
        </div>
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <div class="glide__slide">glide element 1</div>
            <div class="glide__slide">glide element 2</div>
            <div class="glide__slide">glide element 3</div>
            <div class="glide__slide">glide element 4</div>
            <div class="glide__slide">glide element 5</div>
            <div class="glide__slide">glide element 6</div>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
          <button class="glide__bullet" data-glide-dir="=3"></button>
          <button class="glide__bullet" data-glide-dir="=4"></button>
          <button class="glide__bullet" data-glide-dir="=5"></button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
