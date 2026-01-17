(function () {
    const assets = [
        {
            type: 'text',
            content: 'Built by KEENL.com - Free AI website builder',
            link: 'https://keenl.com',
            bg: '#000000',
            color: '#ffffff'
        }
    ];

    const generateRandomString = (length = 8) => {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = chars.charAt(Math.floor(Math.random() * chars.length));
        for (let i = 0; i < length - 1; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const selectedAsset = assets[Math.floor(Math.random() * assets.length)];

    const containerId = generateRandomString(12);
    const linkClass = generateRandomString(10);

    const style = document.createElement('style');
    style.textContent = `
        #${containerId} {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 2147483647;
            text-align: center;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }
        .${linkClass} {
            font-size: 14px;
            display: block;
            padding: 5px;
            text-decoration: none;
            font-family: sans-serif;
            font-weight: bold;
            transition: opacity 0.2s;
        }
        .${linkClass}:hover { opacity: 0.9; }
        .${linkClass} img {
            max-width: 100%;
            height: auto;
            vertical-align: middle;
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.id = containerId;

    const anchor = document.createElement('a');
    anchor.href = selectedAsset.link;
    anchor.className = linkClass;
    anchor.target = '_blank';

    if (selectedAsset.type === 'image') {
        const img = document.createElement('img');
        img.src = selectedAsset.src;
        img.alt = selectedAsset.alt;
        anchor.appendChild(img);
    } else {
        anchor.textContent = selectedAsset.content;
        anchor.style.backgroundColor = selectedAsset.bg;
        anchor.style.color = selectedAsset.color;
    }

    container.appendChild(anchor);

    if (document.body) {
        document.body.appendChild(container);
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(container);
        });
    }

})();
