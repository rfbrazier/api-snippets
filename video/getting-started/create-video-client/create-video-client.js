// If you are requiring twilio-video from CommonJS,
//
//     const Video = require('twilio-video');
//
//  If you are including twilio-video.js from a <script> tag,
//
//     const Video = Twilio.Video;
//
// Generate your own `accessToken` in the Twilio Console here: https://www.twilio.com/console/video/dev-tools/testing-tools

const client = new Video.Client(accessToken);
