import { FC } from "react";

export const InfoLabel: FC<{ label: string, fontSize?: number }> = ({ label, fontSize = 18 }) =>
    <span
        className={`border border-[#394259] py-2 px-5 rounded-lg`}
        style={{
            fontSize
        }}
    >{label}</span>