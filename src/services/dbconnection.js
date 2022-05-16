export async function fetchsStatuses() {
    try {
        const res = await fetch('http://localhost:3000/statuses');
        if (!res.ok){
            throw new Error(res.statusText);
        }
        const data = await res.json()
        return data
    } catch(err) {
        console.log(err)
    }
}

export async function fetchComplaints() {
    try{
        const res = await fetch('http://localhost:3000/complaints');
        if (!res.ok){
            throw new Error(res.statusText);
        }
        const data = await res.json()
        return data
    } catch(err) {
        console.log(err)
    }

}