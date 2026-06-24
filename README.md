# dorianmarie domain redirects

Cloudflare Worker that permanently redirects every request for `dorianmarie.fr`
and `dorianmarie.org` to the `dorianmarie.com` home page.

The incoming path and query string are intentionally ignored. For example:

```text
https://dorianmarie.fr/anything?x=1 -> https://dorianmarie.com/
https://dorianmarie.org/about -> https://dorianmarie.com/
```

## Deploy

```sh
wrangler deploy
```

The Wrangler routes include both apex and `www` hostnames for `dorianmarie.fr`
and `dorianmarie.org`.
