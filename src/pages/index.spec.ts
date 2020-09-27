import App, {IndexPageProps} from './index';

const props = {
    data: {
        site: {
            siteMetadata: {
                title: 'app'
            }
        }
    }
} as IndexPageProps;

describe('App', () => {
    let app: any;

    beforeEach(() => {
       app = new App(props, 'test');
    });

    it('should be defined', () => {
        expect(app).toBeDefined();
    })
});
