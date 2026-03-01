$ErrorActionPreference = "Stop"

$urls = @{
    "public\img\testimonials\gustavo.jpg" = "https://image.pollinations.ai/prompt/anime+style+portrait+of+a+40+year+old+black+man+with+glasses+nerd+face+high+quality"
    "public\img\testimonials\jhony.jpg" = "https://image.pollinations.ai/prompt/anime+style+portrait+of+a+35+year+old+white+man+short+hair+big+eyes+glasses+high+quality"
    "public\img\testimonials\danilo.jpg" = "https://image.pollinations.ai/prompt/anime+style+portrait+of+a+brown+skin+man+wearing+a+beanie+and+glasses+nerd+face+high+quality"
    "public\img\blog\blog_post_1.jpg" = "https://image.pollinations.ai/prompt/a+sleek+abstract+illustration+of+Clean+Architecture+in+software+engineering+neon+tech"
    "public\img\blog\blog_post_2.jpg" = "https://image.pollinations.ai/prompt/abstract+illustration+of+CQRS+and+Event+storming+pattern+neon+tech"
    "public\img\blog\blog_post_3.jpg" = "https://image.pollinations.ai/prompt/abstract+illustration+of+Domain+Driven+Design+hexagonal+architecture+neon+tech"
    "public\img\blog\blog_post_4.jpg" = "https://image.pollinations.ai/prompt/message+brokers+in+distributed+architecture+kafka+rabbitmq+abstract+neon+tech"
    "public\img\main_photo.jpg" = "https://image.pollinations.ai/prompt/handsome+brazilian+software+engineer+young+professional+studio+portrait"
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

foreach ($dest in $urls.Keys) {
    Try {
        Write-Host "Downloading $dest"
        Invoke-WebRequest -Uri $urls[$dest] -OutFile "c:\Workspace\Web\react\vcard\$dest" -UseBasicParsing
        Write-Host "Success: $dest"
    } Catch {
        Write-Host "Failed to download $dest : $_"
    }
}
