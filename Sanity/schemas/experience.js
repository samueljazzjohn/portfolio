export default {
    name:'experience',
    title:'Experience',
    type:'document',
    fields:[
        {
            name:'jobTitle',
            title:'JobTitle',
            type:'string',
        },
        {
            name:'dateStarted',
            title:'DateStarted',
            type:'date',
        },
        {
            name:'companyImage',
            title:'CompanyImage',
            type:'image',
            options:{hotspot:true}
        },
        {
            name:'dateEnded',
            title:'DateEnded',
            type:'date',
        },
        {
            name:'isCurrentlyWorkingHere',
            title:'IsCurentlyWorkingHere',
            type:'boolean',
        },
        {
            name:'technologies',
            title:'Technologies',
            type:'array',
            of:[{type:'reference',to:{type:'skill'}}],
        },
        {
            name:'points',
            title:'Points',
            type:'array',
            of:[{type:'string'}],
        },
        
    ]
}