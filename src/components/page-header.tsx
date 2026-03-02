interface PageHeaderProps {
  title: string;
  description?: string;
  editorial?: boolean;
}

export function PageHeader({
  title,
  description,
  editorial,
}: PageHeaderProps) {
  if (editorial) {
    return (
      <div className="mb-16">
        <h1 className="text-4xl/12 lg:text-5xl/14 font-bold tracking-tight">
          {title}
        </h1>
        <div className="mt-4 h-[3px] w-12 bg-ef-cyan" />
        {description && (
          <p className="mt-6 text-lg/8 lg:text-xl/8 text-text-muted max-w-3xl">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-12">
      <h1 className="text-3xl/10 font-bold tracking-tight lg:text-4xl/12">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg/8 text-text-muted max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
