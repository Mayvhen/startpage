let input

function process(content) {
    const parts = content.split(" ");
    const cmd = parts[0];

    let rest = ""
    for(let i = 1; i < parts.length; i++) {
        let part = parts[i]
        rest += (" " + part)
    }

    if (cmd == "g") {
        let url = "https://www.google.com/search?q=" + rest
        document.location = url
    } else if (cmd == "d") {
        let url = "https://www.duckduckgo.com/?q=" + rest
        document.location = url
    } else if (cmd == "eval") {
        let ev = eval(rest)
        input.value = "eval " + ev
    } else if (cmd == "urb") {
        let url = "https://www.urbandictionary.com/define.php?term=" + rest
        document.location = url
    }
}

document.onreadystatechange = (() => {
    input = document.getElementById("query")

    input.onkeypress = (e => {
        if (e.key == "Enter") {
            process(input.value)
        }
    })
})