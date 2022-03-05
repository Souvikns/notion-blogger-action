import * as core from '@actions/core';
import * as github from '@actions/github';
import NotionBlogger from 'notion-blogger';

const token = core.getInput('token') || process.env.GH_PAT || process.env.GITHUB_TOKEN;
const notionApiKey = process.env.NOTION_API_KEY || core.getInput('NOTION_API_KEY');
const notionDatabase = process.env.NOTION_DATABASE || core.getInput('NOTION_DATABASE');
const serviceApiKeys = process.env.SERVICE_API_KEYS || core.getInput('SERVICE_API_KEYS');


async function run() {
    const notionBlogger = new NotionBlogger({
        notion: {
            api_key: notionApiKey,
            database_id: notionDatabase
        }
    })

    await notionBlogger.publish(JSON.parse(serviceApiKeys));
}

run().then().catch(e => {
    console.log('Error: ', e);
    core.setFailed(e.message);
})