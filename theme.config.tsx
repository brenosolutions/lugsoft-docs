import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {

  useNextSeoProps() {
    const { asPath } = useRouter();
    const titleTemplate = asPath !== '/' ? '%s – RádioBS' : 'Documentação – RádioBS'
    return { titleTemplate }
  },

  logo: <span><b>RádioBS</b> - v5.0.7</span>,
  project: {
    link: 'https://github.com/brenosolutions/lugsoft-docs',
  },
  docsRepositoryBase: 'https://github.com/brenosolutions/lugsoft-docs/tree/main/',

  search: {
    placeholder: 'Pesquisar Documentação...',
  },
  editLink: {
    text: 'Edite essa página'
  },
  feedback: {
    content: 'Feedback'
  },

  footer: {
    text: 'Documentação RádioBS',
  },


}

export default config
