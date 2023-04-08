
import { createSchema, SchemaType } from "sanity";
import pageInfo from "./pageInfo";


export default createSchema({
    name:'dafault',
    types : schemaType.concat([
        pageInfo
    ])
})