const { exec } = require('youtube-dl-exec');

// YouTube video URL
const url = 'https://www.youtube.com/watch?v=VIDEO_ID';

// Download subtitles
async function downloadSubtitles() {
    try {
        const subtitles = await exec(url, ['--write-sub', '--skip-download', '--sub-lang', 'en', '--sub-format', 'vtt']);
        console.log('Subtitles downloaded:', subtitles);
    } catch (error) {
        console.error('Error downloading subtitles:', error);
    }
}

downloadSubtitles();
