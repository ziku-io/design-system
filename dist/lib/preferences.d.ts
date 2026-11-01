export declare const ZOOM_MIN = 75;
export declare const ZOOM_MAX = 150;
export declare const ZOOM_DEFAULT = 100;
export declare const ZOOM_STEPS: readonly number[];
export interface ZoomControl {
    zoom: number;
    setZoom: (zoom: number) => void;
}
/** The root font-size multiplier, between 75 and 150. */
export declare function useZoom(): ZoomControl;
/** Inline before the first paint to apply persisted zoom without reflow. */
export declare function antiFlashScript(prefix?: string): string;
