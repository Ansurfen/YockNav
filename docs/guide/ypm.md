---
title: yock package-manager tool
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

## Create a new module

Use: `ypm init test` to create a module called test
Parameter: `-d` Boolean type, if specified, the created new module is created in a subdirectory of the current directory

## Complete code hints

Use: `ypm tidy`

## Install the module

Use: `ypm install ark` to install a module named ark
Parameter: `-g` Boolean type, if specified, the installed module is mounted in the global directory of yock, otherwise installed in the current working directory

## Unload the module

Use: `ypm uninstall ark` to uninstall a module named ark
Parameter: `-g` Boolean type, if specified, unload modules mounted in yock's global directory, otherwise uninstall modules in the current working directory

## Add modules

Use: `ypm add ark` to add the ark module to the current project

## Delete the module

Use: `ypm rm ark` to remove the ark module from the current project

## Caching

#### lists the caches

Use: `ypm cache ls` to list all cache information present in the directory

#### Release the cache

Use: `ypm cache free` to release the timed cache
Parameter: 
`-f` Boolean type, which frees all caches below level (default to 2), including those with no time limit
`-l` Integer type, set the level level

## Proxy

The address of the ypm pull module

## Add a proxy
Use: `ypm proxy add gitlab.lua` to add the proxy file to the environment and assign the proxy identifier based on the information in it

## Remove the proxy
Use: `ypm proxy del github` to remove the proxy named github

## Create a proxy
Use `ypm proxy new gitlab` to create a proxy named gitlab, which will generate a proxy file in the working directory
Parameter: 
`-a`: String type, sets the author's name
`-l`: String type, sets the open source protocol for proxy files
