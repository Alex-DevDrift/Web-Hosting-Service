$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
$port = 8080
Write-Host ""
Write-Host "  Web Hosting site - local server"
Write-Host "  Open in browser: http://localhost:$port/"
Write-Host "  Press Ctrl+C to stop."
Write-Host ""
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $path = $context.Request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
        $file = Join-Path $root ($path -replace '/', [IO.Path]::DirectorySeparatorChar)
        if (Test-Path $file -PathType Leaf) {
            $bytes = [IO.File]::ReadAllBytes($file)
            $ext = [IO.Path]::GetExtension($file).ToLowerInvariant()
            $mime = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                '.png'  { 'image/png' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.gif'  { 'image/gif' }
                '.ico'  { 'image/x-icon' }
                '.woff2'{ 'font/woff2' }
                '.woff' { 'font/woff' }
                '.ttf'  { 'font/ttf' }
                '.webmanifest' { 'application/manifest+json' }
                default { 'application/octet-stream' }
            }
            $context.Response.ContentType = $mime
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $context.Response.StatusCode = 404
            $msg = [Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
            $context.Response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $context.Response.Close()
    }
} finally {
    $listener.Stop()
}
