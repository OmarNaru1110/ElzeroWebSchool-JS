let titleChan = "Elzero", descriptionChan = "Elzero Web School", dateChan = "25/10";

let markup = `
    <div>
        <h3>Hello ${titleChan}</h3>
        <p>${descriptionChan}</p>
        <span>${dateChan}</span>
    </div>
`;
document.write(markup.repeat(4));
