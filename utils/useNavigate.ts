import type { RouteEnum } from "~/models/router/RouteEnum";

export async function useNavigate(url: RouteEnum | string) {
  await navigateTo(url);
}
