const getNodeData = node => {
    // All attributes
    const attributes = node.attributes

    // Regex Pattern
    const pattern = /^data\-(.+)$/

    // Output
    const data = {}

    for (let i in attributes) {
        if (!attributes) {
            continue
        }

        // Attributes name (ex: data-module)
        let name = attributes[i].name

        // This hapoens.
        if (!name) {
            continue
        }

        let match = name.match(pattern)
        if (!match) {
            continue
        }

        // If this throws an error, you have some
        // serious problems in your HTML
        data[match[1]] = getData(node.getAttribute(name))
    }

    return data
}

const rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/

const getData = data => {
    if (data === 'true') {
        return true
    }

    if (data === 'false') {
        return false
    }

    if (data === 'null') {
        return null
    }

    // Only convert to a number if it doesn't change the string
    if (data === +data + '') {
        return +data
    }

    if (rbrace.test(data)) {
        return JSON.parse(data)
    }

    return data
}

const SHUFFLE_PATTERN = /\p{Extended_Pictographic}|\r|\n|./gu

const shuffleElementTexts = (item, shuffleFn) => {
    // Remove hidden content
    item.querySelectorAll('.u-screen-reader-text').forEach(item => item.remove())

    // Wrap line breaks with spaces
    const words = item.innerText.replace('\n', ' \n').split(' ')

    // Actually shuffle each 'word'
    for (let i = 0; i < words.length; i++) {
        const chars = [...words[i].matchAll(SHUFFLE_PATTERN)].map(item => item[0])
        words[i] = shuffleFn(chars)
    }

    // Output result
    item.innerText = words.join(' ')
}

export { getNodeData, shuffleElementTexts }
