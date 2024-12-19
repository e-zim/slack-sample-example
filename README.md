# Slack GitHub Actions Builder

this app implements a sample workflow for `slackapi/slack-github-action`

```sh
$ slack install
$ slack trigger create
$ curl -X POST "https://hooks.slack.com/triggers/T0123456789/8591250761076/3eafdb8bac2ee3a79693e7dd68959e77" \
    --header "Content-Type: application/json; charset=utf-8" \
    --data '{"errors":"","runner":"github-actions","status":"done","task":"Downstream staging rollout"}'
```
