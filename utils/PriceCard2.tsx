import React, { FC } from "react"

interface PriceCardProps {
    title: string;
    cost: number;
    tags?: string[];
    benefits: string[];
}

const PriceCard: FC<PriceCardProps> = ({ title, cost, tags, benefits }) => {
    return (
        <div className="w-[300px] h-[250px] rounded-xl border border-[#3D4A52] bg-[red] p-[24px]">
            <div className="content__between">
                <p className="font-[700] text-base">{title}</p>
                {tags?.length && <div className="h-6 rounded-xl bg-[#1C8CD6]">{tags[0]}</div>}
            </div>

            <p className="text-4xl font-[900]">{`$${cost.toLocaleString()}`}<span className="font-[700] text-base">{`/${title.toLowerCase().slice(0, -2)}`}</span></p>
        </div>
    )
}

export default PriceCard