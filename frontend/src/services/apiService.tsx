import { Api } from "../providers";
import { Produto } from "../interfaces"

const getAll = () => Api.get<Produto[]>('product')

export const apiService = {
    getAll
}