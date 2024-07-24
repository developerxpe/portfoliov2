import { createClient } from "next-sanity";

export const client =  createClient({
    projectId:"ofvjsikj",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-01-01",
    basePath:"/admin"
})