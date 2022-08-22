import { getComponents, getComponent } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Swiper, { Navigation } from "swiper";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов

            new Swiper(".swiper", {
                modules: [Navigation],
                navigation: {
                    nextEl: ".slider__btn_next",
                    prevEl: ".slider__btn_prev"
                },
                on: {
                    slideChange: function(swiper) {
                        const counterValue = swiper.$wrapperEl
                            .children()
                            [swiper.activeIndex].querySelector(
                            ".counter__value"
                        )?.textContent;
                    }
                }
            });

        } catch (e) {
            // @ts-ignore
            sliderItems.forEach((item) => item.destroy());
        }
    },
    beforeLeave() {
        // @ts-ignore
        sliderItems.forEach((item) => item.destroy());
    },

    afterLeave() {
    }
};
