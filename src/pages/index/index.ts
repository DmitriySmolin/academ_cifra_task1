import {getComponents, getComponent} from "@/helpers/helpers";
import {ITransitionData} from "@barba/core/dist/core/src/defs";

export default {
    namespace: "common",
    async beforeEnter({next}: ITransitionData) {
        try {
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
    },

    afterLeave() {
    },
};
