interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
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
