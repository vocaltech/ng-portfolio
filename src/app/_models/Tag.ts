export class Tag {
    static readonly ANDROID = new Tag("Android", 'lime');
    static readonly ANGULAR = new Tag("Angular", 'red');
    static readonly JAVA = new Tag("Java", 'orange');
    static readonly JAVASCRIPT = new Tag("Javascript", 'gold');
    static readonly KOTLIN = new Tag("Kotlin", 'pink');
    static readonly NODEJS = new Tag("Nodejs", 'green');
    static readonly TYPESCRIPT = new Tag("Typescript", 'blue');

    private constructor(private readonly key: string, public readonly color: string) {}

    
    // ************************************
    // * TO UPDATE when new Tag is added
    // ************************************
    private static getAllTags = (): Tag[] => {
        const tagList = [] as Tag[]
        
        tagList.push(Tag.ANDROID)
        tagList.push(Tag.ANGULAR)
        tagList.push(Tag.JAVA)
        tagList.push(Tag.JAVASCRIPT)
        tagList.push(Tag.KOTLIN)
        tagList.push(Tag.NODEJS)
        tagList.push(Tag.TYPESCRIPT)
        
        return tagList
    }
    
    static getAllTagsKeys = (): string[] => Tag.getAllTags().map(tag => tag.key)
    
    static getTagByKey = (key: string): Tag => {
        return Tag.getAllTags().find(tag => tag.key === key) as Tag
    }

    toString = () => {
        return this.key;
    }
}