import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';

const configPage = {
    siteName: 'RádioBS',
    siteLogo: (
        <span>
            <b>RádioBS</b> - v5.2.0
        </span>
    ),
    siteURL: 'https://docs.lugsoft.com.br/radiobs',
    projectLink: 'https://github.com/brenosolutions/lugsoft-docs',
    repDocs: 'https://github.com/brenosolutions/lugsoft-docs/tree/main/apps/radiobs'
};

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const { pathname } = useRouter();
        const titleTemplate =
            pathname !== '/'
                ? `%s – ${configPage.siteName}`
                : `Documentação - ${configPage.siteName}`;
        return { titleTemplate };
    },

    head: () => {
        const { pathname, basePath } = useRouter();
        const url = configPage.siteURL + pathname;
        return (
            <>
                <meta httpEquiv="Content-Language" content="pt" />
                <meta property="og:url" content={url} />
                <link rel="canonical" href={url} />
                <link rel="icon" href={`${basePath}/favicon.ico`} />
            </>
        );
    },

    logo: configPage.siteLogo,

    project: {
        // link: configPage.projectLink,
    },

    docsRepositoryBase: configPage.repDocs,

    toc: {
        title: 'SEÇÕES DA PÁGINA',
        backToTop: true
    },

    search: {
        placeholder: 'Pesquisar Documentação...'
    },

    editLink: {
        text: 'Editar Página'
    },

    feedback: {
        content: false
    },

    gitTimestamp: ({ timestamp }) => {
        const month = timestamp.toLocaleString('default', { month: 'long' });
        const date = timestamp.getDate();
        const year = timestamp.getFullYear();
        return (
            <>
                {' '}
                Última atualização em {date} de {month} de {year}{' '}
            </>
        );
    },

    footer: {
        text: () => {
            return (
                <span>
                    © Documentação {configPage.siteName} | Desenvolvido por{' '}
                    <b>
                        <a
                            href={`https://www.lugsoft.com.br`}
                            target="_blank"
                            rel="noopener"
                            className="font-bold"
                        >
                            {' '}
                            Lugosft{' '}
                        </a>
                    </b>
                </span>
            );
        }
    }
};

export default config;
