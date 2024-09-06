"use strict";
// const hello: string = "!!!!@";
const data = {
    hello: "fjfjfj",
    world: undefined,
    wow: false,
};
fetch("url")
    .then((res) => res.json())
    .then((data) => {
    console.log(data.hello);
    console.log(data.world);
});
