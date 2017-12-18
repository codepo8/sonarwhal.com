---
category: "user-guide"
description: "http-cache verifies that the page and all its resources follow a good,sustainable caching strategy."
layout: "docs"
permalink: "docs/user-guide/rules/http-cache/index.html"
title: "HTTP Cache"
tocTitle: "rules"
---
# HTTP Cache (`http-cache`)

`http-cache` verifies that the page and all its resources follow a good,
sustainable caching strategy.

## Why is this important?

You can easily improve the performance of your website by having a
right caching strategy:

* Shorter load times
* Less bandwidth required
* Reduce server costs
* Have a predictable behavior across browsers

Currently about ~50% of resources on the web can't be cached due to
their configuration:

![Cacheable Resources][maxage0 image]

[Source: http archive][maxage0]

## What does the rule check?

This rule checks the configuration of the `cache-control` header to
validate that the page and resources have a good caching strategy:

* all requests have a `Cache-Control` header, otherwise the behavior
  can change from browser to browser
* main page should have a short cache (<= 3 minutes) or not cache at all
* static resources such as JavaScript, CSS, images, etc.:
  * have a long expiry value (>= 1 year)
  * use the `immutable` directive
  * follow some kind of filename/path based revving, and not
    one based on query string parameters (see: [problems with
    proxys][revving files])

The built-in regular expression for file revving are:

```regexp
/\/(\w|-|_)+\.\w+\.\w+$/i,
/\/(\w|-|_)+-\w+\.\w+$/i
```

This will match urls like the following:

```text
https://example.com/assets/script.12345.js
https://example.com/assets/styles-12345.css
```

## Can the rule be configured?

Yes, you can configure:

* the `max-age` values for the page and resources
* the regular expressions used to know if the file is immutable or not

### `max-age`

By default the recommended value for the page is `Cache-Control: no-cache`
or a `max-age` equal or less to 3 minutes. For the resources `max-age` should
be greater or equal to 1 year. You can change this as follows:

```json
"http-cache": ["error", {
    "maxAgeTarget": 300, // 5 minutes in seconds
    "maxAgeResource": 1576800 // 6 months in seconds
}]
```

### Custom regular expressions for revving files

If none on the built-in regular expressions work for your use case, you
can provide your own via the `revvingPatterns` property. This property
accepts an `Array` of escaped `RegExp`:

```json
"http-cache": ["error", {
    "revvingPatterns": ["\\/\\d+\\/\\w+\\.\\w{1,3}"]
}]
```

Also pay attention to the escaping. The example above will validate
that static resources follow a convention similar to the following
one:

```text
https://example.com/assets/12345/script.js
https://example.com/assets/12345/styles.css
```

### Examples that **trigger** the rule

`Cache-Control` header is not sent:

```text
HTTP/... 200 OK

Content-Type: text/javascript; charset=utf-8
...
```

An invalid directive:

```text
HTTP/... 200 OK

Cache-Control: invalid directive
...
```

An invalid directive-value pair:

```text
HTTP/... 200 OK

Cache-Control: max-age=abc
...
```

Uses a directive that is not recommended:

```text
HTTP/... 200 OK

Cache-Control: max-age=3600, must-revalidate
...
```

The combination of directives doesn't make sense:

```text
HTTP/... 200 OK

Cache-Control: no-cache, max-age=3600
...
```

The page has a `max-age` value greater than 5 minutes

```text
HTTP/... 200 OK

Content-Type: text/html; charset=utf-8
Cache-Control: max-age=300
...
```

A static resource has a `max-age` value less than 1 year:

```text
HTTP/... 200 OK

Content-Type: text/javascript; charset=utf-8
Cache-Control: max-age=3600
...
```

A static resource doesn't have the `immutable` directive:

```text
HTTP/... 200 OK

Content-Type: text/javascript; charset=utf-8
Cache-Control: max-age=31536000
...
```

### Examples that **pass** the rule

A static resource with `max-age` greater than 1 year and the `immutable`
directive:

```text
HTTP/... 200 OK

Content-Type: text/javascript; charset=utf-8
Cache-Control: max-age=31536000, immutable
...
```

A page with `no-cache` :

```text
HTTP/... 200 OK

Content-Type: text/html; charset=utf-8
Cache-Control: no-cache
...
```

## Further Reading

* [caching best practices][caching best practices]
* [Cache-Control: immutable][cache-control immutable]
* [HTTP Caching - Google Web Fundamentals][google http caching]
* [How Well Do You Know the Web? (Google I/O'17, video)][how well you know the web]

<!-- Link labels: -->

[cache-control immutable]: https://bitsup.blogspot.ro/2016/05/cache-control-immutable.html
[caching best practices]: https://jakearchibald.com/2016/caching-best-practices/
[google http caching]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching
[how well you know the web]: https://youtu.be/vAgKZoGIvqs?t=12m20s
[maxage0]: http://httparchive.org/about.php#maxage0
[maxage0 image]: https://chart.googleapis.com/chart?chd=t:-1|49,51,100,100,51,51,51,51,51,51,100,50,50,50,50,50,50,50,51,51,51,50,50,50&chxl=0:|+%7C12%2F16%7C+%7C1%2F17%7C+%7C2%2F17%7C+%7C3%2F17%7C+%7C4%2F17%7C+%7C5%2F17%7C+%7C6%2F17%7C+%7C7%2F17%7C+%7C8%2F17%7C+%7C9%2F17%7C+%7C10%2F17%7C+%7C11%2F17&chxt=x&chs=600x300&cht=lxy&chco=184852&chxs=0,676767,11.5,0,lt,676767&chxtc=0,8&chm=N**+%,184852,0,1::2,12,,h::8&chds=0,100,0,100&chts=184852,24&chtt=Cacheable+Resources&chls=2&chma=5,5,5,25
[revving files]: https://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/
