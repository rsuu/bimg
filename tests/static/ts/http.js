export class Http {
    constructor() { }
    async get(url) {
        let response = await fetch(url, {
            method: "GET",
        });
        let res = await response.text();
        return res;
    }
    async put(url, json) {
        let response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(json),
        });
        let res = await response.text();
        return res;
    }
    async delete(url, json) {
        let response = await fetch(url, {
            method: "DELETE",
            body: JSON.stringify(json),
        });
        let res = await response.text();
        return res;
    }
    async post(url, json) {
        try {
            let response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(json),
            });
            let res = await response.json();
            return res.message;
        }
        catch (error) {
            console.error("Error:", error);
            return undefined;
        }
    }
}
