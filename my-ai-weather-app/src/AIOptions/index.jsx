 export const arrayItems = [{
    name: 'Rap battle writer',
    id: 'RBW',
    description: 'Generate a rap battle between two characters.',
    option:{
        model: "gpt-4",
        messages: [],
        temperature: 0.8,
        max_tokens: 1024,
    }
},
{
    name: 'Grammmer Correction',
    id: 'grammerCorrection',
    description: 'Corrects sentences into standard English.',
    option:{
        model: "gpt-3.5-turbo",
        messages: [],
        temperature: 0,
        max_tokens: 256,
    }
},
{
    name: 'Summarize for a 2nd grader',
    id: 'summmry',
    description: 'Translates difficult text into simpler concept.',
    option:{
        model: "gpt-3.5-turbo",
        messages: [],
        temperature: 0,
        max_tokens: 1024,
    }
},
{
    name:'Parse unstructured data',
    id: 'translates',
    description: 'Create tables from unstructured to text',
    option:{
        model: "gpt-3.5-turbo",
        messages: [],
        temperature: 0,
        max_tokens: 256,
    }
},
{
    name: 'Emoji Translation',
    id: 'emoji',
    description: 'Translates regular text into emoji text',
    option:{
        model: "gpt-3.5-turbo",
        messages: [],
        temperature: 0.8,
        max_tokens: 256,
    }
},
{
    name:'Calculate time complexity',
    id: 'CTC',
    description: 'Find the time complexity of a function',
    option:{
        model: "gpt-3.5-turbo",
        messages: [],
        temperature: 0,
        max_tokens: 256,
    }
},
{
    name: 'Explain code',
    id: 'explain',
    description:'Explain a complicared piece of code',
    option:{
        model: "gpt-4",
        messages: [],
        temperature: 0,
        max_tokens: 1024,
      
    }
},
{
    name: 'Python bug fixer',
    id: 'PBF',
    description:'Find and fix bus in source code',
    option:{
        model: "gpt-4",
        messages: [],
        temperature: 0,
        max_tokens: 1024,
    }
}


]