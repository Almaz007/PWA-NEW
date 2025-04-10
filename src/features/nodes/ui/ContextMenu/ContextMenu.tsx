// features/context-menu/ui/ContextMenu.tsx
import { useRef, useEffect } from "react";

export const ContextMenu = ({ actions }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleClickOutside = (e: MouseEvent) => {
    //         if (
    //             menuRef.current &&
    //             !menuRef.current.contains(e.target as Node)
    //         ) {
    //             onClose();
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () =>
    //         document.removeEventListener("mousedown", handleClickOutside);
    // }, [onClose]);

    // if (!position) return null;

    return (
        <div
            ref={menuRef}
            style={{ position: "absolute", top: "-100%", left: "0px" }}
        >
            {actions.map((action) => (
                <div>{action.element}</div>
            ))}
        </div>
    );
};
