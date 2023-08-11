---
title: YPM
icon: lightbulb
---

YPM is short for yock package manager, which used for managing modules such as install, uninstall and etc. Except the main function of managing modules, ypm also can manage yock's cache from downloading or temporary files.

## Get Started

## Install the module

Use: `ypm install github.tag/ansurfen/ark@0.0.2` to install a module named ark, creates and writes modules.json in working directory.
Parameter: `-w`, disabled to write new module installed modules.json if true.

## Uninstall the module

Use: `ypm uninstall github.tag/ansurfen/ark@0.0.2` to uninstall a module named ark.
Parameter: `-w`, disabled to upgrade modules.json if true.

## Cache

cache is designed for caching file from rmeote downloading, implemented by keyed value structure. Its usage is quite extensive and frequent, especially in ypm, such as instaling module, fetch files. These files are stored and mapped by url. If you want to directly use it, see `fetch` table in lua script.

Because of cache, an issue occurs. Sometime, if key (url) exists, fetch will abandon to download with active. If you want to break the limit, it's required to release cache by hand. The following command shows basic operation to clear cache.

### Clear all cache

```bash
ypm cache free -f
```
It's the fastest and ugliest and most avaiable method, and will destory all cache.

### Clear specified cache

```bash
# lists all cache
ypm cache ls
# a possible output:
# Name      Level Dir      Expire  UpdateAt
# public    2     qPgqEOKr 604800s 2023-08-08 08:52:03 
# private   2     hwhlnKKm 0s      2023-08-01 00:32:23 
# protected 2     oKfvARgx 0s      2023-08-01 00:32:23

# here we only pay attention to Name field, and it's obvious there three different cache in default case.

# then, we can continue to ls command to list specified cache content.
# fetch or `ypm install` are stored at the public cache in default.
ypm cache ls public
# a possible output:
# https://github.com/ansurfen/python-eval/archive/refs/tags/1.0.0.zip     IXNLwKMcqnoZjxdsqcPkTzePbMQuMnJB.zip

# removes specified keyed value at the public cache, supports prefix mattching for key, and file that corresponds value also will be deleted.
ypm cache rm public https://github.com/ansurfen/python-eval/archive/refs/tags/1.0.0
```