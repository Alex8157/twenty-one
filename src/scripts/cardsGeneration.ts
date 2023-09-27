const generateCards = () => {
    const cards: number[] = [];
    let sum = 0;

    while (sum <= 21) {
        const shouldGenerate = Math.random() < (21 - sum) / 11;
        if (shouldGenerate) {
            const number = Math.floor(Math.random() * 11) + 1;
            cards.push(number);
            sum += number;
        } else {
            break;
        }
    }

    return cards;
};

export default generateCards;
