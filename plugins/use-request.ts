export default defineNuxtPlugin(() => {
	return {
		provide: {
			request: async (path: string, options?: RequestInit) => {
				return fetch(useRuntimeConfig().public.fetchPrefix + path, options);
			},
		},
	};
});
