# node-pushedover

Send a pushover notification when a task finishes

### install

    npm install -g pushedover

Expects a `.pushedoverrc` file in your home folder, in the style of:

```json
{
  "user": "yourusertoken",
  "token": "yourapplicationtoken"
}
```

### usage

```sh
# waits until task is done, sends stdout and stderr preview to your phone
pushedover node longrunningtask.js
```
