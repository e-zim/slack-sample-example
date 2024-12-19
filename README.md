# Slack GitHub Actions Releaser

this app implements a sample workflow for `slackapi/slack-github-action`

```sh
$ slack install
$ slack trigger create
$ curl -X POST "https://hooks.slack.com/triggers/T0123456789/8591250761076/3eafdb8bac2ee3a79693e7dd68959e77" \
    --header "Content-Type: application/json; charset=utf-8" \
    --data '{"draft_channel":"C0123456789","release_notes":"examples","release_repository":"zimeg/slacks","release_version":"tbd"}'
```
