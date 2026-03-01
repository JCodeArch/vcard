const https = require('https');
const fs = require('fs');

function downloadImage(url, dest) {
    https.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
            return downloadImage(res.headers.location, dest);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Downloaded ' + dest);
        });
    }).on('error', (err) => {
        console.error('Error downloading ' + dest, err.message);
    });
}

// Avatars
downloadImage("https://image.pollinations.ai/prompt/anime%20style%20portrait%20of%20a%2040%20year%20old%20black%20man%20with%20glasses%20nerd%20face%20high%20quality", "public/img/testimonials/gustavo.jpg");
downloadImage("https://image.pollinations.ai/prompt/anime%20style%20portrait%20of%20a%2035%20year%20old%20white%20man%20short%20hair%20big%20eyes%20glasses%20high%20quality", "public/img/testimonials/jhony.jpg");
downloadImage("https://image.pollinations.ai/prompt/anime%20style%20portrait%20of%20a%20brown%20skin%20man%20wearing%20a%20beanie%20and%20glasses%20nerd%20face%20high%20quality", "public/img/testimonials/danilo.jpg");

// Blog
downloadImage("https://image.pollinations.ai/prompt/a%20sleek%20abstract%20illustration%20of%20Clean%20Architecture%20in%20software%20engineering%20neon%20tech", "public/img/blog/blog_post_1.jpg");
downloadImage("https://image.pollinations.ai/prompt/abstract%20illustration%20of%20CQRS%20and%20Event%20storming%20pattern%20neon%20tech", "public/img/blog/blog_post_2.jpg");
downloadImage("https://image.pollinations.ai/prompt/abstract%20illustration%20of%20Domain%20Driven%20Design%20hexagonal%20architecture%20neon%20tech", "public/img/blog/blog_post_3.jpg");
downloadImage("https://image.pollinations.ai/prompt/message%20brokers%20in%20distributed%20architecture%20kafka%20rabbitmq%20abstract%20neon%20tech", "public/img/blog/blog_post_4.jpg");

// Jonathas Profile Pic from LinkedIn
// Note: Some avatars return 404/fallback if unavailable, but unavatar will serve fallback if not found.
downloadImage("https://unavatar.io/linkedin/jonathas-silva-de-souza-73674931", "public/img/main_photo.jpg");

// Logos
downloadImage("https://logo.clearbit.com/actdigital.com", "public/img/clients/client-1.png");
downloadImage("https://logo.clearbit.com/xpinc.com", "public/img/clients/client-2.png");
downloadImage("https://logo.clearbit.com/ebix.com", "public/img/clients/client-3.png");
downloadImage("https://logo.clearbit.com/anixter.com", "public/img/clients/client-4.png");
downloadImage("https://logo.clearbit.com/secom.co.jp", "public/img/clients/client-5.png");
downloadImage("https://logo.clearbit.com/itau.com.br", "public/img/clients/client-6.png");
downloadImage("https://logo.clearbit.com/caixavidaeprevidencia.com.br", "public/img/clients/client-7.png");
