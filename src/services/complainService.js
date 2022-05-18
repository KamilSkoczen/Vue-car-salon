const baseURL = 'http://localhost:3000'

export async function fetchsStatuses() {
    const res = await fetch(`${baseURL}/statuses`);
    if (!res.ok){
        throw new Error(res.statusText);
    }
    const data = await res.json()
    data.unshift({id:-1, name:'Wszystkie'})
    return data
}

export async function fetchComplaints() {
    const res = await fetch(`${baseURL}/complaints`);
    if (!res.ok){
        throw new Error(res.statusText);
    }
    const data = await res.json()
    return data
}

