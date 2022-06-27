export function handleGenerateBet(betSize) {
    const newArray = new Array();

    for (let index = 0; index < betSize;) {
        const randomValue = Math.round((Math.random() * 59) + 1, 2);//Número aleatório entre 1 e 60
         
        if (newArray.includes(randomValue)) {
            continue;
        }

        newArray.push(randomValue);
        index++;
    }

    return newArray.sort((a,b) => a - b);
}