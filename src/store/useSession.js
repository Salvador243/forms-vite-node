import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSession = defineStore('useSession', () => {
    const active = ref(false);
    return {
        active
    }
})