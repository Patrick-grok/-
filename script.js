const container = document.getElementById("cats-container");
cats.forEach(cat => {
    const card = document.createElement("div"); // создаём карточку
    card.className = "cat-card";
    const img = document.createElement("img"); // картинка
    img.src = cat.img_link;
    img.alt = cat.name;
    const name = document.createElement("h3"); // имя
    name.textContent = cat.name;
    const desc = document.createElement("p"); // описание
    desc.textContent = cat.description;
    const age = document.createElement("p"); // возраст
    age.textContent = `Возраст: ${cat.age}`;
    const rate = document.createElement("p"); // рейтинг, если есть
    rate.textContent = `Рейтинг: ${cat.rate}`;
    card.append(img, name, desc, age, rate); // собираем
    container.appendChild(card);
});
function applyStyles() {
    // #cats-container
    const container = document.getElementById('cats-container');
    if (container) {
        Object.assign(container.style, {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '20px',
        });
    }
    // .cat-card
    const cards = document.querySelectorAll('.cat-card');
    cards.forEach((card) => {
        Object.assign(card.style, {
            width: '200px',
            padding: '12px',
            borderRadius: '10px',
            background: 'antiquewhite',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            transition: 'transform 0.2s',
        });
        // .cat-card:hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
        // .cat-card img
        const imgs = card.querySelectorAll('img');
        imgs.forEach((img) => {
            Object.assign(img.style, {
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
            });
        });
        // .cat-card h3
        const h3s = card.querySelectorAll('h3');
        h3s.forEach((h3) => {
            Object.assign(h3.style, {
                margin: '5px 0',
                fontSize: '18px',
            });
        });
        // .cat-card p
        const ps = card.querySelectorAll('p');
        ps.forEach((p) => {
            Object.assign(p.style, {
                margin: '4px 0',
                fontSize: '14px',
                color: '#555',
            });
        });
    });
}
applyStyles();