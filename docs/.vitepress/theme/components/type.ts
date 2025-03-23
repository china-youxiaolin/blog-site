export interface INavLink {
  icon?: string | { svg: string }
  badge?:
    string
    |
    {
      text?: string
      type?: 'info' | "tip" | 'warning' | 'danger'
    }
  title: string
  desc?: string
  link: string
}

export interface INavData {
  title: string
  items: INavLink[]
}