@echo off
echo Downloading Avatars...
curl.exe -sJL -o public\img\testimonials\gustavo.jpg "https://image.pollinations.ai/prompt/anime%%20style%%20portrait%%20of%%20a%%2040%%20year%%20old%%20black%%20man%%20with%%20glasses%%20nerd%%20face%%20high%%20quality"
curl.exe -sJL -o public\img\testimonials\jhony.jpg "https://image.pollinations.ai/prompt/anime%%20style%%20portrait%%20of%%20a%%2035%%20year%%20old%%20white%%20man%%20short%%20hair%%20big%%20eyes%%20glasses%%20high%%20quality"
curl.exe -sJL -o public\img\testimonials\danilo.jpg "https://image.pollinations.ai/prompt/anime%%20style%%20portrait%%20of%%20a%%20brown%%20skin%%20man%%20wearing%%20a%%20beanie%%20and%%20glasses%%20nerd%%20face%%20high%%20quality"

echo Downloading Blog Post Images...
curl.exe -sJL -o public\img\blog\blog_post_1.jpg "https://image.pollinations.ai/prompt/a%%20sleek%%20abstract%%20illustration%%20of%%20Clean%%20Architecture%%20in%%20software%%20engineering%%20neon%%20tech"
curl.exe -sJL -o public\img\blog\blog_post_2.jpg "https://image.pollinations.ai/prompt/abstract%%20illustration%%20of%%20CQRS%%20and%%20Event%%20storming%%20pattern%%20neon%%20tech"
curl.exe -sJL -o public\img\blog\blog_post_3.jpg "https://image.pollinations.ai/prompt/abstract%%20illustration%%20of%%20Domain%%20Driven%%20Design%%20hexagonal%%20architecture%%20neon%%20tech"
curl.exe -sJL -o public\img\blog\blog_post_4.jpg "https://image.pollinations.ai/prompt/message%%20brokers%%20in%%20distributed%%20architecture%%20kafka%%20rabbitmq%%20abstract%%20neon%%20tech"

echo Downloading Main Profile Picture...
curl.exe -sJL -o public\img\main_photo.jpg "https://unavatar.io/linkedin/jonathas-silva-de-souza-73674931"

echo Downloading Company Logos...
curl.exe -sJL -o public\img\clients\client-1.png "https://logo.clearbit.com/actdigital.com"
curl.exe -sJL -o public\img\clients\client-2.png "https://logo.clearbit.com/xpinc.com"
curl.exe -sJL -o public\img\clients\client-3.png "https://logo.clearbit.com/ebix.com"
curl.exe -sJL -o public\img\clients\client-4.png "https://logo.clearbit.com/anixter.com"
curl.exe -sJL -o public\img\clients\client-5.png "https://logo.clearbit.com/secom.co.jp"
curl.exe -sJL -o public\img\clients\client-6.png "https://logo.clearbit.com/itau.com.br"
curl.exe -sJL -o public\img\clients\client-7.png "https://logo.clearbit.com/caixaseguradora.com.br"
echo Done.
