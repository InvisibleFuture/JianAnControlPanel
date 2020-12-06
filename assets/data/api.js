const GET = url => {
    fetch(url, {
        headers: {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json; charset=UTF-8",
            }
        }
    }).then(Response => {
        console.log(Response)
    })
}

const DELETE = url => {
    fetch(url, {
        headers: {
            method: 'DELETE',
            credentials: "include",
            headers: {
                "Accept": "application/json; charset=UTF-8",
            }
        }
    }).then(Response => {
        console.log(Response)
    })
}

const POST = (url, data) => {
    fetch(url, {
        headers: {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.parse(data)
        }
    }).then(Response => {
        console.log(Response)
    })
}

const PATCH = (url, data) => {
    fetch(url, {
        headers: {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.parse(data)
        }
    }).then(Response => {
        console.log(Response)
    })
}

export { GET, POST, DELETE, PATCH }