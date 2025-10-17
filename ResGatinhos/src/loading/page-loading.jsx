import React from "react";

export default function PageLoading({ message = "Carregando...", fullscreen = true }) {
    const containerStyle = {
        position: fullscreen ? "fixed" : "relative",
        inset: fullscreen ? 0 : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: fullscreen ? "rgba(255,255,255,0.85)" : "transparent",
        zIndex: 9999,
        padding: "1rem",
    };

    const boxStyle = {
        display: "flex",
        gap: "0.75rem",
        alignItems: "center",
        background: "transparent",
        borderRadius: 8,
        padding: "0.5rem 0.75rem",
    };

    return (
        <div style={containerStyle} role="status" aria-live="polite" aria-busy="true">
            <style>{`
                @keyframes spin-page-loading {
                    to { transform: rotate(360deg); }
                }
                .page-loading__spinner {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 4px solid rgba(0,0,0,0.12);
                    border-top-color: #2563eb; /* blue-600 */
                    animation: spin-page-loading 0.9s linear infinite;
                    flex: 0 0 40px;
                }
                .page-loading__text {
                    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    color: #111827; /* gray-900 */
                    font-size: 1rem;
                }
            `}</style>

            <div style={boxStyle}>
                <div className="page-loading__spinner" aria-hidden="true" />
                <div className="page-loading__text">{message}</div>
            </div>
        </div>
    );
}