export async function wait(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export async function waitResponse() {
    await wait(Math.random() * 1000)
}
