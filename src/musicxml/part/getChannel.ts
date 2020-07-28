export const getChannel = (
  xmlDoc: XMLDocument,
  partNode: Node,
  nsResolver: XPathNSResolver
): number => {
  const channel = xmlDoc.evaluate(
    "midi-instrument/midi-channel",
    partNode,
    nsResolver,
    XPathResult.NUMBER_TYPE,
    null
  ).numberValue;

  if (!isNaN(channel)) {
    return channel - 1;
  }

  return 0;
};
