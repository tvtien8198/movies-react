const Rating = (rating) => {

    rating = Math.round(rating) / 2;
    let output = [];

    for (var i = rating; i >= 1; i--)
        output.push(`<i class='bx bxs-star'></i>`);

    if (i === .5) output.push(`<i class='bx bxs-star-half'></i>`);

    for (let i = (5 - rating); i >= 1; i--)
        output.push(`<i class='bx bx-star'></i>`);

    return output.join('');
}

export default Rating
