export function createResourceConfig(testMode: boolean = false) {
    if (testMode === true) {
        return {
            BybitMarket: "ws://localhost:5678/"
        }
    } else {
        return {
            BybitMarket: "ws://localhost:5678/"
        }
    }
}

// export const ResourceConfig = createResourceConfig(false);
export const ResourceConfig = createResourceConfig(true);