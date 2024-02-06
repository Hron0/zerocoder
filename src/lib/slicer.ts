export function KeySlicer (text: string){
    var firstThree = text.slice(0, 3);
    var lastThree = text.slice(-3);

    var res = firstThree + "..." + lastThree;
    return res
}