import renderer from "react-test-renderer";
import React from 'react';
import {IndexPageProps} from './index';
import Index from './index';
import {StaticQuery} from 'gatsby';

const props = {
    data: {
        site: {
            siteMetadata: {
                title: 'app'
            }
        }
    }
} as IndexPageProps;

describe('Index', () => {

    beforeEach(() => {
        // @ts-ignore
        (StaticQuery as any).mockImplementationOnce(({ render }) =>
            render(props.data)
        )
    })

    it("renders correctly", () => {
        const tree = renderer.create(<Index data={props.data} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
