export function fetchWithTimeout(delay){
    // simulates  Http request
    return new Promise(resolve => setTimeout(reslove, delay));
}