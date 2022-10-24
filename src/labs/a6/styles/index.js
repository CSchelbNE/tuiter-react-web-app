const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        ...padding10px
    }
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    }
};