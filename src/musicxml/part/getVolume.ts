export const getVolume = (
  xmlDoc: XMLDocument,
  partNode: Node,
  nsResolver: XPathNSResolver
): number => {
  const volume = xmlDoc.evaluate(
    "midi-instrument/volume",
    partNode,
    nsResolver,
    XPathResult.NUMBER_TYPE,
    null
  ).numberValue;

  if (!isNaN(volume)) {
    // velocity = (tmp / 100) * 127;
    return volume;
  }
  return 70;
};
