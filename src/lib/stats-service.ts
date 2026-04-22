import { stats as staticStats } from "@/lib/site-data";

export type PublicStat = {
  value: string;
  label: string;
};

export async function getPublicStats(): Promise<PublicStat[]> {
  // Simulated latency for demo API consumers; instant for direct imports in RSC if desired.
  await new Promise((r) => setTimeout(r, 0));
  return staticStats.map((s) => ({ value: s.value, label: s.label }));
}
