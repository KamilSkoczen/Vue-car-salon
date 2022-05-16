export async function fetchsStatuses() {
    try {
        const res = await fetch('http://localhost:3000/statuses');
        const data = await res.json()
        return data
    } catch(err) {
        console.log(err)
    }
}

export async function fetchComplaints() {
    const res = await fetch('http://localhost:3000/complaints');

    const data = await res.json()
    return data
}