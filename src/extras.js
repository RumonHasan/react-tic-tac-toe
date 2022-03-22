export const defaultBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

export const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// win check after grid completion
export const checkWin = (currentChoiceClass, cellDomElements)=>{
    return winCombos.some((combos)=>{
        return combos.every((combo)=>{
            return cellDomElements.current[combo].classList.contains(currentChoiceClass)
        })
    })
};  

//checking whether it is draw or not
export const checkDraw = (playerClass, cellDomElements)=>{
    return cellDomElements.current.every((element)=>{
        return element.classList.contains(playerClass.circle) || element.classList.contains(playerClass.x);
    })
}
