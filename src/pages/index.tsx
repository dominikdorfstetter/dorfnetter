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
                        👋, I am <span className="highlight">Dominik</span>, I am a 31 years old programmer from
                        Vienna.
                        <br/>With a 💙 for OpenSource Software.
                        <br/>This page is built with Gatsby and can be found & forked on&nbsp;
                        <a href={"https://github.com/dominikdorfstetter/dorfnetter"} target={"_blank"}>Github</a>.
                        <br/>
                        <hr/>
                        <h3>Interests</h3>
                        Angular, Flutter, NestJS, Spring-Boot, Apache Kafka & Microservices.
                    </p>
                    <hr/>
                    <h3>Social</h3>
                    <p className="lead paragraph social">
                        <span className="social-container">
                            <a className="button one" href="https://github.com/dominikdorfstetter" target="_blank">Github</a>
                            <a className="button one" href="https://twitter.com/goto_shell" target="_blank">Twitter</a>
                            <a className="button one" href="https://keybase.io/dorfstetter" target="_blank">Keybase</a>
                        </span>
                    </p>
                    <hr/>
                    <h3>Projects</h3>
                    <p className="lead">Happy Dogs Proto - A map for dog owners in Vienna. <a
                        target="_blank"
                        href="/happy_dogs/">Visit</a>
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
