class UrlNode {
    url: string;
    prevUrl: UrlNode | null;
    nextUrl: UrlNode | null;

    constructor(url: string) {
        this.url = url;
        this.prevUrl = null;
        this.nextUrl = null;
    }
}

class BrowserHistory {
    start: UrlNode;
    current: UrlNode;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        this.start = new UrlNode(homepage);
        this.current = this.start;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url: string): void {
        const newHistory = new UrlNode(url);
        newHistory.prevUrl = this.current;
        this.current.nextUrl = newHistory;
        this.current = newHistory;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps: number): string {
        let currentUrl = this.current;

        while(steps !== 0) {
            if(currentUrl.prevUrl === null) {
                this.current = currentUrl;
                return currentUrl.url;
            }

            currentUrl = currentUrl.prevUrl;
            steps -= 1;
        }

        this.current = currentUrl;
        return currentUrl.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps: number): string {
        let currentUrl = this.current;
        let index = 0;

        while(index !== steps) {
            if(currentUrl.nextUrl === null){
                this.current = currentUrl;
                return currentUrl.url;
            }

            currentUrl = currentUrl.nextUrl;
            index += 1;
        }

        this.current = currentUrl;
        return currentUrl.url;
    }
}