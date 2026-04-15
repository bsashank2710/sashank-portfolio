interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="text-eyebrow mb-4">{label}</p>
  );
}
