export const add = "INCREMENT"
export const minus = "DECREMENT"
export const addFunc = ()=>{
    return {
        type:add
    }
}
export const minusFunc = ()=>{
    return {
        type:minus
    }
}