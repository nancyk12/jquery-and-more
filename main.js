let newDiv = $('<div> Click Here </div>');

let page = $('body');
page.append(newDiv);

let ul = ('<ul></ul>');

page.append(ul);

newDiv.on('click', () => {
    console.log('Hello World');
    let input = $('#myInput');
    let myLi = $(`<li>${input.val()}</li>`)
    ul.append(myLi);

    input.val('default'); // clears text for input
})

//instead of .style, .css
page.css({
    backgroundColor: "blue",
    color: "white"
})
