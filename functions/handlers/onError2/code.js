const e = Context.getLastStateError();
Reactions.sendText({ text: "git-обработчик-2: " + e?.code });