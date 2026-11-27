const e = Context.getLastStateError();
Reactions.sendText({ text: "git-обработчик: " + e?.code + " в " + e?.nodeId });