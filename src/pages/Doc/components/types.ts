
export interface subItems {
    name: string,
    link: string,

}
export interface sectionItem {
    item: {
        section: string,
        data: Array<subItems>,
    }
}
