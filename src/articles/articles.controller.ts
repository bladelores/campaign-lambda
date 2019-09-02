import { Controller, Resource, S3Code, captureAWSClient, IResponseResult } from 'lambda-core';
import { S3, AWSError } from 'aws-sdk';
import {
    IArticle,
    IArticleGetResponse,
    IArticlePostRequest,
    IArticleGetQuery,
} from 'example-interface';

export class ArticleController extends Controller {
    private data: IArticle[];
    private storage: S3;

    constructor() {
        super();
        this.storage = captureAWSClient(new S3());
    }

    protected async initialize() {
        const { Body } = await this.storage.getObject({
            Bucket: process.env.BUCKET as string,
            Key: 'data.json',
        }).promise().catch((err: AWSError) => {
            if (err.code === S3Code.NO_KEY) {
                return { Body: '[]' };
            }

            throw err;
        });

        this.data = JSON.parse(Body as string);
    }

    @Resource()
    public async get(): Promise<IResponseResult> {
        const query = this.getQueryParams<IArticleGetQuery>();
        const data = this.getArticles(query);
        return this.getResponse().ok<IArticleGetResponse[]>(data);

    }

    @Resource()
    public async post(): Promise<IResponseResult> {
        const article = this.getBody<IArticlePostRequest[]>() as IArticlePostRequest[];
        this.data = this.data.concat(article);

        return this.saveArticles(JSON.stringify(this.data))
            .then(() => this.getResponse().created());
    }

    private async saveArticles(data: string): Promise<S3.PutObjectOutput> {
        return this.storage.putObject({
            Bucket: process.env.BUCKET as string,
            Key: 'data.json',
            Body: data,
        }).promise();
    }

    private getArticles(query: IArticleGetQuery | null) {
        if (!query) {
            return this.data;
        }

        return this.data.filter(({ title, author }) => {
            const titleMatch = query.title ? title.search(query.title) > -1 : true;
            const authorMatch = query.author ? author.search(query.author) > -1 : true;

            return titleMatch && authorMatch;
        });
    }
}
