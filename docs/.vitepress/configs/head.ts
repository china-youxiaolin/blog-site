import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ["link", { rel: "icon", href: "/my-blog/avator.svg", crossorigin: "" }],
  ["meta", { name: "referrer", content: "never" }],
  ['meta', { name: 'theme-color', content: '#7eb3ea' }],
]