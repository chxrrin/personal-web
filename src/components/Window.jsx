import React from 'react';
import Draggable from "react-draggable";
import { useRef, useState } from "react";

export function Window({ onClose }) {
    const [activeTab, setActiveTab] = useState("Projects");
    const nodeRef = useRef(null);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".window-top"
        >
            <div ref={nodeRef} className="window">
                <div className="window-top">
                    <div className="window-tabs">
                        {["Projects", "Skills", "Contact"].map((tab) => (
                            <span
                                key={tab}
                                className={`tab ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>

                    <button className="window-close" onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className="window-content">
                    {activeTab === "Projects" && <p>My projects</p>}
                    {activeTab === "Skills" && <p>My Skills</p>}
                    {activeTab === "Contact" && <p>Contact</p>}
                </div>
            </div>
        </Draggable>
    );
}