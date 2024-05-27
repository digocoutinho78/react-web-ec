interface Iproduct {
    id: Number,
    title: string,
    price: number
}

export default Iproduct


export interface Ismartphones {
    category: string,
    description: string,
    id: string,
    price:number,
    title: string,
    images: string[],
    onClick: () => void

}