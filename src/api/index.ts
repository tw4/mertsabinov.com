import * as process from "process";

const header = {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
}

export const getExperience = async () => {
    const res = await fetch(`${process.env.HOST}/spaces/${process.env.SPACE}/environments/master/entries/`,{
        headers: header
    })
    const dataJSON = await res.json()
    return dataJSON.items
}