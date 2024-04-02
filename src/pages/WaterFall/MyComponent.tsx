import { Props } from "./Type.ts";
import { useRef } from "react";

export default function MyComponent({ width, height, text, left, top, idx, lineHeight }: Props) {
    const myElementRef = useRef<HTMLDivElement | null>(null);

    return (<>
        <div ref={myElementRef} className="border-2 border-black bg-blue" >
            <div className="main">${idx}</div>
            <div className="footer" >
                <div className="text">${text}</div>
                <div className="info">@小刚老师 -《寂寞沙洲冷》</div>
            </div>
        </div>
    </>);
}
