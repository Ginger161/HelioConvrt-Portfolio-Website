// Stand-in for @react-three/drei during the build-time HTML render only (see fiber.ts).
const Nothing = (_props: Record<string, unknown>) => null;
export const Text = Nothing;
export const Billboard = Nothing;
export const OrbitControls = Nothing;
export const Float = Nothing;
export const Line = Nothing;
export const Environment = Nothing;
