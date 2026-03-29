interface SectionHeaderProps {
  index: number;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ index, title, subtitle }: SectionHeaderProps) => {
  const indexStr = index < 10 ? `0${index}` : `${index}`;
  return (
    <div className="mb-12">
      <span className="font-mono text-sm text-terminal-green tracking-widest">
        // Section {indexStr}
      </span>
      <h2 className="text-4xl font-bold text-foreground mt-2 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 font-mono text-sm">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
