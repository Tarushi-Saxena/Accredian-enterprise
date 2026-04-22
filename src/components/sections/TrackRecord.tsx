import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";

type TrackRecordProps = {
  stats: { value: string; label: string }[];
};

export function TrackRecord({ stats }: TrackRecordProps) {
  return (
    <Section id="track-record" variant="white" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Track Record"
          title="The Numbers Behind Our Success"
          subtitle="Proof points from programs run at pace—without sacrificing depth or accountability."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
