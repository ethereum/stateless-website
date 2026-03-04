import { basePath } from "@/lib/base-path";

interface PageHeroProps {
  image: string;
  title: string;
  description?: string;
}

export function PageHero({ image, title, description }: PageHeroProps) {
  return (
    <div className="relative mb-16 h-[40vh] min-h-[280px] overflow-hidden rounded-2xl">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}${image}`}
        alt=""
        className="absolute inset-0 size-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end p-8 lg:p-12">
        <div>
          <h1 className="text-4xl/12 lg:text-6xl/16 font-bold tracking-tight text-white">
            {title}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-ef-cyan to-ef-purple" />
          {description && (
            <p className="mt-6 max-w-3xl text-lg/8 lg:text-xl/8 text-white/80">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
