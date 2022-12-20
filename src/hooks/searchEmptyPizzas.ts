import { IPizzaItem } from "../models/pizza"

const searchEmptyPizzas = (searchValue: string, pizzas: IPizzaItem[]) => {
    return pizzas?.filter((item) => {
        const name = item.name.toLowerCase().split(" ")
        const searchValueCopy = searchValue.split(" ")

        for (let wordName of name) {
            for (let wordSearch of searchValueCopy) {
                if (
                    wordName !== "піца" &&
                    ((searchValueCopy.includes(wordName) &&
                        wordName.length > 1) ||
                        (wordName.startsWith(wordSearch) &&
                            wordSearch.length > 1))
                ) {
                    return item
                }
            }
        }

        if (
            item.name.toLowerCase().includes(searchValue.toLowerCase().trim())
        ) {
            return item
        }
    })
}

export default searchEmptyPizzas
