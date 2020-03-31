type RequestConfig = {
    url: string
    method: string
    headers: Headers
}

export const get = async <T>(
    hostname: string,
    port: number,
    uri: string
): Promise<T> => {
    const url = `http://${hostname}:${port}/${uri}`;
    return clientFetch(url, null, 'GET')
};

const headers = new Headers([['Content-Type', 'application/json']]);

const setHeaders = (_headers: Headers) => {
    _headers.forEach((k: string, v: string) => headers.set(k, v))
};


const handleErrors = (res: any) => {
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return res
};

const clientFetch = async <T>(
    url: string,
    payload: any,
    method: 'POST' | 'GET',
): Promise<T> => {
    const request: RequestConfig = {
        url,
        method,
        headers,
    };

    return new Promise((resolve, reject) =>
        fetch(url, request)
            .then(handleErrors)
            .then(async response => resolve(await response.json()))
            .catch(e => reject(new Error(e.message))),
    )
};
