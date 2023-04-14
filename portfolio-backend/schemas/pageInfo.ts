import {defineType, defineArrayMember,defineField} from 'sanity'


export default defineType({
    name:'pageInfo',
    title:'pageInfo',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string',
        }),
        defineField({
            name:'role',
            title:'Role',
            type:'string',
        }),
        defineField({
            name:'heroImage',
            title:'Image',
            type:'image',
            options:{hotspot:true}
        }),
        defineField({
            name:'backgroundInformation',
            title:'backgroundInformation',
            type:'string',
        }),
        defineField({
            name:'profilePic',
            title:'ProfilePic',
            type:'image',
            options:{hotspot:true}
        }),
        
    ]
})