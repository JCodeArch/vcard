$ErrorActionPreference = "Stop"

$urls = @{
    "public\img\testimonials\gustavo.jpg" = "https://i.pravatar.cc/300?u=gustavo"
    "public\img\testimonials\jhony.jpg" = "https://i.pravatar.cc/300?u=jhony"
    "public\img\testimonials\danilo.jpg" = "https://i.pravatar.cc/300?u=danilo"
    "public\img\blog\blog_post_1.jpg" = "https://placehold.co/600x400/1a1a1a/00eeff/jpeg?text=Clean+Architecture"
    "public\img\blog\blog_post_2.jpg" = "https://placehold.co/600x400/1a1a1a/ff00ee/jpeg?text=CQRS+and+MediatR"
    "public\img\blog\blog_post_3.jpg" = "https://placehold.co/600x400/1a1a1a/00ffaa/jpeg?text=Domain+Driven+Design"
    "public\img\blog\blog_post_4.jpg" = "https://placehold.co/600x400/1a1a1a/ffee00/jpeg?text=Kafka+vs+RabbitMQ"
    "public\img\main_photo.jpg" = "https://i.pravatar.cc/400?u=jonathas"
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

foreach ($dest in $urls.Keys) {
    Try {
        Write-Host "Downloading $dest"
        Invoke-WebRequest -Uri $urls[$dest] -OutFile "c:\Workspace\Web\react\vcard\$dest" -UseBasicParsing -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        Write-Host "Success: $dest"
    } Catch {
        Write-Host "Failed to download $dest : $_"
    }
}
