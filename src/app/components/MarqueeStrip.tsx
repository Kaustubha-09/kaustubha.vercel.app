const ITEMS = [
  'PyTorch', 'RAG Pipelines', 'FastAPI', 'WCAG 2.1', 'Android (MVVM)',
  'LLMs', 'TypeScript', 'Firebase', 'Accessibility', 'OpenAI API',
  'Computer Vision', 'React', 'Docker', 'Prompt Engineering', 'VLMs',
  'Node.js', 'Python', 'Grad-CAM', 'AWS', 'Framer Motion',
];

function Item({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-5 px-5 shrink-0">
      <span
        className="text-xs font-medium uppercase tracking-widest"
        style={{
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
          color: 'rgba(0,212,170,0.75)',
        }}
      >
        {label}
      </span>
      <span style={{ color: 'rgba(0,212,170,0.25)', fontSize: '0.5rem' }}>◆</span>
    </span>
  );
}

export function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden py-3 border-y"
      style={{
        background: '#0a1520',
        borderColor: 'rgba(0,212,170,0.12)',
      }}
    >
      {/* left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #0a1520, transparent)',
        }}
      />
      {/* right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #0a1520, transparent)',
        }}
      />

      <div
        className="marquee-track"
      >
        {/* Duplicate twice for seamless loop */}
        {[...ITEMS, ...ITEMS].map((label, i) => (
          <Item key={i} label={label} />
        ))}
      </div>
    </div>
  );
}
