import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './layout.scss'

const Header = () => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Gatsby
                </Link>
            </h1>
        </div>
    </div>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string
    }
    children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
    public render() {
        return (
            <>
                <Helmet
                    title="Dorfnetter Server"
                    meta={[
                        {name: 'description', content: 'Dorfnetter Server'},
                        {
                            name: 'keywords',
                            content: 'development, typescript, java, vienna, Dominik Dorfstetter, Dorfstetter'
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
                    }}
                >
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default DefaultLayout
