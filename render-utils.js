export function renderPost(post) {
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const span = document.createElement('span');
    span.textContent = getCategoryEmoji(post.category);
    h2.append(span);

    const p = document.createElement('p');
    p.textContent = post.description;

    const p2 = document.createElement('p');
    p2.textContent = post.contact;

    li.append(h2, p, p2);
    return li;
}

function getCategoryEmoji(category) {
    if (category === 'event') return '🗓';
    if (category === 'announcement') return '📢';
    if (category === 'free') return '💛';
    if (category === 'sale') return '💲';
    return '';
}
