import * as React from 'react';
import {graphql} from 'gatsby';

const Layout = require('@layouts/layout').default;
import './index.scss';

export interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
            }
        }
    }
}

export default class extends React.Component<IndexPageProps, {}> {
    location = {
        pathname: 'index'
    }

    constructor(props: IndexPageProps, context: any) {
        super(props, context)
    }

    public render() {
        return (
            <>
                <Layout location={this.location}>
                    <p className="lead paragraph">
                        👋, ich bin <span className="highlight">Dominik</span>, ich bin ein 31 jähriger Programmierer aus
                        Wien.
                        <br/>Ich hab ein 💙 für OpenSource.
                        <br/>Diese Seite wurde mit Gatsby gebaut und kann auf&nbsp;
                        <a href={"https://github.com/dominikdorfstetter/dorfnetter"} rel="noopener noreferrer" target={"_blank"}>Github</a>
                        &nbsp;angesehen werden.
                    </p>
                    <hr/>
                    <h3>Interessen</h3>
                    <p className="lead paragraph">Angular, Flutter, NestJS, Spring-Boot, Apache Kafka & Microservices.</p>
                    <hr/>
                    <h3>Social</h3>
                    <div className="social-container">
                        <a className="button one" rel="noopener noreferrer" href="https://github.com/dominikdorfstetter"
                           target="_blank">Github</a>
                        <a className="button one" rel="noopener noreferrer" href="https://twitter.com/goto_shell" target="_blank">Twitter</a>
                        <a className="button one" rel="noopener noreferrer" href="https://keybase.io/dorfstetter" target="_blank">Keybase</a>
                    </div>
                    <hr/>
                    <h3>Projekte</h3>
                    <p className="lead">Happy Dogs Proto - Eine Karte für Hundefreunde aus Wien. <a
                        target="_blank"
                        href="/happy_dogs/">Link</a>
                    </p>
                </Layout>
            </>
        )
    }
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }`;
