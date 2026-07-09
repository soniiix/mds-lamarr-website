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
            className={`${color} rounded-[24px] p-6 flex flex-col gap-5 w-full flex-shrink-0 snap-start`}
        >
            {/* Titre */}
            <h4 className="font-unbounded font-extrabold text-2xl text-ink leading-tight">
                {title}
            </h4>

            {/* Description */}
            <p className="text-ink text-base leading-[24px]">
                {description}
            </p>

            {/* Tags / pills */}
            <div className="flex flex-col gap-3">
                {tags.map((tag, i) => (
                    <div
                        key={i}
                        className="bg-[#FCFBFA] rounded-full px-6 py-2.5 text-ink text-sm"
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* Image */}
            <div className="rounded-[16px] aspect-[4/3]">
                <img src={image} alt="" className="w-full h-[339px] rounded-[16px] object-cover" />
            </div>
        </article>
    );
}
