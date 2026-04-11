import React, { useRef, useEffect } from 'react';
import Draggable from "react-draggable";

export function Window({ onClose, defaultPos, children, title, width, height, onDrag, onMount }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (onMount && nodeRef.current) {
            const rect = nodeRef.current.getBoundingClientRect();
            const parentRect = nodeRef.current.parentElement.getBoundingClientRect();
            onMount(rect.left - parentRect.left, rect.top - parentRect.top);
        }
    }, []);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".window-top"
            onDrag={(e, data) => onDrag && onDrag(data.x, data.y)}
        >
            <div
                ref={nodeRef}
                className="window"
                style={{
                    top: defaultPos.top,
                    left: defaultPos.left,
                    right: defaultPos.right,
                    width: width || 300,
                    height: height || "auto",
                }}
            >
                <div className="window-top">
                    <h3>{title}</h3>
                    <button className="window-close" onClick={onClose}>×</button>
                </div>
                <div className="window-content">{children}</div>
            </div>
        </Draggable>
    );
}