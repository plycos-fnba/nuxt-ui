import type { Route } from "~/models/utils/Route";

export async function useNavigate(url: Route | string) {
  await navigateTo(url);
}
