var container = document.getElementById("cats");

Object.assign(document.body.style, {
    fontFamily: "Arial, sans-serif",
    background: "#f5f0e8",
    padding: "24px",
    margin: "0"
});

Object.assign(container.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px"
});

console.log("Данные котов:", cats);

cats.forEach(function(cat) {
    console.log("Кот:", cat);

    var card = document.createElement("div");
    Object.assign(card.style, {
        width: "220px",
        background: "#ffffff",
        border: "1px solid #d4b896",
        borderRadius: "12px",
        overflow: "hidden",
        padding: "0"
    });

    // Перебираем все ключи объекта и ищем картинку
    var imgSrc = null;
    Object.keys(cat).forEach(function(key) {
        var val = cat[key];
        if (typeof val === "string" && val.match(/\.(jpg|jpeg|png|gif|webp)/i)) {
            imgSrc = val;
        }
    });

    if (imgSrc) {
        // Пробуем все варианты пути
        var fullSrc = imgSrc.startsWith("http")
            ? imgSrc
            : "https://cats.petiteweb.dev/simple/" + imgSrc.replace(/^\//, "");

        console.log("IMG src:", fullSrc);

        var img = document.createElement("img");
        Object.assign(img.style, {
            width: "100%",
            height: "180px",
            objectFit: "cover",
            display: "block"
        });
        img.src = fullSrc;
        img.alt = cat.name || "";
        card.appendChild(img);
    }

    var info = document.createElement("div");
    Object.assign(info.style, {
        padding: "12px"
    });

    var h3 = document.createElement("h3");
    Object.assign(h3.style, {
        margin: "5px 0",
        fontSize: "18px",
        color: "#5a3e28"
    });
    h3.textContent = cat.name || "Без имени";
    info.appendChild(h3);

    Object.keys(cat).forEach(function(key) {
        if (key === "name") return;
        var val = cat[key];

        if (typeof val === "string" && val.match(/\.(jpg|jpeg|png|gif|webp)/i)) return;

        if (val !== null && typeof val === "object") {
            Object.keys(val).forEach(function(subKey) {
                var p = document.createElement("p");
                Object.assign(p.style, { margin: "3px 0", fontSize: "13px", color: "#444" });
                p.innerHTML = "<b>" + subKey + ":</b> " + val[subKey];
                info.appendChild(p);
            });
        } else {
            var p = document.createElement("p");
            Object.assign(p.style, { margin: "3px 0", fontSize: "13px", color: "#444" });
            p.innerHTML = "<b>" + key + ":</b> " + val;
            info.appendChild(p);
        }
    });

    card.appendChild(info);
    container.appendChild(card);
});
