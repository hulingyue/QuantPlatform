function extractDomainFromUrl(url: string): string {
    const domainMatch = url.match(/(?:https?:\/\/)?(?:www\.)?([^:\/\s]+)/);
    return domainMatch ? domainMatch[1] : '';
}

export function createResourceConfig(testMode: boolean = false) {
    if (testMode === true) {
        return {
            BybitMarket: "ws://" + extractDomainFromUrl(window.location.host) + ":5678/"
        }
    } else {
        return {
            BybitMarket: "ws://" + extractDomainFromUrl(window.location.host) + ":5678/"
        }
    }
}

// export const ResourceConfig = createResourceConfig(false);
export const ResourceConfig = createResourceConfig(false);