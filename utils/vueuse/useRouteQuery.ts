import { type RouteParamValueRaw } from "vue-router";

const _cache = new WeakMap();

export function useRouteQuery(name: string): Ref<null | string | string[]>;

export function useRouteQuery<
  T extends RouteQueryValueRaw = RouteQueryValueRaw,
  K = T
>(
  name: string,
  defaultValue?: T,
  options?: ReactiveRouteOptionsWithTransform<T, K>
): Ref<K>;

export function useRouteQuery<
  T extends RouteQueryValueRaw = RouteQueryValueRaw,
  K = T
>(
  name: string,
  defaultValue?: T,
  options: ReactiveRouteOptionsWithTransform<T, K> = {}
): Ref<K> {
  const {
    mode = "replace",
    route = useRoute(),
    router = useRouter(),
    transform = (value) => value as any as K,
  } = options;

  if (!_cache.has(route)) _cache.set(route, new Map());

  const _query: Map<string, any> = _cache.get(route);

  tryOnScopeDispose(() => {
    _query.delete(name);
  });

  _query.set(name, route.query[name]);

  return customRef<any>((track, trigger) => ({
    get() {
      track();

      const data = _query.get(name) ?? defaultValue;
      return transform(data as T);
    },
    set(v) {
      _query.set(name, v === defaultValue || v === null ? undefined : v);

      trigger();

      nextTick(() => {
        router[toValue(mode)]({
          ...route,
          query: { ...route.query, ...Object.fromEntries(_query.entries()) },
        });
      });
    },
  }));
}

export type RouteQueryValueRaw = RouteParamValueRaw | string[];

export type RouteHashValueRaw = string | null | undefined;

export interface ReactiveRouteOptions {
  /**
   * Mode to update the router query, ref is also acceptable
   *
   * @default 'replace'
   */
  mode?: MaybeRef<"replace" | "push">;

  /**
   * Route instance, use `useRoute()` if not given
   */
  route?: ReturnType<typeof useRoute>;

  /**
   * Router instance, use `useRouter()` if not given
   */
  router?: ReturnType<typeof useRouter>;
}

export interface ReactiveRouteOptionsWithTransform<V, R>
  extends ReactiveRouteOptions {
  /**
   * Function to transform data before return
   */
  transform?: (val: V) => R;
}
