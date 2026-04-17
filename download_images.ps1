$refPath = "../stitch_screens_reference"
$outPath = "public/images"
if (!(Test-Path $outPath)) { New-Item -ItemType Directory -Path $outPath }

$pattern = 'https://lh3.googleusercontent.com/[^"]+'
$files = Get-ChildItem -Path "$refPath/*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches($content, $pattern)
    foreach ($match in $matches) {
        $url = $match.Value
        $hash = [BitConverter]::ToString([Security.Cryptography.HashAlgorithm]::Create("MD5").ComputeHash([Text.Encoding]::UTF8.GetBytes($url))).Replace("-", "").ToLower()
        $dest = Join-Path $outPath "$hash.png"
        if (!(Test-Path $dest)) {
            Write-Host "Downloading $url to $dest"
            curl.exe -L $url -o $dest
        }
    }
}
