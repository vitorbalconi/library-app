export interface Obras {
    titulo: string,
    ano: string
}

export interface Writers {
    nome: string,
    sobre: string,
    img: string,
    obras: Obras[]
}