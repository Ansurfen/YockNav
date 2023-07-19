module.exports = {
    title: 'Yock wiki',
    description: 'Yock official wiki',
    base: '/YockNav/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Yock',
            description: 'Yock is a solution of cross platform to compose distributed build stream.'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Yock',
            description: 'Yock是一个跨平台分布式构建流编排方案。'
        }
    },
    themeConfig: {
        logo: '/favicon.ico',
        darkmode: 'auto-switch',
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                nav: [
                    { text: 'Guide', link: '/guide/' },
                    { text: 'API', link: '/api/' },
                    { text: 'Module', link: '/zh/module' },
                    { text: 'About', link: '/about/' },
                    { text: 'Github', link: 'https://github.com/Ansurfen/yock' }
                ],
                sidebar: {
                    '/guide/': [
                        'introduce',
                        'gnu',
                        'pipeline',
                        'concurrency',
                        'ypm',
                        'module',
                        'sdk',
                    ],
                    '/api/': [],
                    '/about/': []
                },
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    { text: '指南', link: '/zh/guide/' },
                    { text: 'API', link: '/zh/api/' },
                    { text: '模块', link: '/zh/module' },
                    { text: '关于', link: '/zh/about/' },
                    { text: 'Github', link: 'https://github.com/Ansurfen/yock' }
                ]
            }
        }
    }
}