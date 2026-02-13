export default function PageHeader({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(132,204,22,0.10),transparent_45%)]" />
      <div className="p-8 md:p-10">
        {kicker ? (
          <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {kicker}
          </div>
        ) : null}

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>

        {desc ? (
          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">{desc}</p>
        ) : null}
      </div>
    </div>
  );
}
