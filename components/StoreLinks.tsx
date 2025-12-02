import Link from "next/link";

export function StoreLinks() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            {/* App Store */}
            <Link
                href="https://apps.apple.com/lk/app/antique-identifier-relico/id6755323659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 border border-white/10"
            >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 38.5-16.8 53.3-16.8s33.6 16.8 54.7 16.8c32.6 0 65.5-75.8 88.3-124.2-34.9-12.8-64.5-53.5-65.8-88.5zm-48.7-155.4c13.6-16.6 24.5-37.5 21.8-58.7-18.8 1.2-41.4 12.5-55 28.7-11.5 13.5-22.3 36.2-19.4 58 21.9 1.6 41.5-10.8 52.6-28z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium opacity-80">Download on the</span>
                    <span className="text-lg font-bold">App Store</span>
                </div>
            </Link>

            {/* Play Store */}
            <Link
                href="https://play.google.com/store/apps/details?id=com.circularx.antiqueidapp&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 border border-white/10"
            >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium opacity-80">Get it on</span>
                    <span className="text-lg font-bold">Google Play</span>
                </div>
            </Link>
        </div>
    );
}
