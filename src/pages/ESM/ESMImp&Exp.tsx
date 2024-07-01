import ModuleB from "@/pages/ESM/ModuleB.tsx";
import ModuleC from "@/pages/ESM/ModuleC.tsx";
const EsmImpExp = () => {
    return (
        <div>
            111
            <ModuleB/>
            <ModuleC/>
        </div>
    );
};

export default EsmImpExp;
