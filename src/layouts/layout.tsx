import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@layouts/footer";
import Header from "@layouts/header";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string
    },
    children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
    public render() {
        return (
            <>
                <Helmet
                    title="Dorfnetter"
                    meta={[
                        {name: 'description', content: 'Dorfnetter Server'},
                        {
                            name: 'keywords',
                            content: 'Development, Gatsby, Typescript, Java, Vienna, Dominik Dorfstetter'
                        },
                    ]}
                />
                <Header/>
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 0,
                        marginBottom: '60px'
                    }}
                >
                    {this.props.children}
                </div>
                <Footer />
            </>
        )
    }
}

export default DefaultLayout
