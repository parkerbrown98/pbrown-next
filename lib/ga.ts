declare global {
    interface Window {
        gtag: any;
    }
}

export function pageview(url: string) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA, {
        page_path: url
    })
}

export function event({ action, params}: any) {
    window.gtag("event", action, params);
}