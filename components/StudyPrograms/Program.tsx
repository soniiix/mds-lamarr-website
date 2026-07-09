import { ReactNode } from "react";

interface ProgramCardProps {
    color: string;
    title: ReactNode;
    description: string;
    tags: string[];
    image: string;
}

export default function ProgramCard({
    color,
    title,
    description,
    tags,
    image,
}: ProgramCardProps) {
    return (
        <article
            className={`${color} rounded-[24px] p-6 flex flex-col gap-5 w-[380px] flex-shrink-0 snap-start`}
        >
            {/* Titre */}
            <h4 className="font-unbounded font-extrabold text-2xl text-ink leading-tight">
                {title}
            </h4>

            {/* Description */}
            <p className="text-ink/90 text-base leading-relaxed">
                {description}
            </p>

            {/* Tags / pills */}
            <div className="flex flex-col gap-3">
                {tags.map((tag, i) => (
                    <div
                        key={i}
                        className="bg-white/95 rounded-2xl px-5 py-3 text-ink text-sm"
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* Image */}
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] mt-auto">
                <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
        </article>
    );
}
