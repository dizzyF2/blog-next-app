import Link from "next/link";

import AuthStatus from "./AuthStatus";
import { NavLinks } from "../constants";

interface Iprops{
    onclick(): void;
}
function MobileNavLinks({onclick}:Iprops) {
    return (
        <div className="flex flex-col items- justify-start mt-10 gap-4 text-sm ">
            {NavLinks.map((item, index)=>(
                <div key={index} className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">
                    <Link href={item.href} onClick={onclick}>{item.text}</Link>
                </div>
            ))}
            <AuthStatus/>
        </div>
    )
}

export default MobileNavLinks