import { Pageinfo } from "@/typings";

export const fetchPageinfo = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await res.json()
    console.log('--------',data)
    const pageinfo : Pageinfo = data.pageinfo;

    console.log(pageinfo)

    return pageinfo
}