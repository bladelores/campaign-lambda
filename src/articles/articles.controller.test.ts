import { APIGatewayProxyResult } from 'aws-lambda';

import * as sinon from 'sinon';
import { ArticleController } from './articles.controller';

const data = [
    {
        title: '11',
        author: 'aa',
        url: 'http',
    },
    {
        title: '22',
        author: 'aa',
        url: '',
    },
    {
        title: '333',
        author: 'bbbbb',
        url: '',
    },
];

describe('articles/article.controller', () => {
    let controller: any;
    let sandbox: sinon.SinonSandbox;

    describe('initialize()', () => {
        beforeAll(() => {
            sandbox = sinon.createSandbox();
            controller = new ArticleController();

            (<any>sandbox.stub(controller.storage, 'getObject')).returns({
                promise: () => Promise.reject({ code: 'NoSuchKey' }),
            });
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('Should not throw if data does not exist', () => {
            return controller
                .initialize()
                .catch((err: any) => expect(err).toBeUndefined());
        });

        it('Should throw on S3 error', () => {
            (<any>sandbox.stub(controller.storage, 'getObject')).returns({
                promise: () => Promise.reject({ code: 'Internal error' }),
            });

            return controller
                .initialize()
                .catch((err: any) => expect(err).toEqual({ code: 'Internal error' }));
        });
    });

    describe('get()', () => {
        beforeAll(() => {
            sandbox = sinon.createSandbox();
            controller = new ArticleController();

            sandbox.stub(<any>ArticleController.prototype, 'saveArticles').resolves();
            sandbox.stub(<any>ArticleController.prototype, 'initialize').resolves();
            controller.data = data;
        });

        it('Should return all available data', () => {
            const expectedResponse = {
                statusCode: 200,
                body: JSON.stringify(data),
            };

            controller.get({}, null, (err: Error, response: APIGatewayProxyResult) => {
                expect(err).toEqual(null);
                expect(response).toEqual(expectedResponse);
            });
        });

        it('Should filter by title', () => {
            const queryStringParameters = { title: '11' };
            const body = data.filter(({ title }) => title.search(queryStringParameters.title) > -1);
            const expectedResponse = {
                statusCode: 200,
                body: JSON.stringify(body),
            };

            controller.get({ queryStringParameters }, null, (err: Error, response: APIGatewayProxyResult) => {
                expect(err).toEqual(null);
                expect(response).toEqual(expectedResponse);
            });
        });

        it('Should filter by title and author', () => {
            const queryStringParameters = {
                title: '11',
                author: 'aa',
            };
            const body = data.filter(({ title, author }) =>
                title.search(queryStringParameters.title) > -1 && author.search(queryStringParameters.author) > -1);
            const expectedResponse = {
                statusCode: 200,
                body: JSON.stringify(body),
            };

            controller.get({ queryStringParameters }, null, (err: Error, response: APIGatewayProxyResult) => {
                expect(err).toEqual(null);
                expect(response).toEqual(expectedResponse);
            });
        });

        afterAll(() => {
            sandbox.restore();
        });
    });

    describe('post()', () => {
        beforeAll(() => {
            sandbox = sinon.createSandbox();
            controller = new ArticleController();

            sandbox.stub(<any>ArticleController.prototype, 'saveArticles').resolves();
            sandbox.stub(<any>ArticleController.prototype, 'initialize').resolves();
            controller.data = data;
        });

        it('Should create new article', () => {
            const reqBody = [{
                title: '111',
                author: '22222',
                url: '',
            }];
            const expectedResponse = {
                statusCode: 201,
                body: JSON.stringify({}),
            };

            controller.post({ body: JSON.stringify(reqBody) }, null, (err: Error, response: APIGatewayProxyResult) => {
                expect(err).toEqual(null);
                expect(response).toEqual(expectedResponse);
            });
        });

        afterAll(() => {
            sandbox.restore();
        });
    });
});
