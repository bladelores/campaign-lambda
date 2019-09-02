import { APIGatewayProxyResult } from 'aws-lambda';

const controller = require('./handler');

describe('health/health.controller', () => {
    describe('status()', () => {
        it('Should response with success', () => {
            const expectedResponse = {
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                }),
            };

            controller.status(null, null, (err: Error, response: APIGatewayProxyResult) => {
                expect(err)
                    .toEqual(null);
                expect(response)
                    .toEqual(expectedResponse);
            });
        });
    });
});
