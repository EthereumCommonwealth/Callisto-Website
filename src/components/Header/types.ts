export default {
    NORMAL: "",
    DROPDOWN: "dropdown",
    RECT: "rect",
}

export interface action {
    type: string,
    name: string,
    link: string,
}
export interface brand {
    name: string,
    img: string,
    link: string,
}
export interface headerProps {
    brand: brand,
    links: Array<action>,
    backClr: string,
}