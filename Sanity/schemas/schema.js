
import { createSchema, SchemaType } from "sanity";
import pageInfo from "./pageInfo";
import skill from "./skill"
import project from "./project"
import experience from "./experience"
import social from "./social"


export default createSchema({
    name:'dafault',
    types : schemaType.concat([
        pageInfo,
        skill,
        project,
        experience,
        social
    ])
})