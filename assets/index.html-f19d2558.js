import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,e,f as o}from"./app-0d28c3d4.js";const r={},a=e("p",null,[o("yock will load local configuration file to prepare for formal running before it executes script, for example, indicating how the logger works, launching the daemon and knowing port the daemon binds, and none of this is possible without configuration file support. You can view yock.yaml file below "),e("code",null,"{HomeDir}/.yock"),o(" folder, which is yock's configuration and except it, yockd.yaml which rules how daemon launches and runs also is below."),e("br"),o(" There is nothing wrong with the global configuration for application which is infrequent in launching and updating, but there is no doubt it's a total disaster for interpreter like yock. Imaging an occasion, where it requires different config environment to run two script at a time, this for configuration write in file, will undoubtedly cause data risk, and even cause multi-writer permission to deny problems. To solve them, yock introduced option function, which dynamically modifies the configuration while the script is running.")],-1),c=e("p",null,"So far, you've seen the global configuration based on file and the local based on option function. We'll introduce concrete details by step from the next section.",-1),l=[a,c];function s(d,u){return i(),t("div",null,l)}const p=n(r,[["render",s],["__file","index.html.vue"]]);export{p as default};
