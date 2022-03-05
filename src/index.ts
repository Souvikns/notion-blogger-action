import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {

}

run().then().catch(e => {
    console.log('Error: ', e);
    core.setFailed(e.message);
})