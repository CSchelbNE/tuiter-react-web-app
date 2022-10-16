const NavigationItem = (item, active) => {
    return(`
            <a href=${item.href} class="${active} list-group-item d-flex flex-row align-items-center wd-grid-item-a-tag">
                <i class="${item.icon} me-1 ps-0 p-1"></i>
                <div class="d-none d-xl-block smaller-font">${item.name}</div>
            </a>
    `)
}

export default NavigationItem