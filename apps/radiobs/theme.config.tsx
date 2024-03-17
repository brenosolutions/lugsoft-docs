import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    const cleanPath = asPath.split('#')[0];
    const directory = cleanPath.split('/')[1];
    const titleTemplate = directory !== '' ? '%s – RádioBS' : 'Documentação - RádioBS';
    return { titleTemplate }
  },

  head: () => {
    return (
      <meta httpEquiv="Content-Language" content='pt' />
    )
  },

  logo: <span><b>RádioBS</b> - V5.0.7</span>,

  project: {
    link: 'https://github.com/brenosolutions/lugsoft-docs',
  },

  docsRepositoryBase: 'https://github.com/brenosolutions/lugsoft-docs/tree/main/',

  toc: {
    title: "Nesta Página",
    backToTop: true
  },

  search: {
    placeholder: 'Pesquisar Documentação...',
  },

  editLink: {
    text: 'Edite essa página'
  },

  feedback: {
    content: 'Feedback'
  },

  gitTimestamp: ({ timestamp }) => {
    const month = timestamp.toLocaleString("default", { month: "long" })
    const date = timestamp.getDate()
    const year = timestamp.getFullYear()
    return (<> Última atualização em {month} {date}, {year} </>)
  },

  footer: {
    text: () => {
      return (
        <span>
          © Documentação RádioBS | Desenvolvido por <b><a href={`https://www.lugsoft.com.br`} target="_blank" rel="noopener" className='font-bold'> Lugosft </a></b>
        </span>
      );
    },
  },

}

export default config
