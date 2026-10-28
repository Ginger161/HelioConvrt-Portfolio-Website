// Stand-in for @react-three/fiber during the build-time HTML render only. WebGL scenes draw nothing in the static HTML;
// the real library runs in the browser as usual.
export const Canvas = (_props: Record<string, unknown>) => null;
export const useFrame = (_cb?: unknown) => {};
export const useThree = (_sel?: unknown) => ({});
